// Educational content translations for Perfect Square Calculator across all 18 supported languages
import { getSquareBoilerplate } from './squareBoilerplate';

export interface SquareContent {
  heroPills: [string, string, string, string];
  tocTitle: string;
  toc: Array<{ title: string; href: string; subitems?: Array<{ title: string; href: string }> }>;
  s1: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
  };
  s2: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    cards: Array<{ title: string; text: string }>;
  };
  s3: {
    eyebrow: string;
    title: string;
    intro: string;
    tests: Array<{ title: string; text: string }>;
  };
  s4: {
    eyebrow: string;
    title: string;
    examples: Array<{ title: string; expr: string; reason: string; verdict: string }>;
  };
  s5: {
    eyebrow: string;
    title: string;
    intro: string;
    r1Title: string;
    r1Text: string;
    r2Title: string;
    r2Text: string;
  };
  s6: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
  };
  s7: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
  };
  s8: {
    eyebrow: string;
    title: string;
    lead: string;
    colN: string;
    colSquare: string;
    colFormula: string;
  };
  s9: {
    eyebrow: string;
    title: string;
    apps: Array<{ title: string; text: string }>;
  };
  s10: {
    eyebrow: string;
    title: string;
    mistakes: Array<{ title: string; text: string }>;
  };
  s11: {
    eyebrow: string;
    title: string;
  };
  s12: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  faqs: Array<{ question: string; answer: string }>;
}

const en: SquareContent = {
  heroPills: ["Instant Proof", "Prime Factors", "Nearest Squares", "100% Free"],
  tocTitle: "Table of Contents",
  toc: [
    { title: "How to Use the Calculator", href: "#section-how-to-use" },
    { title: "What Is a Perfect Square?", href: "#section-what-is-perfect-square" },
    { title: "How the Calculator Determines the Result", href: "#section-how-it-works" },
    { title: "Worked Examples", href: "#section-worked-examples" },
    {
      title: "Quick Ways to Check Without a Calculator",
      href: "#section-shortcuts",
      subitems: [
        { title: "The Last-Digit Rule", href: "#shortcut-last-digit" },
        { title: "The Digital-Root Rule", href: "#shortcut-digital-root" }
      ]
    },
    { title: "Non-Negative Whole Numbers Only", href: "#section-edge-cases" },
    { title: "Nearest Perfect Squares", href: "#section-nearest-square" },
    { title: "The First 20 Perfect Squares", href: "#section-first-20-squares" },
    { title: "Where Perfect Squares Show Up", href: "#section-applications" },
    { title: "Common Mistakes to Avoid", href: "#section-mistakes" },
    { title: "Frequently Asked Questions", href: "#section-faqs" },
    { title: "A Quick Recap", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Quick Guide",
    title: "How to Use the Perfect Square Calculator",
    intro: "Check any number in seconds. Follow these 3 easy steps:",
    steps: [
      { title: "Enter Your Number", text: "Type any whole integer into the input box, or click one of the preset chips." },
      { title: "Click 'Check Perfect Square'", text: "Hit Enter or click check to run the exact square root and prime factor algorithm." },
      { title: "Review the Instant Breakdown", text: "Get the verdict, base root, parity, bounding squares, and prime factorization." }
    ]
  },
  s2: {
    eyebrow: "Concept",
    title: "What Is a Perfect Square?",
    lead: "A perfect square is an integer that equals a whole number multiplied by itself: n = k² = k × k.",
    p1: "For example, 25 is a perfect square because 5 × 5 = 25. 144 is a perfect square because 12 × 12 = 144. In contrast, 50 is not a perfect square because √50 ≈ 7.071 (not an integer).",
    p2: "In 2D geometry, if you have 25 unit square tiles, you can arrange them into a perfect 5×5 square grid. With 50 tiles, you cannot make a square without leftover pieces.",
    cards: [
      { title: "Non-Negative Only", text: "In real numbers, squares can never be negative: (+k)² > 0 and (-k)² > 0." },
      { title: "Zero and One", text: "0 and 1 are valid perfect squares: 0² = 0 and 1² = 1." },
      { title: "Parity Rule", text: "The square of an even number is even (4²=16), and the square of an odd number is odd (5²=25)." },
      { title: "Even Prime Exponents", text: "In prime factorization, every prime exponent must be an even number (divisible by 2)." }
    ]
  },
  s3: {
    eyebrow: "Algorithm",
    title: "How the Calculator Determines the Result",
    intro: "Our calculator checks numbers using multi-stage algebraic verification:",
    tests: [
      { title: "1. Square Root Extraction", text: "Computes √n using 64-bit precision floating point math." },
      { title: "2. Integer Remainder Test", text: "Checks whether the root has zero fractional decimal remainder (Number.isInteger)." },
      { title: "3. Squaring Verification", text: "Squares the integer root: root × root must strictly equal the input integer n." },
      { title: "4. Prime Factorization", text: "Breaks n into prime powers to verify that all exponents divide by 2." }
    ]
  },
  s4: {
    eyebrow: "Case Studies",
    title: "Worked Examples",
    examples: [
      { title: "Example 1: Checking 144", expr: "√144 = 12", reason: "12 × 12 = 144 (exact integer)", verdict: "PERFECT SQUARE" },
      { title: "Example 2: Checking 50", expr: "√50 ≈ 7.071", reason: "Between 7²=49 and 8²=64", verdict: "NOT A PERFECT SQUARE" },
      { title: "Example 3: Checking -16", expr: "√(-16) = ±4i", reason: "Real squares cannot be negative", verdict: "NOT REAL SQUARE" }
    ]
  },
  s5: {
    eyebrow: "Mental Math",
    title: "Quick Ways to Check Without a Calculator",
    intro: "Use these two fast mental math shortcuts to spot non-squares in seconds:",
    r1Title: "1. The Last-Digit Rule",
    r1Text: "Every perfect square ends ONLY in 0, 1, 4, 5, 6, or 9. If an integer ends in 2, 3, 7, or 8, it can NEVER be a perfect square!",
    r2Title: "2. The Digital-Root Rule (Mod 9)",
    r2Text: "Sum digits recursively: the digital root of a perfect square is ALWAYS 1, 4, 7, or 9. If it is 2, 3, 5, 6, or 8, it is not a square."
  },
  s6: {
    eyebrow: "Boundary Cases",
    title: "Perfect Squares Are Always Non-Negative Whole Numbers",
    lead: "Why negative numbers and decimals are handled strictly:",
    p1: "In real arithmetic, squaring any number always yields a result ≥ 0. Hence, negative integers yield complex imaginary roots (±bi). Decimal numbers are not whole integer perfect squares."
  },
  s7: {
    eyebrow: "Bounding Intervals",
    title: "Nearest Perfect Squares",
    lead: "Every non-square integer lies between two consecutive square numbers: k² < n < (k + 1)².",
    p1: "For example, 50 lies between 49 (7²) and 64 (8²). Since 50 - 49 = 1, 49 is the closest square (only 1 unit away)."
  },
  s8: {
    eyebrow: "Reference Table",
    title: "The First 20 Perfect Squares (1² to 20²)",
    lead: "The essential reference table of squares for students and professionals:",
    colN: "n",
    colSquare: "Square (n²)",
    colFormula: "Formula"
  },
  s9: {
    eyebrow: "Applications",
    title: "Where Perfect Squares Show Up",
    apps: [
      { title: "Geometry & Area", text: "Finding the side length of square plots, floor tiles, and screen aspect ratios." },
      { title: "Pythagorean Theorem", text: "Calculating hypotenuse lengths in construction and surveying: a² + b² = c²." },
      { title: "Physics & Energy", text: "Kinetic energy (½mv²) and gravitational acceleration equations depend on squared terms." },
      { title: "Computer Science", text: "Quadtrees, 2D matrix transformations, and fast memory block alignment." }
    ]
  },
  s10: {
    eyebrow: "Pitfalls",
    title: "Common Mistakes to Avoid",
    mistakes: [
      { title: "Confusing Square with Doubling", text: "Squaring is multiplying by itself (5²=25), not multiplying by 2 (5×2=10)." },
      { title: "Assuming Last-Digit Sufficiency", text: "Ending in 4 does not guarantee a square (14 and 24 are not squares; only 4, 64, 144...)." },
      { title: "Ignoring Negative Sign Rules", text: "-4² with parenthetical distinction: (-4)² = 16, but -(4²) = -16." }
    ]
  },
  s11: {
    eyebrow: "Questions & Answers",
    title: "Frequently Asked Questions"
  },
  s12: {
    eyebrow: "Summary",
    title: "A Quick Recap",
    cards: [
      { title: "Definition", text: "n = k² where k is a whole integer." },
      { title: "Last Digits", text: "Can only end in 0, 1, 4, 5, 6, 9." },
      { title: "Prime Powers", text: "Every prime factor exponent must be even (divisible by 2)." },
      { title: "Free Tool", text: "Check any integer above instantly with complete step-by-step proofs." }
    ]
  },
  faqs: [
    { question: "What is a perfect square in simple terms?", answer: "A perfect square is an integer that can be expressed as the product of two equal integers. For example, 36 is a perfect square because 6 × 6 = 36." },
    { question: "Can a negative number be a perfect square?", answer: "No, in real arithmetic a negative number cannot be a perfect square because multiplying any real number by itself produces a non-negative result." },
    { question: "Is 0 a perfect square?", answer: "Yes, 0 is a perfect square because 0 × 0 = 0 (0² = 0)." },
    { question: "What is the difference between a square root and a perfect square?", answer: "A perfect square is the result (e.g. 25), while the square root is the original base number that was squared (e.g. 5)." },
    { question: "Is this calculator completely free?", answer: "Yes, our Perfect Square Calculator is 100% free with unlimited checks, instant answers, and detailed step-by-step mathematical proofs." }
  ]
};

const fr: SquareContent = {
  heroPills: ["Preuve Instantanée", "Facteurs Premiers", "Carrés Proches", "100% Gratuit"],
  tocTitle: "Table des Matières",
  toc: [
    { title: "Comment utiliser le calculateur", href: "#section-how-to-use" },
    { title: "Qu'est-ce qu'un carré parfait ?", href: "#section-what-is-perfect-square" },
    { title: "Comment le calculateur détermine le résultat", href: "#section-how-it-works" },
    { title: "Exemples détaillés", href: "#section-worked-examples" },
    {
      title: "Astuces sans calculatrice",
      href: "#section-shortcuts",
      subitems: [
        { title: "Règle du dernier chiffre", href: "#shortcut-last-digit" },
        { title: "Règle de la racine numérique", href: "#shortcut-digital-root" }
      ]
    },
    { title: "Nombres entiers non négatifs uniquement", href: "#section-edge-cases" },
    { title: "Carrés parfaits les plus proches", href: "#section-nearest-square" },
    { title: "Les 20 premiers carrés parfaits", href: "#section-first-20-squares" },
    { title: "Où apparaissent les carrés parfaits ?", href: "#section-applications" },
    { title: "Erreurs courantes à éviter", href: "#section-mistakes" },
    { title: "Foire Aux Questions (FAQ)", href: "#section-faqs" },
    { title: "Récapitulatif rapide", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Guide Rapide",
    title: "Comment utiliser le Calculateur de Carré Parfait",
    intro: "Vérifiez n'importe quel nombre en quelques secondes. Suivez ces 3 étapes simples :",
    steps: [
      { title: "Entrez votre nombre", text: "Tapez un nombre entier dans le champ ou cliquez sur un exemple." },
      { title: "Cliquez sur 'Vérifier'", text: "Appuyez sur Entrée ou cliquez sur Vérifier pour lancer l'algorithme." },
      { title: "Consultez l'analyse détaillée", text: "Obtenez le verdict, la racine de base, la parité et les carrés encadrants." }
    ]
  },
  s2: {
    eyebrow: "Concept",
    title: "Qu'est-ce qu'un Carré Parfait ?",
    lead: "Un carré parfait est un entier égal au produit d'un entier par lui-même : n = k² = k × k.",
    p1: "Par exemple, 25 est un carré parfait car 5 × 5 = 25. De même, 144 est un carré parfait car 12 × 12 = 144. En revanche, 50 n'est pas un carré parfait car √50 ≈ 7,071 (non entier).",
    p2: "En géométrie 2D, avec 25 carreaux unitaires, vous pouvez former un carré parfait de 5×5. Avec 50 carreaux, vous ne pouvez pas former un carré plein sans pièces en trop.",
    cards: [
      { title: "Toujours non négatif", text: "Dans les réels, un carré est toujours positif ou nul : (+k)² > 0 et (-k)² > 0." },
      { title: "Zéro et Un", text: "0 et 1 sont des carrés parfaits : 0² = 0 et 1² = 1." },
      { title: "Règle de parité", text: "Le carré d'un nombre pair est pair (4²=16), le carré d'un impair est impair (5²=25)." },
      { title: "Exposants premiers pairs", text: "Dans la décomposition première, chaque exposant doit être pair (divisible par 2)." }
    ]
  },
  s3: {
    eyebrow: "Algorithme",
    title: "Comment le Calculateur Détermine le Résultat",
    intro: "Notre outil utilise une vérification algébrique rigoureuse en plusieurs étapes :",
    tests: [
      { title: "1. Extraction de racine carrée", text: "Calcule √n avec une précision en virgule flottante de 64 bits." },
      { title: "2. Test de partie décimale", text: "Vérifie si la racine a une partie décimale nulle (Number.isInteger)." },
      { title: "3. Vérification par élévation au carré", text: "Élève la racine au carré : racine × racine doit être strictement égal à n." },
      { title: "4. Facteurs premiers", text: "Décompose n en facteurs premiers pour s'assurer que tous les exposants divisent par 2." }
    ]
  },
  s4: {
    eyebrow: "Exemples",
    title: "Exemples Détaillés",
    examples: [
      { title: "Exemple 1 : Test de 144", expr: "√144 = 12", reason: "12 × 12 = 144 (entier exact)", verdict: "CARRÉ PARFAIT" },
      { title: "Exemple 2 : Test de 50", expr: "√50 ≈ 7,071", reason: "Situé entre 7²=49 et 8²=64", verdict: "PAS UN CARRÉ PARFAIT" },
      { title: "Exemple 3 : Test de -16", expr: "√(-16) = ±4i", reason: "Un carré réel ne peut être négatif", verdict: "NON RÉEL" }
    ]
  },
  s5: {
    eyebrow: "Calcul Mental",
    title: "Astuces pour Vérifier sans Calculatrice",
    intro: "Utilisez ces deux raccourcis de calcul mental pour repérer les non-carrés immédiatement :",
    r1Title: "1. Règle du dernier chiffre",
    r1Text: "Un carré parfait se termine TOUJOURS par 0, 1, 4, 5, 6 ou 9. S'il se termine par 2, 3, 7 ou 8, ce n'est JAMAIS un carré parfait !",
    r2Title: "2. Racine numérique (Mod 9)",
    r2Text: "Additionnez les chiffres : la racine numérique d'un carré est TOUJOURS 1, 4, 7 ou 9."
  },
  s6: {
    eyebrow: "Cas Limites",
    title: "Nombres Entiers Non Négatifs Uniquement",
    lead: "Pourquoi les nombres négatifs et décimaux sont traités avec rigueur :",
    p1: "Dans les nombres réels, élever un nombre au carré donne toujours un résultat positif ou nul. Par conséquent, les négatifs ont des racines complexes imaginaires (±bi)."
  },
  s7: {
    eyebrow: "Encadrement",
    title: "Carrés Parfaits les Plus Proches",
    lead: "Tout nombre non-carré se situe entre deux carrés consécutifs : k² < n < (k + 1)².",
    p1: "Par exemple, 50 est encadré par 49 (7²) et 64 (8²). Comme 50 - 49 = 1, 49 est le carré parfait le plus proche (à seulement 1 unité)."
  },
  s8: {
    eyebrow: "Tableau de Référence",
    title: "Les 20 Premiers Carrés Parfaits (1² à 20²)",
    lead: "Tableau de référence essentiel pour les élèves et les professionnels :",
    colN: "n",
    colSquare: "Carré (n²)",
    colFormula: "Formule"
  },
  s9: {
    eyebrow: "Applications",
    title: "Où Apparaissent les Carrés Parfaits ?",
    apps: [
      { title: "Géométrie et Surfaces", text: "Calcul des longueurs de côtés pour des parcelles, carrelages et formats d'écrans." },
      { title: "Théorème de Pythagore", text: "Calcul des hypothénuses en menuiserie, construction et arpentage : a² + b² = c²." },
      { title: "Physique et Énergie", text: "Énergie cinétique (½mv²) et équations d'accélération gravitationnelle." },
      { title: "Informatique", text: "Arbres quadtree, matrices 2D et alignement de blocs mémoire." }
    ]
  },
  s10: {
    eyebrow: "Pièges",
    title: "Erreurs Courantes à Éviter",
    mistakes: [
      { title: "Confondre Carré et Doubler", text: "Élever au carré signifie multiplier par soi-même (5²=25), pas multiplier par 2 (5×2=10)." },
      { title: "Dernier chiffre suffisant", text: "Terminer par 4 ne suffit pas (14 et 24 ne sont pas des carrés ; seuls 4, 64, 144...)." },
      { title: "Signe et Parenthèses", text: "Attention à la distinction : (-4)² = 16, mais -(4²) = -16." }
    ]
  },
  s11: {
    eyebrow: "Questions Fréquentes",
    title: "Foire Aux Questions (FAQ)"
  },
  s12: {
    eyebrow: "En Résumé",
    title: "Récapitulatif Rapide",
    cards: [
      { title: "Définition", text: "n = k² avec k entier relatif." },
      { title: "Dernier Chiffre", text: "Uniquement 0, 1, 4, 5, 6 ou 9." },
      { title: "Exposants Pairs", text: "Tous les exposants premiers doivent être divisibles par 2." },
      { title: "100% Gratuit", text: "Vérifiez n'importe quel nombre avec étapes complètes ci-dessus." }
    ]
  },
  faqs: [
    { question: "Qu'est-ce qu'un carré parfait en termes simples ?", answer: "Un carré parfait est un nombre entier qui peut s'écrire comme le produit de deux entiers égaux. Par exemple, 36 est un carré parfait car 6 × 6 = 36." },
    { question: "Un nombre négatif peut-il être un carré parfait ?", answer: "Non, en arithmétique réelle, un nombre négatif ne peut pas être un carré parfait car le carré de tout nombre réel est toujours positif ou nul." },
    { question: "0 est-il un carré parfait ?", answer: "Oui, 0 est un carré parfait car 0 × 0 = 0 (0² = 0)." },
    { question: "Quelle est la différence entre racine carrée et carré parfait ?", answer: "Le carré parfait est le résultat (ex. 25), tandis que la racine carrée est le nombre d'origine élevé au carré (ex. 5)." },
    { question: "Ce calculateur est-il gratuit ?", answer: "Oui, notre calculateur de carrés parfaits est 100% gratuit, sans inscription, avec calculs illimités et démonstrations pas à pas." }
  ]
};

const es: SquareContent = {
  heroPills: ["Prueba Instantánea", "Factores Primos", "Cuadrados Cercanos", "100% Gratis"],
  tocTitle: "Índice de Contenidos",
  toc: [
    { title: "Cómo usar la calculadora", href: "#section-how-to-use" },
    { title: "¿Qué es un cuadrado perfecto?", href: "#section-what-is-perfect-square" },
    { title: "Cómo determina el resultado la calculadora", href: "#section-how-it-works" },
    { title: "Ejemplos paso a paso", href: "#section-worked-examples" },
    {
      title: "Trucos sin calculadora",
      href: "#section-shortcuts",
      subitems: [
        { title: "Regla del último dígito", href: "#shortcut-last-digit" },
        { title: "Regla de la raíz digital", href: "#shortcut-digital-root" }
      ]
    },
    { title: "Solo enteros no negativos", href: "#section-edge-cases" },
    { title: "Cuadrados perfectos más cercanos", href: "#section-nearest-square" },
    { title: "Los 20 primeros cuadrados perfectos", href: "#section-first-20-squares" },
    { title: "¿Dónde aparecen los cuadrados perfectos?", href: "#section-applications" },
    { title: "Errores comunes que se deben evitar", href: "#section-mistakes" },
    { title: "Preguntas Frecuentes", href: "#section-faqs" },
    { title: "Resumen rápido", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Guía Rápida",
    title: "Cómo usar la Calculadora de Cuadrados Perfectos",
    intro: "Comprueba cualquier número en segundos siguiendo estos 3 pasos:",
    steps: [
      { title: "Introduce tu número", text: "Escribe un número entero en el campo o haz clic en un ejemplo rápido." },
      { title: "Haz clic en 'Comprobar'", text: "Presiona Enter o pulsa el botón para ejecutar el algoritmo al instante." },
      { title: "Revisa la demostración", text: "Examina el veredicto, raíz base, paridad y cuadrados delimitadores." }
    ]
  },
  s2: {
    eyebrow: "Concepto",
    title: "¿Qué es un Cuadrado Perfecto?",
    lead: "Un cuadrado perfecto es un entero que resulta de multiplicar un número entero por sí mismo: n = k² = k × k.",
    p1: "Por ejemplo, 25 es un cuadrado perfecto porque 5 × 5 = 25. Igualmente, 144 lo es porque 12 × 12 = 144. En cambio, 50 no lo es porque √50 ≈ 7.071.",
    p2: "En geometría 2D, con 25 baldosas cuadradas puedes formar un cuadrado perfecto de 5×5. Con 50 baldosas no podrás armar un cuadrado sin piezas sobrantes.",
    cards: [
      { title: "Siempre no negativo", text: "En los números reales, un cuadrado siempre es positivo o cero: (+k)² > 0 y (-k)² > 0." },
      { title: "Cero y Uno", text: "0 y 1 son cuadrados perfectos válidos: 0² = 0 y 1² = 1." },
      { title: "Regla de paridad", text: "El cuadrado de un número par es par (4²=16), y el de un impar es impar (5²=25)." },
      { title: "Exponentes primos pares", text: "En su descomposición prima, todos los exponentes deben ser pares (divisibles entre 2)." }
    ]
  },
  s3: {
    eyebrow: "Algoritmo",
    title: "Cómo Determina el Resultado la Calculadora",
    intro: "Nuestra herramienta realiza una comprobación algebraica completa:",
    tests: [
      { title: "1. Extracción de raíz cuadrada", text: "Calcula √n con precisión de punto flotante de 64 bits." },
      { title: "2. Verificación de entero", text: "Comprueba si la raíz carece de parte decimal fraccionaria." },
      { title: "3. Comprobación de multiplicación", text: "Multiplica la raíz entera por sí misma: raíz × raíz debe coincidir con n." },
      { title: "4. Descomposición prima", text: "Verifica que todos los exponentes de factores primos dividan entre 2." }
    ]
  },
  s4: {
    eyebrow: "Casos Prácticos",
    title: "Ejemplos Paso a Paso",
    examples: [
      { title: "Ejemplo 1: Comprobar 144", expr: "√144 = 12", reason: "12 × 12 = 144 (entero exacto)", verdict: "CUADRADO PERFECTO" },
      { title: "Ejemplo 2: Comprobar 50", expr: "√50 ≈ 7.071", reason: "Entre 7²=49 y 8²=64", verdict: "NO ES CUADRADO PERFECTO" },
      { title: "Ejemplo 3: Comprobar -16", expr: "√(-16) = ±4i", reason: "Un cuadrado real no puede ser negativo", verdict: "NO ES REAL" }
    ]
  },
  s5: {
    eyebrow: "Cálculo Mental",
    title: "Trucos para Comprobar sin Calculadora",
    intro: "Dos atajos rápidos para descartar no-cuadrados en segundos:",
    r1Title: "1. Regla del último dígito",
    r1Text: "Un cuadrado perfecto termina ÚNICAMENTE en 0, 1, 4, 5, 6 o 9. Si termina en 2, 3, 7 u 8, ¡NUNCA es un cuadrado perfecto!",
    r2Title: "2. Raíz digital (Módulo 9)",
    r2Text: "Suma los dígitos: la raíz digital de un cuadrado siempre es 1, 4, 7 o 9."
  },
  s6: {
    eyebrow: "Casos Límite",
    title: "Solo Enteros No Negativos",
    lead: "Por qué los números negativos y decimales se evalúan estrictamente:",
    p1: "En los números reales, elevar al cuadrado siempre produce un resultado ≥ 0. Los enteros negativos generan raíces complejas con la unidad imaginaria (±bi)."
  },
  s7: {
    eyebrow: "Delimitación",
    title: "Cuadrados Perfectos Más Cercanos",
    lead: "Cualquier no-cuadrado queda encerrado entre dos cuadrados consecutivos: k² < n < (k + 1)².",
    p1: "Por ejemplo, 50 queda entre 49 (7²) y 64 (8²). Como 50 - 49 = 1, 49 es el cuadrado más cercano (a solo 1 unidad)."
  },
  s8: {
    eyebrow: "Tabla de Referencia",
    title: "Los 20 Primeros Cuadrados Perfectos (1² a 20²)",
    lead: "Tabla de referencia esencial para el cálculo rápido y exámenes:",
    colN: "n",
    colSquare: "Cuadrado (n²)",
    colFormula: "Fórmula"
  },
  s9: {
    eyebrow: "Aplicaciones",
    title: "¿Dónde Aparecen los Cuadrados Perfectos?",
    apps: [
      { title: "Geometría y Áreas", text: "Cálculo de dimensiones de parcelas cuadradas y losas de pavimento." },
      { title: "Teorema de Pitágoras", text: "Cálculo de diagonales e hipotenusas en topografía y carpintería: a² + b² = c²." },
      { title: "Física y Cinética", text: "Fórmulas de energía cinética (½mv²) y caída libre con aceleración." },
      { title: "Informática y Matrices", text: "Indexación espacial por cuadrantes (quadtrees) y memoria matricial." }
    ]
  },
  s10: {
    eyebrow: "Errores Comunes",
    title: "Errores que se Deben Evitar",
    mistakes: [
      { title: "Confundir Cuadrado con Duplicar", text: "Elevar al cuadrado es multiplicar por sí mismo (5²=25), no por dos (5×2=10)." },
      { title: "Dígito final suficiente", text: "Terminar en 4 no asegura un cuadrado (14 y 24 no lo son; solo 4, 64, 144...)." },
      { title: "Signos y Paréntesis", text: "Cuidado con la notación: (-4)² = 16, mientras que -(4²) = -16." }
    ]
  },
  s11: {
    eyebrow: "Preguntas Frecuentes",
    title: "Preguntas Frecuentes (FAQ)"
  },
  s12: {
    eyebrow: "Resumen",
    title: "Resumen Rápido",
    cards: [
      { title: "Fórmula", text: "n = k × k con k entero." },
      { title: "Último Dígito", text: "Solo puede terminar en 0, 1, 4, 5, 6 o 9." },
      { title: "Exponentes Pares", text: "Cada factor primo debe tener exponente divisible entre 2." },
      { title: "100% Gratis", text: "Comprueba cualquier número con demostración completa arriba." }
    ]
  },
  faqs: [
    { question: "¿Qué es un cuadrado perfecto en palabras sencillas?", answer: "Un cuadrado perfecto es un número entero que se puede escribir como el producto de dos enteros iguales. Por ejemplo, 36 es un cuadrado perfecto porque 6 × 6 = 36." },
    { question: "¿El 0 es un cuadrado perfecto?", answer: "Sí, 0 es un cuadrado perfecto porque 0 × 0 = 0 (0² = 0)." },
    { question: "¿Cuál es la diferencia entre raíz cuadrada y cuadrado perfecto?", answer: "El cuadrado perfecto es el producto resultante (ej. 25), mientras que la raíz cuadrada es el número original elevado al cuadrado (ej. 5)." },
    { question: "¿Es gratis esta calculadora?", answer: "Sí, nuestra calculadora de cuadrados perfectos es 100% gratuita con comprobaciones ilimitadas y demostraciones completas paso a paso." }
  ]
};

// Generic factory helper for remaining languages
function buildSquareContent(
  lang: string,
  pills: [string, string, string, string],
  tocTitle: string,
  s1Title: string,
  s2Title: string,
  s3Title: string,
  s4Title: string,
  s5Title: string,
  s6Title: string,
  s7Title: string,
  s8Title: string,
  s9Title: string,
  s10Title: string,
  s11Title: string,
  s12Title: string,
  colN: string,
  colSquare: string,
  colFormula: string
): SquareContent {
  const bp = getSquareBoilerplate(lang);
  return {
    heroPills: pills,
    tocTitle,
    toc: [
      { title: s1Title, href: "#section-how-to-use" },
      { title: s2Title, href: "#section-what-is-perfect-square" },
      { title: s3Title, href: "#section-how-it-works" },
      { title: s4Title, href: "#section-worked-examples" },
      {
        title: s5Title,
        href: "#section-shortcuts",
        subitems: [
          { title: bp.s5R1Title, href: "#shortcut-last-digit" },
          { title: bp.s5R2Title, href: "#shortcut-digital-root" }
        ]
      },
      { title: s6Title, href: "#section-edge-cases" },
      { title: s7Title, href: "#section-nearest-square" },
      { title: s8Title, href: "#section-first-20-squares" },
      { title: s9Title, href: "#section-applications" },
      { title: s10Title, href: "#section-mistakes" },
      { title: s11Title, href: "#section-faqs" },
      { title: s12Title, href: "#section-recap" }
    ],
    s1: {
      eyebrow: s1Title,
      title: s1Title,
      intro: bp.s1Intro,
      steps: bp.s1Steps
    },
    s2: {
      eyebrow: s2Title,
      title: s2Title,
      lead: bp.s2Lead,
      p1: bp.s2P1,
      p2: bp.s2P2,
      cards: bp.s2Cards
    },
    s3: {
      eyebrow: s3Title,
      title: s3Title,
      intro: bp.s3Intro,
      tests: bp.s3Tests
    },
    s4: {
      eyebrow: s4Title,
      title: s4Title,
      examples: bp.s4Examples
    },
    s5: {
      eyebrow: s5Title,
      title: s5Title,
      intro: bp.s5Intro,
      r1Title: bp.s5R1Title,
      r1Text: bp.s5R1Text,
      r2Title: bp.s5R2Title,
      r2Text: bp.s5R2Text
    },
    s6: {
      eyebrow: s6Title,
      title: s6Title,
      lead: bp.s6Lead,
      p1: bp.s6P1
    },
    s7: {
      eyebrow: s7Title,
      title: s7Title,
      lead: bp.s7Lead,
      p1: bp.s7P1
    },
    s8: {
      eyebrow: s8Title,
      title: s8Title,
      lead: bp.s8Lead,
      colN,
      colSquare,
      colFormula
    },
    s9: {
      eyebrow: s9Title,
      title: s9Title,
      apps: bp.s9Apps
    },
    s10: {
      eyebrow: s10Title,
      title: s10Title,
      mistakes: bp.s10Mistakes
    },
    s11: {
      eyebrow: s11Title,
      title: s11Title
    },
    s12: {
      eyebrow: s12Title,
      title: s12Title,
      cards: bp.s12Cards
    },
    faqs: bp.faqs
  };
}

const de: SquareContent = buildSquareContent(
  'de',
  ["Sofortiger Beweis", "Primfaktoren", "Nächste Quadrate", "100% Kostenlos"],
  "Inhaltsverzeichnis",
  "So verwenden Sie den Quadratzahl-Rechner",
  "Was ist eine Quadratzahl (Perfektes Quadrat)?",
  "Wie der Rechner das Ergebnis bestimmt",
  "Ausführliche Beispiele",
  "Schnelle Überprüfung ohne Taschenrechner",
  "Nur nicht-negative ganze Zahlen",
  "Die nächsten Quadratzahlen",
  "Die ersten 20 Quadratzahlen (1² bis 20²)",
  "Wo Quadratzahlen vorkommen",
  "Häufige Fehler vermeiden",
  "Häufig gestellte Fragen (FAQ)",
  "Kurze Zusammenfassung",
  "n", "Quadratzahl (n²)", "Formel"
);

const it: SquareContent = buildSquareContent(
  'it',
  ["Dimostrazione Istantanea", "Fattori Primi", "Quadrati Vicini", "100% Gratuito"],
  "Indice dei Contenuti",
  "Come Usare il Calcolatore di Quadrati Perfetti",
  "Cos'è un Quadrato Perfetto?",
  "Come il Calcolatore Determina il Risultato",
  "Esempi Svolti",
  "Metodi Rapidi Senza Calcolatrice",
  "Solo Numeri Interi Non Negativi",
  "Quadrati Perfetti Più Vicini",
  "I Primi 20 Quadrati Perfetti",
  "Dove Compaiono i Quadrati Perfetti",
  "Errori Comuni da Evitare",
  "Domande Frequenti (FAQ)",
  "Riepilogo Rapido",
  "n", "Quadrato (n²)", "Formula"
);

const pt: SquareContent = buildSquareContent(
  'pt',
  ["Prova Instantânea", "Fatores Primos", "Quadrados Próximos", "100% Grátis"],
  "Índice de Conteúdos",
  "Como Usar a Calculadora de Quadrado Perfeito",
  "O que é um Quadrado Perfeito?",
  "Como a Calculadora Determina o Resultado",
  "Exemplos Passo a Passo",
  "Macetes Sem Calculadora",
  "Apenas Números Não Negativos",
  "Quadrados Perfeitos Mais Próximos",
  "Os Primeiros 20 Quadrados Perfeitos",
  "Onde Aparecem os Quadrados Perfeitos",
  "Erros Comuns a Evitar",
  "Perguntas Frequentes (FAQ)",
  "Resumo Rápido",
  "n", "Quadrado (n²)", "Fórmula"
);

const ru: SquareContent = buildSquareContent(
  'ru',
  ["Мгновенное решение", "Простые множители", "Ближайшие квадраты", "100% Бесплатно"],
  "Содержание",
  "Как пользоваться калькулятором квадратов",
  "Что такое точный квадрат?",
  "Как калькулятор определяет результат",
  "Примеры с решениями",
  "Как проверить число без калькулятора",
  "Только неотрицательные целые числа",
  "Ближайшие точные квадраты",
  "Таблица: Первые 20 квадратов чисел",
  "Где применяются квадраты чисел",
  "Частые ошибки",
  "Часто задаваемые вопросы (FAQ)",
  "Краткие выводы",
  "n", "Квадрат (n²)", "Формула"
);

const pl: SquareContent = buildSquareContent(
  'pl',
  ["Natychmiastowy dowód", "Czynniki pierwsze", "Najbliższe kwadraty", "100% Za darmo"],
  "Spis treści",
  "Jak korzystać z kalkulatora kwadratów doskonałych",
  "Czym jest kwadrat doskonały?",
  "Jak kalkulator określa wynik",
  "Rozwiązane przykłady",
  "Szybkie metody bez kalkulatora",
  "Tylko nieujemne liczby całkowite",
  "Najbliższe kwadraty doskonałe",
  "Pierwsze 20 kwadratów doskonałych",
  "Gdzie spotykamy kwadraty doskonałe",
  "Częste błędy do uniknięcia",
  "Często zadawane pytania (FAQ)",
  "Podsumowanie",
  "n", "Kwadrat (n²)", "Wzór"
);

const sv: SquareContent = buildSquareContent(
  'sv',
  ["Direkt bevis", "Primfaktorer", "Närmaste kvadrater", "100% Gratis"],
  "Innehållsförteckning",
  "Hur man använder kvadrattalsräknaren",
  "Vad är ett kvadrattal (perfekt kvadrat)?",
  "Hur räknaren avgör resultatet",
  "Praktiska exempel",
  "Snabba sätt att testa utan miniräknare",
  "Endast icke-negativa heltal",
  "Närmaste kvadrattal",
  "De första 20 kvadrattalen",
  "Var kvadrattal används",
  "Vanliga misstag att undvika",
  "Vanliga frågor (FAQ)",
  "Snabb sammanfattning",
  "n", "Kvadrat (n²)", "Formel"
);

const tr: SquareContent = buildSquareContent(
  'tr',
  ["Anında Kanıt", "Asal Çarpanlar", "En Yakın Kareler", "%100 Ücretsiz"],
  "İçindekiler",
  "Tam Kare Hesaplayıcı Nasıl Kullanılır?",
  "Tam Kare Sayı Nedir?",
  "Hesaplayıcı Sonucu Nasıl Belirler?",
  "Örnek Çözümler",
  "Hesap Makinesi Olmadan Kontrol Yolları",
  "Yalnızca Negatif Olmayan Tam Sayılar",
  "En Yakın Tam Kare Sayılar",
  "İlk 20 Tam Kare Sayı",
  "Tam Kare Sayıların Kullanım Alanları",
  "Sık Yapılan Hatalar",
  "Sıkça Sorulan Sorular",
  "Kısa Özet",
  "n", "Kare (n²)", "Formül"
);

const id: SquareContent = buildSquareContent(
  'id',
  ["Bukti Instan", "Faktor Prima", "Kuadrat Terdekat", "100% Gratis"],
  "Daftar Isi",
  "Cara Menggunakan Kalkulator Kuadrat Sempurna",
  "Apa itu Bilangan Kuadrat Sempurna?",
  "Cara Kerja Penentuan Hasil Kalkulator",
  "Contoh Perhitungan Lengkap",
  "Cara Cepat Tanpa Kalkulator",
  "Hanya Bilangan Bulat Non-Negatif",
  "Kuadrat Sempurna Terdekat",
  "20 Bilangan Kuadrat Sempurna Pertama",
  "Penerapan Kuadrat Sempurna",
  "Kesalahan Umum yang Harus Dihindari",
  "Pertanyaan yang Sering Diajukan",
  "Rangkuman Singkat",
  "n", "Kuadrat (n²)", "Rumus"
);

const ms: SquareContent = buildSquareContent(
  'ms',
  ["Bukti Segera", "Faktor Perdana", "Kuasa Dua Terdekat", "100% Percuma"],
  "Isi Kandungan",
  "Cara Menggunakan Kalkulator Kuasa Dua Sempurna",
  "Apakah Kuasa Dua Sempurna?",
  "Bagaimana Kalkulator Menentukan Hasil",
  "Contoh Langkah Demi Langkah",
  "Petua Pantas Tanpa Kalkulator",
  "Hanya Nombor Bulat Bukan Negatif",
  "Kuasa Dua Sempurna Terdekat",
  "20 Kuasa Dua Sempurna Pertama",
  "Aplikasi Kuasa Dua Sempurna",
  "Kesilapan Lazim yang Perlu Dielakkan",
  "Soalan Lazim",
  "Ringkasan Pantas",
  "n", "Kuasa Dua (n²)", "Formula"
);

const ar: SquareContent = buildSquareContent(
  'ar',
  ["إثبات فوري", "عوامل أولية", "أقرب مربعات", "مجاني 100%"],
  "جدول المحتويات",
  "كيفية استخدام حاسبة المربع الكامل",
  "ما هو المربع الكامل؟",
  "كيف تحدد الحاسبة النتيجة",
  "أمثلة محلولة خطوة بخطوة",
  "طرق سريعة للتحقق بدون حاسبة",
  "أعداد صحيحة غير سالبة فقط",
  "أقرب المربعات الكاملة",
  "أول 20 مربعاً كاملاً",
  "أين تظهر المربعات الكاملة؟",
  "أخطاء شائعة يجب تجنبها",
  "الأسئلة الشائعة",
  "ملخص سريع",
  "العدد (n)", "المربع (n²)", "الصيغة"
);

const hi: SquareContent = buildSquareContent(
  'hi',
  ["तुरंत प्रमाण", "अभाज्य गुणनखंड", "निकटतम पूर्ण वर्ग", "100% निःशुल्क"],
  "विषय सूची",
  "पूर्ण वर्ग कैलकुलेटर का उपयोग कैसे करें",
  "पूर्ण वर्ग (Perfect Square) क्या है?",
  "कैलकुलेटर परिणाम कैसे निर्धारित करता है",
  "हल किए गए उदाहरण",
  "कैलकुलेटर के बिना जाँचने के तरीके",
  "केवल गैर-ऋणात्मक पूर्णांक",
  "निकटतम पूर्ण वर्ग संख्याएँ",
  "पहले 20 पूर्ण वर्ग",
  "पूर्ण वर्ग का उपयोग कहाँ होता है?",
  "सामान्य गलतियाँ जिनसे बचें",
  "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
  "त्वरित सारांश",
  "संख्या (n)", "वर्ग (n²)", "सूत्र"
);

const bn: SquareContent = buildSquareContent(
  'bn',
  ["তাৎক্ষণিক প্রমাণ", "মৌলিক উৎপাদক", "নিকটবর্তী পূর্ণ বর্গ", "১০০% বিনামূল্যে"],
  "সূচিপত্র",
  "পূর্ণ বর্গ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
  "পূর্ণ বর্গ সংখ্যা (Perfect Square) কী?",
  "ক্যালকুলেটর কীভাবে ফলাফল নির্ধারণ করে",
  "ব্যাখ্যামূলক উদাহরণ",
  "ক্যালকুলেটর ছাড়া যাচাইয়ের সহজ কৌশল",
  "শুধুমাত্র অ-ঋণাত্মক পূর্ণসংখ্যা",
  "নিকটতম পূর্ণ বর্গ সংখ্যাসমূহ",
  "প্রথম ২০টি পূর্ণ বর্গ সংখ্যা",
  "পূর্ণ বর্গ সংখ্যার ব্যবহারিক প্রয়োগ",
  "সাধারণ ভুলত্রুটিসমূহ",
  "সাধারণ জিজ্ঞাসা (FAQ)",
  "সংক্ষিপ্ত সারসংক্ষেপ",
  "সংখ্যা (n)", "বর্গ (n²)", "সূত্র"
);

const ja: SquareContent = buildSquareContent(
  'ja',
  ["即時証明", "素因数指数", "近似平方数", "100% 無料"],
  "目次",
  "完全平方数計算ツールの使い方",
  "完全平方数（平方数）とは？",
  "計算ツールが結果を判定する仕組み",
  "計算例とステップ解説",
  "電卓なしで見分ける暗算テクニック",
  "非負の整数のみ対象となる理由",
  "最も近い完全平方数",
  "早見表：1から20までの平方数",
  "平方数の実社会での応用",
  "よくある間違いと注意点",
  "よくある質問（FAQ）",
  "まとめ",
  "n", "平方数 (n²)", "計算式"
);

const ko: SquareContent = buildSquareContent(
  'ko',
  ["즉각 증명", "소인수 거듭제곱", "인접 제곱수", "100% 무료"],
  "목차",
  "완전제곱수 계산기 사용 방법",
  "완전제곱수(제곱수)란 무엇인가요?",
  "계산기가 결과를 판별하는 알고리즘",
  "단계별 계산 예제",
  "계산기 없이 판별하는 암산 팁",
  "음이 아닌 정수만 성립하는 이유",
  "가장 가까운 완전제곱수 찾기",
  "참고 표: 1부터 20까지의 제곱수",
  "실생활 속 완전제곱수의 활용",
  "흔히 하는 실수와 주의점",
  "자주 묻는 질문 (FAQ)",
  "핵심 요약",
  "n", "제곱수 (n²)", "공식"
);

const bg: SquareContent = buildSquareContent(
  'bg',
  ["Моментално доказателство", "Прости множители", "Най-близки квадрати", "100% Безплатно"],
  "Съдържание",
  "Как се използва калкулаторът за точен квадрат",
  "Какво е точен квадрат?",
  "Как калкулаторът определя резултата",
  "Примери стъпка по стъпка",
  "Бързи методи за проверка без калкулатор",
  "Само неотрицателни цели числа",
  "Най-близки точни квадрати",
  "Първите 20 точни квадрата",
  "Къде се срещат точните квадрати",
  "Чести грешки, които да избягвате",
  "Често задавани въпроси (FAQ)",
  "Бързо обобщение",
);

const SQUARE_CONTENT_MAP: Record<string, SquareContent> = {
  en, fr, es, de, it, pt, ru, pl, sv, tr, id, ms, ar, hi, bn, ja, ko, bg
};

export function getSquareContent(locale: string): SquareContent {
  return SQUARE_CONTENT_MAP[locale] || SQUARE_CONTENT_MAP.en;
}
