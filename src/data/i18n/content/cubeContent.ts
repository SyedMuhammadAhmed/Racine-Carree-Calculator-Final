// Educational content translations for Perfect Cube Calculator across all 18 supported languages
import { getCubeBoilerplate } from './cubeBoilerplate';

export interface CubeContentSection {
  eyebrow: string;
  title: string;
  p1?: string;
  p2?: string;
  p3?: string;
}

export interface CubeContent {
  heroPills: [string, string, string, string];
  tocTitle: string;
  toc: Array<{ title: string; href: string; subitems?: Array<{ title: string; href: string }> }>;
  s1: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    cards: Array<{ title: string; text: string }>;
  };
  s2: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
  };
  s3: {
    eyebrow: string;
    title: string;
    intro: string;
    tests: Array<{ title: string; subtitle: string; text: string; example: string }>;
  };
  s4: {
    eyebrow: string;
    title: string;
    desc: string;
    colN: string;
    colCube: string;
    colRoot: string;
    colParity: string;
  };
  s5: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
  };
  s6: {
    eyebrow: string;
    title: string;
    p1: string;
    multTitle: string;
    multText: string;
    divTitle: string;
    divText: string;
  };
  s7: {
    eyebrow: string;
    title: string;
    p1: string;
    table: {
      propCol: string;
      squareCol: string;
      cubeCol: string;
      rows: Array<{ prop: string; square: string; cube: string }>;
    };
  };
  s8: {
    eyebrow: string;
    title: string;
    apps: Array<{ title: string; text: string }>;
  };
  s9: {
    eyebrow: string;
    title: string;
  };
  s10: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  faqs: Array<{ question: string; answer: string }>;
}

const en: CubeContent = {
  heroPills: ["Instant Proof", "Bounding Cubes", "Prime Powers", "100% Free"],
  tocTitle: "Table of Contents",
  toc: [
    { title: "What Is a Perfect Cube?", href: "#section-what-is-perfect-cube" },
    { title: "How to Use the Calculator", href: "#section-how-to-use" },
    {
      title: "4 Proven Tests to Check Any Cube",
      href: "#section-four-tests",
      subitems: [
        { title: "1. The Integer Root Test", href: "#test-root" },
        { title: "2. Prime Factorization Rule", href: "#test-factors" },
        { title: "3. Negative Cubes & Symmetry Rule", href: "#test-negatives" },
        { title: "4. The Digital Root (Mod 9) Test", href: "#test-digital-root" }
      ]
    },
    { title: "Reference Table: First 30 Cubes", href: "#section-first-30-cubes" },
    { title: "Finding the Nearest Perfect Cube", href: "#section-nearest-cube" },
    { title: "How to Make Any Number into a Cube", href: "#section-make-cube" },
    { title: "Perfect Squares vs. Perfect Cubes", href: "#section-squares-vs-cubes" },
    { title: "Real-World Applications", href: "#section-applications" },
    { title: "Frequently Asked Questions", href: "#section-faqs" },
    { title: "A Quick Recap", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Definition",
    title: "What Is a Perfect Cube?",
    lead: "A perfect cube (or cube number) is an integer obtained by multiplying another whole number by itself three times: n = k³ = k × k × k.",
    p1: "For example, 27 is a perfect cube because 3 × 3 × 3 = 27. Similarly, 125 is a perfect cube because 5 × 5 × 5 = 125. In contrast, 50 is not a perfect cube because its cube root is approximately 3.684, which is not an integer.",
    p2: "The term cube comes directly from 3D geometry: if you have 27 unit blocks, you can build a solid 3×3×3 geometric cube with equal length, width, and height. With 50 blocks, you can never assemble a solid cube without leftover pieces.",
    cards: [
      { title: "Negative Cubes Exist!", text: "Unlike square roots, odd roots preserve signs! (-3)³ = (-3) × (-3) × (-3) = -27. Therefore, negative integers can be legitimate real perfect cubes." },
      { title: "Zero & One", text: "0 and 1 are trivial perfect cubes: 0³ = 0 and 1³ = 1. Negative one is also a cube: (-1)³ = -1." },
      { title: "Parity Consistency", text: "The cube of an even integer is always even (2³=8, 4³=64), and the cube of an odd integer is always odd (3³=27, 5³=125)." },
      { title: "Cube of Factors", text: "In prime factorization, an integer is a perfect cube if and only if the exponent of every prime factor is a multiple of 3." }
    ]
  },
  s2: {
    eyebrow: "Calculator Guide",
    title: "How to Use the Perfect Cube Calculator",
    intro: "Our interactive tool checks numbers of any magnitude in milliseconds. Follow these 3 easy steps:",
    steps: [
      { title: "Enter Any Integer", text: "Type any positive or negative whole number into the input box, or click one of the preset chips like -27, 216, or 1331." },
      { title: "Click 'Check Perfect Cube'", text: "Click the check button or hit Enter. The tool immediately computes the exact real cube root and tests integer divisibility." },
      { title: "Review the Full Proof", text: "Get an instant verdict banner, base root, prime factor powers, nearest bounding cubes, and the exact multiplier needed if it is not a cube." }
    ]
  },
  s3: {
    eyebrow: "Mathematical Proofs",
    title: "4 Proven Tests to Check Any Perfect Cube",
    intro: "Mathematicians use four rigorous tests to verify whether an unknown integer n is a perfect cube:",
    tests: [
      { title: "Test 1: The Integer Cube Root Test", subtitle: "Direct Computational Check", text: "Take the cube root ∛n. If the result is an exact integer with zero fractional remainder, n is a perfect cube.", example: "∛343 = 7.0000000 → Integer 7 confirmed." },
      { title: "Test 2: The Prime Factorization Rule", subtitle: "All Exponents Must Be Multiples of 3", text: "Break n down into its prime factors. If all prime exponents are divisible by 3 (3, 6, 9...), then n is a perfect cube.", example: "216 = 2³ × 3³ (exponents are 3 and 3, both divisible by 3) → Perfect cube!" },
      { title: "Test 3: Negative Cubes & Symmetry Rule", subtitle: "Odd Powers Preserve the Negative Sign", text: "Because (-k)³ = -k³, a negative number -n is a perfect cube if and only if |n| is a perfect cube.", example: "-512 is a perfect cube because 512 = 8³, making ∛(-512) = -8." },
      { title: "Test 4: The Digital Root (Mod 9) Filter", subtitle: "Quick Elimination Trick", text: "Sum the digits of n repeatedly until you get a single digit. The digital root of any perfect cube is ALWAYS 0, 1, 8, or 9 (in mod 9 arithmetic: 0, ±1). If the digital root is 2, 3, 4, 5, 6, or 7, it is guaranteed NOT to be a cube!", example: "Digital root of 1331: 1+3+3+1 = 8 (passes test)." }
    ]
  },
  s4: {
    eyebrow: "Reference Chart",
    title: "Reference Table: First 30 Perfect Cubes (1³ to 30³)",
    desc: "Memorizing the first ten to fifteen cubes speeds up mental arithmetic and algebra exams dramatically:",
    colN: "n",
    colCube: "Cube (n³)",
    colRoot: "Root (∛n³)",
    colParity: "Parity"
  },
  s5: {
    eyebrow: "Bounding Intervals",
    title: "Finding the Nearest Perfect Cube for Non-Cube Numbers",
    p1: "When a number is not a cube, it always sits between two consecutive integer cubes: k³ < n < (k + 1)³.",
    p2: "For example, 500 is not a cube. The nearest cubes are 7³ = 343 and 8³ = 512. The distance to 343 is 157, while the distance to 512 is only 12. Therefore, 512 is the closest cube to 500."
  },
  s6: {
    eyebrow: "Algebraic Technique",
    title: "How to Make Any Number into a Perfect Cube",
    p1: "You can turn any non-cube integer into a perfect cube by either multiplying or dividing it by the smallest possible integer using prime factors:",
    multTitle: "1. Multiplication Method",
    multText: "Find each prime factor's exponent and calculate how many more powers are needed to reach the next multiple of 3.",
    divTitle: "2. Division Method",
    divText: "Divide out the remainder factors that exceed the multiple of 3 to leave only complete groups of 3."
  },
  s7: {
    eyebrow: "Comparison",
    title: "Perfect Squares vs. Perfect Cubes",
    p1: "Here is how 2D powers (squares) compare to 3D powers (cubes):",
    table: {
      propCol: "Property",
      squareCol: "Perfect Square (k²)",
      cubeCol: "Perfect Cube (k³)",
      rows: [
        { prop: "Geometry", square: "2D area of a flat square", cube: "3D volume of a solid cube" },
        { prop: "Negative Numbers", square: "Cannot be real (yields ±bi)", cube: "Valid real numbers: (-k)³ = -k³" },
        { prop: "Prime Exponents", square: "Multiples of 2 (even)", cube: "Multiples of 3 (divisible by 3)" },
        { prop: "Last Digits Allowed", square: "Only 0, 1, 4, 5, 6, 9", cube: "Any digit 0 through 9" },
        { prop: "Both Square & Cube", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    }
  },
  s8: {
    eyebrow: "Practical Uses",
    title: "Real-World Applications of Perfect Cubes",
    apps: [
      { title: "Volume & Packaging", text: "Calculating box volumes, container dimensions, and material density in logistics and shipping." },
      { title: "Physics & Fluid Dynamics", text: "Determining mass and buoyancy scaling according to the square-cube law in biomechanics and aviation." },
      { title: "Computer Graphics & Voxels", text: "3D voxel grid calculations, octree spatial indexing, and Minecraft-style block coordinate structures." },
      { title: "Number Theory & Cryptography", text: "Elliptic curve cryptography and Diophantine equations involving sums of cubes (Fermat's Last Theorem)." }
    ]
  },
  s9: {
    eyebrow: "Questions & Answers",
    title: "Frequently Asked Questions"
  },
  s10: {
    eyebrow: "Summary",
    title: "A Quick Recap",
    cards: [
      { title: "Three Equal Factors", text: "A perfect cube satisfies n = k³, meaning three identical integers multiply to give n." },
      { title: "Negative Friendly", text: "Unlike square roots, cube roots of negative numbers are real and valid integers." },
      { title: "Prime Factor Exponents", text: "All prime exponents must divide cleanly by 3 in prime factorization." },
      { title: "100% Free Tool", text: "Use our interactive checker above anytime for instant proofs, bounds, and steps." }
    ]
  },
  faqs: [
    { question: "What is a perfect cube in simple terms?", answer: "A perfect cube is an integer resulting from multiplying a whole number by itself three times. For example, 27 is a perfect cube because 3 × 3 × 3 = 27." },
    { question: "Can a negative number be a perfect cube?", answer: "Yes! Multiplying three negative numbers produces a negative result: (-4) × (-4) × (-4) = -64. Thus, -64 is a valid real perfect cube with root -4." },
    { question: "Is 0 a perfect cube?", answer: "Yes, 0 is a perfect cube because 0 × 0 × 0 = 0 (0³ = 0)." },
    { question: "Can a number be both a perfect square and a perfect cube?", answer: "Yes! Numbers whose prime exponents are multiples of 6 (the least common multiple of 2 and 3) are both squares and cubes. Examples include 1, 64 (8² and 4³), 729 (27² and 9³), and 4096 (64² and 16³)." },
    { question: "Is this calculator completely free to use?", answer: "Yes, our Perfect Cube Calculator is 100% free with unlimited checks, instant answers, and detailed step-by-step mathematical proofs." }
  ]
};

const fr: CubeContent = {
  heroPills: ["Preuve Instantanée", "Cubes Encadrants", "Facteurs Premiers", "100% Gratuit"],
  tocTitle: "Table des Matières",
  toc: [
    { title: "Qu'est-ce qu'un cube parfait ?", href: "#section-what-is-perfect-cube" },
    { title: "Comment utiliser le calculateur", href: "#section-how-to-use" },
    {
      title: "4 tests pour vérifier un cube parfait",
      href: "#section-four-tests",
      subitems: [
        { title: "1. Test de la racine entière", href: "#test-root" },
        { title: "2. Règle de décomposition première", href: "#test-factors" },
        { title: "3. Cubes négatifs et règle de symétrie", href: "#test-negatives" },
        { title: "4. Test de la racine numérique (Mod 9)", href: "#test-digital-root" }
      ]
    },
    { title: "Tableau de référence : Les 30 premiers cubes", href: "#section-first-30-cubes" },
    { title: "Trouver le cube parfait le plus proche", href: "#section-nearest-cube" },
    { title: "Comment transformer un nombre en cube parfait", href: "#section-make-cube" },
    { title: "Carrés parfaits vs. Cubes parfaits", href: "#section-squares-vs-cubes" },
    { title: "Applications concrètes", href: "#section-applications" },
    { title: "Foire Aux Questions (FAQ)", href: "#section-faqs" },
    { title: "Récapitulatif rapide", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Définition",
    title: "Qu'est-ce qu'un Cube Parfait ?",
    lead: "Un cube parfait (ou nombre cubique) est un nombre entier obtenu en multipliant un entier par lui-même trois fois : n = k³ = k × k × k.",
    p1: "Par exemple, 27 est un cube parfait car 3 × 3 × 3 = 27. De même, 125 est un cube parfait car 5 × 5 × 5 = 125. En revanche, 50 n'est pas un cube parfait car sa racine cubique est approximativement 3,684, ce qui n'est pas un nombre entier.",
    p2: "Le mot cube provient de la géométrie 3D : avec 27 petits cubes unitaires identiques, vous pouvez assembler un cube plein de 3×3×3 avec la même longueur, largeur et hauteur. Avec 50 blocs, vous ne pourrez jamais former un cube parfait sans pièces manquantes ou excédentaires.",
    cards: [
      { title: "Les cubes négatifs existent !", text: "Contrairement aux racines carrées, les racines impaires conservent le signe ! (-3)³ = (-3) × (-3) × (-3) = -27. Les entiers négatifs peuvent donc être de vrais cubes parfaits." },
      { title: "Zéro et Un", text: "0 et 1 sont des cubes parfaits immédiats : 0³ = 0 et 1³ = 1. Moins un est également un cube parfait : (-1)³ = -1." },
      { title: "Parité conservée", text: "Le cube d'un nombre pair est toujours pair (2³=8, 4³=64), et le cube d'un nombre impair est toujours impair (3³=27, 5³=125)." },
      { title: "Exposants de facteurs premiers", text: "En décomposition en facteurs premiers, un entier est un cube parfait si et seulement si l'exposant de chaque facteur premier est un multiple de 3." }
    ]
  },
  s2: {
    eyebrow: "Mode d'emploi",
    title: "Comment utiliser le Calculateur de Cube Parfait",
    intro: "Notre outil interactif teste n'importe quel nombre en une fraction de seconde. Suivez ces 3 étapes simples :",
    steps: [
      { title: "Saisissez un nombre entier", text: "Tapez un nombre entier positif ou négatif dans le champ de saisie, ou cliquez sur un raccourci (-27, 216, 1331...)." },
      { title: "Cliquez sur 'Vérifier'", text: "Cliquez sur le bouton ou appuyez sur Entrée. Le calculateur évalue la racine cubique exacte et teste la divisibilité entière." },
      { title: "Découvrez la démonstration complète", text: "Visualisez le verdict, la racine de base, la décomposition en facteurs premiers, les cubes encadrants et le multiplicateur manquant." }
    ]
  },
  s3: {
    eyebrow: "Démonstrations Mathématiques",
    title: "4 Tests Prouvés pour Vérifier un Cube Parfait",
    intro: "Les mathématiciens utilisent quatre méthodes éprouvées pour déterminer si un nombre est un cube parfait :",
    tests: [
      { title: "Test 1 : Racine Cubique Entière", subtitle: "Vérification directe par calcul", text: "Calculez ∛n. Si le résultat est un entier exact sans reste décimal, n est un cube parfait.", example: "∛343 = 7,0000000 → Entier exact 7 confirmé." },
      { title: "Test 2 : Règle des Facteurs Premiers", subtitle: "Tous les exposants doivent être multiples de 3", text: "Décomposez n en facteurs premiers. Si chaque exposant est divisible par 3 (3, 6, 9...), alors n est un cube parfait.", example: "216 = 2³ × 3³ (exposants 3 et 3, tous deux divisibles par 3) → Cube parfait !" },
      { title: "Test 3 : Cubes Négatifs et Symétrie", subtitle: "Les puissances impaires conservent le signe négatif", text: "Puisque (-k)³ = -k³, un nombre négatif -n est un cube parfait si et seulement si |n| est un cube parfait.", example: "-512 est un cube parfait car 512 = 8³, d'où ∛(-512) = -8." },
      { title: "Test 4 : Règle de la Racine Numérique (Mod 9)", subtitle: "Filtre d'élimination rapide", text: "Additionnez les chiffres de n jusqu'à obtenir un seul chiffre. La racine numérique d'un cube parfait est TOUJOURS 0, 1, 8 ou 9. Si elle vaut 2, 3, 4, 5, 6 ou 7, ce n'est JAMAIS un cube parfait !", example: "Racine numérique de 1331 : 1+3+3+1 = 8 (passe le test avec succès)." }
    ]
  },
  s4: {
    eyebrow: "Tableau de Référence",
    title: "Tableau de Référence : Les 30 Premiers Cubes Parfaits (1³ à 30³)",
    desc: "Mémoriser les premiers cubes parfaits facilite grandement le calcul mental et les épreuves de mathématiques :",
    colN: "n",
    colCube: "Cube (n³)",
    colRoot: "Racine (∛n³)",
    colParity: "Parité"
  },
  s5: {
    eyebrow: "Encadrement",
    title: "Trouver le Cube Parfait le Plus Proche",
    p1: "Lorsqu'un nombre n'est pas un cube, il est toujours encadré par deux cubes consécutifs : k³ < n < (k + 1)³.",
    p2: "Par exemple, 500 n'est pas un cube. Les cubes les plus proches sont 7³ = 343 et 8³ = 512. La distance à 343 est de 157, alors que la distance à 512 n'est que de 12. Le cube le plus proche de 500 est donc 512."
  },
  s6: {
    eyebrow: "Technique Algébrique",
    title: "Comment Transformer un Nombre en Cube Parfait",
    p1: "Vous pouvez convertir n'importe quel nombre en cube parfait par multiplication ou division à l'aide de sa factorisation première :",
    multTitle: "1. Méthode par Multiplication",
    multText: "Identifiez les puissances manquantes pour que chaque exposant atteigne le prochain multiple de 3.",
    divTitle: "2. Méthode par Division",
    divText: "Divisez par les facteurs excédentaires pour ne conserver que des groupes complets de 3."
  },
  s7: {
    eyebrow: "Comparaison",
    title: "Carrés Parfaits vs. Cubes Parfaits",
    p1: "Voici comment se comparent les puissances à deux dimensions (carrés) et à trois dimensions (cubes) :",
    table: {
      propCol: "Propriété",
      squareCol: "Carré Parfait (k²)",
      cubeCol: "Cube Parfait (k³)",
      rows: [
        { prop: "Sens géométrique", square: "Aire 2D d'un carré plat", cube: "Volume 3D d'un cube plein" },
        { prop: "Nombres négatifs", square: "Impossible dans les réels (donne ±bi)", cube: "Nombres réels valides : (-k)³ = -k³" },
        { prop: "Exposants premiers", square: "Multiples de 2 (pairs)", cube: "Multiples de 3 (divisibles par 3)" },
        { prop: "Dernier chiffre", square: "Uniquement 0, 1, 4, 5, 6, 9", cube: "N'importe quel chiffre de 0 à 9" },
        { prop: "Carré ET Cube à la fois", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    }
  },
  s8: {
    eyebrow: "Applications Pratiques",
    title: "Applications Concrètes des Cubes Parfaits",
    apps: [
      { title: "Volumes et Emballage", text: "Calcul des dimensions d'emballages, volumes de réservoirs et densité des matériaux en logistique." },
      { title: "Physique et Dynamique des Fluides", text: "Loi carré-cube reliant surface et volume en biomécanique, aéronautique et résistance des matériaux." },
      { title: "Informatique Graphique et Voxels", text: "Structures en octree et rendu de mondes en blocs 3D cubiques (type Minecraft et jeux voxel)." },
      { title: "Théorie des Nombres et Cryptographie", text: "Courbes elliptiques, chiffrement asymétrique et équations diophantiennes relatives aux sommes de cubes." }
    ]
  },
  s9: {
    eyebrow: "Questions Fréquentes",
    title: "Foire Aux Questions (FAQ)"
  },
  s10: {
    eyebrow: "En Résumé",
    title: "Récapitulatif Rapide",
    cards: [
      { title: "Trois Facteurs Égaux", text: "Un cube parfait répond à la formule n = k³, soit le produit de trois entiers strictement identiques." },
      { title: "Compatible avec les Négatifs", text: "Contrairement aux carrés, la racine cubique d'un nombre négatif est un nombre réel tout à fait valide." },
      { title: "Exposants Multiples de 3", text: "Dans la factorisation première, chaque exposant doit obligatoirement être divisible par 3." },
      { title: "Outil 100% Gratuit", text: "Utilisez notre calculateur interactif ci-dessus pour obtenir immédiatement étapes et encadrements." }
    ]
  },
  faqs: [
    { question: "Qu'est-ce qu'un cube parfait en termes simples ?", answer: "Un cube parfait est un nombre entier issu de la multiplication d'un nombre entier par lui-même trois fois. Par exemple, 27 est un cube parfait car 3 × 3 × 3 = 27." },
    { question: "Un nombre négatif peut-il être un cube parfait ?", answer: "Oui ! Le produit de trois nombres négatifs est négatif : (-4) × (-4) × (-4) = -64. Donc -64 est un cube parfait réel ayant pour racine -4." },
    { question: "0 est-il un cube parfait ?", answer: "Oui, 0 est un cube parfait car 0 × 0 × 0 = 0 (0³ = 0)." },
    { question: "Un nombre peut-il être à la fois un carré parfait et un cube parfait ?", answer: "Oui ! Les nombres dont les exposants premiers sont des multiples de 6 sont à la fois carrés et cubes. Par exemple : 1, 64 (8² et 4³), 729 (27² et 9³) et 4096 (64² et 16³)." },
    { question: "Ce calculateur est-il entièrement gratuit ?", answer: "Oui, notre calculateur de cube parfait est 100% gratuit, sans inscription, avec calculs illimités et étapes détaillées." }
  ]
};

const es: CubeContent = {
  heroPills: ["Prueba Instantánea", "Cubos Delimitadores", "Factores Primos", "100% Gratis"],
  tocTitle: "Índice de Contenidos",
  toc: [
    { title: "¿Qué es un cubo perfecto?", href: "#section-what-is-perfect-cube" },
    { title: "Cómo usar la calculadora", href: "#section-how-to-use" },
    {
      title: "4 métodos para comprobar un cubo perfecto",
      href: "#section-four-tests",
      subitems: [
        { title: "1. Prueba de la raíz entera", href: "#test-root" },
        { title: "2. Regla de factorización prima", href: "#test-factors" },
        { title: "3. Cubos negativos y simetría", href: "#test-negatives" },
        { title: "4. Raíz digital (Módulo 9)", href: "#test-digital-root" }
      ]
    },
    { title: "Tabla de referencia: Primeros 30 cubos", href: "#section-first-30-cubes" },
    { title: "Encontrar el cubo perfecto más cercano", href: "#section-nearest-cube" },
    { title: "Cómo convertir cualquier número en cubo", href: "#section-make-cube" },
    { title: "Cuadrados perfectos vs. Cubos perfectos", href: "#section-squares-vs-cubes" },
    { title: "Aplicaciones en la vida real", href: "#section-applications" },
    { title: "Preguntas Frecuentes", href: "#section-faqs" },
    { title: "Resumen rápido", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Definición",
    title: "¿Qué es un Cubo Perfecto?",
    lead: "Un cubo perfecto (o número cúbico) es un entero obtenido al multiplicar un número entero por sí mismo tres veces: n = k³ = k × k × k.",
    p1: "Por ejemplo, 27 es un cubo perfecto porque 3 × 3 × 3 = 27. Igualmente, 125 es un cubo perfecto porque 5 × 5 × 5 = 125. En cambio, 50 no lo es porque su raíz cúbica es 3.684 aproximadamente.",
    p2: "El término proviene de la geometría 3D: con 27 bloques unitarios puedes formar un cubo sólido perfecto de 3×3×3. Con 50 bloques nunca podrás armar un cubo completo.",
    cards: [
      { title: "¡Existen cubos negativos!", text: "Las raíces impares conservan el signo: (-3)³ = -27. Por lo tanto, los números negativos pueden ser legítimos cubos perfectos reales." },
      { title: "Cero y Uno", text: "0 y 1 son cubos perfectos básicos: 0³ = 0 y 1³ = 1. Menos uno también lo es: (-1)³ = -1." },
      { title: "Consistencia de paridad", text: "El cubo de un número par siempre es par (2³=8, 4³=64) y el de un impar siempre es impar (3³=27, 5³=125)." },
      { title: "Regla de exponentes primos", text: "En su descomposición prima, todos los exponentes deben ser múltiplos exactos de 3." }
    ]
  },
  s2: {
    eyebrow: "Guía de Uso",
    title: "Cómo usar la Calculadora de Cubos Perfectos",
    intro: "Comprueba cualquier número en milisegundos siguiendo estos 3 pasos:",
    steps: [
      { title: "Introduce un número entero", text: "Escribe un entero positivo o negativo, o pulsa un botón rápido (-27, 216, 1331...)." },
      { title: "Pulsa 'Comprobar'", text: "Haz clic en comprobar o presiona Enter para calcular al instante la raíz y divisibilidad." },
      { title: "Revisa la demostración", text: "Examina el veredicto, factores primos, cubos delimitadores y el multiplicador necesario." }
    ]
  },
  s3: {
    eyebrow: "Demostraciones",
    title: "4 Pruebas para Verificar un Cubo Perfecto",
    intro: "Los matemáticos aplican cuatro criterios fundamentales para verificar cubos perfectos:",
    tests: [
      { title: "Prueba 1: Raíz Cúbica Entera", subtitle: "Cálculo directo", text: "Halla ∛n. Si el resultado no tiene decimales, n es un cubo perfecto.", example: "∛343 = 7.0000000 → Entero 7 confirmado." },
      { title: "Prueba 2: Factorización Prima", subtitle: "Exponentes múltiplos de 3", text: "Descompón en primos. Si cada exponente divide entre 3, es un cubo perfecto.", example: "216 = 2³ × 3³ → ¡Cubo perfecto!" },
      { title: "Prueba 3: Simetría Negativa", subtitle: "Potencias impares", text: "Como (-k)³ = -k³, un número negativo -n es cubo si |n| lo es.", example: "-512 es cubo perfecto porque ∛(-512) = -8." },
      { title: "Prueba 4: Raíz Digital (Módulo 9)", subtitle: "Filtro de eliminación", text: "Suma los dígitos sucesivamente: la raíz digital de un cubo siempre es 0, 1, 8 o 9.", example: "Raíz digital de 1331: 1+3+3+1 = 8 (prueba superada)." }
    ]
  },
  s4: {
    eyebrow: "Tabla de Referencia",
    title: "Tabla de Referencia: Primeros 30 Cubos Perfectos (1³ a 30³)",
    desc: "Aprender de memoria los primeros cubos agiliza el cálculo mental:",
    colN: "n",
    colCube: "Cubo (n³)",
    colRoot: "Raíz (∛n³)",
    colParity: "Paridad"
  },
  s5: {
    eyebrow: "Intervalos",
    title: "Encontrar el Cubo Perfecto Más Cercano",
    p1: "Cualquier no-cubo se encuentra entre dos cubos consecutivos: k³ < n < (k + 1)³.",
    p2: "Por ejemplo, para 500 los cubos vecinos son 343 (7³) y 512 (8³). Como la distancia a 512 es solo 12, 512 es el más cercano."
  },
  s6: {
    eyebrow: "Técnica Algebraica",
    title: "Cómo Convertir Cualquier Número en Cubo Perfecto",
    p1: "Multiplica o divide por los factores primos necesarios para completar múltiplos de 3:",
    multTitle: "1. Por Multiplicación",
    multText: "Multiplica por las potencias faltantes para alcanzar el siguiente múltiplo de 3.",
    divTitle: "2. Por División",
    divText: "Divide entre los factores sobrantes para dejar solo ternas exactas."
  },
  s7: {
    eyebrow: "Comparativa",
    title: "Cuadrados Perfectos vs. Cubos Perfectos",
    p1: "Comparación entre potencias 2D (cuadrados) y 3D (cubos):",
    table: {
      propCol: "Propiedad",
      squareCol: "Cuadrado Perfecto (k²)",
      cubeCol: "Cubo Perfecto (k³)",
      rows: [
        { prop: "Geometría", square: "Área 2D de un cuadrado plano", cube: "Volumen 3D de un cubo sólido" },
        { prop: "Números negativos", square: "No reales (raíz compleja ±bi)", cube: "Reales válidos: (-k)³ = -k³" },
        { prop: "Exponentes primos", square: "Múltiplos de 2 (pares)", cube: "Múltiplos de 3" },
        { prop: "Último dígito", square: "Solo 0, 1, 4, 5, 6, 9", cube: "Cualquier dígito del 0 al 9" },
        { prop: "Ambos a la vez", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    }
  },
  s8: {
    eyebrow: "Aplicaciones",
    title: "Aplicaciones Reales de los Cubos Perfectos",
    apps: [
      { title: "Volumen y Logística", text: "Dimensiones de cajas, depósitos y empaques en transporte y almacenamiento." },
      { title: "Física y Biomecánica", text: "Ley cuadrático-cúbica que relaciona superficie y masa en seres vivos y aviación." },
      { title: "Gráficos 3D y Vóxeles", text: "Modelado tridimensional en cuadrículas de vóxeles (estilo Minecraft)." },
      { title: "Criptografía", text: "Curvas elípticas y teoría analítica de números en seguridad informática." }
    ]
  },
  s9: {
    eyebrow: "Preguntas Frecuentes",
    title: "Preguntas Frecuentes (FAQ)"
  },
  s10: {
    eyebrow: "Resumen",
    title: "Resumen Rápido",
    cards: [
      { title: "Tres Factores Idénticos", text: "Cumple la fórmula n = k × k × k con k entero." },
      { title: "Admite Negativos", text: "A diferencia de las raíces cuadradas, los cubos de negativos son reales." },
      { title: "Exponentes en 3", text: "Cada factor primo debe tener un exponente divisible entre 3." },
      { title: "100% Gratuito", text: "Comprueba números ilimitados con pasos y análisis al instante." }
    ]
  },
  faqs: [
    { question: "¿Qué es un cubo perfecto en palabras sencillas?", answer: "Es un número entero que resulta de multiplicar un número por sí mismo tres veces. Por ejemplo, 27 es un cubo perfecto porque 3 × 3 × 3 = 27." },
    { question: "¿Puede un número negativo ser un cubo perfecto?", answer: "¡Sí! El producto de tres negativos es negativo: (-4) × (-4) × (-4) = -64. Por tanto, -64 es un cubo perfecto con raíz -4." },
    { question: "¿El 0 es un cubo perfecto?", answer: "Sí, 0 es un cubo perfecto porque 0 × 0 × 0 = 0 (0³ = 0)." },
    { question: "¿Puede un número ser cuadrado y cubo a la vez?", answer: "Sí, números cuyos exponentes primos son múltiplos de 6: 1, 64 (8² y 4³), 729 (27² y 9³) y 4096 (64² y 16³)." },
    { question: "¿Es gratis esta calculadora?", answer: "Sí, nuestra calculadora de cubos perfectos es 100% gratuita con comprobaciones ilimitadas y demostraciones completas." }
  ]
};

// Generic factory helper for other languages to ensure full 18-language availability with clean localized headings
function buildCubeContent(
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
  colN: string,
  colCube: string,
  colRoot: string,
  colParity: string
): CubeContent {
  const bp = getCubeBoilerplate(lang);
  return {
    heroPills: pills,
    tocTitle,
    toc: [
      { title: s1Title, href: "#section-what-is-perfect-cube" },
      { title: s2Title, href: "#section-how-to-use" },
      {
        title: s3Title,
        href: "#section-four-tests",
        subitems: [
          { title: bp.s3Tests[0].title, href: "#test-root" },
          { title: bp.s3Tests[1].title, href: "#test-factors" },
          { title: bp.s3Tests[2].title, href: "#test-negatives" },
          { title: bp.s3Tests[3].title, href: "#test-digital-root" }
        ]
      },
      { title: s4Title, href: "#section-first-30-cubes" },
      { title: s5Title, href: "#section-nearest-cube" },
      { title: s6Title, href: "#section-make-cube" },
      { title: s7Title, href: "#section-squares-vs-cubes" },
      { title: s8Title, href: "#section-applications" },
      { title: s9Title, href: "#section-faqs" },
      { title: s10Title, href: "#section-recap" }
    ],
    s1: {
      eyebrow: s1Title,
      title: s1Title,
      lead: bp.s1Lead,
      p1: bp.s1P1,
      p2: bp.s1P2,
      cards: bp.s1Cards
    },
    s2: {
      eyebrow: s2Title,
      title: s2Title,
      intro: bp.s2Intro,
      steps: bp.s2Steps
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
      desc: bp.s4Desc,
      colN,
      colCube,
      colRoot,
      colParity
    },
    s5: {
      eyebrow: s5Title,
      title: s5Title,
      p1: bp.s5P1,
      p2: bp.s5P2
    },
    s6: {
      eyebrow: s6Title,
      title: s6Title,
      p1: bp.s6P1,
      multTitle: bp.s6MultTitle,
      multText: bp.s6MultText,
      divTitle: bp.s6DivTitle,
      divText: bp.s6DivText
    },
    s7: {
      eyebrow: s7Title,
      title: s7Title,
      p1: bp.s7P1,
      table: bp.s7Table
    },
    s8: {
      eyebrow: s8Title,
      title: s8Title,
      apps: bp.s8Apps
    },
    s9: {
      eyebrow: s9Title,
      title: s9Title
    },
    s10: {
      eyebrow: s10Title,
      title: s10Title,
      cards: bp.s10Cards
    },
    faqs: bp.faqs
  };
}

const de: CubeContent = buildCubeContent(
  'de',
  ["Sofortiger Beweis", "Eingrenzende Kubikzahlen", "Primfaktoren", "100% Kostenlos"],
  "Inhaltsverzeichnis",
  "Was ist eine Kubikzahl (Perfekter Kubus)?",
  "So verwenden Sie den Kubikzahl-Rechner",
  "4 bewährte Tests zur Überprüfung von Kubikzahlen",
  "Referenztabelle: Die ersten 30 Kubikzahlen (1³ bis 30³)",
  "Die nächste Kubikzahl finden",
  "Wie man jede Zahl in eine Kubikzahl umwandelt",
  "Quadratzahlen vs. Kubikzahlen",
  "Praktische Anwendungen von Kubikzahlen",
  "Häufig gestellte Fragen (FAQ)",
  "Kurze Zusammenfassung",
  "n", "Kubikzahl (n³)", "Wurzel (∛n³)", "Parität"
);

const it: CubeContent = buildCubeContent(
  'it',
  ["Dimostrazione Istantanea", "Cubi Delimitatori", "Fattori Primi", "100% Gratuito"],
  "Indice dei Contenuti",
  "Cos'è un Cubo Perfetto?",
  "Come Usare il Calcolatore di Cubi Perfetti",
  "4 Test per Verificare Qualsiasi Cubo Perfetto",
  "Tabella di Riferimento: I Primi 30 Cubi Perfetti",
  "Trovare il Cubo Perfetto Più Vicino",
  "Come Trasformare un Numero in un Cubo Perfetto",
  "Quadrati Perfetti vs. Cubi Perfetti",
  "Applicazioni nel Mondo Reale",
  "Domande Frequenti (FAQ)",
  "Riepilogo Rapido",
  "n", "Cubo (n³)", "Radice (∛n³)", "Parità"
);

const pt: CubeContent = buildCubeContent(
  'pt',
  ["Prova Instantânea", "Cubos Delimitadores", "Fatores Primos", "100% Grátis"],
  "Índice de Conteúdos",
  "O que é um Cubo Perfeito?",
  "Como Usar a Calculadora de Cubo Perfeito",
  "4 Testes Comprovados para Verificar um Cubo",
  "Tabela de Referência: Primeiros 30 Cubos Perfeitos",
  "Encontrar o Cubo Perfeito Mais Próximo",
  "Como Transformar Qualquer Número em um Cubo",
  "Quadrados Perfeitos vs. Cubos Perfeitos",
  "Aplicações no Mundo Real",
  "Perguntas Frequentes (FAQ)",
  "Resumo Rápido",
  "n", "Cubo (n³)", "Raiz (∛n³)", "Paridade"
);

const ru: CubeContent = buildCubeContent(
  'ru',
  ["Мгновенное решение", "Ближайшие кубы", "Простые множители", "100% Бесплатно"],
  "Содержание",
  "Что такое точный куб?",
  "Как пользоваться калькулятором кубов",
  "4 способа проверить точный куб",
  "Таблица кубов: Первые 30 кубов чисел",
  "Поиск ближайшего точного куба",
  "Как превратить число в точный куб",
  "Точные квадраты и точные кубы",
  "Практическое применение кубов чисел",
  "Часто задаваемые вопросы (FAQ)",
  "Краткие выводы",
  "n", "Куб (n³)", "Корень (∛n³)", "Четность"
);

const pl: CubeContent = buildCubeContent(
  'pl',
  ["Natychmiastowy dowód", "Graniczne sześciany", "Czynniki pierwsze", "100% Za darmo"],
  "Spis treści",
  "Czym jest sześcian liczby (sześcian doskonały)?",
  "Jak korzystać z kalkulatora sześcianów",
  "4 sprawdzone metody weryfikacji sześcianu",
  "Tabela referencyjna: Pierwsze 30 sześcianów",
  "Znajdowanie najbliższego sześcianu doskonałego",
  "Jak przekształcić liczbę w sześcian doskonały",
  "Kwadraty a sześciany doskonałe",
  "Zastosowania w życiu codziennym",
  "Często zadawane pytania (FAQ)",
  "Podsumowanie",
  "n", "Sześcian (n³)", "Pierwiastek (∛n³)", "Parzystość"
);

const sv: CubeContent = buildCubeContent(
  'sv',
  ["Direkt bevis", "Avgränsande kuber", "Primtalsfaktorer", "100% Gratis"],
  "Innehållsförteckning",
  "Vad är ett perfekt kubiktal?",
  "Hur man använder kubiktalsräknaren",
  "4 bevisade tester för att kontrollera kubiktal",
  "Referenstabell: De första 30 kubiktalen",
  "Hitta närmaste perfekta kubiktal",
  "Hur man omvandlar ett tal till ett kubiktal",
  "Kvadrattal vs. Kubiktal",
  "Praktiska tillämpningar",
  "Vanliga frågor (FAQ)",
  "Snabb sammanfattning",
  "n", "Kub (n³)", "Rot (∛n³)", "Paritet"
);

const tr: CubeContent = buildCubeContent(
  'tr',
  ["Anında Kanıt", "Sınırlayıcı Küpler", "Asal Çarpanlar", "%100 Ücretsiz"],
  "İçindekiler",
  "Tam Küp Sayı Nedir?",
  "Tam Küp Hesaplayıcı Nasıl Kullanılır?",
  "Bir Sayının Tam Küp Olduğunu Anlamanın 4 Yolu",
  "Referans Tablosu: İlk 30 Tam Küp Sayı",
  "En Yakın Tam Küp Sayıyı Bulma",
  "Bir Sayıyı Tam Küpe Dönüştürme",
  "Tam Kare ve Tam Küp Karşılaştırması",
  "Günlük Hayattaki Uygulamalar",
  "Sıkça Sorulan Sorular",
  "Kısa Özet",
  "n", "Küp (n³)", "Kök (∛n³)", "Teklik/Çiftlik"
);

const id: CubeContent = buildCubeContent(
  'id',
  ["Bukti Instan", "Kubus Pembatas", "Faktor Prima", "100% Gratis"],
  "Daftar Isi",
  "Apa itu Bilangan Kubik Sempurna?",
  "Cara Menggunakan Kalkulator Kubik Sempurna",
  "4 Uji Matematika untuk Memeriksa Kubik Sempurna",
  "Tabel Referensi: 30 Bilangan Kubik Pertama",
  "Menemukan Kubik Sempurna Terdekat",
  "Cara Mengubah Angka Menjadi Kubik Sempurna",
  "Kuadrat Sempurna vs. Kubik Sempurna",
  "Aplikasi di Dunia Nyata",
  "Pertanyaan yang Sering Diajukan",
  "Rangkuman Singkat",
  "n", "Kubik (n³)", "Akar (∛n³)", "Paritas"
);

const ms: CubeContent = buildCubeContent(
  'ms',
  ["Bukti Segera", "Kubus Terdekat", "Faktor Perdana", "100% Percuma"],
  "Isi Kandungan",
  "Apakah Kuasa Tiga Sempurna?",
  "Cara Menggunakan Kalkulator Kuasa Tiga Sempurna",
  "4 Ujian untuk Memeriksa Kuasa Tiga Sempurna",
  "Jadual Rujukan: 30 Kuasa Tiga Sempurna Pertama",
  "Mencari Kuasa Tiga Sempurna Terdekat",
  "Cara Menjadikan Nombor Sebagai Kuasa Tiga Sempurna",
  "Kuasa Dua Sempurna vs. Kuasa Tiga Sempurna",
  "Aplikasi Kehidupan Sebenar",
  "Soalan Lazim",
  "Ringkasan Pantas",
  "n", "Kuasa Tiga (n³)", "Punca (∛n³)", "Pariti"
);

const ar: CubeContent = buildCubeContent(
  'ar',
  ["إثبات فوري", "مكعبات حاصرة", "عوامل أولية", "مجاني 100%"],
  "جدول المحتويات",
  "ما هو المكعب الكامل؟",
  "كيفية استخدام حاسبة المكعب الكامل",
  "4 اختبارات رياضية للتحقق من المكعب الكامل",
  "جدول مرجعي: أول 30 مكعباً كاملاً",
  "إيجاد أقرب مكعب كامل",
  "كيف تجعل أي رقم مكعباً كاملاً",
  "المربعات الكاملة مقابل المكعبات الكاملة",
  "تطبيقات عملية في الحياة اليومية",
  "الأسئلة الشائعة",
  "ملخص سريع",
  "العدد (n)", "المكعب (n³)", "الجذر (∛n³)", "الزوجية/الفردية"
);

const hi: CubeContent = buildCubeContent(
  'hi',
  ["तुरंत प्रमाण", "निकटतम पूर्ण घन", "अभाज्य गुणनखंड", "100% निःशुल्क"],
  "विषय सूची",
  "पूर्ण घन संख्या (Perfect Cube) क्या है?",
  "पूर्ण घन कैलकुलेटर का उपयोग कैसे करें",
  "पूर्ण घन की जाँच करने की 4 प्रमाणित विधियाँ",
  "संदर्भ तालिका: पहले 30 पूर्ण घन",
  "निकटतम पूर्ण घन संख्या ज्ञात करना",
  "किसी भी संख्या को पूर्ण घन कैसे बनाएं",
  "पूर्ण वर्ग बनाम पूर्ण घन",
  "वास्तविक जीवन में अनुप्रयोग",
  "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
  "त्वरित सारांश",
  "संख्या (n)", "घन (n³)", "घनमूल (∛n³)", "सम/विषम"
);

const bn: CubeContent = buildCubeContent(
  'bn',
  ["তাৎক্ষণিক প্রমাণ", "নিকটবর্তী পূর্ণ ঘন", "মৌলিক উৎপাদক", "১০০% বিনামূল্যে"],
  "সূচিপত্র",
  "পূর্ণ ঘন সংখ্যা (Perfect Cube) কী?",
  "পূর্ণ ঘন ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
  "পূর্ণ ঘন যাচাই করার ৪টি প্রমাণিত পদ্ধতি",
  "রেফারেন্স তালিকা: প্রথম ৩০টি পূর্ণ ঘন সংখ্যা",
  "নিকটতম পূর্ণ ঘন সংখ্যা নির্ণয়",
  "যেকোনো সংখ্যাকে কীভাবে পূর্ণ ঘন করবেন",
  "পূর্ণ বর্গ বনাম পূর্ণ ঘন",
  "বাস্তব জীবনের প্রয়োগ",
  "সাধারণ জিজ্ঞাসা (FAQ)",
  "সংক্ষিপ্ত সারসংক্ষেপ",
  "সংখ্যা (n)", "ঘন (n³)", "ঘনমূল (∛n³)", "জোড়/বিজোড়"
);

const ja: CubeContent = buildCubeContent(
  'ja',
  ["即時証明", "近似立方数", "素因数指数", "100% 無料"],
  "目次",
  "完全立方数（立方数）とは？",
  "完全立方数計算ツールの使い方",
  "完全立方数を判定する4つの数学的テスト",
  "早見表：1から30までの立方数",
  "最も近い完全立方数を探す",
  "任意の数を完全立方数にする方法",
  "平方数と立方数の違い",
  "日常生活と科学での応用例",
  "よくある質問（FAQ）",
  "まとめ",
  "n", "立方数 (n³)", "立方根 (∛n³)", "偶数/奇数"
);

const ko: CubeContent = buildCubeContent(
  'ko',
  ["즉각 증명", "인접 세제곱수", "소인수 거듭제곱", "100% 무료"],
  "목차",
  "완전세제곱수(세제곱수)란 무엇인가요?",
  "완전세제곱수 계산기 사용 방법",
  "완전세제곱수를 판별하는 4가지 수학적 검증법",
  "참고 표: 1부터 30까지의 세제곱수 목록",
  "가장 가까운 완전세제곱수 찾기",
  "어떤 수든 완전세제곱수로 만드는 방법",
  "완전제곱수 vs 완전세제곱수 비교",
  "실생활 및 산업 응용 분야",
  "자주 묻는 질문 (FAQ)",
  "핵심 요약",
  "n", "세제곱수 (n³)", "세제곱근 (∛n³)", "홀짝성"
);

const bg: CubeContent = buildCubeContent(
  'bg',
  ["Моментално доказателство", "Ограничаващи кубове", "Прости множители", "100% Безплатно"],
  "Съдържание",
  "Какво е точен куб?",
  "Как се използва калкулаторът за точен куб",
  "4 доказани теста за проверка на точен куб",
  "Справочна таблица: Първите 30 точни куба",
  "Намиране на най-близкия точен куб",
  "Как да превърнем всяко число в точен куб",
  "Точни квадрати срещу точни кубове",
  "Практически приложения",
  "Често задавани въпроси (FAQ)",
  "Бързо обобщение",
  "n", "Куб (n³)", "Корен (∛n³)", "Четност"
);

const CUBE_CONTENT_MAP: Record<string, CubeContent> = {
  en, fr, es, de, it, pt, ru, pl, sv, tr, id, ms, ar, hi, bn, ja, ko, bg
};

export function getCubeContent(locale: string): CubeContent {
  return CUBE_CONTENT_MAP[locale] || CUBE_CONTENT_MAP.en;
}
