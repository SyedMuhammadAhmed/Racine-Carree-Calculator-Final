// Full localized educational copy and boilerplate text for Nth Root Calculator across all 18 languages

export interface NthBoilerplate {
  s1Eyebrow: string;
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s1Cards: Array<{ expr: string; reason: string }>;
  s1P3: string;
  s1Caption: string;

  s2Eyebrow: string;
  s2Title: string;
  s2Steps: Array<{ title: string; text: string }>;

  s3Eyebrow: string;
  s3Title: string;
  s3Intro: string;
  s3Cards: Array<{ expr: string; reason: string }>;
  s3P1: string;
  s3P2: string;
  s3Caption: string;

  s4Eyebrow: string;
  s4Title: string;
  s4Intro: string;
  s4P1: string;
  s4PartsTitle: string;
  s4PartsIntro: string;
  s4IndexTitle: string;
  s4IndexDesc: string;
  s4RadicandTitle: string;
  s4RadicandDesc: string;

  s5Eyebrow: string;
  s5Title: string;
  s5Intro: string;
  s5ScrollHint: string;
  s5ThRoot: string;
  s5ThExpr: string;
  s5ThAnswer: string;
  s5ThWhy: string;
  s5Rows: Array<{ root: string; expr: string; answer: string; why: string }>;
  s5Caption: string;

  s6Eyebrow: string;
  s6Title: string;
  s6Intro: string;
  s6OddTitle: string;
  s6OddSubtitle: string;
  s6OddExample: string;
  s6EvenTitle: string;
  s6EvenSubtitle: string;
  s6EvenExample: string;
  s6BoxTitle: string;
  s6BoxText: string;

  s7Eyebrow: string;
  s7Title: string;
  s7Intro: string;
  s7ExTitle: string;
  s7Step1: string;
  s7Step2: string;
  s7Conclusion: string;

  s8Eyebrow: string;
  s8Title: string;
  s8Intro: string;
  s8Apps: Array<{ title: string; text: string }>;

  s9Eyebrow: string;
  s9Title: string;
  s9Intro: string;
  s9ScrollHint: string;
  s9ThExpr: string;
  s9ThRadicand: string;
  s9ThIndex: string;
  s9ThAnswer: string;

  s10Eyebrow: string;
  s10Title: string;

  s11Eyebrow: string;
  s11Title: string;
  s11BoxTitle: string;
  s11BoxText: string;

  quickCalcLabel: string;
  quickCalcSublabel: string;
}

export const NTH_BOILERPLATE: Record<string, NthBoilerplate> = {
  // 1. English (en)
  en: {
    s1Eyebrow: "Complete Guide",
    s1Title: "What Is an Nth Root?",
    s1P1: "You already know square roots (index 2) and cube roots (index 3). But what happens when you need the 4th root, the 5th root, or any higher degree? That is exactly what this nth root calculator is built for.",
    s1P2: "An nth root generalizes roots to any number of multiplications. The nth root of a number asks: what value, multiplied by itself n times, produces this number?",
    s1Cards: [
      { expr: "n = 2 → Square Root", reason: "√x (two multiplications)" },
      { expr: "n = 3 → Cube Root", reason: "∛x (three multiplications)" },
      { expr: "n = 4 → Fourth Root", reason: "⁴√x (four multiplications)" }
    ],
    s1P3: "Example: The 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16. Roots of any degree share the same mathematical foundation.",
    s1Caption: "Inverse exponentiation: Nth roots undo power exponentiation",
    s2Eyebrow: "Instructions",
    s2Title: "How to Use the Nth Root Calculator",
    s2Steps: [
      { title: "Enter the Index (n)", text: "Enter the positive whole-number index into the first box (e.g., 4 for a fourth root)." },
      { title: "Enter Your Number (x)", text: "Enter the radicand into the second box." },
      { title: "Click Calculate", text: "Click Calculate to get your exact decimal and simplified radical form immediately." }
    ],
    s3Eyebrow: "Notation",
    s3Title: "Nth Root Symbol: What Does ⁿ√ Mean?",
    s3Intro: "The nth root uses the radical symbol (√) with a small integer n placed in the notch to indicate the index:",
    s3Cards: [
      { expr: "ⁿ√x", reason: "«the nth root of x»" },
      { expr: "n = index", reason: "The degree of the root" },
      { expr: "x = radicand", reason: "The number under the radical" }
    ],
    s3P1: "When no index is shown (√x), an index of 2 is implied. In fractional exponent form:",
    s3P2: "ⁿ√x = x^(1/n). Both notations represent the identical mathematical operation.",
    s3Caption: "The anatomy of an nth root expression",
    s4Eyebrow: "Formula",
    s4Title: "What Is the Formula for Nth Root?",
    s4Intro: "The nth root is formally defined through the inverse of exponentiation:",
    s4P1: "If y = ⁿ√x, then yⁿ = x. Raising the root y to the power of n returns the radicand x.",
    s4PartsTitle: "Index and Radicand: The Two Key Parts",
    s4PartsIntro: "Understanding these two core components makes any radical expression easy to interpret:",
    s4IndexTitle: "Index (n)",
    s4IndexDesc: "The root degree indicating how many times the value must be multiplied by itself.",
    s4RadicandTitle: "Radicand (x)",
    s4RadicandDesc: "The input number placed under the radical symbol.",
    s5Eyebrow: "Examples",
    s5Title: "Worked Examples Across Different Indices",
    s5Intro: "Compare different root indices side-by-side to understand the pattern clearly:",
    s5ScrollHint: "Scroll table horizontally",
    s5ThRoot: "Root Degree",
    s5ThExpr: "Expression",
    s5ThAnswer: "Answer",
    s5ThWhy: "Why It Works",
    s5Rows: [
      { root: "Square root (n=2)", expr: "√64", answer: "8", why: "8 × 8 = 64" },
      { root: "Cube root (n=3)", expr: "∛64", answer: "4", why: "4 × 4 × 4 = 64" },
      { root: "4th root (n=4)", expr: "⁴√81", answer: "3", why: "3 × 3 × 3 × 3 = 81" },
      { root: "5th root (n=5)", expr: "⁵√243", answer: "3", why: "3⁵ = 243" },
      { root: "6th root (n=6)", expr: "⁶√729", answer: "3", why: "3⁶ = 729" }
    ],
    s5Caption: "Comparison of different root degrees side by side",
    s6Eyebrow: "Even vs Odd",
    s6Title: "Even vs. Odd Index: The Rule for Negative Numbers",
    s6Intro: "Whether a root accepts negative numbers depends strictly on whether the index is odd or even:",
    s6OddTitle: "Odd Index (n = 3, 5, 7...)",
    s6OddSubtitle: "Negative radicands have real, negative roots",
    s6OddExample: "Example: ⁵√(−32) = −2, because (−2)⁵ = −32.",
    s6EvenTitle: "Even Index (n = 2, 4, 6...)",
    s6EvenSubtitle: "Negative radicands have no real roots",
    s6EvenExample: "Example: ⁴√(−16) has no real solution because any real number to an even power is positive.",
    s6BoxTitle: "Why This Happens",
    s6BoxText: "An even number of negative factors always multiplies to a positive number, while an odd number of negative factors preserves the negative sign.",
    s7Eyebrow: "Simplification",
    s7Title: "Simplifying Radicals with an Nth Index",
    s7Intro: "Nth roots can be simplified by factoring out perfect nth powers:",
    s7ExTitle: "Example: Simplify ⁴√32",
    s7Step1: "Factor 32 into a perfect 4th power and remainder: 32 = 16 × 2",
    s7Step2: "Since 16 = 2⁴, extract 2 out of the radical: ⁴√32 = ⁴√(16 × 2) = 2⁴√2",
    s7Conclusion: "Extracting the highest perfect nth power leaves the simplest possible radical form.",
    s8Eyebrow: "Applications",
    s8Title: "Real-Life Applications of Nth Roots",
    s8Intro: "Nth roots are vital across advanced science, finance, and engineering:",
    s8Apps: [
      { title: "Finance & Compound Annual Growth (CAGR)", text: "CAGR uses the nth root: CAGR = ⁿ√(End/Start) − 1. A 5-year investment uses a 5th root; a 10-year investment uses a 10th root." },
      { title: "Statistics & Geometric Mean", text: "The geometric mean of n values is computed as ⁿ√(x₁·x₂·...·xₙ), ideal for growth rates and normalized indices." },
      { title: "Engineering & Multidimensional Scaling", text: "Aerodynamics and materials science employ higher-order roots whenever equations feature nth-power dependencies." },
      { title: "Computer Science & Cryptography", text: "Asymmetric cryptography algorithms (like RSA) rely on the computational difficulty of modular nth roots." }
    ],
    s9Eyebrow: "Reference Table",
    s9Title: "Reference Table: Nth Roots of Common Perfect Powers",
    s9Intro: "Key perfect powers and their exact integer roots:",
    s9ScrollHint: "Scroll table horizontally",
    s9ThExpr: "Expression",
    s9ThRadicand: "Radicand",
    s9ThIndex: "Index",
    s9ThAnswer: "Answer",
    s10Eyebrow: "FAQ",
    s10Title: "Frequently Asked Questions",
    s11Eyebrow: "Summary",
    s11Title: "A Quick Recap",
    s11BoxTitle: "The Bottom Line",
    s11BoxText: "An nth root answers what number multiplied by itself n times yields x. Odd indices accept negative numbers in real numbers; even indices require positive values. Use our calculator above for instant calculations.",
    quickCalcLabel: "Instant Nth Root",
    quickCalcSublabel: "Click any pair for an instant result"
  },

  // 2. French (fr)
  fr: {
    s1Eyebrow: "Guide Complet",
    s1Title: "Qu'est-ce qu'une racine n-ième (Nth Root) ?",
    s1P1: "Vous connaissez la racine carrée (indice 2) et la racine cubique (indice 3). Mais comment calculer la 4e racine, la 5e racine ou n'importe quel degré supérieur ? C'est précisément l'objet de cette calculatrice de racine n-ième.",
    s1P2: "La racine n-ième généralise le concept de racine à n multiplications. Elle répond à la question : quel nombre, multiplié n fois par lui-même, donne cette valeur ?",
    s1Cards: [
      { expr: "n = 2 → Racine Carrée", reason: "√x (deux multiplications)" },
      { expr: "n = 3 → Racine Cubique", reason: "∛x (trois multiplications)" },
      { expr: "n = 4 → Racine 4e", reason: "⁴√x (quatre multiplications)" }
    ],
    s1P3: "Exemple : La 4e racine de 16 est 2, car 2 × 2 × 2 × 2 = 16. Toutes les racines partagent le même principe fondamental.",
    s1Caption: "L'opération inverse : la racine n-ième annule l'élévation à la puissance n",
    s2Eyebrow: "Mode d'emploi",
    s2Title: "Comment utiliser la calculatrice de racine n-ième",
    s2Steps: [
      { title: "Entrez l'indice (n)", text: "Saisissez l'entier positif n dans le premier champ (ex. 4 pour une racine quatrième)." },
      { title: "Entrez le nombre (x)", text: "Saisissez le radicande dans le deuxième champ." },
      { title: "Cliquez sur Calculer", text: "Obtenez instantanément la valeur décimale exacte et la forme radicale simplifiée." }
    ],
    s3Eyebrow: "Notation",
    s3Title: "Symbole de la racine n-ième : Que signifie ⁿ√ ?",
    s3Intro: "La racine n-ième utilise le symbole radical (√) avec l'indice n inscrit dans l'encoche :",
    s3Cards: [
      { expr: "ⁿ√x", reason: "«racine n-ième de x»" },
      { expr: "n = indice", reason: "Le degré de la racine" },
      { expr: "x = radicande", reason: "Le nombre sous le radical" }
    ],
    s3P1: "Quand aucun indice n'est écrit (√x), l'indice 2 est sous-entendu. Sous forme d'exposant fractionnaire :",
    s3P2: "ⁿ√x = x^(1/n). Les deux notations sont rigoureusement équivalentes.",
    s3Caption: "Composantes d'une expression de racine n-ième",
    s4Eyebrow: "Formule",
    s4Title: "Quelle est la formule de la racine n-ième ?",
    s4Intro: "La racine n-ième est formellement définie comme l'inverse de la puissance :",
    s4P1: "Si y = ⁿ√x, alors yⁿ = x. Élever y à la puissance n redonne le radicande x.",
    s4PartsTitle: "Indice et radicande : les deux éléments clés",
    s4PartsIntro: "Ces deux notions permettent de maîtriser tous les calculs de radicaux :",
    s4IndexTitle: "Indice (n)",
    s4IndexDesc: "Le degré indiquant combien de fois la valeur est multipliée par elle-même.",
    s4RadicandTitle: "Radicande (x)",
    s4RadicandDesc: "Le nombre situé à l'intérieur du symbole radical.",
    s5Eyebrow: "Exemples",
    s5Title: "Exemples résolus selon différents indices",
    s5Intro: "Comparez les différents ordres de racines pour visualiser clairement la règle :",
    s5ScrollHint: "Faites défiler le tableau",
    s5ThRoot: "Degré",
    s5ThExpr: "Expression",
    s5ThAnswer: "Résultat",
    s5ThWhy: "Explication",
    s5Rows: [
      { root: "Racine carrée (n=2)", expr: "√64", answer: "8", why: "8 × 8 = 64" },
      { root: "Racine cubique (n=3)", expr: "∛64", answer: "4", why: "4 × 4 × 4 = 64" },
      { root: "Racine 4e (n=4)", expr: "⁴√81", answer: "3", why: "3 × 3 × 3 × 3 = 81" },
      { root: "Racine 5e (n=5)", expr: "⁵√243", answer: "3", why: "3⁵ = 243" },
      { root: "Racine 6e (n=6)", expr: "⁶√729", answer: "3", why: "3⁶ = 729" }
    ],
    s5Caption: "Comparaison de différents degrés de racines côte à côte",
    s6Eyebrow: "Pair vs Impair",
    s6Title: "Indice pair vs impair : règle pour les nombres négatifs",
    s6Intro: "L'existence d'une solution réelle pour un nombre négatif dépend de la parité de l'indice :",
    s6OddTitle: "Indice impair (n = 3, 5, 7...)",
    s6OddSubtitle: "Un radicande négatif donne une racine réelle négative",
    s6OddExample: "Exemple : ⁵√(−32) = −2, car (−2)⁵ = −32.",
    s6EvenTitle: "Indice pair (n = 2, 4, 6...)",
    s6EvenSubtitle: "Un radicande négatif n'a aucune racine réelle",
    s6EvenExample: "Exemple : ⁴√(−16) n'a pas de solution réelle car tout réel élevé à une puissance paire est positif.",
    s6BoxTitle: "Pourquoi cette règle ?",
    s6BoxText: "Le produit d'un nombre pair de facteurs négatifs est toujours positif, tandis qu'un nombre impair préserve le signe négatif.",
    s7Eyebrow: "Simplification",
    s7Title: "Comment simplifier une racine n-ième",
    s7Intro: "On simplifie une racine n-ième en extrayant les facteurs puissances n-ièmes parfaites :",
    s7ExTitle: "Exemple : Simplifier ⁴√32",
    s7Step1: "Décomposez 32 avec une puissance 4e parfaite : 32 = 16 × 2",
    s7Step2: "Puisque 16 = 2⁴, extrayez 2 du radical : ⁴√32 = ⁴√(16 × 2) = 2⁴√2",
    s7Conclusion: "Extraire la plus grande puissance n-ième parfaite donne la forme irréductible.",
    s8Eyebrow: "Applications",
    s8Title: "Applications concrètes des racines n-ièmes",
    s8Intro: "Les racines d'ordre supérieur interviennent dans de nombreux domaines scientifiques :",
    s8Apps: [
      { title: "Finance & Taux de croissance annuel composé (TCAC)", text: "Le TCAC utilise la racine n-ième : TCAC = ⁿ√(Fin/Début) − 1. Un investissement sur 5 ans requiert une racine 5e." },
      { title: "Statistiques & Moyenne géométrique", text: "La moyenne géométrique de n valeurs est ⁿ√(x₁·x₂·...·xₙ), incontournable pour les taux et ratios." },
      { title: "Physique & Sciences des matériaux", text: "Les lois d'échelle multidimensionnelles et la mécanique des fluides font appel aux puissances et racines n-ièmes." },
      { title: "Cryptographie & Informatique", text: "Le chiffrement RSA repose sur la difficulté calculatoire d'extraire des racines modulaires n-ièmes." }
    ],
    s9Eyebrow: "Table de référence",
    s9Title: "Tableau de référence : Racines de puissances parfaites",
    s9Intro: "Puissances parfaites usuelles et leurs racines entières exactes :",
    s9ScrollHint: "Faites défiler le tableau",
    s9ThExpr: "Expression",
    s9ThRadicand: "Radicande",
    s9ThIndex: "Indice",
    s9ThAnswer: "Réponse",
    s10Eyebrow: "FAQ",
    s10Title: "Foire Aux Questions",
    s11Eyebrow: "Résumé",
    s11Title: "En résumé",
    s11BoxTitle: "L'essentiel à retenir",
    s11BoxText: "La racine n-ième identifie le nombre qui, multiplié n fois par lui-même, donne x. Les indices impairs acceptent les réels négatifs ; les indices pairs exigent des valeurs positives. Utilisez notre outil ci-dessus pour calculer immédiatement.",
    quickCalcLabel: "Calcul Instantané — Racine N-ième",
    quickCalcSublabel: "Cliquez sur une paire pour un résultat immédiat"
  },

  // 3. Spanish (es)
  es: {
    s1Eyebrow: "Guía Completa",
    s1Title: "¿Qué es una Raíz N-ésima (Nth Root)?",
    s1P1: "Ya dominas la raíz cuadrada (índice 2) y la cúbica (índice 3). Pero, ¿qué sucede cuando necesitas calcular la raíz cuarta, quinta o cualquier grado superior? Para eso está diseñada esta calculadora de raíz n-ésima.",
    s1P2: "Una raíz n-ésima generaliza el cálculo de raíces para cualquier número de multiplicaciones. Se formula la pregunta: ¿qué número multiplicado por sí mismo n veces produce este valor?",
    s1Cards: [
      { expr: "n = 2 → Raíz Cuadrada", reason: "√x (dos multiplicaciones)" },
      { expr: "n = 3 → Raíz Cúbica", reason: "∛x (tres multiplicaciones)" },
      { expr: "n = 4 → Raíz Cuarta", reason: "⁴√x (cuatro multiplicaciones)" }
    ],
    s1P3: "Ejemplo: La raíz 4ª de 16 es 2, ya que 2 × 2 × 2 × 2 = 16. Todas las raíces comparten esta base matemática.",
    s1Caption: "Operación inversa: las raíces n-ésimas deshacen las potencias",
    s2Eyebrow: "Instrucciones",
    s2Title: "Cómo usar la calculadora de raíz n-ésima",
    s2Steps: [
      { title: "Introduce el índice (n)", text: "Escribe el número entero positivo n en la primera casilla (ej. 4 para raíz cuarta)." },
      { title: "Introduce el número (x)", text: "Escribe el radicando en la segunda casilla." },
      { title: "Haz clic en Calcular", text: "Obtén al instante el valor decimal exacto y la forma simplificada." }
    ],
    s3Eyebrow: "Notación",
    s3Title: "Símbolo de la raíz n-ésima: ¿Qué significa ⁿ√?",
    s3Intro: "La raíz n-ésima utiliza el símbolo radical (√) con un pequeño índice n en la esquina superior izquierda:",
    s3Cards: [
      { expr: "ⁿ√x", reason: "«la raíz n-ésima de x»" },
      { expr: "n = índice", reason: "El grado de la raíz" },
      { expr: "x = radicando", reason: "El número bajo el radical" }
    ],
    s3P1: "Si no aparece índice (√x), se sobreentiende un 2. En forma de exponente fraccionario:",
    s3P2: "ⁿ√x = x^(1/n). Ambas notaciones representan exactamente la misma operación.",
    s3Caption: "Componentes de una expresión radical n-ésima",
    s4Eyebrow: "Fórmula",
    s4Title: "¿Cuál es la fórmula de la raíz n-ésima?",
    s4Intro: "La raíz n-ésima se define formalmente como la inversa de la potenciación:",
    s4P1: "Si y = ⁿ√x, entonces yⁿ = x. Elevar la raíz y a la potencia n devuelve el radicando x.",
    s4PartsTitle: "Índice y Radicando: Las dos partes fundamentales",
    s4PartsIntro: "Comprender estos dos términos facilita cualquier cálculo matemático:",
    s4IndexTitle: "Índice (n)",
    s4IndexDesc: "El grado que indica cuántas veces debe multiplicarse el valor por sí mismo.",
    s4RadicandTitle: "Radicando (x)",
    s4RadicandDesc: "El número que se encuentra dentro del signo radical.",
    s5Eyebrow: "Ejemplos",
    s5Title: "Ejemplos prácticos con distintos índices",
    s5Intro: "Compara distintos grados de raíz para visualizar el patrón con claridad:",
    s5ScrollHint: "Desplaza la tabla horizontalmente",
    s5ThRoot: "Grado",
    s5ThExpr: "Expresión",
    s5ThAnswer: "Resultado",
    s5ThWhy: "Explicación",
    s5Rows: [
      { root: "Raíz cuadrada (n=2)", expr: "√64", answer: "8", why: "8 × 8 = 64" },
      { root: "Raíz cúbica (n=3)", expr: "∛64", answer: "4", why: "4 × 4 × 4 = 64" },
      { root: "Raíz 4ª (n=4)", expr: "⁴√81", answer: "3", why: "3 × 3 × 3 × 3 = 81" },
      { root: "Raíz 5ª (n=5)", expr: "⁵√243", answer: "3", why: "3⁵ = 243" },
      { root: "Raíz 6ª (n=6)", expr: "⁶√729", answer: "3", why: "3⁶ = 729" }
    ],
    s5Caption: "Comparativa de diferentes grados de raíces",
    s6Eyebrow: "Par vs Impar",
    s6Title: "Índice par vs. impar: regla para números negativos",
    s6Intro: "La existencia de solución en los números reales depende de si el índice es par o impar:",
    s6OddTitle: "Índice impar (n = 3, 5, 7...)",
    s6OddSubtitle: "Los radicandos negativos dan raíces reales negativas",
    s6OddExample: "Ejemplo: ⁵√(−32) = −2, ya que (−2)⁵ = −32.",
    s6EvenTitle: "Índice par (n = 2, 4, 6...)",
    s6EvenSubtitle: "Los radicandos negativos no tienen raíz real",
    s6EvenExample: "Ejemplo: ⁴√(−16) no tiene solución real porque ningún real elevado a potencia par es negativo.",
    s6BoxTitle: "¿Por qué funciona así?",
    s6BoxText: "Multiplicar un número par de factores negativos da positivo, mientras que un número impar conserva el signo negativo.",
    s7Eyebrow: "Simplificación",
    s7Title: "Cómo simplificar radicales de índice n",
    s7Intro: "Se simplifican raíces extrayendo factores que sean potencias n-ésimas perfectas:",
    s7ExTitle: "Ejemplo: Simplificar ⁴√32",
    s7Step1: "Descompón 32 con una potencia 4ª perfecta: 32 = 16 × 2",
    s7Step2: "Como 16 = 2⁴, extrae el 2: ⁴√32 = ⁴√(16 × 2) = 2⁴√2",
    s7Conclusion: "Extraer la máxima potencia n-ésima deja el radical en su forma más reducida.",
    s8Eyebrow: "Aplicaciones",
    s8Title: "Aplicaciones de las raíces n-ésimas en la vida real",
    s8Intro: "Las raíces de orden superior se aplican en múltiples campos científicos:",
    s8Apps: [
      { title: "Finanzas y Tasa de Crecimiento Anual Compuesto (CAGR)", text: "El CAGR utiliza raíces n-ésimas: CAGR = ⁿ√(Final/Inicial) − 1. A 5 años se utiliza una raíz quinta." },
      { title: "Estadística y Media Geométrica", text: "La media geométrica de n datos se calcula como ⁿ√(x₁·x₂·...·xₙ), esencial para tasas y ratios." },
      { title: "Ingeniería y Escalas Multidimensionales", text: "La aerodinámica y la física de materiales usan raíces de orden superior en relaciones de potencias." },
      { title: "Informática y Criptografía", text: "Algoritmos como RSA se basan en la dificultad de extraer raíces modulares n-ésimas." }
    ],
    s9Eyebrow: "Tabla de referencia",
    s9Title: "Tabla de referencia: Raíces n-ésimas de potencias perfectas",
    s9Intro: "Principales potencias perfectas y sus raíces exactas:",
    s9ScrollHint: "Desplaza la tabla horizontalmente",
    s9ThExpr: "Expresión",
    s9ThRadicand: "Radicando",
    s9ThIndex: "Índice",
    s9ThAnswer: "Respuesta",
    s10Eyebrow: "Preguntas Frecuentes",
    s10Title: "Preguntas Frecuentes sobre Raíz N-ésima",
    s11Eyebrow: "Resumen",
    s11Title: "Conclusión Rápida",
    s11BoxTitle: "Puntos clave",
    s11BoxText: "La raíz n-ésima halla el valor que multiplicado n veces por sí mismo da x. Los índices impares admiten números negativos reales; los pares exigen valores positivos. Calcula al instante con nuestra herramienta superior.",
    quickCalcLabel: "Cálculo Instantáneo — Raíz N-ésima",
    quickCalcSublabel: "Haz clic en un par para un resultado inmediato"
  },

  // 4. German (de)
  de: {
    s1Eyebrow: "Vollständiger Leitfaden",
    s1Title: "Was ist eine n-te Wurzel (Nth Root)?",
    s1P1: "Quadratwurzeln (Grad 2) und Kubikwurzeln (Grad 3) sind weit bekannt. Was aber, wenn die 4., 5. oder eine noch höhere Wurzel benötigt wird? Genau dafür ist dieser Rechner für n-te Wurzeln konzipiert.",
    s1P2: "Eine n-te Wurzel verallgemeinert das Wurzelziehen auf beliebige Exponenten. Sie beantwortet die Frage: Welche Zahl, n-mal mit sich selbst multipliziert, ergibt diesen Wert?",
    s1Cards: [
      { expr: "n = 2 → Quadratwurzel", reason: "√x (zweifache Multiplikation)" },
      { expr: "n = 3 → Kubikwurzel", reason: "∛x (dreifache Multiplikation)" },
      { expr: "n = 4 → Vierte Wurzel", reason: "⁴√x (vierfache Multiplikation)" }
    ],
    s1P3: "Beispiel: Die 4. Wurzel aus 16 ist 2, da 2 × 2 × 2 × 2 = 16. Alle Wurzelgrade folgen demselben Prinzip.",
    s1Caption: "Umkehroperation: n-te Wurzeln kehren das Potenzieren um",
    s2Eyebrow: "Anleitung",
    s2Title: "So bedienen Sie den Rechner für n-te Wurzeln",
    s2Steps: [
      { title: "Wurzelexponent eingeben (n)", text: "Geben Sie die positive ganze Zahl n in das erste Feld ein (z. B. 4 für vierte Wurzel)." },
      { title: "Radikand eingeben (x)", text: "Tragen Sie die Zahl in das zweite Feld ein." },
      { title: "Auf Berechnen klicken", text: "Erhalten Sie sofort den exakten Dezimalwert und die vereinfachte Wurzelform." }
    ],
    s3Eyebrow: "Notation",
    s3Title: "Das n-te Wurzelsymbol: Was bedeutet ⁿ√?",
    s3Intro: "Die n-te Wurzel nutzt das Wurzelzeichen (√) mit dem Wurzelexponenten n in der Kerbe:",
    s3Cards: [
      { expr: "ⁿ√x", reason: "«die n-te Wurzel aus x»" },
      { expr: "n = Wurzelexponent", reason: "Der Grad der Wurzel" },
      { expr: "x = Radikand", reason: "Die Zahl unter der Wurzel" }
    ],
    s3P1: "Steht kein Exponent da (√x), gilt n = 2. Als gebrochener Exponent geschrieben:",
    s3P2: "ⁿ√x = x^(1/n). Beide Notationen sind mathematisch vollkommen identisch.",
    s3Caption: "Bestandteile eines n-ten Wurzelausdrucks",
    s4Eyebrow: "Formel",
    s4Title: "Die mathematische Definition der n-ten Wurzel",
    s4Intro: "Die n-te Wurzel ist über die Umkehrung der Potenz definiert:",
    s4P1: "Wenn y = ⁿ√x, dann gilt yⁿ = x. Potenzieren mit n führt zurück zum Radikanden x.",
    s4PartsTitle: "Exponent und Radikand: Die zwei Hauptbestandteile",
    s4PartsIntro: "Diese zwei Begriffe bilden das Fundament aller Wurzelausdrücke:",
    s4IndexTitle: "Wurzelexponent (n)",
    s4IndexDesc: "Gibt an, wie oft der Wert mit sich selbst multipliziert werden muss.",
    s4RadicandTitle: "Radikand (x)",
    s4RadicandDesc: "Die Zahl, die unter dem Wurzelzeichen steht.",
    s5Eyebrow: "Beispiele",
    s5Title: "Berechnete Beispiele verschiedener Wurzelgrade",
    s5Intro: "Vergleichen Sie verschiedene Grade, um das Prinzip direkt zu verstehen:",
    s5ScrollHint: "Tabelle horizontal scrollen",
    s5ThRoot: "Grad",
    s5ThExpr: "Ausdruck",
    s5ThAnswer: "Ergebnis",
    s5ThWhy: "Begründung",
    s5Rows: [
      { root: "Quadratwurzel (n=2)", expr: "√64", answer: "8", why: "8 × 8 = 64" },
      { root: "Kubikwurzel (n=3)", expr: "∛64", answer: "4", why: "4 × 4 × 4 = 64" },
      { root: "4. Wurzel (n=4)", expr: "⁴√81", answer: "3", why: "3 × 3 × 3 × 3 = 81" },
      { root: "5. Wurzel (n=5)", expr: "⁵√243", answer: "3", why: "3⁵ = 243" },
      { root: "6. Wurzel (n=6)", expr: "⁶√729", answer: "3", why: "3⁶ = 729" }
    ],
    s5Caption: "Direkter Vergleich unterschiedlicher Wurzelgrade",
    s6Eyebrow: "Gerade vs Ungerade",
    s6Title: "Gerader vs. ungerader Exponent: Negative Zahlen",
    s6Intro: "Ob ein negativer Radikand eine reelle Wurzel besitzt, bestimmt die Parität des Exponenten:",
    s6OddTitle: "Ungerader Exponent (n = 3, 5, 7...)",
    s6OddSubtitle: "Negative Radikanden haben reelle, negative Wurzeln",
    s6OddExample: "Beispiel: ⁵√(−32) = −2, da (−2)⁵ = −32.",
    s6EvenTitle: "Gerader Exponent (n = 2, 4, 6...)",
    s6EvenSubtitle: "Negative Radikanden besitzen keine reelle Wurzel",
    s6EvenExample: "Beispiel: ⁴√(−16) hat keine reelle Lösung, da jede reelle Zahl mit geradem Exponenten positiv ist.",
    s6BoxTitle: "Mathematischer Hintergrund",
    s6BoxText: "Eine gerade Anzahl negativer Faktoren ergibt immer ein positives Vorzeichen, eine ungerade Anzahl behält das Minuszeichen bei.",
    s7Eyebrow: "Vereinfachung",
    s7Title: "Radikale mit n-tem Exponenten vereinfachen",
    s7Intro: "Wurzeln werden durch Ausklammern perfekter n-ter Potenzen vereinfacht:",
    s7ExTitle: "Beispiel: Vereinfachen von ⁴√32",
    s7Step1: "32 in eine perfekte 4. Potenz zerlegen: 32 = 16 × 2",
    s7Step2: "Da 16 = 2⁴, ziehen wir 2 vor die Wurzel: ⁴√32 = ⁴√(16 × 2) = 2⁴√2",
    s7Conclusion: "Das Ausziehen der maximalen n-ten Potenz liefert die vereinfachte Wurzel.",
    s8Eyebrow: "Anwendungen",
    s8Title: "Praktische Anwendungen der n-ten Wurzel",
    s8Intro: "Höhere Wurzeln sind unverzichtbar in Wissenschaft und Praxis:",
    s8Apps: [
      { title: "Finanzwesen & CAGR (Wachstumsrate)", text: "Die jährliche Wachstumsrate nutzt n-te Wurzeln: CAGR = ⁿ√(Endwert/Startwert) − 1. Für 5 Jahre eine 5. Wurzel." },
      { title: "Statistik & Geometrisches Mittel", text: "Das geometrische Mittel von n Datenpunkten lautet ⁿ√(x₁·x₂·...·xₙ) — Standard für Wachstumsraten." },
      { title: "Ingenieurwesen & Skalierung", text: "Aerodynamik und Materialphysik erfordern n-te Wurzeln bei mehrdimensionalen Potenzabhängigkeiten." },
      { title: "Informatik & Kryptographie", text: "Asymmetrische Verschlüsselungen wie RSA basieren auf der Komplexität modularer n-ter Wurzeln." }
    ],
    s9Eyebrow: "Referenztabelle",
    s9Title: "Referenztabelle: n-te Wurzeln perfekter Potenzen",
    s9Intro: "Häufige perfekte Potenzen und ihre ganzzahligen Wurzeln:",
    s9ScrollHint: "Tabelle horizontal scrollen",
    s9ThExpr: "Ausdruck",
    s9ThRadicand: "Radikand",
    s9ThIndex: "Exponent",
    s9ThAnswer: "Ergebnis",
    s10Eyebrow: "FAQ",
    s10Title: "Häufig gestellte Fragen zur n-ten Wurzel",
    s11Eyebrow: "Zusammenfassung",
    s11Title: "Wichtiges auf einen Blick",
    s11BoxTitle: "Kernaussage",
    s11BoxText: "Die n-te Wurzel bestimmt jene Zahl, die n-mal mit sich selbst multipliziert x ergibt. Ungerade Exponenten erlauben negative Zahlen in den reellen Zahlen, gerade erfordern positive Werte.",
    quickCalcLabel: "Schnellberechnung — n-te Wurzel",
    quickCalcSublabel: "Klicken Sie auf ein Zahlenpaar für ein Sofortergebnis"
  },

  // 5. Italian (it)
  it: {
    s1Eyebrow: "Guida Completa",
    s1Title: "Cos'è una Radice Ennesima (Nth Root)?",
    s1P1: "Conosci già la radice quadrata (indice 2) e quella cubica (indice 3). Ma cosa fare quando occorre calcolare la 4ª, la 5ª radice o un grado superiore? Questo calcolatore di radice ennesima è stato creato appositamente per questo.",
    s1P2: "La radice ennesima generalizza il calcolo delle radici per qualsiasi numero di moltiplicazioni. Risponde alla domanda: quale valore, moltiplicato per se stesso n volte, produce questo numero?",
    s1Cards: [
      { expr: "n = 2 → Radice Quadrata", reason: "√x (due moltiplicazioni)" },
      { expr: "n = 3 → Radice Cubica", reason: "∛x (tre moltiplicazioni)" },
      { expr: "n = 4 → Radice Quarta", reason: "⁴√x (quattro moltiplicazioni)" }
    ],
    s1P3: "Esempio: La radice quarta di 16 è 2, perché 2 × 2 × 2 × 2 = 16. Tutte le radici condividono lo stesso principio matematico.",
    s1Caption: "Operazione inversa: le radici ennesime annullano le potenze",
    s2Eyebrow: "Istruzioni",
    s2Title: "Come usare il calcolatore di radice ennesima",
    s2Steps: [
      { title: "Inserisci l'indice (n)", text: "Digita l'intero positivo n nel primo campo (es. 4 per radice quarta)." },
      { title: "Inserisci il numero (x)", text: "Digita il radicando nel secondo campo." },
      { title: "Clicca su Calcola", text: "Visualizza immediatamente il valore decimale esatto e la forma semplificata." }
    ],
    s3Eyebrow: "Notazione",
    s3Title: "Simbolo della radice ennesima: Cosa significa ⁿ√?",
    s3Intro: "La radice ennesima adotta il simbolo di radice (√) con l'indice intero n posto nell'angolo sinistro:",
    s3Cards: [
      { expr: "ⁿ√x", reason: "«la radice ennesima di x»" },
      { expr: "n = indice", reason: "Il grado della radice" },
      { expr: "x = radicando", reason: "Il numero sotto il radicale" }
    ],
    s3P1: "Se l'indice non è scritto (√x), si intende n = 2. Come esponente frazionario:",
    s3P2: "ⁿ√x = x^(1/n). Entrambe le forme indicano la medesima operazione algebrica.",
    s3Caption: "Anatomia di una radice ennesima",
    s4Eyebrow: "Formula",
    s4Title: "Qual è la formula della radice ennesima?",
    s4Intro: "La radice ennesima è definita formalmente come l'inverso dell'elevamento a potenza:",
    s4P1: "Se y = ⁿ√x, allora yⁿ = x. Elevare la radice y alla potenza n restituisce il radicando x.",
    s4PartsTitle: "Indice e Radicando: I due elementi essenziali",
    s4PartsIntro: "Comprendere queste due componenti permette di decifrare ogni radicale:",
    s4IndexTitle: "Indice (n)",
    s4IndexDesc: "Il grado che indica quante volte il valore deve essere moltiplicato per se stesso.",
    s4RadicandTitle: "Radicando (x)",
    s4RadicandDesc: "Il numero collocato sotto il segno di radice.",
    s5Eyebrow: "Esempi",
    s5Title: "Esempi pratici con diversi indici",
    s5Intro: "Metti a confronto diversi gradi di radice per afferrare il meccanismo:",
    s5ScrollHint: "Scorri la tabella in orizzontale",
    s5ThRoot: "Grado",
    s5ThExpr: "Espressione",
    s5ThAnswer: "Risultato",
    s5ThWhy: "Spiegazione",
    s5Rows: [
      { root: "Radice quadrata (n=2)", expr: "√64", answer: "8", why: "8 × 8 = 64" },
      { root: "Radice cubica (n=3)", expr: "∛64", answer: "4", why: "4 × 4 × 4 = 64" },
      { root: "Radice 4ª (n=4)", expr: "⁴√81", answer: "3", why: "3 × 3 × 3 × 3 = 81" },
      { root: "Radice 5ª (n=5)", expr: "⁵√243", answer: "3", why: "3⁵ = 243" },
      { root: "Radice 6ª (n=6)", expr: "⁶√729", answer: "3", why: "3⁶ = 729" }
    ],
    s5Caption: "Confronto tra diversi gradi di radice",
    s6Eyebrow: "Pari vs Dispari",
    s6Title: "Indice pari vs. dispari: la regola dei numeri negativi",
    s6Intro: "L'esistenza della soluzione nei numeri reali dipende dalla parità dell'indice:",
    s6OddTitle: "Indice dispari (n = 3, 5, 7...)",
    s6OddSubtitle: "I radicandi negativi danno radici reali negative",
    s6OddExample: "Esempio: ⁵√(−32) = −2, poiché (−2)⁵ = −32.",
    s6EvenTitle: "Indice pari (n = 2, 4, 6...)",
    s6EvenSubtitle: "I radicandi negativi non hanno radici reali",
    s6EvenExample: "Esempio: ⁴√(−16) non ha soluzioni reali poiché qualsiasi reale elevato a potenza pari è positivo.",
    s6BoxTitle: "Perché funziona così",
    s6BoxText: "Un numero pari di moltiplicazioni di segni meno produce sempre un più, mentre un numero dispari mantiene il segno negativo.",
    s7Eyebrow: "Semplificazione",
    s7Title: "Come semplificare i radicali con indice ennesimo",
    s7Intro: "Si semplificano le radici estraendo fattori che sono potenze ennesime perfette:",
    s7ExTitle: "Esempio: Semplificare ⁴√32",
    s7Step1: "Scomponi 32 con una potenza quarta perfetta: 32 = 16 × 2",
    s7Step2: "Poiché 16 = 2⁴, estrai il 2: ⁴√32 = ⁴√(16 × 2) = 2⁴√2",
    s7Conclusion: "Estrarre la massima potenza ennesima porta il radicale alla forma minima.",
    s8Eyebrow: "Applicazioni",
    s8Title: "Applicazioni reali delle radici ennesime",
    s8Intro: "Le radici di grado superiore trovano impiego in numerosi rami scientifici:",
    s8Apps: [
      { title: "Finanza & Tasso Annuo di Crescita Composto (CAGR)", text: "Il CAGR usa la radice ennesima: CAGR = ⁿ√(Finale/Iniziale) − 1. Su 5 anni si usa la radice quinta." },
      { title: "Statistica & Media Geometrica", text: "La media geometrica di n valori è ⁿ√(x₁·x₂·...·xₙ), fondamentale per indici e tassi di rendimento." },
      { title: "Ingegneria & Fisica", text: "L'aerodinamica e le scienze dei materiali applicano radici ennesime per problemi di scala multidimensionale." },
      { title: "Informatica & Crittografia", text: "Algoritmi asimmetrici come RSA si basano sulla complessità computazionale dell'estrazione di radici modulari." }
    ],
    s9Eyebrow: "Tabella di riferimento",
    s9Title: "Tabella di riferimento: Radici di potenze perfette",
    s9Intro: "Principali potenze perfette e le relative radici intere:",
    s9ScrollHint: "Scorri la tabella orizzontalmente",
    s9ThExpr: "Espressione",
    s9ThRadicand: "Radicando",
    s9ThIndex: "Indice",
    s9ThAnswer: "Risultato",
    s10Eyebrow: "FAQ",
    s10Title: "Domande Frequenti sulla Radice Ennesima",
    s11Eyebrow: "Riepilogo",
    s11Title: "In Breve",
    s11BoxTitle: "Concetto chiave",
    s11BoxText: "La radice ennesima trova il numero che moltiplicato n volte per se stesso dà x. Gli indici dispari accettano numeri negativi reali; quelli pari richiedono valori positivi.",
    quickCalcLabel: "Calcolo Istantaneo — Radice Ennesima",
    quickCalcSublabel: "Clicca su una coppia per un risultato immediato"
  },

  // 6. Portuguese (pt)
  pt: {
    s1Eyebrow: "Guia Completo",
    s1Title: "O que é uma Raiz Enésima (Nth Root)?",
    s1P1: "Você já conhece a raiz quadrada (índice 2) e a cúbica (índice 3). Mas como calcular a 4ª, 5ª ou qualquer raiz de ordem superior? É exatamente para isso que foi desenvolvida esta calculadora de raiz enésima.",
    s1P2: "Uma raiz enésima generaliza o cálculo de raízes para qualquer número de multiplicações. Ela responde: qual valor, multiplicado por si mesmo n vezes, resulta neste número?",
    s1Cards: [
      { expr: "n = 2 → Raiz Quadrada", reason: "√x (duas multiplicações)" },
      { expr: "n = 3 → Raiz Cúbica", reason: "∛x (três multiplicações)" },
      { expr: "n = 4 → Raiz Quarta", reason: "⁴√x (quatro multiplicações)" }
    ],
    s1P3: "Exemplo: A raiz 4ª de 16 é 2, pois 2 × 2 × 2 × 2 = 16. Todas as raízes compartilham a mesma base teórica.",
    s1Caption: "Operação inversa: raízes enésimas revertem a exponenciação",
    s2Eyebrow: "Instruções",
    s2Title: "Como usar a calculadora de raiz enésima",
    s2Steps: [
      { title: "Insira o índice (n)", text: "Digite o número inteiro positivo n na primeira caixa (ex.: 4 para raiz quarta)." },
      { title: "Insira o número (x)", text: "Digite o radicando na segunda caixa." },
      { title: "Clique em Calcular", text: "Obtenha instantaneamente o valor decimal exato e a forma simplificada." }
    ],
    s3Eyebrow: "Notação",
    s3Title: "Símbolo da raiz enésima: O que significa ⁿ√?",
    s3Intro: "A raiz enésima usa o símbolo radical (√) com o índice n no canto superior esquerdo:",
    s3Cards: [
      { expr: "ⁿ√x", reason: "«a raiz enésima de x»" },
      { expr: "n = índice", reason: "O grau da raiz" },
      { expr: "x = radicando", reason: "O número sob o radical" }
    ],
    s3P1: "Quando o índice é omitido (√x), assume-se n = 2. Na forma fracionária:",
    s3P2: "ⁿ√x = x^(1/n). Ambas as notações expressam a mesma operação.",
    s3Caption: "Componentes de uma expressão radical enésima",
    s4Eyebrow: "Fórmula",
    s4Title: "Qual é a fórmula da raiz enésima?",
    s4Intro: "A raiz enésima é definida como o inverso da potenciação:",
    s4P1: "Se y = ⁿ√x, então yⁿ = x. Elevar y à potência n restitui o radicando x.",
    s4PartsTitle: "Índice e Radicando: As duas partes essenciais",
    s4PartsIntro: "Compreender estes dois elementos facilita a resolução de qualquer expressão:",
    s4IndexTitle: "Índice (n)",
    s4IndexDesc: "O grau indicando quantas vezes o número é multiplicado por si mesmo.",
    s4RadicandTitle: "Radicando (x)",
    s4RadicandDesc: "O número localizado dentro do radical.",
    s5Eyebrow: "Exemplos",
    s5Title: "Exemplos resolvidos em vários graus",
    s5Intro: "Compare diferentes graus de raízes lado a lado:",
    s5ScrollHint: "Role a tabela horizontalmente",
    s5ThRoot: "Grau",
    s5ThExpr: "Expressão",
    s5ThAnswer: "Resultado",
    s5ThWhy: "Explicação",
    s5Rows: [
      { root: "Raiz quadrada (n=2)", expr: "√64", answer: "8", why: "8 × 8 = 64" },
      { root: "Raiz cúbica (n=3)", expr: "∛64", answer: "4", why: "4 × 4 × 4 = 64" },
      { root: "Raiz 4ª (n=4)", expr: "⁴√81", answer: "3", why: "3 × 3 × 3 × 3 = 81" },
      { root: "Raiz 5ª (n=5)", expr: "⁵√243", answer: "3", why: "3⁵ = 243" },
      { root: "Raiz 6ª (n=6)", expr: "⁶√729", answer: "3", why: "3⁶ = 729" }
    ],
    s5Caption: "Comparação de diferentes graus de raiz",
    s6Eyebrow: "Par vs Ímpar",
    s6Title: "Índice par vs. ímpar: regra dos números negativos",
    s6Intro: "A existência de soluções no conjunto dos números reais depende da paridade do índice:",
    s6OddTitle: "Índice ímpar (n = 3, 5, 7...)",
    s6OddSubtitle: "Radicandos negativos resultam em raízes reais negativas",
    s6OddExample: "Exemplo: ⁵√(−32) = −2, pois (−2)⁵ = −32.",
    s6EvenTitle: "Índice par (n = 2, 4, 6...)",
    s6EvenSubtitle: "Radicandos negativos não possuem raiz real",
    s6EvenExample: "Exemplo: ⁴√(−16) não tem solução real, pois qualquer número real elevado a potência par é positivo.",
    s6BoxTitle: "Por que isso acontece",
    s6BoxText: "Multiplicar um número par de fatores negativos resulta em positivo, ao passo que uma quantidade ímpar preserva o sinal negativo.",
    s7Eyebrow: "Simplificação",
    s7Title: "Como simplificar radicais com índice n",
    s7Intro: "Simplificam-se raízes extraindo fatores que formem potências enésimas perfeitas:",
    s7ExTitle: "Exemplo: Simplificar ⁴√32",
    s7Step1: "Decomponha 32 com uma potência 4ª perfeita: 32 = 16 × 2",
    s7Step2: "Como 16 = 2⁴, retire o 2 do radical: ⁴√32 = ⁴√(16 × 2) = 2⁴√2",
    s7Conclusion: "Extrair a maior potência enésima perfeita produz a forma mais simplificada.",
    s8Eyebrow: "Aplicações",
    s8Title: "Aplicações práticas da raiz enésima",
    s8Intro: "Raízes de ordem superior são vitais em ciência e tecnologia:",
    s8Apps: [
      { title: "Finanças & Taxa de Crescimento Anual Composta (CAGR)", text: "O CAGR emprega a raiz enésima: CAGR = ⁿ√(Final/Inicial) − 1. Para 5 anos, usa-se a raiz quinta." },
      { title: "Estatística & Média Geométrica", text: "A média geométrica de n termos é ⁿ√(x₁·x₂·...·xₙ), indispensável para taxas e proporções." },
      { title: "Engenharia & Física", text: "Aerodinâmica e física de materiais empregam raízes enésimas em leis de potência multidimensionais." },
      { title: "Computação & Criptografia", text: "Criptografia assimétrica como RSA fundamenta-se na complexidade de extrair raízes modulares enésimas." }
    ],
    s9Eyebrow: "Tabela de referência",
    s9Title: "Tabela de referência: Raízes de potências perfeitas",
    s9Intro: "Principais potências perfeitas e suas raízes exatas:",
    s9ScrollHint: "Role a tabela horizontalmente",
    s9ThExpr: "Expressão",
    s9ThRadicand: "Radicando",
    s9ThIndex: "Índice",
    s9ThAnswer: "Resultado",
    s10Eyebrow: "Perguntas Frequentes",
    s10Title: "Perguntas Frequentes sobre Raiz Enésima",
    s11Eyebrow: "Resumo",
    s11Title: "Conclusão Rápida",
    s11BoxTitle: "Conceito essencial",
    s11BoxText: "A raiz enésima determina o número que multiplicado n vezes por si mesmo produz x. Índices ímpares aceitam números negativos reais; pares requerem valores positivos.",
    quickCalcLabel: "Cálculo Instantâneo — Raiz Enésima",
    quickCalcSublabel: "Clique em um par para um resultado imediato"
  }
};

import { NTH_BOILERPLATE_PART2 } from './nthBoilerplatePart2';
import { NTH_BOILERPLATE_PART3 } from './nthBoilerplatePart3';

Object.assign(NTH_BOILERPLATE, NTH_BOILERPLATE_PART2, NTH_BOILERPLATE_PART3);

export function getNthBoilerplate(lang: string): NthBoilerplate {
  return NTH_BOILERPLATE[lang] || NTH_BOILERPLATE.en;
}
