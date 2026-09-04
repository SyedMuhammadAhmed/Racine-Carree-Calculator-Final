import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localesDir = path.resolve(__dirname, '../theme/i18n/locales');

const faqs = {
  en: [
    {
      question: "How do I use the Racine Carree Calculator?",
      answer: "Enter your number in the input field and click Calculate. You will instantly receive the exact decimal result, the simplified radical form (e.g., √72 = 6√2), and step-by-step prime factorization breakdown.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Can the calculator handle negative numbers?",
      answer: "Yes! In real arithmetic, negative numbers have no real square root. In complex mathematics, entering a negative number returns the imaginary unit result (e.g., √(-16) = ±4i) along with complete step-by-step explanations.",
      display: true,
      category: "sqrt"
    },
    {
      question: "What is the difference between a square root and a cube root?",
      answer: "A square root asks what number multiplied by itself twice produces x (index 2). A cube root asks what number multiplied by itself three times produces x (index 3). Unlike square roots, cube roots of negative numbers have real solutions.",
      display: true,
      category: "general"
    },
    {
      question: "Can cube roots of negative numbers be calculated?",
      answer: "Yes! The cube root of a negative number has a real solution because multiplying three negative numbers produces a negative result (e.g., ∛(-27) = -3).",
      display: true,
      category: "cbrt"
    },
    {
      question: "What does the index of an nth root mean?",
      answer: "The index is the degree of the root (the number 'n' in ⁿ√x). An index of 2 is a square root, 3 is a cube root, 4 is a fourth root, and so on. It indicates how many times the root must multiply by itself to equal the radicand.",
      display: true,
      category: "nth"
    },
    {
      question: "Can I find the nth root of a negative number?",
      answer: "If the root degree n is odd (e.g., 3, 5, 7), a real negative solution exists. If the degree n is even (e.g., 2, 4, 6), there is no real solution because any real number raised to an even power is non-negative.",
      display: true,
      category: "nth"
    },
    {
      question: "Is this calculator free to use?",
      answer: "Yes, our calculators (Square Root, Cube Root, and Nth Root) are 100% free with unlimited calculations, no registration, and no download required.",
      display: true,
      category: "general"
    }
  ],
  fr: [
    {
      question: "Comment utiliser le Calculateur Racine Carrée ?",
      answer: "Entrez votre nombre dans le champ de saisie et cliquez sur Calculer. Vous obtiendrez instantanément le résultat décimal exact, la forme radicale simplifiée (ex. √72 = 6√2) et le détail étape par étape de la décomposition en facteurs premiers.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Le calculateur peut-il traiter les nombres négatifs ?",
      answer: "Oui ! En arithmétique réelle, la racine carrée d'un nombre négatif n'existe pas. En mathématiques complexes, entrer un nombre négatif renvoie le résultat avec l'unité imaginaire (ex. √(-16) = ±4i) avec toutes les étapes d'explication.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Quelle est la différence entre racine carrée et racine cubique ?",
      answer: "La racine carrée recherche le nombre qui multiplié par lui-même 2 fois donne x (indice 2). La racine cubique recherche le nombre multiplié par lui-même 3 fois (indice 3). Contrairement aux racines carrées, les racines cubiques de nombres négatifs ont des solutions réelles.",
      display: true,
      category: "general"
    },
    {
      question: "Peut-on calculer la racine cubique d'un nombre négatif ?",
      answer: "Oui ! La racine cubique d'un nombre négatif a une solution réelle car le produit de trois nombres négatifs est négatif (ex. ∛(-27) = -3).",
      display: true,
      category: "cbrt"
    },
    {
      question: "Que signifie l'indice d'une racine n-ième ?",
      answer: "L'indice est le degré de la racine (le nombre 'n' dans ⁿ√x). Un indice de 2 correspond à la racine carrée, 3 à la racine cubique, 4 à la racine quatrième, etc.",
      display: true,
      category: "nth"
    },
    {
      question: "Peut-on calculer la racine n-ième d'un nombre négatif ?",
      answer: "Si le degré n est impair (3, 5, 7...), une solution réelle négative existe. Si n est pair (2, 4, 6...), il n'existe pas de solution réelle.",
      display: true,
      category: "nth"
    },
    {
      question: "Ce calculateur est-il gratuit ?",
      answer: "Oui, tous nos calculateurs sont 100% gratuits avec calculs illimités, sans inscription ni téléchargement requis.",
      display: true,
      category: "general"
    }
  ],
  es: [
    {
      question: "¿Cómo uso la Calculadora de Raíz Cuadrada?",
      answer: "Introduce tu número en el campo y haz clic en Calcular. Recibirás al instante el resultado decimal exacto, la forma radical simplificada (p. ej., √72 = 6√2) y el desglose de factores primos paso a paso.",
      display: true,
      category: "sqrt"
    },
    {
      question: "¿Puede la calculadora procesar números negativos?",
      answer: "¡Sí! En números reales, los negativos no tienen raíz cuadrada. En números complejos, ingresar un número negativo devuelve la unidad imaginaria (p. ej., √(-16) = ±4i) con explicación detallada.",
      display: true,
      category: "sqrt"
    },
    {
      question: "¿Cuál es la diferencia entre raíz cuadrada y raíz cúbica?",
      answer: "La raíz cuadrada busca un número que multiplicado 2 veces da x (índice 2). La raíz cúbica busca un número multiplicado 3 veces (índice 3). A diferencia de las raíces cuadradas, las cúbicas de números negativos son reales.",
      display: true,
      category: "general"
    },
    {
      question: "¿Se pueden calcular raíces cúbicas de números negativos?",
      answer: "¡Sí! La raíz cúbica de un número negativo tiene solución real porque el producto de tres números negativos es negativo (p. ej., ∛(-27) = -3).",
      display: true,
      category: "cbrt"
    },
    {
      question: "¿Qué significa el índice de una raíz enésima?",
      answer: "El índice es el grado de la raíz ('n' en ⁿ√x). Un índice de 2 es raíz cuadrada, 3 es cúbica, 4 es cuarta, etc.",
      display: true,
      category: "nth"
    },
    {
      question: "¿Puedo hallar la raíz enésima de un número negativo?",
      answer: "Si el índice n es impar (3, 5, 7...), existe una solución real negativa. Si n es par (2, 4, 6...), no existe solución real.",
      display: true,
      category: "nth"
    },
    {
      question: "¿Es gratuita esta calculadora?",
      answer: "Sí, nuestras herramientas son 100% gratuitas con cálculos ilimitados, sin registro y sin descargas.",
      display: true,
      category: "general"
    }
  ],
  de: [
    {
      question: "Wie benutze ich den Quadratwurzel-Rechner?",
      answer: "Geben Sie Ihre Zahl ein und klicken Sie auf Berechnen. Sie erhalten sofort den exakten Dezimalwert, die vereinfachte Wurzelform (z.B. √72 = 6√2) und die schrittweise Primfaktorzerlegung.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Kann der Rechner negative Zahlen verarbeiten?",
      answer: "Ja! In den reellen Zahlen existiert keine Quadratwurzel aus negativen Zahlen. In den komplexen Zahlen gibt der Rechner das Ergebnis mit der imaginären Einheit i aus (z.B. √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Was ist der Unterschied zwischen Quadratwurzel und Kubikwurzel?",
      answer: "Eine Quadratwurzel sucht die Zahl, die mit sich selbst multipliziert x ergibt (Index 2). Eine Kubikwurzel sucht die Zahl, die 3-mal multipliziert x ergibt (Index 3).",
      display: true,
      category: "general"
    },
    {
      question: "Können Kubikwurzeln negativer Zahlen berechnet werden?",
      answer: "Ja! Die Kubikwurzel einer negativen Zahl hat eine reelle Lösung (z.B. ∛(-27) = -3), da drei negative Faktoren ein negatives Produkt ergeben.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Was bedeutet der Wurzelexponent (Index n)?",
      answer: "Der Index gibt den Grad der Wurzel an (die Zahl 'n' in ⁿ√x). Ein Index von 2 ist die Quadratwurzel, 3 die Kubikwurzel, 4 die vierte Wurzel usw.",
      display: true,
      category: "nth"
    },
    {
      question: "Gibt es n-te Wurzeln aus negativen Zahlen?",
      answer: "Wenn n ungerade ist (3, 5, 7...), existiert eine reelle Lösung. Wenn n gerade ist (2, 4, 6...), gibt es keine reelle Lösung.",
      display: true,
      category: "nth"
    },
    {
      question: "Ist dieser Rechner kostenlos?",
      answer: "Ja, alle Rechner auf dieser Website sind zu 100% kostenlos ohne Registrierung oder Installation nutzbar.",
      display: true,
      category: "general"
    }
  ],
  it: [
    {
      question: "Come si usa il Calcolatore di Radice Quadrata?",
      answer: "Inserisci il numero e clicca su Calcola per ottenere il valore decimale esatto, la forma radicale semplificata (es. √72 = 6√2) e i passaggi dettagliati.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Il calcolatore gestisce i numeri negativi?",
      answer: "Sì! Nei numeri reali non esiste radice quadrata di un negativo. Nei numeri complessi, il calcolatore restituisce l'unità immaginaria (es. √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Che differenza c'è tra radice quadrata e radice cubica?",
      answer: "La radice quadrata ha indice 2 (moltiplicata 2 volte), mentre la radice cubica ha indice 3 (moltiplicata 3 volte) e ammette soluzioni reali per numeri negativi.",
      display: true,
      category: "general"
    },
    {
      question: "Si può calcolare la radice cubica di un numero negativo?",
      answer: "Sì! Moltiplicando tre numeri negativi si ottiene un numero negativo, quindi ∛(-27) = -3 è una soluzione reale valida.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Cosa significa l'indice di una radice n-esima?",
      answer: "L'indice è il grado n in ⁿ√x (2 per radice quadrata, 3 per cubica, 4 per quarta radice, ecc.).",
      display: true,
      category: "nth"
    },
    {
      question: "Si può calcolare la radice n-esima di un numero negativo?",
      answer: "Se l'indice n è dispari esiste una soluzione reale. Se n è pari non esiste alcuna soluzione reale.",
      display: true,
      category: "nth"
    },
    {
      question: "Questo calcolatore è gratuito?",
      answer: "Sì, tutti i nostri strumenti sono gratuiti al 100% senza registrazione e con calcoli illimitati.",
      display: true,
      category: "general"
    }
  ],
  pt: [
    {
      question: "Como usar a Calculadora de Raiz Quadrada?",
      answer: "Digite seu número e clique em Calcular. Você receberá o valor decimal exato, o radical simplificado (ex.: √72 = 6√2) e a decomposição em fatores primos passo a passo.",
      display: true,
      category: "sqrt"
    },
    {
      question: "A calculadora aceita números negativos?",
      answer: "Sim! Nos números reais a raiz quadrada de número negativo não existe. No domínio dos complexos, ela retorna o resultado com a unidade imaginária i (ex.: √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Qual a diferença entre raiz quadrada e raiz cúbica?",
      answer: "A raiz quadrada tem índice 2, enquanto a raiz cúbica tem índice 3 e admite soluções reais para números negativos.",
      display: true,
      category: "general"
    },
    {
      question: "É possível calcular a raiz cúbica de um número negativo?",
      answer: "Sim! O produto de três números negativos é negativo, portanto ∛(-27) = -3 é uma solução real.",
      display: true,
      category: "cbrt"
    },
    {
      question: "O que significa o índice de uma raiz enésima?",
      answer: "O índice é o grau n em ⁿ√x (2 para quadrada, 3 para cúbica, 4 para quarta, etc.).",
      display: true,
      category: "nth"
    },
    {
      question: "Posso calcular a raiz enésima de um número negativo?",
      answer: "Se o índice n for ímpar (3, 5, 7...), existe solução real negativa. Se n for par (2, 4, 6...), não há solução real.",
      display: true,
      category: "nth"
    },
    {
      question: "Esta calculadora é gratuita?",
      answer: "Sim, todas as ferramentas são 100% gratuitas e com uso ilimitado.",
      display: true,
      category: "general"
    }
  ],
  ru: [
    {
      question: "Как пользоваться калькулятором квадратного корня?",
      answer: "Введите число и нажмите «Рассчитать». Вы мгновенно получите точное десятичное значение, упрощенный вид корня (например, √72 = 6√2) и пошаговое разложение на множители.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Работает ли калькулятор с отрицательными числами?",
      answer: "Да! Среди действительных чисел квадратный корень из отрицательного числа не существует, но в комплексных числах калькулятор вычисляет результат с мнимой единицей i (например, √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "В чем разница между квадратным и кубическим корнем?",
      answer: "Квадратный корень имеет степень 2, а кубический — степень 3. В отличие от квадратных корней, кубический корень из отрицательного числа является действительным числом.",
      display: true,
      category: "general"
    },
    {
      question: "Можно ли извлечь кубический корень из отрицательного числа?",
      answer: "Да! Произведение трех отрицательных чисел дает отрицательное число, поэтому ∛(-27) = -3 является действительным решением.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Что означает показатель (индекс) корня n?",
      answer: "Индекс n указывает на степень корня в ⁿ√x (2 — квадратный корень, 3 — кубический, 4 — корень 4-й степени и т.д.).",
      display: true,
      category: "nth"
    },
    {
      question: "Можно ли извлечь корень n-й степени из отрицательного числа?",
      answer: "Если показатель степени n нечетный (3, 5, 7...), существует действительное решение. Если n четный (2, 4, 6...), действительного решения нет.",
      display: true,
      category: "nth"
    },
    {
      question: "Этот калькулятор бесплатный?",
      answer: "Да, наши калькуляторы на 100% бесплатны, без регистрации и ограничений на количество вычислений.",
      display: true,
      category: "general"
    }
  ],
  ja: [
    {
      question: "平方根電卓の使い方を教えてください。",
      answer: "数値を入力して「計算」ボタンを押すだけです。正確な小数値、根号の簡略化（例：√72＝6√2）、素因数分解を用いた途中計算ステップを瞬時に確認できます。",
      display: true,
      category: "sqrt"
    },
    {
      question: "負の数（マイナス）の平方根も計算できますか？",
      answer: "はい！実数の範囲では負の数の平方根は定義されませんが、複素数の範囲として虚数単位 i を用いた解（例：√(-16) ＝ ±4i）と途中式を表示します。",
      display: true,
      category: "sqrt"
    },
    {
      question: "平方根と立方根の違いは何ですか？",
      answer: "平方根は2乗して元の数になる値（次数2）、立方根は3乗して元の数になる値（次数3）です。立方根は負の数に対しても実数解が存在します。",
      display: true,
      category: "general"
    },
    {
      question: "負の数の立方根（3乗根）は実数ですか？",
      answer: "はい！負の数を3回掛けると負の数になるため、例えば ∛(-27) ＝ -3 のように負の数の立方根は実数解を持ちます。",
      display: true,
      category: "cbrt"
    },
    {
      question: "n乗根の「次数n」とは何ですか？",
      answer: "根号記号の左上に付く指数 'n'（ⁿ√x）のことです。n=2なら平方根、n=3なら立方根、n=4なら4乗根を表します。",
      display: true,
      category: "nth"
    },
    {
      question: "負の数のn乗根は計算できますか？",
      answer: "次数nが奇数（3, 5, 7...）の場合は実数解が存在します。次数nが偶数（2, 4, 6...）の場合は実数解は存在しません。",
      display: true,
      category: "nth"
    },
    {
      question: "この電卓は無料で利用できますか？",
      answer: "はい、当サイトの電卓は会員登録やダウンロード不要で、完全無料で無制限にご利用いただけます。",
      display: true,
      category: "general"
    }
  ],
  ko: [
    {
      question: "제곱근 계산기는 어떻게 사용하나요?",
      answer: "숫자를 입력하고 '계산하기'를 클릭하면 정확한 소수 결과, 근호 단순화(예: √72 = 6√2) 및 소인수분해 풀이 과정을 즉시 확인할 수 있습니다.",
      display: true,
      category: "sqrt"
    },
    {
      question: "음수의 제곱근도 계산할 수 있나요?",
      answer: "네! 실수 범위에서는 음수의 제곱근이 존재하지 않지만, 복소수 범위에서 허수 단위 i를 사용하여 계산 결과(예: √(-16) = ±4i)와 풀이 단계를 제공합니다.",
      display: true,
      category: "sqrt"
    },
    {
      question: "제곱근과 세제곱근의 차이는 무엇인가요?",
      answer: "제곱근은 2번 곱해 x가 되는 수(지수 2)이고, 세제곱근은 3번 곱해 x가 되는 수(지수 3)입니다. 세제곱근은 음수 입력에 대해서도 실수 해를 가집니다.",
      display: true,
      category: "general"
    },
    {
      question: "음수의 세제곱근도 계산 가능한가요?",
      answer: "네! 음수를 세 번 곱하면 음수가 되므로, 예를 들어 ∛(-27) = -3과 같이 실수 해가 존재합니다.",
      display: true,
      category: "cbrt"
    },
    {
      question: "n제곱근의 차수 n이란 무엇인가요?",
      answer: "ⁿ√x에서 거듭제곱근의 차수 n을 의미합니다. n=2는 제곱근, n=3은 세제곱근, n=4는 4제곱근을 뜻합니다.",
      display: true,
      category: "nth"
    },
    {
      question: "음수의 n제곱근을 구할 수 있나요?",
      answer: "차수 n이 홀수(3, 5, 7...)이면 음의 실수 해가 존재하며, 차수 n이 짝수(2, 4, 6...)이면 실수 해가 존재하지 않습니다.",
      display: true,
      category: "nth"
    },
    {
      question: "이 계산기는 무료인가요?",
      answer: "네, 회원가입이나 다운로드 없이 100% 무료로 무제한 계산할 수 있습니다.",
      display: true,
      category: "general"
    }
  ],
  hi: [
    {
      question: "वर्गमूल कैलकुलेटर का उपयोग कैसे करें?",
      answer: "संख्या दर्ज करें और 'गणना करें' पर क्लिक करें। आपको सटीक दशमलव मान, सरलतम करणी रूप (जैसे √72 = 6√2) और अभाज्य गुणनखंड के चरण तुरंत प्राप्त होंगे।",
      display: true,
      category: "sqrt"
    },
    {
      question: "क्या यह ऋणात्मक संख्याओं का वर्गमूल निकाल सकता है?",
      answer: "हाँ! वास्तविक संख्याओं में ऋणात्मक संख्या का वर्गमूल नहीं होता, लेकिन सम्मिश्र संख्याओं में काल्पनिक इकाई i के साथ परिणाम (जैसे √(-16) = ±4i) प्राप्त होता है।",
      display: true,
      category: "sqrt"
    },
    {
      question: "वर्गमूल और घनमूल में क्या अंतर है?",
      answer: "वर्गमूल घात 2 के लिए होता है और घनमूल घात 3 के लिए। घनमूल में ऋणात्मक संख्याओं के भी वास्तविक हल होते हैं।",
      display: true,
      category: "general"
    },
    {
      question: "क्या ऋणात्मक संख्याओं का घनमूल संभव है?",
      answer: "हाँ! तीन ऋणात्मक संख्याओं का गुणनफल ऋणात्मक होता है, इसलिए ∛(-27) = -3 एक वास्तविक हल है।",
      display: true,
      category: "cbrt"
    },
    {
      question: "n-वें मूल का सूचकांक (घातांक n) क्या है?",
      answer: "सूचकांक n मूल की डिग्री को दर्शाता है (ⁿ√x में 'n')। n=2 वर्गमूल है, n=3 घनमूल है, आदि।",
      display: true,
      category: "nth"
    },
    {
      question: "क्या ऋणात्मक संख्या का n-वाँ मूल निकल सकता है?",
      answer: "यदि n विषम (3, 5, 7...) है तो वास्तविक हल होता है। यदि n सम (2, 4, 6...) है तो कोई वास्तविक हल नहीं होता।",
      display: true,
      category: "nth"
    },
    {
      question: "क्या यह कैलकुलेटर मुफ़्त है?",
      answer: "हाँ, हमारे सभी कैलकुलेटर बिना किसी पंजीकरण के 100% मुफ़्त हैं।",
      display: true,
      category: "general"
    }
  ],
  ar: [
    {
      question: "كيف أستخدم حاسبة الجذر التربيعي؟",
      answer: "أدخل العدد واضغط على 'احسب'. ستحصل فوراً على القيمة العشرية الدقيقة، والصيغة الجذرية المبسطة (مثل √72 = 6√2)، وخطوات التحليل إلى العوامل الأولية.",
      display: true,
      category: "sqrt"
    },
    {
      question: "هل يمكن للحاسبة حساب جذر الأعداد السالبة؟",
      answer: "نعم! في الأعداد الحقيقية لا يوجد جذر للأعداد السالبة، ولكن في الأعداد المركبة تُظهر الحاسبة الناتج باستخدام الوحدة التخيلية i (مثل √(-16) = ±4i) مع خطوات الحل.",
      display: true,
      category: "sqrt"
    },
    {
      question: "ما الفرق بين الجذر التربيعي والجذر التكعيبي؟",
      answer: "الجذر التربيعي دليله 2، بينما الجذر التكعيبي دليله 3. وخلافاً للجذر التربيعي، فإن الجذر التكعيبي للأعداد السالبة له حلول حقيقية.",
      display: true,
      category: "general"
    },
    {
      question: "هل يمكن حساب الجذر التكعيبي لعدد سالب؟",
      answer: "نعم! حاصل ضرب ثلاثة أعداد سالبة يعطي عدداً سالباً، ولذلك فإن ∛(-27) = -3 حل حقيقي صحيح.",
      display: true,
      category: "cbrt"
    },
    {
      question: "ماذا يعني دليل الجذر النوني (n)؟",
      answer: "دليل الجذر هو رتبة الجذر في ⁿ√x (2 للتربيعي، 3 للتكعيبي، 4 للجذر الرابع، وهكذا).",
      display: true,
      category: "nth"
    },
    {
      question: "هل يمكن إيجاد الجذر النوني لعدد سالب؟",
      answer: "إذا كان الدليل n فردياً (3، 5، 7...) يوجد حل حقيقي سالب. أما إذا كان زوجياً (2، 4، 6...) فلا يوجد حل حقيقي.",
      display: true,
      category: "nth"
    },
    {
      question: "هل هذه الحاسبة مجانية؟",
      answer: "نعم، كافة الحاسبات مجانية 100% وبدون تسجيل وبلا قيود على الاستخدام.",
      display: true,
      category: "general"
    }
  ],
  bn: [
    {
      question: "বর্গমূল ক্যালকুলেটর কীভাবে ব্যবহার করব?",
      answer: "সংখ্যাটি লিখে 'গণনা করুন' এ ক্লিক করলেই সঠিক দশমিক ফলাফল, সরলীকৃত করণী রূপ (যেমন √72 = 6√2) এবং ধাপভিত্তিক সমাধান দেখতে পাবেন।",
      display: true,
      category: "sqrt"
    },
    {
      question: "ক্যালকুলেটর কি ঋণাত্মক সংখ্যার বর্গমূল নির্ণয় করতে পারে?",
      answer: "হ্যাঁ! বাস্তব সংখ্যায় ঋণাত্মক সংখ্যার বর্গমূল সংজ্ঞায়িত নয়, তবে জটিল সংখ্যার ক্ষেত্রে কাল্পনিক একক i দিয়ে ফলাফল (যেমন √(-16) = ±4i) দেখানো হয়।",
      display: true,
      category: "sqrt"
    },
    {
      question: "বর্গমূল এবং ঘনমূলের মধ্যে পার্থক্য কী?",
      answer: "বর্গমূলের সূচক ২ এবং ঘনমূলের সূচক ৩। ঋণাত্মক সংখ্যার ঘনমূলের বাস্তব মান বিদ্যমান থাকে।",
      display: true,
      category: "general"
    },
    {
      question: "ঋণাত্মক সংখ্যার ঘনমূল কি নির্ণয় করা সম্ভব?",
      answer: "হ্যাঁ! তিনটি ঋণাত্মক সংখ্যার গুণফল ঋণাত্মক হয়, তাই ∛(-27) = -3 একটি বাস্তব সমাধান।",
      display: true,
      category: "cbrt"
    },
    {
      question: "n-তম মূলের সূচক n বলতে কী বোঝায়?",
      answer: "সূচক n মূলের মাত্রা প্রকাশ করে (ⁿ√x)। n=2 হলে বর্গমূল, n=3 হলে ঘনমূল ইত্যাদি।",
      display: true,
      category: "nth"
    },
    {
      question: "ঋণাত্মক সংখ্যার n-তম মূল পাওয়া কি সম্ভব?",
      answer: "সূচক n বিজোড় (৩, ৫, ৭...) হলে বাস্তব সমাধান থাকে। n জোড় (২, ৪, ৬...) হলে বাস্তব সমাধান থাকে না।",
      display: true,
      category: "nth"
    },
    {
      question: "এই ক্যালকুলেটরটি কি বিনামূল্যে ব্যবহারযোগ্য?",
      answer: "হ্যাঁ, আমাদের সব ক্যালকুলেটর সম্পূর্ণ বিনামূল্যে এবং সীমাহীনভাবে ব্যবহার করা যায়।",
      display: true,
      category: "general"
    }
  ],
  tr: [
    {
      question: "Kare Kök Hesaplayıcı nasıl kullanılır?",
      answer: "Sayınızı yazıp Hesapla düğmesine basın. Tam ondalık sonucu, sadeleştirilmiş kök ifadesini (ör. √72 = 6√2) ve adım adım asal çarpanlara ayırma adımlarını hemen görebilirsiniz.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Hesaplayıcı negatif sayıları destekliyor mu?",
      answer: "Evet! Reel sayılarda negatif sayıların karekökü yoktur ancak karmaşık sayılar alanında sanal birim i kullanılarak sonuç (ör. √(-16) = ±4i) adımlarıyla gösterilir.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Karekök ile küpkök arasındaki fark nedir?",
      answer: "Karekök 2. derecedendir, küpkök ise 3. derecedendir. Küpkökler negatif sayılar için reel sonuçlar verir.",
      display: true,
      category: "general"
    },
    {
      question: "Negatif sayıların küp kökü alınabilir mi?",
      answer: "Evet! Üç negatif sayının çarpımı negatif olduğundan ∛(-27) = -3 reel bir çözümdür.",
      display: true,
      category: "cbrt"
    },
    {
      question: "n. dereceden kökteki derece (indeks n) ne anlama gelir?",
      answer: "İndeks n, kökün kuvvetini belirtir (ⁿ√x). n=2 karekök, n=3 küpkök, n=4 dördüncü dereceden köktür.",
      display: true,
      category: "nth"
    },
    {
      question: "Negatif bir sayının n. dereceden kökü hesaplanabilir mi?",
      answer: "Eğer n derecesi tek sayı ise (3, 5, 7...) reel çözüm vardır. Derece çift sayı ise (2, 4, 6...) reel çözüm yoktur.",
      display: true,
      category: "nth"
    },
    {
      question: "Bu hesaplayıcı ücretsiz mi?",
      answer: "Evet, sitemizdeki tüm hesaplama araçları %100 ücretsizdir ve kayıt gerektirmez.",
      display: true,
      category: "general"
    }
  ],
  pl: [
    {
      question: "Jak korzystać z kalkulatora pierwiastka kwadratowego?",
      answer: "Wpisz liczbę i kliknij Oblicz. Otrzymasz dokładny wynik dziesiętny, uproszczoną postać pierwiastka (np. √72 = 6√2) oraz rozkład na czynniki pierwsze krok po kroku.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Czy kalkulator obsługuje liczby ujemne?",
      answer: "Tak! W zbiorze liczb rzeczywistych pierwiastek kwadratowy z liczby ujemnej nie istnieje, jednak w liczbach zespolonych kalkulator zwraca wynik z jednostką urojoną i (np. √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Jaka jest różnica między pierwiastkiem kwadratowym a sześciennym?",
      answer: "Pierwiastek kwadratowy ma stopień 2, a sześcienny stopień 3. W przeciwieństwie do kwadratowych, pierwiastki sześcienne z liczb ujemnych są liczbami rzeczywistymi.",
      display: true,
      category: "general"
    },
    {
      question: "Czy można obliczyć pierwiastek sześcienny z liczby ujemnej?",
      answer: "Tak! Iloczyn trzech liczb ujemnych daje liczbę ujemną, więc ∛(-27) = -3 jest rozwiązaniem rzeczywistym.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Co oznacza stopień pierwiastka n?",
      answer: "Stopień n to potęga pierwiastka w ⁿ√x (2 dla kwadratowego, 3 dla sześciennego, 4 dla czwartego stopnia itd.).",
      display: true,
      category: "nth"
    },
    {
      question: "Czy można wyciągnąć pierwiastek n-tego stopnia z liczby ujemnej?",
      answer: "Jeśli stopień n jest nieparzysty (3, 5, 7...), istnieje rozwiązanie rzeczywiste. Jeśli stopień n jest parzysty (2, 4, 6...), rozwiązanie rzeczywiste nie istnieje.",
      display: true,
      category: "nth"
    },
    {
      question: "Czy ten kalkulator jest darmowy?",
      answer: "Tak, wszystkie nasze narzędzia są w 100% bezpłatne, bez konieczności rejestracji czy instalacji.",
      display: true,
      category: "general"
    }
  ],
  id: [
    {
      question: "Bagaimana cara menggunakan Kalkulator Akar Kuadrat?",
      answer: "Masukkan angka dan klik Hitung. Anda akan langsung menerima hasil desimal presisi, bentuk akar sederhana (contoh: √72 = 6√2), dan faktorisasi prima langkah demi langkah.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Bisakah kalkulator menghitung angka negatif?",
      answer: "Ya! Dalam bilangan riil, akar kuadrat bilangan negatif tidak terdefinisi. Dalam bilangan kompleks, kalkulator menampilkan hasil unit imajiner i (contoh: √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Apa perbedaan akar kuadrat dan akar pangkat tiga?",
      answer: "Akar kuadrat memiliki derajat 2, sedangkan akar pangkat tiga memiliki derajat 3 dan memiliki solusi riil untuk angka negatif.",
      display: true,
      category: "general"
    },
    {
      question: "Bisakah menghitung akar pangkat tiga dari angka negatif?",
      answer: "Ya! Perkalian tiga bilangan negatif menghasilkan bilangan negatif, sehingga ∛(-27) = -3 adalah solusi riil.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Apa arti indeks n pada akar pangkat n?",
      answer: "Indeks n adalah derajat akar pada ⁿ√x (2 untuk akar kuadrat, 3 untuk akar pangkat tiga, dan seterusnya).",
      display: true,
      category: "nth"
    },
    {
      question: "Bisakah mencari akar pangkat n dari angka negatif?",
      answer: "Jika derajat n adalah ganjil (3, 5, 7...), ada solusi riil. Jika n genap (2, 4, 6...), tidak ada solusi riil.",
      display: true,
      category: "nth"
    },
    {
      question: "Apakah kalkulator ini gratis?",
      answer: "Ya, kalkulator kami 100% gratis tanpa pendaftaran dan tanpa batas penggunaan.",
      display: true,
      category: "general"
    }
  ],
  ms: [
    {
      question: "Bagaimanakah cara menggunakan Kalkulator Punca Kuasa Dua?",
      answer: "Masukkan nombor dan klik Kira untuk menerima hasil perpuluhan tepat, bentuk radikal dipermudahkan (cth. √72 = 6√2) dan pemfaktoran perdana terperinci.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Bolehkah kalkulator mengira nombor negatif?",
      answer: "Ya! Dalam nombor nyata punca kuasa dua negatif tiada penyelesaian, namun dalam nombor kompleks ia menghasilkan unit khayalan i (cth. √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Apakah perbezaan antara punca kuasa dua dan punca kuasa tiga?",
      answer: "Punca kuasa dua berindeks 2, manakala punca kuasa tiga berindeks 3 dan mempunyai penyelesaian nyata bagi nombor negatif.",
      display: true,
      category: "general"
    },
    {
      question: "Bolehkah punca kuasa tiga bagi nombor negatif dikira?",
      answer: "Ya! Hasil darab tiga nombor negatif adalah negatif, maka ∛(-27) = -3 adalah penyelesaian nyata sah.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Apakah maksud indeks n bagi punca kuasa ke-n?",
      answer: "Indeks n merupakan darjah punca kuasa dalam ⁿ√x (2 untuk kuasa dua, 3 untuk kuasa tiga, dan seterusnya).",
      display: true,
      category: "nth"
    },
    {
      question: "Bolehkah mencari punca kuasa ke-n bagi nombor negatif?",
      answer: "Jika darjah n adalah ganjil (3, 5, 7...) penyelesaian nyata wujud. Jika genap (2, 4, 6...) tiada penyelesaian nyata.",
      display: true,
      category: "nth"
    },
    {
      question: "Adakah kalkulator ini percuma?",
      answer: "Ya, alat kami 100% percuma tanpa perlu mendaftar atau memuat turun.",
      display: true,
      category: "general"
    }
  ],
  bg: [
    {
      question: "Как се използва калкулаторът за квадратен корен?",
      answer: "Въведете числото и натиснете Изчисли. Веднага ще получите точния десетичен резултат, опростения корен (напр. √72 = 6√2) и стъпките за разлагане на прости множители.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Може ли калкулаторът да работи с отрицателни числа?",
      answer: "Да! В реалните числа корен квадратен от отрицателно число не съществува, но в комплексните числа калкулаторът връща резултат с имагинерната единица i (напр. √(-16) = ±4i).",
      display: true,
      category: "sqrt"
    },
    {
      question: "Каква е разликата между квадратен и кубичен корен?",
      answer: "Квадратният корен е от степен 2, а кубичният — от степен 3. За разлика от квадратните корени, кубичните корени от отрицателни числа имат реални решения.",
      display: true,
      category: "general"
    },
    {
      question: "Може ли да се изчисли кубичен корен от отрицателно число?",
      answer: "Да! Произведението на три отрицателни числа е отрицателно, така че ∛(-27) = -3 е валидно реално число.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Какво означава индексът n при корен n-та степен?",
      answer: "Индексът n показва степента на корена в ⁿ√x (2 за квадратен, 3 за кубичен, 4 за четвърти корен и т.н.).",
      display: true,
      category: "nth"
    },
    {
      question: "Може ли да се извлече корен n-та степен от отрицателно число?",
      answer: "Ако индексът n е нечетен (3, 5, 7...), съществува реално решение. Ако n е четен (2, 4, 6...), няма реално решение.",
      display: true,
      category: "nth"
    },
    {
      question: "Безплатен ли е този калкулатор?",
      answer: "Да, нашите калкулатори са 100% безплатни за неограничена употреба без регистрация.",
      display: true,
      category: "general"
    }
  ],
  sv: [
    {
      question: "Hur använder jag kvadratrotsräknaren?",
      answer: "Skriv in ditt tal och klicka på Beräkna. Du får omedelbart det exakta decimalvärdet, det förenklade rotuttrycket (t.ex. √72 = 6√2) och fullständig primtalsfaktorisering.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Kan räknaren hantera negativa tal?",
      answer: "Ja! I de reella talen finns ingen kvadratrot ur negativa tal, men i de komplexa talen returnerar räknaren den imaginära enheten i (t.ex. √(-16) = ±4i) med förklaring steg för steg.",
      display: true,
      category: "sqrt"
    },
    {
      question: "Vad är skillnaden mellan kvadratrot och kubikrot?",
      answer: "Kvadratroten har rotindex 2, medan kubikroten har rotindex 3 och tillåter reella lösningar för negativa tal.",
      display: true,
      category: "general"
    },
    {
      question: "Kan man beräkna kubikroten ur ett negativt tal?",
      answer: "Ja! Produkten av tre negativa tal är negativ, så ∛(-27) = -3 är en reell lösning.",
      display: true,
      category: "cbrt"
    },
    {
      question: "Vad betyder rotindexet n i en n:te rot?",
      answer: "Rotindexet n är rotens gradtal i ⁿ√x (2 för kvadratrot, 3 för kubikrot, 4 för fjärde roten osv.).",
      display: true,
      category: "nth"
    },
    {
      question: "Kan man beräkna n:te roten ur ett negativt tal?",
      answer: "Om rotindexet n är udda (3, 5, 7...) finns en reell lösning. Om n är jämnt (2, 4, 6...) finns ingen reell lösning.",
      display: true,
      category: "nth"
    },
    {
      question: "Är denna kalkylator gratis att använda?",
      answer: "Ja, alla våra räknare är 100% gratis och obegränsade utan krav på registrering eller nedladdning.",
      display: true,
      category: "general"
    }
  ]
};

// Write to each locale's .faq.json file
for (const [locale, items] of Object.entries(faqs)) {
  const filePath = path.join(localesDir, `${locale}.faq.json`);
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2) + '\n', 'utf8');
  console.log(`Updated FAQ file: ${locale}.faq.json (${items.length} items)`);
}

console.log('All FAQ files successfully updated with high-quality localized math FAQs!');
