// Localized educational copy and child sections for Perfect Square Calculator across all 18 languages

export interface SquareBoilerplate {
  s1Intro: string;
  s1Steps: Array<{ title: string; text: string }>;
  s2Lead: string;
  s2P1: string;
  s2P2: string;
  s2Cards: Array<{ title: string; text: string }>;
  s3Intro: string;
  s3Tests: Array<{ title: string; text: string }>;
  s4Examples: Array<{ title: string; expr: string; reason: string; verdict: string }>;
  s5Intro: string;
  s5R1Title: string;
  s5R1Text: string;
  s5R2Title: string;
  s5R2Text: string;
  s6Lead: string;
  s6P1: string;
  s7Lead: string;
  s7P1: string;
  s8Lead: string;
  s9Apps: Array<{ title: string; text: string }>;
  s10Mistakes: Array<{ title: string; text: string }>;
  s12Cards: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const SQUARE_BOILERPLATE: Record<string, SquareBoilerplate> = {
  en: {
    s1Intro: "Check any number in seconds. Follow these 3 easy steps:",
    s1Steps: [
      { title: "Enter Your Number", text: "Type any whole integer into the input box, or click one of the preset chips." },
      { title: "Click 'Check Perfect Square'", text: "Hit Enter or click check to run the exact square root and prime factor algorithm." },
      { title: "Review the Instant Breakdown", text: "Get the verdict, base root, parity, bounding squares, and prime factorization." }
    ],
    s2Lead: "A perfect square is an integer that equals a whole number multiplied by itself: n = k² = k × k.",
    s2P1: "For example, 144 is a perfect square because 12 × 12 = 144. In contrast, 50 is not a perfect square because √50 ≈ 7.071 (not an integer).",
    s2P2: "The word square comes from geometry: 144 tiles form a neat 12×12 square grid. You can never tile a square with 50 without broken tiles.",
    s2Cards: [
      { title: "2D Surface Geometry", text: "The area of a square with side length k is always k². Perfect squares represent whole-tile grids." },
      { title: "Real Numbers Only", text: "In the real number system, squares are non-negative: k² ≥ 0. Negatives give imaginary roots." },
      { title: "Parity Preserved", text: "Even numbers square to even squares (4²=16); odd numbers square to odd squares (5²=25)." },
      { title: "Even Prime Powers", text: "In prime factorization, every prime exponent must be an even number (2, 4, 6...)." }
    ],
    s3Intro: "The calculator runs three successive mathematical proofs:",
    s3Tests: [
      { title: "1. Exact Square Root Test", text: "Calculates √n using arbitrary-precision arithmetic to verify that the remainder is exactly zero." },
      { title: "2. Prime Factorization Test", text: "Factors n into prime powers: n = p₁^{e₁} × p₂^{e₂}... and verifies that every exponent is even." },
      { title: "3. Digital Root (Mod 9) Filter", text: "Instantly rules out numbers whose repeated digit sum is not 1, 4, 7, or 9." }
    ],
    s4Examples: [
      { title: "Example 1: Checking 144", expr: "√144 = 12", reason: "12 × 12 = 144 (exact integer)", verdict: "PERFECT SQUARE" },
      { title: "Example 2: Checking 50", expr: "√50 ≈ 7.071", reason: "Lies between 7²=49 and 8²=64", verdict: "NOT A PERFECT SQUARE" },
      { title: "Example 3: Checking -16", expr: "√(-16) = ±4i", reason: "No real number squares to negative", verdict: "NOT REAL" }
    ],
    s5Intro: "Two fast shortcuts to rule out non-squares in seconds:",
    s5R1Title: "1. The Last-Digit Rule",
    s5R1Text: "A perfect square can only end in 0, 1, 4, 5, 6, or 9. If an integer ends in 2, 3, 7, or 8, it is NEVER a perfect square!",
    s5R2Title: "2. The Digital Root (Mod 9) Rule",
    s5R2Text: "Sum the digits repeatedly: a perfect square's digital root is always 1, 4, 7, or 9 (or 0 for 0).",
    s6Lead: "Why negative numbers and decimals are evaluated strictly:",
    s6P1: "In real numbers, squaring always yields a value ≥ 0. Negative integers yield complex numbers involving the imaginary unit (±bi).",
    s7Lead: "Any non-square integer sits strictly between two consecutive squares: k² < n < (k + 1)².",
    s7P1: "For instance, 50 sits between 49 (7²) and 64 (8²). Because 50 - 49 = 1, 49 is the nearest square (just 1 unit away).",
    s8Lead: "Essential reference table for mental math and exams:",
    s9Apps: [
      { title: "Geometry & Area", text: "Finding tile counts, floor plans, and square parcel dimensions." },
      { title: "Pythagorean Theorem", text: "Computing hypotenuses in surveying and construction: a² + b² = c²." },
      { title: "Physics & Kinetics", text: "Kinetic energy (½mv²) and gravitational acceleration distance formulas." },
      { title: "Computer Science", text: "Quadtree spatial partitioning and 2D matrix memory structures." }
    ],
    s10Mistakes: [
      { title: "Squaring vs. Doubling", text: "Squaring is multiplying by itself (5²=25), not multiplying by two (5×2=10)." },
      { title: "Last Digit Sufficiency", text: "Ending in 4 does not guarantee a square (14, 24 are not squares; only 4, 64, 144...)." },
      { title: "Sign & Parentheses", text: "Careful with notation: (-4)² = 16, whereas -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Formula", text: "n = k × k where k is an integer." },
      { title: "Last Digits", text: "Can only end in 0, 1, 4, 5, 6, or 9." },
      { title: "Even Exponents", text: "Every prime factor must carry an even exponent." },
      { title: "100% Free", text: "Check any number with full breakdown above." }
    ],
    faqs: [
      { question: "What is a perfect square in simple terms?", answer: "A perfect square is a whole number that results from multiplying an integer by itself. For example, 36 is a perfect square because 6 × 6 = 36." },
      { question: "Can a negative number be a perfect square?", answer: "No, in real-number arithmetic, negative numbers cannot be perfect squares because the square of any real number is always zero or positive." },
      { question: "Is 0 a perfect square?", answer: "Yes, 0 is a perfect square because 0 × 0 = 0 (0² = 0)." },
      { question: "What is the difference between a square root and a perfect square?", answer: "The perfect square is the product (e.g. 25), while the square root is the original number that was multiplied (e.g. 5)." },
      { question: "Is this calculator free?", answer: "Yes, our Perfect Square Calculator is 100% free with unlimited checks, instant answers, and detailed step-by-step proofs." }
    ]
  },
  fr: {
    s1Intro: "Vérifiez n'importe quel nombre en quelques secondes grâce à ces 3 étapes :",
    s1Steps: [
      { title: "Entrez votre nombre", text: "Saisissez un nombre entier dans le champ, ou cliquez sur un bouton rapide." },
      { title: "Cliquez sur 'Vérifier'", text: "Appuyez sur Entrée ou cliquez pour lancer l'algorithme de racine exacte." },
      { title: "Consultez l'analyse", text: "Obtenez le verdict, la racine, la parité, les carrés encadrants et les facteurs." }
    ],
    s2Lead: "Un carré parfait est un entier égal au produit d'un entier par lui-même : n = k² = k × k.",
    s2P1: "Par exemple, 144 est un carré parfait car 12 × 12 = 144. En revanche, 50 ne l'est pas car √50 ≈ 7,071.",
    s2P2: "Le terme carré provient de la géométrie : 144 carreaux forment un carré parfait de 12×12 sans morceau brisé.",
    s2Cards: [
      { title: "Géométrie de surface 2D", text: "L'aire d'un carré de côté k vaut k². Les carrés parfaits représentent des quadrillages réguliers." },
      { title: "Nombres réels uniquement", text: "Dans les réels, tout carré est non négatif : k² ≥ 0. Les négatifs donnent des racines complexes." },
      { title: "Parité conservée", text: "Le carré d'un nombre pair est pair (4²=16) ; celui d'un impair est impair (5²=25)." },
      { title: "Exposants pairs", text: "Dans la décomposition première, chaque exposant doit obligatoirement être pair (2, 4, 6...)." }
    ],
    s3Intro: "Le calculateur applique trois vérifications rigoureuses :",
    s3Tests: [
      { title: "1. Test de la racine entière", text: "Calcule √n en précision arbitraire pour confirmer l'absence de reste décimal." },
      { title: "2. Décomposition en facteurs premiers", text: "Décompose n en puissances premières et vérifie que chaque exposant est pair." },
      { title: "3. Filtre de la racine numérique (Mod 9)", text: "Élimine immédiatement les nombres dont la somme répétée des chiffres n'est pas 1, 4, 7 ou 9." }
    ],
    s4Examples: [
      { title: "Exemple 1 : Vérifier 144", expr: "√144 = 12", reason: "12 × 12 = 144 (entier exact)", verdict: "CARRÉ PARFAIT" },
      { title: "Exemple 2 : Vérifier 50", expr: "√50 ≈ 7,071", reason: "Entre 7²=49 et 8²=64", verdict: "NON CARRÉ PARFAIT" },
      { title: "Exemple 3 : Vérifier -16", expr: "√(-16) = ±4i", reason: "Aucun réel au carré n'est négatif", verdict: "NON RÉEL" }
    ],
    s5Intro: "Deux astuces rapides pour exclure les non-carrés sans calculatrice :",
    s5R1Title: "1. Règle du dernier chiffre",
    s5R1Text: "Un carré parfait se termine TOUJOURS par 0, 1, 4, 5, 6 ou 9. S'il se termine par 2, 3, 7 ou 8, ce n'est JAMAIS un carré !",
    s5R2Title: "2. Règle de la racine numérique (Mod 9)",
    s5R2Text: "Additionnez les chiffres jusqu'à un chiffre : elle vaut toujours 1, 4, 7 ou 9 (ou 0 pour 0).",
    s6Lead: "Pourquoi les nombres négatifs et décimaux sont rejetés :",
    s6P1: "Dans les réels, élever au carré donne toujours un résultat ≥ 0. Les entiers négatifs produisent des racines imaginaires (±bi).",
    s7Lead: "Tout nombre non carré se situe entre deux carrés consécutifs : k² < n < (k + 1)².",
    s7P1: "Par exemple, 50 se trouve entre 49 (7²) et 64 (8²). Comme 50 - 49 = 1, 49 est le carré le plus proche (à 1 unité).",
    s8Lead: "Tableau de référence indispensable pour le calcul mental et les concours :",
    s9Apps: [
      { title: "Géométrie et Surfaces", text: "Calcul de carrelages, surfaces de pièces et parcelles carrées." },
      { title: "Théorème de Pythagore", text: "Calcul d'hypothénuses et diagonales en charpente et topographie : a² + b² = c²." },
      { title: "Physique et Cinétique", text: "Formules d'énergie cinétique (½mv²) et distances de freinage." },
      { title: "Informatique", text: "Arbres quadratiques (quadtrees) et matrices bidimensionnelles en mémoire." }
    ],
    s10Mistakes: [
      { title: "Confondre Carré et Doubler", text: "Élever au carré, c'est multiplier par soi-même (5²=25), pas par deux (5×2=10)." },
      { title: "Dernier chiffre suffisant", text: "Finir par 4 ne garantit pas un carré (14 et 24 ne le sont pas ; seuls 4, 64, 144...)." },
      { title: "Signe et Parenthèses", text: "Attention à la notation : (-4)² = 16 alors que -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Formule", text: "n = k × k avec k entier." },
      { title: "Dernier Chiffre", text: "Se termine uniquement par 0, 1, 4, 5, 6 ou 9." },
      { title: "Exposants Pairs", text: "Tous les facteurs premiers ont des puissances paires." },
      { title: "100% Gratuit", text: "Vérifiez n'importe quel nombre avec démonstration ci-dessus." }
    ],
    faqs: [
      { question: "Qu'est-ce qu'un carré parfait en termes simples ?", answer: "Un carré parfait est un nombre entier issu de la multiplication d'un entier par lui-même. Par exemple, 36 est un carré parfait car 6 × 6 = 36." },
      { question: "Un nombre négatif peut-il être un carré parfait ?", answer: "Non, dans l'ensemble des nombres réels, un négatif ne peut pas être un carré parfait car le carré de tout réel est positif ou nul." },
      { question: "Le nombre 0 est-il un carré parfait ?", answer: "Oui, 0 est un carré parfait car 0 × 0 = 0 (0² = 0)." },
      { question: "Quelle est la différence entre racine carrée et carré parfait ?", answer: "Le carré parfait est le résultat obtenu (ex. 25), tandis que la racine carrée est le nombre de base (ex. 5)." },
      { question: "Ce calculateur est-il gratuit ?", answer: "Oui, notre calculateur de carrés parfaits est 100% gratuit et sans limite d'utilisation." }
    ]
  },
  es: {
    s1Intro: "Comprueba cualquier número en segundos. Sigue estos 3 sencillos pasos:",
    s1Steps: [
      { title: "Introduce tu número", text: "Escribe un número entero en la casilla o haz clic en uno de los accesos directos." },
      { title: "Haz clic en 'Comprobar'", text: "Pulsa Intro o haz clic para ejecutar el algoritmo de raíz cuadrada exacta." },
      { title: "Revisa la demostración", text: "Obtén el veredicto, la raíz base, la paridad, los cuadrados límite y los factores primos." }
    ],
    s2Lead: "Un cuadrado perfecto es un entero que equivale a multiplicar un número entero por sí mismo: n = k² = k × k.",
    s2P1: "Por ejemplo, 144 es un cuadrado perfecto porque 12 × 12 = 144. En cambio, 50 no lo es porque √50 ≈ 7.071.",
    s2P2: "La palabra cuadrado proviene de la geometría: 144 baldosas forman una cuadrícula perfecta de 12×12 sin piezas rotas.",
    s2Cards: [
      { title: "Geometría de superficie 2D", text: "El área de un cuadrado de lado k es k². Los cuadrados representan cuadrículas regulares completas." },
      { title: "Solo números reales", text: "En los números reales, todo cuadrado es no negativo: k² ≥ 0. Los negativos producen raíces imaginarias." },
      { title: "Paridad conservada", text: "Los pares dan cuadrados pares (4²=16); los impares dan cuadrados impares (5²=25)." },
      { title: "Exponentes primos pares", text: "En la factorización prima, cada exponente debe ser par obligatoriamente (2, 4, 6...)." }
    ],
    s3Intro: "La calculadora ejecuta tres rigurosas comprobaciones matemáticas:",
    s3Tests: [
      { title: "1. Prueba de la raíz entera", text: "Calcula √n con alta precisión para verificar que el residuo decimal sea exactamente cero." },
      { title: "2. Factorización en primos", text: "Descompone n en potencias de primos y comprueba que cada exponente sea par." },
      { title: "3. Filtro de raíz digital (Módulo 9)", text: "Descarta de inmediato números cuya suma reducida de dígitos no sea 1, 4, 7 o 9." }
    ],
    s4Examples: [
      { title: "Ejemplo 1: Comprobar 144", expr: "√144 = 12", reason: "12 × 12 = 144 (entero exacto)", verdict: "CUADRADO PERFECTO" },
      { title: "Ejemplo 2: Comprobar 50", expr: "√50 ≈ 7.071", reason: "Entre 7²=49 y 8²=64", verdict: "NO ES CUADRADO PERFECTO" },
      { title: "Ejemplo 3: Comprobar -16", expr: "√(-16) = ±4i", reason: "Un cuadrado real no puede ser negativo", verdict: "NO ES REAL" }
    ],
    s5Intro: "Dos atajos rápidos para descartar no-cuadrados en segundos:",
    s5R1Title: "1. Regla del último dígito",
    s5R1Text: "Un cuadrado perfecto termina ÚNICAMENTE en 0, 1, 4, 5, 6 o 9. Si termina en 2, 3, 7 u 8, ¡NUNCA es un cuadrado perfecto!",
    s5R2Title: "2. Raíz digital (Módulo 9)",
    s5R2Text: "Suma los dígitos: la raíz digital de un cuadrado siempre es 1, 4, 7 o 9 (o 0 para el 0).",
    s6Lead: "Por qué los números negativos y decimales se evalúan estrictamente:",
    s6P1: "En los números reales, elevar al cuadrado siempre produce un resultado ≥ 0. Los enteros negativos generan raíces complejas (±bi).",
    s7Lead: "Cualquier no-cuadrado queda encerrado entre dos cuadrados consecutivos: k² < n < (k + 1)².",
    s7P1: "Por ejemplo, 50 queda entre 49 (7²) y 64 (8²). Como 50 - 49 = 1, 49 es el cuadrado más cercano (a solo 1 unidad).",
    s8Lead: "Tabla de referencia esencial para el cálculo rápido y exámenes:",
    s9Apps: [
      { title: "Geometría y Áreas", text: "Cálculo de dimensiones de parcelas cuadradas y losas de pavimento." },
      { title: "Teorema de Pitágoras", text: "Cálculo de diagonales e hipotenusas en topografía y carpintería: a² + b² = c²." },
      { title: "Física y Cinética", text: "Fórmulas de energía cinética (½mv²) y caída libre con aceleración." },
      { title: "Informática y Matrices", text: "Indexación espacial por cuadrantes (quadtrees) y memoria matricial." }
    ],
    s10Mistakes: [
      { title: "Confundir Cuadrado con Duplicar", text: "Elevar al cuadrado es multiplicar por sí mismo (5²=25), no por dos (5×2=10)." },
      { title: "Dígito final suficiente", text: "Terminar en 4 no asegura un cuadrado (14 y 24 no lo son; solo 4, 64, 144...)." },
      { title: "Signos y Paréntesis", text: "Cuidado con la notación: (-4)² = 16, mientras que -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Fórmula", text: "n = k × k con k entero." },
      { title: "Último Dígito", text: "Solo puede terminar en 0, 1, 4, 5, 6 o 9." },
      { title: "Exponentes Pares", text: "Cada factor primo debe tener exponente divisible entre 2." },
      { title: "100% Gratis", text: "Comprueba cualquier número con demostración completa arriba." }
    ],
    faqs: [
      { question: "¿Qué es un cuadrado perfecto en palabras sencillas?", answer: "Un cuadrado perfecto es un número entero que se puede escribir como el producto de dos enteros iguales. Por ejemplo, 36 es un cuadrado perfecto porque 6 × 6 = 36." },
      { question: "¿Puede un número negativo ser un cuadrado perfecto?", answer: "No, en la aritmética real un número negativo no puede ser un cuadrado perfecto porque el cuadrado de cualquier número real es siempre positivo o cero." },
      { question: "¿El 0 es un cuadrado perfecto?", answer: "Sí, 0 es un cuadrado perfecto porque 0 × 0 = 0 (0² = 0)." },
      { question: "¿Cuál es la diferencia entre raíz cuadrada y cuadrado perfecto?", answer: "El cuadrado perfecto es el producto resultante (ej. 25), mientras que la raíz cuadrada es el número original elevado al cuadrado (ej. 5)." },
      { question: "¿Es gratis esta calculadora?", answer: "Sí, nuestra calculadora de cuadrados perfectos es 100% gratuita con comprobaciones ilimitadas y demostraciones completas paso a paso." }
    ]
  },
  de: {
    s1Intro: "Prüfen Sie jede Zahl in Sekundenschnelle mit diesen 3 einfachen Schritten:",
    s1Steps: [
      { title: "Zahl eingeben", text: "Geben Sie eine ganze Zahl in das Feld ein oder wählen Sie eine Vorlage." },
      { title: "Auf 'Prüfen' klicken", text: "Drücken Sie Enter oder klicken Sie auf Prüfen für die exakte Wurzelanalyse." },
      { title: "Ergebnis einsehen", text: "Sehen Sie das Urteil, die Basiswurzel, Parität, begrenzende Quadrate und Primfaktoren." }
    ],
    s2Lead: "Eine Quadratzahl ist eine ganze Zahl, die dem Produkt einer ganzen Zahl mit sich selbst entspricht: n = k² = k × k.",
    s2P1: "Beispielsweise ist 144 eine Quadratzahl, da 12 × 12 = 144. Dagegen ist 50 keine Quadratzahl, da √50 ≈ 7,071.",
    s2P2: "Der Begriff stammt aus der Geometrie: 144 Fliesen bilden ein quadratisches Raster von 12×12 ohne Reststücke.",
    s2Cards: [
      { title: "2D-Flächengeometrie", text: "Die Fläche eines Quadrats der Seitenlänge k beträgt k². Quadratzahlen stehen für lückenlose Kachelungen." },
      { title: "Nur reelle Zahlen", text: "Bei reellen Zahlen ist jedes Quadrat nicht-negativ: k² ≥ 0. Negative Zahlen führen zu imaginären Wurzeln." },
      { title: "Gleichbleibende Parität", text: "Gerade Zahlen ergeben gerade Quadrate (4²=16); ungerade Zahlen ergeben ungerade Quadrate (5²=25)." },
      { title: "Gerade Primexponenten", text: "In der Primfaktorzerlegung muss jeder Exponent eine gerade Zahl sein (2, 4, 6...)." }
    ],
    s3Intro: "Der Rechner führt drei aufeinanderfolgende mathematische Tests durch:",
    s3Tests: [
      { title: "1. Ganzzahliger Wurzeltest", text: "Berechnet √n mit hoher Präzision, um sicherzustellen, dass kein Dezimalrest vorliegt." },
      { title: "2. Primfaktorzerlegung", text: "Zerlegt n in Primfaktoren und prüft, ob ausnahmslos alle Exponenten gerade Zahlen sind." },
      { title: "3. Quersummenfilter (Mod 9)", text: "Schließt Zahlen sofort aus, deren wiederholte Quersumme nicht 1, 4, 7 oder 9 ergibt." }
    ],
    s4Examples: [
      { title: "Beispiel 1: 144 prüfen", expr: "√144 = 12", reason: "12 × 12 = 144 (exakte ganze Zahl)", verdict: "QUADRATZAHL" },
      { title: "Beispiel 2: 50 prüfen", expr: "√50 ≈ 7,071", reason: "Liegt zwischen 7²=49 und 8²=64", verdict: "KEINE QUADRATZAHL" },
      { title: "Beispiel 3: -16 prüfen", expr: "√(-16) = ±4i", reason: "Kein reelles Quadrat kann negativ sein", verdict: "NICHT REELL" }
    ],
    s5Intro: "Zwei schnelle Methoden, um Nicht-Quadrate in Sekunden auszuschließen:",
    s5R1Title: "1. Endziffernregel",
    s5R1Text: "Eine Quadratzahl endet AUSSCHLIESSLICH auf 0, 1, 4, 5, 6 oder 9. Endet eine Zahl auf 2, 3, 7 oder 8, ist sie NIE eine Quadratzahl!",
    s5R2Title: "2. Quersummenregel (Mod 9)",
    s5R2Text: "Wiederholte Quersumme bilden: Bei Quadratzahlen ist sie immer 1, 4, 7 oder 9 (oder 0 für 0).",
    s6Lead: "Warum negative Zahlen und Dezimalbrüche streng bewertet werden:",
    s6P1: "Im Reellen ergibt Quadrieren stets ein Ergebnis ≥ 0. Negative Zahlen führen zur imaginären Einheit (±bi).",
    s7Lead: "Jede Nicht-Quadratzahl liegt exakt zwischen zwei aufeinanderfolgenden Quadraten: k² < n < (k + 1)².",
    s7P1: "So liegt 50 zwischen 49 (7²) und 64 (8²). Da 50 - 49 = 1, ist 49 die nächste Quadratzahl (nur 1 Einheit entfernt).",
    s8Lead: "Grundlegende Referenztabelle für Kopfrechnen und Prüfungen:",
    s9Apps: [
      { title: "Geometrie & Flächen", text: "Berechnung von Fliesenmengen, Raumgrundrissen und quadratischen Grundstücken." },
      { title: "Satz des Pythagoras", text: "Hypotenusen und Diagonalen im Bauwesen und der Vermessung: a² + b² = c²." },
      { title: "Physik & Kinetik", text: "Kinetische Energie (½mv²) und Bremswegformeln mit quadratischer Zunahme." },
      { title: "Informatik", text: "Quadtrees zur 2D-Raumunterteilung und Matrizenstrukturen im Speicher." }
    ],
    s10Mistakes: [
      { title: "Quadrieren vs. Verdoppeln", text: "Quadrieren bedeutet mit sich selbst multiplizieren (5²=25), nicht mal zwei (5×2=10)." },
      { title: "Endziffer allein genügt nicht", text: "Eine Endziffer 4 garantiert kein Quadrat (14 und 24 sind keine Quadrate; nur 4, 64, 144...)." },
      { title: "Vorzeichen und Klammern", text: "Vorsicht bei Vorzeichen: (-4)² = 16, während -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Formel", text: "n = k × k mit ganzzahligem k." },
      { title: "Endziffern", text: "Endet nur auf 0, 1, 4, 5, 6 oder 9." },
      { title: "Gerade Exponenten", text: "Jeder Primfaktor besitzt einen geraden Exponenten." },
      { title: "100% Kostenlos", text: "Beliebige Zahlen mit vollständiger Erklärung oben prüfen." }
    ],
    faqs: [
      { question: "Was ist eine Quadratzahl in einfachen Worten?", answer: "Eine Quadratzahl ist eine ganze Zahl, die entsteht, wenn man eine ganze Zahl mit sich selbst multipliziert. Beispiel: 36 ist eine Quadratzahl, da 6 × 6 = 36." },
      { question: "Können negative Zahlen Quadratzahlen sein?", answer: "Nein, in den reellen Zahlen gibt es keine negativen Quadratzahlen, da das Quadrat jeder reellen Zahl null oder positiv ist." },
      { question: "Ist 0 eine Quadratzahl?", answer: "Ja, 0 ist eine Quadratzahl, da 0 × 0 = 0 (0² = 0)." },
      { question: "Was ist der Unterschied zwischen Quadratwurzel und Quadratzahl?", answer: "Die Quadratzahl ist das fertige Produkt (z. B. 25), die Quadratwurzel die ursprüngliche Ausgangszahl (z. B. 5)." },
      { question: "Ist dieser Rechner kostenlos?", answer: "Ja, unser Quadratzahl-Rechner ist 100% kostenlos und bietet unbegrenzte Prüfungen mit vollständigen Rechenwegen." }
    ]
  },
  it: {
    s1Intro: "Verifica qualsiasi numero in pochi secondi con questi 3 semplici passaggi:",
    s1Steps: [
      { title: "Inserisci il numero", text: "Digita un numero intero nella casella o seleziona un pulsante preimpostato." },
      { title: "Fai clic su 'Verifica'", text: "Premi Invio o fai clic per eseguire l'algoritmo di radice quadrata esatta." },
      { title: "Consulta l'analisi", text: "Scopri verdetto, radice, parità, quadrati delimitatori e fattori primi." }
    ],
    s2Lead: "Un quadrato perfetto è un numero intero pari al prodotto di un intero per se stesso: n = k² = k × k.",
    s2P1: "Ad esempio, 144 è un quadrato perfetto perché 12 × 12 = 144. Invece, 50 non lo è poiché √50 ≈ 7,071.",
    s2P2: "Il termine deriva dalla geometria: 144 tessere formano una griglia quadrata esatta di 12×12 senza ritagli.",
    s2Cards: [
      { title: "Geometria di superficie 2D", text: "L'area di un quadrato di lato k è k². I quadrati perfetti rappresentano griglie perfettamente regolari." },
      { title: "Solo numeri reali", text: "Nei numeri reali ogni quadrato è non negativo: k² ≥ 0. I numeri negativi generano radici immaginarie." },
      { title: "Parità conservata", text: "I numeri pari danno quadrati pari (4²=16); i numeri dispari danno quadrati dispari (5²=25)." },
      { title: "Esponenti primi pari", text: "Nella scomposizione in fattori primi, ogni esponente deve essere un numero pari (2, 4, 6...)." }
    ],
    s3Intro: "Il calcolatore esegue tre rigorosi test matematici:",
    s3Tests: [
      { title: "1. Test della radice intera", text: "Calcola √n ad altissima precisione per accertarsi che il resto decimale sia esattamente zero." },
      { title: "2. Scomposizione in fattori primi", text: "Scompone n in fattori primi e verifica che tutti gli esponenti siano numeri pari." },
      { title: "3. Filtro radice numerica (Mod 9)", text: "Esclude immediatamente numeri la cui somma iterata delle cifre non sia 1, 4, 7 o 9." }
    ],
    s4Examples: [
      { title: "Esempio 1: Verificare 144", expr: "√144 = 12", reason: "12 × 12 = 144 (intero esatto)", verdict: "QUADRATO PERFETTO" },
      { title: "Esempio 2: Verificare 50", expr: "√50 ≈ 7,071", reason: "Compreso tra 7²=49 e 8²=64", verdict: "NON QUADRATO PERFETTO" },
      { title: "Esempio 3: Verificare -16", expr: "√(-16) = ±4i", reason: "Nessun numero reale al quadrato è negativo", verdict: "NON REALE" }
    ],
    s5Intro: "Due scorciatoie per escludere i non-quadrati in pochi secondi:",
    s5R1Title: "1. Regola dell'ultima cifra",
    s5R1Text: "Un quadrato perfetto termina SOLO per 0, 1, 4, 5, 6 o 9. Se termina per 2, 3, 7 o 8, NON è MAI un quadrato perfetto!",
    s5R2Title: "2. Regola della radice numerica (Mod 9)",
    s5R2Text: "Sommando ripetutamente le cifre si ottiene sempre 1, 4, 7 o 9 (o 0 per lo 0).",
    s6Lead: "Perché i numeri negativi e decimali sono valutati rigorosamente:",
    s6P1: "Nei numeri reali elevare al quadrato dà sempre ≥ 0. Gli interi negativi generano numeri complessi (±bi).",
    s7Lead: "Ogni intero non quadrato è compreso tra due quadrati consecutivi: k² < n < (k + 1)².",
    s7P1: "Ad esempio, 50 si trova tra 49 (7²) e 64 (8²). Poiché 50 - 49 = 1, 49 è il quadrato più vicino (a solo 1 unità).",
    s8Lead: "Tabella di riferimento essenziale per calcolo a mente ed esami:",
    s9Apps: [
      { title: "Geometria e Aree", text: "Calcolo di piastrelle, planimetrie e appezzamenti quadrati." },
      { title: "Teorema di Pitagora", text: "Calcolo di ipotenuse e diagonali in topografia ed edilizia: a² + b² = c²." },
      { title: "Fisica e Dinamica", text: "Energia cinetica (½mv²) e formule per la distanza di frenata." },
      { title: "Informatica", text: "Quadtree per partizionamento spaziale 2D e strutture a matrice in memoria." }
    ],
    s10Mistakes: [
      { title: "Quadrato vs Raddoppiare", text: "Elevare al quadrato significa moltiplicare per se stesso (5²=25), non per due (5×2=10)." },
      { title: "Ultima cifra non sufficiente", text: "Finire per 4 non garantisce un quadrato (14 e 24 non lo sono; solo 4, 64, 144...)." },
      { title: "Segni e Parentesi", text: "Attenzione alla sintassi: (-4)² = 16, mentre -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Formula", text: "n = k × k con k intero." },
      { title: "Ultime Cifre", text: "Può terminare solo per 0, 1, 4, 5, 6 o 9." },
      { title: "Esponenti Pari", text: "Ogni fattore primo deve avere un esponente pari." },
      { title: "100% Gratuito", text: "Verifica qualsiasi numero con spiegazioni dettagliate sopra." }
    ],
    faqs: [
      { question: "Cos'è un quadrato perfetto in parole semplici?", answer: "Un quadrato perfetto è un numero intero ottenuto moltiplicando un intero per se stesso. Ad esempio, 36 è un quadrato perfetto perché 6 × 6 = 36." },
      { question: "Un numero negativo può essere un quadrato perfetto?", answer: "No, nei numeri reali nessun numero negativo può essere un quadrato perfetto poiché il quadrato di qualsiasi reale è sempre zero o positivo." },
      { question: "Lo 0 è un quadrato perfetto?", answer: "Sì, 0 è un quadrato perfetto perché 0 × 0 = 0 (0² = 0)." },
      { question: "Qual è la differenza tra radice quadrata e quadrato perfetto?", answer: "Il quadrato perfetto è il risultato moltiplicato (es. 25), mentre la radice quadrata è il numero originario di base (es. 5)." },
      { question: "Questo calcolatore è gratuito?", answer: "Sì, il nostro calcolatore di quadrati perfetti è gratuito al 100% con verifiche illimitate e passaggi completi." }
    ]
  },
  pt: {
    s1Intro: "Verifique qualquer número em segundos com estes 3 passos simples:",
    s1Steps: [
      { title: "Digite o seu número", text: "Insira um número inteiro na caixa ou clique num dos atalhos pré-definidos." },
      { title: "Clique em 'Verificar'", text: "Pressione Enter ou clique para executar o algoritmo de raiz exata." },
      { title: "Examine a demonstração", text: "Veja o veredito, a raiz base, paridade, quadrados vizinhos e fatores primos." }
    ],
    s2Lead: "Um quadrado perfeito é um número inteiro igual ao produto de um número inteiro por si mesmo: n = k² = k × k.",
    s2P1: "Por exemplo, 144 é um quadrado perfeito porque 12 × 12 = 144. Por outro lado, 50 não é pois √50 ≈ 7,071.",
    s2P2: "O termo quadrado vem da geometria: 144 ladrilhos formam uma malha quadrada perfeita de 12×12 sem sobras.",
    s2Cards: [
      { title: "Geometria de superfície 2D", text: "A área de um quadrado de lado k é k². Quadrados perfeitos representam mosaicos perfeitos." },
      { title: "Apenas números reais", text: "Nos reais, todo quadrado é não negativo: k² ≥ 0. Negativos geram raízes imaginárias." },
      { title: "Paridade mantida", text: "Pares geram quadrados pares (4²=16); ímpares geram quadrados ímpares (5²=25)." },
      { title: "Expoentes primos pares", text: "Na decomposição primária, todos os expoentes devem ser obrigatoriamente pares (2, 4, 6...)." }
    ],
    s3Intro: "A calculadora executa três verificações matemáticas rigorosas:",
    s3Tests: [
      { title: "1. Teste da raiz inteira", text: "Calcula √n com precisão máxima para confirmar a inexistência de resto decimal." },
      { title: "2. Fatoração prima", text: "Decompõe n em potências de primos e verifica se todos os expoentes são pares." },
      { title: "3. Filtro da raiz digital (Mod 9)", text: "Descarta prontamente números cuja soma iterada dos algarismos não seja 1, 4, 7 ou 9." }
    ],
    s4Examples: [
      { title: "Exemplo 1: Verificar 144", expr: "√144 = 12", reason: "12 × 12 = 144 (inteiro exato)", verdict: "QUADRADO PERFEITO" },
      { title: "Exemplo 2: Verificar 50", expr: "√50 ≈ 7,071", reason: "Entre 7²=49 e 8²=64", verdict: "NÃO É QUADRADO PERFEITO" },
      { title: "Exemplo 3: Verificar -16", expr: "√(-16) = ±4i", reason: "Nenhum quadrado real pode ser negativo", verdict: "NÃO É REAL" }
    ],
    s5Intro: "Dois atalhos rápidos para descartar não-quadrados em segundos:",
    s5R1Title: "1. Regra do último dígito",
    s5R1Text: "Um quadrado perfeito termina APENAS em 0, 1, 4, 5, 6 ou 9. Se terminar em 2, 3, 7 ou 8, NUNCA é quadrado perfeito!",
    s5R2Title: "2. Regra da raiz digital (Mod 9)",
    s5R2Text: "Somando os dígitos sucessivamente: resulta sempre em 1, 4, 7 ou 9 (ou 0 para o 0).",
    s6Lead: "Por que números negativos e decimais são avaliados com rigor:",
    s6P1: "Nos reais, elevar ao quadrado resulta sempre em valor ≥ 0. Negativos geram números complexos com unidade imaginária (±bi).",
    s7Lead: "Qualquer não-quadrado fica situado entre dois quadrados consecutivos: k² < n < (k + 1)².",
    s7P1: "Por exemplo, 50 situa-se entre 49 (7²) e 64 (8²). Como 50 - 49 = 1, 49 é o quadrado mais próximo (a apenas 1 unidade).",
    s8Lead: "Tabela de referência indispensável para cálculo mental e testes:",
    s9Apps: [
      { title: "Geometria e Áreas", text: "Cálculo de pisos, plantas de divisões e terrenos quadrados." },
      { title: "Teorema de Pitágoras", text: "Cálculo de hipotenusas em topografia e engenharia: a² + b² = c²." },
      { title: "Física e Cinética", text: "Energia cinética (½mv²) e equações de distância de aceleração e travagem." },
      { title: "Computação", text: "Particionamento quadtree em mapas 2D e matrizes alocadas em memória." }
    ],
    s10Mistakes: [
      { title: "Elevar ao Quadrado vs Dobrar", text: "Elevar ao quadrado é multiplicar por si mesmo (5²=25), e não por dois (5×2=10)." },
      { title: "Dígito final insuficiente", text: "Terminar em 4 não garante quadrado (14 e 24 não o são; apenas 4, 64, 144...)." },
      { title: "Sinais e Parênteses", text: "Atenção à notação: (-4)² = 16, enquanto -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Fórmula", text: "n = k × k com k número inteiro." },
      { title: "Últimos Dígitos", text: "Termina apenas em 0, 1, 4, 5, 6 ou 9." },
      { title: "Expoentes Pares", text: "Todos os fatores primos possuem expoentes divisíveis por 2." },
      { title: "100% Grátis", text: "Verifique qualquer número com demonstração completa acima." }
    ],
    faqs: [
      { question: "O que é um quadrado perfeito em termos simples?", answer: "Um quadrado perfeito é um número inteiro obtido pela multiplicação de um número inteiro por si mesmo. Exemplo: 36 é quadrado perfeito porque 6 × 6 = 36." },
      { question: "Um número negativo pode ser um quadrado perfeito?", answer: "Não, na matemática dos números reais, nenhum número negativo pode ser quadrado perfeito pois o quadrado de qualquer real é positivo ou zero." },
      { question: "O número 0 é um quadrado perfeito?", answer: "Sim, 0 é um quadrado perfeito porque 0 × 0 = 0 (0² = 0)." },
      { question: "Qual a diferença entre raiz quadrada e quadrado perfeito?", answer: "O quadrado perfeito é o resultado final da multiplicação (ex: 25), e a raiz quadrada é o número base gerador (ex: 5)." },
      { question: "Esta calculadora é gratuita?", answer: "Sim, a nossa calculadora de quadrados perfeitos é 100% gratuita, sem limites e com explicações detalhadas passo a passo." }
    ]
  },
  ru: {
    s1Intro: "Проверьте любое число за секунды с помощью 3 простых шагов:",
    s1Steps: [
      { title: "Введите число", text: "Введите любое целое число в поле ввода или выберите готовый пример." },
      { title: "Нажмите 'Проверить'", text: "Нажмите Enter или кнопку проверки для мгновенного математического анализа." },
      { title: "Изучите доказательство", text: "Узнайте вердикт, корень, четность, соседние квадраты и множители." }
    ],
    s2Lead: "Точный квадрат (полный квадрат) — это целое число, равное произведению некоторого целого числа самого на себя: n = k² = k × k.",
    s2P1: "Например, 144 — точный квадрат, так как 12 × 12 = 144. Напротив, 50 не является квадратом, поскольку √50 ≈ 7,071.",
    s2P2: "Слово «квадрат» происходит из геометрии: 144 плитки образуют ровный квадрат 12×12 без сколов и пустот.",
    s2Cards: [
      { title: "2D-геометрия площадей", text: "Площадь квадрата со стороной k равна k². Квадраты представляют идеальные сетки." },
      { title: "Только вещественные числа", text: "В вещественных числах любой квадрат неотрицателен: k² ≥ 0. Отрицательные числа дают мнимые корни." },
      { title: "Сохранение четности", text: "Квадрат четного числа всегда четен (4²=16); нечетного — всегда нечетен (5²=25)." },
      { title: "Четные степени множителей", text: "В разложении на простые множители каждый показатель степени обязан быть четным (2, 4, 6...)." }
    ],
    s3Intro: "Калькулятор проводит три последовательных математических теста:",
    s3Tests: [
      { title: "1. Вычисление точного корня", text: "Вычисляет √n с повышенной точностью для проверки отсутствия дробного остатка." },
      { title: "2. Разложение на простые множители", text: "Раскладывает n на простые множители и проверяет четность всех степеней." },
      { title: "3. Проверка цифрового корня (Mod 9)", text: "Мгновенно исключает числа, повторная сумма цифр которых не равна 1, 4, 7 или 9." }
    ],
    s4Examples: [
      { title: "Пример 1: Проверка 144", expr: "√144 = 12", reason: "12 × 12 = 144 (точное целое число)", verdict: "ТОЧНЫЙ КВАДРАТ" },
      { title: "Пример 2: Проверка 50", expr: "√50 ≈ 7,071", reason: "Между 7²=49 и 8²=64", verdict: "НЕ ТОЧНЫЙ КВАДРАТ" },
      { title: "Пример 3: Проверка -16", expr: "√(-16) = ±4i", reason: "Квадрат вещественного числа не может быть отрицательным", verdict: "НЕ ВЕЩЕСТВЕННОЕ" }
    ],
    s5Intro: "Два быстрых способа исключить не-квадраты за секунды без калькулятора:",
    s5R1Title: "1. Правило последней цифры",
    s5R1Text: "Точный квадрат может оканчиваться ТОЛЬКО на 0, 1, 4, 5, 6 или 9. Если число оканчивается на 2, 3, 7 или 8 — это НИКОГДА не квадрат!",
    s5R2Title: "2. Правило цифрового корня (Mod 9)",
    s5R2Text: "Складывайте цифры до одной цифры: для точного квадрата это всегда 1, 4, 7 или 9 (или 0 для нуля).",
    s6Lead: "Почему отрицательные и дробные числа рассматриваются строго:",
    s6P1: "В области вещественных чисел квадрат всегда ≥ 0. Отрицательные числа порождают мнимую единицу (±bi).",
    s7Lead: "Любое число, не являющееся квадратом, зажато между двумя соседними квадратами: k² < n < (k + 1)².",
    s7P1: "Например, 50 лежит между 49 (7²) и 64 (8²). Так как 50 - 49 = 1, ближайшим квадратом является 49 (на расстоянии 1).",
    s8Lead: "Базовая справочная таблица для устного счета и экзаменов:",
    s9Apps: [
      { title: "Геометрия и площади", text: "Расчет количества плитки, планировки комнат и земельных участков." },
      { title: "Теорема Пифагора", text: "Расчет гипотенуз и диагоналей в строительстве и геодезии: a² + b² = c²." },
      { title: "Физика и кинематика", text: "Формулы кинетической энергии (½mv²) и тормозного пути." },
      { title: "Информатика", text: "Квадродеревья (quadtree) для пространственного индексирования и двумерные матрицы." }
    ],
    s10Mistakes: [
      { title: "Квадрат или умножение на 2", text: "Возведение в квадрат — это умножение на себя (5²=25), а не удвоение (5×2=10)." },
      { title: "Последней цифры недостаточно", text: "Окончание на 4 не гарантирует квадрат (14 и 24 не квадраты; только 4, 64, 144...)." },
      { title: "Знаки и скобки", text: "Следите за скобками: (-4)² = 16, тогда как -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Формула", text: "n = k × k, где k — целое число." },
      { title: "Последние цифры", text: "Оканчивается только на 0, 1, 4, 5, 6 или 9." },
      { title: "Четные степени", text: "У каждого простого множителя степень четная." },
      { title: "100% Бесплатно", text: "Проверяйте любые числа с полным решением выше." }
    ],
    faqs: [
      { question: "Что такое точный квадрат простыми словами?", answer: "Это целое число, полученное при умножении некоторого целого числа само на себя. Например, 36 — точный квадрат, так как 6 × 6 = 36." },
      { question: "Может ли отрицательное число быть точным квадратом?", answer: "Нет, среди вещественных чисел квадрат любого числа неотрицателен, поэтому отрицательное число не может быть точным квадратом." },
      { question: "Является ли 0 точным квадратом?", answer: "Да, 0 — точный квадрат, так как 0 × 0 = 0 (0² = 0)." },
      { question: "В чем разница между квадратным корнем и точным квадратом?", answer: "Точный квадрат — это результат умножения (например, 25), а квадратный корень — исходное число (например, 5)." },
      { question: "Бесплатен ли этот калькулятор?", answer: "Да, наш калькулятор точных квадратов на 100% бесплатен, работает без ограничений и показывает подробный ход решения." }
    ]
  },
  pl: {
    s1Intro: "Sprawdź dowolną liczbę w kilka sekund dzięki 3 prostym krokom:",
    s1Steps: [
      { title: "Wpisz liczbę", text: "Wprowadź liczbę całkowitą w polu lub wybierz jedną z gotowych wartości." },
      { title: "Kliknij 'Sprawdź'", text: "Naciśnij Enter lub kliknij przycisk, aby uruchomić dokładny algorytm pierwiastka." },
      { title: "Zobacz dowód", text: "Otrzymaj werdykt, pierwiastek bazowy, parzystość, sąsiednie kwadraty i czynniki pierwsze." }
    ],
    s2Lead: "Kwadrat doskonały to liczba całkowita równa iloczynowi pewnej liczby całkowitej przez samą siebie: n = k² = k × k.",
    s2P1: "Na przykład 144 jest kwadratem doskonałym, ponieważ 12 × 12 = 144. Natomiast 50 nim nie jest, bo √50 ≈ 7,071.",
    s2P2: "Pojęcie to wywodzi się z geometrii: 144 płytki tworzą idealny kwadrat 12×12 bez docinania.",
    s2Cards: [
      { title: "Geometria powierzchni 2D", text: "Pole kwadratu o boku k wynosi k². Kwadraty doskonałe reprezentują idealne siatki kwadratowe." },
      { title: "Tylko liczby rzeczywiste", text: "W liczbach rzeczywistych kwadrat jest nieujemny: k² ≥ 0. Liczby ujemne dają pierwiastki urojone." },
      { title: "Zachowanie parzystości", text: "Liczby parzyste dają parzyste kwadraty (4²=16); nieparzyste dają nieparzyste kwadraty (5²=25)." },
      { title: "Parzyste wykładniki", text: "W rozkładzie na czynniki pierwsze każdy wykładnik musi być liczbą parzystą (2, 4, 6...)." }
    ],
    s3Intro: "Kalkulator przeprowadza trzy niezależne testy matematyczne:",
    s3Tests: [
      { title: "1. Test pierwiastka całkowitego", text: "Oblicza √n z wysoką precyzją, sprawdzając, czy reszta po przecinku wynosi zero." },
      { title: "2. Rozkład na czynniki pierwsze", text: "Rozkłada n na czynniki pierwsze i weryfikuje parzystość każdego wykładnika." },
      { title: "3. Filtr sumy cyfr (Mod 9)", text: "Błyskawicznie odrzuca liczby, których ostateczna suma cyfr nie wynosi 1, 4, 7 lub 9." }
    ],
    s4Examples: [
      { title: "Przykład 1: Sprawdzenie 144", expr: "√144 = 12", reason: "12 × 12 = 144 (dokładna liczba całkowita)", verdict: "KWADRAT DOSKONAŁY" },
      { title: "Przykład 2: Sprawdzenie 50", expr: "√50 ≈ 7,071", reason: "Pomiędzy 7²=49 a 8²=64", verdict: "NIE JEST KWADRATEM" },
      { title: "Przykład 3: Sprawdzenie -16", expr: "√(-16) = ±4i", reason: "Żaden kwadrat rzeczywisty nie jest ujemny", verdict: "NIE JEST RZECZYWISTY" }
    ],
    s5Intro: "Dwa szybkie sposoby na wykluczenie liczb bez kalkulatora:",
    s5R1Title: "1. Reguła ostatniej cyfry",
    s5R1Text: "Kwadrat doskonały może kończyć się WYŁĄCZNIE na 0, 1, 4, 5, 6 lub 9. Jeśli kończy się na 2, 3, 7 lub 8 — NIGDY nie jest kwadratem!",
    s5R2Title: "2. Reguła sumy cyfr (Mod 9)",
    s5R2Text: "Dodając cyfry do jednej cyfry: dla kwadratu wynik to zawsze 1, 4, 7 lub 9 (lub 0 dla 0).",
    s6Lead: "Dlaczego liczby ujemne i ułamki podlegają surowej ocenie:",
    s6P1: "W liczbach rzeczywistych kwadrat zawsze wynosi ≥ 0. Liczby ujemne prowadzą do jednostki urojonej (±bi).",
    s7Lead: "Każda liczba niebędąca kwadratem leży ściśle pomiędzy dwoma kolejnymi kwadratami: k² < n < (k + 1)².",
    s7P1: "Na przykład 50 leży między 49 (7²) a 64 (8²). Ponieważ 50 - 49 = 1, najbliższym kwadratem jest 49 (w odległości 1).",
    s8Lead: "Podstawowa tabela referencyjna do pamięciowego liczenia i sprawdzianów:",
    s9Apps: [
      { title: "Geometria i powierzchnie", text: "Obliczanie liczby kafelków, powierzchni pomieszczeń i działek." },
      { title: "Twierdzenie Pitagorasa", text: "Obliczanie przekątnych i przeciwprostokątnych w budownictwie: a² + b² = c²." },
      { title: "Fizyka i kinetyka", text: "Energia kinetyczna (½mv²) i droga hamowania zależna od kwadratu prędkości." },
      { title: "Informatyka", text: "Drzewa czwórkowe (quadtrees) i dwuwymiarowe macierze w pamięci." }
    ],
    s10Mistakes: [
      { title: "Kwadrat a podwojenie", text: "Podnoszenie do kwadratu to mnożenie przez samą siebie (5²=25), a nie razy dwa (5×2=10)." },
      { title: "Ostatnia cyfra nie wystarcza", text: "Cyfra 4 na końcu nie gwarantuje kwadratu (14 i 24 nie są kwadratami; tylko 4, 64, 144...)." },
      { title: "Znaki i nawiasy", text: "Uwaga na zapis: (-4)² = 16, podczas gdy -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Wzór", text: "n = k × k, gdzie k jest liczbą całkowitą." },
      { title: "Ostatnie cyfry", text: "Kończy się wyłącznie na 0, 1, 4, 5, 6 lub 9." },
      { title: "Parzyste potęgi", text: "Wszystkie czynniki pierwsze mają parzyste wykładniki." },
      { title: "100% Za darmo", text: "Sprawdzaj dowolne liczby z pełnym wyjaśnieniem powyżej." }
    ],
    faqs: [
      { question: "Czym jest kwadrat doskonały prostymi słowami?", answer: "To liczba całkowita będąca wynikiem pomnożenia pewnej liczby całkowitej przez samą siebie. Na przykład 36, ponieważ 6 × 6 = 36." },
      { question: "Czy liczba ujemna może być kwadratem doskonałym?", answer: "Nie, w liczbach rzeczywistych kwadrat dowolnej liczby jest zawsze dodatni lub równy zero, więc liczba ujemna nie może być kwadratem doskonałym." },
      { question: "Czy 0 jest kwadratem doskonałym?", answer: "Tak, 0 jest kwadratem doskonałym, ponieważ 0 × 0 = 0 (0² = 0)." },
      { question: "Jaka jest różnica między pierwiastkiem a kwadratem doskonałym?", answer: "Kwadrat doskonały to wynik potęgowania (np. 25), a pierwiastek to pierwotna liczba bazowa (np. 5)." },
      { question: "Czy ten kalkulator jest darmowy?", answer: "Tak, nasz kalkulator kwadratów doskonałych jest w 100% darmowy, bez limitów i z pełnymi obliczeniami krok po kroku." }
    ]
  },
  sv: {
    s1Intro: "Kontrollera vilket tal som helst på sekunder med dessa 3 enkla steg:",
    s1Steps: [
      { title: "Ange ditt tal", text: "Skriv ett heltal i inmatningsfältet eller klicka på ett snabbval." },
      { title: "Klicka på 'Kontrollera'", text: "Tryck Enter eller klicka för att köra algoritmen för exakt kvadratrot." },
      { title: "Se genomgången", text: "Få resultat, basrot, paritet, omgivande kvadrater och primtalsfaktorer." }
    ],
    s2Lead: "Ett perfekt kvadrattal är ett heltal som motsvarar en heltalsprodukt av ett tal med sig självt: n = k² = k × k.",
    s2P1: "Till exempel är 144 en perfekt kvadrat eftersom 12 × 12 = 144. Däremot är 50 inte det då √50 ≈ 7,071.",
    s2P2: "Ordet kvadrat härstammar från geometrin: 144 plattor bildar en 12×12 kvadratisk yta utan spill.",
    s2Cards: [
      { title: "2D-ytgeometri", text: "Arean av en kvadrat med sidolängd k är k². Kvadrattal representerar perfekta kvadratiska mönster." },
      { title: "Endast reella tal", text: "Bland reella tal är alla kvadrater icke-negativa: k² ≥ 0. Negativa tal ger imaginära rötter." },
      { title: "Bevarad paritet", text: "Jämna tal ger jämna kvadrater (4²=16); udda tal ger udda kvadrater (5²=25)." },
      { title: "Jämna primtalsexponenter", text: "I primtalsfaktoriseringen måste varje exponent vara ett jämnt tal (2, 4, 6...)." }
    ],
    s3Intro: "Kalkylatorn genomför tre pålitliga matematiska kontroller:",
    s3Tests: [
      { title: "1. Exakt kvadratrotstest", text: "Beräknar √n med hög precision för att säkerställa noll i decimalrest." },
      { title: "2. Primtalsfaktorisering", text: "Faktoriserar n och kontrollerar att alla primtalsexponenter är jämna tal." },
      { title: "3. Sifferrotfilter (Mod 9)", text: "Utsluter omedelbart tal vars upprepade siffersumma inte är 1, 4, 7 eller 9." }
    ],
    s4Examples: [
      { title: "Exempel 1: Kontrollera 144", expr: "√144 = 12", reason: "12 × 12 = 144 (exakt heltal)", verdict: "PERFEKT KVADRAT" },
      { title: "Exempel 2: Kontrollera 50", expr: "√50 ≈ 7,071", reason: "Mellan 7²=49 och 8²=64", verdict: "INTE EN PERFEKT KVADRAT" },
      { title: "Exempel 3: Kontrollera -16", expr: "√(-16) = ±4i", reason: "Ingen reell kvadrat kan vara negativ", verdict: "INTE REELLT" }
    ],
    s5Intro: "Två snabba genvägar för att utesluta icke-kvadrater utan kalkylator:",
    s5R1Title: "1. Sista-siffran-regeln",
    s5R1Text: "En perfekt kvadrat kan ENDAST sluta på 0, 1, 4, 5, 6 eller 9. Slutar talet på 2, 3, 7 eller 8 är det ALDRIG en kvadrat!",
    s5R2Title: "2. Sifferrotsregeln (Mod 9)",
    s5R2Text: "Addera siffrorna upprepat: sifferroten för en kvadrat är alltid 1, 4, 7 eller 9 (eller 0 för 0).",
    s6Lead: "Varför negativa tal och decimaler bedöms strikt:",
    s6P1: "I reell aritmetik är kvadrering alltid ≥ 0. Negativa heltal leder till den imaginära enheten (±bi).",
    s7Lead: "Varje icke-kvadrat ligger strikt mellan två på varandra följande kvadrater: k² < n < (k + 1)².",
    s7P1: "Till exempel ligger 50 mellan 49 (7²) och 64 (8²). Eftersom 50 - 49 = 1 är 49 den närmaste kvadraten (endast 1 enhet bort).",
    s8Lead: "Viktig referenstabell för huvudräkning och prov:",
    s9Apps: [
      { title: "Geometri & Area", text: "Beräkning av klinkerplattor, rumsytor och kvadratiska tomter." },
      { title: "Pythagoras sats", text: "Hypotenusor och diagonaler inom byggteknik och lantmäteri: a² + b² = c²." },
      { title: "Fysik & Rörelse", text: "Rörelseenergi (½mv²) och bromssträckor som ökar i kvadrat med hastigheten." },
      { title: "Datalogi", text: "Fyrträd (quadtrees) för spatial indexering och matrisminnesallokering." }
    ],
    s10Mistakes: [
      { title: "Kvadrera vs Dubbla", text: "Att kvadrera innebär att multiplicera med sig självt (5²=25), inte med två (5×2=10)." },
      { title: "Slutsiffran räcker inte", text: "Att sluta på 4 garanterar inte en kvadrat (14 och 24 är inte kvadrater; bara 4, 64, 144...)." },
      { title: "Tecken och parenteser", text: "Se upp med parenteser: (-4)² = 16 medan -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Formel", text: "n = k × k där k är ett heltal." },
      { title: "Slutsiffror", text: "Slutar endast på 0, 1, 4, 5, 6 eller 9." },
      { title: "Jämna exponenter", text: "Varje primtalsfaktor har en jämn exponent." },
      { title: "100% Gratis", text: "Kontrollera obegränsat antal tal med full lösning ovan." }
    ],
    faqs: [
      { question: "Vad är en perfekt kvadrat med enkla ord?", answer: "Ett heltal som bildas genom att multiplicera ett heltal med sig självt. Till exempel 36, eftersom 6 × 6 = 36." },
      { question: "Kan ett negativt tal vara en perfekt kvadrat?", answer: "Nej, inom de reella talen kan ett negativt tal inte vara en perfekt kvadrat eftersom kvadraten av varje reellt tal är positiv eller noll." },
      { question: "Är 0 en perfekt kvadrat?", answer: "Ja, 0 är en perfekt kvadrat eftersom 0 × 0 = 0 (0² = 0)." },
      { question: "Vad är skillnaden mellan kvadratrot och perfekt kvadrat?", answer: "Den perfekta kvadraten är produkten (t.ex. 25) och kvadratroten är grundtalet (t.ex. 5)." },
      { question: "Är denna kalkylator gratis?", answer: "Ja, vår kalkylator för perfekta kvadrater är 100% gratis och visar fullständiga beräkningar steg för steg." }
    ]
  },
  tr: {
    s1Intro: "Bu 3 kolay adımla herhangi bir sayıyı saniyeler içinde kontrol edin:",
    s1Steps: [
      { title: "Sayınızı Girin", text: "Giriş kutusuna bir tam sayı yazın veya hazır butonlardan birine tıklayın." },
      { title: "'Kontrol Et'e Tıklayın", text: "Karekök algoritmasını çalıştırmak için Enter'a basın veya butona tıklayın." },
      { title: "Ayrıntılı Çözümü İnceleyin", text: "Sonucu, karekökü, tek-çift durumunu, çevreleyen kareleri ve asal çarpanları görün." }
    ],
    s2Lead: "Tam kare sayı, bir tam sayının kendisiyle çarpılmasıyla elde edilen tam sayıdır: n = k² = k × k.",
    s2P1: "Örneğin 144 bir tam karedir çünkü 12 × 12 = 144. Buna karşılık 50 tam kare değildir çünkü √50 ≈ 7,071.",
    s2P2: "'Kare' kelimesi geometriden gelir: 144 adet kare karo ile 12×12 tam bir kare alan döşenebilir.",
    s2Cards: [
      { title: "2B Alan Geometrisi", text: "Kenarı k olan bir karenin alanı k² olur. Tam kareler kusursuz kare ızgaraları temsil eder." },
      { title: "Yalnızca Gerçel Sayılar", text: "Gerçel sayılarda her kare sıfır veya pozitiftir: k² ≥ 0. Negatif sayılar sanal kök verir." },
      { title: "Parite Korunumu", text: "Çift sayıların karesi çifttir (4²=16); tek sayıların karesi tektir (5²=25)." },
      { title: "Çift Asal Kuvvetler", text: "Asal çarpanlara ayırmada her asal sayının üssü kesinlikle çift sayı olmalıdır (2, 4, 6...)." }
    ],
    s3Intro: "Hesap makinesi üç ardışık matematiksel doğrulama uygular:",
    s3Tests: [
      { title: "1. Tam Karekök Testi", text: "Ondalık kalan olmadığını garantilemek için √n değerini yüksek hassasiyetle hesaplar." },
      { title: "2. Asal Çarpan Testi", text: "n sayısını asal çarpanlarına ayırır ve her üssün çift sayı olduğunu doğrular." },
      { title: "3. Sayı Kökü Filtresi (Mod 9)", text: "Rakamları toplamı 1, 4, 7 veya 9 olmayan sayıları anında eler." }
    ],
    s4Examples: [
      { title: "Örnek 1: 144 Kontrolü", expr: "√144 = 12", reason: "12 × 12 = 144 (tam sayı)", verdict: "TAM KARE SAYI" },
      { title: "Örnek 2: 50 Kontrolü", expr: "√50 ≈ 7,071", reason: "7²=49 ile 8²=64 arasında", verdict: "TAM KARE DEĞİL" },
      { title: "Örnek 3: -16 Kontrolü", expr: "√(-16) = ±4i", reason: "Gerçel bir kare negatif olamaz", verdict: "GERÇEL DEĞİL" }
    ],
    s5Intro: "Hesap makinesi olmadan kare olmayan sayıları saniyeler içinde eleyen iki yöntem:",
    s5R1Title: "1. Son Rakam Kuralı",
    s5R1Text: "Bir tam kare YALNIZCA 0, 1, 4, 5, 6 veya 9 ile biter. 2, 3, 7 veya 8 ile bitiyorsa KESİNLİKLE tam kare değildir!",
    s5R2Title: "2. Sayı Kökü Kuralı (Mod 9)",
    s5R2Text: "Rakamları tek basamak kalana kadar toplayın: tam kareler için sonuç daima 1, 4, 7 veya 9'dur (0 için 0).",
    s6Lead: "Negatif sayılar ve kesirler neden kesin kurallarla değerlendirilir:",
    s6P1: "Gerçel sayılarda kare alma işlemi daima ≥ 0 sonucunu verir. Negatif tam sayılar sanal birim (±bi) üretir.",
    s7Lead: "Tam kare olmayan her tam sayı ardışık iki tam kare arasında yer alır: k² < n < (k + 1)².",
    s7P1: "Örneğin 50 sayısı 49 (7²) ile 64 (8²) arasındadır. 50 - 49 = 1 olduğu için 49 en yakın tam karedir (1 birim uzakta).",
    s8Lead: "Zihinden hesaplamalar ve sınavlar için temel başvuru tablosu:",
    s9Apps: [
      { title: "Geometri ve Alan", text: "Fayans adedi, oda yerleşimi ve kare arsa boyutlandırmaları." },
      { title: "Pisagor Teoremi", text: "İnşaat ve haritacılıkta hipotenüs ve köşegen hesapları: a² + b² = c²." },
      { title: "Fizik ve Kinetik", text: "Kinetik enerji (½mv²) ve fren mesafesi hesaplamaları." },
      { title: "Bilgisayar Bilimi", text: "Hacimsel bölmeleme (quadtrees) ve iki boyutlu bellek matrisleri." }
    ],
    s10Mistakes: [
      { title: "Karesini Alma ve İkiyle Çarpma", text: "Karesini almak kendisiyle çarpmaktır (5²=25), ikiyle çarpmak değildir (5×2=10)." },
      { title: "Son basamak tek başına yetmez", text: "Sonun 4 olması kare olacağını kanıtlamaz (14 ve 24 kare değildir; yalnızca 4, 64, 144...)." },
      { title: "İşaretler ve Parantezler", text: "İşaretlere dikkat edin: (-4)² = 16 iken -(4²) = -16 olur." }
    ],
    s12Cards: [
      { title: "Formül", text: "k bir tam sayı olmak üzere n = k × k." },
      { title: "Son Rakamlar", text: "Yalnızca 0, 1, 4, 5, 6 veya 9 ile biter." },
      { title: "Çift Üsler", text: "Tüm asal çarpanların üssü çift sayıdır." },
      { title: "%100 Ücretsiz", text: "İstediğiniz sayıyı yukarıdaki araçla sınırsızca kontrol edin." }
    ],
    faqs: [
      { question: "Basitçe tam kare sayı nedir?", answer: "Bir tam sayının kendisiyle çarpılmasıyla elde edilen tam sayıdır. Örneğin 36 bir tam karedir çünkü 6 × 6 = 36." },
      { question: "Negatif bir sayı tam kare olabilir mi?", answer: "Hayır, gerçel sayılar kümesinde herhangi bir sayının karesi daima sıfır veya pozitif olduğundan negatif bir sayı tam kare olamaz." },
      { question: "0 tam kare bir sayı mıdır?", answer: "Evet, 0 bir tam karedir çünkü 0 × 0 = 0 (0² = 0)." },
      { question: "Karekök ile tam kare arasındaki fark nedir?", answer: "Tam kare çarpım sonucudur (ör. 25), karekök ise çarpılan temel sayıdır (ör. 5)." },
      { question: "Bu hesap makinesi ücretsiz mi?", answer: "Evet, tam kare hesap makinemiz sınırsız kullanım ve adım adım çözümlerle %100 ücretsizdir." }
    ]
  },
  id: {
    s1Intro: "Periksa angka apa pun dalam hitungan detik dengan 3 langkah mudah ini:",
    s1Steps: [
      { title: "Masukkan Angka", text: "Ketik bilangan bulat pada kotak input atau klik salah satu tombol preset." },
      { title: "Klik 'Periksa'", text: "Tekan Enter atau klik periksa untuk menjalankan algoritma akar kuadrat presisi." },
      { title: "Lihat Bukti Perhitungan", text: "Dapatkan putusan, akar dasar, paritas, batas kuadrat terdekat, dan faktor prima." }
    ],
    s2Lead: "Bilangan kuadrat sempurna adalah bilangan bulat yang merupakan hasil kali suatu bilangan bulat dengan dirinya sendiri: n = k² = k × k.",
    s2P1: "Misalnya, 144 adalah kuadrat sempurna karena 12 × 12 = 144. Sebaliknya, 50 bukan kuadrat sempurna karena √50 ≈ 7,071.",
    s2P2: "Kata kuadrat berasal dari geometri: 144 ubin dapat disusun membentuk lantai persegi 12×12 yang sempurna tanpa pecahan.",
    s2Cards: [
      { title: "Geometri Luas 2D", text: "Luas persegi dengan panjang sisi k adalah k². Kuadrat sempurna melambangkan pola kisi ubin utuh." },
      { title: "Hanya Bilangan Real", text: "Dalam bilangan real, kuadrat selalu bernilai non-negatif: k² ≥ 0. Negatif menghasilkan akar imajiner." },
      { title: "Paritas Terjaga", text: "Bilangan genap menghasilkan kuadrat genap (4²=16); ganjil menghasilkan ganjil (5²=25)." },
      { title: "Pangkat Prima Genap", text: "Dalam faktorisasi prima, setiap eksponen prima wajib merupakan bilangan genap (2, 4, 6...)." }
    ],
    s3Intro: "Kalkulator ini menjalankan tiga uji matematika yang ketat:",
    s3Tests: [
      { title: "1. Uji Akar Kuadrat Bulat", text: "Menghitung √n dengan presisi tinggi untuk memastikan sisa desimalnya tepat nol." },
      { title: "2. Uji Faktorisasi Prima", text: "Mengurai n menjadi faktor prima dan memeriksa bahwa setiap eksponen bernilai genap." },
      { title: "3. Filter Akar Digital (Mod 9)", text: "Mengeliminasi angka yang jumlah digit berulangnya bukan 1, 4, 7, atau 9 secara instan." }
    ],
    s4Examples: [
      { title: "Contoh 1: Uji 144", expr: "√144 = 12", reason: "12 × 12 = 144 (bilangan bulat pas)", verdict: "KUADRAT SEMPURNA" },
      { title: "Contoh 2: Uji 50", expr: "√50 ≈ 7,071", reason: "Terletak di antara 7²=49 dan 8²=64", verdict: "BUKAN KUADRAT SEMPURNA" },
      { title: "Contoh 3: Uji -16", expr: "√(-16) = ±4i", reason: "Kuadrat bilangan real tidak bisa negatif", verdict: "BUKAN REAL" }
    ],
    s5Intro: "Dua metode cepat untuk menolak bilangan non-kuadrat tanpa kalkulator:",
    s5R1Title: "1. Aturan Digit Terakhir",
    s5R1Text: "Kuadrat sempurna HANYA berakhir dengan angka 0, 1, 4, 5, 6, atau 9. Jika berakhiran 2, 3, 7, atau 8, PASTI BUKAN kuadrat sempurna!",
    s5R2Title: "2. Aturan Akar Digital (Mod 9)",
    s5R2Text: "Jumlahkan digitnya berulang kali: untuk kuadrat hasilnya selalu 1, 4, 7, atau 9 (atau 0 untuk 0).",
    s6Lead: "Mengapa bilangan negatif dan pecahan dievaluasi secara ketat:",
    s6P1: "Dalam bilangan real, operasi kuadrat selalu menghasilkan nilai ≥ 0. Bilangan negatif menghasilkan satuan imajiner (±bi).",
    s7Lead: "Setiap bilangan bukan kuadrat terletak di antara dua kuadrat berurutan: k² < n < (k + 1)².",
    s7P1: "Misalnya, 50 berada di antara 49 (7²) dan 64 (8²). Karena 50 - 49 = 1, maka 49 adalah kuadrat terdekat (hanya selisih 1 angka).",
    s8Lead: "Tabel referensi penting untuk berhitung cepat dan ujian:",
    s9Apps: [
      { title: "Geometri & Luas", text: "Menghitung jumlah ubin keramik, denah ruangan, dan bidang tanah persegi." },
      { title: "Teorema Pythagoras", text: "Menghitung sisi miring dan diagonal konstruksi bangunan: a² + b² = c²." },
      { title: "Fisika & Kinetika", text: "Energi kinetik (½mv²) dan perhitungan jarak pengereman kendaraan." },
      { title: "Ilmu Komputer", text: "Struktur data quadtree untuk pembagian ruang 2D dan matriks memori." }
    ],
    s10Mistakes: [
      { title: "Menguadratkan vs Mengalikan Dua", text: "Menguadratkan berarti mengalikan dengan dirinya sendiri (5²=25), bukan kali dua (5×2=10)." },
      { title: "Digit akhir saja tidak cukup", text: "Berakhiran 4 belum tentu kuadrat (14 dan 24 bukan kuadrat; hanya 4, 64, 144...)." },
      { title: "Tanda dan Tanda Kurung", text: "Perhatikan tanda kurung: (-4)² = 16, sedangkan -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Rumus", text: "n = k × k dengan k bilangan bulat." },
      { title: "Digit Terakhir", text: "Hanya dapat berakhiran 0, 1, 4, 5, 6, atau 9." },
      { title: "Eksponen Genap", text: "Semua faktor prima memiliki pangkat genap." },
      { title: "100% Gratis", text: "Periksa angka apa pun dengan pembuktian lengkap di atas." }
    ],
    faqs: [
      { question: "Apa itu kuadrat sempurna secara sederhana?", answer: "Kuadrat sempurna adalah bilangan bulat hasil perkalian suatu bilangan bulat dengan dirinya sendiri. Contoh: 36 adalah kuadrat sempurna karena 6 × 6 = 36." },
      { question: "Bisakah bilangan negatif menjadi kuadrat sempurna?", answer: "Tidak, dalam sistem bilangan real, kuadrat dari bilangan apa pun selalu positif atau nol, sehingga bilangan negatif tidak bisa menjadi kuadrat sempurna." },
      { question: "Apakah 0 adalah kuadrat sempurna?", answer: "Ya, 0 adalah kuadrat sempurna karena 0 × 0 = 0 (0² = 0)." },
      { question: "Apa bedanya akar kuadrat dan kuadrat sempurna?", answer: "Kuadrat sempurna adalah angka hasil perkaliannya (mis. 25), sedangkan akar kuadrat adalah angka dasarnya (mis. 5)." },
      { question: "Apakah kalkulator ini gratis digunakan?", answer: "Ya, kalkulator kuadrat sempurna kami 100% gratis dengan pemeriksaan tanpa batas dan langkah penyelesaian lengkap." }
    ]
  },
  ms: {
    s1Intro: "Semak sebarang nombor dalam beberapa saat dengan 3 langkah mudah ini:",
    s1Steps: [
      { title: "Masukkan Nombor", text: "Taipkan nombor bulat ke dalam kotak input atau klik salah satu butang pratetap." },
      { title: "Klik 'Semak Kuasa Dua Sempurna'", text: "Tekan Enter atau klik semak untuk memulakan algoritma punca kuasa dua." },
      { title: "Lihat Bukti Penuh", text: "Dapatkan keputusan, punca asas, pariti, kuasa dua berhampiran dan pemfaktoran perdana." }
    ],
    s2Lead: "Kuasa dua sempurna ialah integer yang bersamaan dengan hasil darab integer dengan dirinya sendiri: n = k² = k × k.",
    s2P1: "Sebagai contoh, 144 ialah kuasa dua sempurna kerana 12 × 12 = 144. Sebaliknya, 50 bukan kuasa dua sempurna kerana √50 ≈ 7.071.",
    s2P2: "Istilah kuasa dua berasal dari geometri: 144 jubin membentuk susunan grid segi empat sama 12×12 yang sempurna.",
    s2Cards: [
      { title: "Geometri Luas 2D", text: "Luas segi empat sama dengan sisi k ialah k². Kuasa dua sempurna mewakili grid jubin lengkap." },
      { title: "Nombor Nyata Sahaja", text: "Bagi nombor nyata, kuasa dua sentiasa bukan negatif: k² ≥ 0. Nombor negatif menghasilkan punca khayalan." },
      { title: "Pariti Terpelihara", text: "Nombor genap menghasilkan kuasa dua genap (4²=16); nombor ganjil menghasilkan ganjil (5²=25)." },
      { title: "Kuasa Perdana Genap", text: "Dalam pemfaktoran perdana, setiap eksponen perdana wajib merupakan nombor genap (2, 4, 6...)." }
    ],
    s3Intro: "Kalkulator ini menjalankan tiga ujian matematik yang tepat:",
    s3Tests: [
      { title: "1. Ujian Punca Kuasa Dua Tepat", text: "Mengira √n dengan kejituan tinggi bagi memastikan baki perpuluhan adalah sifar." },
      { title: "2. Ujian Pemfaktoran Perdana", text: "Memfaktorkan n kepada kuasa perdana dan mengesahkan semua eksponen adalah genap." },
      { title: "3. Penapis Punca Digit (Mod 9)", text: "Menolak dengan serta-merta nombor yang jumlah digit berulang bukan 1, 4, 7 atau 9." }
    ],
    s4Examples: [
      { title: "Contoh 1: Semak 144", expr: "√144 = 12", reason: "12 × 12 = 144 (integer tepat)", verdict: "KUASA DUA SEMPURNA" },
      { title: "Contoh 2: Semak 50", expr: "√50 ≈ 7.071", reason: "Terletak antara 7²=49 dan 8²=64", verdict: "BUKAN KUASA DUA SEMPURNA" },
      { title: "Contoh 3: Semak -16", expr: "√(-16) = ±4i", reason: "Kuasa dua nombor nyata tidak boleh negatif", verdict: "BUKAN NYATA" }
    ],
    s5Intro: "Dua kaedah pantas untuk menolak bukan-kuasa dua tanpa kalkulator:",
    s5R1Title: "1. Petua Digit Terakhir",
    s5R1Text: "Kuasa dua sempurna HANYA berakhir dengan 0, 1, 4, 5, 6 atau 9. Jika berakhir dengan 2, 3, 7 atau 8, ia PASTI BUKAN kuasa dua sempurna!",
    s5R2Title: "2. Petua Punca Digit (Mod 9)",
    s5R2Text: "Jumlahkan digitnya berulang kali: untuk kuasa dua sempurna hasilnya sentiasa 1, 4, 7 atau 9 (atau 0 bagi 0).",
    s6Lead: "Sebab nombor negatif dan perpuluhan dinilai dengan ketat:",
    s6P1: "Dalam nombor nyata, kuasa dua sentiasa menghasilkan nilai ≥ 0. Integer negatif menghasilkan unit khayalan (±bi).",
    s7Lead: "Sebarang integer bukan kuasa dua terletak di antara dua kuasa dua berturutan: k² < n < (k + 1)².",
    s7P1: "Sebagai contoh, 50 terletak di antara 49 (7²) dan 64 (8²). Oleh kerana 50 - 49 = 1, 49 adalah kuasa dua terdekat (hanya beza 1 unit).",
    s8Lead: "Jadual rujukan penting untuk congakan dan peperiksaan:",
    s9Apps: [
      { title: "Geometri & Keluasan", text: "Pengiraan jubin lantai, pelan bilik dan saiz tanah segi empat sama." },
      { title: "Teorem Pythagoras", text: "Pengiraan hipotenus dan pepenjuru dalam pembinaan dan ukur tanah: a² + b² = c²." },
      { title: "Fizik & Kinetik", text: "Tenaga kinetik (½mv²) dan formula jarak membrek kenderaan." },
      { title: "Sains Komputer", text: "Pembahagian ruang quadtree dan susunan matriks dua dimensi dalam ingatan." }
    ],
    s10Mistakes: [
      { title: "Menguasaduakan vs Menggandakan", text: "Menguasaduakan ialah mendarab dengan diri sendiri (5²=25), bukan darab dua (5×2=10)." },
      { title: "Digit akhir tidak mencukupi", text: "Berakhir dengan 4 tidak menjamin kuasa dua (14 dan 24 bukan kuasa dua; hanya 4, 64, 144...)." },
      { title: "Tanda dan Tanda Kurung", text: "Beri perhatian kepada tanda kurung: (-4)² = 16 manakala -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Formula", text: "n = k × k di mana k adalah integer." },
      { title: "Digit Terakhir", text: "Hanya berakhir dengan 0, 1, 4, 5, 6 atau 9." },
      { title: "Eksponen Genap", text: "Setiap faktor perdana mesti mempunyai kuasa genap." },
      { title: "100% Percuma", text: "Semak nombor tanpa had dengan penyelesaian lengkap di atas." }
    ],
    faqs: [
      { question: "Apakah itu kuasa dua sempurna secara mudah?", answer: "Kuasa dua sempurna ialah nombor bulat hasil darab integer dengan dirinya sendiri. Contohnya, 36 ialah kuasa dua sempurna kerana 6 × 6 = 36." },
      { question: "Bolehkah nombor negatif menjadi kuasa dua sempurna?", answer: "Tidak, dalam nombor nyata, kuasa dua sebarang nombor sentiasa positif atau sifar, jadi nombor negatif tidak boleh menjadi kuasa dua sempurna." },
      { question: "Adakah 0 kuasa dua sempurna?", answer: "Ya, 0 ialah kuasa dua sempurna kerana 0 × 0 = 0 (0² = 0)." },
      { question: "Apakah perbezaan punca kuasa dua dan kuasa dua sempurna?", answer: "Kuasa dua sempurna ialah hasil darabnya (cth. 25), manakala punca kuasa dua ialah nombor asasnya (cth. 5)." },
      { question: "Adakah kalkulator ini percuma?", answer: "Ya, kalkulator kuasa dua sempurna kami 100% percuma dengan semakan tanpa had dan langkah kerja terperinci." }
    ]
  },
  ar: {
    s1Intro: "تحقق من أي عدد في ثوانٍ معدودة باتباع هذه الخطوات الثلاث السهلة:",
    s1Steps: [
      { title: "أدخل العدد", text: "اكتب أي عدد صحيح في حقل الإدخال أو انقر على أحد الأزرار الجاهزة." },
      { title: "انقر فوق 'تحقق'", text: "اضغط على Enter أو زر التحقق لتشغيل خوارزمية الجذر التربيعي الدقيقة." },
      { title: "راجع البرهان الرياضي", text: "اكتشف النتيجة، الجذر الأساسي، الزوجية، المربعات المحيطة والتحليل إلى عوامل أولية." }
    ],
    s2Lead: "المربع الكامل هو عدد صحيح ينتج عن ضرب عدد صحيح في نفسه: n = k² = k × k.",
    s2P1: "على سبيل المثال، 144 مربع كامل لأن 12 × 12 = 144. في المقابل، 50 ليس مربعاً كاملاً لأن √50 ≈ 7.071.",
    s2P2: "مصطلح 'المربع' مشتق من الهندسة: 144 بلاطة تشكل شبكة مربعة منتظمة بقياس 12×12 دون أي كسور.",
    s2Cards: [
      { title: "هندسة المساحات ثنائية الأبعاد", text: "مساحة المربع الذي طول ضلعه k هي k². المربعات الكاملة تمثل شبكات مربعة منتظمة ومغلقة." },
      { title: "الأعداد الحقيقية فقط", text: "في الأعداد الحقيقية، المربع دائماً غير سالب: k² ≥ 0. الأعداد السالبة تعطي جذوراً تخيلية." },
      { title: "ثبات الزوجية والفردية", text: "مربع العدد الزوجي زوجي دائماً (4²=16)؛ ومربع الفردي فردي دائماً (5²=25)." },
      { title: "أسس العوامل الأولية زوجية", text: "في التحليل إلى عوامل أولية، يجب أن يكون أس كل عامل أولي عدداً زوجياً (2، 4، 6...)." }
    ],
    s3Intro: "تجري الآلة الحاسبة ثلاثة اختبارات رياضية دقيقة ومثبتة:",
    s3Tests: [
      { title: "1. اختبار الجذر الصحيح الدقيق", text: "يحسب √n بدقة فائقة للتأكد من عدم وجود أي باقٍ عشري." },
      { title: "2. اختبار التحليل الأولي", text: "يحلل n إلى عوامله الأولية ويتأكد من أن جميع الأسس أعداد زوجية تماماً." },
      { title: "3. مرشح الجذر الرقمي (Mod 9)", text: "يستبعد فوراً أي عدد لا يساوي مجموع أرقامه المتكرر 1 أو 4 أو 7 أو 9." }
    ],
    s4Examples: [
      { title: "مثال 1: التحقق من 144", expr: "√144 = 12", reason: "12 × 12 = 144 (عدد صحيح دقيق)", verdict: "مربع كامل" },
      { title: "مثال 2: التحقق من 50", expr: "√50 ≈ 7.071", reason: "يقع بين 7²=49 و 8²=64", verdict: "ليس مربعاً كاملاً" },
      { title: "مثال 3: التحقق من -16", expr: "√(-16) = ±4i", reason: "لا يوجد مربع حقيقي سالب", verdict: "غير حقيقي" }
    ],
    s5Intro: "طريقتان سريعتان لاستبعاد الأعداد غير المربعة خلال ثوانٍ دون آلة حاسبة:",
    s5R1Title: "1. قاعدة الرقم الأخير",
    s5R1Text: "المربع الكامل ينتهي حصرياً بالأرقام 0 أو 1 أو 4 أو 5 أو 6 أو 9. إذا انتهى بـ 2 أو 3 أو 7 أو 8 فإنه مستحيل أن يكون مربعاً كاملاً!",
    s5R2Title: "2. قاعدة الجذر الرقمي (Mod 9)",
    s5R2Text: "اجمع أرقام العدد حتى تحصل على رقم واحد: للمربع الكامل الناتج دائماً 1 أو 4 أو 7 أو 9 (أو 0 للصفر).",
    s6Lead: "لماذا تخضع الأعداد السالبة والكسور لتقييم صارم:",
    s6P1: "في الأعداد الحقيقية، التربيع ينتج دائماً قيمة ≥ 0. الأعداد السالبة تعطي الوحدة التخيلية (±bi).",
    s7Lead: "أي عدد ليس مربعاً كاملاً يقع بين مربعين كاملين متتاليين: k² < n < (k + 1)².",
    s7P1: "على سبيل المثال، 50 يقع بين 49 (7²) و 64 (8²). ولأن 50 - 49 = 1، فإن 49 هو المربع الأقرب (بفارق 1 فقط).",
    s8Lead: "جدول مرجعي أساسي للحساب الذهني والاختبارات الدراسية:",
    s9Apps: [
      { title: "الهندسة والمساحات", text: "حساب كميات البلاط ومخططات الغرف والأراضي المربعة." },
      { title: "مبرهنة فيثاغورس", text: "حساب الأوتار والأقطار في البناء ومسح الأراضي: a² + b² = c²." },
      { title: "الفيزياء والحركة", text: "حسابات الطاقة الحركية (½mv²) ومسافات كبح المركبات." },
      { title: "علوم الحاسوب", text: "أشجار الأرباع (quadtrees) ومصفوفات الذاكرة ثنائية الأبعاد." }
    ],
    s10Mistakes: [
      { title: "التربيع مقابل المضاعفة", text: "التربيع يعني ضرب العدد في نفسه (5²=25)، وليس ضربه في اثنين (5×2=10)." },
      { title: "الرقم الأخير وحده لا يكفي", text: "انتهاء العدد بـ 4 لا يعني بالضرورة أنه مربع (14 و 24 ليسا مربعين؛ فقط 4، 64، 144...)." },
      { title: "الإشارات والأقواس", text: "انتبه للأقواس: (-4)² = 16 بينما -(4²) = -16." }
    ],
    s12Cards: [
      { title: "المعادلة", text: "n = k × k حيث k عدد صحيح." },
      { title: "الأرقام الأخيرة", text: "ينتهي فقط بـ 0 أو 1 أو 4 أو 5 أو 6 أو 9." },
      { title: "أسس زوجية", text: "جميع العوامل الأولية تحمل أُسساً زوجية." },
      { title: "مجاني 100%", text: "تحقق من أي عدد مع توضيح الحل خطوة بخطوة بالأعلى." }
    ],
    faqs: [
      { question: "ما هو المربع الكامل بكلمات بسيطة؟", answer: "المربع الكامل هو عدد صحيح ناتج عن ضرب عدد صحيح في نفسه. على سبيل المثال، 36 مربع كامل لأن 6 × 6 = 36." },
      { question: "هل يمكن للعدد السالب أن يكون مربعاً كاملاً؟", answer: "لا، في الأعداد الحقيقية مربع أي عدد يكون دائماً موجباً أو صفراً، وبالتالي لا يمكن لأي عدد سالب أن يكون مربعاً كاملاً." },
      { question: "هل الصفر مربع كامل؟", answer: "نعم، الصفر مربع كامل لأن 0 × 0 = 0 (0² = 0)." },
      { question: "ما الفرق بين الجذر التربيعي والمربع الكامل؟", answer: "المربع الكامل هو الناتج النهائي (مثل 25)، بينما الجذر التربيعي هو العدد الأصلي (مثل 5)." },
      { question: "هل هذه الحاسبة مجانية؟", answer: "نعم، حاسبة المربعات الكاملة مجانية تماماً 100% وتوفر فحصاً غير محدود مع خطوات حل تفصيلية." }
    ]
  },
  hi: {
    s1Intro: "इन 3 आसान चरणों का पालन करके किसी भी संख्या की सेकंडों में जाँच करें:",
    s1Steps: [
      { title: "संख्या दर्ज करें", text: "इनपुट बॉक्स में कोई भी पूर्णांक लिखें या प्रीसेट बटन पर क्लिक करें।" },
      { title: "'जाँच करें' पर क्लिक करें", text: "सटीक वर्गमूल एल्गोरिथ्म चलाने के लिए Enter दबाएँ या क्लिक करें।" },
      { title: "समाधान देखें", text: "परिणाम, आधार मूल, सम/विषम प्रकृति, निकटतम वर्ग और अभाज्य गुणनखंड देखें।" }
    ],
    s2Lead: "एक पूर्ण वर्ग (Perfect Square) वह पूर्णांक है जो किसी पूर्णांक को स्वयं से गुणा करने पर प्राप्त होता है: n = k² = k × k.",
    s2P1: "उदाहरण के लिए, 144 एक पूर्ण वर्ग है क्योंकि 12 × 12 = 144। इसके विपरीत, 50 पूर्ण वर्ग नहीं है क्योंकि √50 ≈ 7.071।",
    s2P2: "वर्ग शब्द ज्यामिति से आया है: 144 टाइलें मिलकर 12×12 का एक संपूर्ण वर्गाकार ग्रिड बनाती हैं।",
    s2Cards: [
      { title: "2D क्षेत्रफल ज्यामिति", text: "भुजा k वाले वर्ग का क्षेत्रफल k² होता है। पूर्ण वर्ग संपूर्ण वर्गाकार ग्रिड को दर्शाते हैं।" },
      { title: "केवल वास्तविक संख्याएँ", text: "वास्तविक संख्याओं में वर्ग हमेशा गैर-ऋणात्मक होता है: k² ≥ 0। ऋणात्मक संख्याएँ काल्पनिक मूल देती हैं।" },
      { title: "सम/विषम निरंतरता", text: "सम संख्याओं का वर्ग सम (4²=16) और विषम संख्याओं का वर्ग विषम (5²=25) होता है।" },
      { title: "सम अभाज्य घातें", text: "अभाज्य गुणनखंडन में, प्रत्येक अभाज्य गुणनखंड की घात हमेशा एक सम संख्या (2, 4, 6...) होनी चाहिए।" }
    ],
    s3Intro: "कैलकुलेटर तीन सटीक गणितीय परीक्षण करता है:",
    s3Tests: [
      { title: "1. सटीक वर्गमूल परीक्षण", text: "यह सुनिश्चित करने के लिए √n की गणना करता है कि कोई दशमलव शेष न बचे।" },
      { title: "2. अभाज्य गुणनखंडन परीक्षण", text: "संख्या को अभाज्य घातों में तोड़ता है और जाँचता है कि सभी घातांक सम हैं।" },
      { title: "3. डिजिटल रूट (Mod 9) फ़िल्टर", text: "उन संख्याओं को तुरंत हटा देता है जिनके अंकों का योग 1, 4, 7 या 9 नहीं होता।" }
    ],
    s4Examples: [
      { title: "उदाहरण 1: 144 की जाँच", expr: "√144 = 12", reason: "12 × 12 = 144 (सटीक पूर्णांक)", verdict: "पूर्ण वर्ग संख्या" },
      { title: "उदाहरण 2: 50 की जाँच", expr: "√50 ≈ 7.071", reason: "7²=49 और 8²=64 के बीच", verdict: "पूर्ण वर्ग नहीं है" },
      { title: "उदाहरण 3: -16 की जाँच", expr: "√(-16) = ±4i", reason: "किसी वास्तविक संख्या का वर्ग ऋणात्मक नहीं हो सकता", verdict: "वास्तविक नहीं" }
    ],
    s5Intro: "कैलकुलेटर के बिना गैर-वर्ग संख्याओं को तुरंत पहचानने के 2 शॉर्टकट:",
    s5R1Title: "1. अंतिम अंक का नियम",
    s5R1Text: "एक पूर्ण वर्ग संख्या केवल 0, 1, 4, 5, 6 या 9 पर समाप्त हो सकती है। यदि यह 2, 3, 7 या 8 पर समाप्त होती है, तो यह कभी भी पूर्ण वर्ग नहीं हो सकती!",
    s5R2Title: "2. डिजिटल रूट नियम (Mod 9)",
    s5R2Text: "अंकों को तब तक जोड़ें जब तक एक अंक न मिले: पूर्ण वर्ग के लिए यह हमेशा 1, 4, 7 या 9 होता है (या 0 के लिए 0)।",
    s6Lead: "ऋणात्मक संख्याओं और दशमलवों का कड़ाई से मूल्यांकन क्यों किया जाता है:",
    s6P1: "वास्तविक संख्याओं में वर्ग हमेशा ≥ 0 होता है। ऋणात्मक पूर्णांक काल्पनिक इकाई (±bi) उत्पन्न करते हैं।",
    s7Lead: "कोई भी गैर-वर्ग संख्या दो लगातार वर्गों के बीच स्थित होती है: k² < n < (k + 1)².",
    s7P1: "उदाहरण के लिए, 50 संख्या 49 (7²) और 64 (8²) के बीच आती है। चूंकि 50 - 49 = 1 है, इसलिए 49 सबसे निकटतम वर्ग है (केवल 1 की दूरी पर)।",
    s8Lead: "मानसिक गणना और परीक्षाओं के लिए आवश्यक संदर्भ तालिका:",
    s9Apps: [
      { title: "ज्यामिति और क्षेत्रफल", text: "फर्श टाइल्स की संख्या, कमरों के नक्शे और वर्गाकार भूखंडों की माप।" },
      { title: "पाइथागोरस प्रमेय", text: "निर्माण और सर्वेक्षण में कर्ण और विकर्ण निकालना: a² + b² = c²।" },
      { title: "भौतिकी और गतिज ऊर्जा", text: "गतिज ऊर्जा (½mv²) और वाहनों की ब्रेकिंग दूरी की गणना।" },
      { title: "कंप्यूटर विज्ञान", text: "2D स्थानिक विभाजन (quadtrees) और मेमोरी मैट्रिक्स संरचनाएं।" }
    ],
    s10Mistakes: [
      { title: "वर्ग करना बनाम दोगुना करना", text: "वर्ग करने का अर्थ स्वयं से गुणा करना है (5²=25), दो से गुणा करना नहीं (5×2=10)।" },
      { title: "केवल अंतिम अंक पर्याप्त नहीं", text: "अंतिम अंक 4 होना वर्ग होने की गारंटी नहीं देता (14 और 24 वर्ग नहीं हैं; केवल 4, 64, 144...)।" },
      { title: "चिह्न और कोष्ठक", text: "सावधानी बरतें: (-4)² = 16 होता है, जबकि -(4²) = -16 होता है।" }
    ],
    s12Cards: [
      { title: "सूत्र", text: "n = k × k जहाँ k एक पूर्णांक है।" },
      { title: "अंतिम अंक", text: "केवल 0, 1, 4, 5, 6 या 9 पर समाप्त होता है।" },
      { title: "सम घातांक", text: "प्रत्येक अभाज्य गुणनखंड की घात सम होती है।" },
      { title: "100% मुफ़्त", text: "ऊपर दिए गए टूल से किसी भी संख्या की मुफ़्त जाँच करें।" }
    ],
    faqs: [
      { question: "सरल शब्दों में पूर्ण वर्ग क्या है?", answer: "पूर्ण वर्ग वह संख्या है जो किसी पूर्णांक को स्वयं से गुणा करने पर प्राप्त होती है। जैसे, 36 एक पूर्ण वर्ग है क्योंकि 6 × 6 = 36।" },
      { question: "क्या ऋणात्मक संख्या पूर्ण वर्ग हो सकती है?", answer: "नहीं, वास्तविक संख्याओं में किसी भी संख्या का वर्ग धनात्मक या शून्य होता है, इसलिए ऋणात्मक संख्या पूर्ण वर्ग नहीं हो सकती।" },
      { question: "क्या 0 एक पूर्ण वर्ग है?", answer: "हाँ, 0 एक पूर्ण वर्ग है क्योंकि 0 × 0 = 0 (0² = 0)।" },
      { question: "वर्गमूल और पूर्ण वर्ग में क्या अंतर है?", answer: "पूर्ण वर्ग गुणनफल का परिणाम है (उदा. 25), जबकि वर्गमूल वह मूल संख्या है जिसे गुणा किया गया था (उदा. 5)।" },
      { question: "क्या यह कैलकुलेटर मुफ़्त है?", answer: "हाँ, हमारा पूर्ण वर्ग कैलकुलेटर 100% मुफ़्त है और चरण-दर-चरण विस्तृत समाधान प्रदान करता है।" }
    ]
  },
  bn: {
    s1Intro: "এই ৩টি সহজ ধাপ অনুসরণ করে যেকোনো সংখ্যা কয়েক সেকেন্ডে যাচাই করুন:",
    s1Steps: [
      { title: "সংখ্যা লিখুন", text: "ইনপুট বক্সে একটি পূর্ণসংখ্যা লিখুন বা প্রিসেট বোতামে ক্লিক করুন।" },
      { title: "'যাচাই করুন' এ ক্লিক করুন", text: "সঠিক বর্গমূল অ্যালগরিদম চালাতে Enter চাপুন বা ক্লিক করুন।" },
      { title: "গাণিতিক প্রমাণ দেখুন", text: "ফলাফল, ভিত্তি মূল, জোড়/বিজোড় প্রকৃতি, নিকটতম বর্গ এবং মৌলিক উৎপাদক দেখুন।" }
    ],
    s2Lead: "একটি পূর্ণবর্গ সংখ্যা (Perfect Square) হলো এমন একটি পূর্ণসংখ্যা যা কোনো পূর্ণসংখ্যাকে নিজের সাথে গুণ করলে পাওয়া যায়: n = k² = k × k।",
    s2P1: "উদাহরণস্বরূপ, 144 একটি পূর্ণবর্গ সংখ্যা কারণ 12 × 12 = 144। পক্ষান্তরে, 50 পূর্ণবর্গ নয় কারণ √50 ≈ 7.071।",
    s2P2: "বর্গ শব্দটি জ্যামিতি থেকে এসেছে: 144টি টাইলস দিয়ে 12×12 এর একটি নিখুঁত বর্গাকার মেঝের গ্রিড তৈরি করা যায়।",
    s2Cards: [
      { title: "2D ক্ষেত্রফল জ্যামিতি", text: "বাহু k বিশিষ্ট বর্গের ক্ষেত্রফল k²। পূর্ণবর্গ নিখুঁত বর্গাকার গ্রিড উপস্থাপন করে।" },
      { title: "কেবলমাত্র বাস্তব সংখ্যা", text: "বাস্তব সংখ্যায় বর্গ সর্বদা অঋণাত্মক: k² ≥ 0। ঋণাত্মক সংখ্যা কাল্পনিক মূল তৈরি করে।" },
      { title: "জোড়/বিজোড় ধারাবাহিকতা", text: "জোড় সংখ্যার বর্গ জোড় (4²=16) এবং বিজোড় সংখ্যার বর্গ বিজোড় (5²=25) হয়।" },
      { title: "জোড় মৌলিক ঘাত", text: "মৌলিক উৎপাদকে বিশ্লেষণ করলে প্রতিটি মৌলিক উৎপাদকের ঘাত অবশ্যই জোড় সংখ্যা (2, 4, 6...) হতে হবে।" }
    ],
    s3Intro: "ক্যালকুলেটরটি তিনটি সুনির্দিষ্ট গাণিতিক পরীক্ষা চালায়:",
    s3Tests: [
      { title: "১. সঠিক বর্গমূল পরীক্ষা", text: "দশমিক ভগ্নাংশ মুক্ত পূর্ণসংখ্যা নিশ্চিত করতে উচ্চ নির্ভুলতায় √n নির্ণয় করে।" },
      { title: "২. মৌলিক উৎপাদকে বিশ্লেষণ", text: "সংখ্যাটিকে মৌলিক ঘাতে ভেঙে প্রতিটি ঘাত জোড় সংখ্যা কি না তা যাচাই করে।" },
      { title: "৩. ডিজিটাল রুট (Mod 9) ফিল্টার", text: "যেসব সংখ্যার ডিজিট যোগফল 1, 4, 7 বা 9 নয় সেগুলোকে তাৎক্ষণিকভাবে বাতিল করে।" }
    ],
    s4Examples: [
      { title: "উদাহরণ ১: 144 পরীক্ষা", expr: "√144 = 12", reason: "12 × 12 = 144 (সঠিক পূর্ণসংখ্যা)", verdict: "পূর্ণবর্গ সংখ্যা" },
      { title: "উদাহরণ ২: 50 পরীক্ষা", expr: "√50 ≈ 7.071", reason: "7²=49 এবং 8²=64 এর মধ্যে", verdict: "পূর্ণবর্গ সংখ্যা নয়" },
      { title: "উদাহরণ ৩: -16 পরীক্ষা", expr: "√(-16) = ±4i", reason: "কোনো বাস্তব সংখ্যার বর্গ ঋণাত্মক হতে পারে না", verdict: "বাস্তব নয়" }
    ],
    s5Intro: "ক্যালকুলেটর ছাড়াই অপূর্ণবর্গ সংখ্যা চেনার দুটি দ্রুত কৌশল:",
    s5R1Title: "১. শেষ অঙ্কের নিয়ম",
    s5R1Text: "একটি পূর্ণবর্গ সংখ্যা কেবলমাত্র 0, 1, 4, 5, 6 বা 9 দিয়ে শেষ হতে পারে। যদি 2, 3, 7 বা 8 দিয়ে শেষ হয় তবে তা কখনই পূর্ণবর্গ নয়!",
    s5R2Title: "২. ডিজিটাল রুট নিয়ম (Mod 9)",
    s5R2Text: "অঙ্কগুলো যোগ করতে থাকুন যতক্ষণ না একটি অঙ্ক পাওয়া যায়: পূর্ণবর্গের জন্য এটি সর্বদা 1, 4, 7 বা 9 হয় (অথবা 0 এর জন্য 0)।",
    s6Lead: "কেন ঋণাত্মক সংখ্যা এবং ভগ্নাংশ কঠোরভাবে মূল্যায়িত হয়:",
    s6P1: "বাস্তব সংখ্যায় বর্গ করলে সর্বদা মান ≥ 0 আসে। ঋণাত্মক সংখ্যা জটিল কাল্পনিক একক (±bi) তৈরি করে।",
    s7Lead: "যেকোনো অপূর্ণবর্গ সংখ্যা দুটি ধারাবাহিক বর্গের মধ্যে অবস্থান করে: k² < n < (k + 1)²।",
    s7P1: "যেমন, 50 সংখ্যাটি 49 (7²) এবং 64 (8²) এর মধ্যে অবস্থিত। যেহেতু 50 - 49 = 1, তাই 49 সবচেয়ে কাছের বর্গসংখ্যা (মাত্র 1 ব্যবধানে)।",
    s8Lead: "মানসিক হিসাব ও পরীক্ষার জন্য প্রয়োজনীয় রেফারেন্স তালিকা:",
    s9Apps: [
      { title: "জ্যামিতি ও ক্ষেত্রফল", text: "মেঝের টাইলস সংখ্যা, ঘরের নকশা এবং বর্গাকার জমির পরিমাপ।" },
      { title: "পীথাগোরাসের উপপাদ্য", text: "নির্মাণ ও ভূমি জরিপে অতিভুজ ও কর্ণ নির্ণয়: a² + b² = c²।" },
      { title: "পদার্থবিজ্ঞান ও গতিবিদ্যা", text: "গতিশক্তি (½mv²) এবং যানবাহনের ব্রেকিং দূরত্বের হিসাব।" },
      { title: "কম্পিউটার বিজ্ঞান", text: "2D স্থানিক বিভাজন (quadtree) এবং মেমোরি ম্যাট্রিক্স বিন্যাস।" }
    ],
    s10Mistakes: [
      { title: "বর্গ করা বনাম দ্বিগুণ করা", text: "বর্গ করার অর্থ নিজের সাথে গুণ করা (5²=25), দুই দিয়ে গুণ করা নয় (5×2=10)।" },
      { title: "কেবল শেষ অঙ্কই যথেষ্ট নয়", text: "শেষে 4 থাকলেই বর্গ হবে এমন নয় (14 এবং 24 বর্গ নয়; কেবল 4, 64, 144...)।" },
      { title: "চিহ্ন ও বন্ধনী", text: "সাবধান থাকুন: (-4)² = 16 কিন্তু -(4²) = -16।" }
    ],
    s12Cards: [
      { title: "সূত্র", text: "n = k × k যেখানে k একটি পূর্ণসংখ্যা।" },
      { title: "শেষ অঙ্ক", text: "কেবলমাত্র 0, 1, 4, 5, 6 বা 9 দিয়ে শেষ হয়।" },
      { title: "জোড় ঘাত", text: "প্রতিটি মৌলিক উৎপাদকের ঘাত জোড় সংখ্যা।" },
      { title: "১০০% বিনামূল্যে", text: "উপরে যেকোনো সংখ্যা বিনামূল্যে পূর্ণ সমাধানসহ পরীক্ষা করুন।" }
    ],
    faqs: [
      { question: "সহজ কথায় পূর্ণবর্গ সংখ্যা কী?", answer: "পূর্ণবর্গ সংখ্যা হলো এমন একটি সংখ্যা যা কোনো পূর্ণসংখ্যাকে নিজের সাথে গুণ করে পাওয়া যায়। যেমন 36 একটি পূর্ণবর্গ কারণ 6 × 6 = 36।" },
      { question: "ঋণাত্মক সংখ্যা কি পূর্ণবর্গ হতে পারে?", answer: "না, বাস্তব সংখ্যায় যেকোনো সংখ্যার বর্গ সর্বদা ধনাত্মক বা শূন্য, তাই ঋণাত্মক সংখ্যা পূর্ণবর্গ হতে পারে না।" },
      { question: "০ কি একটি পূর্ণবর্গ সংখ্যা?", answer: "হ্যাঁ, 0 একটি পূর্ণবর্গ সংখ্যা কারণ 0 × 0 = 0 (0² = 0)।" },
      { question: "বর্গমূল এবং পূর্ণবর্গ সংখ্যার মধ্যে পার্থক্য কী?", answer: "পূর্ণবর্গ হলো গুণের ফলাফল (যেমন 25), আর বর্গমূল হলো মূল উৎপাদক সংখ্যাটি (যেমন 5)।" },
      { question: "এই ক্যালকুলেটর কি সম্পূর্ণ বিনামূল্যে?", answer: "হ্যাঁ, আমাদের পূর্ণবর্গ ক্যালকুলেটরটি ১০০% বিনামূল্যে এবং ধাপে ধাপে বিস্তারিত সমাধান দেয়।" }
    ]
  },
  ja: {
    s1Intro: "次の3つの簡単なステップで、どんな数でも瞬時に平方数かどうか判定できます：",
    s1Steps: [
      { title: "数値を入力", text: "入力欄に整数を入力するか、プリセットボタンをクリックします。" },
      { title: "「判定する」をクリック", text: "Enterキーを押すかボタンをクリックして、平方根アルゴリズムを実行します。" },
      { title: "計算証明を確認", text: "判定結果、基本平方根、偶奇、前後の平方数、素因数分解を確認できます。" }
    ],
    s2Lead: "完全平方数（平方数）とは、ある整数を自分自身と掛け合わせて得られる整数のことです：n = k² = k × k。",
    s2P1: "例えば、144は 12 × 12 = 144 なので完全平方数です。一方、50は √50 ≈ 7.071 となり整数ではないため完全平方数ではありません。",
    s2P2: "「平方（スクエア）」という言葉は幾何学に由来します：144枚の正方形タイルを並べると、端数の出ない12×12の正方形が作れます。",
    s2Cards: [
      { title: "2次元面積の幾何学", text: "一辺の長さがkの正方形の面積はk²です。平方数はタイルの整然とした正方形格子を表します。" },
      { title: "実数のみの制限", text: "実数の世界では、2乗は必ず0以上になります：k² ≥ 0。負の数は虚数解となります。" },
      { title: "偶奇の一致", text: "偶数の2乗は必ず偶数（4²=16）、奇数の2乗は必ず奇数（5²=25）になります。" },
      { title: "素因数の偶数乗", text: "素因数分解したとき、すべての素因数の指数（乗数）が必ず偶数（2, 4, 6...）になります。" }
    ],
    s3Intro: "当計算機は以下の3つの厳密な数学的テストを実行します：",
    s3Tests: [
      { title: "1. 整数平方根テスト", text: "高精度で√nを算出し、小数点以下の余りが完全にゼロになるかを確かめます。" },
      { title: "2. 素因数分解テスト", text: "nを素因数分解し、すべての素数の指数が偶数であるかを検証します。" },
      { title: "3. デジタルルート（Mod 9）フィルター", text: "各位の数字を足し合わせた値が 1, 4, 7, 9 以外になる数を即座に除外します。" }
    ],
    s4Examples: [
      { title: "例1：144の検証", expr: "√144 = 12", reason: "12 × 12 = 144（正確な整数）", verdict: "完全平方数" },
      { title: "例2：50の検証", expr: "√50 ≈ 7.071", reason: "7²=49 と 8²=64 の間", verdict: "平方数ではありません" },
      { title: "例3：-16の検証", expr: "√(-16) = ±4i", reason: "実数の2乗が負になることはない", verdict: "実数ではありません" }
    ],
    s5Intro: "電卓を使わずに非平方数を数秒で見抜く2つの暗算テクニック：",
    s5R1Title: "1. 末尾の数字の法則",
    s5R1Text: "完全平方数の一の位は必ず 0, 1, 4, 5, 6, 9 のいずれかになります。一の位が 2, 3, 7, 8 であれば絶対に平方数ではありません！",
    s5R2Title: "2. デジタルルート（Mod 9）の法則",
    s5R2Text: "数字の桁を1桁になるまで足し合わせると、完全平方数なら必ず 1, 4, 7, 9（0の場合は0）になります。",
    s6Lead: "負の数や小数が厳密に除外される理由：",
    s6P1: "実数の2乗は常に ≥ 0 です。負の整数の平方根は虚数単位（±bi）を含む複素数となります。",
    s7Lead: "平方数でない整数は、必ず連続する2つの平方数の間に挟まれます：k² < n < (k + 1)²。",
    s7P1: "例えば 50 は 49（7²）と 64（8²）の間にあります。50 - 49 = 1 なので、49が最も近い平方数（わずか1の差）です。",
    s8Lead: "暗算や試験対策に役立つ基本平方数一覧：",
    s9Apps: [
      { title: "幾何学と面積計算", text: "タイル枚数、部屋の間取り、正方形の土地の区画計算。" },
      { title: "三平方の定理（ピタゴラス）", text: "建築・測量における斜辺や対角線の計算：a² + b² = c²。" },
      { title: "物理と運動力学", text: "運動エネルギー（½mv²）や速度の2乗に比例する制動距離の計算。" },
      { title: "情報工学・コンピューター", text: "4分木（Quadtree）による2D空間分割や画像行列のメモリ構造。" }
    ],
    s10Mistakes: [
      { title: "2乗と2倍の混同", text: "2乗は自身を掛けること（5²=25）であり、2を掛けること（5×2=10）ではありません。" },
      { title: "末尾の数字だけで判断しない", text: "末尾が4だからといって平方数とは限りません（14や24は平方数ではありません）。" },
      { title: "符号と括弧の注意", text: "記法に注意：(-4)² = 16 ですが、-(4²) = -16 です。" }
    ],
    s12Cards: [
      { title: "定義式", text: "kを整数として n = k × k。" },
      { title: "一の位の数", text: "末尾は必ず 0, 1, 4, 5, 6, 9。" },
      { title: "偶数の指数", text: "すべての素因数の乗数は偶数。" },
      { title: "完全無料", text: "上の計算ツールでいつでも無制限に判定可能。" }
    ],
    faqs: [
      { question: "わかりやすく言うと完全平方数とは何ですか？", answer: "整数を自分自身で掛け算して得られる整数のことです。例えば、6 × 6 = 36 なので36は完全平方数です。" },
      { question: "負の数は完全平方数になれますか？", answer: "いいえ。実数の世界ではどんな数を2乗しても0以上になるため、負の数が完全平方数になることはありません。" },
      { question: "0は完全平方数ですか？", answer: "はい、0 × 0 = 0（0² = 0）となるため、0も完全平方数です。" },
      { question: "平方根と完全平方数の違いは何ですか？", answer: "完全平方数は掛け合わせた結果の数値（例：25）であり、平方根はその基となった元の数値（例：5）です。" },
      { question: "この計算機は無料で使えますか？", answer: "はい、当サイトの完全平方数計算機は登録不要・完全無料で、ステップごとの解説付きでご利用いただけます。" }
    ]
  },
  ko: {
    s1Intro: "다음 3단계의 간단한 방법으로 몇 초 만에 어떤 수든 판별할 수 있습니다:",
    s1Steps: [
      { title: "숫자 입력", text: "입력창에 정수를 입력하거나 추천 버튼을 클릭하세요." },
      { title: "'판별하기' 클릭", text: "Enter 키를 누르거나 버튼을 클릭하여 정밀 제곱근 알고리즘을 실행합니다." },
      { title: "계산 증명 확인", text: "판별 결과, 밑 제곱근, 홀짝성, 인접 제곱수 및 소인수분해를 확인하세요." }
    ],
    s2Lead: "완전제곱수(제곱수)란 어떤 정수를 자기 자신과 곱하여 얻어지는 정수를 의미합니다: n = k² = k × k.",
    s2P1: "예를 들어, 144는 12 × 12 = 144이므로 완전제곱수입니다. 반면 50은 √50 ≈ 7.071로 정수가 아니므로 완전제곱수가 아닙니다.",
    s2P2: "'제곱(Square)'이라는 명칭은 기하학에서 유래했습니다: 144개의 정사각형 타일은 빈틈없이 12×12 정사각형 격자를 완성합니다.",
    s2Cards: [
      { title: "2D 면적 기하학", text: "한 변의 길이가 k인 정사각형의 면적은 k²입니다. 완전제곱수는 빈틈없는 타일 격자를 나타냅니다." },
      { title: "실수 범위 한정", text: "실수 체계에서 제곱은 항상 0 이상입니다: k² ≥ 0. 음수는 허수근을 갖게 됩니다." },
      { title: "홀짝성 보존", text: "짝수의 제곱은 항상 짝수(4²=16)이고, 홀수의 제곱은 항상 홀수(5²=25)입니다." },
      { title: "짝수 소인수 지수", text: "소인수분해 시 모든 소인수의 지수(거듭제곱수)는 반드시 짝수(2, 4, 6...)여야 합니다." }
    ],
    s3Intro: "이 계산기는 3가지 엄격한 수학적 검증을 수행합니다:",
    s3Tests: [
      { title: "1. 정수 제곱근 테스트", text: "소수점 이하 나머지가 전혀 없는지 고정밀도로 √n을 계산합니다." },
      { title: "2. 소인수분해 테스트", text: "n을 소인수로 분해하여 모든 지수가 짝수인지 확인합니다." },
      { title: "3. 자릿수 근(Mod 9) 필터", text: "각 자릿수를 반복해서 더한 값이 1, 4, 7, 9가 아닌 수를 즉시 배제합니다." }
    ],
    s4Examples: [
      { title: "예시 1: 144 판별", expr: "√144 = 12", reason: "12 × 12 = 144 (정확한 정수)", verdict: "완전제곱수" },
      { title: "예시 2: 50 판별", expr: "√50 ≈ 7.071", reason: "7²=49 와 8²=64 사이", verdict: "완전제곱수가 아님" },
      { title: "예시 3: -16 판별", expr: "√(-16) = ±4i", reason: "실수의 제곱은 음수가 될 수 없음", verdict: "실수가 아님" }
    ],
    s5Intro: "계산기 없이 비제곱수를 몇 초 만에 걸러내는 2가지 암산 비법:",
    s5R1Title: "1. 끝자리 수 판별법",
    s5R1Text: "완전제곱수의 일의 자리는 오직 0, 1, 4, 5, 6, 9 중 하나로만 끝납니다. 끝자리가 2, 3, 7, 8이면 절대 제곱수가 아닙니다!",
    s5R2Title: "2. 자릿수 근(Mod 9) 법칙",
    s5R2Text: "자릿수를 한 자리 수가 될 때까지 더하면 완전제곱수는 항상 1, 4, 7, 9(0의 경우 0)가 됩니다.",
    s6Lead: "음수와 소수가 엄격하게 제외되는 이유:",
    s6P1: "실수 체계에서 어떤 수를 제곱하면 항상 ≥ 0입니다. 음의 정수는 허수 단위(±bi)를 발생시킵니다.",
    s7Lead: "완전제곱수가 아닌 정수는 항상 연속하는 두 제곱수 사이에 놓입니다: k² < n < (k + 1)².",
    s7P1: "예를 들어 50은 49(7²)와 64(8²) 사이에 위치합니다. 50 - 49 = 1이므로 49가 가장 가까운 제곱수(단 1 차이)입니다.",
    s8Lead: "암산과 시험 대비를 위한 필수 제곱수 표:",
    s9Apps: [
      { title: "기하학 및 면적", text: "바닥 타일 수량 계산, 방 배치도 및 정사각형 대지 면적 산정." },
      { title: "피타고라스 정리", text: "건축 및 측량에서 빗변과 대각선 계산: a² + b² = c²." },
      { title: "물리학 및 운동학", text: "운동 에너지(½mv²) 및 속도의 제곱에 비례하는 제동 거리 계산." },
      { title: "컴퓨터 과학", text: "2D 공간 분할을 위한 사분트리(Quadtree) 및 2차원 메모리 매트릭스." }
    ],
    s10Mistakes: [
      { title: "제곱과 2배 혼동", text: "제곱은 자기 자신을 곱하는 것(5²=25)이지 2를 곱하는 것(5×2=10)이 아닙니다." },
      { title: "끝자리만으로 속단 금지", text: "끝자리가 4라고 해서 무조건 제곱수는 아닙니다(14, 24는 제곱수가 아니며 4, 64, 144...만 해당)." },
      { title: "부호와 괄호 주의", text: "표기에 주의하세요: (-4)² = 16이지만, -(4²) = -16입니다." }
    ],
    s12Cards: [
      { title: "정의 공식", text: "k가 정수일 때 n = k × k." },
      { title: "끝자리 숫자", text: "반드시 0, 1, 4, 5, 6, 9로만 끝남." },
      { title: "짝수 지수", text: "모든 소인수의 거듭제곱 지수가 짝수임." },
      { title: "100% 무료", text: "위 계산기를 통해 단계별 풀이와 함께 무제한 무료 검증." }
    ],
    faqs: [
      { question: "완전제곱수란 쉽게 말해 무엇인가요?", answer: "어떤 정수를 자기 자신과 곱했을 때 나오는 정수입니다. 예를 들어 6 × 6 = 36이므로 36은 완전제곱수입니다." },
      { question: "음수도 완전제곱수가 될 수 있나요?", answer: "아니요, 실수 범위에서 어떤 수를 제곱해도 항상 0 이상이 되므로 음수는 완전제곱수가 될 수 없습니다." },
      { question: "0은 완전제곱수인가요?", answer: "네, 0 × 0 = 0 (0² = 0)이므로 0도 완전제곱수입니다." },
      { question: "제곱근과 완전제곱수의 차이는 무엇인가요?", answer: "완전제곱수는 곱해서 나온 결과값(예: 25)이고, 제곱근은 그 바탕이 된 원래의 수(예: 5)입니다." },
      { question: "이 계산기는 무료인가요?", answer: "네, 본 완전제곱수 계산기는 100% 무료이며 횟수 제한 없이 상세한 단계별 풀이를 제공합니다." }
    ]
  },
  bg: {
    s1Intro: "Проверете всяко число за секунди с тези 3 лесни стъпки:",
    s1Steps: [
      { title: "Въведете число", text: "Въведете цяло число в полето или изберете бърз бутон." },
      { title: "Кликнете 'Провери'", text: "Натиснете Enter или кликнете бутона за прецизен алгоритъм на корен квадратен." },
      { title: "Вижте доказателството", text: "Получете резултат, основа на корена, четност, съседни квадрати и прости множители." }
    ],
    s2Lead: "Точен квадрат (пълен квадрат) е цяло число, равно на произведението на дадено цяло число само по себе си: n = k² = k × k.",
    s2P1: "Например 144 е точен квадрат, защото 12 × 12 = 144. За разлика от него 50 не е точен квадрат, тъй като √50 ≈ 7,071.",
    s2P2: "Думата квадрат идва от геометрията: 144 плочки образуват перфектна квадратна мрежа 12×12 без рязане.",
    s2Cards: [
      { title: "2D геометрия на площ", text: "Лицето на квадрат със страна k е k². Точните квадрати съответстват на цели квадратни мрежи." },
      { title: "Само реални числа", text: "В реалните числа всеки квадрат е неотрицателен: k² ≥ 0. Отрицателните числа дават имагинерни корени." },
      { title: "Запазване на четността", text: "Четните числа дават четни квадрати (4²=16); нечетните дават нечетни квадрати (5²=25)." },
      { title: "Четни степени на множителите", text: "В разлагането на прости множители всеки степенен показател трябва да бъде четен (2, 4, 6...)." }
    ],
    s3Intro: "Калкулаторът извършва три последователни математически проверки:",
    s3Tests: [
      { title: "1. Тест за цял квадратен корен", text: "Изчислява √n с висока точност, за да гарантира нулев дробен остатък." },
      { title: "2. Разлагане на прости множители", text: "Разлага n на прости множители и проверява дали всички степени са четни." },
      { title: "3. Филтър по цифров корен (Mod 9)", text: "Незабавно изключва числа, чийто цифров корен не е 1, 4, 7 или 9." }
    ],
    s4Examples: [
      { title: "Пример 1: Проверка на 144", expr: "√144 = 12", reason: "12 × 12 = 144 (точно цяло число)", verdict: "ТОЧЕН КВАДРАТ" },
      { title: "Пример 2: Проверка на 50", expr: "√50 ≈ 7,071", reason: "Между 7²=49 и 8²=64", verdict: "НЕ Е ТОЧЕН КВАДРАТ" },
      { title: "Пример 3: Проверка на -16", expr: "√(-16) = ±4i", reason: "Реален квадрат не може да бъде отрицателен", verdict: "НЕ Е РЕАЛНО ЧИСЛО" }
    ],
    s5Intro: "Два бързи метода за изключване на неточни квадрати за секунди без калкулатор:",
    s5R1Title: "1. Правило на последната цифра",
    s5R1Text: "Точен квадрат може да завършва САМО на 0, 1, 4, 5, 6 или 9. Ако завършва на 2, 3, 7 или 8, НИКОГА не е точен квадрат!",
    s5R2Title: "2. Правило на цифровия корен (Mod 9)",
    s5R2Text: "Събирайте цифрите до една цифра: за точен квадрат резултатът винаги е 1, 4, 7 или 9 (или 0 за 0).",
    s6Lead: "Защо отрицателните числа и дробите се оценяват строго:",
    s6P1: "При реалните числа повдигането на квадрат винаги дава стойност ≥ 0. Отрицателните числа пораждат имагинерната единица (±bi).",
    s7Lead: "Всяко число, което не е точен квадрат, лежи между два последователни квадрата: k² < n < (k + 1)².",
    s7P1: "Например 50 се намира между 49 (7²) и 64 (8²). Тъй като 50 - 49 = 1, числото 49 е най-близкият точен квадрат (само на 1 разстояние).",
    s8Lead: "Основна справочна таблица за бързо смятане и изпити:",
    s9Apps: [
      { title: "Геометрия и площи", text: "Изчисляване на брой плочки, разпределения на помещения и парцели." },
      { title: "Питагорова теорема", text: "Изчисляване на хипотенузи и диагонали в строителството: a² + b² = c²." },
      { title: "Физика и кинематика", text: "Кинетична енергия (½mv²) и спирачен път, нарастващ с квадрата на скоростта." },
      { title: "Компютърни науки", text: "Quadtree дървета за 2D пространствено индексиране и матрични структури." }
    ],
    s10Mistakes: [
      { title: "Квадрат срещу удвояване", text: "Повдигането на квадрат е умножение по себе си (5²=25), а не по две (5×2=10)." },
      { title: "Последната цифра не е достатъчна", text: "Завършването на 4 не гарантира квадрат (14 и 24 не са квадрати; само 4, 64, 144...)." },
      { title: "Знаци и скоби", text: "Внимавайте със скобите: (-4)² = 16, докато -(4²) = -16." }
    ],
    s12Cards: [
      { title: "Формула", text: "n = k × k, където k е цяло число." },
      { title: "Последни цифри", text: "Завършва само на 0, 1, 4, 5, 6 или 9." },
      { title: "Четни степени", text: "Всеки прост множител има четен степенен показател." },
      { title: "100% Безплатно", text: "Проверявайте неограничено всякакви числа с пълно разлагане." }
    ],
    faqs: [
      { question: "Какво е точен квадрат с прости думи?", answer: "Това е цяло число, получено от умножението на дадено цяло число само по себе си. Например 36 е точен квадрат, защото 6 × 6 = 36." },
      { question: "Може ли отрицателно число да бъде точен квадрат?", answer: "Не, при реалните числа квадратът на всяко число е винаги положителен или нула, така че отрицателно число не може да бъде точен квадрат." },
      { question: "Нулата точен квадрат ли е?", answer: "Да, 0 е точен квадрат, тъй като 0 × 0 = 0 (0² = 0)." },
      { question: "Каква е разликата между квадратен корен и точен квадрат?", answer: "Точният квадрат е полученият резултат (напр. 25), а квадратният корен е изходното число (напр. 5)." },
      { question: "Безплатен ли е този калкулатор?", answer: "Да, нашият калкулатор за точни квадрати е 100% безплатен и показва пълно решение стъпка по стъпка." }
    ]
  }
};

export function getSquareBoilerplate(lang: string): SquareBoilerplate {
  return SQUARE_BOILERPLATE[lang] || SQUARE_BOILERPLATE.en;
}
