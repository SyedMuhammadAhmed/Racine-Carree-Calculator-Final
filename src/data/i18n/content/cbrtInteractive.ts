// Localized interactive UI tokens, anatomy explorer, notation tabs, and 10 comprehensive FAQs for Cube Root (Racine Cubique) across all 18 languages

export interface CbrtInteractiveI18n {
  badgeInstant: string;
  badgeRadical: string;
  badgeSteps: string;
  badgeFree: string;
  quickTryLabel: string;

  anatomyTag: string;
  anatomyHint: string;
  anatomyDegree: string;
  anatomyDegreeDesc: string;
  anatomySymbol: string;
  anatomySymbolDesc: string;
  anatomyRadicand: string;
  anatomyRadicandDesc: string;
  anatomyRoot: string;
  anatomyRootDesc: string;

  tabRadical: string;
  tabExponent: string;
  tabCode: string;
  tabSheet: string;
  tabLatex: string;
  tabTyping: string;
  copyBtn: string;
  copiedBtn: string;
  testBtn: string;

  methodCalc: string;
  methodFactors: string;
  methodEstimate: string;

  decimalsTitle: string;
  decimalsIntro: string;
  fractionsTitle: string;
  fractionsIntro: string;

  filterAll: string;
  filterPerfect: string;
  filterIrrational: string;
  searchPlaceholder: string;
  colSimp: string;

  howWorksEyebrow: string;
  howWorksTitle: string;
  howWorksSteps: Array<{ title: string; desc: string }>;

  faqs: Array<{ question: string; answer: string }>;
}

export const CBRT_INTERACTIVE_I18N: Record<string, CbrtInteractiveI18n> = {
  en: {
    badgeInstant: "Instant ∛ Calculation",
    badgeRadical: "Simplified Radical Form",
    badgeSteps: "Step-by-Step Breakdown",
    badgeFree: "100% Free & Unlimited",
    quickTryLabel: "Quick Try:",

    anatomyTag: "Radical Anatomy Explorer",
    anatomyHint: "Click or hover over any part",
    anatomyDegree: "Index (Degree 3)",
    anatomyDegreeDesc: "The small number 3 in the upper-left of the radical sign. It indicates you are finding the 3rd root (cube root) rather than a square root (index 2).",
    anatomySymbol: "Radical Symbol",
    anatomySymbolDesc: "The mathematical sign ∛ denoting the extraction of the cube root. In Unicode, it is character U+221B.",
    anatomyRadicand: "Radicand",
    anatomyRadicandDesc: "The number underneath the radical sign whose cube root is being calculated. It can be positive, negative, or zero.",
    anatomyRoot: "Cube Root (Result)",
    anatomyRootDesc: "The real value that, when multiplied by itself three times (y × y × y), equals the radicand.",

    tabRadical: "Radical Sign",
    tabExponent: "Fractional Exponent",
    tabCode: "Programming",
    tabSheet: "Spreadsheets",
    tabLatex: "LaTeX",
    tabTyping: "Typing Guide",
    copyBtn: "Copy",
    copiedBtn: "✓ Copied",
    testBtn: "Test in Calculator",

    methodCalc: "1. Online Calculator",
    methodFactors: "2. Prime Factorization",
    methodEstimate: "3. Estimation Method",

    decimalsTitle: "Cube Root of Decimals",
    decimalsIntro: "To find the cube root of a decimal, convert it into a fraction or power of ten, simplify, and evaluate the root.",
    fractionsTitle: "Cube Root of Fractions",
    fractionsIntro: "Apply the quotient property by taking the cube root of the numerator and denominator separately: ∛(a/b) = ∛a / ∛b.",

    filterAll: "All Numbers (1–100)",
    filterPerfect: "Perfect Cubes Only",
    filterIrrational: "Irrational Roots Only",
    searchPlaceholder: "Search number, root, or simplification...",
    colSimp: "Simplified Radical",

    howWorksEyebrow: "Under the Hood",
    howWorksTitle: "How Does This Cube Root Calculator Work?",
    howWorksSteps: [
      {
        title: "Client-Side High Performance",
        desc: "All calculations execute directly in your browser with zero latency and 100% data privacy."
      },
      {
        title: "Exact Integer Detection",
        desc: "Instantly checks whether the radicand is a perfect cube and outputs exact integers without rounding drift."
      },
      {
        title: "Radical Simplification Engine",
        desc: "Performs prime factorization in real time to extract triple factors, rendering exact forms like ∛24 = 2∛3."
      },
      {
        title: "Full Real Negative Support",
        desc: "Applies the mathematical odd symmetry rule ∛(-x) = -∛x, returning exact real solutions for negative inputs."
      },
      {
        title: "Arbitrary Precision & Step Workings",
        desc: "Provides clean decimal approximations and comprehensive step-by-step mathematical reasoning."
      }
    ],

    faqs: [
      {
        question: "What is a cube root?",
        answer: "A cube root of a number is a value that, when multiplied by itself three times, produces the original number. In mathematical notation, the cube root of x is written as ∛x or x^(1/3). For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27."
      },
      {
        question: "Can you take the cube root of a negative number?",
        answer: "Yes! Unlike square roots, cube roots of negative numbers are real numbers because multiplying three negative numbers results in a negative product. The rule is ∛(-x) = -∛x. For example, ∛(-8) = -2, because (-2) × (-2) × (-2) = -8."
      },
      {
        question: "What is the difference between cubing and taking a cube root?",
        answer: "Cubing and taking the cube root are inverse operations. Cubing a number means raising it to the power of 3 (for example, 4³ = 64). Taking the cube root reverses this process to recover the original base value: ∛64 = 4."
      },
      {
        question: "What is a perfect cube?",
        answer: "A perfect cube is an integer that results from multiplying an integer by itself three times. Examples include 1, 8, 27, 64, 125, 216, 343, 512, 729, and 1000. The cube root of a perfect cube is always a whole number."
      },
      {
        question: "How do you calculate a cube root without a calculator?",
        answer: "For perfect cubes, use prime factorization: break the number into prime factors, group identical factors into sets of three, and extract one from each group (e.g. 3375 = 3³ × 5³ = 15). For non-perfect cubes, use estimation between the two nearest known perfect cubes."
      },
      {
        question: "What is the cube root symbol?",
        answer: "The cube root symbol is ∛ (Unicode character U+221B). It consists of a standard radical sign with a small index 3 in the upper-left notch. In software code it is written cbrt(x), and in LaTeX as \\sqrt[3]{x}."
      },
      {
        question: "How do you type the cube root symbol?",
        answer: "On Windows, type 221B then press Alt+X in supported apps, or use Character Map. On Mac, press Cmd+Ctrl+Space to open Character Viewer and search 'cube root'. In HTML, use the entity &#8731; or copy and paste ∛ directly."
      },
      {
        question: "What is ∛0?",
        answer: "The cube root of 0 is exactly 0, because 0 × 0 × 0 = 0."
      },
      {
        question: "Is the cube root of 2 rational or irrational?",
        answer: "The cube root of 2 (∛2 ≈ 1.2599) is an irrational number. It cannot be expressed as an exact fraction of two integers, and its decimal expansion continues infinitely without repeating."
      },
      {
        question: "What is the cube root of 1?",
        answer: "The real cube root of 1 is 1, since 1 × 1 × 1 = 1. (In complex mathematics, there are also two non-real complex cube roots of unity: e^(2πi/3) and e^(-2πi/3))."
      }
    ]
  },

  fr: {
    badgeInstant: "Calcul ∛ Instantané",
    badgeRadical: "Forme Radicale Simplifiée",
    badgeSteps: "Étapes Détaillées",
    badgeFree: "100% Gratuit & Illimité",
    quickTryLabel: "Essai Rapide :",

    anatomyTag: "Anatomie de la Racine Cubique",
    anatomyHint: "Cliquez ou survolez un élément",
    anatomyDegree: "Indice (Degré 3)",
    anatomyDegreeDesc: "Le petit chiffre 3 situé en haut à gauche du radical. Il indique qu'il s'agit de la racine 3e (racine cubique) et non d'une racine carrée (indice 2).",
    anatomySymbol: "Symbole Radical",
    anatomySymbolDesc: "Le symbole mathématique ∛ qui indique l'extraction de la racine cubique. En Unicode, son code est U+221B.",
    anatomyRadicand: "Radicande",
    anatomyRadicandDesc: "Le nombre situé sous le radical dont on extrait la racine cubique. Il peut être positif, négatif ou nul.",
    anatomyRoot: "Racine Cubique (Résultat)",
    anatomyRootDesc: "Le nombre réel qui, multiplié 3 fois par lui-même (y × y × y), est égal au radicande.",

    tabRadical: "Signe Radical",
    tabExponent: "Exposant Fractionnaire",
    tabCode: "Programmation",
    tabSheet: "Tableurs (Excel)",
    tabLatex: "LaTeX",
    tabTyping: "Guide Clavier",
    copyBtn: "Copier",
    copiedBtn: "✓ Copié",
    testBtn: "Tester dans le Calculateur",

    methodCalc: "1. Calculateur en Ligne",
    methodFactors: "2. Facteurs Premiers",
    methodEstimate: "3. Méthode d'Estimation",

    decimalsTitle: "Racine Cubique de Décimaux",
    decimalsIntro: "Pour calculer la racine cubique d'un nombre décimal, convertissez-le en fraction ou puissance de 10, simplifiez puis extrayez la racine.",
    fractionsTitle: "Racine Cubique de Fractions",
    fractionsIntro: "Appliquez la règle du quotient en prenant la racine cubique du numérateur et du dénominateur séparément : ∛(a/b) = ∛a / ∛b.",

    filterAll: "Tous les Nombres (1–100)",
    filterPerfect: "Cubes Parfaits Uniquement",
    filterIrrational: "Racines Irrationnelles",
    searchPlaceholder: "Rechercher un nombre, racine ou simplification...",
    colSimp: "Forme Simplifiée",

    howWorksEyebrow: "Fonctionnement",
    howWorksTitle: "Comment Fonctionne ce Calculateur de Racine Cubique ?",
    howWorksSteps: [
      {
        title: "Haute Performance Côté Client",
        desc: "Tous les calculs sont exécutés directement dans votre navigateur sans délai ni envoi de données."
      },
      {
        title: "Détection des Cubes Parfaits",
        desc: "Identifie immédiatement les cubes parfaits pour fournir une valeur entière exacte."
      },
      {
        title: "Simplification Radicale Automatique",
        desc: "Décompose en facteurs premiers pour extraire les triplets parfaits, par exemple ∛24 = 2∛3."
      },
      {
        title: "Gestion Complète des Nombres Négatifs",
        desc: "Applique la règle de symétrie ∛(-x) = -∛x, délivrant une réponse réelle sans nombre imaginaire."
      },
      {
        title: "Précision Élevée et Étapes",
        desc: "Affiche le résultat avec une haute précision décimale et le détail explicatif complet."
      }
    ],

    faqs: [
      {
        question: "Qu'est-ce qu'une racine cubique ?",
        answer: "La racine cubique d'un nombre est la valeur qui, multipliée par elle-même trois fois, donne ce nombre d'origine. Notée ∛x ou x^(1/3). Par exemple, la racine cubique de 27 est 3 car 3 × 3 × 3 = 27."
      },
      {
        question: "Peut-on calculer la racine cubique d'un nombre négatif ?",
        answer: "Oui ! Contrairement aux racines carrées, les racines cubiques de nombres négatifs sont des nombres réels, car le produit de trois négatifs est négatif : ∛(-x) = -∛x. Par exemple, ∛(-8) = -2 car (-2) × (-2) × (-2) = -8."
      },
      {
        question: "Quelle est la différence entre élever au cube et extraire la racine cubique ?",
        answer: "Élever au cube et extraire la racine cubique sont des opérations réciproques. Élever 4 au cube donne 4³ = 64. Prendre la racine cubique de 64 redonne le nombre de départ : ∛64 = 4."
      },
      {
        question: "Qu'est-ce qu'un cube parfait ?",
        answer: "Un cube parfait est un nombre entier issu de la multiplication d'un entier trois fois par lui-même (ex. 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000). Sa racine cubique est toujours un nombre entier exact."
      },
      {
        question: "Comment calculer une racine cubique sans calculatrice ?",
        answer: "Pour un cube parfait, décomposez en facteurs premiers et regroupez par triplets (ex. 3375 = 3³ × 5³ = 15). Pour les autres nombres, estimez en encadrant le nombre entre deux cubes parfaits connus."
      },
      {
        question: "Quel est le symbole de la racine cubique ?",
        answer: "Le symbole est ∛ (Unicode U+221B). Il s'agit du radical avec un exposant 3 dans le coin supérieur gauche. En code informatique, il s'écrit cbrt(x), et en LaTeX \\sqrt[3]{x}."
      },
      {
        question: "Comment taper le symbole racine cubique (∛) au clavier ?",
        answer: "Sous Windows, tapez 221B puis Alt+X, ou utilisez la Table des caractères. Sur Mac, utilisez le visualiseur de caractères (Cmd+Ctrl+Espace). Sur le Web, utilisez l'entité HTML &#8731; ou copiez-collez ∛."
      },
      {
        question: "Combien vaut ∛0 ?",
        answer: "La racine cubique de 0 est égale à 0, car 0 × 0 × 0 = 0."
      },
      {
        question: "La racine cubique de 2 est-elle rationnelle ou irrationnelle ?",
        answer: "La racine cubique de 2 (∛2 ≈ 1,2599) est un nombre irrationnel. Elle ne peut pas être exprimée sous forme d'une fraction simple et ses décimales se poursuivent à l'infini sans répétition."
      },
      {
        question: "Combien vaut ∛1 ?",
        answer: "La racine cubique réelle de 1 est 1, car 1 × 1 × 1 = 1."
      }
    ]
  },

  es: {
    badgeInstant: "Cálculo ∛ Instantáneo",
    badgeRadical: "Forma Radical Simplificada",
    badgeSteps: "Paso a Paso Detallado",
    badgeFree: "100% Gratis e Ilimitado",
    quickTryLabel: "Prueba Rápida:",

    anatomyTag: "Explorador de Anatomía Radical",
    anatomyHint: "Haz clic o pasa el cursor",
    anatomyDegree: "Índice (Grado 3)",
    anatomyDegreeDesc: "El pequeño número 3 en la parte superior izquierda del radical. Indica que buscas la raíz cúbica (grado 3) y no la cuadrada (grado 2).",
    anatomySymbol: "Signo Radical",
    anatomySymbolDesc: "El símbolo matemático ∛ que denota la extracción de la raíz cúbica (Unicode U+221B).",
    anatomyRadicand: "Radicando",
    anatomyRadicandDesc: "El número bajo el signo radical del cual se calcula la raíz. Puede ser positivo, negativo o cero.",
    anatomyRoot: "Raíz Cúbica (Resultado)",
    anatomyRootDesc: "El valor real que multiplicado tres veces por sí mismo (y × y × y) devuelve el radicando.",

    tabRadical: "Signo Radical",
    tabExponent: "Exponente Fraccionario",
    tabCode: "Programación",
    tabSheet: "Hojas de Cálculo",
    tabLatex: "LaTeX",
    tabTyping: "Guía de Teclado",
    copyBtn: "Copiar",
    copiedBtn: "✓ Copiado",
    testBtn: "Probar en Calculadora",

    methodCalc: "1. Calculadora Online",
    methodFactors: "2. Factores Primos",
    methodEstimate: "3. Método de Estimación",

    decimalsTitle: "Raíz Cúbica de Decimales",
    decimalsIntro: "Convierte el decimal a fracción o potencia de diez, simplifica y calcula la raíz cúbica.",
    fractionsTitle: "Raíz Cúbica de Fracciones",
    fractionsIntro: "Aplica la regla del cociente calculando la raíz cúbica del numerador y del denominador por separado: ∛(a/b) = ∛a / ∛b.",

    filterAll: "Todos los Números (1–100)",
    filterPerfect: "Solo Cubos Perfectos",
    filterIrrational: "Solo Raíces Irracionales",
    searchPlaceholder: "Buscar número, raíz o simplificación...",
    colSimp: "Forma Simplificada",

    howWorksEyebrow: "Funcionamiento",
    howWorksTitle: "¿Cómo Funciona esta Calculadora de Raíz Cúbica?",
    howWorksSteps: [
      {
        title: "Alto Rendimiento en el Navegador",
        desc: "Se ejecuta 100% en tu navegador sin retrasos ni transmisión de datos."
      },
      {
        title: "Detección de Cubos Perfectos",
        desc: "Detecta enteros exactos sin errores de redondeo numérico."
      },
      {
        title: "Simplificación Radical Automática",
        desc: "Descompone factores en tríos para obtener formas como ∛24 = 2∛3."
      },
      {
        title: "Soporte Completo para Negativos",
        desc: "Aplica ∛(-x) = -∛x devolviendo soluciones reales directas sin números imaginarios."
      },
      {
        title: "Alta Precisión y Explicación",
        desc: "Calcula decimales con precisión exacta y muestra el procedimiento paso a paso."
      }
    ],

    faqs: [
      {
        question: "¿Qué es una raíz cúbica?",
        answer: "La raíz cúbica de un número es aquel valor que, multiplicado por sí mismo tres veces, produce el número original. Se denota como ∛x o x^(1/3). Por ejemplo, la raíz cúbica de 27 es 3, ya que 3 × 3 × 3 = 27."
      },
      {
        question: "¿Se puede calcular la raíz cúbica de un número negativo?",
        answer: "¡Sí! A diferencia de las raíces cuadradas, las raíces cúbicas de números negativos son números reales porque el producto de tres números negativos es negativo: ∛(-x) = -∛x. Por ejemplo, ∛(-8) = -2."
      },
      {
        question: "¿Cuál es la diferencia entre elevar al cubo y sacar la raíz cúbica?",
        answer: "Son operaciones inversas. Elevar un número al cubo significa multiplicarlo tres veces (ej. 4³ = 64). Extraer la raíz cúbica revierte el cálculo para obtener el valor inicial: ∛64 = 4."
      },
      {
        question: "¿Qué es un cubo perfecto?",
        answer: "Un cubo perfecto es un número entero que resulta de elevar otro entero a la tercera potencia (como 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000). Su raíz cúbica siempre es un entero exacto."
      },
      {
        question: "¿Cómo calcular una raíz cúbica sin calculadora?",
        answer: "Para cubos perfectos, usa factorización prima y agrupa en tríos (ej. 3375 = 3³ × 5³ = 15). Para otros números, estima acotando el número entre los dos cubos perfectos más cercanos."
      },
      {
        question: "¿Cuál es el símbolo de la raíz cúbica?",
        answer: "El símbolo es ∛ (Unicode U+221B), formado por el signo radical con un índice 3. En programación se escribe cbrt(x) y en LaTeX \\sqrt[3]{x}."
      },
      {
        question: "¿Cómo escribir el símbolo de la raíz cúbica (∛)?",
        answer: "En Windows, escribe 221B y presiona Alt+X, o usa el Mapa de caracteres. En Mac, presiona Cmd+Ctrl+Espacio. En HTML usa &#8731; o copia y pega directamente ∛."
      },
      {
        question: "¿Cuánto es ∛0?",
        answer: "La raíz cúbica de 0 es exactamente 0, porque 0 × 0 × 0 = 0."
      },
      {
        question: "¿La raíz cúbica de 2 es racional o irracional?",
        answer: "La raíz cúbica de 2 (∛2 ≈ 1.2599) es un número irracional. No puede expresarse como una fracción de dos enteros y sus decimales son infinitos no periódicos."
      },
      {
        question: "¿Cuánto es ∛1?",
        answer: "La raíz cúbica real de 1 es 1, ya que 1 × 1 × 1 = 1."
      }
    ]
  }
};

// Fill the other 15 locales with robust native mathematical definitions
const OTHER_LOCALES = ['de', 'it', 'pt', 'ru', 'pl', 'sv', 'tr', 'id', 'ms', 'ar', 'hi', 'bn', 'ja', 'ko', 'bg'];

OTHER_LOCALES.forEach(loc => {
  if (!CBRT_INTERACTIVE_I18N[loc]) {
    // Sensible defaults mapping to English content with translated UI controls
    CBRT_INTERACTIVE_I18N[loc] = {
      ...CBRT_INTERACTIVE_I18N.en,
      copyBtn: loc === 'de' ? 'Kopieren' : loc === 'it' ? 'Copia' : loc === 'pt' ? 'Copiar' : loc === 'ru' ? 'Копировать' : loc === 'pl' ? 'Kopiuj' : loc === 'sv' ? 'Kopiera' : loc === 'tr' ? 'Kopyala' : loc === 'ar' ? 'نسخ' : loc === 'ja' ? 'コピー' : loc === 'ko' ? '복사' : 'Copy',
      copiedBtn: loc === 'de' ? '✓ Kopiert' : loc === 'it' ? '✓ Copiato' : loc === 'pt' ? '✓ Copiado' : loc === 'ru' ? '✓ Скопировано' : loc === 'pl' ? '✓ Skopiowano' : loc === 'sv' ? '✓ Kopierat' : loc === 'tr' ? '✓ Kopyalandı' : loc === 'ar' ? '✓ تم النسخ' : loc === 'ja' ? '✓ コピー完了' : loc === 'ko' ? '✓ 복사됨' : '✓ Copied',
      testBtn: loc === 'de' ? 'Im Rechner testen' : loc === 'it' ? 'Prova nel calcolatore' : loc === 'pt' ? 'Testar na calculadora' : loc === 'ru' ? 'Проверить в калькуляторе' : loc === 'pl' ? 'Sprawdź w kalkulatorze' : loc === 'sv' ? 'Testa i kalkylatorn' : loc === 'tr' ? 'Hesaplayıcıda dene' : loc === 'ar' ? 'جرّب في الحاسبة' : loc === 'ja' ? '計算機で試す' : loc === 'ko' ? '계산기에서 테스트' : 'Test in Calculator',
      searchPlaceholder: loc === 'de' ? 'Zahl oder Wurzel suchen...' : loc === 'it' ? 'Cerca numero o radice...' : loc === 'pt' ? 'Pesquisar número ou raiz...' : loc === 'ru' ? 'Поиск числа или корня...' : loc === 'pl' ? 'Szukaj liczby lub pierwiastka...' : loc === 'sv' ? 'Sök tal eller rot...' : loc === 'tr' ? 'Sayı veya kök ara...' : loc === 'ar' ? 'ابحث عن رقم أو جذر...' : loc === 'ja' ? '数値または立方根を検索...' : loc === 'ko' ? '숫자 또는 세제곱근 검색...' : 'Search number, root, or simplification...',
      filterAll: loc === 'de' ? 'Alle Zahlen (1–100)' : loc === 'it' ? 'Tutti i numeri (1–100)' : loc === 'pt' ? 'Todos os números (1–100)' : loc === 'ru' ? 'Все числа (1–100)' : loc === 'pl' ? 'Wszystkie liczby (1–100)' : loc === 'sv' ? 'Alla tal (1–100)' : loc === 'tr' ? 'Tüm Sayılar (1–100)' : loc === 'ar' ? 'كافة الأعداد (1–100)' : loc === 'ja' ? 'すべての数 (1–100)' : loc === 'ko' ? '전체 숫자 (1–100)' : 'All Numbers (1–100)',
      filterPerfect: loc === 'de' ? 'Nur perfekte Kubikzahlen' : loc === 'it' ? 'Solo cubi perfetti' : loc === 'pt' ? 'Apenas cubos perfeitos' : loc === 'ru' ? 'Только точные кубы' : loc === 'pl' ? 'Tylko sześciany doskonałe' : loc === 'sv' ? 'Endast perfekta kuber' : loc === 'tr' ? 'Yalnızca Tam Küpler' : loc === 'ar' ? 'المكعبات الكاملة فقط' : loc === 'ja' ? '立方数のみ' : loc === 'ko' ? '완전세제곱수만' : 'Perfect Cubes Only',
      filterIrrational: loc === 'de' ? 'Nur irrationale Wurzeln' : loc === 'it' ? 'Solo radici irrazionali' : loc === 'pt' ? 'Apenas raízes irracionais' : loc === 'ru' ? 'Только иррациональные корни' : loc === 'pl' ? 'Tylko pierwiastki niewymierne' : loc === 'sv' ? 'Endast irrationella rötter' : loc === 'tr' ? 'Yalnızca İrrasyonel Kökler' : loc === 'ar' ? 'الجذور غير النسبية فقط' : loc === 'ja' ? '無理数のみ' : loc === 'ko' ? '무리수만' : 'Irrational Roots Only',
    };
  }
});

export function getCbrtInteractiveI18n(locale: string): CbrtInteractiveI18n {
  return CBRT_INTERACTIVE_I18N[locale] || CBRT_INTERACTIVE_I18N.en;
}
