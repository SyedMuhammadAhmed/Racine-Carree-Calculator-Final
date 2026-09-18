// Full localized educational copy and boilerplate text for Racine Carrée (Square Root) Homepage across all 18 languages

export interface HomeBoilerplate {
  s1Eyebrow: string;
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s1P3: string;
  s1Cards: Array<{ expr: string; reason: string }>;
  s1Caption: string;

  s2Eyebrow: string;
  s2Title: string;
  s2Intro: string;
  s2Steps: Array<{ title: string; text: string }>;
  s2Conclusion: string;

  s3Eyebrow: string;
  s3Title: string;
  s3Intro: string;
  s3Cards: Array<{ expr: string; reason: string }>;
  s3P1: string;
  s3P2: string;
  s3P3: string;
  s3Caption: string;

  s4Eyebrow: string;
  s4Title: string;
  s4Intro: string;
  s4P1: string;

  s5Eyebrow: string;
  s5Title: string;
  s5Intro: string;
  s5Laws: Array<{
    name: string;
    subtitle: string;
    example: string;
    explanation: string;
  }>;

  s6Eyebrow: string;
  s6Title: string;
  s6Intro: string;
  s6M1Title: string;
  s6M1Text: string;
  s6M2Title: string;
  s6M2Intro: string;
  s6M2ExTitle: string;
  s6M2Steps: Array<string>;
  s6M3Title: string;
  s6M3Text: string;
  s6M4Title: string;
  s6M4Intro: string;
  s6M4ExTitle: string;
  s6M4Steps: Array<string>;

  s7Eyebrow: string;
  s7Title: string;
  s7Intro: string;
  s7ThNumber: string;
  s7ThRoot: string;
  s7ThWhy: string;
  s7Row4: string;
  s7Row25: string;
  s7Row64: string;
  s7Row2: string;
  s7Conclusion: string;

  s8Eyebrow: string;
  s8Title: string;
  s8P1: string;
  s8P2: string;
  s8P3: string;
  s8ExTitle: string;
  s8ExStep: string;
  s8Conclusion: string;

  s9Eyebrow: string;
  s9Title: string;
  s9Intro: string;
  s9ThSquare: string;
  s9ThCube: string;
  s9RowSymbol: string;
  s9RowMult: string;
  s9RowMultSquare: string;
  s9RowMultCube: string;
  s9RowEx: string;

  s10Eyebrow: string;
  s10Title: string;
  s10Intro: string;
  s10Apps: Array<{ title: string; text: string }>;

  s11Eyebrow: string;
  s11Title: string;
  s11Intro: string;
  s11ThExpr: string;
  s11ThForm: string;
  s11ThWhy: string;
  s11Conclusion: string;

  s12Eyebrow: string;
  s12Title: string;
  s12Intro: string;
  s12ChartLinkText: string;
  s12ScrollHint: string;
  s12ColNumber: string;
  s12ColRoot: string;
  s12ColType: string;
  s12BadgePerfect: string;
  s12BadgeIrrational: string;

  s13Eyebrow: string;
  s13Title: string;
  s13Intro: string;
  s13Conclusion: string;
  s13Caption: string;

  s14Eyebrow: string;
  s14Title: string;

  s15Eyebrow: string;
  s15Title: string;
  s15BoxTitle: string;
  s15BoxText: string;

  quickCalcLabel: string;
  quickCalcSublabel: string;
}

export const HOME_BOILERPLATE: Record<string, HomeBoilerplate> = {
  en: {
    s1Eyebrow: "Complete Guide",
    s1Title: "What Is Racine Carrée (Square Root)?",
    s1P1: "Racine carrée is the French word for square root, and it's the term thousands of people type into Google every month — even when they're searching in English. If that's how you found this page, you're in the right place. Our racine carree calculator above gives you the answer in one click, and everything below explains what a square root actually is, how to work one out by hand, and why this little math operation shows up everywhere from geometry class to engineering.",
    s1P2: "A square root is a number that, when multiplied by itself, gives you another number. Here's the simplest way to picture it: if you multiply 5 by itself (5 × 5), you get 25. So we say the square root of 25 is 5. This same principle extends to higher-degree roots — for example, you can calculate cube roots (racine cubique) by multiplying a number three times, explore cube roots of negative numbers, or solve higher-degree radical roots (ⁿ√x) for any custom index.",
    s1P3: "In French, \"racine carrée\" means exactly this — square root. So when someone searches \"racine carree calculator,\" they're looking for the same tool as someone who searches \"square root calculator.\" Same math, different language.",
    s1Cards: [
      { expr: "√9 = 3", reason: "because 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "because 4 × 4 = 16" },
      { expr: "√100 = 10", reason: "because 10 × 10 = 100" }
    ],
    s1Caption: "Visualizing a square root: Finding the side length of a square from its area",

    s2Eyebrow: "How To Use",
    s2Title: "How to Use the Racine Carree Calculator",
    s2Intro: "Getting your answer takes three steps:",
    s2Steps: [
      { title: "Type Your Number", text: "Type your number into the input box above." },
      { title: "Click Calculate", text: "Hit the Calculate button to process your number." },
      { title: "Read Your Result", text: "The calculator shows the square root instantly, plus a simplified form when one exists." }
    ],
    s2Conclusion: "That's the whole process. You don't need to know any formulas to use the tool — it does the work for you. The rest of this page is here for anyone who wants to actually understand how the answer is found, not just get the number.",

    s3Eyebrow: "Notation",
    s3Title: "Square Root Notation: What Does the √ Symbol Mean?",
    s3Intro: "The symbol √ is called the radical sign, and it's how we write \"square root\" in math.",
    s3Cards: [
      { expr: "√9", reason: "\"the square root of 9\"" },
      { expr: "9 = radicand", reason: "The number under the symbol" },
      { expr: "3 = root", reason: "The answer you get" }
    ],
    s3P1: "So when you see √49 = 7, you're reading: \"the square root of 49 equals 7.\"",
    s3P2: "You'll sometimes also see a square root written as a fraction power:",
    s3P3: "Both mean the exact same thing. Calculators and computer programs often use the exponent form because it's easier to type.",
    s3Caption: "The anatomy of a square root expression and its mathematical terms",

    s4Eyebrow: "Formula",
    s4Title: "What Is the Formula for Square Root?",
    s4Intro: "There isn't one single formula that spits out a square root the way there is for, say, the area of a circle. Instead, a square root is defined by this relationship:",
    s4P1: "In plain words: whatever number you get as the square root, multiplying it by itself has to bring you back to your original number. That relationship is what every method of calculating a square root — by hand, on a calculator, or with a computer — is built around.",

    s5Eyebrow: "Core Laws",
    s5Title: "The Five Core Laws of Square Roots",
    s5Intro: "Once you know the basics, these five rules make working with square roots much faster. They also apply to 3rd-degree cubic radicals and higher-order radical index laws with slight modifications — master them here and you'll recognize the pattern everywhere.",
    s5Laws: [
      {
        name: "Product Rule",
        subtitle: "Split products inside radicals",
        example: "Example: √4 × √9 = 2 × 3 = 6, and √(4×9) = √36 = 6. Same answer either way.",
        explanation: "The product rule lets you break a complicated square root into simpler pieces. Instead of finding √36 directly, you can split 36 into 4 × 9, take each root separately, and multiply the results. This is the foundation of simplifying radicals — whenever you see a number under the radical sign, look for perfect square factors you can pull out. It's how our calculator simplifies expressions like √72 into 6√2."
      },
      {
        name: "Quotient Rule",
        subtitle: "Split quotients inside radicals",
        example: "Example: √16 ÷ √4 = 4 ÷ 2 = 2, and √(16÷4) = √4 = 2.",
        explanation: "The quotient rule is the product rule's mirror image — it lets you take the square root of a fraction by rooting the top and bottom separately. This is particularly useful in algebra when you need to simplify expressions like √(50/2). Instead of dividing first, you can write √50 ÷ √2, simplify √50 to 5√2, and then cancel √2 to get 5."
      },
      {
        name: "Power Rule",
        subtitle: "Squaring and square root cancel each other",
        example: "Example: √(7²) = √49 = 7. The square and the square root undo each other.",
        explanation: "This is the most intuitive law: squaring a number and then taking its square root brings you right back to where you started. Think of them as mathematical inverses — one builds a square, the other finds the side length. This relationship is why the racine carrée calculator can \"reverse\" any squaring operation. Note that for negative inputs, √(a²) gives |a| (the absolute value), because a square root always returns the non-negative result."
      },
      {
        name: "Self-Multiplication Rule",
        subtitle: "A root times itself equals the radicand",
        example: "Example: √7 × √7 = 7. √13 × √13 = 13. It always works.",
        explanation: "This rule is really just the definition of a square root stated in reverse: if √a is \"the number that multiplied by itself gives a,\" then multiplying √a by √a must give you a. It's especially handy for rationalizing denominators — when you have 1/√5, you multiply top and bottom by √5 to get √5/5, eliminating the radical from the denominator. You'll see this trick constantly in algebra and precalculus."
      },
      {
        name: "Identity Values",
        subtitle: "The square roots of 0 and 1 never change",
        example: "Example: No matter what context — algebra, physics, finance — √1 is always 1 and √0 is always 0.",
        explanation: "These are the two \"fixed point\" values for the square root function. √1 = 1 because 1 × 1 = 1, and √0 = 0 because 0 × 0 = 0. While they look trivial, they're important in proofs and as boundary conditions. For instance, when checking whether a formula works at its extremes, plugging in 0 or 1 should always give a sensible answer — and these identities guarantee that it does."
      }
    ],

    s6Eyebrow: "Methods",
    s6Title: "How to Calculate Racine Carrée — Different Methods",
    s6Intro: "There's more than one way to find a square root. Here are the four you're most likely to see in school or at work.",
    s6M1Title: "1. Using This Racine Carrée Calculator (Fastest)",
    s6M1Text: "Type the number in, click calculate, done. This is the method almost everyone reaches for once they know it, especially with decimals or large numbers. You can also use our dedicated cube root simplifier for third-degree roots or the custom index nth root solver for 4th, 5th, and higher powers.",
    s6M2Title: "2. Prime Factorization Method (Best for Perfect Squares)",
    s6M2Intro: "This method works by breaking a number down into its prime factors and pairing them up.",
    s6M2ExTitle: "Example: Find √144",
    s6M2Steps: [
      "Step 1 — Break 144 into prime factors: 144 = 2 × 2 × 2 × 2 × 3 × 3",
      "Step 2 — Pair up the matching factors: (2 × 2) × (2 × 2) × (3 × 3)",
      "Step 3 — Take one number from each pair: 2 × 2 × 3 = 12",
      "So √144 = 12."
    ],
    s6M3Title: "3. Long Division Method (Best for Decimals and Large Numbers)",
    s6M3Text: "This is the pencil-and-paper method taught in most math classes for numbers that aren't perfect squares. It's a step-by-step process similar to regular long division, and it gives you a decimal answer to as many places as you want.",
    s6M4Title: "4. Estimation Method (Fastest by Hand, No Tools)",
    s6M4Intro: "If you just need a rough answer, find the two perfect squares your number sits between.",
    s6M4ExTitle: "Example: Estimate √20",
    s6M4Steps: [
      "4² = 16",
      "5² = 25",
      "Since 20 is between 16 and 25, √20 is between 4 and 5 — closer to 4.5.",
      "The real answer is about 4.47, so this quick trick gets you very close."
    ],

    s7Eyebrow: "Positive Numbers",
    s7Title: "Square Roots of Positive Numbers",
    s7Intro: "Every positive number has a square root, and it's always positive (this is called the principal root, which is what our calculator shows).",
    s7ThNumber: "Number",
    s7ThRoot: "Square Root",
    s7ThWhy: "Why",
    s7Row4: "2 × 2 = 4",
    s7Row25: "5 × 5 = 25",
    s7Row64: "8 × 8 = 64",
    s7Row2: "Not a whole number, but still a real, positive answer",
    s7Conclusion: "Note that technically, every positive number has two square roots — a positive one and a negative one (for example, both 5 and -5 give you 25 when squared). But by convention, when we write √25, we mean the positive root, 5. That's what \"principal root\" means.",

    s8Eyebrow: "Imaginary Numbers",
    s8Title: "Square Roots of Negative Numbers and the Imaginary Unit",
    s8P1: "You can't take the square root of a negative number and get a regular (real) number back. Why? Because multiplying any positive number by itself gives a positive result, and multiplying any negative number by itself also gives a positive result (a negative times a negative is positive).",
    s8P2: "To handle this, mathematicians created the imaginary unit, written as i, where:",
    s8P3: "Using this, we can express the square root of any negative number.",
    s8ExTitle: "Example: √(−81)",
    s8ExStep: "√(−81) = √81 × √(−1) = 9 × i = 9i",
    s8Conclusion: "So the square root of −81 is written as 9i — not a \"real\" number in the everyday sense, but a valid mathematical answer that's used constantly in advanced math, physics, and electrical engineering.",

    s9Eyebrow: "Comparison",
    s9Title: "Difference Between Racine Carrée and Racine Cubique",
    s9Intro: "These two terms get mixed up a lot. Racine carrée (square root) asks: what number multiplied by itself gives me this value? Racine cubique (cube root) asks: what number multiplied by itself three times gives me this value?",
    s9ThSquare: "Square Root",
    s9ThCube: "Cube Root",
    s9RowSymbol: "Symbol",
    s9RowMult: "Multiplications",
    s9RowMultSquare: "2 (x × x)",
    s9RowMultCube: "3 (x × x × x)",
    s9RowEx: "Example",

    s10Eyebrow: "Applications",
    s10Title: "Real-Life Applications of Racine Carrée",
    s10Intro: "Square roots are foundational in modern life. Here are five areas where understanding them gives you a real advantage:",
    s10Apps: [
      {
        title: "Construction & Architecture",
        text: "Used in the Pythagorean theorem (√(a² + b²)) to check if corners are perfectly square and to measure structural rafters."
      },
      {
        title: "Finance & Investing",
        text: "Standard deviation—the key metric for measuring portfolio risk—is the square root of variance."
      },
      {
        title: "Physics & Engineering",
        text: "Found in critical formulas for velocity, kinetic energy, and wave speed across all STEM disciplines."
      },
      {
        title: "Computer Science",
        text: "Essential for calculating Euclidean distances in game physics, machine learning, and image processing."
      },
      {
        title: "Everyday Measuring",
        text: "Used to find side lengths when you already know the area of a square lot, carpet, or garden patch."
      }
    ],

    s11Eyebrow: "Simplification",
    s11Title: "Square Root Simplification Table",
    s11Intro: "Not every square root is a perfect square, but many can still be simplified into a smaller, cleaner form by pulling out any perfect-square factors.",
    s11ThExpr: "Expression",
    s11ThForm: "Simplified Form",
    s11ThWhy: "Why",
    s11Conclusion: "The trick is always the same: look for the largest perfect square that divides evenly into your number, pull it out, and the rest stays under the radical sign.",

    s12Eyebrow: "Reference Tables",
    s12Title: "Complete Reference Table — Square Roots 1 to 100",
    s12Intro: "Bookmark this section for quick lookups. Perfect squares are highlighted in bold. Values are rounded to three decimal places. To compare 3D powers, explore our perfect cubes reference chart (1 to 1,000), or check the higher powers & roots table (4th, 5th, and 10th roots).",
    s12ChartLinkText: "Need a custom range or a printable version? Try our Square Root Chart Generator.",
    s12ScrollHint: "Scroll to see all 100 values ↓",
    s12ColNumber: "Number (n)",
    s12ColRoot: "Square Root (√n)",
    s12ColType: "Type",
    s12BadgePerfect: "Perfect Square",
    s12BadgeIrrational: "Irrational",

    s13Eyebrow: "Perfect Squares",
    s13Title: "Perfect Squares — The Essential Memorization List",
    s13Intro: "A perfect square is a number you get by multiplying a whole number by itself. Knowing these by heart makes square roots — and a lot of algebra — much faster.",
    s13Conclusion: "If you can recognize these on sight, spotting perfect squares (and simplifying square roots) becomes second nature. Want to check a specific number? Try our Perfect Square Calculator.",
    s13Caption: "Perfect squares: Whole numbers multiplied by themselves",

    s14Eyebrow: "FAQs",
    s14Title: "Frequently Asked Questions",

    s15Eyebrow: "Summary",
    s15Title: "A Quick Recap",
    s15BoxTitle: "The Bottom Line",
    s15BoxText: "A square root answers one simple question: what number, multiplied by itself, gives you this value? Once that idea clicks, everything else on this page — the notation, the rules, the manual methods, even the imaginary numbers — is just building on that one concept. Use the calculator above whenever you need a fast, accurate answer, and come back to this guide anytime you want to double-check your understanding or work a problem out by hand.",

    quickCalcLabel: "Instant Calculate",
    quickCalcSublabel: "Click any number for an instant result"
  },

  fr: {
    s1Eyebrow: "Guide Complet",
    s1Title: "Qu'est-ce que la Racine Carrée ?",
    s1P1: "La racine carrée est l'une des opérations mathématiques les plus fondamentales. Si vous cherchez à comprendre ce qu'est une racine carrée ou à en calculer une instantanément, notre calculateur ci-dessus vous donne la réponse en un clic. Cette page vous explique en détail la définition mathématique, les méthodes manuelles et les applications pratiques.",
    s1P2: "Une racine carrée est un nombre qui, multiplié par lui-même, donne le nombre de départ. Par exemple, si l'on multiplie 5 par lui-même (5 × 5), on obtient 25. La racine carrée de 25 est donc 5. Ce principe s'étend aussi aux racines cubiques (multiplier 3 fois) et aux racines n-ièmes de n'importe quel degré.",
    s1P3: "En français comme dans toutes les langues, la racine carrée est la base de l'algèbre et de la géométrie. Que vous cherchiez « racine carrée » ou « square root », le concept mathématique reste rigoureusement identique.",
    s1Cards: [
      { expr: "√9 = 3", reason: "car 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "car 4 × 4 = 16" },
      { expr: "√100 = 10", reason: "car 10 × 10 = 100" }
    ],
    s1Caption: "Visualisation d'une racine carrée : trouver le côté d'un carré à partir de son aire",

    s2Eyebrow: "Mode d'Emploi",
    s2Title: "Comment Utiliser le Calculateur Racine Carrée",
    s2Intro: "Obtenez votre résultat en seulement trois étapes simples :",
    s2Steps: [
      { title: "Entrez Votre Nombre", text: "Tapez votre nombre dans le champ de saisie ci-dessus." },
      { title: "Cliquez sur Calculer", text: "Appuyez sur le bouton Calculer pour lancer le traitement." },
      { title: "Lisez Votre Résultat", text: "Le calculateur affiche instantanément la racine carrée exacte et simplifiée." }
    ],
    s2Conclusion: "C'est aussi simple que cela. Aucune formule compliquée n'est requise : l'outil effectue tous les calculs automatiquement pour vous.",

    s3Eyebrow: "Notation",
    s3Title: "Notation : Que Signifie le Symbole √ ?",
    s3Intro: "Le symbole √ s'appelle le radical. C'est ainsi que l'on écrit la racine carrée en mathématiques.",
    s3Cards: [
      { expr: "√9", reason: "« la racine carrée de 9 »" },
      { expr: "9 = radicande", reason: "Le nombre sous le radical" },
      { expr: "3 = racine", reason: "Le résultat obtenu" }
    ],
    s3P1: "Lorsque vous écrivez √49 = 7, vous énoncez que la racine carrée de 49 est égale à 7.",
    s3P2: "On peut également exprimer une racine carrée sous forme de puissance fractionnaire :",
    s3P3: "Les deux notations sont équivalentes. Les calculatrices et langages de programmation utilisent fréquemment la forme exponentielle x^(1/2).",
    s3Caption: "Anatomie d'une expression sous radical et son vocabulaire mathématique",

    s4Eyebrow: "Formule",
    s4Title: "Quelle Est la Formule de la Racine Carrée ?",
    s4Intro: "Il n'existe pas une formule unique produisant une racine comme pour l'aire d'un disque. Une racine carrée est définie par cette relation fondamentale :",
    s4P1: "En termes simples : quel que soit le nombre obtenu comme racine carrée, le multiplier par lui-même doit restituer exactement le nombre initial.",

    s5Eyebrow: "Lois Fondamentales",
    s5Title: "Les Cinq Règles Essentielles des Racines Carrées",
    s5Intro: "Ces règles vous permettent de simplifier et de manipuler les radicaux rapidement et sans erreur :",
    s5Laws: [
      {
        name: "Règle du Produit",
        subtitle: "Séparer les facteurs sous le radical",
        example: "Exemple : √4 × √9 = 2 × 3 = 6, et √(4×9) = √36 = 6.",
        explanation: "La règle du produit permet de décomposer une racine complexe en facteurs plus simples pour simplifier les expressions."
      },
      {
        name: "Règle du Quotient",
        subtitle: "Séparer le numérateur et le dénominateur",
        example: "Exemple : √16 ÷ √4 = 4 ÷ 2 = 2, et √(16÷4) = √4 = 2.",
        explanation: "La règle du quotient permet de calculer séparément la racine du haut et du bas d'une fraction."
      },
      {
        name: "Règle de la Puissance",
        subtitle: "L'élévation au carré et la racine s'annulent",
        example: "Exemple : √(7²) = √49 = 7. L'opération inverse rétablit la valeur.",
        explanation: "Élever un nombre au carré puis prendre sa racine redonne le nombre positif de départ."
      },
      {
        name: "Règle d'Auto-Multiplication",
        subtitle: "Une racine multipliée par elle-même donne le radicande",
        example: "Exemple : √7 × √7 = 7. √13 × √13 = 13.",
        explanation: "C'est la définition même de la racine carrée, indispensable pour rationaliser les fractions."
      },
      {
        name: "Valeurs Remarquables",
        subtitle: "Les racines de 0 et 1 sont invariantes",
        example: "Exemple : √1 = 1 et √0 = 0 dans tous les contextes mathématiques.",
        explanation: "Ce sont les deux points fixes fondamentaux de la fonction racine carrée."
      }
    ],

    s6Eyebrow: "Méthodes",
    s6Title: "Comment Calculer une Racine Carrée — Les Méthodes",
    s6Intro: "Voici les quatre méthodes principales utilisées en classe ou dans la pratique :",
    s6M1Title: "1. Utiliser ce Calculateur (Le Plus Rapide)",
    s6M1Text: "Saisissez le nombre, cliquez sur Calculer et obtenez instantanément la réponse exacte avec la décomposition.",
    s6M2Title: "2. Méthode par Décomposition en Facteurs Premiers",
    s6M2Intro: "Idéale pour les carrés parfaits : décomposez le nombre en facteurs premiers et regroupez-les par paires.",
    s6M2ExTitle: "Exemple : Calculer √144",
    s6M2Steps: [
      "Étape 1 — Décomposition : 144 = 2 × 2 × 2 × 2 × 3 × 3",
      "Étape 2 — Regroupement par paires : (2 × 2) × (2 × 2) × (3 × 3)",
      "Étape 3 — Extraire un facteur par paire : 2 × 2 × 3 = 12",
      "Conclusion : √144 = 12."
    ],
    s6M3Title: "3. Méthode de la Potence (Division Longue)",
    s6M3Text: "Méthode manuelle traditionnelle permettant d'obtenir autant de décimales que souhaité pour les nombres non carrés parfaits.",
    s6M4Title: "4. Méthode par Encadrement et Estimation",
    s6M4Intro: "Pour un calcul mental rapide, encadrez votre nombre entre deux carrés parfaits connus.",
    s6M4ExTitle: "Exemple : Estimer √20",
    s6M4Steps: [
      "4² = 16",
      "5² = 25",
      "Puisque 20 est entre 16 et 25, √20 se situe entre 4 et 5 (environ 4,47)."
    ],

    s7Eyebrow: "Nombres Positifs",
    s7Title: "Racines Carrées des Nombres Positifs",
    s7Intro: "Tout nombre positif admet une racine carrée réelle et positive, appelée racine principale.",
    s7ThNumber: "Nombre",
    s7ThRoot: "Racine Carrée",
    s7ThWhy: "Justification",
    s7Row4: "2 × 2 = 4",
    s7Row25: "5 × 5 = 25",
    s7Row64: "8 × 8 = 64",
    s7Row2: "Nombre irrationnel, mais valeur réelle positive",
    s7Conclusion: "Bien qu'un nombre positif admette deux racines opposées (+5 et -5), le symbole √ désigne conventionnellement la racine positive.",

    s8Eyebrow: "Nombres Négatifs",
    s8Title: "Racines de Nombres Négatifs et Unité Imaginaire",
    s8P1: "Dans les nombres réels, un carré n'est jamais négatif. Il est donc impossible d'extraire la racine réelle d'un nombre négatif.",
    s8P2: "Pour résoudre ce problème, les mathématiciens ont défini l'unité imaginaire i telle que :",
    s8P3: "Grâce à cela, nous pouvons exprimer la racine de n'importe quel nombre négatif.",
    s8ExTitle: "Exemple : √(−81)",
    s8ExStep: "√(−81) = √81 × √(−1) = 9 × i = 9i",
    s8Conclusion: "La racine de −81 s'écrit 9i dans l'ensemble des nombres complexes, outil indispensable en physique et ingénierie.",

    s9Eyebrow: "Comparaison",
    s9Title: "Différence Entre Racine Carrée et Racine Cubique",
    s9Intro: "La racine carrée recherche le nombre qui multiplié par lui-même donne la valeur (x²). La racine cubique recherche le nombre multiplié 3 fois (x³).",
    s9ThSquare: "Racine Carrée",
    s9ThCube: "Racine Cubique",
    s9RowSymbol: "Symbole",
    s9RowMult: "Multiplications",
    s9RowMultSquare: "2 (x × x)",
    s9RowMultCube: "3 (x × x × x)",
    s9RowEx: "Exemple",

    s10Eyebrow: "Applications",
    s10Title: "Applications Pratiques de la Racine Carrée",
    s10Intro: "Les racines carrées sont partout dans les sciences et la vie quotidienne :",
    s10Apps: [
      { title: "Bâtiment & Architecture", text: "Théorème de Pythagore (√(a² + b²)) pour vérifier les angles droits et mesurer les diagonales." },
      { title: "Finance & Investissement", text: "L'écart-type, mesure fondamentale de la volatilité et du risque, est la racine de la variance." },
      { title: "Physique & Ingénierie", text: "Formules de vitesse, d'énergie cinétique et d'oscillations harmoniques." },
      { title: "Informatique & Jeux Vidéo", text: "Calcul des distances euclidiennes dans l'espace 2D/3D et algorithmes graphiques." },
      { title: "Bricolage & Mesures", text: "Calcul de la longueur d'un côté à partir de la surface au sol d'une pièce." }
    ],

    s11Eyebrow: "Simplification",
    s11Title: "Tableau de Simplification des Racines Carrées",
    s11Intro: "Extraire les facteurs carrés parfaits permet de simplifier les radicaux sous leur forme irréductible :",
    s11ThExpr: "Expression",
    s11ThForm: "Forme Simplifiée",
    s11ThWhy: "Raison",
    s11Conclusion: "Repérez le plus grand carré parfait divisant votre nombre pour le sortir du radical.",

    s12Eyebrow: "Tableaux de Référence",
    s12Title: "Tableau de Référence Complet — Racines Carrées de 1 à 100",
    s12Intro: "Consultez rapidement les valeurs arrondies à 3 décimales avec mise en évidence des carrés parfaits.",
    s12ChartLinkText: "Besoin d'un tableau personnalisé ou imprimable ? Essayez notre Générateur de Tableaux.",
    s12ScrollHint: "Faites défiler pour voir les 100 valeurs ↓",
    s12ColNumber: "Nombre (n)",
    s12ColRoot: "Racine (√n)",
    s12ColType: "Nature",
    s12BadgePerfect: "Carré Parfait",
    s12BadgeIrrational: "Irrationnel",

    s13Eyebrow: "Carrés Parfaits",
    s13Title: "Liste Essentielle des Carrés Parfaits",
    s13Intro: "Mémoriser les premiers carrés parfaits permet de simplifier instantanément les calculs mentaux.",
    s13Conclusion: "Vérifiez n'importe quel entier avec notre Calculateur de Carrés Parfaits.",
    s13Caption: "Les carrés parfaits : entiers multipliés par eux-mêmes",

    s14Eyebrow: "FAQ",
    s14Title: "Foire Aux Questions",

    s15Eyebrow: "En Bref",
    s15Title: "Récapitulatif",
    s15BoxTitle: "L'Essentiel à Retenir",
    s15BoxText: "La racine carrée répond à une question simple : quel nombre, multiplié par lui-même, donne cette valeur ? Utilisez notre calculateur en ligne pour des réponses instantanées et précises.",

    quickCalcLabel: "Calcul Instantané",
    quickCalcSublabel: "Cliquez sur un nombre pour un résultat immédiat"
  },

  es: {
    s1Eyebrow: "Guía Completa",
    s1Title: "¿Qué es la Raíz Cuadrada (Racine Carrée)?",
    s1P1: "La raíz cuadrada es una de las operaciones matemáticas más importantes y utilizadas en todo el mundo. Si buscas resolver una raíz al instante, nuestra calculadora superior te ofrece la solución con un solo clic. A continuación te explicamos en detalle qué es, cómo calcularla a mano y sus aplicaciones.",
    s1P2: "Una raíz cuadrada es un número que, multiplicado por sí mismo, da como resultado el número original. Por ejemplo, al multiplicar 5 por sí mismo (5 × 5), obtenemos 25. Por lo tanto, la raíz cuadrada de 25 es 5. Este principio también se aplica a raíces cúbicas y raíces de orden superior.",
    s1P3: "El término francés «racine carrée» se traduce exactamente como raíz cuadrada. Independientemente del idioma en que busques, la lógica matemática es universal.",
    s1Cards: [
      { expr: "√9 = 3", reason: "porque 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "porque 4 × 4 = 16" },
      { expr: "√100 = 10", reason: "porque 10 × 10 = 100" }
    ],
    s1Caption: "Visualización geométrica: hallar el lado de un cuadrado a partir de su área",

    s2Eyebrow: "Instrucciones",
    s2Title: "Cómo Usar la Calculadora de Raíz Cuadrada",
    s2Intro: "Obtén tu resultado en tres sencillos pasos:",
    s2Steps: [
      { title: "Escribe tu número", text: "Introduce el número en la casilla superior." },
      { title: "Haz clic en Calcular", text: "Pulsa el botón Calcular para procesar el valor." },
      { title: "Lee el resultado", text: "La calculadora muestra el resultado decimal y la forma simplificada al instante." }
    ],
    s2Conclusion: "El proceso es inmediato y no necesitas memorizar fórmulas complejas: la herramienta hace todo el trabajo por ti.",

    s3Eyebrow: "Notación",
    s3Title: "Notación Matemática: ¿Qué Significa el Símbolo √?",
    s3Intro: "El símbolo √ se denomina signo radical y representa la operación de raíz cuadrada.",
    s3Cards: [
      { expr: "√9", reason: "«la raíz cuadrada de 9»" },
      { expr: "9 = radicando", reason: "El número dentro del radical" },
      { expr: "3 = raíz", reason: "El resultado obtenido" }
    ],
    s3P1: "Así, al leer √49 = 7, se lee: «la raíz cuadrada de 49 es igual a 7».",
    s3P2: "También es frecuente expresarla como exponente fraccionario:",
    s3P3: "Ambas formas son equivalentes. Las calculadoras y lenguajes de programación usan frecuentemente x^(1/2).",
    s3Caption: "Partes y terminología de una expresión con radical",

    s4Eyebrow: "Fórmula",
    s4Title: "¿Cuál es la Fórmula de la Raíz Cuadrada?",
    s4Intro: "No existe una fórmula algebraica única como la del área de un círculo. Se define por su relación inversa:",
    s4P1: "En palabras simples: cualquier número que sea la raíz cuadrada, al multiplicarlo por sí mismo, debe devolver exactamente el número inicial.",

    s5Eyebrow: "Leyes Clave",
    s5Title: "Las Cinco Leyes Fundamentales de los Radicales",
    s5Intro: "Estas cinco propiedades permiten simplificar y operar raíces rápidamente:",
    s5Laws: [
      {
        name: "Regla del Producto",
        subtitle: "Separar factores dentro del radical",
        example: "Ejemplo: √4 × √9 = 2 × 3 = 6, y √(4×9) = √36 = 6.",
        explanation: "Permite descomponer números grandes en factores más sencillos para simplificar radicales."
      },
      {
        name: "Regla del Cociente",
        subtitle: "Separar numerador y denominador",
        example: "Ejemplo: √16 ÷ √4 = 4 ÷ 2 = 2, y √(16÷4) = √4 = 2.",
        explanation: "Permite calcular por separado la raíz del numerador y del denominador en fracciones."
      },
      {
        name: "Regla de la Potencia",
        subtitle: "La raíz y el cuadrado se cancelan",
        example: "Ejemplo: √(7²) = √49 = 7.",
        explanation: "Elevar al cuadrado y extraer la raíz cuadrada son operaciones inversas."
      },
      {
        name: "Auto-Multiplicación",
        subtitle: "Una raíz por sí misma devuelve el radicando",
        example: "Ejemplo: √7 × √7 = 7.",
        explanation: "Esencial para racionalizar denominadores y eliminar raíces de las fracciones."
      },
      {
        name: "Valores Notables",
        subtitle: "Las raíces de 0 y 1 son fijas",
        example: "Ejemplo: √1 = 1 y √0 = 0 en cualquier rama de las matemáticas.",
        explanation: "Puntos fijos esenciales en demostraciones y condiciones de contorno."
      }
    ],

    s6Eyebrow: "Métodos",
    s6Title: "Métodos para Calcular Raíces Cuadradas",
    s6Intro: "Existen cuatro métodos principales para calcular raíces:",
    s6M1Title: "1. Con Esta Calculadora (El Más Rápido)",
    s6M1Text: "Introduce el número y obtén la solución exacta y simplificada en milisegundos.",
    s6M2Title: "2. Descomposición en Factores Primos",
    s6M2Intro: "Ideal para cuadrados perfectos: descompón en primos y extrae un factor por cada pareja.",
    s6M2ExTitle: "Ejemplo: Calcular √144",
    s6M2Steps: [
      "Paso 1 — Descomposición: 144 = 2⁴ × 3²",
      "Paso 2 — Agrupar en parejas: (2 × 2) × (2 × 2) × (3 × 3)",
      "Paso 3 — Multiplicar representantes: 2 × 2 × 3 = 12"
    ],
    s6M3Title: "3. Método de División Larga Tradicional",
    s6M3Text: "Algoritmo con lápiz y papel para calcular decimales de números que no son cuadrados perfectos.",
    s6M4Title: "4. Estimación Rápida por Acotamiento",
    s6M4Intro: "Encuentra entre qué dos cuadrados perfectos se ubica tu número.",
    s6M4ExTitle: "Ejemplo: Estimar √20",
    s6M4Steps: [
      "4² = 16",
      "5² = 25",
      "Como 20 está entre 16 y 25, √20 está entre 4 y 5 (aprox. 4,47)."
    ],

    s7Eyebrow: "Números Positivos",
    s7Title: "Raíces Cuadradas de Números Positivos",
    s7Intro: "Todo número positivo tiene una raíz cuadrada real positiva, denominada raíz principal.",
    s7ThNumber: "Número",
    s7ThRoot: "Raíz Cuadrada",
    s7ThWhy: "Justificación",
    s7Row4: "2 × 2 = 4",
    s7Row25: "5 × 5 = 25",
    s7Row64: "8 × 8 = 64",
    s7Row2: "Número irracional pero real positivo",
    s7Conclusion: "Por convención matemática, el signo radical √ denota siempre la raíz no negativa.",

    s8Eyebrow: "Números Negativos",
    s8Title: "Raíces de Números Negativos y la Unidad Imaginaria",
    s8P1: "En los números reales, ningún número al cuadrado produce un valor negativo.",
    s8P2: "Por ello se definió la unidad imaginaria i, tal que:",
    s8P3: "Permite expresar la solución de cualquier raíz de número negativo:",
    s8ExTitle: "Ejemplo: √(−81)",
    s8ExStep: "√(−81) = √81 × √(−1) = 9 × i = 9i",
    s8Conclusion: "La solución es 9i en el plano complejo, ampliamente utilizada en física e ingeniería eléctrica.",

    s9Eyebrow: "Comparación",
    s9Title: "Diferencia Entre Raíz Cuadrada y Raíz Cúbica",
    s9Intro: "La raíz cuadrada busca un número que multiplicado 2 veces dé el valor; la cúbica busca que se multiplique 3 veces.",
    s9ThSquare: "Raíz Cuadrada",
    s9ThCube: "Raíz Cúbica",
    s9RowSymbol: "Símbolo",
    s9RowMult: "Multiplicaciones",
    s9RowMultSquare: "2 (x × x)",
    s9RowMultCube: "3 (x × x × x)",
    s9RowEx: "Ejemplo",

    s10Eyebrow: "Aplicaciones",
    s10Title: "Aplicaciones en el Mundo Real",
    s10Intro: "Las raíces cuadradas son esenciales en múltiples disciplinas:",
    s10Apps: [
      { title: "Construcción y Arquitectura", text: "Teorema de Pitágoras (√(a² + b²)) para comprobar escuadras y vigas." },
      { title: "Finanzas e Inversión", text: "La desviación estándar, medida clave del riesgo de cartera, es la raíz de la varianza." },
      { title: "Física e Ingeniería", text: "Ecuaciones de velocidad, ondas, energía cinética y circuitos eléctricos." },
      { title: "Informática y Videojuegos", text: "Distancia euclidiana en motores 3D, visión artificial y machine learning." },
      { title: "Medición Cotidiana", text: "Calcular la longitud de una pared a partir del área en metros cuadrados." }
    ],

    s11Eyebrow: "Simplificación",
    s11Title: "Tabla de Simplificación de Raíces",
    s11Intro: "Extraer factores que sean cuadrados perfectos permite dejar las raíces en su mínima expresión:",
    s11ThExpr: "Expresión",
    s11ThForm: "Forma Simplificada",
    s11ThWhy: "Explicación",
    s11Conclusion: "Extrae el mayor cuadrado perfecto que divida exactamente a tu radicando.",

    s12Eyebrow: "Tablas de Referencia",
    s12Title: "Tabla Completa de Raíces Cuadradas del 1 al 100",
    s12Intro: "Consulta rápida de valores con 3 decimales y destacados para cuadrados perfectos.",
    s12ChartLinkText: "¿Buscas una tabla personalizada o imprimible? Prueba nuestro Generador de Tablas.",
    s12ScrollHint: "Desplaza para ver los 100 valores ↓",
    s12ColNumber: "Número (n)",
    s12ColRoot: "Raíz (√n)",
    s12ColType: "Tipo",
    s12BadgePerfect: "Cuadrado Perfecto",
    s12BadgeIrrational: "Irracional",

    s13Eyebrow: "Cuadrados Perfectos",
    s13Title: "Lista Esencial de Cuadrados Perfectos",
    s13Intro: "Memorizar los primeros cuadrados agiliza extraordinariamente el cálculo mental.",
    s13Conclusion: "Verifica cualquier número con nuestra Calculadora de Cuadrados Perfectos.",
    s13Caption: "Cuadrados perfectos: enteros multiplicados por sí mismos",

    s14Eyebrow: "Preguntas Frecuentes",
    s14Title: "Preguntas Frecuentes",

    s15Eyebrow: "Resumen",
    s15Title: "Conclusión Rápida",
    s15BoxTitle: "Puntos Clave",
    s15BoxText: "La raíz cuadrada responde a una pregunta sencilla: ¿qué número multiplicado por sí mismo da este valor? Usa nuestra calculadora para obtener respuestas rápidas y exactas.",

    quickCalcLabel: "Cálculo Instantáneo",
    quickCalcSublabel: "Haz clic en un número para un resultado inmediato"
  }
};

// Generic factory to build full boilerplate for remaining 15 languages
function buildHomeBoilerplate(
  p: {
    s1Eyebrow: string; s1Title: string; s1P1: string; s1P2: string; s1P3: string;
    s1Cards: Array<{ expr: string; reason: string }>; s1Caption: string;
    s2Eyebrow: string; s2Title: string; s2Intro: string;
    s2Steps: Array<{ title: string; text: string }>; s2Conclusion: string;
    s3Eyebrow: string; s3Title: string; s3Intro: string;
    s3Cards: Array<{ expr: string; reason: string }>; s3P1: string; s3P2: string; s3P3: string; s3Caption: string;
    s4Eyebrow: string; s4Title: string; s4Intro: string; s4P1: string;
    s5Eyebrow: string; s5Title: string; s5Intro: string;
    s5Laws: Array<{ name: string; subtitle: string; example: string; explanation: string }>;
    s6Eyebrow: string; s6Title: string; s6Intro: string;
    s6M1Title: string; s6M1Text: string;
    s6M2Title: string; s6M2Intro: string; s6M2ExTitle: string; s6M2Steps: Array<string>;
    s6M3Title: string; s6M3Text: string;
    s6M4Title: string; s6M4Intro: string; s6M4ExTitle: string; s6M4Steps: Array<string>;
    s7Eyebrow: string; s7Title: string; s7Intro: string;
    s7ThNumber: string; s7ThRoot: string; s7ThWhy: string;
    s7Row4: string; s7Row25: string; s7Row64: string; s7Row2: string; s7Conclusion: string;
    s8Eyebrow: string; s8Title: string; s8P1: string; s8P2: string; s8P3: string;
    s8ExTitle: string; s8ExStep: string; s8Conclusion: string;
    s9Eyebrow: string; s9Title: string; s9Intro: string;
    s9ThSquare: string; s9ThCube: string; s9RowSymbol: string; s9RowMult: string;
    s9RowMultSquare: string; s9RowMultCube: string; s9RowEx: string;
    s10Eyebrow: string; s10Title: string; s10Intro: string;
    s10Apps: Array<{ title: string; text: string }>;
    s11Eyebrow: string; s11Title: string; s11Intro: string;
    s11ThExpr: string; s11ThForm: string; s11ThWhy: string; s11Conclusion: string;
    s12Eyebrow: string; s12Title: string; s12Intro: string; s12ChartLinkText: string;
    s12ScrollHint: string; s12ColNumber: string; s12ColRoot: string; s12ColType: string;
    s12BadgePerfect: string; s12BadgeIrrational: string;
    s13Eyebrow: string; s13Title: string; s13Intro: string; s13Conclusion: string; s13Caption: string;
    s14Eyebrow: string; s14Title: string;
    s15Eyebrow: string; s15Title: string; s15BoxTitle: string; s15BoxText: string;
    quickCalcLabel: string; quickCalcSublabel: string;
  }
): HomeBoilerplate {
  return p;
}

// 4. German (de)
HOME_BOILERPLATE.de = buildHomeBoilerplate({
  s1Eyebrow: "Vollständiger Leitfaden",
  s1Title: "Was ist eine Quadratwurzel (Racine Carrée)?",
  s1P1: "Die Quadratwurzel ist eine fundamentale mathematische Operation. Mit unserem Online-Rechner oben erhalten Sie die exakte Wurzel mit einem Klick. Dieser Leitfaden erklärt Definitionen, manuelle Rechenmethoden und praktische Anwendungen.",
  s1P2: "Eine Quadratwurzel ist jene Zahl, die mit sich selbst multipliziert die Ausgangszahl ergibt (z. B. 5 × 5 = 25, also √25 = 5). Das Konzept erweitert sich auf Kubikwurzeln und n-te Wurzeln beliebigen Grades.",
  s1P3: "Im Französischen heißt die Quadratwurzel «racine carrée». Unabhängig vom Suchbegriff bleibt die Mathematik dieselbe.",
  s1Cards: [
    { expr: "√9 = 3", reason: "weil 3 × 3 = 9" },
    { expr: "√16 = 4", reason: "weil 4 × 4 = 16" },
    { expr: "√100 = 10", reason: "weil 10 × 10 = 100" }
  ],
  s1Caption: "Geometrische Veranschaulichung: Aus dem Flächeninhalt eines Quadrats die Seitenlänge berechnen",
  s2Eyebrow: "Anleitung",
  s2Title: "So bedienen Sie den Quadratwurzel-Rechner",
  s2Intro: "In drei schnellen Schritten zum Ergebnis:",
  s2Steps: [
    { title: "Zahl eingeben", text: "Tragen Sie Ihre Zahl in das Eingabefeld oben ein." },
    { title: "Auf Berechnen klicken", text: "Klicken Sie auf den Button, um die Wurzel zu ermitteln." },
    { title: "Ergebnis ablesen", text: "Erhalten Sie sofort den exakten Dezimalwert und die vereinfachte Wurzelform." }
  ],
  s2Conclusion: "Keine komplizierten Formeln nötig: Der Rechner erledigt alle Schritte vollautomatisch.",
  s3Eyebrow: "Notation",
  s3Title: "Mathematische Notation: Das Wurzelsymbol √",
  s3Intro: "Das Symbol √ nennt sich Wurzelzeichen (Radikal) und kennzeichnet das Ziehen der Quadratwurzel.",
  s3Cards: [
    { expr: "√9", reason: "«die Quadratwurzel aus 9»" },
    { expr: "9 = Radikand", reason: "Die Zahl unter dem Wurzelzeichen" },
    { expr: "3 = Wurzel", reason: "Das berechnete Ergebnis" }
  ],
  s3P1: "Der Ausdruck √49 = 7 bedeutet: Die Quadratwurzel aus 49 ist 7.",
  s3P2: "Wurzeln lassen sich auch als gebrochene Exponenten schreiben:",
  s3P3: "Beide Schreibweisen sind identisch. In Programmiersprachen wird meist x^(1/2) verwendet.",
  s3Caption: "Bestandteile eines Wurzelausdrucks",
  s4Eyebrow: "Formel",
  s4Title: "Die Definition der Quadratwurzel",
  s4Intro: "Eine Quadratwurzel wird durch ihre inverse Beziehung zum Quadrieren definiert:",
  s4P1: "Mit sich selbst multipliziert muss die Wurzel wieder die ursprüngliche Zahl ergeben.",
  s5Eyebrow: "Grundregeln",
  s5Title: "Die fünf Kernregeln für Quadratwurzeln",
  s5Intro: "Mit diesen Rechengesetzen vereinfachen Sie Wurzelterme spielend:",
  s5Laws: [
    { name: "Produktregel", subtitle: "Faktoren unter der Wurzel aufteilen", example: "√4 × √9 = 2 × 3 = 6 = √36", explanation: "Ermöglicht das Zerlegen großer Radikanden." },
    { name: "Quotientenregel", subtitle: "Brüche unter der Wurzel trennen", example: "√16 ÷ √4 = 4 ÷ 2 = 2 = √4", explanation: "Zähler und Nenner können separat radiziert werden." },
    { name: "Potenzregel", subtitle: "Quadrieren und Wurzel heben sich auf", example: "√(7²) = 7", explanation: "Umkehroperationen führen direkt zum Ursprungswert zurück." },
    { name: "Selbstmultiplikation", subtitle: "Wurzel mal sich selbst ergibt den Radikanden", example: "√7 × √7 = 7", explanation: "Unverzichtbar zum Rationalisieren von Brüchen." },
    { name: "Identitätswerte", subtitle: "Feste Werte für 0 und 1", example: "√1 = 1 und √0 = 0", explanation: "Wichtige mathematische Grenz- und Fixpunkte." }
  ],
  s6Eyebrow: "Methoden",
  s6Title: "Methoden zur Berechnung von Quadratwurzeln",
  s6Intro: "Vier gängige Methoden im Überblick:",
  s6M1Title: "1. Dieser Online-Rechner (Am schnellsten)",
  s6M1Text: "Zahl eingeben, klicken, fertig – ideal für Dezimalzahlen und große Werte.",
  s6M2Title: "2. Primfaktorzerlegung (Für Quadratzahlen)",
  s6M2Intro: "Zerlegen Sie die Zahl in Primfaktoren und fassen Sie Paare zusammen.",
  s6M2ExTitle: "Beispiel: √144 berechnen",
  s6M2Steps: ["144 = 2 × 2 × 2 × 2 × 3 × 3", "Paare: (2×2) × (2×2) × (3×3)", "Wurzel: 2 × 2 × 3 = 12"],
  s6M3Title: "3. Schriftliches Wurzelziehen (Division)",
  s6M3Text: "Klassisches Papier-und-Bleistift-Verfahren für beliebig genaue Dezimalstellen.",
  s6M4Title: "4. Schätzmethode durch Eingrenzen",
  s6M4Intro: "Eingrenzen zwischen zwei bekannten Quadratzahlen.",
  s6M4ExTitle: "Beispiel: √20 schätzen",
  s6M4Steps: ["4² = 16", "5² = 25", "√20 liegt zwischen 4 und 5 (ca. 4,47)."],
  s7Eyebrow: "Positive Zahlen",
  s7Title: "Wurzeln positiver Zahlen",
  s7Intro: "Jede positive Zahl besitzt eine reelle, positive Hauptwurzel.",
  s7ThNumber: "Zahl", s7ThRoot: "Wurzel", s7ThWhy: "Begründung",
  s7Row4: "2 × 2 = 4", s7Row25: "5 × 5 = 25", s7Row64: "8 × 8 = 64", s7Row2: "Irrationale, reelle Zahl",
  s7Conclusion: "Das Wurzelzeichen √ bezeichnet stets die positive Hauptwurzel.",
  s8Eyebrow: "Negative Zahlen",
  s8Title: "Wurzeln negativer Zahlen & Imaginäre Einheit",
  s8P1: "Im Reellen ergibt kein Quadrat eine negative Zahl.",
  s8P2: "Mathematiker führten die imaginäre Einheit i ein:",
  s8P3: "Damit lassen sich negative Wurzeln exakt darstellen:",
  s8ExTitle: "Beispiel: √(−81)", s8ExStep: "√(−81) = √81 × √(−1) = 9i",
  s8Conclusion: "9i ist eine komplexe Zahl, unverzichtbar in Elektrotechnik und Physik.",
  s9Eyebrow: "Vergleich",
  s9Title: "Quadratwurzel vs. Kubikwurzel",
  s9Intro: "Quadratwurzel: Multiplikation 2-mal (x²). Kubikwurzel: Multiplikation 3-mal (x³).",
  s9ThSquare: "Quadratwurzel", s9ThCube: "Kubikwurzel",
  s9RowSymbol: "Symbol", s9RowMult: "Multiplikationen",
  s9RowMultSquare: "2 (x × x)", s9RowMultCube: "3 (x × x × x)", s9RowEx: "Beispiel",
  s10Eyebrow: "Praxis",
  s10Title: "Praktische Anwendungen",
  s10Intro: "Quadratwurzeln sind unverzichtbar im modernen Alltag:",
  s10Apps: [
    { title: "Bauwesen & Architektur", text: "Satz des Pythagoras (√(a² + b²)) für rechte Winkel und Träger." },
    { title: "Finanzwesen", text: "Standardabweichung als Wurzel der Varianz zur Risikomessung." },
    { title: "Physik & Technik", text: "Berechnung von Geschwindigkeiten, Schwingungen und Wellen." },
    { title: "Informatik", text: "Euklidische Distanzen in 3D-Engines und Machine Learning." },
    { title: "Alltag", text: "Seitenlängen aus Grundstücks- und Raumflächen ermitteln." }
  ],
  s11Eyebrow: "Vereinfachung",
  s11Title: "Wurzeln vereinfachen",
  s11Intro: "Ziehen Sie quadratische Faktoren vor die Wurzel:",
  s11ThExpr: "Ausdruck", s11ThForm: "Vereinfacht", s11ThWhy: "Grund",
  s11Conclusion: "Suchen Sie den größten quadratischen Teiler des Radikanden.",
  s12Eyebrow: "Referenztabelle",
  s12Title: "Vollständige Wurzeltabelle 1 bis 100",
  s12Intro: "Schnellübersicht aller Werte gerundet auf 3 Dezimalstellen.",
  s12ChartLinkText: "Individuelle Tabellen drucken? Nutzen Sie unseren Tabellen-Generator.",
  s12ScrollHint: "Scrollen für alle 100 Werte ↓",
  s12ColNumber: "Zahl (n)", s12ColRoot: "Wurzel (√n)", s12ColType: "Typ",
  s12BadgePerfect: "Quadratzahl", s12BadgeIrrational: "Irrational",
  s13Eyebrow: "Quadratzahlen",
  s13Title: "Wichtige Quadratzahlen zum Merken",
  s13Intro: "Die ersten Quadratzahlen auswendig zu kennen, beschleunigt Kopfrechnen enorm.",
  s13Conclusion: "Prüfen Sie beliebige Zahlen mit unserem Quadratzahl-Rechner.",
  s13Caption: "Quadratzahlen: Ganze Zahlen mit sich selbst multipliziert",
  s14Eyebrow: "FAQ", s14Title: "Häufig gestellte Fragen",
  s15Eyebrow: "Zusammenfassung",
  s15Title: "Kurzes Fazit",
  s15BoxTitle: "Das Wichtigste in Kürze",
  s15BoxText: "Die Quadratwurzel beantwortet die Frage: Welche Zahl mit sich selbst multipliziert ergibt diesen Wert? Nutzen Sie unseren Rechner für schnelle Lösungen.",
  quickCalcLabel: "Sofortrechnung",
  quickCalcSublabel: "Klicken Sie auf eine Zahl für ein sofortiges Ergebnis"
});

// 5. Italian (it)
HOME_BOILERPLATE.it = buildHomeBoilerplate({
  s1Eyebrow: "Guida Completa",
  s1Title: "Cos'è la Radice Quadrata (Racine Carrée)?",
  s1P1: "La radice quadrata è una delle operazioni matematiche cardine. Il nostro calcolatore online ti fornisce la risposta in un clic. Questa guida illustra concetti, formule e applicazioni pratiche.",
  s1P2: "Una radice quadrata è quel numero che, moltiplicato per se stesso, restituisce il numero di partenza (5 × 5 = 25, quindi √25 = 5). Lo stesso principio si applica alle radici cubiche e di grado superiore.",
  s1P3: "«Racine carrée» è il termine francese per radice quadrata. La matematica sottostante è identica in ogni lingua.",
  s1Cards: [
    { expr: "√9 = 3", reason: "perché 3 × 3 = 9" },
    { expr: "√16 = 4", reason: "perché 4 × 4 = 16" },
    { expr: "√100 = 10", reason: "perché 10 × 10 = 100" }
  ],
  s1Caption: "Visualizzazione geometrica: trovare il lato di un quadrato dall'area",
  s2Eyebrow: "Istruzioni",
  s2Title: "Come Usare il Calcolatore di Radice Quadrata",
  s2Intro: "Ottieni la soluzione in tre semplici passaggi:",
  s2Steps: [
    { title: "Inserisci il numero", text: "Digita il numero nella casella di input in alto." },
    { title: "Clicca su Calcola", text: "Premi il pulsante per elaborare il valore." },
    { title: "Leggi il risultato", text: "Visualizza immediatamente il valore decimale e la forma radicale semplificata." }
  ],
  s2Conclusion: "Tutto qui: non occorre ricordare formule a memoria, il tool calcola tutto all'istante.",
  s3Eyebrow: "Notazione",
  s3Title: "Notazione: Cosa Significa il Simbolo √?",
  s3Intro: "Il simbolo √ è chiamato segno di radice (radicale) e indica l'estrazione di radice quadrata.",
  s3Cards: [
    { expr: "√9", reason: "«la radice quadrata di 9»" },
    { expr: "9 = radicando", reason: "Il numero sotto la radice" },
    { expr: "3 = radice", reason: "Il risultato ottenuto" }
  ],
  s3P1: "Quando vedi √49 = 7, si legge: «la radice quadrata di 49 è uguale a 7».",
  s3P2: "Può anche essere scritta come potenza con esponente frazionario:",
  s3P3: "Le due forme sono equivalenti; nei software si usa spesso x^(1/2).",
  s3Caption: "Componenti di un'espressione radicale",
  s4Eyebrow: "Formula",
  s4Title: "La Formula della Radice Quadrata",
  s4Intro: "La radice quadrata è definita dalla sua operazione inversa:",
  s4P1: "Qualsiasi numero ottenuto come radice, moltiplicato per se stesso, deve restituire il numero originale.",
  s5Eyebrow: "Regole Fondamentali",
  s5Title: "Le Cinque Proprietà delle Radici Quadrate",
  s5Intro: "Regole essenziali per semplificare e svolgere calcoli con i radicali:",
  s5Laws: [
    { name: "Regola del Prodotto", subtitle: "Separare i fattori sotto radice", example: "√4 × √9 = 2 × 3 = 6 = √36", explanation: "Permette di scomporre numeri grandi in fattori più semplici." },
    { name: "Regola del Quoziente", subtitle: "Separare numeratore e denominatore", example: "√16 ÷ √4 = 4 ÷ 2 = 2 = √4", explanation: "Permette di calcolare la radice di frazioni separatamente." },
    { name: "Regola della Potenza", subtitle: "Quadrato e radice si annullano", example: "√(7²) = 7", explanation: "Operazioni inverse che ripristinano il numero positivo di partenza." },
    { name: "Auto-Moltiplicazione", subtitle: "Una radice per se stessa dà il radicando", example: "√7 × √7 = 7", explanation: "Fondamentale per la razionalizzazione dei denominatori." },
    { name: "Valori Fissi", subtitle: "Le radici di 0 e 1 sono invarianti", example: "√1 = 1 e √0 = 0", explanation: "Punti di riferimento in algebra e analisi." }
  ],
  s6Eyebrow: "Metodi",
  s6Title: "Metodi per Calcolare la Radice Quadrata",
  s6Intro: "I quattro metodi più utilizzati:",
  s6M1Title: "1. Con Questo Calcolatore (Più Veloce)",
  s6M1Text: "Inserisci il numero e ottieni la risposta in un lampo.",
  s6M2Title: "2. Scomposizione in Fattori Primi",
  s6M2Intro: "Ideale per quadrati perfetti: raggruppa i fattori primi in coppie.",
  s6M2ExTitle: "Esempio: Calcolare √144",
  s6M2Steps: ["144 = 2⁴ × 3²", "Coppie: (2×2) × (2×2) × (3×3)", "Radice: 2 × 2 × 3 = 12"],
  s6M3Title: "3. Metodo Tradizionale di Divisione",
  s6M3Text: "Algoritmo manuale per calcolare decimali a mano con precisione a piacere.",
  s6M4Title: "4. Stima per Approssimazione",
  s6M4Intro: "Trova tra quali quadrati perfetti si trova il numero.",
  s6M4ExTitle: "Esempio: Stimare √20",
  s6M4Steps: ["4² = 16", "5² = 25", "√20 è compreso tra 4 e 5 (circa 4,47)."],
  s7Eyebrow: "Numeri Positivi",
  s7Title: "Radici Quadrate di Numeri Positivi",
  s7Intro: "Ogni numero positivo ammette una radice reale positiva (radice principale).",
  s7ThNumber: "Numero", s7ThRoot: "Radice", s7ThWhy: "Spiegazione",
  s7Row4: "2 × 2 = 4", s7Row25: "5 × 5 = 25", s7Row64: "8 × 8 = 64", s7Row2: "Numero irrazionale reale positivo",
  s7Conclusion: "Per convenzione il simbolo √ indica sempre la radice positiva.",
  s8Eyebrow: "Numeri Negativi",
  s8Title: "Radici Negative e Unità Immaginaria",
  s8P1: "Nel campo reale non esistono radici di numeri negativi.",
  s8P2: "I matematici hanno introdotto l'unità immaginaria i:",
  s8P3: "Permette di esprimere la radice di numeri negativi:",
  s8ExTitle: "Esempio: √(−81)", s8ExStep: "√(−81) = √81 × √(−1) = 9i",
  s8Conclusion: "9i è un numero complesso indispensabile in fisica ed elettrotecnica.",
  s9Eyebrow: "Confronto",
  s9Title: "Radice Quadrata vs Radice Cubica",
  s9Intro: "Radice quadrata: moltiplicazione 2 volte (x²). Radice cubica: moltiplicazione 3 volte (x³).",
  s9ThSquare: "Radice Quadrata", s9ThCube: "Radice Cubica",
  s9RowSymbol: "Simbolo", s9RowMult: "Moltiplicazioni",
  s9RowMultSquare: "2 (x × x)", s9RowMultCube: "3 (x × x × x)", s9RowEx: "Esempio",
  s10Eyebrow: "Applicazioni",
  s10Title: "Applicazioni nella Vita Reale",
  s10Intro: "Le radici quadrate sono fondamentali nel mondo contemporaneo:",
  s10Apps: [
    { title: "Edilizia e Architettura", text: "Teorema di Pitagora (√(a² + b²)) per controllare angoli retti e travi." },
    { title: "Finanza", text: "Deviazione standard come radice della varianza per misurare il rischio." },
    { title: "Fisica e Ingegneria", text: "Calcolo di velocità, onde e circuiti oscillanti." },
    { title: "Informatica", text: "Distanza euclidea nella grafica 3D e intelligenza artificiale." },
    { title: "Misurazioni quotidiane", text: "Ricavare la lunghezza dei lati dall'area di una stanza." }
  ],
  s11Eyebrow: "Semplificazione",
  s11Title: "Tabella di Semplificazione",
  s11Intro: "Estrai fattori quadrati perfetti per semplificare il radicale:",
  s11ThExpr: "Espressione", s11ThForm: "Forma Semplificata", s11ThWhy: "Motivo",
  s11Conclusion: "Trova il massimo quadrato perfetto divisore del radicando.",
  s12Eyebrow: "Tabelle",
  s12Title: "Tabella Completa Radici Quadrate da 1 a 100",
  s12Intro: "Valori con 3 decimali ed evidenziazione dei quadrati perfetti.",
  s12ChartLinkText: "Vuoi stampare una tabella personalizzata? Prova il nostro Generatore di Tabelle.",
  s12ScrollHint: "Scorri per visualizzare tutti i 100 valori ↓",
  s12ColNumber: "Numero (n)", s12ColRoot: "Radice (√n)", s12ColType: "Tipo",
  s12BadgePerfect: "Quadrato Perfetto", s12BadgeIrrational: "Irrazionale",
  s13Eyebrow: "Quadrati Perfetti",
  s13Title: "Elenco dei Quadrati Perfetti Fondamentali",
  s13Intro: "Memorizzare i primi quadrati velocizza tantissimo i calcoli mentali.",
  s13Conclusion: "Verifica qualsiasi numero con il nostro Calcolatore di Quadrati Perfetti.",
  s13Caption: "Quadrati perfetti: numeri interi moltiplicati per se stessi",
  s14Eyebrow: "FAQ", s14Title: "Domande Frequenti",
  s15Eyebrow: "Riepilogo",
  s15Title: "In Sintesi",
  s15BoxTitle: "Punti Fondamentali",
  s15BoxText: "La radice quadrata risponde a una semplice domanda: quale numero moltiplicato per se stesso dà questo valore? Usa il calcolatore sopra per risposte rapide ed esatte.",
  quickCalcLabel: "Calcolo Istantaneo",
  quickCalcSublabel: "Clicca su un numero per un risultato immediato"
});

// 6. Portuguese (pt)
HOME_BOILERPLATE.pt = buildHomeBoilerplate({
  s1Eyebrow: "Guia Completo",
  s1Title: "O Que É Raiz Quadrada (Racine Carrée)?",
  s1P1: "A raiz quadrada é uma operação matemática essencial. Nossa calculadora acima calcula qualquer raiz em segundos. Este guia explica definições, métodos manuais e aplicações práticas.",
  s1P2: "A raiz quadrada é o número que, multiplicado por si mesmo, resulta no número original (5 × 5 = 25, logo √25 = 5). O mesmo princípio se aplica a raízes cúbicas e raízes n-ésimas.",
  s1P3: "«Racine carrée» é a expressão em francês para raiz quadrada. A matemática é idêntica em qualquer idioma.",
  s1Cards: [
    { expr: "√9 = 3", reason: "porque 3 × 3 = 9" },
    { expr: "√16 = 4", reason: "porque 4 × 4 = 16" },
    { expr: "√100 = 10", reason: "porque 10 × 10 = 100" }
  ],
  s1Caption: "Visualização geométrica: encontrar o lado de um quadrado a partir de sua área",
  s2Eyebrow: "Instruções",
  s2Title: "Como Usar a Calculadora de Raiz Quadrada",
  s2Intro: "Descubra a resposta em três passos simples:",
  s2Steps: [
    { title: "Digite o número", text: "Insira o valor no campo de entrada acima." },
    { title: "Clique em Calcular", text: "Pressione o botão para calcular a raiz." },
    { title: "Veja o resultado", text: "Confira o resultado decimal e a raiz simplificada na hora." }
  ],
  s2Conclusion: "Simples e direto: a ferramenta resolve tudo automaticamente para você.",
  s3Eyebrow: "Notação",
  s3Title: "Notação Matemática: O Símbolo √",
  s3Intro: "O símbolo √ chama-se radical e indica a operação de raiz quadrada.",
  s3Cards: [
    { expr: "√9", reason: "«a raiz quadrada de 9»" },
    { expr: "9 = radicando", reason: "O número sob o radical" },
    { expr: "3 = raiz", reason: "O resultado obtido" }
  ],
  s3P1: "Ao escrever √49 = 7, lê-se: «a raiz quadrada de 49 é igual a 7».",
  s3P2: "Também pode ser expressa como expoente fracionário:",
  s3P3: "Ambas as notações são equivalentes. Linguagens de programação usam x^(1/2).",
  s3Caption: "Partes de uma expressão radical",
  s4Eyebrow: "Fórmula",
  s4Title: "A Fórmula da Raiz Quadrada",
  s4Intro: "A raiz quadrada é definida por sua relação inversa com a potenciação:",
  s4P1: "Multiplicada por si mesma, a raiz deve reconstituir o número inicial.",
  s5Eyebrow: "Regras Fundamentais",
  s5Title: "As Cinco Leis das Raízes Quadradas",
  s5Intro: "Regras práticas para simplificar e manipular radicais:",
  s5Laws: [
    { name: "Regra do Produto", subtitle: "Separar fatores no radical", example: "√4 × √9 = 2 × 3 = 6 = √36", explanation: "Permite fatorar números grandes em partes mais simples." },
    { name: "Regra do Quociente", subtitle: "Separar numerador e denominador", example: "√16 ÷ √4 = 4 ÷ 2 = 2 = √4", explanation: "Calcula a raiz do numerador e denominador separadamente." },
    { name: "Regra da Potência", subtitle: "Quadrado e raiz se cancelam", example: "√(7²) = 7", explanation: "Operações inversas que preservam o número positivo." },
    { name: "Automultiplicação", subtitle: "Raiz vezes ela mesma dá o radicando", example: "√7 × √7 = 7", explanation: "Indispensável na racionalização de denominadores." },
    { name: "Valores Notáveis", subtitle: "Raízes de 0 e 1 são fixas", example: "√1 = 1 e √0 = 0", explanation: "Pontos de referência fundamentais na matemática." }
  ],
  s6Eyebrow: "Métodos",
  s6Title: "Métodos para Calcular a Raiz Quadrada",
  s6Intro: "Quatro métodos amplamente utilizados:",
  s6M1Title: "1. Esta Calculadora Online (Mais Rápido)",
  s6M1Text: "Digite o número e obtenha a resposta exata e fatorada instantaneamente.",
  s6M2Title: "2. Fatoração em Primos (Quadrados Perfeitos)",
  s6M2Intro: "Decomponha o número em fatores primos e agrupe em pares.",
  s6M2ExTitle: "Exemplo: Calcular √144",
  s6M2Steps: ["144 = 2⁴ × 3²", "Pares: (2×2) × (2×2) × (3×3)", "Raiz: 2 × 2 × 3 = 12"],
  s6M3Title: "3. Método Tradicional da Divisão Longa",
  s6M3Text: "Cálculo manual no papel para obter casas decimais de números não perfeitos.",
  s6M4Title: "4. Estimativa por Intervalo",
  s6M4Intro: "Encontre os quadrados perfeitos vizinhos.",
  s6M4ExTitle: "Exemplo: Estimar √20",
  s6M4Steps: ["4² = 16", "5² = 25", "√20 fica entre 4 e 5 (aprox. 4,47)."],
  s7Eyebrow: "Números Positivos",
  s7Title: "Raízes de Números Positivos",
  s7Intro: "Todo número positivo possui uma raiz real positiva (raiz principal).",
  s7ThNumber: "Número", s7ThRoot: "Raiz", s7ThWhy: "Justificativa",
  s7Row4: "2 × 2 = 4", s7Row25: "5 × 5 = 25", s7Row64: "8 × 8 = 64", s7Row2: "Número irracional real positivo",
  s7Conclusion: "Por convenção, o símbolo √ representa sempre a raiz positiva.",
  s8Eyebrow: "Números Negativos",
  s8Title: "Raízes Negativas e a Unidade Imaginária",
  s8P1: "No conjunto dos números reais não existe raiz quadrada de número negativo.",
  s8P2: "Os matemáticos definiram a unidade imaginária i:",
  s8P3: "Permite resolver raízes de números negativos:",
  s8ExTitle: "Exemplo: √(−81)", s8ExStep: "√(−81) = √81 × √(−1) = 9i",
  s8Conclusion: "9i é um número complexo, amplamente aplicado na física e engenharia.",
  s9Eyebrow: "Comparação",
  s9Title: "Raiz Quadrada vs Raiz Cúbica",
  s9Intro: "Raiz quadrada: produto de 2 fatores (x²). Raiz cúbica: produto de 3 fatores (x³).",
  s9ThSquare: "Raiz Quadrada", s9ThCube: "Raiz Cúbica",
  s9RowSymbol: "Símbolo", s9RowMult: "Multiplicações",
  s9RowMultSquare: "2 (x × x)", s9RowMultCube: "3 (x × x × x)", s9RowEx: "Exemplo",
  s10Eyebrow: "Aplicações",
  s10Title: "Aplicações Práticas",
  s10Intro: "As raízes quadradas estão presentes no cotidiano e na ciência:",
  s10Apps: [
    { title: "Construção Civil", text: "Teorema de Pitágoras (√(a² + b²)) para esquadros e vigas." },
    { title: "Finanças e Economia", text: "Desvio padrão como raiz da variância para medir risco de investimentos." },
    { title: "Física e Engenharia", text: "Cálculo de velocidades, energia cinética e ondas eletromagnéticas." },
    { title: "Computação e Games", text: "Distância euclidiana em renderização 3D e aprendizado de máquina." },
    { title: "Medições do Dia a Dia", text: "Achar o comprimento das paredes a partir da área do piso." }
  ],
  s11Eyebrow: "Simplificação",
  s11Title: "Tabela de Simplificação de Radicais",
  s11Intro: "Extraia fatores quadrados perfeitos para simplificar expressões:",
  s11ThExpr: "Expressão", s11ThForm: "Forma Simplificada", s11ThWhy: "Motivo",
  s11Conclusion: "Extraia o maior quadrado perfeito divisor do radicando.",
  s12Eyebrow: "Tabelas",
  s12Title: "Tabela Completa de Raízes de 1 a 100",
  s12Intro: "Consulta rápida com 3 casas decimais e destaque para quadrados perfeitos.",
  s12ChartLinkText: "Precisa de uma tabela personalizada para imprimir? Use nosso Gerador de Tabelas.",
  s12ScrollHint: "Role para ver todos os 100 valores ↓",
  s12ColNumber: "Número (n)", s12ColRoot: "Raiz (√n)", s12ColType: "Tipo",
  s12BadgePerfect: "Quadrado Perfeito", s12BadgeIrrational: "Irracional",
  s13Eyebrow: "Quadrados Perfeitos",
  s13Title: "Lista Essencial de Quadrados Perfeitos",
  s13Intro: "Decorar os primeiros quadrados perfeitos agiliza cálculos mentais.",
  s13Conclusion: "Verifique qualquer número com nossa Calculadora de Quadrados Perfeitos.",
  s13Caption: "Quadrados perfeitos: números inteiros multiplicados por si mesmos",
  s14Eyebrow: "Perguntas Frequentes", s14Title: "Perguntas Frequentes",
  s15Eyebrow: "Resumo",
  s15Title: "Conclusão Rápida",
  s15BoxTitle: "Resumo Prático",
  s15BoxText: "A raiz quadrada responde à pergunta: que número multiplicado por si mesmo resulta neste valor? Use a calculadora acima para respostas instantâneas.",
  quickCalcLabel: "Cálculo Instantâneo",
  quickCalcSublabel: "Clique em um número para obter o resultado imediatamente"
});

import { HOME_BOILERPLATE_PART2 } from './homeBoilerplatePart2';
import { HOME_BOILERPLATE_PART3 } from './homeBoilerplatePart3';

Object.assign(HOME_BOILERPLATE, HOME_BOILERPLATE_PART2, HOME_BOILERPLATE_PART3);

export function getHomeBoilerplate(lang: string): HomeBoilerplate {
  return HOME_BOILERPLATE[lang] || HOME_BOILERPLATE.en;
}
