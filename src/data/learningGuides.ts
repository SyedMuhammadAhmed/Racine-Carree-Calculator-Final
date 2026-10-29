/** Original English teaching copy. Visible FAQs and FAQ schema share this source. */
export type GuideKey = 'sqrt' | 'cbrt' | 'nth' | 'square' | 'cube' | 'chart';
export interface GuideSection {
  id: string;
  title: string;
  paragraphs: string[];
  aliases?: string[];
  steps?: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
}
export interface LearningGuide {
  title: string;
  summary: string;
  articleId: string;
  terms: { term: string; meaning: string }[];
  sections: GuideSection[];
  mistakes: string[];
  practice: { question: string; answer: string }[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string; reason: string }[];
  sources: { href: string; label: string }[];
  limits: string;
}
const rootsSource = { href: 'https://openstax.org/books/intermediate-algebra-2e/pages/8-1-simplify-expressions-with-roots', label: 'OpenStax: roots, signs, and radical notation' };
const squareSource = { href: 'https://openstax.org/books/elementary-algebra-2e/pages/9-1-simplify-and-use-square-roots', label: 'OpenStax: square roots and estimation' };
const rootLimits = 'The root tools accept numbers up to 9,007,199,254,740,991 in magnitude. Decimal results use floating-point arithmetic and show up to 12 significant digits. These are meaningful digits, not 12 decimal places. Exact radical simplification is offered for integer inputs up to 1,000,000,000,000 in magnitude. Fractions and decimal inputs receive a numerical approximation. This is not an arbitrary-precision calculator.';
const checkerLimits = 'This checker accepts integers up to 1,000,000,000,000 in magnitude. It rejects fractions, decimal notation, and larger inputs. Use a root calculator for decimal and fraction inputs. This limit keeps integer checks and factorization practical in your browser.';

export const learningGuides: Record<GuideKey, LearningGuide> = {
  sqrt: {
    title: 'Square roots, explained one step at a time', articleId: 'what-is-racine',
    summary: 'A square root reverses squaring. For example, √81 = 9 because 9 × 9 = 81. Use the calculator above for a number or fraction. Use this guide to understand the answer.',
    terms: [
      { term: 'Square root', meaning: 'A number that gives the starting value when multiplied by itself.' },
      { term: 'Radical sign', meaning: 'The symbol √. It asks for the principal square root.' },
      { term: 'Radicand', meaning: 'The value inside the radical. In √81, it is 81.' },
      { term: 'Principal square root', meaning: 'The nonnegative square root of a nonnegative real number. Nonnegative means zero or greater.' },
      { term: 'Perfect square', meaning: 'An integer made by squaring an integer. For example, 81 = 9².' },
      { term: 'Irrational number', meaning: 'A number that cannot be written as a ratio of two integers. Its decimal never ends or repeats.' },
    ],
    sections: [
      { id: 'section-what-is-square-root', title: 'What is a square root?', paragraphs: [
        'Squaring means multiplying a number by itself. The expression 9² means 9 × 9. A square root works backward from 81 to 9.',
        'Racine carrée is the French name for square root. The math is the same in either language. For a nonnegative number x, y = √x means y² = x and y ≥ 0.',
        'The sign matters. Both 9² and (−9)² equal 81. But √81 means the principal root, so the answer is 9. The equation y² = 81 has two solutions: 9 and −9.',
      ], aliases: ['section-notation', 'section-formula', 'section-squaring-vs-root'] },
      { id: 'section-how-to-use', title: 'How to use the square root calculator', paragraphs: ['Enter one value, not a full equation. You can type 81, 2.25, or 9/16. A decimal comma also works: 2,25 means 2.25. Do not add thousands separators.'], steps: [
        'Type your number or fraction in the input box.',
        'Choose Calculate. Read the answer and its exact or approximate label.',
        'Open the calculation steps. Check the answer by squaring it.',
      ], aliases: ['step-input', 'step-calc', 'step-result'] },
      { id: 'section-methods', title: 'Worked example: simplify √72', paragraphs: [
        'A simplified radical keeps an exact answer without rounding. To simplify √72, look for a perfect-square factor.',
        'Since 72 = 36 × 2, write √72 = √36 × √2. Then take the square root of 36. The result is 6√2.',
        'The decimal 8.48528137424 is an approximation. The expression 6√2 is exact. Check it: (6√2)² = 36 × 2 = 72.',
        'You can also use prime factorization. Write 72 = 2 × 2 × 2 × 3 × 3. Each matching pair gives one factor outside the radical.',
      ], aliases: ['method-calculator', 'method-factorization', 'method-division', 'method-estimation', 'section-simplification'] },
      { id: 'section-decimals-fractions', title: 'Decimals, fractions, and negative numbers', paragraphs: [
        'A decimal can have a simple square root. For example, √2.25 = 1.5 because 1.5 × 1.5 = 2.25. For a fraction, √(9/16) = 3/4 because (3/4)² = 9/16.',
        'Some roots never end as decimals. For example, √2 is irrational. Writing √2 ≈ 1.414 shows that the decimal is rounded. The symbol ≈ means approximately equal.',
        'A negative real number has no real square root. Complex numbers extend the system using i, where i² = −1. In that system, the principal square root of −16 is 4i. The two solutions of z² = −16 are 4i and −4i.',
      ], aliases: ['section-negative', 'section-irrational'] },
      { id: 'section-reference-table', title: 'Useful square roots to remember', paragraphs: ['Learn these values first. They help you estimate harder roots. Since 64 < 70 < 81, the square root of 70 lies between 8 and 9.'], aliases: ['section-perfect-squares'], table: {
        caption: 'Perfect squares and their principal roots', headers: ['Number', 'Square root', 'Check'],
        rows: [['0','0','0 × 0 = 0'],['1','1','1 × 1 = 1'],['4','2','2 × 2 = 4'],['9','3','3 × 3 = 9'],['16','4','4 × 4 = 16'],['25','5','5 × 5 = 25'],['36','6','6 × 6 = 36'],['49','7','7 × 7 = 49'],['64','8','8 × 8 = 64'],['81','9','9 × 9 = 81'],['100','10','10 × 10 = 100']],
      } },
      { id: 'section-applications', title: 'Use square roots to find a length', paragraphs: [
        'A square garden has an area of 81 square meters. Its side length is √81 = 9 meters. Area uses square units. Side length uses ordinary length units.',
        'Square roots also appear in the Pythagorean theorem. For a right triangle with legs 6 cm and 8 cm, c² = 6² + 8² = 100. The longest side is c = √100 = 10 cm.',
      ], aliases: ['app-construction', 'app-finance', 'app-physics', 'app-cs', 'app-everyday'] },
      { id: 'section-laws', title: 'Two root rules and a common trap', paragraphs: [
        'For a ≥ 0 and b ≥ 0, √(ab) = √a × √b. For a ≥ 0 and b > 0, √(a/b) = √a / √b. These conditions keep the rules within real numbers.',
        'There is no matching rule for addition. For example, √(9 + 16) = √25 = 5. But √9 + √16 = 3 + 4 = 7.',
      ] },
    ],
    mistakes: ['Do not write √81 = ±9. Use ±9 when solving y² = 81.', 'Do not divide a number by 2 to find its square root.', 'Use = for an exact value and ≈ for a rounded value.', 'Do not split a square root across addition or subtraction.'],
    practice: [
      { question: 'A square tile has an area of 144 cm². What is its side length?', answer: '12 cm. The principal square root of 144 is 12, and 12 × 12 = 144.' },
      { question: 'Simplify √50 without rounding.', answer: '5√2. Since 50 = 25 × 2, √50 = √25 × √2 = 5√2.' },
    ],
    faqs: [
      { question: 'What is the square root of 0?', answer: 'It is 0 because 0 × 0 = 0.' },
      { question: 'Why is √81 equal to 9 rather than −9?', answer: 'The radical sign gives the principal square root. For a nonnegative real number, that root is nonnegative. Both 9 and −9 solve y² = 81.' },
      { question: 'Can I enter a fraction?', answer: 'Yes. Use a slash, such as 9/16. The calculator returns a numerical root. It does not promise exact symbolic fraction arithmetic.' },
      { question: 'Is every decimal square root irrational?', answer: 'No. For example, √0.25 = 0.5, which is rational. A nonnegative integer has an irrational square root only when it is not a perfect square.' },
      { question: 'How can I check my answer?', answer: 'Multiply the result by itself. An exact root gives the starting number. A rounded result gives a nearby number.' },
    ],
    related: [
      { href: '/perfect-square-calculator/', label: 'Perfect square checker', reason: 'Check whether an integer has an integer square root.' },
      { href: '/square-root-chart/', label: 'Square root chart', reason: 'Compare many roots in one table.' },
      { href: '/racine-cubique-calculator/', label: 'Cube root calculator', reason: 'Reverse cubing instead of squaring.' },
    ], sources: [squareSource], limits: rootLimits,
  },
  cbrt: {
    title: 'Cube roots made simple', articleId: 'what-is-cube-root',
    summary: 'A cube root reverses cubing. For example, ∛125 = 5 because 5 × 5 × 5 = 125. A real cube root can be positive, zero, or negative.',
    terms: [
      { term: 'Cube', meaning: 'The result of multiplying a number by itself three times. For example, 5³ = 125.' },
      { term: 'Cube root', meaning: 'The number that gives the radicand when cubed.' },
      { term: 'Index', meaning: 'The small number on a root sign. The 3 in ∛ means cube root.' },
      { term: 'Perfect cube', meaning: 'An integer that equals an integer cubed, such as 125 or −125.' },
      { term: 'Prime factorization', meaning: 'Writing an integer as a product of prime numbers.' },
    ],
    sections: [
      { id: 'section-what-is-cbrt', title: 'What does a cube root mean?', paragraphs: [
        'The French name racine cubique means cube root. The expression ∛x asks which real number gives x when multiplied by itself three times.',
        'For example, 5³ = 125, so ∛125 = 5. Dividing 125 by 3 gives a different result. A root is not division by its index.',
        'You may also see x^(1/3). For positive x, this fractional exponent means the same thing as ∛x. For negative inputs, use a real cube-root function in code. Some general power functions handle fractional exponents differently.',
      ], aliases: ['section-cbrt-notation', 'section-cbrt-formula', 'section-cbrt-laws'] },
      { id: 'section-cbrt-how-to-use', title: 'How to use this calculator', paragraphs: ['Enter a number such as 125, −64, or 0.008. Fractions such as 8/27 also work. Use a point or comma for a decimal. Do not include a thousands separator.'], steps: [
        'Type the value you want to undo by cubing.', 'Select Calculate Cube Root.', 'Read the result, then cube it to check your work.',
      ], aliases: ['cbrt-step-input', 'cbrt-step-calc', 'cbrt-step-result'] },
      { id: 'section-cbrt-methods', title: 'Worked example: simplify ∛54', paragraphs: [
        'Look for a perfect-cube factor of 54. Since 54 = 27 × 2 and ∛27 = 3, the exact result is 3∛2.',
        'With prime factors, 54 = 2 × 3 × 3 × 3. A group of three matching factors contributes one factor outside the cube root. The 2 stays inside.',
        'The decimal result is about 3.779763. The exact form 3∛2 avoids rounding. Check it by cubing: (3∛2)³ = 27 × 2 = 54.',
        'To estimate ∛70, compare nearby cubes. Since 4³ = 64 and 5³ = 125, the answer lies between 4 and 5. It is close to 4 because 70 is close to 64.',
      ], aliases: ['cbrt-method-calculator', 'cbrt-method-factorization', 'cbrt-method-estimation', 'section-cbrt-simplification', 'section-cbrt-algorithm'] },
      { id: 'section-cbrt-negative', title: 'Why negative numbers have real cube roots', paragraphs: [
        'Three negative factors make a negative product. For example, (−4) × (−4) × (−4) = −64. So ∛(−64) = −4.',
        'This differs from a square root. Squaring any real number gives a nonnegative result. Cubing keeps the sign, so every real number has exactly one real cube root.',
        'This guide focuses on real cube roots. Complex roots are a wider topic and are not listed by this calculator.',
      ], aliases: ['section-cbrt-comparison'] },
      { id: 'section-cbrt-decimals-fractions', title: 'Work with decimals and fractions', paragraphs: [
        'For a decimal example, ∛0.008 = 0.2. Check that 0.2 × 0.2 × 0.2 = 0.008.',
        'For a fraction, ∛(8/27) = 2/3. Cubing 2/3 gives 8/27. Likewise, ∛(−8/27) = −2/3.',
        'A displayed decimal may be rounded even when an exact fraction exists. The expression 2/3 is exact. A finite display such as 0.666667 is an approximation.',
      ] },
      { id: 'section-cbrt-perfect-cubes', title: 'Common cubes and cube roots', paragraphs: ['Remember a few cubes to estimate unfamiliar roots. A cube table is also a quick way to check your multiplication.'], aliases: ['section-cbrt-reference'], table: {
        caption: 'Cubes from 0³ to 10³', headers: ['Base', 'Cube', 'Cube root'], rows: Array.from({ length: 11 }, (_, n) => [String(n), String(n ** 3), `∛${n ** 3} = ${n}`]),
      } },
      { id: 'section-cbrt-applications', title: 'Find a cube’s side from its volume', paragraphs: [
        'A cube-shaped box has a volume of 216 cubic centimeters. Its side length is ∛216 = 6 centimeters.',
        'The units change because volume uses three dimensions. A side uses one dimension. The check is 6 cm × 6 cm × 6 cm = 216 cm³.',
        'This method applies to a cube, whose three side lengths are equal. Volume alone does not tell you each side of a rectangular box.',
      ], aliases: ['cbrt-app-architecture', 'cbrt-app-shipping', 'cbrt-app-physics', 'cbrt-app-finance'] },
    ],
    mistakes: ['Do not divide by 3 to find a cube root.', 'Keep the negative sign: ∛(−64) = −4.', 'Group three prime factors when simplifying a cube root. Pairs are for square roots.', 'Use cubic units for volume and length units for a side.'],
    practice: [
      { question: 'What is ∛(−343)?', answer: '−7, because (−7)³ = −343.' },
      { question: 'Simplify ∛128.', answer: '4∛2. Since 128 = 64 × 2 and ∛64 = 4, one factor of 4 comes outside.' },
    ],
    faqs: [
      { question: 'What is the cube root of 0?', answer: 'It is 0 because 0³ = 0.' },
      { question: 'Is the cube root of a negative number real?', answer: 'Yes. For example, ∛(−27) = −3 because (−3)³ = −27.' },
      { question: 'Is ∛2 an exact answer?', answer: 'Yes. The radical ∛2 is exact. Its finite decimal display is rounded.' },
      { question: 'How is a cube root different from a square root?', answer: 'A cube root reverses multiplication by the same number three times. A square root reverses multiplication by the same number twice. Negative real numbers have real cube roots, but no real square roots.' },
      { question: 'Does this tool list every complex cube root?', answer: 'No. It returns the real cube root. Finding all complex roots requires a different calculation.' },
    ],
    related: [
      { href: '/perfect-cube-calculator/', label: 'Perfect cube checker', reason: 'Test whether an integer has an integer cube root.' },
      { href: '/nth-root-calculator/', label: 'Nth root calculator', reason: 'Find fourth, fifth, and other integer-index roots.' },
      { href: '/', label: 'Square root calculator', reason: 'Compare roots with index 2 and index 3.' },
    ], sources: [rootsSource], limits: rootLimits,
  },
  nth: {
    title: 'Understand nth roots and their signs', articleId: 'what-is-nth-root',
    summary: 'An nth root reverses a power. The fourth root of 81 is 3 because 3 × 3 × 3 × 3 = 81. The index tells you how many equal factors to use.',
    terms: [
      { term: 'Index or degree', meaning: 'The positive integer n that tells you which root to find.' },
      { term: 'Radicand', meaning: 'The number under the root sign.' },
      { term: 'Exponent', meaning: 'A number that tells how many equal factors form a power.' },
      { term: 'Even index', meaning: 'An index divisible by 2, such as 2, 4, or 6.' },
      { term: 'Odd index', meaning: 'An index not divisible by 2, such as 3, 5, or 7.' },
      { term: 'Real number', meaning: 'A number on the ordinary number line, including negative numbers, zero, and positive numbers.' },
    ],
    sections: [
      { id: 'section-what-is-nth-root', title: 'What does the small n mean?', paragraphs: [
        'In ⁿ√x, n is the index and x is the radicand. The expression asks for a number y such that yⁿ = x.',
        'A square root has index 2. A cube root has index 3. You usually do not see the 2 on a square-root sign. Higher indices are written beside the sign.',
        'For nonnegative x, you may write the root as x^(1/n). For example, 81^(1/4) = 3. Use care with negative bases in software, since general power functions may not return a real root.',
      ], aliases: ['section-nth-formula', 'section-nth-symbol'] },
      { id: 'section-nth-how-to-use', title: 'Choose the index, then enter the number', paragraphs: ['This calculator finds real roots for integer indices from 1 to 10,000. It does not accept zero, negative, or fractional indices.'], steps: [
        'Enter an index, such as 4.', 'Enter a radicand, such as 625.', 'Choose Calculate Nth Root. Check the answer by raising it to the selected power.',
      ], aliases: ['nth-step-index', 'nth-step-value', 'nth-step-calc'] },
      { id: 'section-nth-parity', title: 'Even and odd roots follow different sign rules', paragraphs: [
        'For an even index, a nonnegative number has a principal nonnegative real root. For example, ⁴√16 = 2. The equation y⁴ = 16 has two real solutions, 2 and −2.',
        'A negative number has no real root with an even index. There is no real number y with y⁴ = −16. This tool shows a domain error for that input.',
        'For an odd index, every real radicand has one real root. The sign stays the same. For example, ⁵√(−32) = −2 because (−2)⁵ = −32.',
        'The first root of a number is the number itself. A zeroth root is not defined by this operation.',
      ] },
      { id: 'section-nth-worked', title: 'Worked example: find the fourth root of 625', paragraphs: [
        'The index is 4, so look for four equal factors. Since 625 = 5 × 5 × 5 × 5, its principal fourth root is 5.',
        'You can also factor 625 as 5⁴. A group of four matching prime factors gives one factor outside a fourth root.',
        'For a result that is not an integer, keep an exact radical or use an approximation. For example, ⁴√32 = 2 × ⁴√2 ≈ 2.378414. Check the exact form: (2 × ⁴√2)⁴ = 16 × 2 = 32.',
        'A fraction works too. The fourth root of 1/16 is 1/2 because (1/2)⁴ = 1/16.',
      ] },
      { id: 'section-nth-reference', title: 'Compare roots with different indices', paragraphs: ['The index changes the question. The same radicand can have different roots when you change the index.'], table: {
        caption: 'Examples of real nth roots', headers: ['Expression', 'Answer', 'Check'], rows: [['√64','8','8² = 64'],['∛64','4','4³ = 64'],['⁶√64','2','2⁶ = 64'],['⁴√81','3','3⁴ = 81'],['⁵√(−243)','−3','(−3)⁵ = −243'],['⁴√0','0','0⁴ = 0']],
      } },
      { id: 'section-nth-applications', title: 'Use a root to undo repeated growth', paragraphs: [
        'Suppose a population changes from 100 to 160 over four equal growth periods. If each period has the same growth factor g, then g⁴ = 160/100 = 1.6.',
        'The factor is g = ⁴√1.6 ≈ 1.124683. Subtract 1 to find the growth rate: about 12.47% per period.',
        'That example assumes equal growth in each period. A root gives the equivalent steady rate. It does not show the actual changes within each period.',
      ] },
    ],
    mistakes: ['Do not divide the radicand by the index.', 'Check whether the index is even before using a negative radicand.', 'Do not confuse an nth root with all solutions of a power equation.', 'Keep more digits during a calculation and round at the end.'],
    practice: [
      { question: 'Find ⁵√(−1024).', answer: '−4. Five factors of −4 give −1024.' },
      { question: 'Does ⁴√(−81) have a real value?', answer: 'No. Every fourth power of a real number is nonnegative.' },
    ],
    faqs: [
      { question: 'What is an nth root?', answer: 'It is a value that gives the radicand when raised to the index n. For example, the fifth root of 32 is 2 because 2⁵ = 32.' },
      { question: 'Which indices does this calculator accept?', answer: 'It accepts positive integer indices from 1 to 10,000. It rejects zero, negative indices, fractional indices, and larger values.' },
      { question: 'Can I find a root of a negative number?', answer: 'Yes, with an odd index. A negative radicand has no real root with an even index. The square-root tool separately supports principal complex square roots.' },
      { question: 'Does this tool find every solution of yⁿ = x?', answer: 'No. It returns the real root selected by the usual root convention. It does not list all real or complex solutions of a power equation.' },
      { question: 'What is the nth root of 1?', answer: 'The principal root is 1 for every positive integer index, because 1 raised to any such power is 1.' },
    ],
    related: [
      { href: '/', label: 'Square root calculator', reason: 'Use index 2 and learn the principal-root rule.' },
      { href: '/racine-cubique-calculator/', label: 'Cube root calculator', reason: 'Work with index 3, including negative radicands.' },
      { href: '/perfect-cube-calculator/', label: 'Perfect cube checker', reason: 'Check integer cube roots rather than a general index.' },
    ], sources: [rootsSource], limits: rootLimits,
  },
  square: {
    title: 'How to tell whether a number is a perfect square', articleId: 'perfect-square-guide',
    summary: 'A perfect square is an integer made by multiplying an integer by itself. For example, 169 is a perfect square because 13 × 13 = 169. The checker answers this yes-or-no question.',
    terms: [
      { term: 'Integer', meaning: 'A whole-number value, including zero and negative whole numbers.' },
      { term: 'Perfect square', meaning: 'An integer n for which n = k² for some integer k.' },
      { term: 'Integer square root', meaning: 'Here, an exact whole-number root of a perfect square.' },
      { term: 'Prime factor', meaning: 'A factor that is prime, such as 2, 3, 5, or 7.' },
      { term: 'Consecutive squares', meaning: 'Squares of neighboring nonnegative integers, such as 12² and 13².' },
    ],
    sections: [
      { id: 'section-perfect-square-definition', title: 'What counts as a perfect square?', paragraphs: [
        'The word perfect means the square root is an integer. For example, √169 = 13, so 169 is a perfect square. But √170 is not an integer, so 170 is not.',
        'Zero counts because 0² = 0. Negative integers do not count. Squaring a positive or negative integer always gives a nonnegative result.',
        'This checker uses the integer definition. A fraction such as 9/16 is the square of 3/4, but it is not an integer perfect square.',
      ] },
      { id: 'section-perfect-square-how-to-use', title: 'How to use the checker', paragraphs: ['Enter an integer such as 169, 170, 0, or −25. Use digits without commas or decimal points. For example, type 10000 rather than 10,000.'], steps: [
        'Enter the integer you want to check.', 'Choose the check button.', 'Read the verdict and root. For a nonnegative number that is not a square, compare its neighboring squares.',
      ] },
      { id: 'section-perfect-square-methods', title: 'Two reliable ways to check', paragraphs: [
        'First, find a possible whole-number square root and multiply it by itself. For 169, try 13. Since 13 × 13 = 169, the check succeeds.',
        'Second, use prime factorization. A positive integer is a perfect square exactly when every prime exponent is even.',
        'For example, 144 = 2⁴ × 3². Both exponents are even, so 144 is a square. Its root is 2² × 3 = 12.',
        'Now compare 180 = 2² × 3² × 5. The exponent of 5 is 1, which is odd. So 180 is not a perfect square.',
        'Prime factorization needs a separate case for zero. Zero is a perfect square, but it does not have a prime factorization.',
      ], aliases: ['section-perfect-square-worked'] },
      { id: 'section-perfect-square-nearest', title: 'Find the squares on each side', paragraphs: [
        'Take 170 as an example. The squares 13² = 169 and 14² = 196 sit on either side. So 169 < 170 < 196, and 13 < √170 < 14.',
        'The nearest square by distance is 169. It is 1 away, while 196 is 26 away. The upper bounding square and the nearest square are not always the same.',
        'A quick last-digit test can rule some numbers out. In base ten, a square can end only in 0, 1, 4, 5, 6, or 9. Passing that test is not proof. For example, 26 ends in 6 but is not a square.',
      ], aliases: ['section-perfect-square-shortcuts'] },
      { id: 'section-perfect-square-reference', title: 'Perfect squares from 0 to 400', paragraphs: ['Read each row as a multiplication fact. These benchmarks help with mental math and estimates.'], table: {
        caption: 'Squares of the integers 0 through 20', headers: ['Integer k', 'Perfect square k²'], rows: Array.from({ length: 21 }, (_, n) => [String(n), String(n*n)]),
      } },
      { id: 'section-perfect-square-edge-cases', title: 'Check zero, negatives, and decimals carefully', paragraphs: [
        'Zero and 1 are perfect squares. The integer −25 is not, even though 25 is. A negative sign inside a square-root symbol changes the problem.',
        'The decimal 2.25 has the exact square root 1.5. That is a valid square-root fact, but 2.25 is not an integer perfect square. Use the square-root calculator for this input.',
        'A square array gives a useful picture. If 169 small tiles form 13 equal rows of 13, the array is square. If you add one tile, 170 tiles cannot make a full square array.',
      ], aliases: ['section-perfect-square-applications'] },
    ],
    mistakes: ['A rounded square root that looks like an integer is not proof. Multiply to verify.', 'A possible last digit does not prove that a number is a square.', 'Do not call every number with a real square root a perfect square.', 'Treat fractions and decimal squares separately from integer perfect squares.'],
    practice: [
      { question: 'Is 225 a perfect square?', answer: 'Yes. Its principal square root is 15 because 15 × 15 = 225.' },
      { question: 'Is 226 a perfect square? Which squares bound it?', answer: 'No. It lies between 225 = 15² and 256 = 16².' },
    ],
    faqs: [
      { question: 'Is 0 a perfect square?', answer: 'Yes. It equals the integer 0 multiplied by itself.' },
      { question: 'Can a negative integer be a perfect square?', answer: 'No. The square of any real integer is nonnegative.' },
      { question: 'Is 1 a perfect square?', answer: 'Yes. The equation 1 × 1 = 1 proves it.' },
      { question: 'Are all numbers ending in 4 perfect squares?', answer: 'No. A square can end in 4, but that does not prove it is a square. For example, 14 is not a perfect square.' },
      { question: 'Should I use this checker or the square-root calculator?', answer: 'Use this checker for a yes-or-no test on an integer. Use the square-root calculator for a numerical root, fractions, decimals, or a simplified radical.' },
    ],
    related: [
      { href: '/', label: 'Square root calculator', reason: 'Find numerical roots and simplify supported integer radicals.' },
      { href: '/square-root-chart/', label: 'Square root chart', reason: 'Compare a range of numbers and their roots.' },
      { href: '/perfect-cube-calculator/', label: 'Perfect cube checker', reason: 'Check groups of three equal factors instead of two.' },
    ], sources: [squareSource, { href: 'https://oeis.org/A000290', label: 'OEIS A000290: nonnegative square numbers' }], limits: checkerLimits,
  },
  cube: {
    title: 'How to check a perfect cube', articleId: 'perfect-cube-guide',
    summary: 'A perfect cube is an integer made from three equal integer factors. For example, 216 = 6 × 6 × 6. Negative integers can be perfect cubes too.',
    terms: [
      { term: 'Perfect cube', meaning: 'An integer n for which n = k³ for some integer k.' },
      { term: 'Base', meaning: 'The number being cubed. In 6³, the base is 6.' },
      { term: 'Cube root', meaning: 'The value that reverses cubing. The cube root of 216 is 6.' },
      { term: 'Prime exponent', meaning: 'The number of times a prime appears in a prime factorization.' },
      { term: 'Volume', meaning: 'The space inside a three-dimensional object, measured in cubic units.' },
    ],
    sections: [
      { id: 'section-perfect-cube-definition', title: 'What makes a cube perfect?', paragraphs: [
        'An integer is a perfect cube when its real cube root is an integer. For example, ∛216 = 6. But ∛217 lies between 6 and 7, so 217 is not a perfect cube.',
        'Negative integers can pass this test. Since (−6)³ = −216, the number −216 is a perfect cube. Zero also counts because 0³ = 0.',
        'This page uses the integer meaning of perfect cube. The fraction 8/27 equals (2/3)³, but it is not an integer perfect cube.',
      ] },
      { id: 'section-perfect-cube-how-to-use', title: 'Use the checker for one integer', paragraphs: ['Enter an integer without decimal points or grouping commas. Examples include 216, −343, and 0. The checker tests that integer and explains the result.'], steps: [
        'Type the integer you want to test.', 'Choose the check button.', 'For a perfect cube, verify the base by cubing it. Otherwise, compare the cubes on either side.',
      ] },
      { id: 'section-perfect-cube-methods', title: 'Worked examples with prime factors', paragraphs: [
        'A positive integer is a perfect cube exactly when every prime exponent is a multiple of 3. For a negative integer, apply the test to its magnitude and keep the negative base.',
        'Take 1728. Its prime factorization is 2⁶ × 3³. Both 6 and 3 are multiples of 3. Dividing each exponent by 3 gives the root: 2² × 3 = 12. Check that 12³ = 1728.',
        'Now try 432 = 2⁴ × 3³. The exponent 4 is not a multiple of 3, so 432 is not a perfect cube.',
        'For a smaller check, 7³ = 343. Therefore, both 343 and −343 are perfect cubes. Their real cube roots are 7 and −7.',
        'Zero needs a separate check. It is a perfect cube even though it has no prime factorization.',
      ], aliases: ['section-perfect-cube-worked'] },
      { id: 'section-perfect-cube-nearest', title: 'Find nearby cubes without guessing', paragraphs: [
        'For 70, use 4³ = 64 and 5³ = 125. Then 64 < 70 < 125, so 4 < ∛70 < 5. The nearest cube by distance is 64.',
        'Keep numerical order when the input is negative. Since −125 < −70 < −64, the cube root of −70 lies between −5 and −4.',
        'The last digit can help when you already know a number is a cube. It cannot prove that a number is a perfect cube. Every base-ten digit can appear at the end of a cube.',
      ], aliases: ['section-perfect-cube-shortcuts'] },
      { id: 'section-perfect-cube-reference', title: 'Cubes worth learning first', paragraphs: ['Start with these small values. To find the corresponding negative cube, change the signs of both the base and the result.'], table: {
        caption: 'Perfect cubes from 0 to 1,000', headers: ['Base k', 'Cube k³'], rows: Array.from({ length: 11 }, (_, n) => [String(n), String(n ** 3)]),
      } },
      { id: 'section-perfect-cube-edge-cases', title: 'Cubes, fractions, and real objects', paragraphs: [
        'The values 0.008 and 8/27 have rational cube roots. They are cubes of rational numbers, but they are not integer perfect cubes. Use the cube-root calculator for those inputs.',
        'A solid cube with volume 343 cm³ has side length 7 cm. This connects the number 343 with a physical cube.',
        'A negative volume does not describe an ordinary box. Negative perfect cubes are valid numbers, but not every number example represents a physical measurement.',
        'A number can be both a perfect square and a perfect cube. For example, 64 = 8² = 4³. Among nonnegative integers, these shared values are sixth powers.',
      ], aliases: ['section-perfect-cube-applications', 'section-perfect-cube-squares-vs-cubes'] },
    ],
    mistakes: ['Keep the sign: the real cube root of −343 is −7.', 'Group prime factors in threes, not pairs.', 'Do not treat a matching last digit as a complete cube test.', 'Do not confuse the nearest cube with only the next larger cube.'],
    practice: [
      { question: 'Is −512 a perfect cube?', answer: 'Yes. The integer −8 cubed equals −512.' },
      { question: 'Is 100 a perfect cube? What bounds its root?', answer: 'No. Since 64 < 100 < 125, its cube root lies between 4 and 5.' },
    ],
    faqs: [
      { question: 'Can a perfect cube be negative?', answer: 'Yes. Three negative factors make a negative product. For example, (−2)³ = −8.' },
      { question: 'Is 0 a perfect cube?', answer: 'Yes. The integer 0 cubed equals 0.' },
      { question: 'Is every perfect square also a perfect cube?', answer: 'No. For example, 9 = 3² is a perfect square but not a perfect cube. Some values, such as 64, belong to both groups.' },
      { question: 'Why do prime exponents need to be multiples of 3?', answer: 'Cubing a number repeats each of its prime factors three times. A cube root can remove complete groups of three.' },
      { question: 'Which tool should I use for ∛54?', answer: 'Use the cube-root calculator. The exact form is 3∛2. This perfect-cube checker answers whether an integer has an integer cube root.' },
    ],
    related: [
      { href: '/racine-cubique-calculator/', label: 'Cube root calculator', reason: 'Find decimal roots and simplify supported cube radicals.' },
      { href: '/perfect-square-calculator/', label: 'Perfect square checker', reason: 'Compare squares with cubes.' },
      { href: '/nth-root-calculator/', label: 'Nth root calculator', reason: 'Explore fourth, fifth, and sixth roots.' },
    ], sources: [rootsSource, { href: 'https://oeis.org/A000578', label: 'OEIS A000578: nonnegative cube numbers' }], limits: checkerLimits,
  },
  chart: {
    title: 'Build a square root chart you can read', articleId: 'square-root-chart-guide',
    summary: 'A square root chart puts numbers and their roots in a table. Use it to compare values, learn perfect squares, or prepare a worksheet. Use a calculator when you need one detailed answer.',
    terms: [
      { term: 'Range', meaning: 'The interval from the starting number to the ending number.' },
      { term: 'Step', meaning: 'The amount added to reach the next row.' },
      { term: 'Decimal places', meaning: 'The count of digits shown after the decimal point.' },
      { term: 'Rounded value', meaning: 'An approximation shortened to the chosen number of digits.' },
      { term: 'Perfect square', meaning: 'An integer with an integer square root, such as 49.' },
    ],
    sections: [
      { id: 'section-chart-how-to-use', title: 'Choose a range and build your table', paragraphs: [
        'The starting and ending numbers set the range. The step controls the gap between rows. For example, start 1, end 5, and step 1 produce five rows.',
        'Use a smaller step when you need decimal inputs. Start 1, end 2, and step 0.5 produce the rows 1, 1.5, and 2. A step must be positive.',
      ], steps: ['Set the start, end, and step.', 'Choose the displayed decimal places.', 'Generate the chart. Read the input and root in each row.', 'Use the copy or print control when the table is ready.'], aliases: ['section-chart-intro'] },
      { id: 'section-chart-reference', title: 'How to read a square root chart', paragraphs: [
        'Each row connects a number x with its principal root √x. An equals sign gives an exact value. The sign ≈ shows a rounded decimal.',
        'A row for 49 says √49 = 7. A row for 50 gives √50 ≈ 7.071 at three decimal places. The two rows show why √50 is just above 7.',
      ], table: { caption: 'Sample square roots, rounded to three decimal places where needed', headers: ['Input x', 'Root', 'Meaning'], rows: [['0','0','Exact'],['1','1','Exact'],['2','≈ 1.414','Rounded'],['3','≈ 1.732','Rounded'],['4','2','Exact'],['9','3','Exact'],['16','4','Exact'],['25','5','Exact'],['49','7','Exact'],['50','≈ 7.071','Rounded'],['64','8','Exact'],['100','10','Exact']] } },
      { id: 'section-chart-precision', title: 'Decimal places are different from accuracy', paragraphs: [
        'Three decimal places means three digits after the point. For example, √2 becomes 1.414. Six decimal places give 1.414214. Both are rounded versions of the same irrational number.',
        'The value √0.25 = 0.5 is rational even though it is not an integer. A root with a decimal point is not automatically irrational.',
        'For nonnegative integer inputs, a root is either an integer or irrational. That simple split does not hold for decimal inputs. A rational number can have a non-integer rational square root.',
        'Round only after finishing a calculation. If you square the displayed value 1.414, you get 1.999396, not exactly 2. That small difference comes from rounding.',
      ], aliases: ['section-chart-calculation', 'section-chart-mistakes'] },
      { id: 'section-chart-perfect-squares', title: 'Use perfect squares as landmarks', paragraphs: [
        'Perfect squares have exact integer roots. The first few are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100.',
        'These landmarks help you estimate between rows. Since 81 < 90 < 100, the square root of 90 lies between 9 and 10.',
        'The gaps between square numbers get wider. From 7² to 8², the gap is 15. From 8² to 9², it is 17. In general, (k + 1)² − k² = 2k + 1.',
      ], aliases: ['section-chart-extended', 'section-chart-memorize'] },
      { id: 'section-chart-spreadsheet', title: 'Make the same table in a spreadsheet', paragraphs: [
        'Put a nonnegative number in cell A2. In Excel or Google Sheets, enter =SQRT(A2) in cell B2. Copy the formula down to calculate other rows.',
        'To show three decimal places, format the cells to three decimals. Cell formatting changes the display while keeping the stored result. The formula =ROUND(SQRT(A2),3) changes the value used in later formulas.',
        'The spreadsheet SQRT function expects a nonnegative real input. A negative input gives an error rather than a real square root.',
      ] },
      { id: 'section-chart-comparison', title: 'Choose a chart or a single calculation', paragraphs: [
        'Use a chart when you need several roots side by side. It works well for a worksheet, quick estimates, or comparing patterns.',
        'Use the square-root calculator when you want one answer with steps or a simplified radical. Use the perfect-square checker for a yes-or-no integer test.',
        'For a geometry example, compare squares with areas 25, 36, and 49 cm². Their side lengths are 5, 6, and 7 cm. The chart links area to side length.',
      ], aliases: ['section-chart-applications'] },
    ],
    mistakes: ['Read the column heading. A number and its square root are different values.', 'Do not assume equal input steps produce equal root steps.', 'Do not call every non-integer root irrational when your inputs include decimals.', 'Do not use rounded table values as exact proofs.'],
    practice: [
      { question: 'Your chart shows √40 ≈ 6.325. Between which integers should it lie?', answer: 'Between 6 and 7, because 36 < 40 < 49.' },
      { question: 'What rows come from start 2, end 5, and step 1.5?', answer: 'The inputs are 2, 3.5, and 5. Each new input adds 1.5.' },
    ],
    faqs: [
      { question: 'What does a square root chart show?', answer: 'It pairs each input with its principal square root. It may also show a simplified radical or mark integer roots.' },
      { question: 'Can the chart include zero?', answer: 'Yes. The principal square root of 0 is 0.' },
      { question: 'Does the chart show real roots of negative numbers?', answer: 'No. Negative real numbers have no real square roots. Use the square-root calculator for a principal complex square root.' },
      { question: 'Does showing more decimal places make a value exact?', answer: 'No. An irrational root never ends as a decimal. More displayed places give a closer approximation, within the calculator’s numerical precision.' },
      { question: 'Why did the generator shorten my range?', answer: 'A chart is limited to 1,000 rows. If your start, end, and step would create more rows, the generator reduces the end value.' },
    ],
    related: [
      { href: '/', label: 'Square root calculator', reason: 'Get steps for one root and supported radical simplification.' },
      { href: '/perfect-square-calculator/', label: 'Perfect square checker', reason: 'Check an integer without making a full chart.' },
      { href: '/racine-cubique-calculator/', label: 'Cube root calculator', reason: 'Find roots with index 3 instead of 2.' },
    ], sources: [squareSource], limits: 'The generator makes up to 1,000 rows. It uses floating-point arithmetic and rounded decimal displays. It rounds generated inputs to five decimal places. Use sensible nonnegative ranges and positive steps. For tiny values, large values, or a proof of an exact result, use a suitable numerical or symbolic tool rather than this chart.',
  },
};
