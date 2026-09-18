// Full localized educational copy and boilerplate text for Racine Cubique (Cube Root) across all 18 languages

export interface CbrtBoilerplate {
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
  s7Row8: string;
  s7Row125: string;
  s7Row512: string;
  s7Row10: string;
  s7Conclusion: string;

  s8Eyebrow: string;
  s8Title: string;
  s8P1: string;
  s8P2: string;
  s8ExTitle: string;
  s8ExStep: string;
  s8Conclusion: string;
  s8WarningTitle: string;
  s8WarningText: string;

  s9Eyebrow: string;
  s9Title: string;
  s9Intro: string;
  s9ThCube: string;
  s9ThSquare: string;
  s9RowSymbol: string;
  s9RowMult: string;
  s9RowMultCube: string;
  s9RowMultSquare: string;
  s9RowEx: string;
  s9RowExCube: string;
  s9RowExSquare: string;
  s9RowNegative: string;
  s9RowNegativeCube: string;
  s9RowNegativeSquare: string;

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
  s12ScrollHint: string;
  s12ColNumber: string;
  s12ColRoot: string;
  s12ColType: string;
  s12BadgePerfect: string;
  s12BadgeIrrational: string;

  s13Eyebrow: string;
  s13Title: string;
  s13Intro: string;
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

export const CBRT_BOILERPLATE: Record<string, CbrtBoilerplate> = {
  en: {
    s1Eyebrow: "Complete Guide",
    s1Title: "What Is Racine Cubique (Cube Root)?",
    s1P1: "Racine cubique is the French word for cube root, and just like its cousin \"racine carrée,\" it's a term people search in English all the time. If you landed here looking for a fast answer, the racine cubique calculator above will give you one instantly. Everything below explains what a cube root actually is, how to find one by hand, and where it shows up outside the classroom.",
    s1P2: "A cube root is a number that, when multiplied by itself three times, gives you another number. Multiply 3 by itself three times — 3 × 3 × 3 — and you get 27. So we say the cube root of 27 is 3.",
    s1P3: "That's the entire idea. Everything else on this page just builds on it.",
    s1Cards: [
      { expr: "∛8 = 2", reason: "because 2 × 2 × 2 = 8" },
      { expr: "∛64 = 4", reason: "because 4 × 4 × 4 = 64" },
      { expr: "∛1000 = 10", reason: "because 10 × 10 × 10 = 1,000" }
    ],
    s1Caption: "Visualizing a cube root: Finding the side length of a 3D cube from its volume",

    s2Eyebrow: "How To Use",
    s2Title: "How to Use the Racine Cubique Calculator",
    s2Intro: "Get your answer in three simple steps:",
    s2Steps: [
      { title: "Type Your Number", text: "Type your number into the box above." },
      { title: "Click Calculate", text: "Hit the Calculate button to process your number." },
      { title: "Read Your Result", text: "The calculator shows the cube root instantly, including a simplified form when one's available and correct handling of negative numbers." }
    ],
    s2Conclusion: "No formulas needed to use the tool itself. The rest of this guide is for anyone who wants to understand what's happening behind that one click.",

    s3Eyebrow: "Notation",
    s3Title: "Cube Root Notation: What Does the ∛ Symbol Mean?",
    s3Intro: "The symbol ∛ is the cube root sign. It's built from the same radical symbol used for square roots, but with a small \"3\" (called the index) tucked into the notch.",
    s3Cards: [
      { expr: "∛27", reason: "\"the cube root of 27\"" },
      { expr: "27 = radicand", reason: "The number inside the symbol" },
      { expr: "3 = index", reason: "How many times to multiply" }
    ],
    s3P1: "You'll also see cube roots written as a fractional exponent:",
    s3P2: "Both forms mean the same thing — the exponent version is often used in calculators, spreadsheets, and programming because the ∛ symbol isn't always easy to type.",
    s3P3: "So whether you write ∛x or x^(1/3), the operation is identical.",
    s3Caption: "The anatomy of a cube root expression and its mathematical terms",

    s4Eyebrow: "Formula",
    s4Title: "What Is the Formula for Cube Roots?",
    s4Intro: "Like square roots, there's no single plug-and-play formula — a cube root is defined by a relationship:",
    s4P1: "In plain words: whatever answer you get, multiplying it by itself three times has to bring you back to your starting number.",

    s5Eyebrow: "Core Laws",
    s5Title: "The Five Core Laws of Cube Roots",
    s5Intro: "These five rules mirror the foundational square root rules you may already know — but adapted for the third degree:",
    s5Laws: [
      {
        name: "Product Rule",
        subtitle: "Split products inside radicals",
        example: "Example: ∛8 × ∛27 = 2 × 3 = 6, and ∛(8×27) = ∛216 = 6. Same answer.",
        explanation: "Just like with simplifying square roots, you can break a complicated cube root into simpler pieces. Instead of computing ∛216 directly, factor it as 8 × 27, compute each cube root separately, and multiply."
      },
      {
        name: "Quotient Rule",
        subtitle: "Split quotients inside radicals",
        example: "Example: ∛64 ÷ ∛8 = 4 ÷ 2 = 2, and ∛(64÷8) = ∛8 = 2.",
        explanation: "The mirror of the product rule — take the cube root of a fraction by rooting the numerator and denominator separately."
      },
      {
        name: "Power Rule",
        subtitle: "Cubing and cube root cancel each other",
        example: "Example: ∛(5³) = ∛125 = 5. Cubing and cube-rooting undo each other.",
        explanation: "Unlike square roots, which only return non-negative values, the power rule for cube roots works for all real numbers — positive, negative, and zero. ∛((-3)³) = -3."
      },
      {
        name: "Self-Cube Rule",
        subtitle: "Cubing a cube root returns the radicand",
        example: "Example: (∛5)³ = 5. (∛12)³ = 12. It always works.",
        explanation: "This is the definition of cube root stated in reverse. If ∛a is \"the number that, when cubed, gives a,\" then cubing ∛a must give you a back."
      },
      {
        name: "Identity Values",
        subtitle: "The cube roots of 0 and 1 never change",
        example: "Example: No matter the context, ∛1 is always 1 and ∛0 is always 0.",
        explanation: "These are the fixed points of the cube root function. ∛1 = 1 because 1³ = 1, and ∛0 = 0 because 0³ = 0."
      }
    ],

    s6Eyebrow: "Methods",
    s6Title: "How to Calculate Racine Cubique — Different Methods",
    s6Intro: "Four reliable ways to find cube roots:",
    s6M1Title: "1. Using This Racine Cubique Calculator (Fastest)",
    s6M1Text: "Type in your number, click Calculate, done. This is the method most people reach for once they know it exists — especially for decimals or large numbers.",
    s6M2Title: "2. Prime Factorization Method (Best for Perfect Cubes)",
    s6M2Intro: "This method breaks a number into its prime factors and groups them in sets of three.",
    s6M2ExTitle: "Example: Find ∛216",
    s6M2Steps: [
      "Step 1 — Break 216 into prime factors: 216 = 2 × 2 × 2 × 3 × 3 × 3",
      "Step 2 — Group into sets of three: (2 × 2 × 2) × (3 × 3 × 3)",
      "Step 3 — Take one number from each group: 2 × 3 = 6",
      "So ∛216 = 6."
    ],
    s6M3Title: "3. Newton-Raphson Method (Best for Precision)",
    s6M3Text: "This is an approximation method used by computers and scientific calculators to home in on a very precise decimal answer through repeated refinement.",
    s6M4Title: "4. Estimation Method (Fastest by Hand)",
    s6M4Intro: "Place the number between two known cubes:",
    s6M4ExTitle: "Example: Estimate ∛50",
    s6M4Steps: [
      "3³ = 27",
      "4³ = 64",
      "Since 50 is between 27 and 64, ∛50 is between 3 and 4 — closer to 4.",
      "The real answer is about 3.68, so this trick gets you close fast."
    ],

    s7Eyebrow: "Positive Numbers",
    s7Title: "Cube Roots of Positive Numbers",
    s7Intro: "Every positive number has exactly one real cube root, and it's always positive.",
    s7ThNumber: "Number",
    s7ThRoot: "Cube Root",
    s7ThWhy: "Why",
    s7Row8: "2 × 2 × 2 = 8",
    s7Row125: "5 × 5 × 5 = 125",
    s7Row512: "8 × 8 × 8 = 512",
    s7Row10: "Not a whole number, but still a real, exact value",
    s7Conclusion: "Unlike square roots, cube roots don't have a \"second\" answer to worry about — there's only one real cube root for any given number.",

    s8Eyebrow: "Negative Numbers",
    s8Title: "Cube Roots of Negative Numbers (Why They're Real — Unlike Square Roots)",
    s8P1: "Here's the single most important thing that separates cube roots from square roots: you can take the cube root of a negative number, and the answer is a normal, real number.",
    s8P2: "Why does this work when it doesn't for square roots? Because multiplying three negative numbers together gives you a negative result: negative × negative = positive, then positive × negative = negative.",
    s8ExTitle: "Example: ∛(−64)",
    s8ExStep: "∛(−64) = −4, because (−4) × (−4) × (−4) = −64",
    s8Conclusion: "That's the full answer. No \"i,\" no imaginary unit, nothing extra needed.",
    s8WarningTitle: "Key Difference from Square Roots",
    s8WarningText: "Square roots of negative numbers require the imaginary unit i, but cube roots handle negatives just fine on their own.",

    s9Eyebrow: "Comparison",
    s9Title: "Difference Between Racine Cubique and Racine Carrée",
    s9Intro: "A quick side-by-side comparison of 2D vs 3D radicals:",
    s9ThCube: "Cube Root",
    s9ThSquare: "Square Root",
    s9RowSymbol: "Symbol",
    s9RowMult: "Multiplications",
    s9RowMultCube: "3 (x × x × x)",
    s9RowMultSquare: "2 (x × x)",
    s9RowEx: "Example",
    s9RowExCube: "∛64 = 4 (4×4×4=64)",
    s9RowExSquare: "√64 = 8 (8×8=64)",
    s9RowNegative: "Negative numbers",
    s9RowNegativeCube: "Real answer exists (∛-64 = -4)",
    s9RowNegativeSquare: "No real answer (needs \"i\")",

    s10Eyebrow: "Applications",
    s10Title: "Real-Life Applications of Racine Cubique",
    s10Intro: "While square roots deal with 2D problems, cube roots shine whenever the problem involves three dimensions:",
    s10Apps: [
      {
        title: "Architecture & 3D Design",
        text: "Architects and designers use cube roots to find the edge length of cubic spaces from a known volume. For example, ∛64 = 4 m per side for a 64 m³ room."
      },
      {
        title: "Shipping & Packaging",
        text: "Logistics companies calculate box dimensions from a target volume using cube roots to optimize parcel packaging and dimensional weight."
      },
      {
        title: "Physics & Engineering",
        text: "Formulas in fluid dynamics, thermodynamics, and astronomy (such as planetary orbital periods and spherical radii) rely heavily on cube roots."
      },
      {
        title: "Finance & Growth Rates",
        text: "Calculating 3-year compound annual growth rates (CAGR) requires taking the cube root of the total growth multiplier: r = ∛(End/Start) - 1."
      },
      {
        title: "Everyday Measuring & DIY",
        text: "Finding side lengths from container capacities (e.g. aquarium volume, storage bins) without measuring tools."
      }
    ],

    s11Eyebrow: "Simplification",
    s11Title: "Cube Root Simplification Table",
    s11Intro: "Not every cube root is a perfect cube, but many can still be simplified by pulling out any perfect-cube factors.",
    s11ThExpr: "Expression",
    s11ThForm: "Simplified Form",
    s11ThWhy: "Why",
    s11Conclusion: "The trick: find the largest perfect cube that divides evenly into your number, pull it out, and the rest stays under the radical.",

    s12Eyebrow: "Reference Tables",
    s12Title: "Complete Reference Table — Cube Roots 1 to 100",
    s12Intro: "Bookmark this section for quick lookups. Perfect cubes are highlighted in bold with a badge. Values are rounded to three decimal places.",
    s12ScrollHint: "Scroll to see all 100 values ↓",
    s12ColNumber: "Number (n)",
    s12ColRoot: "Cube Root (∛n)",
    s12ColType: "Type",
    s12BadgePerfect: "Perfect Cube",
    s12BadgeIrrational: "Irrational",

    s13Eyebrow: "Perfect Cubes",
    s13Title: "Perfect Cubes — The Essential Memorization List",
    s13Intro: "A perfect cube is a number you get by multiplying a whole number by itself three times. Cubes grow much faster than squares, which is why this list stops at 10.",
    s13Caption: "Perfect cubes: Whole numbers multiplied by themselves three times",

    s14Eyebrow: "FAQs",
    s14Title: "Frequently Asked Questions",

    s15Eyebrow: "Summary",
    s15Title: "A Quick Recap",
    s15BoxTitle: "The Bottom Line",
    s15BoxText: "A cube root answers one question: what number, multiplied by itself three times, gives you this value? That single idea carries you through everything else on this page — notation, formulas, manual methods, and the fact that (unlike square roots) cube roots handle negative numbers without needing anything imaginary. Use the calculator above for a fast, exact answer, and come back here anytime you want to work through the math yourself.",

    quickCalcLabel: "Instant Cube Root",
    quickCalcSublabel: "Click any number for an instant result"
  },

  fr: {
    s1Eyebrow: "Guide Complet",
    s1Title: "Qu'est-ce que la Racine Cubique (Racine Cubique) ?",
    s1P1: "La racine cubique est une opération mathématique essentielle en 3 dimensions. Notre calculateur en ligne ci-dessus vous fournit la réponse en un clic. Ce guide vous explique la définition, les méthodes manuelles et les utilisations concrètes.",
    s1P2: "Une racine cubique est un nombre qui, multiplié par lui-même 3 fois, donne le nombre de départ (3 × 3 × 3 = 27, donc ∛27 = 3).",
    s1P3: "C'est le fondement géométrique du volume d'un cube.",
    s1Cards: [
      { expr: "∛8 = 2", reason: "car 2 × 2 × 2 = 8" },
      { expr: "∛64 = 4", reason: "car 4 × 4 × 4 = 64" },
      { expr: "∛1000 = 10", reason: "car 10 × 10 × 10 = 1 000" }
    ],
    s1Caption: "Visualisation : trouver l'arête d'un cube 3D à partir de son volume",

    s2Eyebrow: "Mode d'Emploi",
    s2Title: "Comment Utiliser le Calculateur de Racine Cubique",
    s2Intro: "Obtenez votre réponse en trois étapes simples :",
    s2Steps: [
      { title: "Entrez le nombre", text: "Tapez le nombre dans le champ ci-dessus." },
      { title: "Cliquez sur Calculer", text: "Appuyez sur le bouton pour lancer le calcul." },
      { title: "Lisez le résultat", text: "Le calculateur affiche le résultat exact avec gestion parfaite des nombres négatifs." }
    ],
    s2Conclusion: "Aucune formule compliquée à mémoriser : le calculateur effectue toutes les étapes pour vous.",

    s3Eyebrow: "Notation",
    s3Title: "Notation : Que Signifie le Symbole ∛ ?",
    s3Intro: "Le symbole ∛ est le radical de la racine cubique avec un indice 3 dans l'encoche.",
    s3Cards: [
      { expr: "∛27", reason: "« racine cubique de 27 »" },
      { expr: "27 = radicande", reason: "Le nombre sous le radical" },
      { expr: "3 = indice", reason: "Le degré de la racine" }
    ],
    s3P1: "La racine cubique s'écrit également sous forme d'exposant fractionnaire :",
    s3P2: "Les deux formes sont équivalentes. En informatique, on utilise x^(1/3).",
    s3P3: "Que vous écriviez ∛x ou x^(1/3), le résultat est rigoureusement le même.",
    s3Caption: "Anatomie d'une racine cubique et ses termes",

    s4Eyebrow: "Formule",
    s4Title: "Quelle Est la Formule de la Racine Cubique ?",
    s4Intro: "La racine cubique est définie par sa relation d'inversion :",
    s4P1: "Quel que soit le résultat obtenu, le multiplier trois fois par lui-même restitue le nombre de départ.",

    s5Eyebrow: "Règles Clés",
    s5Title: "Les Cinq Lois des Racines Cubiques",
    s5Intro: "Ces règles adaptent les lois des radicaux au troisième degré :",
    s5Laws: [
      { name: "Règle du Produit", subtitle: "Séparer les facteurs sous le radical", example: "∛8 × ∛27 = 2 × 3 = 6 = ∛216", explanation: "Permet de décomposer les grands nombres cubiques." },
      { name: "Règle du Quotient", subtitle: "Séparer le numérateur et le dénominateur", example: "∛64 ÷ ∛8 = 4 ÷ 2 = 2 = ∛8", explanation: "Permet d'extraire la racine d'une fraction séparément." },
      { name: "Règle de la Puissance", subtitle: "Le cube et la racine cubique s'annulent", example: "∛(5³) = 5 et ∛((-3)³) = -3", explanation: "Fonctionne pour tous les nombres réels, positifs ou négatifs !" },
      { name: "Élévation au Cube", subtitle: "Le cube de la racine restitue le radicande", example: "(∛5)³ = 5", explanation: "Indispensable pour simplifier et résoudre les équations cubiques." },
      { name: "Valeurs Remarquables", subtitle: "Les racines de 0 et 1 sont fixes", example: "∛1 = 1 et ∛0 = 0", explanation: "Points d'ancrage essentiels de la fonction cubique." }
    ],

    s6Eyebrow: "Méthodes",
    s6Title: "Méthodes pour Calculer une Racine Cubique",
    s6Intro: "Quatre méthodes reconnues :",
    s6M1Title: "1. Ce Calculateur en Ligne (Le Plus Rapide)",
    s6M1Text: "Entrez le nombre et obtenez immédiatement la valeur exacte et les étapes.",
    s6M2Title: "2. Décomposition en Facteurs Premiers",
    s6M2Intro: "Idéal pour les cubes parfaits : regroupez les facteurs premiers par triplets.",
    s6M2ExTitle: "Exemple : Calculer ∛216",
    s6M2Steps: ["216 = 2 × 2 × 2 × 3 × 3 × 3", "Triplets : (2×2×2) × (3×3×3)", "Racine : 2 × 3 = 6"],
    s6M3Title: "3. Méthode de Newton-Raphson",
    s6M3Text: "Algorithme d'approximation itérative utilisé par les calculateurs scientifiques.",
    s6M4Title: "4. Méthode par Estimation et Encadrement",
    s6M4Intro: "Encadrez le nombre entre deux cubes parfaits connus.",
    s6M4ExTitle: "Exemple : Estimer ∛50",
    s6M4Steps: ["3³ = 27", "4³ = 64", "∛50 se situe entre 3 et 4 (environ 3,68)."],

    s7Eyebrow: "Nombres Positifs",
    s7Title: "Racines Cubiques des Nombres Positifs",
    s7Intro: "Tout nombre positif possède exactement une racine cubique réelle, toujours positive.",
    s7ThNumber: "Nombre", s7ThRoot: "Racine Cubique", s7ThWhy: "Justification",
    s7Row8: "2 × 2 × 2 = 8", s7Row125: "5 × 5 × 5 = 125", s7Row512: "8 × 8 × 8 = 512", s7Row10: "Valeur réelle irrationnelle",
    s7Conclusion: "Contrairement à la racine carrée, il n'y a pas de deuxième racine réelle opposée : la solution réelle est unique.",

    s8Eyebrow: "Nombres Négatifs",
    s8Title: "Racines Cubiques de Nombres Négatifs (Des Solutions Bien Réelles !)",
    s8P1: "C'est la différence majeure avec la racine carrée : la racine cubique d'un nombre négatif est un nombre réel parfaitement ordinaire.",
    s8P2: "Pourquoi ? Parce que le produit de trois nombres négatifs est négatif : négatif × négatif = positif, puis positif × négatif = négatif.",
    s8ExTitle: "Exemple : ∛(−64)",
    s8ExStep: "∛(−64) = −4, car (−4) × (−4) × (−4) = −64",
    s8Conclusion: "Pas besoin de nombre imaginaire i : la racine cubique négative est 100% réelle !",
    s8WarningTitle: "Différence Clé avec la Racine Carrée",
    s8WarningText: "La racine carrée d'un nombre négatif exige l'unité imaginaire i, tandis que la racine cubique produit directement un nombre réel.",

    s9Eyebrow: "Comparaison",
    s9Title: "Différence Entre Racine Cubique et Racine Carrée",
    s9Intro: "Comparaison directe entre 2D et 3D :",
    s9ThCube: "Racine Cubique", s9ThSquare: "Racine Carrée",
    s9RowSymbol: "Symbole", s9RowMult: "Multiplications",
    s9RowMultCube: "3 (x × x × x)", s9RowMultSquare: "2 (x × x)",
    s9RowEx: "Exemple", s9RowExCube: "∛64 = 4 (4³=64)", s9RowExSquare: "√64 = 8 (8²=64)",
    s9RowNegative: "Nombres négatifs",
    s9RowNegativeCube: "Solution réelle (∛-64 = -4)", s9RowNegativeSquare: "Pas de solution réelle (unité i)",

    s10Eyebrow: "Applications",
    s10Title: "Applications Concrètes de la Racine Cubique",
    s10Intro: "La racine cubique est omniprésente dès lors qu'interviennent trois dimensions :",
    s10Apps: [
      { title: "Architecture & Modélisation 3D", text: "Calcul de l'arête d'un volume cubique : une pièce de 64 m³ mesure ∛64 = 4 m de côté." },
      { title: "Logistique & Emballage", text: "Optimisation du format des colis et calcul du poids volumétrique." },
      { title: "Physique & Thermodynamique", text: "Lois d'échelle, mécanique des fluides et rayon d'une sphère à partir de son volume." },
      { title: "Finance & Croissance Composée", text: "Taux annuel composé sur 3 ans : r = ∛(valeur finale / initiale) - 1." },
      { title: "Mesures Courantes & Bricolage", text: "Déduire les dimensions d'un réservoir d'eau cubique de 27 litres (30 cm d'arête)." }
    ],

    s11Eyebrow: "Simplification",
    s11Title: "Tableau de Simplification des Racines Cubiques",
    s11Intro: "Sortez les cubes parfaits du radical pour simplifier l'écriture :",
    s11ThExpr: "Expression", s11ThForm: "Forme Simplifiée", s11ThWhy: "Raison",
    s11Conclusion: "Cherchez le plus grand cube parfait qui divise le nombre sous le radical.",

    s12Eyebrow: "Tableaux de Référence",
    s12Title: "Tableau Complet des Racines Cubiques de 1 à 100",
    s12Intro: "Consultez rapidement les valeurs arrondies à 3 décimales avec badges pour les cubes parfaits.",
    s12ScrollHint: "Faites défiler pour voir les 100 valeurs ↓",
    s12ColNumber: "Nombre (n)", s12ColRoot: "Racine (∛n)", s12ColType: "Nature",
    s12BadgePerfect: "Cube Parfait", s12BadgeIrrational: "Irrationnel",

    s13Eyebrow: "Cubes Parfaits",
    s13Title: "Liste Essentielle des Cubes Parfaits",
    s13Intro: "Les cubes parfaits augmentent très vite. Voici les 10 premiers à connaître :",
    s13Caption: "Cubes parfaits : entiers multipliés 3 fois par eux-mêmes",

    s14Eyebrow: "FAQ", s14Title: "Foire Aux Questions",
    s15Eyebrow: "En Bref",
    s15Title: "Récapitulatif",
    s15BoxTitle: "L'Essentiel",
    s15BoxText: "La racine cubique répond à une question simple : quel nombre, multiplié 3 fois par lui-même, donne cette valeur ? Utilisez notre outil ci-dessus pour un calcul immédiat.",

    quickCalcLabel: "Calcul Instantané — Racine Cubique",
    quickCalcSublabel: "Cliquez sur un nombre pour un résultat immédiat"
  },

  es: {
    s1Eyebrow: "Guía Completa",
    s1Title: "¿Qué es la Raíz Cúbica (Racine Cubique)?",
    s1P1: "La raíz cúbica es una operación matemática fundamental para problemas en tres dimensiones. Nuestra calculadora en línea superior te ofrece el resultado al instante con un solo clic. A continuación te explicamos su concepto, cálculo manual y aplicaciones.",
    s1P2: "Una raíz cúbica es aquel número que, multiplicado por sí mismo tres veces, produce el número inicial (3 × 3 × 3 = 27, por lo que ∛27 = 3).",
    s1P3: "Es la base para deducir las aristas de cualquier cuerpo tridimensional.",
    s1Cards: [
      { expr: "∛8 = 2", reason: "porque 2 × 2 × 2 = 8" },
      { expr: "∛64 = 4", reason: "porque 4 × 4 × 4 = 64" },
      { expr: "∛1000 = 10", reason: "porque 10 × 10 × 10 = 1.000" }
    ],
    s1Caption: "Visualización 3D: hallar la arista de un cubo a partir de su volumen",

    s2Eyebrow: "Instrucciones",
    s2Title: "Cómo Usar la Calculadora de Raíz Cúbica",
    s2Intro: "Tres sencillos pasos para resolver tu raíz:",
    s2Steps: [
      { title: "Escribe el número", text: "Introduce el número en el campo superior." },
      { title: "Haz clic en Calcular", text: "Pulsa el botón para procesar la raíz cúbica." },
      { title: "Consulta el resultado", text: "Obtén la solución decimal exacta y simplificada, con soporte para números negativos." }
    ],
    s2Conclusion: "No requiere fórmulas: la herramienta realiza todo el procedimiento por ti.",

    s3Eyebrow: "Notación",
    s3Title: "Notación: ¿Qué Significa el Símbolo ∛?",
    s3Intro: "El símbolo ∛ representa la raíz cúbica con un índice 3 en el gancho del radical.",
    s3Cards: [
      { expr: "∛27", reason: "«la raíz cúbica de 27»" },
      { expr: "27 = radicando", reason: "El número dentro del radical" },
      { expr: "3 = índice", reason: "El grado de la raíz" }
    ],
    s3P1: "También puede representarse como exponente fraccionario:",
    s3P2: "Ambas formas son equivalentes. En programación se usa x^(1/3).",
    s3P3: "Tanto ∛x como x^(1/3) describen la misma operación.",
    s3Caption: "Partes de una expresión de raíz cúbica",

    s4Eyebrow: "Fórmula",
    s4Title: "¿Cuál es la Fórmula de la Raíz Cúbica?",
    s4Intro: "La raíz cúbica se define por su relación inversa con la potencia 3:",
    s4P1: "El número resultante multiplicado tres veces por sí mismo debe dar el valor inicial.",

    s5Eyebrow: "Leyes Clave",
    s5Title: "Las Cinco Leyes de las Raíces Cúbicas",
    s5Intro: "Reglas fundamentales para operar con radicales de tercer grado:",
    s5Laws: [
      { name: "Regla del Producto", subtitle: "Separar factores en el radical", example: "∛8 × ∛27 = 2 × 3 = 6 = ∛216", explanation: "Permite descomponer números cúbicos grandes." },
      { name: "Regla del Cociente", subtitle: "Separar numerador y denominador", example: "∛64 ÷ ∛8 = 4 ÷ 2 = 2 = ∛8", explanation: "Calcula raíces de fracciones término a término." },
      { name: "Regla de la Potencia", subtitle: "El cubo y la raíz cúbica se cancelan", example: "∛(5³) = 5 y ∛((-3)³) = -3", explanation: "¡Válido para todos los números reales, positivos o negativos!" },
      { name: "Elevar al Cubo", subtitle: "El cubo de la raíz devuelve el radicando", example: "(∛5)³ = 5", explanation: "Fundamental para resolver ecuaciones con radicales." },
      { name: "Valores Fijos", subtitle: "Las raíces de 0 y 1 son constantes", example: "∛1 = 1 y ∛0 = 0", explanation: "Puntos de control esenciales en análisis matemático." }
    ],

    s6Eyebrow: "Métodos",
    s6Title: "Métodos para Calcular Raíces Cúbicas",
    s6Intro: "Cuatro métodos tradicionales y modernos:",
    s6M1Title: "1. Calculadora Online (El Más Veloz)",
    s6M1Text: "Escribe el número y obtén la solución exacta en milisegundos.",
    s6M2Title: "2. Descomposición en Factores Primos",
    s6M2Intro: "Ideal para cubos perfectos: agrupa los factores en tríos iguales.",
    s6M2ExTitle: "Ejemplo: Calcular ∛216",
    s6M2Steps: ["216 = 2 × 2 × 2 × 3 × 3 × 3", "Tríos: (2×2×2) × (3×3×3)", "Raíz: 2 × 3 = 6"],
    s6M3Title: "3. Método Newton-Raphson",
    s6M3Text: "Algoritmo numérico iterativo para aproximar decimales con alta precisión.",
    s6M4Title: "4. Estimación Rápida",
    s6M4Intro: "Acota el número entre dos cubos perfectos conocidos.",
    s6M4ExTitle: "Ejemplo: Estimar ∛50",
    s6M4Steps: ["3³ = 27", "4³ = 64", "∛50 está entre 3 y 4 (aprox. 3,68)."],

    s7Eyebrow: "Números Positivos",
    s7Title: "Raíces Cúbicas de Números Positivos",
    s7Intro: "Todo número positivo tiene una única raíz cúbica real positiva.",
    s7ThNumber: "Número", s7ThRoot: "Raíz Cúbica", s7ThWhy: "Razón",
    s7Row8: "2 × 2 × 2 = 8", s7Row125: "5 × 5 × 5 = 125", s7Row512: "8 × 8 × 8 = 512", s7Row10: "Valor real irracional",
    s7Conclusion: "A diferencia de las raíces cuadradas, no existe una segunda solución real.",

    s8Eyebrow: "Números Negativos",
    s8Title: "Raíces Cúbicas de Números Negativos (¡Son Reales!)",
    s8P1: "La gran ventaja de la raíz cúbica: puedes calcular la raíz de un número negativo y el resultado es un número real normal.",
    s8P2: "Esto es posible porque multiplicar tres negativos da un resultado negativo: negativo × negativo = positivo, y positivo × negativo = negativo.",
    s8ExTitle: "Ejemplo: ∛(−64)",
    s8ExStep: "∛(−64) = −4, ya que (−4) × (−4) × (−4) = −64",
    s8Conclusion: "¡No se requiere la unidad imaginaria i! La raíz cúbica de un negativo es real.",
    s8WarningTitle: "Diferencia Crucial con la Raíz Cuadrada",
    s8WarningText: "Las raíces cuadradas de negativos requieren números imaginarios, pero las cúbicas arrojan números reales directamente.",

    s9Eyebrow: "Comparación",
    s9Title: "Diferencia Entre Raíz Cúbica y Raíz Cuadrada",
    s9Intro: "Comparativa entre 2D y 3D:",
    s9ThCube: "Raíz Cúbica", s9ThSquare: "Raíz Cuadrada",
    s9RowSymbol: "Símbolo", s9RowMult: "Multiplicaciones",
    s9RowMultCube: "3 (x × x × x)", s9RowMultSquare: "2 (x × x)",
    s9RowEx: "Ejemplo", s9RowExCube: "∛64 = 4 (4³=64)", s9RowExSquare: "√64 = 8 (8²=64)",
    s9RowNegative: "Números negativos",
    s9RowNegativeCube: "Solución real (∛-64 = -4)", s9RowNegativeSquare: "Sin solución real (requiere i)",

    s10Eyebrow: "Aplicaciones",
    s10Title: "Aplicaciones en la Vida Real",
    s10Intro: "La raíz cúbica es indispensable en el espacio tridimensional:",
    s10Apps: [
      { title: "Arquitectura y 3D", text: "Obtener las dimensiones de un espacio cúbico: una habitación de 64 m³ mide ∛64 = 4 m por lado." },
      { title: "Logística y Envíos", text: "Cálculo de embalajes y peso volumétrico de paquetes." },
      { title: "Física e Ingeniería", text: "Radio de una esfera desde su volumen y leyes de termodinámica." },
      { title: "Finanzas y CAGR", text: "Tasa de crecimiento anual compuesto a 3 años: r = ∛(Final / Inicial) - 1." },
      { title: "Bricolaje y Depósitos", text: "Conocer la arista de un tanque cúbico de 27 litros (arista de 30 cm)." }
    ],

    s11Eyebrow: "Simplificación",
    s11Title: "Tabla de Simplificación de Raíces Cúbicas",
    s11Intro: "Extrae factores cúbicos perfectos para simplificar:",
    s11ThExpr: "Expresión", s11ThForm: "Forma Simplificada", s11ThWhy: "Explicación",
    s11Conclusion: "Encuentra el mayor cubo perfecto que divida exactamente a tu radicando.",

    s12Eyebrow: "Tablas",
    s12Title: "Tabla de Raíces Cúbicas del 1 al 100",
    s12Intro: "Consulta rápida de valores con 3 decimales y destacados para cubos perfectos.",
    s12ScrollHint: "Desplaza para ver los 100 valores ↓",
    s12ColNumber: "Número (n)", s12ColRoot: "Raíz (∛n)", s12ColType: "Tipo",
    s12BadgePerfect: "Cubo Perfecto", s12BadgeIrrational: "Irracional",

    s13Eyebrow: "Cubos Perfectos",
    s13Title: "Lista Esencial de Cubos Perfectos",
    s13Intro: "Los cubos crecen muy deprisa. Conoce los 10 primeros:",
    s13Caption: "Cubos perfectos: enteros multiplicados 3 veces por sí mismos",

    s14Eyebrow: "FAQ", s14Title: "Preguntas Frecuentes",
    s15Eyebrow: "Resumen",
    s15Title: "Conclusión Rápida",
    s15BoxTitle: "Idea Central",
    s15BoxText: "La raíz cúbica resuelve la incógnita: ¿qué número multiplicado 3 veces por sí mismo da este valor? Resuélvelo al instante con nuestra calculadora.",

    quickCalcLabel: "Cálculo Instantáneo — Raíz Cúbica",
    quickCalcSublabel: "Haz clic en un número para un resultado inmediato"
  }
};

import { CBRT_BOILERPLATE_PART2 } from './cbrtBoilerplatePart2';
import { CBRT_BOILERPLATE_PART3 } from './cbrtBoilerplatePart3';

Object.assign(CBRT_BOILERPLATE, CBRT_BOILERPLATE_PART2, CBRT_BOILERPLATE_PART3);

export function getCbrtBoilerplate(lang: string): CbrtBoilerplate {
  return CBRT_BOILERPLATE[lang] || CBRT_BOILERPLATE.en;
}
