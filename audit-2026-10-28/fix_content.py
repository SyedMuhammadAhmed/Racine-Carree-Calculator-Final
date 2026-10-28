from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parent.parent
def edit(path,fn):
    p=ROOT/path;p.write_text(fn(p.read_text(encoding='utf-8')),encoding='utf-8',newline='\n')

# Replace unqualified precision promises in the reviewed English and French copy.
replacements={
 'exact decimal results':'decimal approximations', 'exact decimal result':'decimal approximation',
 'exact decimal values':'decimal approximations','exact decimal roots':'approximate decimal roots',
 'exact decimals':'decimal approximations','exact decimal':'decimal approximation',
 'Exact Decimals':'Decimal Approximations', 'Arbitrary Precision & Step Workings':'Rounded Results & Factor-Based Steps',
 'résultats décimaux exacts':'approximations décimales','résultat décimal exact':'résultat décimal arrondi',
 'Décimales Exactes':'Approximations décimales','en précision arbitraire':'dans la plage d’entiers prise en charge',
 'full decimal precision':'up to 12 significant digits',
}
for folder in ['src','theme']:
 for p in (ROOT/folder).rglob('*'):
  if p.suffix in ['.astro','.ts','.json']:
   def cleanup(s):
    for old,new in replacements.items():s=s.replace(old,new)
    return s
   edit(p.relative_to(ROOT),cleanup)

help_text={
 'en':'Enter a number or fraction (9/16). A dot or comma is a decimal separator; do not use thousands separators.',
 'fr':'Saisissez un nombre ou une fraction (9/16). Utilisez un point ou une virgule décimale, sans séparateur de milliers.',
 'es':'Introduce un número o una fracción (9/16). Usa punto o coma decimal, sin separadores de miles.',
 'de':'Gib eine Zahl oder einen Bruch (9/16) ein. Punkt oder Komma als Dezimalzeichen verwenden, ohne Tausendertrennzeichen.',
 'it':'Inserisci un numero o una frazione (9/16). Usa il punto o la virgola decimale, senza separatori delle migliaia.',
 'pt':'Insira um número ou fração (9/16). Use ponto ou vírgula decimal, sem separadores de milhares.',
 'ru':'Введите число или дробь (9/16). Используйте точку или запятую для десятичной части, без разделителей тысяч.',
 'pl':'Wpisz liczbę lub ułamek (9/16). Użyj kropki lub przecinka dziesiętnego, bez separatorów tysięcy.',
 'sv':'Ange ett tal eller ett bråk (9/16). Använd punkt eller komma som decimaltecken, utan tusentalsavgränsare.',
 'tr':'Bir sayı veya kesir (9/16) girin. Ondalık ayırıcı olarak nokta veya virgül kullanın; binlik ayırıcı kullanmayın.',
 'id':'Masukkan angka atau pecahan (9/16). Gunakan titik atau koma desimal, tanpa pemisah ribuan.',
 'ms':'Masukkan nombor atau pecahan (9/16). Gunakan titik atau koma perpuluhan, tanpa pemisah ribuan.',
 'ar':'أدخل عدداً أو كسراً مثل 9/16 بالأرقام 0–9. استخدم النقطة أو الفاصلة العشرية دون فواصل الآلاف.',
 'hi':'संख्या या भिन्न (9/16) को 0–9 अंकों में लिखें। दशमलव के लिए बिंदु या कॉमा लगाएँ; हजार का विभाजक न लगाएँ।',
 'bn':'0–9 অঙ্কে একটি সংখ্যা বা ভগ্নাংশ (9/16) লিখুন। দশমিকের জন্য বিন্দু বা কমা ব্যবহার করুন, হাজারের বিভাজক নয়।',
 'ja':'数値または分数（9/16）を入力してください。小数点にはピリオドまたはコンマを使い、桁区切りは入れないでください。',
 'ko':'숫자 또는 분수(9/16)를 입력하세요. 소수점은 점이나 쉼표를 사용하고 천 단위 구분자는 넣지 마세요.',
 'bg':'Въведете число или дроб (9/16). Използвайте точка или запетая за десетичен знак, без разделители за хиляди.',
}
for locale,help in help_text.items():
 p=ROOT/f'theme/i18n/locales/{locale}.json';j=json.loads(p.read_text(encoding='utf-8'));j['calc']['inputHelp']=help
 if locale=='en':
  j['site']={'title':'Square Root Calculator — Simplified Radicals & Steps','description':'Calculate square roots with decimal approximations, simplified radicals for supported integers, and worked steps. Free, with no sign-up.'}
  j['hero']['title']={'part1':'Square Root','part2':'Calculator'}
  j['hero']['subtitle']='Calculate square roots of numbers or fractions. See rounded decimal results and factor-based simplification for supported integers. Free, with no sign-up.'
  j['cbrt']['title']='Cube Root Calculator — Negative Numbers & Steps'
  j['cbrt']['hero']['part1']='Cube Root'
  j['nth']['title']='Nth Root Calculator — Integer Degrees & Steps'
  j['nth']['hero']['subtitle']='Calculate real roots with integer degrees from 1 to 10,000. Get rounded results and factor-based steps for supported integers.'
  j['calc']['squareRoot']['desc']='Find the principal square root of a number or fraction'
 if locale=='fr':
  j['site']={'title':'Calculatrice de racine carrée — Résultat et étapes','description':'Calculez une racine carrée, obtenez une approximation décimale et simplifiez les radicaux pris en charge. Gratuit, avec étapes détaillées.'}
  j['hero']['title']={'part1':'Calculatrice de','part2':'racine carrée'}
  j['hero']['subtitle']='Calculez la racine carrée d’un nombre ou d’une fraction. Obtenez une approximation décimale et une simplification pour les entiers pris en charge. Gratuit et sans inscription.'
  j['calc']['squareRoot']['desc']='Racine carrée principale d’un nombre ou d’une fraction'
  for key,name in [('cbrt','racine cubique'),('nth','racine n-ième')]:
   j[key]['hero']['part1']='Calculatrice de';j[key]['hero']['part2']=name
  j['cbrt']['title']='Calculatrice de racine cubique — Résultat et étapes'
  j['nth']['title']='Calculatrice de racine n-ième — Indices entiers'
  j['nth']['description']='Calculez des racines réelles d’indice entier de 1 à 10 000. Obtenez une approximation décimale et des étapes pour les entiers pris en charge.'
  j['nth']['hero']['subtitle']='Calculez une racine réelle d’indice entier de 1 à 10 000, avec approximation décimale et étapes pour les entiers pris en charge.'
  j['nth']['calc']['tooltipDegree']='Indice entier de 1 à 10 000 : 2 pour une racine carrée, 3 pour une racine cubique.'
  j['chart']['hero']['part1']='Tableau des';j['chart']['hero']['part2']='racines carrées'
  j['perfect']['hero']['part1']='Vérificateur de';j['perfect']['hero']['part2']='carrés parfaits'
  j['cube']['hero']['part1']='Vérificateur de';j['cube']['hero']['part2']='cubes parfaits'
  j['nav']['cbrt']='Racine cubique';j['nav']['nth']='Racine n-ième';j['nav']['chart']='Tableau des racines carrées'
 p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

# The actual fields now accept the advertised fractions and comma decimals.
paths=['src/components/Calculator.astro','src/pages/racine-cubique-calculator.astro','src/pages/nth-root-calculator.astro','src/pages/[locale]/racine-cubique-calculator.astro','src/pages/[locale]/nth-root-calculator.astro']
for path in paths:
 def inputs(s):
  s=re.sub(r'<input type="number" inputmode="decimal" id="(sqrtInput|cbrtInput|nthValue)"',r'<input type="text" inputmode="text" id="\1"',s)
  s=s.replace('placeholder="e.g. 144"','placeholder="144, 2.25, 9/16"').replace('placeholder="e.g. 27"','placeholder="27, -8, 8/27"')
  s=s.replace('Enter any positive number to find its square root. Works with whole numbers, decimals, and large values.', '{t("calc.inputHelp")}')
  # Always show the input convention instead of hiding it in a tooltip.
  s=re.sub(r'(<input[^>]+id="(?:sqrtInput|cbrtInput|nthValue)"[^>]*>)',r'\1\n                                <p class="input-format-help">{t("calc.inputHelp")}</p>',s)
  s=s.replace('aria-label="Calculate Square Root"','aria-label={t("calc.btn.calculate")}')
  s=s.replace('placeholder="e.g. 625"','placeholder="625, 0.25, 1/16"')
  return s
 edit(path,inputs)

edit('src/styles/global.css',lambda s:s+'''\n.input-format-help { color: var(--text-secondary); font-size: 0.8rem; line-height: 1.5; margin-top: 8px; grid-column: 1 / -1; }
.input-wrapper:has(.input-format-help) { flex-wrap: wrap; }
.input-wrapper .input-format-help { width: 100%; position: static; }
''')

# English standalone pages do not use the locale JSON for every metadata field.
edit('src/pages/racine-cubique-calculator.astro',lambda s:s.replace('Racine Cubique Calculator | Free Online Cube Root Calculator','Cube Root Calculator — Negative Numbers & Steps').replace('<span class="title-line">Racine Cubique</span>','<span class="title-line">Cube Root</span>'))
edit('src/pages/nth-root-calculator.astro',lambda s:s.replace('Nth Root Calculator - Free Root Tool for Any Index','Nth Root Calculator — Integer Degrees & Steps').replace('Calculate any root (4th, 5th, or custom index) instantly with our free Nth Root Calculator. Get exact results, simplified forms, and step-by-step work.', 'Calculate real roots with integer degrees from 1 to 10,000. Get rounded results and factor-based steps for supported integers.'))

def methodology(s):
 s=s.replace('10+ decimal place accuracy','Up to 12 significant digits').replace('Our Mathematical Verification Guarantee','How Results Are Calculated and Checked')
 s=s.replace('and manual long division steps','and a guide to manual long division')
 s=s.replace('Accuracy is our highest priority. All calculation engines on Racine Carree Calculator are implemented using industry-standard floating-point arithmetic (IEEE 754) and cross-verified against established symbolic algebra algorithms.', 'Decimal calculations use JavaScript floating-point arithmetic (IEEE 754). The square-root and cube-root tools use Math.sqrt and Math.cbrt; other degrees use exponentiation. A rounded decimal is an approximation, not an exact symbolic value.')
 s=s.replace('<li><strong>Multi-Method Cross-Checking:</strong> Decimal roots are computed using Newton-Raphson approximation iterations verified to 10+ decimal places.</li>', '<li><strong>Integer verification:</strong> Within the supported range, integer root candidates are checked using exact integer exponentiation. Decimal results display up to 12 significant digits, not a guaranteed number of decimal places.</li>')
 s=s.replace('<li><strong>Exact Radical Simplification:</strong> Radical reductions use canonical prime factorization trees, ensuring exact simplified forms with no rounding error.</li>', '<li><strong>Supported ranges:</strong> Root inputs are bounded by 9,007,199,254,740,991 in magnitude. Exact radical simplification and the perfect-power checkers support integer inputs up to 1,000,000,000,000 in magnitude. Decimal and fraction inputs are evaluated numerically; they are not silently rounded into exact radicals.</li>')
 return s
edit('src/pages/about-us.astro',methodology)

# Remove search-engine-oriented filler, keeping a clear mathematical definition.
edit('src/data/i18n/content/homeBoilerplate.ts',lambda s:re.sub(r's1P1: "Racine carrée is the French term.*?",', 's1P1: "The principal square root of a nonnegative number x is the nonnegative number whose square equals x. For example, √49 = 7. The equation y² = 49 has two solutions, 7 and −7.",',s,count=1).replace('La racine carrée (square root en anglais) est l’une des notions mathématiques les plus recherchées au monde.', 'La racine carrée principale d’un nombre positif ou nul est le nombre positif ou nul dont le carré est égal à ce nombre.'))

# Replace a floating-point Python example advertised as exact with integer binary search.
python_code='''def is_cube(n):
    n = abs(n)
    low, high = 0, 1 << ((n.bit_length() + 2) // 3)
    while low <= high:
        mid = (low + high) // 2
        cube = mid ** 3
        if cube == n:
            return True
        if cube < n:
            low = mid + 1
        else:
            high = mid - 1
    return False'''
edit('src/components/PerfectCubeContent.astro',lambda s:s.replace('def is_cube(n): return round(abs(n)**(1/3))**3 == abs(n)', '{'+json.dumps(python_code)+'}').replace('id="pcFormulaPy" style="font-size: 0.82rem;"','id="pcFormulaPy" style="font-size: 0.82rem; white-space: pre; overflow-x: auto;"').replace('A2^(1/3)', 'ABS(A2)^(1/3)').replace('^3 = A2','^3 = ABS(A2)').replace('Math.round(Math.cbrt(n))**3 === n;', 'Number.isSafeInteger(n) &amp;&amp; BigInt(Math.round(Math.cbrt(n)))**3n === BigInt(n);'))

# Basic input exactness: never classify a rounded fraction/decimal as an exact integer input.
edit('src/scripts/app.js',lambda s:s.replace("const exact = exactIntegerRoot(radicand, degree) !== null;", "const literalInteger = /^[+-]?\\d+$/.test(input.value.trim().replaceAll('−', '-'));\n        const exact = literalInteger && exactIntegerRoot(radicand, degree) !== null;").replace('const radical = simplifyRoot(radicand, degree, symbol);','const radical = literalInteger ? simplifyRoot(radicand, degree, symbol) : null;').replace('const factors = factorInteger(radicand);','const factors = literalInteger ? factorInteger(radicand) : null;'))
for name in ['PerfectSquareWidget','PerfectCubeWidget']:
 edit(f'src/components/{name}.astro',lambda s:s.replace('if (!Number.isSafeInteger(n) || Math.abs(n) > 1e12)', 'if (!/^[+-]?\\d+$/.test(rawVal) || !Number.isSafeInteger(n) || Math.abs(n) > 1e12)'))

# Static query copies expose their clean canonicals when crawled; there are no query-driven routes.
edit('src/pages/robots.txt.ts',lambda s:re.sub(r'Disallow: /\*\?\*lang=.*?Disallow: /\*\?\*\n', '# Tracking/query copies are crawlable so engines can read their clean canonical tags.\n',s,flags=re.S))
print('Applied input, metadata, methodology and reviewed content fixes.')
