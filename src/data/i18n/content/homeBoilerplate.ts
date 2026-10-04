// Full localized educational copy and boilerplate text for Racine Carrée (Square Root) Homepage across all 18 languages

export interface HomeBoilerplate {
  leadTitle: string;
  leadP1: string;
  leadP2: string;
  badgeInstant: string;
  badgeRadical: string;
  badgeSteps: string;
  badgeFree: string;
  quickTryLabel: string;

  // Section 1: What is square root
  s1Eyebrow: string;
  s1Title: string;
  s1P1: string;
  s1P2: string;
  s1P3: string;
  s1Cards: Array<{ expr: string; reason: string }>;
  s1Caption: string;
  s1AnatomyTitle: string;
  s1RadicalSymbol: string;
  s1RadicalSymbolDesc: string;
  s1Radicand: string;
  s1RadicandDesc: string;
  s1Root: string;
  s1RootDesc: string;

  // Section 2: How to use
  s2Eyebrow: string;
  s2Title: string;
  s2Intro: string;
  s2Steps: Array<{ title: string; text: string }>;
  s2Conclusion: string;

  // Section 3: Notation
  s3Eyebrow: string;
  s3Title: string;
  s3Intro: string;
  s3Cards: Array<{ expr: string; reason: string }>;
  s3P1: string;
  s3P2: string;
  s3P3: string;
  s3Caption: string;
  s3ToggleRadical: string;
  s3ToggleExponent: string;
  s3ToggleCode: string;

  // Section 4: Formula
  s4Eyebrow: string;
  s4Title: string;
  s4Intro: string;
  s4P1: string;
  s4PrincipalTitle: string;
  s4PrincipalText: string;

  // Section 5: Properties
  s5Eyebrow: string;
  s5Title: string;
  s5Intro: string;
  s5Laws: Array<{
    name: string;
    subtitle: string;
    example: string;
    explanation: string;
  }>;

  // Section 6: Methods
  s6Eyebrow: string;
  s6Title: string;
  s6Intro: string;
  s6M1Title: string;
  s6M1Text: string;
  s6M1Action: string;
  s6M2Title: string;
  s6M2Intro: string;
  s6M2ExTitle: string;
  s6M2Steps: Array<string>;
  s6M3Title: string;
  s6M3Intro: string;
  s6M3Steps: Array<string>;
  s6M3Text: string;
  s6M4Title: string;
  s6M4Intro: string;
  s6M4ExTitle: string;
  s6M4Steps: Array<string>;
  s6M4Note: string;

  // Section 7: Perfect Squares
  s7Eyebrow: string;
  s7Title: string;
  s7Intro: string;
  s7ThNumber: string;
  s7ThSquare: string;
  s7ThRoot: string;
  s7Conclusion: string;
  s7Caption: string;

  // Section 8: Non-Perfect Squares & Irrationals
  s8Eyebrow: string;
  s8Title: string;
  s8Intro: string;
  s8Text: string;
  s8CalcNote: string;

  // Section 9: Decimals & Fractions
  s9Eyebrow: string;
  s9Title: string;
  s9Intro: string;
  s9DecimalsTitle: string;
  s9DecimalsIntro: string;
  s9FractionsTitle: string;
  s9FractionsIntro: string;
  s9Conclusion: string;

  // Section 10: Negative numbers & Imaginary
  s10Eyebrow: string;
  s10Title: string;
  s10P1: string;
  s10P2: string;
  s10P3: string;
  s10ExTitle: string;
  s10ExStep: string;
  s10Conclusion: string;

  // Section 11: Squaring vs Square root
  s11Eyebrow: string;
  s11Title: string;
  s11Intro: string;
  s11ThOp: string;
  s11ThWhat: string;
  s11ThEx: string;
  s11RowSquare: string;
  s11RowSquareDesc: string;
  s11RowRoot: string;
  s11RowRootDesc: string;
  s11Inverse: string;
  s11Absolute: string;

  // Section 12: Reference Table 1-50
  s12Eyebrow: string;
  s12Title: string;
  s12Intro: string;
  s12ChartLinkText: string;
  s12ScrollHint: string;
  s12ColNumber: string;
  s12ColRoot: string;
  s12ColSimplified: string;
  s12ColType: string;
  s12BadgePerfect: string;
  s12BadgeIrrational: string;
  s12FilterAll: string;
  s12FilterPerfect: string;
  s12FilterIrrational: string;
  s12SearchPlaceholder: string;

  // Section 13: Simplification
  s13Eyebrow: string;
  s13Title: string;
  s13Intro: string;
  s13ThExpr: string;
  s13ThForm: string;
  s13ThWhy: string;
  s13Conclusion: string;

  // Section 14: Applications
  s14Eyebrow: string;
  s14Title: string;
  s14Intro: string;
  s14Apps: Array<{ title: string; text: string }>;

  // Section 15: FAQs
  s15Eyebrow: string;
  s15Title: string;
  s15Faqs: Array<{ question: string; answer: string }>;

  // Section 16: Recap
  s16Eyebrow: string;
  s16Title: string;
  s16BoxTitle: string;
  s16BoxText: string;

  // Compatibility
  quickCalcLabel: string;
  quickCalcSublabel: string;
}

export const HOME_BOILERPLATE: Record<string, HomeBoilerplate> = {
  // 1. English (en)
  en: {
    leadTitle: "Racine Carree Calculator: Free Online Square Root Calculator",
    leadP1: "Use our free Racine Carree Calculator to find the square root of any number instantly. Enter a positive number, decimal, fraction, or even a negative number, and get the exact decimal result, simplified radical form, and step-by-step breakdown in seconds. No sign-up required, no limits, and 100% free.",
    leadP2: "Whether you searched for \"racine carree calculator,\" \"racine carrée calculator,\" or \"square root calculator,\" you have found the right tool. The calculator above gives you the answer in one click, and this guide explains everything you need to know about square roots, from the basic definition to advanced calculation methods.",
    badgeInstant: "Instant Exact Decimals",
    badgeRadical: "Simplified Radical Form",
    badgeSteps: "Step-by-Step Breakdown",
    badgeFree: "100% Free & Unlimited",
    quickTryLabel: "Quick Examples to Try:",

    s1Eyebrow: "Definition & Concept",
    s1Title: "What Is Racine Carrée (Square Root)?",
    s1P1: "Racine carrée is the French term for square root. It is one of the most searched mathematical phrases worldwide, and many students, professionals, and curious learners type \"racine carree calculator\" into search engines when they need a quick way to calculate the square root of a number.",
    s1P2: "A square root is a value that, when multiplied by itself, produces the original number. If you multiply 7 by 7, you get 49. So the square root of 49 is 7. This works because the operation reverses squaring: squaring builds a number up, and the square root brings it back down.",
    s1P3: "In mathematical terms, the square root of a number x is a number y such that y × y = x. This is written as y² = x, which is the inverse relationship between squaring and finding a square root.",
    s1Cards: [
      { expr: "√4 = 2", reason: "because 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "because 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "because 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "because 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "because 10 × 10 = 100" }
    ],
    s1Caption: "Visualizing a square root: Finding the side length of a square from its total area",
    s1AnatomyTitle: "Anatomy of a Square Root Expression",
    s1RadicalSymbol: "Radical Symbol (√)",
    s1RadicalSymbolDesc: "The sign indicating a root operation",
    s1Radicand: "Radicand (Number)",
    s1RadicandDesc: "The number underneath the radical sign (e.g. 49 in √49)",
    s1Root: "Root (Result)",
    s1RootDesc: "The resulting answer (e.g. 7)",

    s2Eyebrow: "How to Use",
    s2Title: "How to Use the Racine Carree Calculator",
    s2Intro: "Getting your answer takes three simple steps:",
    s2Steps: [
      { title: "Type Your Number", text: "Enter any number into the input box above. The calculator accepts whole numbers, decimals, fractions, and negative numbers." },
      { title: "Click Calculate", text: "Press the Calculate button. The calculator processes your input instantly using precise mathematical algorithms." },
      { title: "Read Your Result", text: "The calculator displays the square root as an exact decimal, a simplified radical form when applicable (for example, √72 = 6√2), and a step-by-step breakdown." }
    ],
    s2Conclusion: "That is the entire process. You do not need to know any formulas or methods to use the tool. The rest of this page explains how square roots actually work.",

    s3Eyebrow: "Notation & Exponents",
    s3Title: "Square Root Notation: The √ Symbol and x^(1/2)",
    s3Intro: "The radical sign √ is the standard symbol used in mathematics to represent a square root. When you write √36, you are asking: \"What number multiplied by itself gives 36?\" The answer is 6.",
    s3Cards: [
      { expr: "√", reason: "Radical symbol indicating root extraction" },
      { expr: "36", reason: "Radicand (the input value under the symbol)" },
      { expr: "6", reason: "Root (the principal non-negative result)" }
    ],
    s3P1: "Every square root expression has three parts: the radical symbol (√), the radicand (the number under the symbol), and the root (the evaluated result).",
    s3P2: "You may also see square roots written using exponent notation:",
    s3P3: "Both forms mean exactly the same thing. Calculators and programming languages often use exponent notation x^(1/2) because it is straightforward to compute without special typography. For instance, 49^(1/2) = √49 = 7.",
    s3Caption: "The radical sign √ and its equivalent fractional exponent representation x^(1/2)",
    s3ToggleRadical: "Radical Form (√x)",
    s3ToggleExponent: "Exponent Form (x^½)",
    s3ToggleCode: "Code / Syntax",

    s4Eyebrow: "Core Formula",
    s4Title: "What Is the Square Root Formula?",
    s4Intro: "Unlike geometric formulas like circle area, there is no single formula that directly computes a square root. Instead, a square root is defined by a mathematical relationship:",
    s4P1: "In plain language: whatever number you get as the square root, multiplying it by itself must bring you back to the original number. This fundamental relationship is what every calculation method relies on.",
    s4PrincipalTitle: "The Principal Square Root Convention",
    s4PrincipalText: "The principal square root is the non-negative value that satisfies this relationship. For example, both 5 and -5 satisfy x² = 25, but by international convention, √25 = 5. The radical symbol always denotes the non-negative principal root.",

    s5Eyebrow: "Five Essential Rules",
    s5Title: "Five Essential Properties of Square Roots",
    s5Intro: "These five rules make working with square roots faster and help you simplify complex expressions across algebra, geometry, and engineering:",
    s5Laws: [
      {
        name: "1. Product Rule",
        subtitle: "√(a × b) = √a × √b (for a ≥ 0, b ≥ 0)",
        example: "Example: √(4 × 9) = √4 × √9 = 2 × 3 = 6. And directly: √36 = 6.",
        explanation: "You can split a square root of a product into the product of two square roots. This is how our calculator simplifies √72 into 6√2 by factoring 72 as 36 × 2."
      },
      {
        name: "2. Quotient Rule",
        subtitle: "√(a / b) = √a / √b (for a ≥ 0, b > 0)",
        example: "Example: √(16/4) = √16 / √4 = 4 / 2 = 2. And directly: √4 = 2.",
        explanation: "You can find the square root of a fraction by taking the root of the numerator and denominator separately."
      },
      {
        name: "3. Power Rule",
        subtitle: "√(a²) = |a| (absolute value of a)",
        example: "Example: √(7²) = √49 = 7. Squaring and square rooting cancel out.",
        explanation: "Squaring a number and then taking its square root brings you back to the original magnitude. The absolute value ensures the result remains non-negative."
      },
      {
        name: "4. Self-Multiplication Rule",
        subtitle: "√a × √a = a",
        example: "Example: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Multiplying a square root by itself always returns the radicand. This is essential for rationalizing denominators (e.g., 1/√5 = √5/5)."
      },
      {
        name: "5. Nested Root Rule",
        subtitle: "√(√a) = a^(1/4) (the fourth root of a)",
        example: "Example: √(√16) = √4 = 2. And 16^(1/4) = 2.",
        explanation: "Taking the square root of a square root produces the fourth root of the original number."
      }
    ],

    s6Eyebrow: "Four Methods",
    s6Title: "How to Calculate Square Root: Four Methods",
    s6Intro: "There is more than one way to find the square root of a number. Each method suits different situations:",
    s6M1Title: "Method 1: Using This Racine Carrée Calculator (Fastest)",
    s6M1Text: "Enter your number above and click Calculate. The tool returns the exact decimal result, simplified radical form, and step-by-step breakdown instantly. This is the quickest and most accurate option for any number.",
    s6M1Action: "Jump to Calculator Above",
    s6M2Title: "Method 2: Prime Factorization (Best for Perfect Squares)",
    s6M2Intro: "This method works exceptionally well for whole numbers and perfect squares.",
    s6M2ExTitle: "Prime Factorization Examples",
    s6M2Steps: [
      "1. Break the number down into its prime factors",
      "2. Group identical factors into pairs of two",
      "3. Take one factor from each pair outside the radical sign",
      "4. Multiply the outside factors together (any unpaired factor remains inside)"
    ],
    s6M3Title: "Method 3: Long Division Method (Best for Decimals & Manual Precision)",
    s6M3Intro: "The long division method is a systematic algorithm to find square roots to any number of decimal places without a calculator.",
    s6M3Steps: [
      "1. Group digits in pairs moving left and right from the decimal point",
      "2. Find the largest integer whose square is less than or equal to the leftmost pair",
      "3. Subtract, bring down the next pair of digits, and double the current root",
      "4. Find the next trial digit, append it to the divisor, multiply, and repeat"
    ],
    s6M3Text: "While this method requires pencil-and-paper practice, it gives 100% exact manual results for any positive number.",
    s6M4Title: "Method 4: Estimation Method (Fastest by Hand)",
    s6M4Intro: "When you do not have a calculator and need a quick approximation, use the bounding technique:",
    s6M4ExTitle: "Example: Estimating √50",
    s6M4Steps: [
      "1. Identify the two consecutive perfect squares bounding your number: 49 < 50 < 64 (so 7 < √50 < 8)",
      "2. Observe distance: 50 is very close to 49, so √50 is just above 7",
      "3. Estimate: approximately 7.07 (true value: 7.0711...)"
    ],
    s6M4Note: "This technique forms the basis of the Babylonian method (Newton-Raphson iteration), which refines guesses by averaging x and S/x.",

    s7Eyebrow: "Perfect Squares",
    s7Title: "Perfect Squares: What They Are and Why They Matter",
    s7Intro: "A perfect square is an integer that has an exact whole number as its square root. These numbers result from multiplying an integer by itself.",
    s7ThNumber: "Number (n)",
    s7ThSquare: "Perfect Square (n²)",
    s7ThRoot: "Square Root (√n²)",
    s7Conclusion: "Memorizing the first 20 perfect squares makes mental math with square roots much faster. If you recognize that 144 = 12², you know √144 = 12 instantly.",
    s7Caption: "Square numbers illustrated: geometrical squares of area n² with sides of length n",

    s8Eyebrow: "Irrational Roots",
    s8Title: "Non-Perfect Squares and Irrational Numbers",
    s8Intro: "When a positive integer is not a perfect square, its square root is an irrational number. This means its decimal representation never terminates and never repeats.",
    s8Text: "These numbers are real numbers that cannot be written as a fraction of two integers. They exist alongside mathematical constants like pi (π).",
    s8CalcNote: "Our Racine Carree Calculator computes these to full decimal precision and supplies the exact simplified radical form.",

    s9Eyebrow: "Decimals & Fractions",
    s9Title: "Square Roots of Decimals and Fractions",
    s9Intro: "The square root operation applies to decimals and fractions following standard algebraic principles:",
    s9DecimalsTitle: "Square Roots of Decimals",
    s9DecimalsIntro: "You can find square roots of terminating decimals directly:",
    s9FractionsTitle: "Square Roots of Fractions",
    s9FractionsIntro: "Using the quotient rule, evaluate the numerator and denominator independently:",
    s9Conclusion: "Enter any decimal or fraction into the calculator above to verify your solutions with instant precision.",

    s10Eyebrow: "Complex Numbers",
    s10Title: "Square Roots of Negative Numbers and the Imaginary Unit",
    s10P1: "In real arithmetic, negative numbers do not have real square roots because squaring any real number (positive or negative) always yields a positive number.",
    s10P2: "To overcome this limitation, mathematics defines the imaginary unit i, where i² = -1. Therefore: √(-a) = √a × i for any a > 0.",
    s10P3: "These expressions belong to the complex number system (a + bi), which is fundamental to electrical engineering, quantum mechanics, computer graphics, and signal processing.",
    s10ExTitle: "Negative Root Examples",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Our calculator automatically identifies negative numbers and returns the exact imaginary result.",

    s11Eyebrow: "Inverse Operations",
    s11Title: "The Difference Between Squaring and Square Root",
    s11Intro: "Squaring and taking a square root are inverse mathematical operations, similar to addition and subtraction or multiplication and division.",
    s11ThOp: "Operation",
    s11ThWhat: "What It Does",
    s11ThEx: "Example",
    s11RowSquare: "Squaring (x²)",
    s11RowSquareDesc: "Multiplies a number by itself",
    s11RowRoot: "Square Root (√x)",
    s11RowRootDesc: "Finds what number multiplied by itself gives x",
    s11Inverse: "One operation completely reverses the other: √(8²) = √64 = 8, and (√64)² = 8² = 64.",
    s11Absolute: "Because squaring eliminates negative signs ((-5)² = 25), taking the square root requires the principal root convention: √(a²) = |a|.",

    s12Eyebrow: "Reference Tables",
    s12Title: "Complete Reference Table: Square Roots of 1 to 50",
    s12Intro: "Quick lookup table for numbers from 1 to 50 with exact decimal roots, simplified radical representations, and perfect square indicators.",
    s12ChartLinkText: "Need a full printable square root chart up to 100 or custom ranges? Check our Square Root Chart Generator.",
    s12ScrollHint: "Scroll down to browse all 50 values ↓",
    s12ColNumber: "Number (n)",
    s12ColRoot: "Decimal (√n)",
    s12ColSimplified: "Simplified Radical",
    s12ColType: "Classification",
    s12BadgePerfect: "Perfect Square",
    s12BadgeIrrational: "Irrational",
    s12FilterAll: "All Numbers (1–50)",
    s12FilterPerfect: "Perfect Squares Only",
    s12FilterIrrational: "Irrational Roots Only",
    s12SearchPlaceholder: "Filter numbers or roots (e.g. 25, √2)...",

    s13Eyebrow: "Radical Simplification",
    s13Title: "Square Root Simplification Examples",
    s13Intro: "Simplifying a radical means factoring out all perfect square factors to write the expression in its most compact form:",
    s13ThExpr: "Original Radical",
    s13ThForm: "Simplified Form",
    s13ThWhy: "Factorization & Method",
    s13Conclusion: "The product rule √(a × b) = √a × √b allows extracting perfect square integers from under the radical.",

    s14Eyebrow: "Practical Applications",
    s14Title: "Real-World Applications of Square Roots",
    s14Intro: "Square roots are essential across science, design, finance, and daily problem-solving:",
    s14Apps: [
      { title: "Construction and Architecture", text: "The Pythagorean theorem (a² + b² = c²) uses square roots to compute diagonal lengths, stair slopes, and corner framing (e.g., √(3² + 4²) = 5 meters)." },
      { title: "Finance and Investing", text: "Standard deviation, the primary metric of portfolio volatility and risk, requires calculating the square root of the variance." },
      { title: "Physics and Engineering", text: "Kinetic energy, free-fall velocity (v = √(2gh)), pendulums, and alternating current electrical impedance all rely on square roots." },
      { title: "Computer Science & Cryptography", text: "Distance formulas in 2D/3D graphics, collision detection, machine learning loss functions, and algorithmic complexity √n rely on square root operations." },
      { title: "Everyday Measurement", text: "Finding room or garden perimeter dimensions from floor area: a 64 sq ft room has side length √64 = 8 ft." }
    ],

    s15Eyebrow: "FAQ",
    s15Title: "Frequently Asked Questions",
    s15Faqs: [
      {
        question: "How do I use the Racine Carree Calculator?",
        answer: "Enter your number in the input field above and click Calculate. You will instantly receive the exact decimal result, the simplified radical form (e.g., √72 = 6√2), and a step-by-step breakdown."
      },
      {
        question: "What does \"racine carrée\" mean?",
        answer: "\"Racine carrée\" is the French term for \"square root.\" It translates directly as square root and represents the inverse of squaring a number."
      },
      {
        question: "Can this calculator handle negative numbers?",
        answer: "Yes. When you enter a negative number, the calculator returns the result using the imaginary unit i (e.g., √(-16) = 4i) along with full mathematical steps."
      },
      {
        question: "What is the difference between a square root and a cube root?",
        answer: "A square root finds a number that multiplied by itself twice gives the value (index 2). A cube root finds a number multiplied by itself three times (index 3). Cube roots of negative numbers yield real solutions."
      },
      {
        question: "How do you calculate the square root without a calculator?",
        answer: "You can use prime factorization for perfect squares, the long division method for precise decimals, or the estimation method (averaging / Babylonian method) for quick approximations."
      },
      {
        question: "What is a perfect square?",
        answer: "A perfect square is an integer whose square root is a whole number (e.g., 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Are all square root results rational numbers?",
        answer: "No. Square roots of perfect squares are rational numbers. Square roots of non-perfect squares are irrational numbers with non-repeating, infinite decimal expansions."
      },
      {
        question: "Is this calculator free to use?",
        answer: "Yes. The Racine Carree Calculator is 100% free with unlimited calculations, no registration, and no download required."
      },
      {
        question: "Can I calculate square roots of decimals and fractions?",
        answer: "Yes. Enter any decimal (like 2.25) or fraction, and the calculator computes the exact result using the quotient rule."
      },
      {
        question: "What is the principal square root?",
        answer: "The principal square root is the non-negative square root of a number. By mathematical convention, the √ symbol denotes this positive root."
      }
    ],

    s16Eyebrow: "Summary",
    s16Title: "Quick Summary & Key Takeaways",
    s16BoxTitle: "Essential Concepts to Remember",
    s16BoxText: "A square root answers one fundamental question: what number multiplied by itself gives this value? Use our free Racine Carree Calculator above whenever you need instant precision, and bookmark this guide for study and practical projects.",

    quickCalcLabel: "Instant Calculate",
    quickCalcSublabel: "Click any number for an instant result"
  },

  // 2. French (fr)
  fr: {
    leadTitle: "Calculateur Racine Carrée : Outil en Ligne Gratuit",
    leadP1: "Utilisez notre calculateur gratuit de racine carrée pour trouver instantanément la racine de n'importe quel nombre. Entrez un entier positif, un nombre décimal, une fraction ou un nombre négatif pour obtenir le résultat décimal exact, la forme radicale simplifiée et les étapes de calcul en quelques secondes. Sans inscription, sans limites et 100 % gratuit.",
    leadP2: "Que vous ayez recherché « racine carrée calculateur », « racine carree calculator » ou « square root calculator », vous êtes au bon endroit. L'outil ci-dessus vous donne la réponse en un clic, et ce guide vous explique tout ce qu'il faut savoir sur les racines carrées.",
    badgeInstant: "Décimales Exactes",
    badgeRadical: "Forme Radicale Simplifiée",
    badgeSteps: "Étapes Détaillées",
    badgeFree: "100 % Gratuit et Illimité",
    quickTryLabel: "Exemples Rapides à Tester :",

    s1Eyebrow: "Définition & Notions",
    s1Title: "Qu'est-ce que la Racine Carrée (Square Root) ?",
    s1P1: "La racine carrée (square root en anglais) est l'une des notions mathématiques les plus recherchées au monde. De nombreux étudiants et professionnels recherchent un calculateur de racine carrée pour résoudre rapidement leurs équations.",
    s1P2: "La racine carrée d'un nombre est la valeur qui, multipliée par elle-même, redonne ce nombre de départ. Si vous multipliez 7 par 7, vous obtenez 49. Donc la racine carrée de 49 est 7. Cette opération inverse l'élévation au carré.",
    s1P3: "En termes mathématiques, la racine carrée d'un nombre x est le nombre y tel que y × y = x (ou y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "car 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "car 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "car 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "car 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "car 10 × 10 = 100" }
    ],
    s1Caption: "Visualisation : Trouver la longueur du côté d'un carré à partir de son aire totale",
    s1AnatomyTitle: "Anatomie d'une Expression sous Radical",
    s1RadicalSymbol: "Symbole du Radical (√)",
    s1RadicalSymbolDesc: "Le signe mathématique indiquant l'extraction de racine",
    s1Radicand: "Radicande (Nombre)",
    s1RadicandDesc: "Le nombre situé sous le radical (ex. 49 dans √49)",
    s1Root: "Racine (Résultat)",
    s1RootDesc: "Le résultat obtenu (ex. 7)",

    s2Eyebrow: "Mode d'Emploi",
    s2Title: "Comment Utiliser le Calculateur Racine Carrée",
    s2Intro: "Trois étapes suffisent pour obtenir votre résultat :",
    s2Steps: [
      { title: "Entrez Votre Nombre", text: "Saisissez n'importe quelle valeur (entier, décimal, fraction ou négatif) dans le champ ci-dessus." },
      { title: "Cliquez sur Calculer", text: "Appuyez sur le bouton Calculer pour traiter immédiatement votre valeur avec une précision absolue." },
      { title: "Lisez Votre Résultat", text: "Le calculateur affiche le résultat décimal, la forme radicale simplifiée (ex. √72 = 6√2) et le détail étape par étape." }
    ],
    s2Conclusion: "C'est aussi simple que cela. Aucune formule préalable n'est requise pour utiliser l'outil en ligne.",

    s3Eyebrow: "Notation & Exposants",
    s3Title: "Notation de la Racine Carrée : Le Symbole √ et x^(1/2)",
    s3Intro: "Le symbole √ s'appelle le radical. Lorsque vous écrivez √36, vous vous demandez quel nombre multiplié par lui-même donne 36. La réponse est 6.",
    s3Cards: [
      { expr: "√", reason: "Symbole radical de l'opération" },
      { expr: "36", reason: "Radicande sous le symbole" },
      { expr: "6", reason: "Racine principale non négative" }
    ],
    s3P1: "Une expression de racine carrée comporte trois éléments : le symbole radical (√), le radicande (le nombre sous la racine) et la racine (le résultat).",
    s3P2: "On peut également écrire une racine carrée sous forme d'exposant fractionnaire :",
    s3P3: "Ces deux formes sont strictement équivalentes. Les calculatrices et langages de programmation utilisent fréquemment x^(1/2) car cette forme est simple à manipuler.",
    s3Caption: "Équivalence entre le symbole radical √ et l'exposant fractionnaire x^(1/2)",
    s3ToggleRadical: "Forme Radicale (√x)",
    s3ToggleExponent: "Forme Exposant (x^½)",
    s3ToggleCode: "Code / Syntaxe",

    s4Eyebrow: "Formule Fondamentale",
    s4Title: "Quelle Est la Formule de la Racine Carrée ?",
    s4Intro: "Contrairement à l'aire d'un disque, il n'y a pas une seule formule de calcul direct. La racine carrée est définie par une relation réciproque :",
    s4P1: "En clair : quel que soit le nombre trouvé, le multiplier par lui-même doit redonner le nombre d'origine. C'est sur cette relation que reposent tous les algorithmes de calcul.",
    s4PrincipalTitle: "Convention de la Racine Carrée Principale",
    s4PrincipalText: "La racine carrée principale est la valeur non négative qui vérifie la relation. Par exemple, 5 et -5 vérifient tous deux x² = 25, mais par convention internationale, √25 = 5.",

    s5Eyebrow: "Propriétés Clés",
    s5Title: "Les Cinq Propriétés Essentielles des Racines Carrées",
    s5Intro: "Ces cinq règles permettent de simplifier et de manipuler rapidement les radicaux en algèbre et en géométrie :",
    s5Laws: [
      {
        name: "1. Règle du Produit",
        subtitle: "√(a × b) = √a × √b (pour a ≥ 0, b ≥ 0)",
        example: "Exemple : √(4 × 9) = √4 × √9 = 2 × 3 = 6. Et directement : √36 = 6.",
        explanation: "Permet de décomposer une racine en facteurs pour la simplifier (ex. √72 = √(36 × 2) = 6√2)."
      },
      {
        name: "2. Règle du Quotient",
        subtitle: "√(a / b) = √a / √b (pour a ≥ 0, b > 0)",
        example: "Exemple : √(16/4) = √16 / √4 = 4 / 2 = 2. Et directement : √4 = 2.",
        explanation: "Permet de calculer la racine d'une fraction en séparant le numérateur et le dénominateur."
      },
      {
        name: "3. Règle de la Puissance",
        subtitle: "√(a²) = |a| (valeur absolue de a)",
        example: "Exemple : √(7²) = √49 = 7. Le carré et la racine s'annulent.",
        explanation: "Élever au carré puis extraire la racine redonne la valeur initiale en valeur absolue."
      },
      {
        name: "4. Auto-Multiplication",
        subtitle: "√a × √a = a",
        example: "Exemple : √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Multiplier une racine par elle-même redonne le radicande. Essentiel pour rendre rationnel un dénominateur (1/√5 = √5/5)."
      },
      {
        name: "5. Racines Imbriquées",
        subtitle: "√(√a) = a^(1/4) (racine quatrième)",
        example: "Exemple : √(√16) = √4 = 2. Et 16^(1/4) = 2.",
        explanation: "Prendre la racine d'une racine donne la racine quatrième du nombre initial."
      }
    ],

    s6Eyebrow: "Méthodes de Calcul",
    s6Title: "Comment Calculer une Racine Carrée : 4 Méthodes",
    s6Intro: "Il existe plusieurs techniques pour déterminer une racine carrée selon la situation :",
    s6M1Title: "Méthode 1 : Avec ce Calculateur Racine Carrée (Le plus rapide)",
    s6M1Text: "Entrez votre nombre ci-dessus et cliquez sur Calculer. L'outil vous donne instantanément le résultat décimal exact et la forme simplifiée.",
    s6M1Action: "Remonter au Calculateur",
    s6M2Title: "Méthode 2 : Décomposition en Facteurs Premiers (Carrés Parfaits)",
    s6M2Intro: "Idéale pour les nombres entiers et les carrés parfaits.",
    s6M2ExTitle: "Exemples de Décomposition",
    s6M2Steps: [
      "1. Décomposez le nombre en produit de facteurs premiers",
      "2. Regroupez les facteurs identiques par paires",
      "3. Sortez un facteur de chaque paire hors du radical",
      "4. Multipliez entre eux les facteurs sortis"
    ],
    s6M3Title: "Méthode 3 : Méthode de la Potence / Division Longue",
    s6M3Intro: "Algorithme systématique pour calculer une racine carrée manuellement avec une précision infinie.",
    s6M3Steps: [
      "1. Séparez les chiffres par paires de part et d'autre de la virgule",
      "2. Trouvez le plus grand entier dont le carré est inférieur ou égal à la première tranche",
      "3. Soustrayez, abaissez la tranche suivante et doublez la racine provisoire",
      "4. Déterminez le chiffre suivant et répétez le processus"
    ],
    s6M3Text: "Cette méthode manuelle permet d'extraire la racine de tout nombre décimal sans calculatrice.",
    s6M4Title: "Méthode 4 : Méthode d'Estimation (Calcul Mental Rapide)",
    s6M4Intro: "Pour obtenir rapidement un ordre de grandeur sans outil électronique :",
    s6M4ExTitle: "Exemple : Estimer √50",
    s6M4Steps: [
      "1. Repérez les deux carrés parfaits encadrants : 49 < 50 < 64 (donc 7 < √50 < 8)",
      "2. 50 étant très proche de 49, √50 est très légèrement supérieur à 7",
      "3. Estimation : environ 7,07 (valeur exacte : 7,0711...)"
    ],
    s6M4Note: "Cette approche est à la base de la méthode babylonienne (algorithme de Héron / Newton-Raphson).",

    s7Eyebrow: "Carrés Parfaits",
    s7Title: "Les Carrés Parfaits : Définition et Utilité",
    s7Intro: "Un carré parfait est un entier dont la racine carrée est un nombre entier exact. Il s'obtient en multipliant un entier par lui-même.",
    s7ThNumber: "Nombre (n)",
    s7ThSquare: "Carré Parfait (n²)",
    s7ThRoot: "Racine Carrée (√n²)",
    s7Conclusion: "Connaître les 20 premiers carrés parfaits accélère considérablement le calcul mental (ex. reconnaître que 144 = 12² donne immédiatement √144 = 12).",
    s7Caption: "Représentation géométrique des carrés parfaits de côté n et d'aire n²",

    s8Eyebrow: "Nombres Irrationnels",
    s8Title: "Nombres Non-Carrés Parfaits et Racines Irrationnelles",
    s8Intro: "Lorsqu'un nombre n'est pas un carré parfait, sa racine carrée est un nombre irrationnel : son écriture décimale est infinie et non périodique.",
    s8Text: "Ces nombres réels ne peuvent pas s'écrire sous forme de fraction simple de deux entiers, tout comme pi (π).",
    s8CalcNote: "Notre calculateur vous donne à la fois l'approximation décimale haute précision et la forme radicale exacte.",

    s9Eyebrow: "Décimaux & Fractions",
    s9Title: "Racines Carrées de Décimaux et de Fractions",
    s9Intro: "La racine carrée s'applique naturellement aux décimaux et aux fractions :",
    s9DecimalsTitle: "Racines de Décimaux",
    s9DecimalsIntro: "Les décimaux se calculent directement en tenant compte des chiffres après la virgule :",
    s9FractionsTitle: "Racines de Fractions",
    s9FractionsIntro: "Grâce à la règle du quotient, calculez séparément le numérateur et le dénominateur :",
    s9Conclusion: "Entrez n'importe quelle fraction ou décimal dans le calculateur ci-dessus pour vérifier vos calculs.",

    s10Eyebrow: "Nombres Complexes",
    s10Title: "Racines Carrées de Nombres Négatifs et Unité Imaginaire i",
    s10P1: "Dans l'ensemble des réels, les nombres négatifs n'ont pas de racine carrée car le carré de tout nombre réel est positif.",
    s10P2: "Pour résoudre cela, les mathématiques définissent l'unité imaginaire i (telle que i² = -1). Ainsi : √(-a) = √a × i pour tout a > 0.",
    s10P3: "Ces nombres appartiennent à l'ensemble des nombres complexes (a + bi), indispensables en électricité, en physique quantique et en traitement du signal.",
    s10ExTitle: "Exemples avec Nombres Négatifs",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Notre calculateur traite automatiquement les nombres négatifs et donne le résultat imaginaire exact.",

    s11Eyebrow: "Opérations Inverses",
    s11Title: "Différence Entre Carré et Racine Carrée",
    s11Intro: "L'élévation au carré et l'extraction de racine sont deux opérations réciproques, comme l'addition et la soustraction.",
    s11ThOp: "Opération",
    s11ThWhat: "Ce qu'elle fait",
    s11ThEx: "Exemple",
    s11RowSquare: "Élévation au Carré (x²)",
    s11RowSquareDesc: "Multiplie un nombre par lui-même",
    s11RowRoot: "Racine Carrée (√x)",
    s11RowRootDesc: "Trouve le nombre qui multiplié par lui-même donne x",
    s11Inverse: "Une opération annule directement l'autre : √(8²) = √64 = 8, et (√64)² = 8² = 64.",
    s11Absolute: "L'élévation au carré supprimant les signes négatifs, la convention principale impose √(a²) = |a|.",

    s12Eyebrow: "Tableaux de Référence",
    s12Title: "Tableau Complet des Racines Carrées de 1 à 50",
    s12Intro: "Tableau pratique de consultation rapide avec décimales exactes, formes simplifiées et identification des carrés parfaits.",
    s12ChartLinkText: "Besoin d'un tableau imprimable jusqu'à 100 ou personnalisé ? Consultez notre Générateur de Tableaux.",
    s12ScrollHint: "Faites défiler vers le bas pour explorer les 50 valeurs ↓",
    s12ColNumber: "Nombre (n)",
    s12ColRoot: "Décimal (√n)",
    s12ColSimplified: "Forme Simplifiée",
    s12ColType: "Classification",
    s12BadgePerfect: "Carré Parfait",
    s12BadgeIrrational: "Irrationnel",
    s12FilterAll: "Tous les Nombres (1–50)",
    s12FilterPerfect: "Carrés Parfaits Uniquement",
    s12FilterIrrational: "Racines Irrationnelles",
    s12SearchPlaceholder: "Filtrer un nombre ou une racine (ex. 25, √2)...",

    s13Eyebrow: "Simplification",
    s13Title: "Exemples de Simplification de Radicaux",
    s13Intro: "Simplifier un radical consiste à extraire le plus grand carré parfait diviseur du radicande :",
    s13ThExpr: "Radical Initial",
    s13ThForm: "Forme Simplifiée",
    s13ThWhy: "Décomposition & Explication",
    s13Conclusion: "La règle du produit √(a × b) = √a × √b permet d'extraire les entiers carrés parfaits hors de la racine.",

    s14Eyebrow: "Applications Concrètes",
    s14Title: "Applications Réelles des Racines Carrées",
    s14Intro: "Les racines carrées sont indispensables dans de nombreux domaines professionnels et quotidiens :",
    s14Apps: [
      { title: "Bâtiment et Architecture", text: "Le théorème de Pythagore (a² + b² = c²) utilise la racine carrée pour vérifier les angles droits, rampes et diagonales (ex. √(3² + 4²) = 5 m)." },
      { title: "Finance et Gestion de Portefeuille", text: "L'écart-type, mesure fondamentale de la volatilité et du risque d'un investissement, est calculé comme la racine carrée de la variance." },
      { title: "Physique et Ingénierie", text: "Vitesse de chute libre (v = √(2gh)), oscillations d'un pendule et impédance en courant alternatif font tous appel aux racines." },
      { title: "Informatique et Cryptographie", text: "Calcul de distances euclidiennes dans les jeux vidéo 3D, détection de collisions et algorithmes de complexité √n." },
      { title: "Mesures du Quotidien", text: "Déduire la longueur d'une pièce à partir de sa surface : une pièce de 64 m² a des côtés de √64 = 8 m." }
    ],

    s15Eyebrow: "Questions Fréquentes",
    s15Title: "Foire Aux Questions (FAQ)",
    s15Faqs: [
      {
        question: "Comment utiliser le Calculateur Racine Carrée ?",
        answer: "Entrez votre nombre dans le champ de saisie ci-dessus et cliquez sur Calculer. Vous obtiendrez immédiatement le résultat décimal exact, la forme simplifiée (ex. √72 = 6√2) et le détail étape par étape."
      },
      {
        question: "Que signifie le terme « racine carrée » ?",
        answer: "« Racine carrée » (square root en anglais) désigne l'opération inverse du carré d'un nombre : la valeur qui, multipliée par elle-même, redonne le nombre initial."
      },
      {
        question: "Le calculateur peut-il traiter les nombres négatifs ?",
        answer: "Oui. En arithmétique complexe, entrer un nombre négatif renvoie le résultat avec l'unité imaginaire i (ex. √(-16) = 4i) avec toutes les explications."
      },
      {
        question: "Quelle est la différence entre racine carrée et racine cubique ?",
        answer: "La racine carrée recherche le nombre multiplié par lui-même 2 fois (indice 2). La racine cubique recherche le nombre multiplié 3 fois (indice 3), et admet des solutions réelles pour les nombres négatifs."
      },
      {
        question: "Comment calculer une racine carrée sans calculatrice ?",
        answer: "Vous pouvez utiliser la décomposition en facteurs premiers pour les carrés parfaits, la méthode de la potence pour les décimaux, ou la méthode d'estimation (méthode babylonienne)."
      },
      {
        question: "Qu'est-ce qu'un carré parfait ?",
        answer: "Un carré parfait est un entier dont la racine carrée est un nombre entier (ex. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Toutes les racines carrées sont-elles des nombres rationnels ?",
        answer: "Non. Seules les racines de carrés parfaits sont rationnelles. La racine d'un entier non-carré parfait est un nombre irrationnel avec une infinité de décimales non périodiques."
      },
      {
        question: "Ce calculateur est-il gratuit ?",
        answer: "Oui, notre Calculateur Racine Carrée est 100 % gratuit, sans inscription, sans limite et fonctionne directement dans votre navigateur."
      },
      {
        question: "Peut-on calculer la racine de nombres décimaux et de fractions ?",
        answer: "Oui. Saisissez n'importe quel décimal ou fraction : le calculateur applique les règles algébriques pour afficher le résultat exact."
      },
      {
        question: "Qu'est-ce que la racine carrée principale ?",
        answer: "C'est la solution positive (non négative) d'une équation quadratique x² = a. Par convention, le symbole √ renvoie toujours cette racine principale."
      }
    ],

    s16Eyebrow: "Résumé",
    s16Title: "En Résumé : L'Essentiel à Retenir",
    s16BoxTitle: "Principes Clés",
    s16BoxText: "La racine carrée répond à une question simple : quel nombre multiplié par lui-même donne cette valeur ? Utilisez notre calculateur gratuit ci-dessus pour des réponses instantanées et précises.",

    quickCalcLabel: "Calcul Instantané",
    quickCalcSublabel: "Cliquez sur un nombre pour un résultat immédiat"
  },

  // 3. Spanish (es)
  es: {
    leadTitle: "Calculadora de Raíz Cuadrada (Racine Carree): Gratis en Línea",
    leadP1: "Utiliza nuestra Calculadora de Raíz Cuadrada gratuita para hallar la raíz de cualquier número al instante. Introduce números enteros, decimales, fracciones o negativos y obtén el resultado decimal exacto, la forma radical simplificada y los pasos detallados. 100% gratis y sin límites.",
    leadP2: "Tanto si buscaste «racine carree calculator», «calculadora de raíz cuadrada» o «square root calculator», estás en el lugar adecuado. La herramienta superior te da la respuesta en un clic y esta guía te explica todo sobre las raíces cuadradas.",
    badgeInstant: "Decimales Exactos",
    badgeRadical: "Forma Radical Simplificada",
    badgeSteps: "Pasos Detallados",
    badgeFree: "100% Gratis e Ilimitado",
    quickTryLabel: "Ejemplos Rápidos para Probar:",

    s1Eyebrow: "Definición y Concepto",
    s1Title: "¿Qué es la Raíz Cuadrada (Racine Carrée)?",
    s1P1: "Racine carrée es el término en francés para raíz cuadrada. Es una de las expresiones matemáticas más buscadas en todo el mundo por estudiantes y profesionales que necesitan resolver cálculos rápidamente.",
    s1P2: "Una raíz cuadrada es un valor que, al multiplicarse por sí mismo, da como resultado el número original. Si multiplicas 7 por 7, obtienes 49. Por lo tanto, la raíz cuadrada de 49 es 7. Esta operación es la inversa de elevar al cuadrado.",
    s1P3: "En términos algebraicos, la raíz cuadrada de x es un número y tal que y × y = x (o y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "porque 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "porque 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "porque 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "porque 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "porque 10 × 10 = 100" }
    ],
    s1Caption: "Visualización: Hallar la longitud del lado de un cuadrado a partir de su área total",
    s1AnatomyTitle: "Anatomía de una Expresión Radical",
    s1RadicalSymbol: "Símbolo Radical (√)",
    s1RadicalSymbolDesc: "El signo que indica la operación de extracción de raíz",
    s1Radicand: "Radicando (Número)",
    s1RadicandDesc: "El número bajo el signo radical (ej. 49 en √49)",
    s1Root: "Raíz (Resultado)",
    s1RootDesc: "El resultado evaluado (ej. 7)",

    s2Eyebrow: "Instrucciones",
    s2Title: "Cómo Usar la Calculadora de Raíz Cuadrada",
    s2Intro: "Obtener tu respuesta requiere solo tres sencillos pasos:",
    s2Steps: [
      { title: "Escribe tu Número", text: "Introduce cualquier valor (entero, decimal, fracción o negativo) en la casilla superior." },
      { title: "Haz Clic en Calcular", text: "Pulsa el botón Calcular para procesar tu cifra de forma inmediata." },
      { title: "Lee tu Resultado", text: "La calculadora muestra el resultado decimal exacto, la forma simplificada (ej. √72 = 6√2) y los pasos." }
    ],
    s2Conclusion: "Ese es todo el proceso. No necesitas memorizar fórmulas complejas para usar nuestra herramienta.",

    s3Eyebrow: "Notación y Exponentes",
    s3Title: "Notación de Raíz Cuadrada: El Símbolo √ y x^(1/2)",
    s3Intro: "El símbolo √ es el radical estándar. Al escribir √36, te preguntas: ¿qué número multiplicado por sí mismo da 36? La respuesta es 6.",
    s3Cards: [
      { expr: "√", reason: "Símbolo radical de la operación" },
      { expr: "36", reason: "Radicando bajo el símbolo" },
      { expr: "6", reason: "Raíz principal no negativa" }
    ],
    s3P1: "Toda expresión de raíz cuadrada consta de tres partes: el radical (√), el radicando (el valor evaluado) y la raíz (el resultado).",
    s3P2: "También se puede expresar una raíz cuadrada mediante exponentes fraccionarios:",
    s3P3: "Ambas expresiones significan exactamente lo mismo. Las calculadoras y lenguajes de programación usan con frecuencia x^(1/2) por facilidad de escritura.",
    s3Caption: "Correspondencia entre el símbolo radical √ y el exponente fraccionario x^(1/2)",
    s3ToggleRadical: "Forma Radical (√x)",
    s3ToggleExponent: "Forma Exponente (x^½)",
    s3ToggleCode: "Código / Sintaxis",

    s4Eyebrow: "Fórmula Esencial",
    s4Title: "¿Cuál es la Fórmula de la Raíz Cuadrada?",
    s4Intro: "A diferencia del área de una figura, no existe una fórmula directa única. Una raíz cuadrada se define por una relación matemática inversa:",
    s4P1: "En palabras simples: cualquier número que obtengas como raíz, al multiplicarlo por sí mismo, debe devolverte el número inicial.",
    s4PrincipalTitle: "Convención de la Raíz Cuadrada Principal",
    s4PrincipalText: "La raíz cuadrada principal es el valor no negativo que satisface la igualdad. Tanto 5 como -5 cumplen x² = 25, pero por convenio universal, √25 = 5.",

    s5Eyebrow: "Propiedades Clave",
    s5Title: "Cinco Propiedades Esenciales de las Raíces Cuadradas",
    s5Intro: "Estas cinco reglas te permiten simplificar expresiones y operar con rapidez en álgebra y geometría:",
    s5Laws: [
      {
        name: "1. Regla del Producto",
        subtitle: "√(a × b) = √a × √b (para a ≥ 0, b ≥ 0)",
        example: "Ejemplo: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Directo: √36 = 6.",
        explanation: "Permite separar una raíz en factores para simplificarla (ej. √72 = √(36 × 2) = 6√2)."
      },
      {
        name: "2. Regla del Cociente",
        subtitle: "√(a / b) = √a / √b (para a ≥ 0, b > 0)",
        example: "Ejemplo: √(16/4) = √16 / √4 = 4 / 2 = 2. Directo: √4 = 2.",
        explanation: "Permite calcular la raíz de una fracción calculando numerador y denominador por separado."
      },
      {
        name: "3. Regla de la Potencia",
        subtitle: "√(a²) = |a| (valor absoluto de a)",
        example: "Ejemplo: √(7²) = √49 = 7. El cuadrado y la raíz se cancelan.",
        explanation: "Elevar al cuadrado y sacar la raíz devuelve el número original en valor absoluto."
      },
      {
        name: "4. Multiplicación por Sí Misma",
        subtitle: "√a × √a = a",
        example: "Ejemplo: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Multiplicar una raíz por sí misma devuelve el radicando. Clave para racionalizar denominadores (1/√5 = √5/5)."
      },
      {
        name: "5. Raíz de una Raíz",
        subtitle: "√(√a) = a^(1/4) (raíz cuarta)",
        example: "Ejemplo: √(√16) = √4 = 2. Y 16^(1/4) = 2.",
        explanation: "La raíz cuadrada de otra raíz cuadrada equivale a la raíz cuarta del radicando."
      }
    ],

    s6Eyebrow: "Métodos de Cálculo",
    s6Title: "Cómo Calcular una Raíz Cuadrada: Cuatro Métodos",
    s6Intro: "Existen diferentes métodos para calcular raíces según tus necesidades:",
    s6M1Title: "Método 1: Con esta Calculadora (El más rápido)",
    s6M1Text: "Introduce tu número arriba y haz clic en Calcular. Recibirás de inmediato el decimal exacto y la forma simplificada.",
    s6M1Action: "Ir a la Calculadora",
    s6M2Title: "Método 2: Factorización Prima (Para Cuadrados Perfectos)",
    s6M2Intro: "Excelente para números enteros y cuadrados perfectos.",
    s6M2ExTitle: "Ejemplos de Factorización",
    s6M2Steps: [
      "1. Descompón el número en sus factores primos",
      "2. Agrupa los factores idénticos en parejas",
      "3. Extrae un factor de cada pareja fuera del radical",
      "4. Multiplica los factores que quedaron fuera"
    ],
    s6M3Title: "Método 3: División Larga (Manual con Decimales Exactos)",
    s6M3Intro: "Algoritmo tradicional para resolver raíces a mano con cualquier precisión decimal.",
    s6M3Steps: [
      "1. Separa los dígitos en parejas desde el punto decimal hacia ambos lados",
      "2. Halla el mayor entero cuyo cuadrado sea menor o igual al primer grupo",
      "3. Resta, baja la siguiente pareja y duplica la raíz obtenida",
      "4. Encuentra el dígito de prueba y repite el proceso"
    ],
    s6M3Text: "Este método sistemático permite hallar la raíz exacta de cualquier número sin calculadora.",
    s6M4Title: "Método 4: Estimación (Cálculo Mental Rápido)",
    s6M4Intro: "Ideal cuando necesitas una aproximación rápida sin calculadora:",
    s6M4ExTitle: "Ejemplo: Estimar √50",
    s6M4Steps: [
      "1. Encuentra los cuadrados perfectos que encierran tu número: 49 < 50 < 64 (luego 7 < √50 < 8)",
      "2. Al estar 50 muy cerca de 49, √50 está apenas por encima de 7",
      "3. Estimación: aprox. 7,07 (valor real: 7,0711...)"
    ],
    s6M4Note: "Esta base da origen al método babilónico (algoritmo de Herón / Newton-Raphson).",

    s7Eyebrow: "Cuadrados Perfectos",
    s7Title: "Cuadrados Perfectos: Qué Son y su Importancia",
    s7Intro: "Un cuadrado perfecto es un número entero cuya raíz cuadrada es un entero exacto. Se obtienen al multiplicar un entero por sí mismo.",
    s7ThNumber: "Número (n)",
    s7ThSquare: "Cuadrado Perfecto (n²)",
    s7ThRoot: "Raíz Cuadrada (√n²)",
    s7Conclusion: "Memorizar los primeros 20 cuadrados perfectos agiliza enormemente el cálculo mental (ej. saber que 144 = 12² te permite saber que √144 = 12 sin dudar).",
    s7Caption: "Representación geométrica: figuras cuadradas de lado n y superficie n²",

    s8Eyebrow: "Números Irracionales",
    s8Title: "Números No Cuadrados Perfectos y Raíces Irracionales",
    s8Intro: "Cuando un número entero no es un cuadrado perfecto, su raíz es un número irracional: su desarrollo decimal es infinito y no periódico.",
    s8Text: "Son números reales que no pueden expresarse como cociente de dos enteros, al igual que el número pi (π).",
    s8CalcNote: "Nuestra calculadora te proporciona tanto la aproximación decimal de alta precisión como la forma radical simplificada.",

    s9Eyebrow: "Decimales y Fracciones",
    s9Title: "Raíces Cuadradas de Decimales y Fracciones",
    s9Intro: "La raíz cuadrada opera sobre decimales y fracciones con total rigor algebraico:",
    s9DecimalsTitle: "Raíces de Números Decimales",
    s9DecimalsIntro: "Se calculan directamente evaluando la posición decimal:",
    s9FractionsTitle: "Raíces de Fracciones",
    s9FractionsIntro: "Con la regla del cociente, extrae la raíz del numerador y del denominador independientemente:",
    s9Conclusion: "Prueba cualquier fracción o decimal en la calculadora superior para verificar tus ejercicios.",

    s10Eyebrow: "Números Complejos",
    s10Title: "Raíces de Números Negativos y la Unidad Imaginaria i",
    s10P1: "En los números reales, los números negativos no tienen raíz cuadrada porque el cuadrado de cualquier número real siempre es positivo.",
    s10P2: "Para solucionarlo, las matemáticas introducen la unidad imaginaria i, definida por i² = -1. Por tanto: √(-a) = √a × i para todo a > 0.",
    s10P3: "Estos valores forman los números complejos (a + bi), esenciales en ingeniería eléctrica, mecánica cuántica y procesamiento digital.",
    s10ExTitle: "Ejemplos con Números Negativos",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Nuestra calculadora identifica automáticamente números negativos y devuelve la solución imaginaria con explicación paso a paso.",

    s11Eyebrow: "Operaciones Inversas",
    s11Title: "Diferencia Entre Elevar al Cuadrado y Raíz Cuadrada",
    s11Intro: "Elevar al cuadrado y hallar la raíz son operaciones opuestas, como la suma y la resta.",
    s11ThOp: "Operación",
    s11ThWhat: "Qué hace",
    s11ThEx: "Ejemplo",
    s11RowSquare: "Cuadrado (x²)",
    s11RowSquareDesc: "Multiplica un número por sí mismo",
    s11RowRoot: "Raíz Cuadrada (√x)",
    s11RowRootDesc: "Halla qué número multiplicado por sí mismo da x",
    s11Inverse: "Una operación cancela a la otra: √(8²) = √64 = 8, y (√64)² = 8² = 64.",
    s11Absolute: "Al elevar al cuadrado desaparecen los signos negativos, por lo que la raíz principal aplica √(a²) = |a|.",

    s12Eyebrow: "Tablas de Consulta",
    s12Title: "Tabla Completa de Raíces Cuadradas del 1 al 50",
    s12Intro: "Tabla de referencia rápida del 1 al 50 con raíces decimales precisas, radicales simplificados e indicadores de cuadrados perfectos.",
    s12ChartLinkText: "¿Necesitas una tabla imprimible hasta el 100 o rangos personalizados? Visita nuestro Generador de Tablas.",
    s12ScrollHint: "Desplázate hacia abajo para ver los 50 valores ↓",
    s12ColNumber: "Número (n)",
    s12ColRoot: "Decimal (√n)",
    s12ColSimplified: "Radical Simplificado",
    s12ColType: "Tipo",
    s12BadgePerfect: "Cuadrado Perfecto",
    s12BadgeIrrational: "Irracional",
    s12FilterAll: "Todos los Números (1–50)",
    s12FilterPerfect: "Solo Cuadrados Perfectos",
    s12FilterIrrational: "Solo Raíces Irracionales",
    s12SearchPlaceholder: "Filtrar por número o raíz (ej. 25, √2)...",

    s13Eyebrow: "Simplificación",
    s13Title: "Ejemplos de Simplificación de Radicales",
    s13Intro: "Simplificar un radical implica extraer el mayor cuadrado perfecto divisor del radicando:",
    s13ThExpr: "Radical Original",
    s13ThForm: "Forma Simplificada",
    s13ThWhy: "Factorización y Método",
    s13Conclusion: "La regla del producto permite sacar números enteros fuera del radical conservando el valor exacto.",

    s14Eyebrow: "Aplicaciones Reales",
    s14Title: "Aplicaciones Prácticas de las Raíces Cuadradas",
    s14Intro: "Las raíces cuadradas son cruciales en la ciencia, la ingeniería y la vida real:",
    s14Apps: [
      { title: "Construcción y Arquitectura", text: "El teorema de Pitágoras (a² + b² = c²) emplea raíces cuadradas para calcular diagonales de paredes y pendientes de techos (ej. √(3² + 4²) = 5 m)." },
      { title: "Finanzas e Inversión", text: "La desviación estándar, medida fundamental del riesgo de inversión y volatilidad, se calcula extrayendo la raíz de la varianza." },
      { title: "Física e Ingeniería", text: "Fórmulas de velocidad en caída libre (v = √(2gh)), periodos de oscilación y circuitos de corriente alterna usan raíces." },
      { title: "Informática y Gráficos 3D", text: "Cálculo de distancias euclidianas en videojuegos, algoritmos de búsqueda y complejidad algorítmica √n." },
      { title: "Mediciones Cotidianas", text: "Calcular el lado de una habitación a partir de su superficie: un suelo de 64 m² tiene lados de √64 = 8 m." }
    ],

    s15Eyebrow: "Preguntas Frecuentes",
    s15Title: "Preguntas Frecuentes (FAQ)",
    s15Faqs: [
      {
        question: "¿Cómo uso la Calculadora de Raíz Cuadrada?",
        answer: "Escribe tu número en la casilla superior y haz clic en Calcular. Recibirás al instante el decimal exacto, la forma simplificada (ej. √72 = 6√2) y la descomposición paso a paso."
      },
      {
        question: "¿Qué significa «racine carrée»?",
        answer: "«Racine carrée» es el término en francés para «raíz cuadrada». Muchos usuarios lo buscan directamente para encontrar herramientas de cálculo en línea."
      },
      {
        question: "¿Puede la calculadora calcular raíces de números negativos?",
        answer: "Sí. Devuelve la solución exacta empleando la unidad imaginaria i (ej. √(-16) = 4i) con explicaciones paso a paso."
      },
      {
        question: "¿Cuál es la diferencia entre raíz cuadrada y raíz cúbica?",
        answer: "La raíz cuadrada busca un número multiplicado por sí mismo dos veces (índice 2). La raíz cúbica busca un número multiplicado tres veces (índice 3), y admite soluciones reales negativas."
      },
      {
        question: "¿Cómo calcular la raíz cuadrada sin calculadora?",
        answer: "Mediante factorización prima para cuadrados perfectos, división larga para decimales exactos, o el método de estimación babilónico."
      },
      {
        question: "¿Qué es un cuadrado perfecto?",
        answer: "Un número entero cuya raíz cuadrada es otro número entero (ej. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "¿Todas las raíces son números racionales?",
        answer: "No. Solo las raíces de cuadrados perfectos son racionales. Las de números no cuadrados perfectos son irracionales con infinitos decimales no periódicos."
      },
      {
        question: "¿Es gratis esta calculadora?",
        answer: "Sí. Nuestra calculadora es 100% gratuita, ilimitada, sin descargas y sin necesidad de registro."
      },
      {
        question: "¿Puedo calcular raíces de decimales y fracciones?",
        answer: "Sí. Puedes introducir números decimales o fracciones para resolverlos con exactitud inmediata."
      },
      {
        question: "¿Qué es la raíz cuadrada principal?",
        answer: "Es el valor no negativo que satisface la ecuación. Por convenio internacional, el símbolo √ siempre devuelve la raíz positiva principal."
      }
    ],

    s16Eyebrow: "Resumen",
    s16Title: "Resumen y Puntos Clave",
    s16BoxTitle: "Conceptos Fundamentales",
    s16BoxText: "Una raíz cuadrada responde a una pregunta sencilla: ¿qué número multiplicado por sí mismo da este valor? Utiliza nuestra calculadora gratuita cada vez que necesites precisión y rapidez.",

    quickCalcLabel: "Cálculo Instantáneo",
    quickCalcSublabel: "Haz clic en cualquier número para ver el resultado"
  },

  // 4. German (de)
  de: {
    leadTitle: "Quadratwurzel Rechner (Racine Carree) : Kostenlos Online",
    leadP1: "Nutzen Sie unseren kostenlosen Racine Carree Quadratwurzel-Rechner, um die Wurzel jeder Zahl sofort zu berechnen. Geben Sie ganze Zahlen, Dezimalzahlen, Brüche oder negative Zahlen ein und erhalten Sie das exakte Dezimalergebnis, die vereinfachte Wurzelform und Rechenschritte in Sekundenschnelle. 100% kostenlos und ohne Anmeldung.",
    leadP2: "Egal ob Sie nach «racine carree calculator», «Quadratwurzel Rechner» oder «square root calculator» gesucht haben – hier finden Sie das passende Werkzeug mit vollständiger mathematischer Erklärung.",
    badgeInstant: "Exakte Dezimalstellen",
    badgeRadical: "Vereinfachte Wurzelform",
    badgeSteps: "Schritt-für-Schritt-Lösung",
    badgeFree: "100% Kostenlos & Unbegrenzt",
    quickTryLabel: "Schnellbeispiele zum Testen:",

    s1Eyebrow: "Definition & Grundlagen",
    s1Title: "Was ist eine Quadratwurzel (Racine Carrée)?",
    s1P1: "«Racine carrée» ist die französische Bezeichnung für Quadratwurzel. Sie gehört zu den meistgesuchten mathematischen Begriffen weltweit, da Schüler, Studenten und Ingenieure häufig Wurzeln schnell berechnen müssen.",
    s1P2: "Die Quadratwurzel einer Zahl ist derjenige Wert, der mit sich selbst multipliziert die Ausgangszahl ergibt. Multipliziert man 7 mit 7, erhält man 49. Die Quadratwurzel aus 49 ist daher 7. Sie ist die Umkehroperation des Quadrierens.",
    s1P3: "Mathematisch ausgedrückt ist die Quadratwurzel einer Zahl x eine Zahl y, sodass y × y = x bzw. y² = x gilt.",
    s1Cards: [
      { expr: "√4 = 2", reason: "da 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "da 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "da 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "da 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "da 10 × 10 = 100" }
    ],
    s1Caption: "Geometrische Bedeutung: Berechnung der Seitenlänge eines Quadrats aus seiner Fläche",
    s1AnatomyTitle: "Aufbau eines Wurzelausdrucks",
    s1RadicalSymbol: "Wurzelzeichen (√)",
    s1RadicalSymbolDesc: "Das mathematische Operationssymbol",
    s1Radicand: "Radikand (Zahl)",
    s1RadicandDesc: "Die Zahl unter dem Wurzelzeichen (z. B. 49 in √49)",
    s1Root: "Wurzelwert (Ergebnis)",
    s1RootDesc: "Das berechnete Ergebnis (z. B. 7)",

    s2Eyebrow: "Anleitung",
    s2Title: "So bedienen Sie den Quadratwurzel Rechner",
    s2Intro: "In drei einfachen Schritten zum Ergebnis:",
    s2Steps: [
      { title: "Zahl eingeben", text: "Geben Sie eine beliebige Zahl (Ganzzahl, Dezimalzahl, Bruch oder negativ) in das Feld oben ein." },
      { title: "Auf Berechnen klicken", text: "Klicken Sie auf den Berechnen-Button für eine sofortige Auswertung." },
      { title: "Ergebnis ablesen", text: "Der Rechner zeigt das Dezimalergebnis, die gekürzte Wurzel (z. B. √72 = 6√2) und den Lösungsweg an." }
    ],
    s2Conclusion: "Keine Formeln nötig: Unser Online-Rechner erledigt die gesamte mathematische Arbeit für Sie.",

    s3Eyebrow: "Notation & Exponenten",
    s3Title: "Wurzelschreibweise: Das √ Symbol und x^(1/2)",
    s3Intro: "Das Wurzelzeichen √ ist das Standardzeichen für Quadratwurzeln. √36 fragt: Welche Zahl mit sich selbst multipliziert ergibt 36? Die Antwort lautet 6.",
    s3Cards: [
      { expr: "√", reason: "Wurzelzeichen (Radikal)" },
      { expr: "36", reason: "Radikand unter dem Zeichen" },
      { expr: "6", reason: "Hauptwert der Wurzel" }
    ],
    s3P1: "Jeder Wurzelausdruck besteht aus dem Wurzelzeichen (√), dem Radikanden und dem Wurzelwert.",
    s3P2: "Wurzeln lassen sich auch als gebrochene Potenzen schreiben:",
    s3P3: "Beide Schreibweisen sind mathematisch identisch. Programmiersprachen und Taschenrechner nutzen x^(1/2) standardmäßig.",
    s3Caption: "Vergleich zwischen Wurzelschreibweise √x und Potenzschreibweise x^(1/2)",
    s3ToggleRadical: "Wurzelform (√x)",
    s3ToggleExponent: "Potenzform (x^½)",
    s3ToggleCode: "Code / Syntax",

    s4Eyebrow: "Grundformel",
    s4Title: "Was ist die Formel für die Quadratwurzel?",
    s4Intro: "Es gibt keine direkte statische Formel wie beim Kreisumfang. Eine Quadratwurzel ist durch ihre Umkehrbeziehung definiert:",
    s4P1: "In einfachen Worten: Das gefundene Ergebnis muss, mit sich selbst multipliziert, exakt die Ausgangszahl ergeben.",
    s4PrincipalTitle: "Konvention der Hauptwurzel",
    s4PrincipalText: "Die Hauptwurzel ist per internationaler Konvention immer die nicht-negative Zahl. Obwohl sowohl 5 als auch -5 quadriert 25 ergeben, gilt stets √25 = 5.",

    s5Eyebrow: "Wurzelgesetze",
    s5Title: "Die fünf wichtigsten Gesetze der Quadratwurzel",
    s5Intro: "Mit diesen Rechenregeln vereinfachen Sie Wurzelterme in Algebra und Geometrie schnell und sicher:",
    s5Laws: [
      {
        name: "1. Produktregel",
        subtitle: "√(a × b) = √a × √b (für a ≥ 0, b ≥ 0)",
        example: "Beispiel: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Direkt: √36 = 6.",
        explanation: "Ermöglicht das Zerlegen und teilweise Wurzelziehen (z. B. √72 = √(36 × 2) = 6√2)."
      },
      {
        name: "2. Quotientenregel",
        subtitle: "√(a / b) = √a / √b (für a ≥ 0, b > 0)",
        example: "Beispiel: √(16/4) = √16 / √4 = 4 / 2 = 2. Direkt: √4 = 2.",
        explanation: "Zähler und Nenner eines Bruchs können getrennt radiziert werden."
      },
      {
        name: "3. Potenzregel",
        subtitle: "√(a²) = |a| (Betrag von a)",
        example: "Beispiel: √(7²) = √49 = 7. Quadrieren und Wurzelziehen heben sich auf.",
        explanation: "Das Quadrieren einer Zahl und anschließendes Wurzelziehen liefert den Betrag der Zahl."
      },
      {
        name: "4. Selbstmultiplikation",
        subtitle: "√a × √a = a",
        example: "Beispiel: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Multipliziert man eine Wurzel mit sich selbst, fällt das Wurzelzeichen weg. Wichtig zum Rationalmachen von Nennern (1/√5 = √5/5)."
      },
      {
        name: "5. Wurzel aus einer Wurzel",
        subtitle: "√(√a) = a^(1/4) (vierte Wurzel)",
        example: "Beispiel: √(√16) = √4 = 2. Und 16^(1/4) = 2.",
        explanation: "Das wiederholte Wurzelziehen entspricht der vierten Wurzel."
      }
    ],

    s6Eyebrow: "Rechenmethoden",
    s6Title: "Quadratwurzel berechnen: 4 Methoden",
    s6Intro: "Je nach Situation stehen Ihnen vier Rechenwege zur Verfügung:",
    s6M1Title: "Methode 1: Mit diesem Online-Rechner (Am schnellsten)",
    s6M1Text: "Zahl oben eingeben und auf Berechnen drücken. Sie erhalten sofort Dezimalwert und gekürzte Wurzel.",
    s6M1Action: "Nach oben zum Rechner",
    s6M2Title: "Methode 2: Primfaktorzerlegung (Für Quadratzahlen)",
    s6M2Intro: "Besonders effektiv für ganze Zahlen und Quadratzahlen.",
    s6M2ExTitle: "Beispiele zur Primfaktorzerlegung",
    s6M2Steps: [
      "1. Zerlegen Sie die Zahl in Primfaktoren",
      "2. Fassen Sie gleiche Faktoren zu Paaren zusammen",
      "3. Ziehen Sie aus jedem Paar einen Faktor vor die Wurzel",
      "4. Multiplizieren Sie die ausgeklammerten Faktoren"
    ],
    s6M3Title: "Methode 3: Schriftliches Wurzelziehen (Manuell exakt)",
    s6M3Intro: "Systematischer Algorithmus ähnlich der schriftlichen Division für beliebige Nachkommastellen.",
    s6M3Steps: [
      "1. Ziffern vom Komma aus in Zweiergruppen einteilen",
      "2. Größte Quadratzahl finden, die in die erste Gruppe passt",
      "3. Rest bilden, nächste Gruppe herabholen und Wurzelwert verdoppeln",
      "4. Nächste Ziffer durch Probieren ermitteln und wiederholen"
    ],
    s6M3Text: "Ermöglicht das händische Berechnen jeder Wurzel ohne technische Hilfsmittel.",
    s6M4Title: "Methode 4: Schätzmethode (Schnelles Kopfrechnen)",
    s6M4Intro: "Für überschlägige Rechnungen im Kopf:",
    s6M4ExTitle: "Beispiel: Abschätzen von √50",
    s6M4Steps: [
      "1. Benachbarte Quadratzahlen suchen: 49 < 50 < 64 (also 7 < √50 < 8)",
      "2. Da 50 sehr nah an 49 liegt, ist √50 nur knapp über 7",
      "3. Schätzwert: ca. 7,07 (exakt: 7,0711...)"
    ],
    s6M4Note: "Grundlage des babylonischen Wurzelziehens (Heron-Verfahren / Newton-Verfahren).",

    s7Eyebrow: "Quadratzahlen",
    s7Title: "Quadratzahlen: Definition und Bedeutung",
    s7Intro: "Eine Quadratzahl entsteht durch die Multiplikation einer ganzen Zahl mit sich selbst. Ihre Wurzel ist stets eine ganze Zahl.",
    s7ThNumber: "Zahl (n)",
    s7ThSquare: "Quadratzahl (n²)",
    s7ThRoot: "Quadratwurzel (√n²)",
    s7Conclusion: "Das Auswendiglernen der ersten 20 Quadratzahlen erleichtert das mathematische Verständnis enorm.",
    s7Caption: "Geometrische Veranschaulichung quadratischer Flächen mit Seitenlänge n",

    s8Eyebrow: "Irrationale Wurzeln",
    s8Title: "Nicht-Quadratzahlen und irrationale Zahlen",
    s8Intro: "Ist eine Zahl keine Quadratzahl, ist ihre Wurzel irrational: Ihre Dezimaldarstellung bricht nie ab und ist nicht periodisch.",
    s8Text: "Diese reellen Zahlen lassen sich nicht als Bruch zweier ganzer Zahlen darstellen (vergleichbar mit π).",
    s8CalcNote: "Unser Rechner liefert Ihnen sowohl präzise Dezimalwerte als auch die exakte gekürzte Wurzel.",

    s9Eyebrow: "Dezimalzahlen & Brüche",
    s9Title: "Wurzeln aus Dezimalzahlen und Brüchen",
    s9Intro: "Quadratwurzeln können problemlos aus Kommazahlen und Brüchen gezogen werden:",
    s9DecimalsTitle: "Wurzeln aus Dezimalzahlen",
    s9DecimalsIntro: "Dezimalbrüche werden unter Berücksichtigung der Kommastellen berechnet:",
    s9FractionsTitle: "Wurzeln aus Brüchen",
    s9FractionsIntro: "Wenden Sie die Quotientenregel an, um Zähler und Nenner getrennt zu berechnen:",
    s9Conclusion: "Geben Sie jeden Bruch oder Dezimalwert oben ein, um Ihre Hausaufgaben zu prüfen.",

    s10Eyebrow: "Komplexe Zahlen",
    s10Title: "Wurzeln aus negativen Zahlen und die imaginäre Einheit i",
    s10P1: "Im Bereich der reellen Zahlen gibt es keine Wurzeln aus negativen Zahlen, da das Quadrat jeder reellen Zahl positiv ist.",
    s10P2: "In der höheren Mathematik wird daher die imaginäre Einheit i mit i² = -1 eingeführt. Es gilt: √(-a) = √a × i für a > 0.",
    s10P3: "Diese komplexen Zahlen (a + bi) sind unverzichtbar in Elektrotechnik, Quantenphysik und Signalverarbeitung.",
    s10ExTitle: "Beispiele mit negativen Zahlen",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Unser Rechner erkennt negative Eingaben automatisch und gibt das imaginäre Ergebnis aus.",

    s11Eyebrow: "Umkehroperationen",
    s11Title: "Unterschied zwischen Quadrieren und Wurzelziehen",
    s11Intro: "Quadrieren und Wurzelziehen sind zueinander inverse Rechenoperationen, wie Addition und Subtraktion.",
    s11ThOp: "Operation",
    s11ThWhat: "Bedeutung",
    s11ThEx: "Beispiel",
    s11RowSquare: "Quadrieren (x²)",
    s11RowSquareDesc: "Zahl mit sich selbst multiplizieren",
    s11RowRoot: "Wurzelziehen (√x)",
    s11RowRootDesc: "Zahl finden, die quadriert x ergibt",
    s11Inverse: "Die Operationen heben sich gegenseitig auf: √(8²) = √64 = 8, und (√64)² = 8² = 64.",
    s11Absolute: "Da beim Quadrieren Vorzeichen verloren gehen, gilt stets die Hauptwurzel: √(a²) = |a|.",

    s12Eyebrow: "Wurzeltabellen",
    s12Title: "Komplette Wurzeltabelle von 1 bis 50",
    s12Intro: "Übersichtstabelle von 1 bis 50 mit Dezimalwerten, vereinfachter Wurzelschreibweise und Kennzeichnung von Quadratzahlen.",
    s12ChartLinkText: "Benötigen Sie eine druckbare Tabelle bis 100? Nutzen Sie unseren Tabellen-Generator.",
    s12ScrollHint: "Scrollen Sie nach unten für alle 50 Werte ↓",
    s12ColNumber: "Zahl (n)",
    s12ColRoot: "Dezimal (√n)",
    s12ColSimplified: "Vereinfachte Wurzel",
    s12ColType: "Typ",
    s12BadgePerfect: "Quadratzahl",
    s12BadgeIrrational: "Irrational",
    s12FilterAll: "Alle Zahlen (1–50)",
    s12FilterPerfect: "Nur Quadratzahlen",
    s12FilterIrrational: "Nur Irrationale",
    s12SearchPlaceholder: "Zahl oder Wurzel suchen (z. B. 25, √2)...",

    s13Eyebrow: "Wurzeln Vereinfachen",
    s13Title: "Beispiele zum teilweisen Wurzelziehen",
    s13Intro: "Das teilweise Wurzelziehen zerlegt den Radikanden in Quadratzahlen und zieht diese vor die Wurzel:",
    s13ThExpr: "Ausgangswurzel",
    s13ThForm: "Vereinfachte Form",
    s13ThWhy: "Zerlegung & Erklärung",
    s13Conclusion: "Die Produktregel ermöglicht das Ausklammern quadratischer Faktoren.",

    s14Eyebrow: "Praxisanwendungen",
    s14Title: "Praktische Anwendungen der Quadratwurzel",
    s14Intro: "Quadratwurzeln kommen in vielen Bereichen des täglichen Lebens und der Technik vor:",
    s14Apps: [
      { title: "Bauwesen und Architektur", text: "Der Satz des Pythagoras (a² + b² = c²) nutzt Quadratwurzeln zur Längen- und Diagonalenberechnung (z. B. √(3² + 4²) = 5 m)." },
      { title: "Finanzmathematik", text: "Die Standardabweichung als Maß für Anlagerisiko und Volatilität ist die Quadratwurzel aus der Varianz." },
      { title: "Physik und Ingenieurwesen", text: "Fallgeschwindigkeit (v = √(2gh)), Pendelschwingungen und Wechselstromwiderstände nutzen Wurzelterme." },
      { title: "Informatik & 3D-Grafik", text: "Abstandsberechnungen zwischen Punkten, Vektornormen und Algorithmenlaufzeiten." },
      { title: "Alltagsmessungen", text: "Berechnung der Seitenlänge aus einer Grundfläche: Ein 64 m² großer Raum hat Seiten von √64 = 8 m." }
    ],

    s15Eyebrow: "FAQ",
    s15Title: "Häufig gestellte Fragen (FAQ)",
    s15Faqs: [
      {
        question: "Wie bediene ich den Quadratwurzel Rechner?",
        answer: "Zahl in das Feld eingeben und auf Berechnen klicken. Sie erhalten sofort das exakte Dezimalergebnis, die vereinfachte Wurzel und die Rechenschritte."
      },
      {
        question: "Was bedeutet «racine carrée»?",
        answer: "«Racine carrée» ist französisch für Quadratwurzel. Es bezeichnet die Zahl, die mit sich selbst multipliziert den Ausgangswert ergibt."
      },
      {
        question: "Kann der Rechner negative Zahlen berechnen?",
        answer: "Ja. Bei negativen Zahlen gibt der Rechner das Ergebnis mit der imaginären Einheit i aus (z. B. √(-16) = 4i)."
      },
      {
        question: "Was ist der Unterschied zwischen Quadrat- und Kubikwurzel?",
        answer: "Die Quadratwurzel sucht die Zahl, die 2-mal mit sich selbst multipliziert wird (Index 2). Die Kubikwurzel multipliziert 3-mal (Index 3)."
      },
      {
        question: "Wie berechnet man eine Quadratwurzel ohne Rechner?",
        answer: "Über Primfaktorzerlegung bei Quadratzahlen, das schriftliche Wurzelziehen oder die Schätzmethode (Heron-Verfahren)."
      },
      {
        question: "Was ist eine Quadratzahl?",
        answer: "Eine ganze Zahl, deren Quadratwurzel wieder eine ganze Zahl ist (z. B. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Sind alle Wurzeln rationale Zahlen?",
        answer: "Nein. Nur Wurzeln aus Quadratzahlen sind rational. Wurzeln aus anderen Zahlen sind irrational mit unendlich vielen Nachkommastellen."
      },
      {
        question: "Ist dieser Rechner kostenlos?",
        answer: "Ja, der Rechner ist 100% kostenlos, ohne Werbung und ohne Anmeldung nutzbar."
      },
      {
        question: "Kann ich Wurzeln aus Kommazahlen und Brüchen berechnen?",
        answer: "Ja, Kommazahlen und Brüche werden mathematisch exakt berechnet."
      },
      {
        question: "Was ist die Hauptwurzel?",
        answer: "Die Hauptwurzel ist per Konvention stets das nicht-negative Ergebnis einer Wurzeloperation."
      }
    ],

    s16Eyebrow: "Zusammenfassung",
    s16Title: "Wichtigste Erkenntnisse im Überblick",
    s16BoxTitle: "Kernprinzip",
    s16BoxText: "Die Quadratwurzel beantwortet eine fundamentale Frage: Welche Zahl ergibt mit sich selbst multipliziert diesen Wert? Nutzen Sie unseren kostenlosen Rechner für schnelle und verlässliche Ergebnisse.",

    quickCalcLabel: "Sofortrechner",
    quickCalcSublabel: "Klicken Sie auf eine Zahl für die direkte Lösung"
  },

  // 5. Italian (it)
  it: {
    leadTitle: "Calcolatore Radice Quadrata (Racine Carree) : Gratis Online",
    leadP1: "Usa la nostra calcolatrice gratuita di radice quadrata per trovare la radice di qualsiasi numero istantaneamente. Inserisci numeri interi, decimali, frazioni o numeri negativi per ottenere il risultato decimale esatto, la forma radicale semplificata e i passaggi dettagliati in pochi secondi. 100% gratis e senza registrazione.",
    leadP2: "Che tu abbia cercato «racine carree calculator», «calcolatrice radice quadrata» o «square root calculator», sei nel posto giusto per calcolare e comprendere a fondo le radici quadrate.",
    badgeInstant: "Decimali Esatti",
    badgeRadical: "Forma Radicale Semplificata",
    badgeSteps: "Passaggi Risolutivi",
    badgeFree: "100% Gratis e Illimitato",
    quickTryLabel: "Esempi Rapidi da Provare:",

    s1Eyebrow: "Definizione & Concetti",
    s1Title: "Cos'è la Radice Quadrata (Racine Carrée)?",
    s1P1: "«Racine carrée» è il termine francese per radice quadrata. È uno dei concetti matematici più cercati al mondo da studenti e professionisti.",
    s1P2: "La radice quadrata di un numero è quel valore che, moltiplicato per se stesso, restituisce il numero di partenza. Se moltiplichi 7 per 7 ottieni 49, quindi la radice quadrata di 49 è 7. È l'operazione inversa dell'elevamento al quadrato.",
    s1P3: "In termini algebrici, la radice quadrata di x è un numero y tale che y × y = x (o y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "perché 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "perché 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "perché 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "perché 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "perché 10 × 10 = 100" }
    ],
    s1Caption: "Visualizzazione: Trovare la lunghezza del lato di un quadrato conoscendone l'area",
    s1AnatomyTitle: "Anatomia di un'Espressione con Radicale",
    s1RadicalSymbol: "Simbolo del Radicale (√)",
    s1RadicalSymbolDesc: "Il segno che indica l'estrazione di radice",
    s1Radicand: "Radicando (Numero)",
    s1RadicandDesc: "Il numero sotto il segno di radice (es. 49 in √49)",
    s1Root: "Radice (Risultato)",
    s1RootDesc: "Il risultato valutato (es. 7)",

    s2Eyebrow: "Istruzioni",
    s2Title: "Come Usare la Calcolatrice per Radice Quadrata",
    s2Intro: "Ottieni la soluzione in tre semplici passaggi:",
    s2Steps: [
      { title: "Inserisci il Numero", text: "Digita il valore (intero, decimale, frazione o negativo) nella casella superiore." },
      { title: "Clicca su Calcola", text: "Premi il pulsante per elaborare istantaneamente il calcolo." },
      { title: "Leggi il Risultato", text: "Verranno mostrati il valore decimale, la forma semplificata (es. √72 = 6√2) e i passaggi." }
    ],
    s2Conclusion: "Tutto qui. Non devi memorizzare formule a memoria: lo strumento fa tutto il lavoro per te.",

    s3Eyebrow: "Notazione ed Esponenti",
    s3Title: "Notazione della Radice Quadrata: Il Simbolo √ e x^(1/2)",
    s3Intro: "Il simbolo √ è il radicale standard. √36 significa trovare quale numero moltiplicato per se stesso dia 36. Il risultato è 6.",
    s3Cards: [
      { expr: "√", reason: "Simbolo radicale dell'operazione" },
      { expr: "36", reason: "Radicando sotto il simbolo" },
      { expr: "6", reason: "Radice principale positiva" }
    ],
    s3P1: "Ogni espressione radicale è composta dal simbolo (√), dal radicando e dalla radice.",
    s3P2: "È possibile scrivere la radice quadrata anche sotto forma di esponente frazionario:",
    s3P3: "Entrambe le forme hanno identico significato. I calcolatori utilizzano comunemente x^(1/2).",
    s3Caption: "Rappresentazione equivalente tra simbolo radicale √ ed esponente frazionario x^(1/2)",
    s3ToggleRadical: "Forma Radicale (√x)",
    s3ToggleExponent: "Forma Esponente (x^½)",
    s3ToggleCode: "Codice / Sintassi",

    s4Eyebrow: "Formula Base",
    s4Title: "Qual è la Formula della Radice Quadrata?",
    s4Intro: "Non esiste una singola formula chiusa come per l'area di una figura geometrica. La radice quadrata è definita da una relazione inversa:",
    s4P1: "In parole semplici: qualunque sia la radice ottenuta, moltiplicandola per se stessa si deve riottenere esattamente il numero iniziale.",
    s4PrincipalTitle: "Convenzione della Radice Quadrata Principale",
    s4PrincipalText: "La radice principale è sempre il valore non negativo. Sia 5 che -5 al quadrato fanno 25, ma per convenzione √25 = 5.",

    s5Eyebrow: "Proprietà dei Radicali",
    s5Title: "Le Cinque Proprietà Fondamentali delle Radici Quadrate",
    s5Intro: "Queste regole permettono di semplificare e manipolare agevolmente i radicali:",
    s5Laws: [
      {
        name: "1. Regola del Prodotto",
        subtitle: "√(a × b) = √a × √b (per a ≥ 0, b ≥ 0)",
        example: "Esempio: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Diretto: √36 = 6.",
        explanation: "Permette di scomporre una radice in fattori per semplificarla (es. √72 = 6√2)."
      },
      {
        name: "2. Regola del Quoziente",
        subtitle: "√(a / b) = √a / √b (per a ≥ 0, b > 0)",
        example: "Esempio: √(16/4) = √16 / √4 = 4 / 2 = 2. Diretto: √4 = 2.",
        explanation: "Consente di calcolare la radice di una frazione separando numeratore e denominatore."
      },
      {
        name: "3. Regola della Potenza",
        subtitle: "√(a²) = |a| (valore assoluto di a)",
        example: "Esempio: √(7²) = √49 = 7. Quadrato e radice si annullano.",
        explanation: "Elevare al quadrato e poi estrarre la radice restituisce il valore assoluto iniziale."
      },
      {
        name: "4. Auto-Moltiplicazione",
        subtitle: "√a × √a = a",
        example: "Esempio: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Moltiplicare una radice per se stessa elimina il radicale. Utile per razionalizzare i denominatori (1/√5 = √5/5)."
      },
      {
        name: "5. Radice di Radice",
        subtitle: "√(√a) = a^(1/4) (radice quarta)",
        example: "Esempio: √(√16) = √4 = 2. E 16^(1/4) = 2.",
        explanation: "Estrarre la radice di una radice equivale alla radice quarta."
      }
    ],

    s6Eyebrow: "Metodi Risolutivi",
    s6Title: "Come Calcolare una Radice Quadrata: 4 Metodi",
    s6Intro: "Puoi calcolare una radice quadrata seguendo quattro approcci distinti:",
    s6M1Title: "Metodo 1: Con questo Calcolatore (Il più rapido)",
    s6M1Text: "Inserisci il numero e clicca su Calcola per ottenere risposta e semplificazione istantanea.",
    s6M1Action: "Vai al Calcolatore",
    s6M2Title: "Metodo 2: Scomposizione in Fattori Primi (Quadrati Perfetti)",
    s6M2Intro: "Ottimo per numeri interi e quadrati perfetti.",
    s6M2ExTitle: "Esempi di Fattorizzazione",
    s6M2Steps: [
      "1. Scomponi il numero in fattori primi",
      "2. Raggruppa i fattori uguali a coppie",
      "3. Porta fuori dalla radice un fattore per coppia",
      "4. Moltiplica tra loro i fattori esterni"
    ],
    s6M3Title: "Metodo 3: Algoritmo Tradizionale a Mano",
    s6M3Intro: "Metodo manuale simile alla divisione per calcolare la radice con precisione decimale arbitraria.",
    s6M3Steps: [
      "1. Raggruppa le cifre a coppie partendo dalla virgola",
      "2. Trova il più grande quadrato contenuto nel primo gruppo",
      "3. Sottrai, abbassa la coppia successiva e raddoppia la radice parziale",
      "4. Determina la cifra successiva per tentativi"
    ],
    s6M3Text: "Metodo classico insegnato a scuola per risolvere radici a mano senza calcolatrice.",
    s6M4Title: "Metodo 4: Stima a Mente (Approssimazione Rapida)",
    s6M4Intro: "Per ottenere un valore indicativo rapidamente a mente:",
    s6M4ExTitle: "Esempio: Stimare √50",
    s6M4Steps: [
      "1. Trova i quadrati perfetti adiacenti: 49 < 50 < 64 (quindi 7 < √50 < 8)",
      "2. Essendo 50 molto vicino a 49, √50 è poco più di 7",
      "3. Stima: circa 7,07 (valore reale: 7,0711...)"
    ],
    s6M4Note: "Questo principio è alla base del metodo babilonese (iterazione di Newton-Raphson).",

    s7Eyebrow: "Quadrati Perfetti",
    s7Title: "Quadrati Perfetti: Cosa Sono e Perché Sono Importanti",
    s7Intro: "Un quadrato perfetto è un numero intero la cui radice quadrata è a sua volta un numero intero esatto.",
    s7ThNumber: "Numero (n)",
    s7ThSquare: "Quadrato Perfetto (n²)",
    s7ThRoot: "Radice Quadrata (√n²)",
    s7Conclusion: "Conoscere i primi 20 quadrati perfetti velocizza moltissimo i calcoli mentali.",
    s7Caption: "Rappresentazione geometrica di aree quadrate n² con lato n",

    s8Eyebrow: "Numeri Irrazionali",
    s8Title: "Numeri Non Quadrati Perfetti e Radici Irrazionali",
    s8Intro: "Quando un numero non è un quadrato perfetto, la sua radice è un numero irrazionale: ha infinite cifre decimali non periodiche.",
    s8Text: "Questi numeri reali non possono essere scritti come frazione tra interi (come accade per pi greco π).",
    s8CalcNote: "Il nostro calcolatore fornisce sia la stima decimale ad alta precisione sia la forma radicale esatta.",

    s9Eyebrow: "Decimali e Frazioni",
    s9Title: "Radici Quadrate di Decimali e Frazioni",
    s9Intro: "L'estrazione di radice si applica normalmente a numeri con la virgola e frazioni:",
    s9DecimalsTitle: "Radici di Numeri Decimali",
    s9DecimalsIntro: "I decimali finiti si valutano agevolmente tenendo conto dei decimali:",
    s9FractionsTitle: "Radici di Frazioni",
    s9FractionsIntro: "Applica la regola del quoziente calcolando numeratore e denominatore:",
    s9Conclusion: "Inserisci qualsiasi frazione o decimale nella calcolatrice per verificare i tuoi passaggi.",

    s10Eyebrow: "Numeri Complessi",
    s10Title: "Radici di Numeri Negativi e l'Unità Immaginaria i",
    s10P1: "Nei numeri reali, i numeri negativi non ammettono radice quadrata poiché il quadrato di qualsiasi numero reale è sempre positivo.",
    s10P2: "Per superare questo limite, si definisce l'unità immaginaria i con i² = -1. Vale quindi: √(-a) = √a × i per a > 0.",
    s10P3: "Questi numeri fanno parte dei numeri complessi (a + bi), essenziali nell'ingegneria elettronica e nella fisica quantistica.",
    s10ExTitle: "Esempi con Numeri Negativi",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Il nostro calcolatore gestisce automaticamente i valori negativi restituendo il risultato immaginario corretto.",

    s11Eyebrow: "Operazioni Inverse",
    s11Title: "Differenza tra Elevamento al Quadrato e Radice Quadrata",
    s11Intro: "Elevare al quadrato ed estrarre la radice quadrata sono operazioni matematiche inverse.",
    s11ThOp: "Operazione",
    s11ThWhat: "Cosa fa",
    s11ThEx: "Esempio",
    s11RowSquare: "Elevamento al Quadrato (x²)",
    s11RowSquareDesc: "Moltiplica un numero per se stesso",
    s11RowRoot: "Radice Quadrata (√x)",
    s11RowRootDesc: "Trova quale numero moltiplicato per se stesso dia x",
    s11Inverse: "Un'operazione annulla l'altra: √(8²) = √64 = 8, e (√64)² = 8² = 64.",
    s11Absolute: "Dato che l'elevamento al quadrato elimina i segni negativi, vale la radice principale: √(a²) = |a|.",

    s12Eyebrow: "Tabelle di Riferimento",
    s12Title: "Tabella Completa delle Radici Quadrate da 1 a 50",
    s12Intro: "Tabella rapida da 1 a 50 con radici decimali, forme radicali semplificate e indicazione dei quadrati perfetti.",
    s12ChartLinkText: "Ti serve una tabella completa stampabile fino a 100? Prova il nostro Generatore di Tabelle.",
    s12ScrollHint: "Scorri verso il basso per visualizzare tutti i 50 valori ↓",
    s12ColNumber: "Numero (n)",
    s12ColRoot: "Decimale (√n)",
    s12ColSimplified: "Radicale Semplificato",
    s12ColType: "Tipo",
    s12BadgePerfect: "Quadrato Perfetto",
    s12BadgeIrrational: "Irrazionale",
    s12FilterAll: "Tutti i Numeri (1–50)",
    s12FilterPerfect: "Solo Quadrati Perfetti",
    s12FilterIrrational: "Solo Irrazionali",
    s12SearchPlaceholder: "Cerca numero o radice (es. 25, √2)...",

    s13Eyebrow: "Semplificazione",
    s13Title: "Esempi di Semplificazione di Radicali",
    s13Intro: "Semplificare una radice significa estrarre il massimo fattore quadrato perfetto dal radicando:",
    s13ThExpr: "Radicale Iniziale",
    s13ThForm: "Forma Semplificata",
    s13ThWhy: "Scomposizione & Metodo",
    s13Conclusion: "La regola del prodotto consente di portare fuori radice i fattori quadrati perfetti.",

    s14Eyebrow: "Applicazioni Pratiche",
    s14Title: "Applicazioni Reali delle Radici Quadrate",
    s14Intro: "Le radici quadrate trovano impiego quotidiano nella scienza e nella tecnologia:",
    s14Apps: [
      { title: "Edilizia e Architettura", text: "Il teorema di Pitagora (a² + b² = c²) usa le radici per calcolare diagonali e pendenze (es. √(3² + 4²) = 5 m)." },
      { title: "Finanza ed Economia", text: "La deviazione standard, misura fondamentale della volatilità e del rischio finanziario, è la radice quadrata della varianza." },
      { title: "Fisica e Ingegneria", text: "Velocità in caduta libera (v = √(2gh)), oscillazioni di pendoli e calcoli di circuiti elettrici." },
      { title: "Informatica e Grafica 3D", text: "Distanza euclidea nei videogiochi, rilevamento collisioni e complessità di algoritmi √n." },
      { title: "Misure di Ogni Giorno", text: "Ricavare il lato di una stanza partendo dai metri quadri: un locale di 64 m² ha lati di √64 = 8 m." }
    ],

    s15Eyebrow: "FAQ",
    s15Title: "Domande Frequenti (FAQ)",
    s15Faqs: [
      {
        question: "Come si usa il Calcolatore di Radice Quadrata?",
        answer: "Digita il numero nella casella e clicca su Calcola. Otterrai subito il valore decimale, la forma semplificata (es. √72 = 6√2) e la scomposizione passo a passo."
      },
      {
        question: "Cosa significa «racine carrée»?",
        answer: "«Racine carrée» è il termine francese per «radice quadrata», cioè il valore che moltiplicato per se stesso dà il numero dato."
      },
      {
        question: "La calcolatrice gestisce numeri negativi?",
        answer: "Sì. Restituisce il valore con l'unità immaginaria i (es. √(-16) = 4i) accompagnato dai passaggi risolutivi."
      },
      {
        question: "Qual è la differenza tra radice quadrata e radice cubica?",
        answer: "La radice quadrata moltiplica per se stessa 2 volte (indice 2). La cubica moltiplica 3 volte (indice 3) e ammette soluzioni reali negative."
      },
      {
        question: "Come calcolare la radice senza calcolatrice?",
        answer: "Tramite scomposizione in fattori primi, divisione manuale a colonne o stima babilonese."
      },
      {
        question: "Cos'è un quadrato perfetto?",
        answer: "Un numero intero la cui radice quadrata è un numero intero esatto (es. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Tutte le radici sono numeri razionali?",
        answer: "No. Solo i quadrati perfetti danno radici razionali. Tutti gli altri generano numeri irrazionali con decimali infiniti."
      },
      {
        question: "La calcolatrice è gratuita?",
        answer: "Sì, è 100% gratuita, accessibile da qualsiasi browser senza limiti né registrazione."
      },
      {
        question: "Posso calcolare radici di decimali e frazioni?",
        answer: "Sì, puoi digitare numeri decimali o frazioni per risolverli istantaneamente."
      },
      {
        question: "Cos'è la radice quadrata principale?",
        answer: "È per convenzione internazionale la soluzione non negativa della radice quadrata."
      }
    ],

    s16Eyebrow: "Riepilogo",
    s16Title: "Riepilogo e Conclusioni",
    s16BoxTitle: "Concetto Chiave",
    s16BoxText: "La radice quadrata risponde a una semplice domanda: quale numero moltiplicato per se stesso dà questo valore? Usa la nostra calcolatrice per risposte rapide ed esatte.",

    quickCalcLabel: "Calcolo Diretto",
    quickCalcSublabel: "Clicca su un numero per visualizzare il risultato"
  },

  // 6. Portuguese (pt)
  pt: {
    leadTitle: "Calculadora de Raiz Quadrada (Racine Carree) : Grátis Online",
    leadP1: "Utilize nossa Calculadora de Raiz Quadrada gratuita para encontrar a raiz de qualquer número instantaneamente. Insira números inteiros, decimais, frações ou negativos para obter o resultado decimal exato, a forma simplificada de radicais e o passo a passo completo. 100% grátis e sem limites.",
    leadP2: "Seja pesquisando por «racine carree calculator», «calculadora de raiz quadrada» ou «square root calculator», você encontrou a ferramenta ideal com explicações matemáticas completas.",
    badgeInstant: "Decimais Exatos",
    badgeRadical: "Forma Radical Simplificada",
    badgeSteps: "Passo a Passo",
    badgeFree: "100% Grátis e Ilimitado",
    quickTryLabel: "Exemplos Rápidos para Testar:",

    s1Eyebrow: "Definição e Conceito",
    s1Title: "O que é Raiz Quadrada (Racine Carrée)?",
    s1P1: "«Racine carrée» é o termo em francês para raiz quadrada. É uma das buscas matemáticas mais populares do mundo entre estudantes e profissionais que buscam cálculos rápidos.",
    s1P2: "A raiz quadrada de um número é o valor que, multiplicado por si mesmo, resulta no número original. Se você multiplicar 7 por 7 obtém 49, portanto a raiz quadrada de 49 é 7. É a operação inversa da potenciação ao quadrado.",
    s1P3: "Em linguagem matemática, a raiz quadrada de x é um número y tal que y × y = x (ou y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "porque 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "porque 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "porque 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "porque 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "porque 10 × 10 = 100" }
    ],
    s1Caption: "Visualização geométrica: Encontrar o comprimento do lado de um quadrado a partir de sua área",
    s1AnatomyTitle: "Anatomia de uma Expressão Radical",
    s1RadicalSymbol: "Símbolo Radical (√)",
    s1RadicalSymbolDesc: "O símbolo que indica a extração da raiz",
    s1Radicand: "Radicando (Número)",
    s1RadicandDesc: "O número sob o sinal de raiz (ex.: 49 em √49)",
    s1Root: "Raiz (Resultado)",
    s1RootDesc: "O resultado da operação (ex.: 7)",

    s2Eyebrow: "Como Usar",
    s2Title: "Como Usar a Calculadora de Raiz Quadrada",
    s2Intro: "Basta seguir três passos simples para encontrar sua resposta:",
    s2Steps: [
      { title: "Digite o Número", text: "Insira qualquer valor (inteiro, decimal, fração ou negativo) no campo superior." },
      { title: "Clique em Calcular", text: "Pressione o botão Calcular para efetuar o cálculo instantaneamente." },
      { title: "Veja o Resultado", text: "A ferramenta exibe o resultado decimal exato, o radical simplificado (ex.: √72 = 6√2) e os passos." }
    ],
    s2Conclusion: "O processo é direto e dispensa memorização de fórmulas complexas.",

    s3Eyebrow: "Notação e Expoentes",
    s3Title: "Notação da Raiz Quadrada: O Símbolo √ e x^(1/2)",
    s3Intro: "O símbolo √ é o radical convencional. Ao escrever √36, você busca o número que multiplicado por si mesmo dá 36. O resultado é 6.",
    s3Cards: [
      { expr: "√", reason: "Símbolo radical da operação" },
      { expr: "36", reason: "Radicando sob o símbolo" },
      { expr: "6", reason: "Raiz principal não negativa" }
    ],
    s3P1: "Toda expressão radical é formada pelo símbolo (√), pelo radicando e pela raiz.",
    s3P2: "Também é possível representar raízes quadradas com expoentes fracionários:",
    s3P3: "Ambas as formas são matematicamente equivalentes. Linguagens de programação utilizam x^(1/2) comumente.",
    s3Caption: "Equivalência entre o símbolo radical √ e o expoente fracionário x^(1/2)",
    s3ToggleRadical: "Forma Radical (√x)",
    s3ToggleExponent: "Forma Expoente (x^½)",
    s3ToggleCode: "Código / Sintaxe",

    s4Eyebrow: "Fórmula Fundamental",
    s4Title: "Qual é a Fórmula da Raiz Quadrada?",
    s4Intro: "Ao contrário de fórmulas geométricas de área, uma raiz quadrada é definida por uma relação de reciprocidade matemática:",
    s4P1: "Em linguagem simples: qualquer que seja a raiz encontrada, multiplicá-la por ela mesma deve obrigatoriamente retornar o número original.",
    s4PrincipalTitle: "Convenção da Raiz Quadrada Principal",
    s4PrincipalText: "A raiz principal é o valor não negativo que soluciona a equação. Tanto 5 quanto -5 ao quadrado são 25, mas por convenção √25 = 5.",

    s5Eyebrow: "Propriedades Fundamentais",
    s5Title: "Cinco Propriedades Essenciais das Raízes Quadradas",
    s5Intro: "Essas regras aceleram o cálculo e permitem simplificar expressões em álgebra e geometria:",
    s5Laws: [
      {
        name: "1. Regra do Produto",
        subtitle: "√(a × b) = √a × √b (para a ≥ 0, b ≥ 0)",
        example: "Exemplo: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Direto: √36 = 6.",
        explanation: "Permite desmembrar raízes em fatores menores para simplificação (ex.: √72 = 6√2)."
      },
      {
        name: "2. Regra do Quociente",
        subtitle: "√(a / b) = √a / √b (para a ≥ 0, b > 0)",
        example: "Exemplo: √(16/4) = √16 / √4 = 4 / 2 = 2. Direto: √4 = 2.",
        explanation: "Permite extrair a raiz de uma fração calculando numerador e denominador separadamente."
      },
      {
        name: "3. Regra da Potência",
        subtitle: "√(a²) = |a| (módulo de a)",
        example: "Exemplo: √(7²) = √49 = 7. O quadrado e a raiz se cancelam.",
        explanation: "Elevar ao quadrado e extrair a raiz retorna o valor absoluto do número."
      },
      {
        name: "4. Multiplicação por Si Mesma",
        subtitle: "√a × √a = a",
        example: "Exemplo: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Multiplicar uma raiz por si mesma elimina o radical. Essencial para racionalização de denominadores (1/√5 = √5/5)."
      },
      {
        name: "5. Raiz de uma Raiz",
        subtitle: "√(√a) = a^(1/4) (raiz quarta)",
        example: "Exemplo: √(√16) = √4 = 2. E 16^(1/4) = 2.",
        explanation: "Extrair a raiz quadrada de uma raiz quadrada resulta na raiz quarta do número."
      }
    ],

    s6Eyebrow: "Métodos de Resolução",
    s6Title: "Como Calcular Raiz Quadrada: Quatro Métodos",
    s6Intro: "Você pode determinar uma raiz quadrada através de quatro abordagens:",
    s6M1Title: "Método 1: Com esta Calculadora Online (O mais rápido)",
    s6M1Text: "Digite seu número acima e clique em Calcular para obter o resultado decimal exato e a forma fatorada.",
    s6M1Action: "Subir para a Calculadora",
    s6M2Title: "Método 2: Fatoração em Primos (Quadrados Perfeitos)",
    s6M2Intro: "Excelente para números inteiros e quadrados perfeitos.",
    s6M2ExTitle: "Exemplos de Fatoração",
    s6M2Steps: [
      "1. Decomponha o número em fatores primos",
      "2. Agrupe os fatores iguais em pares",
      "3. Retire um fator de cada par para fora do radical",
      "4. Multiplique os fatores que saíram da raiz"
    ],
    s6M3Title: "Método 3: Algoritmo Manual da Chave",
    s6M3Intro: "Método sistemático com lápis e papel para obter raízes com qualquer precisão decimal.",
    s6M3Steps: [
      "1. Separe os algarismos em pares a partir da vírgula decimal",
      "2. Ache o maior inteiro cujo quadrado seja menor ou igual ao primeiro par",
      "3. Subtraia, baixe o próximo par e dobre a raiz parcial obtida",
      "4. Determine o próximo dígito por tentativas e repita"
    ],
    s6M3Text: "Algoritmo clássico que viabiliza encontrar raízes sem calculadora.",
    s6M4Title: "Método 4: Estimativa por Médias (Cálculo Mental)",
    s6M4Intro: "Ideal para encontrar uma resposta aproximada rapidamente de cabeça:",
    s6M4ExTitle: "Exemplo: Estimando √50",
    s6M4Steps: [
      "1. Identifique os quadrados perfeitos vizinhos: 49 < 50 < 64 (logo 7 < √50 < 8)",
      "2. Como 50 está muito próximo de 49, √50 é ligeiramente superior a 7",
      "3. Estimativa: aprox. 7,07 (valor exato: 7,0711...)"
    ],
    s6M4Note: "Esse raciocínio fundamenta o método babilônico (algoritmo de Heron / Newton-Raphson).",

    s7Eyebrow: "Quadrados Perfeitos",
    s7Title: "Quadrados Perfeitos: Conceito e Utilidade",
    s7Intro: "Um quadrado perfeito é um número inteiro cuja raiz quadrada é também um número inteiro exato.",
    s7ThNumber: "Número (n)",
    s7ThSquare: "Quadrado Perfeito (n²)",
    s7ThRoot: "Raiz Quadrada (√n²)",
    s7Conclusion: "Memorizar os 20 primeiros quadrados perfeitos agiliza cálculos mentais em provas e no trabalho.",
    s7Caption: "Representação geométrica: figuras quadradas de lado n e área n²",

    s8Eyebrow: "Números Irracionais",
    s8Title: "Números Não-Quadrados Perfeitos e Raízes Irracionais",
    s8Intro: "Quando um número positivo não é um quadrado perfeito, sua raiz quadrada é irracional: suas casas decimais são infinitas e não periódicas.",
    s8Text: "Esses números reais não podem ser expressos como fração de dois inteiros, de forma similar ao número pi (π).",
    s8CalcNote: "Nossa calculadora fornece o valor decimal de alta precisão e a forma simplificada do radical.",

    s9Eyebrow: "Decimais e Frações",
    s9Title: "Raízes Quadradas de Decimais e Frações",
    s9Intro: "A raiz quadrada opera perfeitamente sobre frações e decimais:",
    s9DecimalsTitle: "Raízes de Números Decimais",
    s9DecimalsIntro: "Os decimais finitos são calculados respeitando o posicionamento das casas:",
    s9FractionsTitle: "Raízes de Frações",
    s9FractionsIntro: "Pela regra do quociente, calcule o numerador e o denominador de forma independente:",
    s9Conclusion: "Insira qualquer fração ou decimal na calculadora acima para confirmar seus cálculos.",

    s10Eyebrow: "Números Complexos",
    s10Title: "Raízes de Números Negativos e a Unidade Imaginária i",
    s10P1: "No conjunto dos números reais, números negativos não possuem raiz quadrada pois o quadrado de qualquer número real é sempre positivo.",
    s10P2: "Para contornar isso, a matemática define a unidade imaginária i com i² = -1. Assim: √(-a) = √a × i para todo a > 0.",
    s10P3: "Esses valores constituem os números complexos (a + bi), indispensáveis na engenharia elétrica e na física moderna.",
    s10ExTitle: "Exemplos com Números Negativos",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Nossa ferramenta processa valores negativos de forma automática exibindo o resultado imaginário correspondente.",

    s11Eyebrow: "Operações Inversas",
    s11Title: "Diferença Entre Elevar ao Quadrado e Raiz Quadrada",
    s11Intro: "Elevar ao quadrado e extrair a raiz quadrada são operações matemáticas inversas.",
    s11ThOp: "Operação",
    s11ThWhat: "O que faz",
    s11ThEx: "Exemplo",
    s11RowSquare: "Elevação ao Quadrado (x²)",
    s11RowSquareDesc: "Multiplica o número por si mesmo",
    s11RowRoot: "Raiz Quadrada (√x)",
    s11RowRootDesc: "Descobre que número multiplicado por si mesmo resulta em x",
    s11Inverse: "Uma operação desfaz a outra perfeitamente: √(8²) = √64 = 8, e (√64)² = 8² = 64.",
    s11Absolute: "Como elevar ao quadrado elimina sinais negativos, a raiz principal estabelece √(a²) = |a|.",

    s12Eyebrow: "Tabelas de Referência",
    s12Title: "Tabela Completa de Raízes Quadradas de 1 a 50",
    s12Intro: "Tabela prática de consulta rápida de 1 a 50 com decimais exatos, formas simplificadas e identificação de quadrados perfeitos.",
    s12ChartLinkText: "Precisa de uma tabela completa até 100 para imprimir? Utilize nosso Gerador de Tabelas.",
    s12ScrollHint: "Role para baixo para visualizar todos os 50 valores ↓",
    s12ColNumber: "Número (n)",
    s12ColRoot: "Decimal (√n)",
    s12ColSimplified: "Radical Simplificado",
    s12ColType: "Classificação",
    s12BadgePerfect: "Quadrado Perfeito",
    s12BadgeIrrational: "Irracional",
    s12FilterAll: "Todos os Números (1–50)",
    s12FilterPerfect: "Apenas Quadrados Perfeitos",
    s12FilterIrrational: "Apenas Raízes Irracionais",
    s12SearchPlaceholder: "Filtrar número ou raiz (ex.: 25, √2)...",

    s13Eyebrow: "Simplificação",
    s13Title: "Exemplos de Simplificação de Radicais",
    s13Intro: "Simplificar uma raiz consiste em extrair o maior quadrado perfeito contido no radicando:",
    s13ThExpr: "Radical Original",
    s13ThForm: "Forma Simplificada",
    s13ThWhy: "Fatoração & Explicação",
    s13Conclusion: "A regra do produto permite retirar fatores inteiros mantendo o valor exato.",

    s14Eyebrow: "Aplicações Práticas",
    s14Title: "Aplicações Reais das Raízes Quadradas",
    s14Intro: "As raízes quadradas estão presentes na ciência, na engenharia e no cotidiano:",
    s14Apps: [
      { title: "Construção Civil e Arquitetura", text: "O teorema de Pitágoras (a² + b² = c²) usa raízes para encontrar diagonais e esquadros (ex.: √(3² + 4²) = 5 m)." },
      { title: "Finanças e Investimentos", text: "O desvio-padrão, indicador de volatilidade e risco em carteiras, é a raiz quadrada da variância." },
      { title: "Física e Engenharia", text: "Velocidade em queda livre (v = √(2gh)), circuitos elétricos de corrente alternada e períodos de oscilação." },
      { title: "Computação e Gráficos 3D", text: "Cálculo de distâncias euclidianas em jogos, renderização e algoritmos de complexidade √n." },
      { title: "Medições do Dia a Dia", text: "Determinar a largura de uma sala a partir da área: um quarto de 64 m² possui lados de √64 = 8 m." }
    ],

    s15Eyebrow: "Perguntas Frequentes",
    s15Title: "Perguntas Frequentes (FAQ)",
    s15Faqs: [
      {
        question: "Como usar a Calculadora de Raiz Quadrada?",
        answer: "Digite o número desejado no campo superior e clique em Calcular. Você receberá o valor decimal exato, o radical simplificado (ex.: √72 = 6√2) e a resolução passo a passo."
      },
      {
        question: "O que significa «racine carrée»?",
        answer: "«Racine carrée» é o termo em francês para «raiz quadrada», indicando o número que multiplicado por si mesmo reproduz o valor dado."
      },
      {
        question: "A calculadora resolve números negativos?",
        answer: "Sim. Ela calcula a solução no domínio dos números complexos com a unidade imaginária i (ex.: √(-16) = 4i)."
      },
      {
        question: "Qual a diferença entre raiz quadrada e raiz cúbica?",
        answer: "A raiz quadrada multiplica por si mesma 2 vezes (índice 2). A raiz cúbica multiplica 3 vezes (índice 3) e aceita soluções reais negativas."
      },
      {
        question: "Como calcular a raiz quadrada à mão?",
        answer: "Através da fatoração em primos, do método manual da chave ou por estimativas com médias sucessivas."
      },
      {
        question: "O que é um quadrado perfeito?",
        answer: "Um número inteiro cuja raiz quadrada também é um número inteiro exato (ex.: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Toda raiz quadrada é um número racional?",
        answer: "Não. Apenas as raízes de quadrados perfeitos são racionais. Raízes de outros números são números irracionais com dízimas infinitas não periódicas."
      },
      {
        question: "Esta calculadora é gratuita?",
        answer: "Sim, é 100% gratuita, online, sem necessidade de download ou cadastro."
      },
      {
        question: "Posso calcular raízes de decimais e frações?",
        answer: "Sim. Insira números decimais ou frações para obter a resposta matemática exata."
      },
      {
        question: "O que é raiz quadrada principal?",
        answer: "É a solução não negativa de uma raiz quadrada, adotada como padrão pelo símbolo √."
      }
    ],

    s16Eyebrow: "Resumo",
    s16Title: "Resumo e Principais Conclusões",
    s16BoxTitle: "Conceito Chave",
    s16BoxText: "A raiz quadrada responde à pergunta: que número multiplicado por si mesmo resulta neste valor? Utilize nossa calculadora gratuita para respostas rápidas e exatas.",

    quickCalcLabel: "Cálculo Instantâneo",
    quickCalcSublabel: "Clique em qualquer número para obter o resultado"
  }
};

import { HOME_BOILERPLATE_PART2 } from './homeBoilerplatePart2';
import { HOME_BOILERPLATE_PART3 } from './homeBoilerplatePart3';

Object.assign(HOME_BOILERPLATE, HOME_BOILERPLATE_PART2, HOME_BOILERPLATE_PART3);

export function getHomeBoilerplate(lang: string): HomeBoilerplate {
  return HOME_BOILERPLATE[lang] || HOME_BOILERPLATE.en;
}
