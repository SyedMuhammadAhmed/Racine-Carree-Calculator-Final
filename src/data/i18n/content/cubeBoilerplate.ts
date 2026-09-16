// Full localized child content and educational copy for Perfect Cube Calculator across all 18 languages

export interface CubeBoilerplate {
  s1Lead: string;
  s1P1: string;
  s1P2: string;
  s1Cards: Array<{ title: string; text: string }>;
  s2Intro: string;
  s2Steps: Array<{ title: string; text: string }>;
  s3Intro: string;
  s3Tests: Array<{ title: string; subtitle: string; text: string; example: string }>;
  s4Desc: string;
  s5P1: string;
  s5P2: string;
  s6P1: string;
  s6MultTitle: string;
  s6MultText: string;
  s6DivTitle: string;
  s6DivText: string;
  s7P1: string;
  s7Table: {
    propCol: string;
    squareCol: string;
    cubeCol: string;
    rows: Array<{ prop: string; square: string; cube: string }>;
  };
  s8Apps: Array<{ title: string; text: string }>;
  s10Cards: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const CUBE_BOILERPLATE: Record<string, CubeBoilerplate> = {
  en: {
    s1Lead: "A perfect cube is an integer obtained by multiplying an integer by itself twice: n = k × k × k = k³. The number k is called the cube root of n (written ∛n).",
    s1P1: "For example, 27 is a perfect cube because 3 × 3 × 3 = 27 (so ∛27 = 3). Similarly, 125 = 5³ and -64 = (-4)³. However, 50 is not a perfect cube because ∛50 ≈ 3.684 — no integer multiplied by itself three times gives 50.",
    s1P2: "The term comes from 3D geometry: a cube with edge length k has volume k³. If you have 27 unit blocks, you can build a 3×3×3 solid cube without leftovers.",
    s1Cards: [
      { title: "Negative cubes exist!", text: "Odd powers preserve signs: (-3)³ = -27. Negative integers can be true real perfect cubes." },
      { title: "Zero and One", text: "0 and 1 are basic cubes: 0³ = 0 and 1³ = 1. -1 is also a cube: (-1)³ = -1." },
      { title: "Parity consistency", text: "The cube of an even number is always even (2³=8, 4³=64), and an odd number is always odd (3³=27, 5³=125)." },
      { title: "Prime exponent rule", text: "In prime factorization, every prime's exponent must be an exact multiple of 3." }
    ],
    s2Intro: "Test any integer in milliseconds by following these 3 simple steps:",
    s2Steps: [
      { title: "Enter an integer", text: "Type any positive or negative integer, or pick a preset button (-27, 216, 1331...)." },
      { title: "Click 'Check'", text: "Press Check or Enter to calculate the exact cube root and prime factorization." },
      { title: "Review the proof", text: "Explore the verdict, step-by-step factoring, bounding cubes, and algebraic multiplier." }
    ],
    s3Intro: "Mathematicians rely on four fundamental tests to verify perfect cubes:",
    s3Tests: [
      { title: "Test 1: Integer Root", subtitle: "Direct calculation", text: "Compute ∛n. If the root has zero decimals, n is a perfect cube.", example: "∛343 = 7.0000000 → Exact integer 7." },
      { title: "Test 2: Prime Factors", subtitle: "Powers divisible by 3", text: "Factorize into primes. If every exponent divides by 3, it's a cube.", example: "216 = 2³ × 3³ → Perfect cube!" },
      { title: "Test 3: Negative Symmetry", subtitle: "Odd exponent rule", text: "Since (-k)³ = -k³, negative integer -n is a cube if |n| is a cube.", example: "-512 is a cube because ∛(-512) = -8." },
      { title: "Test 4: Digital Root (Mod 9)", subtitle: "Elimination filter", text: "Sum digits repeatedly: digital root of a cube is always 0, 1, 8, or 9.", example: "Digital root of 1331: 1+3+3+1 = 8 (test passed)." }
    ],
    s4Desc: "Memorizing the first 30 cubes builds strong mental arithmetic foundations:",
    s5P1: "Every non-cube integer sits strictly between two consecutive cubes: k³ < n < (k + 1)³.",
    s5P2: "For 500, bounding cubes are 343 (7³) and 512 (8³). Since distance to 512 is only 12, 512 is the nearest cube.",
    s6P1: "Multiply or divide by missing prime factors to adjust exponents to multiples of 3:",
    s6MultTitle: "1. By Multiplication",
    s6MultText: "Multiply by missing powers to reach the next multiple of 3.",
    s6DivTitle: "2. By Division",
    s6DivText: "Divide by excess factors to leave only exact triplets.",
    s7P1: "Comparing 2D powers (squares) with 3D powers (cubes):",
    s7Table: {
      propCol: "Property",
      squareCol: "Perfect Square (k²)",
      cubeCol: "Perfect Cube (k³)",
      rows: [
        { prop: "Geometry", square: "2D surface area of a square", cube: "3D volume of a solid cube" },
        { prop: "Negative numbers", square: "Not real (imaginary root ±bi)", cube: "Valid real: (-k)³ = -k³" },
        { prop: "Prime exponents", square: "Multiples of 2 (even)", cube: "Multiples of 3" },
        { prop: "Last digit", square: "Only 0, 1, 4, 5, 6, 9", cube: "Any digit from 0 to 9" },
        { prop: "Both simultaneously", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volume & Logistics", text: "Container packing, storage bins, and freight crate dimensions in 3D transport." },
      { title: "Physics & Biomechanics", text: "The square-cube law governing surface-to-mass ratios in animals and engineering." },
      { title: "3D Graphics & Voxels", text: "Voxel grid volumetric rendering in game engines like Minecraft." },
      { title: "Cryptography", text: "Elliptic curve cryptography and analytical number theory in cyber security." }
    ],
    s10Cards: [
      { title: "Three Identical Factors", text: "Satisfies n = k × k × k where k is an integer." },
      { title: "Admits Negative Numbers", text: "Unlike square roots, odd roots of negative numbers are real." },
      { title: "Exponents in 3s", text: "Every prime factor must carry an exponent divisible by 3." },
      { title: "100% Free", text: "Check unlimited numbers with proofs and analysis instantly." }
    ],
    faqs: [
      { question: "What is a perfect cube in simple terms?", answer: "It is an integer that results from multiplying an integer by itself three times. For example, 27 is a perfect cube because 3 × 3 × 3 = 27." },
      { question: "Can a negative number be a perfect cube?", answer: "Yes! Multiplying three negatives yields a negative: (-4) × (-4) × (-4) = -64. Thus, -64 is a perfect cube with root -4." },
      { question: "Is 0 a perfect cube?", answer: "Yes, 0 is a perfect cube because 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Can a number be both a square and a cube?", answer: "Yes, numbers whose prime exponents are multiples of 6: 1, 64 (8² and 4³), 729 (27² and 9³), and 4096 (64² and 16³)." },
      { question: "Is this calculator free?", answer: "Yes, our perfect cube calculator is 100% free with unlimited checks and complete step-by-step proofs." }
    ]
  },
  fr: {
    s1Lead: "Un cube parfait est un nombre entier obtenu en multipliant un entier par lui-même deux fois : n = k × k × k = k³. Le nombre k est appelé la racine cubique de n (notée ∛n).",
    s1P1: "Par exemple, 27 est un cube parfait car 3 × 3 × 3 = 27 (donc ∛27 = 3). De même, 125 = 5³ et -64 = (-4)³. En revanche, 50 n'est pas un cube parfait car ∛50 ≈ 3,684.",
    s1P2: "Le terme provient de la géométrie 3D : avec 27 petits cubes unitaires, vous pouvez bâtir un cube plein de 3×3×3 sans aucun vide ni reste.",
    s1Cards: [
      { title: "Les cubes négatifs existent !", text: "Les puissances impaires conservent le signe : (-3)³ = -27. Les entiers négatifs peuvent être de vrais cubes parfaits réels." },
      { title: "Zéro et Un", text: "0 et 1 sont des cubes parfaits de base : 0³ = 0 et 1³ = 1. -1 l'est aussi : (-1)³ = -1." },
      { title: "Cohérence de parité", text: "Le cube d'un nombre pair est toujours pair (2³=8, 4³=64) et celui d'un impair est toujours impair (3³=27, 5³=125)." },
      { title: "Règle des exposants premiers", text: "Dans la factorisation première, chaque exposant doit être un multiple exact de 3." }
    ],
    s2Intro: "Testez n'importe quel entier en quelques millisecondes grâce à ces 3 étapes simples :",
    s2Steps: [
      { title: "Entrez un entier", text: "Saisissez un nombre entier positif ou négatif, ou cliquez sur un bouton rapide (-27, 216, 1331...)." },
      { title: "Cliquez sur Vérifier", text: "Appuyez sur Vérifier ou Entrée pour calculer instantanément la racine cubique et les facteurs." },
      { title: "Consultez la preuve", text: "Analysez le verdict, la factorisation pas à pas, les cubes encadrants et le multiplicateur." }
    ],
    s3Intro: "Les mathématiciens utilisent quatre tests majeurs pour identifier un cube parfait :",
    s3Tests: [
      { title: "Test 1 : Racine cubique entière", subtitle: "Calcul direct", text: "Calculez ∛n. Si le résultat ne comporte aucune décimale, n est un cube parfait.", example: "∛343 = 7,0000000 → Entier 7 exact." },
      { title: "Test 2 : Facteurs premiers", subtitle: "Exposants multiples de 3", text: "Décomposez en nombres premiers. Si chaque exposant se divise par 3, c'est un cube.", example: "216 = 2³ × 3³ → Cube parfait !" },
      { title: "Test 3 : Symétrie négative", subtitle: "Règle des puissances impaires", text: "Comme (-k)³ = -k³, un entier négatif -n est un cube si |n| en est un.", example: "-512 est un cube car ∛(-512) = -8." },
      { title: "Test 4 : Racine numérique (Mod 9)", subtitle: "Filtre d'élimination", text: "Additionnez les chiffres : la racine numérique d'un cube vaut toujours 0, 1, 8 ou 9.", example: "Racine numérique de 1331 : 1+3+3+1 = 8 (test réussi)." }
    ],
    s4Desc: "Mémoriser les 30 premiers cubes parfaits renforce considérablement les capacités de calcul mental :",
    s5P1: "Tout nombre non cube est strictement encadré par deux cubes consécutifs : k³ < n < (k + 1)³.",
    s5P2: "Pour 500, les cubes voisins sont 343 (7³) et 512 (8³). Comme l'écart avec 512 n'est que de 12, 512 est le cube le plus proche.",
    s6P1: "Multipliez ou divisez par les facteurs premiers manquants pour compléter des groupes de 3 :",
    s6MultTitle: "1. Par Multiplication",
    s6MultText: "Multipliez par les puissances manquantes pour atteindre le multiple de 3 supérieur.",
    s6DivTitle: "2. Par Division",
    s6DivText: "Divisez par les facteurs excédentaires pour ne conserver que des triplets parfaits.",
    s7P1: "Comparaison des propriétés en 2D (carrés) et en 3D (cubes) :",
    s7Table: {
      propCol: "Propriété",
      squareCol: "Carré Parfait (k²)",
      cubeCol: "Cube Parfait (k³)",
      rows: [
        { prop: "Géométrie", square: "Aire 2D d'un carré plat", cube: "Volume 3D d'un cube solide" },
        { prop: "Nombres négatifs", square: "Non réels (racine imaginaire ±bi)", cube: "Réels valides : (-k)³ = -k³" },
        { prop: "Exposants premiers", square: "Multiples de 2 (pairs)", cube: "Multiples de 3" },
        { prop: "Dernier chiffre", square: "Uniquement 0, 1, 4, 5, 6, 9", cube: "N'importe quel chiffre de 0 à 9" },
        { prop: "Les deux à la fois", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volume & Logistique", text: "Optimisation de l'emballage, conteneurs maritimes et caisses de fret 3D." },
      { title: "Physique & Biomécanique", text: "Loi carré-cube reliant la surface corporelle et la masse dans le vivant et l'ingénierie." },
      { title: "Graphismes 3D & Voxels", text: "Modélisation volumétrique à base de voxels cubiques (type Minecraft)." },
      { title: "Cryptographie", text: "Courbes elliptiques et théorie analytique des nombres en cybersécurité." }
    ],
    s10Cards: [
      { title: "Trois Facteurs Identiques", text: "Répond à la formule n = k × k × k avec k entier." },
      { title: "Accepte les Négatifs", text: "À la différence des racines carrées, les racines impaires de négatifs sont réelles." },
      { title: "Exposants par 3", text: "Chaque facteur premier doit avoir un exposant divisible par 3." },
      { title: "100% Gratuit", text: "Vérifiez des nombres illimités avec étapes et analyses détaillées." }
    ],
    faqs: [
      { question: "Qu'est-ce qu'un cube parfait simplement ?", answer: "C'est un nombre entier qui résulte de la multiplication d'un entier par lui-même trois fois. Par exemple, 27 est un cube parfait car 3 × 3 × 3 = 27." },
      { question: "Un nombre négatif peut-il être un cube parfait ?", answer: "Oui ! Le produit de trois nombres négatifs est négatif : (-4) × (-4) × (-4) = -64. Ainsi, -64 est un cube parfait avec pour racine -4." },
      { question: "Le 0 est-il un cube parfait ?", answer: "Oui, 0 est un cube parfait car 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Un nombre peut-il être à la fois carré et cube ?", answer: "Oui, les nombres dont les exposants premiers sont des multiples de 6 : 1, 64 (8² et 4³), 729 (27² et 9³) et 4096 (64² et 16³)." },
      { question: "Ce calculateur est-il gratuit ?", answer: "Oui, notre calculateur de cubes parfaits est 100% gratuit et sans limite d'utilisation." }
    ]
  },
  de: {
    s1Lead: "Eine Kubikzahl (perfekter Kubus) ist eine ganze Zahl, die entsteht, wenn eine ganze Zahl zweimal mit sich selbst multipliziert wird: n = k × k × k = k³. Die Zahl k heißt Kubikwurzel von n (geschrieben ∛n).",
    s1P1: "Beispielsweise ist 27 eine Kubikzahl, da 3 × 3 × 3 = 27 (also ∛27 = 3). Ebenso gilt 125 = 5³ und -64 = (-4)³. Dagegen ist 50 keine Kubikzahl, da ∛50 ≈ 3,684 ergibt.",
    s1P2: "Der Begriff stammt aus der 3D-Geometrie: Aus 27 Einheitswürfeln lässt sich ein solider 3×3×3-Würfel lückenlos zusammensetzen.",
    s1Cards: [
      { title: "Negative Kubikzahlen existieren!", text: "Ungerade Potenzen behalten das Vorzeichen: (-3)³ = -27. Negative ganze Zahlen können echte reelle Kubikzahlen sein." },
      { title: "Null und Eins", text: "0 und 1 sind grundlegende Kubikzahlen: 0³ = 0 und 1³ = 1. Auch -1 ist eine Kubikzahl: (-1)³ = -1." },
      { title: "Gleichbleibende Parität", text: "Der Kubus einer geraden Zahl ist immer gerade (2³=8, 4³=64), und einer ungeraden immer ungerade (3³=27, 5³=125)." },
      { title: "Primfaktorenregel", text: "In der Primfaktorzerlegung muss jeder Exponent ein ganzzahliges Vielfaches von 3 sein." }
    ],
    s2Intro: "Überprüfen Sie jede beliebige Zahl in Millisekunden anhand dieser 3 Schritte:",
    s2Steps: [
      { title: "Zahl eingeben", text: "Geben Sie eine positive oder negative ganze Zahl ein oder wählen Sie eine Vorlage (-27, 216, 1331...)." },
      { title: "Auf 'Prüfen' klicken", text: "Klicken Sie auf Prüfen oder drücken Sie Enter, um Wurzel und Faktoren sofort zu berechnen." },
      { title: "Beweis ansehen", text: "Erkunden Sie das Ergebnis, die Primfaktorzerlegung, Nachbar-Kuben und den Multiplikator." }
    ],
    s3Intro: "Mathematiker nutzen vier grundlegende Tests zur Überprüfung von Kubikzahlen:",
    s3Tests: [
      { title: "Test 1: Ganzzahlige Kubikwurzel", subtitle: "Direkte Berechnung", text: "Berechnen Sie ∛n. Ist das Ergebnis ohne Nachkommastellen, ist n eine Kubikzahl.", example: "∛343 = 7,0000000 → Exakte ganze Zahl 7." },
      { title: "Test 2: Primfaktorzerlegung", subtitle: "Exponenten durch 3 teilbar", text: "Zerlegen Sie in Primfaktoren. Wenn jeder Exponent durch 3 teilbar ist, liegt ein Kubus vor.", example: "216 = 2³ × 3³ → Perfekte Kubikzahl!" },
      { title: "Test 3: Negative Symmetrie", subtitle: "Ungerade Exponentenregel", text: "Da (-k)³ = -k³ gilt, ist eine negative Zahl -n ein Kubus, wenn |n| einer ist.", example: "-512 ist ein Kubus, da ∛(-512) = -8." },
      { title: "Test 4: Quersumme (Mod 9)", subtitle: "Ausschlussfilter", text: "Die wiederholte Quersumme einer Kubikzahl ist stets 0, 1, 8 oder 9.", example: "Quersumme von 1331: 1+3+3+1 = 8 (Test bestanden)." }
    ],
    s4Desc: "Das Beherrschen der ersten 30 Kubikzahlen stärkt das Kopfrechnen im Alltag:",
    s5P1: "Jede Zahl, die keine Kubikzahl ist, liegt zwischen zwei aufeinanderfolgenden Kuben: k³ < n < (k + 1)³.",
    s5P2: "Für 500 liegen die begrenzenden Kuben bei 343 (7³) und 512 (8³). Der Abstand zu 512 beträgt nur 12, daher ist 512 der nächste Kubus.",
    s6P1: "Multiplizieren oder dividieren Sie Primfaktoren, um alle Exponenten auf Vielfache von 3 zu bringen:",
    s6MultTitle: "1. Durch Multiplikation",
    s6MultText: "Multiplizieren Sie mit den fehlenden Potenzen, um das nächste Vielfache von 3 zu erreichen.",
    s6DivTitle: "2. Durch Division",
    s6DivText: "Teilen Sie durch überschüssige Faktoren, um exakte Dreiergruppen zu behalten.",
    s7P1: "Gegenüberstellung von 2D-Potenzen (Quadrate) und 3D-Potenzen (Kuben):",
    s7Table: {
      propCol: "Eigenschaft",
      squareCol: "Quadratzahl (k²)",
      cubeCol: "Kubikzahl (k³)",
      rows: [
        { prop: "Geometrie", square: "2D-Fläche eines Quadrats", cube: "3D-Volumen eines Würfels" },
        { prop: "Negative Zahlen", square: "Nicht reell (imaginäre Wurzel ±bi)", cube: "Gültig reell: (-k)³ = -k³" },
        { prop: "Prim-Exponenten", square: "Vielfache von 2 (gerade)", cube: "Vielfache von 3" },
        { prop: "Letzte Ziffer", square: "Nur 0, 1, 4, 5, 6, 9", cube: "Jede Ziffer von 0 bis 9" },
        { prop: "Beides zugleich", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volumen & Logistik", text: "Optimierung von Lagerbehältern, Frachtkisten und Transportcontainern." },
      { title: "Physik & Biomechanik", text: "Das Quadrat-Kubus-Gesetz für Oberflächen-Masse-Verhältnisse in Natur und Technik." },
      { title: "3D-Grafik & Voxel", text: "Volumetrische Voxel-Gitter in 3D-Engines und Spielen wie Minecraft." },
      { title: "Kryptographie", text: "Elliptische Kurven und analytische Zahlentheorie in der Informationssicherheit." }
    ],
    s10Cards: [
      { title: "Drei gleiche Faktoren", text: "Erfüllt die Formel n = k × k × k mit ganzzahligem k." },
      { title: "Erlaubt negative Zahlen", text: "Anders als Quadratwurzeln sind ungerade Wurzeln aus negativen Zahlen reell." },
      { title: "Dreierpotenzen", text: "Jeder Primfaktor besitzt einen durch 3 teilbaren Exponenten." },
      { title: "100% Kostenlos", text: "Beliebig viele Zahlen mit sofortiger Rechenanalyse prüfen." }
    ],
    faqs: [
      { question: "Was ist eine Kubikzahl in einfachen Worten?", answer: "Eine ganze Zahl, die entsteht, wenn man eine Zahl dreimal mit sich selbst multipliziert. Beispiel: 27 ist eine Kubikzahl, da 3 × 3 × 3 = 27." },
      { question: "Können negative Zahlen Kubikzahlen sein?", answer: "Ja! Das Produkt dreier negativer Zahlen ist negativ: (-4) × (-4) × (-4) = -64. Daher ist -64 eine Kubikzahl mit Wurzel -4." },
      { question: "Ist 0 eine Kubikzahl?", answer: "Ja, 0 ist eine Kubikzahl, da 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Kann eine Zahl Quadrat- und Kubikzahl zugleich sein?", answer: "Ja, wenn die Primexponenten Vielfache von 6 sind: 1, 64 (8² und 4³), 729 (27² und 9³) und 4096 (64² und 16³)." },
      { question: "Ist dieser Rechner kostenlos?", answer: "Ja, unser Kubikzahl-Rechner ist 100% kostenlos und ohne Einschränkungen nutzbar." }
    ]
  },
  it: {
    s1Lead: "Un cubo perfetto è un numero intero ottenuto moltiplicando un intero per se stesso due volte: n = k × k × k = k³. Il numero k è chiamato radice cubica di n (indicato con ∛n).",
    s1P1: "Ad esempio, 27 è un cubo perfetto perché 3 × 3 × 3 = 27 (quindi ∛27 = 3). Allo stesso modo, 125 = 5³ e -64 = (-4)³. Tuttavia, 50 non è un cubo perfetto poiché ∛50 ≈ 3,684.",
    s1P2: "Il termine deriva dalla geometria 3D: con 27 cubi unitari puoi costruire un cubo solido di 3×3×3 senza spazi vuoti né avanzi.",
    s1Cards: [
      { title: "I cubi negativi esistono!", text: "Le potenze dispari mantengono il segno: (-3)³ = -27. Gli interi negativi possono essere veri cubi perfetti reali." },
      { title: "Zero e Uno", text: "0 e 1 sono cubi perfetti fondamentali: 0³ = 0 e 1³ = 1. Anche -1 è un cubo: (-1)³ = -1." },
      { title: "Coerenza di parità", text: "Il cubo di un numero pari è sempre pari (2³=8, 4³=64) e quello di un dispari è sempre dispari (3³=27, 5³=125)." },
      { title: "Regola degli esponenti primi", text: "Nella scomposizione in fattori primi, ogni esponente deve essere un multiplo esatto di 3." }
    ],
    s2Intro: "Verifica qualsiasi numero in millisecondi seguendo questi 3 semplici passaggi:",
    s2Steps: [
      { title: "Inserisci un intero", text: "Digita un numero intero positivo o negativo, oppure scegli un pulsante rapido (-27, 216, 1331...)." },
      { title: "Fai clic su 'Verifica'", text: "Premi Verifica o Invio per calcolare all'istante la radice cubica e i fattori primi." },
      { title: "Esamina la prova", text: "Controlla il verdetto, la scomposizione passo dopo passo, i cubi vicini e il moltiplicatore." }
    ],
    s3Intro: "I matematici applicano quattro verifiche fondamentali per confermare un cubo perfetto:",
    s3Tests: [
      { title: "Test 1: Radice cubica intera", subtitle: "Calcolo diretto", text: "Calcola ∛n. Se la radice non ha cifre decimali, n è un cubo perfetto.", example: "∛343 = 7,0000000 → Intero esatto 7." },
      { title: "Test 2: Fattori primi", subtitle: "Esponenti divisibili per 3", text: "Scomponi in fattori primi. Se ogni esponente è divisibile per 3, è un cubo.", example: "216 = 2³ × 3³ → Cubo perfetto!" },
      { title: "Test 3: Simmetria negativa", subtitle: "Regola delle potenze dispari", text: "Dato che (-k)³ = -k³, un numero negativo -n è un cubo se |n| lo è.", example: "-512 è un cubo perfetto perché ∛(-512) = -8." },
      { title: "Test 4: Radice numerica (Mod 9)", subtitle: "Filtro di esclusione", text: "Sommando ripetutamente le cifre, la radice numerica di un cubo è sempre 0, 1, 8 o 9.", example: "Radice numerica di 1331: 1+3+3+1 = 8 (test superato)." }
    ],
    s4Desc: "Imparare i primi 30 cubi perfetti velocizza notevolmente il calcolo a mente:",
    s5P1: "Qualsiasi numero non cubo è compreso tra due cubi consecutivi: k³ < n < (k + 1)³.",
    s5P2: "Per 500, i cubi delimitatori sono 343 (7³) e 512 (8³). Poiché la distanza da 512 è solo 12, 512 è il più vicino.",
    s6P1: "Moltiplica o dividi per i fattori primi mancanti per portare gli esponenti a multipli di 3:",
    s6MultTitle: "1. Tramite Moltiplicazione",
    s6MultText: "Moltiplica per le potenze mancanti fino a raggiungere il multiplo di 3 successivo.",
    s6DivTitle: "2. Tramite Divisione",
    s6DivText: "Dividi per i fattori in eccesso per lasciare solo terne esatte.",
    s7P1: "Confronto tra potenze 2D (quadrati) e potenze 3D (cubi):",
    s7Table: {
      propCol: "Proprietà",
      squareCol: "Quadrato Perfetto (k²)",
      cubeCol: "Cubo Perfetto (k³)",
      rows: [
        { prop: "Geometria", square: "Area 2D di un quadrato piano", cube: "Volume 3D di un cubo solido" },
        { prop: "Numeri negativi", square: "Non reali (radice immaginaria ±bi)", cube: "Validi reali: (-k)³ = -k³" },
        { prop: "Esponenti primi", square: "Multipli di 2 (pari)", cube: "Multipli di 3" },
        { prop: "Ultima cifra", square: "Solo 0, 1, 4, 5, 6, 9", cube: "Qualsiasi cifra da 0 a 9" },
        { prop: "Entrambi insieme", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volume e Logistica", text: "Dimensionamento di casse, serbatoi e imballaggi per il trasporto 3D." },
      { title: "Fisica e Biomeccanica", text: "La legge quadratico-cubica che mette in relazione superficie e massa negli esseri viventi." },
      { title: "Grafica 3D e Voxel", text: "Modellazione volumetrica su griglie voxel (in stile Minecraft)." },
      { title: "Crittografia", text: "Curve ellittiche e teoria dei numeri applicata alla sicurezza informatica." }
    ],
    s10Cards: [
      { title: "Tre Fattori Uguali", text: "Risponde alla formula n = k × k × k con k intero." },
      { title: "Accetta Numeri Negativi", text: "A differenza delle radici quadrate, i cubi di negativi sono reali." },
      { title: "Esponenti Multipli di 3", text: "Ogni fattore primo deve avere un esponente divisibile per 3." },
      { title: "100% Gratuito", text: "Verifiche illimitate con spiegazioni dettagliate e calcolo istantaneo." }
    ],
    faqs: [
      { question: "Cos'è un cubo perfetto in parole semplici?", answer: "È un numero intero che deriva dal moltiplicare un intero per se stesso tre volte. Ad esempio, 27 è un cubo perfetto perché 3 × 3 × 3 = 27." },
      { question: "Un numero negativo può essere un cubo perfetto?", answer: "Sì! Il prodotto di tre numeri negativi è negativo: (-4) × (-4) × (-4) = -64. Dunque -64 è un cubo perfetto con radice -4." },
      { question: "Lo 0 è un cubo perfetto?", answer: "Sì, 0 è un cubo perfetto perché 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Un numero può essere sia quadrato che cubo?", answer: "Sì, se gli esponenti primi sono multipli di 6: 1, 64 (8² e 4³), 729 (27² e 9³) e 4096 (64² e 16³)." },
      { question: "Questo calcolatore è gratuito?", answer: "Sì, il nostro strumento è gratuito al 100% con verifiche illimitate e passaggi completi." }
    ]
  },
  pt: {
    s1Lead: "Um cubo perfeito é um número inteiro obtido multiplicando um inteiro por si mesmo duas vezes: n = k × k × k = k³. O número k é chamado de raiz cúbica de n (denotado por ∛n).",
    s1P1: "Por exemplo, 27 é um cubo perfeito porque 3 × 3 × 3 = 27 (logo ∛27 = 3). Da mesma forma, 125 = 5³ e -64 = (-4)³. No entanto, 50 não é cubo perfeito pois ∛50 ≈ 3,684.",
    s1P2: "O termo tem origem na geometria espacial: com 27 blocos unitários é possível montar um cubo maciço de 3×3×3 sem sobras.",
    s1Cards: [
      { title: "Cubos negativos existem!", text: "Potências ímpares preservam o sinal: (-3)³ = -27. Inteiros negativos podem ser legítimos cubos perfeitos reais." },
      { title: "Zero e Um", text: "0 e 1 são cubos perfeitos básicos: 0³ = 0 e 1³ = 1. Menos um também é: (-1)³ = -1." },
      { title: "Consistência de paridade", text: "O cubo de um número par é sempre par (2³=8, 4³=64) e de um ímpar é sempre ímpar (3³=27, 5³=125)." },
      { title: "Regra dos expoentes primos", text: "Na decomposição em fatores primos, todo expoente deve ser múltiplo exato de 3." }
    ],
    s2Intro: "Verifique qualquer número em milissegundos seguindo estes 3 passos simples:",
    s2Steps: [
      { title: "Insira um número inteiro", text: "Digite um número positivo ou negativo, ou clique em um botão rápido (-27, 216, 1331...)." },
      { title: "Clique em 'Verificar'", text: "Pressione Verificar ou Enter para calcular a raiz cúbica e a fatoração na hora." },
      { title: "Analise a demonstração", text: "Explore o veredito, fatores primos, cubos vizinhos e o multiplicador algébrico." }
    ],
    s3Intro: "Matemáticos utilizam quatro critérios fundamentais para confirmar um cubo perfeito:",
    s3Tests: [
      { title: "Teste 1: Raiz cúbica inteira", subtitle: "Cálculo direto", text: "Calcule ∛n. Se o resultado não possuir casas decimais, n é um cubo perfeito.", example: "∛343 = 7,0000000 → Inteiro exato 7." },
      { title: "Teste 2: Fatoração prima", subtitle: "Expoentes múltiplos de 3", text: "Decomponha em fatores primos. Se cada expoente for divisível por 3, é um cubo.", example: "216 = 2³ × 3³ → Cubo perfeito!" },
      { title: "Teste 3: Simetria negativa", subtitle: "Regra das potências ímpares", text: "Como (-k)³ = -k³, um número negativo -n é cubo se |n| for cubo.", example: "-512 é cubo perfeito pois ∛(-512) = -8." },
      { title: "Teste 4: Raiz digital (Módulo 9)", subtitle: "Filtro de exclusão", text: "Somando os dígitos sucessivamente, a raiz digital de um cubo é sempre 0, 1, 8 ou 9.", example: "Raiz digital de 1331: 1+3+3+1 = 8 (teste aprovado)." }
    ],
    s4Desc: "Decorar os primeiros 30 cubos perfeitos agiliza muito o cálculo mental no dia a dia:",
    s5P1: "Qualquer número não cubo fica estritamente entre dois cubos consecutivos: k³ < n < (k + 1)³.",
    s5P2: "Para 500, os cubos delimitadores são 343 (7³) e 512 (8³). Como a distância até 512 é de apenas 12, 512 é o mais próximo.",
    s6P1: "Multiplique ou divida pelos fatores primos que faltam para completar múltiplos de 3:",
    s6MultTitle: "1. Por Multiplicação",
    s6MultText: "Multiplique pelas potências que faltam para alcançar o próximo múltiplo de 3.",
    s6DivTitle: "2. Por Divisão",
    s6DivText: "Divida pelos fatores que sobram para deixar apenas trios exatos.",
    s7P1: "Comparação entre potências 2D (quadrados) e potências 3D (cubos):",
    s7Table: {
      propCol: "Propriedade",
      squareCol: "Quadrado Perfeito (k²)",
      cubeCol: "Cubo Perfeito (k³)",
      rows: [
        { prop: "Geometria", square: "Área 2D de um quadrado plano", cube: "Volume 3D de um cubo sólido" },
        { prop: "Números negativos", square: "Não reais (raiz imaginária ±bi)", cube: "Reais válidos: (-k)³ = -k³" },
        { prop: "Expoentes primos", square: "Múltiplos de 2 (pares)", cube: "Múltiplos de 3" },
        { prop: "Último dígito", square: "Apenas 0, 1, 4, 5, 6, 9", cube: "Qualquer dígito de 0 a 9" },
        { prop: "Ambos ao mesmo tempo", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volume e Logística", text: "Dimensões de caixas, galões e embalagens no transporte tridimensional." },
      { title: "Física e Biomecânica", text: "Lei quadrático-cúbica que relaciona área superficial e massa corporal." },
      { title: "Gráficos 3D e Voxels", text: "Renderização volumétrica com malhas de voxels (estilo Minecraft)." },
      { title: "Criptografia", text: "Curvas elípticas e teoria dos números aplicadas à segurança da informação." }
    ],
    s10Cards: [
      { title: "Três Fatores Idênticos", text: "Satisfaz a relação n = k × k × k com k número inteiro." },
      { title: "Aceita Negativos", text: "Diferente das raízes quadradas, as raízes ímpares de negativos são reais." },
      { title: "Expoentes em 3", text: "Cada fator primo precisa ter expoente divisível por 3." },
      { title: "100% Grátis", text: "Faça verificações ilimitadas com análises e demonstrações completas." }
    ],
    faqs: [
      { question: "O que é um cubo perfeito em palavras simples?", answer: "É um número inteiro gerado ao multiplicar um número inteiro por ele mesmo três vezes. Por exemplo, 27 é um cubo perfeito porque 3 × 3 × 3 = 27." },
      { question: "Um número negativo pode ser um cubo perfeito?", answer: "Sim! Três números negativos multiplicados dão um resultado negativo: (-4) × (-4) × (-4) = -64. Logo, -64 é um cubo perfeito com raiz -4." },
      { question: "O zero é um cubo perfeito?", answer: "Sim, 0 é um cubo perfeito porque 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Um número pode ser quadrado e cubo ao mesmo tempo?", answer: "Sim, quando seus expoentes primos são múltiplos de 6: 1, 64 (8² e 4³), 729 (27² e 9³) e 4096 (64² e 16³)." },
      { question: "Essa calculadora é gratuita?", answer: "Sim, nossa calculadora é 100% gratuita, sem limites de consultas e com cálculo de passos detalhado." }
    ]
  },
  ru: {
    s1Lead: "Точный куб (куб числа) — это целое число, полученное умножением целого числа самого на себя дважды: n = k × k × k = k³. Число k называется кубическим корнем из n (обозначается ∛n).",
    s1P1: "Например, 27 — это точный куб, так как 3 × 3 × 3 = 27 (следовательно, ∛27 = 3). Аналогично, 125 = 5³ и -64 = (-4)³. Число 50 не является точным кубом, так как ∛50 ≈ 3,684.",
    s1P2: "Название связано с 3D-геометрией: из 27 единичных кубиков можно сложить сплошной куб размером 3×3×3 без пустот и остатка.",
    s1Cards: [
      { title: "Отрицательные кубы существуют!", text: "Нечетная степень сохраняет знак числа: (-3)³ = -27. Отрицательные целые числа могут быть полноценными действительными кубами." },
      { title: "Ноль и единица", text: "0 и 1 — базовые точные кубы: 0³ = 0 и 1³ = 1. Число -1 также куб: (-1)³ = -1." },
      { title: "Сохранение четности", text: "Куб четного числа всегда четный (2³=8, 4³=64), а нечетного — нечетный (3³=27, 5³=125)." },
      { title: "Показатели простых множителей", text: "В разложении на простые множители каждый показатель степени обязан делиться на 3." }
    ],
    s2Intro: "Проверьте любое число за доли секунды, выполнив 3 простых действия:",
    s2Steps: [
      { title: "Введите целое число", text: "Укажите положительное или отрицательное число, либо нажмите кнопку с примером (-27, 216, 1331...)." },
      { title: "Нажмите 'Проверить'", text: "Нажмите кнопку или Enter для мгновенного вычисления кубического корня и множителей." },
      { title: "Изучите доказательство", text: "Ознакомьтесь с вердиктом, разложением на простые числа, соседними кубами и множителем." }
    ],
    s3Intro: "Математики используют четыре надежных метода для проверки точных кубов:",
    s3Tests: [
      { title: "Тест 1: Целый кубический корень", subtitle: "Прямой расчет", text: "Вычислите ∛n. Если корень не имеет дробной части, перед вами точный куб.", example: "∛343 = 7,0000000 → Точное целое 7." },
      { title: "Тест 2: Простые множители", subtitle: "Степени, кратные 3", text: "Разложите на простые множители. Если все показатели кратны 3, это куб.", example: "216 = 2³ × 3³ → Точный куб!" },
      { title: "Тест 3: Отрицательная симметрия", subtitle: "Правило нечетных степеней", text: "Так как (-k)³ = -k³, отрицательное число -n является кубом, если |n| — куб.", example: "-512 — точный куб, так как ∛(-512) = -8." },
      { title: "Тест 4: Цифровой корень (Mod 9)", subtitle: "Фильтр исключения", text: "Сложите цифры: цифровой корень куба всегда равен 0, 1, 8 или 9.", example: "Цифровой корень 1331: 1+3+3+1 = 8 (проверка пройдена)." }
    ],
    s4Desc: "Знание первых 30 кубов чисел наизусть помогает быстро считать в уме:",
    s5P1: "Любое число, не являющееся кубом, строго зажато между двумя соседними кубами: k³ < n < (k + 1)³.",
    s5P2: "Для числа 500 соседними кубами являются 343 (7³) и 512 (8³). Расстояние до 512 равно всего 12, поэтому 512 — ближайший куб.",
    s6P1: "Умножьте или разделите на недостающие простые множители, чтобы дополнить показатели до кратных 3:",
    s6MultTitle: "1. Умножением",
    s6MultText: "Умножьте на недостающие множители, чтобы довести степени до ближайшего кратного 3.",
    s6DivTitle: "2. Делением",
    s6DivText: "Разделите на лишние множители, оставив только полные тройки.",
    s7P1: "Сравнение 2D-степеней (квадраты) и 3D-степеней (кубы):",
    s7Table: {
      propCol: "Свойство",
      squareCol: "Точный квадрат (k²)",
      cubeCol: "Точный куб (k³)",
      rows: [
        { prop: "Геометрия", square: "Площадь плоского квадрата 2D", cube: "Объем сплошного куба 3D" },
        { prop: "Отрицательные числа", square: "Не действительные (корень ±bi)", cube: "Действительные: (-k)³ = -k³" },
        { prop: "Простые показатели", square: "Кратны 2 (четные)", cube: "Кратны 3" },
        { prop: "Последняя цифра", square: "Только 0, 1, 4, 5, 6, 9", cube: "Любая цифра от 0 до 9" },
        { prop: "И квадрат, и куб", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Объем и логистика", text: "Расчет полезного объема грузовых контейнеров, цистерн и тары." },
      { title: "Физика и биомеханика", text: "Закон квадрата-куба, определяющий соотношение площади и массы тел." },
      { title: "3D-графика и воксели", text: "Воксельное моделирование и трехмерный рендеринг (как в Minecraft)." },
      { title: "Криптография", text: "Эллиптические кривые и аналитическая теория чисел в кибербезопасности." }
    ],
    s10Cards: [
      { title: "Три одинаковых сомножителя", text: "Удовлетворяет соотношению n = k × k × k, где k — целое число." },
      { title: "Допускает отрицательные числа", text: "В отличие от квадратных корней, нечетные корни отрицательных чисел действительны." },
      { title: "Степени, кратные 3", text: "Каждый простой множитель обязан входить в степени, делящейся на 3." },
      { title: "100% Бесплатно", text: "Неограниченная проверка любых чисел с полным пошаговым разбором." }
    ],
    faqs: [
      { question: "Что такое точный куб простыми словами?", answer: "Это целое число, которое получается при троекратном умножении целого числа на само себя. Например, 27 — точный куб, так как 3 × 3 × 3 = 27." },
      { question: "Может ли отрицательное число быть точным кубом?", answer: "Да! Произведение трех отрицательных чисел отрицательно: (-4) × (-4) × (-4) = -64. Следовательно, -64 — точный куб с корнем -4." },
      { question: "Является ли ноль точным кубом?", answer: "Да, 0 — точный куб, поскольку 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Может ли число быть одновременно квадратом и кубом?", answer: "Да, если показатели простых множителей кратны 6: 1, 64 (8² и 4³), 729 (27² и 9³) и 4096 (64² и 16³)." },
      { question: "Бесплатен ли этот калькулятор?", answer: "Да, наш калькулятор полностью бесплатен, не требует регистрации и доступен без ограничений." }
    ]
  },
  pl: {
    s1Lead: "Sześcian doskonały to liczba całkowita uzyskana przez dwukrotne pomnożenie liczby całkowitej przez samą siebie: n = k × k × k = k³. Liczba k nazywana jest pierwiastkiem sześciennym z n (zapisywanym jako ∛n).",
    s1P1: "Na przykład 27 jest sześcianem doskonałym, ponieważ 3 × 3 × 3 = 27 (więc ∛27 = 3). Podobnie 125 = 5³ oraz -64 = (-4)³. Liczba 50 nie jest sześcianem doskonałym, gdyż ∛50 ≈ 3,684.",
    s1P2: "Pojęcie wywodzi się z geometrii 3D: z 27 klocków jednostkowych można ułożyć pełny sześcian 3×3×3 bez pustych przestrzeni.",
    s1Cards: [
      { title: "Ujemne sześciany istnieją!", text: "Nieparzyste potęgi zachowują znak: (-3)³ = -27. Ujemne liczby całkowite mogą być prawdziwymi sześcianami." },
      { title: "Zero i jeden", text: "0 i 1 to bazowe sześciany: 0³ = 0 i 1³ = 1. Liczba -1 również: (-1)³ = -1." },
      { title: "Zgodność parzystości", text: "Sześcian liczby parzystej jest parzysty (2³=8, 4³=64), a nieparzystej — nieparzysty (3³=27, 5³=125)." },
      { title: "Wykładniki liczb pierwszych", text: "W rozkładzie na czynniki pierwsze każdy wykładnik musi być wielokrotnością liczby 3." }
    ],
    s2Intro: "Sprawdź dowolną liczbę całkowitą w ułamku sekundy, wykonując 3 proste kroki:",
    s2Steps: [
      { title: "Wprowadź liczbę", text: "Wpisz liczbę całkowitą dodatnią lub ujemną, albo wybierz gotowy przykład (-27, 216, 1331...)." },
      { title: "Kliknij 'Sprawdź'", text: "Naciśnij Sprawdź lub Enter, aby obliczyć pierwiastek sześcienny i rozkład na czynniki." },
      { title: "Przejrzyj dowód", text: "Poznaj wynik, rozkład na czynniki pierwsze, sześciany ograniczające oraz mnożnik." }
    ],
    s3Intro: "Matematycy stosują cztery fundamentalne metody sprawdzania sześcianów doskonałych:",
    s3Tests: [
      { title: "Test 1: Całkowity pierwiastek", subtitle: "Obliczenie bezpośrednie", text: "Oblicz ∛n. Jeśli wynik nie ma części ułamkowej, n jest sześcianem doskonałym.", example: "∛343 = 7,0000000 → Dokładna liczba 7." },
      { title: "Test 2: Czynniki pierwsze", subtitle: "Wykładniki podzielne przez 3", text: "Rozłóż na czynniki pierwsze. Jeśli każdy wykładnik dzieli się przez 3, liczba jest sześcianem.", example: "216 = 2³ × 3³ → Sześcian doskonały!" },
      { title: "Test 3: Symetria ujemna", subtitle: "Reguła potęg nieparzystych", text: "Ponieważ (-k)³ = -k³, liczba ujemna -n jest sześcianem, jeśli |n| nim jest.", example: "-512 jest sześcianem, bo ∛(-512) = -8." },
      { title: "Test 4: Pierwiastek cyfrowy (Mod 9)", subtitle: "Filtr eliminacyjny", text: "Suma cyfr sześcianu wynosi zawsze 0, 1, 8 lub 9.", example: "Pierwiastek cyfrowy 1331: 1+3+3+1 = 8 (test zdany)." }
    ],
    s4Desc: "Zapamiętanie pierwszych 30 sześcianów doskonale rozwija umiejętność szybkiego liczenia w pamięci:",
    s5P1: "Każda liczba niebędąca sześcianem leży pomiędzy dwoma kolejnymi sześcianami: k³ < n < (k + 1)³.",
    s5P2: "Dla 500 sześcianami ograniczającymi są 343 (7³) i 512 (8³). Odległość do 512 wynosi 12, więc 512 jest najbliższym sześcianem.",
    s6P1: "Pomnóż lub podziel przez brakujące czynniki pierwsze, aby dopasować wykładniki do wielokrotności 3:",
    s6MultTitle: "1. Przez mnożenie",
    s6MultText: "Pomnóż przez brakujące potęgi, aby uzyskać kolejną wielokrotność 3.",
    s6DivTitle: "2. Przez dzielenie",
    s6DivText: "Podziel przez nadmiarowe czynniki, pozostawiając tylko pełne trójki.",
    s7P1: "Porównanie potęg 2D (kwadraty) i potęg 3D (sześciany):",
    s7Table: {
      propCol: "Właściwość",
      squareCol: "Kwadrat doskonały (k²)",
      cubeCol: "Sześcian doskonały (k³)",
      rows: [
        { prop: "Geometria", square: "Pole 2D kwadratu", cube: "Objętość 3D sześcianu" },
        { prop: "Liczby ujemne", square: "Nierzeczywiste (urojone ±bi)", cube: "Rzeczywiste: (-k)³ = -k³" },
        { prop: "Wykładniki pierwsze", square: "Wielokrotności 2 (parzyste)", cube: "Wielokrotności 3" },
        { prop: "Ostatnia cyfra", square: "Tylko 0, 1, 4, 5, 6, 9", cube: "Dowolna cyfra od 0 do 9" },
        { prop: "Jednocześnie oba", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Objętość i logistyka", text: "Optymalne pakowanie kontenerów, zbiorników i skrzyń ładunkowych." },
      { title: "Fizyka i biomechanika", text: "Prawo sześcianu i kwadratu określające relację powierzchni do masy." },
      { title: "Grafika 3D i woksele", text: "Renderowanie wolumetryczne w silnikach gier takich jak Minecraft." },
      { title: "Kryptografia", text: "Krzywe eliptyczne i analityczna teoria liczb w bezpieczeństwie cyfrowym." }
    ],
    s10Cards: [
      { title: "Trzy jednakowe czynniki", text: "Spełnia zależność n = k × k × k dla k całkowitego." },
      { title: "Dopuszcza liczby ujemne", text: "W przeciwieństwie do pierwiastków kwadratowych, pierwiastki z liczb ujemnych są rzeczywiste." },
      { title: "Potęgi podzielne przez 3", text: "Każdy czynnik pierwszy posiada wykładnik podzielny przez 3." },
      { title: "100% Za darmo", text: "Sprawdzaj nieograniczoną liczbę wartości z pełnym dowodem krok po kroku." }
    ],
    faqs: [
      { question: "Czym jest sześcian doskonały w prostych słowach?", answer: "To liczba całkowita będąca wynikiem trzykrotnego pomnożenia liczby przez samą siebie. Na przykład 27, bo 3 × 3 × 3 = 27." },
      { question: "Czy liczba ujemna może być sześcianem doskonałym?", answer: "Tak! Iloczyn trzech liczb ujemnych jest ujemny: (-4) × (-4) × (-4) = -64. Więc -64 to sześcian o pierwiastku -4." },
      { question: "Czy 0 jest sześcianem doskonałym?", answer: "Tak, 0 jest sześcianem doskonałym, ponieważ 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Czy liczba może być jednocześnie kwadratem i sześcianem?", answer: "Tak, liczby o wykładnikach pierwszych będących wielokrotnościami 6: 1, 64 (8² i 4³), 729 (27² i 9³) oraz 4096 (64² i 16³)." },
      { question: "Czy ten kalkulator jest darmowy?", answer: "Tak, nasz kalkulator sześcianów jest w 100% darmowy i oferuje natychmiastowe dowody." }
    ]
  },
  sv: {
    s1Lead: "En perfekt kub är ett heltal som erhålls genom att multiplicera ett heltal med sig självt två gånger: n = k × k × k = k³. Talet k kallas kubikroten ur n (skrivs ∛n).",
    s1P1: "Till exempel är 27 en kub eftersom 3 × 3 × 3 = 27 (så ∛27 = 3). Likaså är 125 = 5³ och -64 = (-4)³. Däremot är 50 inte en kub då ∛50 ≈ 3,684.",
    s1P2: "Termen härstammar från 3D-geometri: med 27 kubiska enhetsblock kan man bygga en massiv 3×3×3-kub utan spill.",
    s1Cards: [
      { title: "Negativa kuber existerar!", text: "Udda potenser bevarar förtecknet: (-3)³ = -27. Negativa heltal kan vara reella kuber." },
      { title: "Noll och ett", text: "0 och 1 är grundläggande kuber: 0³ = 0 och 1³ = 1. Även -1 är en kub: (-1)³ = -1." },
      { title: "Paritetsordning", text: "Kuben av ett jämnt tal är alltid jämnt (2³=8, 4³=64) och ett udda tal alltid udda (3³=27, 5³=125)." },
      { title: "Primtalsregel", text: "I primtalsfaktoriseringen måste varje exponents värde vara en jämn multipel av 3." }
    ],
    s2Intro: "Testa valfritt heltal på bråkdelen av en sekund i 3 enkla steg:",
    s2Steps: [
      { title: "Ange ett heltal", text: "Skriv in ett positivt eller negativt heltal, eller välj ett snabbval (-27, 216, 1331...)." },
      { title: "Klicka på 'Kontrollera'", text: "Klicka eller tryck Enter för att omedelbart beräkna kubikroten och faktorerna." },
      { title: "Granska beviset", text: "Se resultatet, primtalsfaktoriseringen steg för steg, avgränsande kuber och multiplikator." }
    ],
    s3Intro: "Matematiker använder fyra beprövade metoder för att verifiera perfekta kuber:",
    s3Tests: [
      { title: "Test 1: Heltalig kubikrot", subtitle: "Direkt beräkning", text: "Beräkna ∛n. Om roten saknar decimaler är n en perfekt kub.", example: "∛343 = 7,0000000 → Exakt heltal 7." },
      { title: "Test 2: Primtalsfaktorer", subtitle: "Exponenter delbara med 3", text: "Faktorisera i primtal. Om varje exponent är delbar med 3 är talet en kub.", example: "216 = 2³ × 3³ → Perfekt kub!" },
      { title: "Test 3: Negativ symmetri", subtitle: "Udda potensregel", text: "Eftersom (-k)³ = -k³, är ett negativt tal -n en kub om |n| är en kub.", example: "-512 är en kub eftersom ∛(-512) = -8." },
      { title: "Test 4: Sifferrot (Mod 9)", subtitle: "Uteslutningsfilter", text: "Upprepad siffersumma för en kub är alltid 0, 1, 8 eller 9.", example: "Sifferrot för 1331: 1+3+3+1 = 8 (godkänt test)." }
    ],
    s4Desc: "Att memorera de första 30 kuberna ger en stark grund för snabb huvudräkning:",
    s5P1: "Varje tal som inte är en kub ligger strikt mellan två på varandra följande kuber: k³ < n < (k + 1)³.",
    s5P2: "För 500 är de avgränsande kuberna 343 (7³) och 512 (8³). Avståndet till 512 är endast 12, vilket gör 512 till närmaste kub.",
    s6P1: "Multiplicera eller dividera med saknade faktorer för att anpassa exponenterna till multipler av 3:",
    s6MultTitle: "1. Genom multiplikation",
    s6MultText: "Multiplicera med saknade potenser för att nå nästa multipel av 3.",
    s6DivTitle: "2. Genom division",
    s6DivText: "Dividera med överskottsfaktorer för att lämna kvar exakta tripletter.",
    s7P1: "Jämförelse mellan 2D-potenser (kvadrater) och 3D-potenser (kuber):",
    s7Table: {
      propCol: "Egenskap",
      squareCol: "Perfekt Kvadrat (k²)",
      cubeCol: "Perfekt Kub (k³)",
      rows: [
        { prop: "Geometri", square: "2D-area hos en kvadrat", cube: "3D-volym hos en kub" },
        { prop: "Negativa tal", square: "Inte reella (imaginär rot ±bi)", cube: "Giltiga reella: (-k)³ = -k³" },
        { prop: "Primtalsexponenter", square: "Multipler av 2 (jämna)", cube: "Multipler av 3" },
        { prop: "Sista siffra", square: "Endast 0, 1, 4, 5, 6, 9", cube: "Vilken siffra som helst 0–9" },
        { prop: "Både och samtidigt", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volym & Logistik", text: "Optimering av förpackningar, containrar och fraktlådor i 3D-miljöer." },
      { title: "Fysik & Biomekanik", text: "Kvadrat-kub-lagen som styr förhållandet mellan yta och volym hos organismer." },
      { title: "3D-grafik & Voxlar", text: "Volymetrisk rendering i spelmotorer som Minecraft." },
      { title: "Kryptografi", text: "Elliptiska kurvor och talteori inom modern cybersäkerhet." }
    ],
    s10Cards: [
      { title: "Tre identiska faktorer", text: "Uppfyller n = k × k × k där k är ett heltal." },
      { title: "Tillåter negativa tal", text: "Till skillnad från kvadratrötter är kubikrötter ur negativa tal reella." },
      { title: "Potenser i 3-tal", text: "Varje primtalsfaktor måste ha en exponent delbar med 3." },
      { title: "100% Gratis", text: "Kontrollera obegränsat antal tal med fullständiga förklaringar." }
    ],
    faqs: [
      { question: "Vad är en perfekt kub i enkla termer?", answer: "Det är ett heltal som fås genom att multiplicera ett heltal med sig självt tre gånger. Exempelvis är 27 en kub eftersom 3 × 3 × 3 = 27." },
      { question: "Kan ett negativt tal vara en perfekt kub?", answer: "Ja! Produkten av tre negativa tal är negativ: (-4) × (-4) × (-4) = -64. Alltså är -64 en perfekt kub med roten -4." },
      { question: "Är 0 en perfekt kub?", answer: "Ja, 0 är en kub eftersom 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Kan ett tal vara både kvadrat och kub?", answer: "Ja, om dess primtalsexponenter är multipler av 6: 1, 64 (8² och 4³), 729 (27² och 9³) och 4096 (64² och 16³)." },
      { question: "Är denna kalkylator gratis?", answer: "Ja, vår kalkylator är 100% gratis och kräver ingen registrering." }
    ]
  },
  tr: {
    s1Lead: "Tam küp, bir tam sayının kendisiyle iki kez çarpılmasıyla elde edilen tam sayıdır: n = k × k × k = k³. k sayısına n'nin küpkökü denir (∛n olarak yazılır).",
    s1P1: "Örneğin, 27 tam küptür çünkü 3 × 3 × 3 = 27'dir (yani ∛27 = 3). Benzer şekilde 125 = 5³ ve -64 = (-4)³'tür. Ancak 50 tam küp değildir çünkü ∛50 ≈ 3,684'tür.",
    s1P2: "Bu terim 3B geometriden gelir: 27 birim küp ile boşluksuz ve tam bir 3×3×3 katı küp inşa edebilirsiniz.",
    s1Cards: [
      { title: "Negatif küpler mevcuttur!", text: "Tek kuvvetler işareti korur: (-3)³ = -27. Negatif sayılar gerçek tam küpler olabilir." },
      { title: "Sıfır ve Bir", text: "0 ve 1 temel tam küplerdir: 0³ = 0 ve 1³ = 1. -1 de bir tam küptür: (-1)³ = -1." },
      { title: "Teklik-çiftlik uyumu", text: "Çift sayının küpü daima çift (2³=8, 4³=64), tek sayının küpü daima tektir (3³=27, 5³=125)." },
      { title: "Asal üs kuralı", text: "Asal çarpanlara ayırmada her asal çarpanın üssü mutlaka 3'ün katı olmalıdır." }
    ],
    s2Intro: "Şu 3 basit adımı izleyerek herhangi bir sayıyı saniyeler içinde test edin:",
    s2Steps: [
      { title: "Bir tam sayı girin", text: "Pozitif veya negatif bir tam sayı yazın ya da hazır bir butona tıklayın (-27, 216, 1331...)." },
      { title: "'Kontrol Et'e tıklayın", text: "Küpkökü ve asal çarpanları hesaplamak için butona veya Enter'a basın." },
      { title: "İspatı inceleyin", text: "Sonucu, adım adım çarpanları, çevreleyen küpleri ve cebirsel çarpanı keşfedin." }
    ],
    s3Intro: "Matematikçiler tam küpleri doğrulamak için dört temel testten yararlanır:",
    s3Tests: [
      { title: "Test 1: Tam sayı küpkök", subtitle: "Doğrudan hesaplama", text: "∛n değerini hesaplayın. Kökün ondalık kısmı yoksa n bir tam küptür.", example: "∛343 = 7,0000000 → Kesin tam sayı 7." },
      { title: "Test 2: Asal çarpanlar", subtitle: "3'e bölünebilen üsler", text: "Asal çarpanlara ayırın. Her üs 3'e bölünüyorsa sayı bir tam küptür.", example: "216 = 2³ × 3³ → Tam küp!" },
      { title: "Test 3: Negatif simetri", subtitle: "Tek üs kuralı", text: "(-k)³ = -k³ olduğundan, negatif -n sayısı |n| küpse küptür.", example: "-512 bir küptür çünkü ∛(-512) = -8'dir." },
      { title: "Test 4: Sayısal kök (Mod 9)", subtitle: "Eleme filtresi", text: "Basamakların toplamı bir küp için daima 0, 1, 8 veya 9 olur.", example: "1331 için sayısal kök: 1+3+3+1 = 8 (test başarılı)." }
    ],
    s4Desc: "İlk 30 tam küpü ezberlemek zihinden işlem hızını önemli ölçüde artırır:",
    s5P1: "Tam küp olmayan her sayı ardışık iki küp arasındadır: k³ < n < (k + 1)³.",
    s5P2: "500 için sınır küpler 343 (7³) ve 512 (8³)'dir. 512'ye olan fark yalnızca 12 olduğundan en yakın küp 512'dir.",
    s6P1: "Üsleri 3'ün katı yapmak için eksik asal çarpanlarla çarpın veya bölün:",
    s6MultTitle: "1. Çarpma Yöntemi",
    s6MultText: "Bir sonraki 3'ün katına ulaşmak için eksik kuvvetlerle çarpın.",
    s6DivTitle: "2. Bölme Yöntemi",
    s6DivText: "Yalnızca tam üçlüleri bırakmak için fazla çarpanlara bölün.",
    s7P1: "2B kuvvetler (kareler) ile 3B kuvvetlerin (küpler) karşılaştırması:",
    s7Table: {
      propCol: "Özellik",
      squareCol: "Tam Kare (k²)",
      cubeCol: "Tam Küp (k³)",
      rows: [
        { prop: "Geometri", square: "Karenin 2B yüzey alanı", cube: "Katı küpün 3B hacmi" },
        { prop: "Negatif sayılar", square: "Gerçek değil (karmaşık kök ±bi)", cube: "Geçerli gerçek: (-k)³ = -k³" },
        { prop: "Asal üsler", square: "2'nin katları (çift)", cube: "3'ün katları" },
        { prop: "Son basamak", square: "Sadece 0, 1, 4, 5, 6, 9", cube: "0'dan 9'a kadar herhangi bir rakam" },
        { prop: "Her ikisi birden", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Hacim ve Lojistik", text: "3B kargo taşımacılığında konteyner yerleşimi ve depo kutu ölçüleri." },
      { title: "Fizik ve Biyomekanik", text: "Canlılarda yüzey alanı-kütle oranını yöneten kare-küp yasası." },
      { title: "3B Grafikler ve Vokseller", text: "Minecraft benzeri oyun motorlarında voksel tabanlı hacim modelleme." },
      { title: "Kriptografi", text: "Siber güvenlikte eliptik eğri şifreleme ve analitik sayılar teorisi." }
    ],
    s10Cards: [
      { title: "Üç Özdeş Çarpan", text: "k tam sayı olmak üzere n = k × k × k kuralını sağlar." },
      { title: "Negatifleri Kabul Eder", text: "Kareköklerin aksine, negatif sayıların tek dereceli kökleri gerçektir." },
      { title: "3'lü Üsler", text: "Her asal çarpanın üssü 3'e bölünebilmelidir." },
      { title: "%100 Ücretsiz", text: "Adım adım ispatlarla sınırsız sayıda sayıyı hemen kontrol edin." }
    ],
    faqs: [
      { question: "Basitçe tam küp nedir?", answer: "Bir tam sayının kendisiyle üç kez çarpılmasıyla oluşan sayıdır. Örneğin 27 bir tam küptür çünkü 3 × 3 × 3 = 27'dir." },
      { question: "Negatif bir sayı tam küp olabilir mi?", answer: "Evet! Üç negatif sayının çarpımı negatiftir: (-4) × (-4) × (-4) = -64. Bu nedenle -64, kökü -4 olan bir tam küptür." },
      { question: "0 tam küp müdür?", answer: "Evet, 0 bir tam küptür çünkü 0 × 0 × 0 = 0'dır (0³ = 0)." },
      { question: "Bir sayı hem kare hem küp olabilir mi?", answer: "Evet, asal üsleri 6'nın katı olan sayılar: 1, 64 (8² ve 4³), 729 (27² ve 9³) ve 4096 (64² ve 16³)." },
      { question: "Bu hesaplayıcı ücretsiz mi?", answer: "Evet, tam küp hesaplayıcımız tamamen ücretsizdir ve sınırsız sorgulama imkanı sunar." }
    ]
  },
  id: {
    s1Lead: "Kubik sempurna adalah bilangan bulat yang diperoleh dari perkalian suatu bilangan bulat dengan dirinya sendiri dua kali: n = k × k × k = k³. Bilangan k disebut akar pangkat tiga dari n (ditulis ∛n).",
    s1P1: "Misalnya, 27 adalah kubik sempurna karena 3 × 3 × 3 = 27 (jadi ∛27 = 3). Begitu pula 125 = 5³ dan -64 = (-4)³. Namun, 50 bukan kubik sempurna karena ∛50 ≈ 3,684.",
    s1P2: "Istilah ini berasal dari geometri 3D: dengan 27 balok satuan, Anda dapat membuat kubus padat 3×3×3 tanpa sisa.",
    s1Cards: [
      { title: "Kubik negatif itu nyata!", text: "Pangkat ganjil mempertahankan tanda: (-3)³ = -27. Bilangan bulat negatif bisa menjadi kubik sempurna riil." },
      { title: "Nol dan Satu", text: "0 dan 1 adalah kubik sempurna dasar: 0³ = 0 dan 1³ = 1. -1 juga kubik: (-1)³ = -1." },
      { title: "Konsistensi paritas", text: "Kubik bilangan genap selalu genap (2³=8, 4³=64), dan bilangan ganjil selalu ganjil (3³=27, 5³=125)." },
      { title: "Aturan eksponen prima", text: "Dalam faktorisasi prima, setiap eksponen prima harus merupakan kelipatan tepat dari 3." }
    ],
    s2Intro: "Uji bilangan bulat apa pun dalam hitungan milidetik melalui 3 langkah mudah ini:",
    s2Steps: [
      { title: "Masukkan bilangan bulat", text: "Ketik bilangan bulat positif atau negatif, atau pilih tombol pintas (-27, 216, 1331...)." },
      { title: "Klik 'Periksa'", text: "Tekan Periksa atau Enter untuk menghitung akar kubik dan faktorisasi secara instan." },
      { title: "Pelajari pembuktian", text: "Cermati kesimpulan, faktorisasi prima, kubik pembatas, dan pengali aljabar." }
    ],
    s3Intro: "Matematikawan menggunakan empat pengujian utama untuk memverifikasi kubik sempurna:",
    s3Tests: [
      { title: "Uji 1: Akar kubik bulat", subtitle: "Perhitungan langsung", text: "Hitung ∛n. Jika akar tidak memiliki nilai desimal, n adalah kubik sempurna.", example: "∛343 = 7,0000000 → Bilangan bulat 7 pasti." },
      { title: "Uji 2: Faktor prima", subtitle: "Pangkat kelipatan 3", text: "Faktorkan ke bilangan prima. Jika setiap pangkat habis dibagi 3, itu adalah kubik.", example: "216 = 2³ × 3³ → Kubik sempurna!" },
      { title: "Uji 3: Simetri negatif", subtitle: "Aturan pangkat ganjil", text: "Karena (-k)³ = -k³, bilangan negatif -n adalah kubik jika |n| juga kubik.", example: "-512 adalah kubik sempurna karena ∛(-512) = -8." },
      { title: "Uji 4: Akar digital (Mod 9)", subtitle: "Penyaring eliminasi", text: "Jumlahkan digit-digitnya: akar digital dari kubik selalu 0, 1, 8, atau 9.", example: "Akar digital 1331: 1+3+3+1 = 8 (lolos uji)." }
    ],
    s4Desc: "Menghafal 30 kubik sempurna pertama memperkuat dasar berhitung di luar kepala:",
    s5P1: "Setiap bilangan bukan kubik terletak di antara dua kubik berurutan: k³ < n < (k + 1)³.",
    s5P2: "Untuk 500, kubik pembatasnya adalah 343 (7³) dan 512 (8³). Jarak ke 512 hanya 12, maka 512 adalah yang terdekat.",
    s6P1: "Kalikan atau bagi dengan faktor prima yang kurang untuk menyesuaikan eksponen menjadi kelipatan 3:",
    s6MultTitle: "1. Lewat Perkalian",
    s6MultText: "Kalikan dengan faktor yang kurang hingga mencapai kelipatan 3 berikutnya.",
    s6DivTitle: "2. Lewat Pembagian",
    s6DivText: "Bagi dengan faktor berlebih agar hanya menyisakan kelompok tiga yang tepat.",
    s7P1: "Perbandingan pangkat 2D (kuadrat) dengan pangkat 3D (kubik):",
    s7Table: {
      propCol: "Properti",
      squareCol: "Kuadrat Sempurna (k²)",
      cubeCol: "Kubik Sempurna (k³)",
      rows: [
        { prop: "Geometri", square: "Luas 2D sebuah persegi datar", cube: "Volume 3D sebuah kubus padat" },
        { prop: "Bilangan negatif", square: "Bukan riil (akar imajiner ±bi)", cube: "Riil valid: (-k)³ = -k³" },
        { prop: "Eksponen prima", square: "Kelipatan 2 (genap)", cube: "Kelipatan 3" },
        { prop: "Digit terakhir", square: "Hanya 0, 1, 4, 5, 6, 9", cube: "Digit mana saja dari 0 sampai 9" },
        { prop: "Keduanya sekaligus", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Volume & Logistik", text: "Dimensi kemasan kargo, tangki penyimpanan, dan kontainer 3D." },
      { title: "Fisika & Biomekanika", text: "Hukum kuadrat-kubus yang mengatur rasio luas permukaan terhadap massa." },
      { title: "Grafika 3D & Voksel", text: "Pemodelan volumetrik berbasis voksel dalam mesin game seperti Minecraft." },
      { title: "Kriptografi", text: "Kurva eliptik dan teori bilangan analitis dalam keamanan siber." }
    ],
    s10Cards: [
      { title: "Tiga Faktor Identik", text: "Memenuhi rumus n = k × k × k dengan k bilangan bulat." },
      { title: "Menerima Bilangan Negatif", text: "Tidak seperti akar kuadrat, akar ganjil dari angka negatif bernilai riil." },
      { title: "Eksponen Kelipatan 3", text: "Setiap faktor prima wajib mempunyai eksponen yang habis dibagi 3." },
      { title: "100% Gratis", text: "Periksa bilangan tanpa batas dengan pembuktian lengkap secara instan." }
    ],
    faqs: [
      { question: "Apa itu kubik sempurna secara sederhana?", answer: "Bilangan bulat hasil perkalian suatu bilangan bulat dengan dirinya sendiri tiga kali. Contohnya 27, karena 3 × 3 × 3 = 27." },
      { question: "Bisakah bilangan negatif menjadi kubik sempurna?", answer: "Bisa! Hasil kali tiga bilangan negatif adalah negatif: (-4) × (-4) × (-4) = -64. Maka -64 adalah kubik sempurna dengan akar -4." },
      { question: "Apakah 0 adalah kubik sempurna?", answer: "Ya, 0 adalah kubik sempurna karena 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Bisakah suatu bilangan menjadi kuadrat dan kubik sekaligus?", answer: "Bisa, angka yang eksponen primanya kelipatan 6: 1, 64 (8² dan 4³), 729 (27² dan 9³), dan 4096 (64² dan 16³)." },
      { question: "Apakah kalkulator ini gratis?", answer: "Ya, kalkulator kubik sempurna kami 100% gratis dengan fitur pembuktian langkah lengkap." }
    ]
  },
  ms: {
    s1Lead: "Kuasa tiga sempurna ialah integer yang diperoleh dengan mendarabkan suatu integer dengan dirinya sendiri dua kali: n = k × k × k = k³. Nombor k dipanggil punca kuasa tiga bagi n (ditulis ∛n).",
    s1P1: "Sebagai contoh, 27 ialah kuasa tiga sempurna kerana 3 × 3 × 3 = 27 (maka ∛27 = 3). Begitu juga 125 = 5³ dan -64 = (-4)³. Walau bagaimanapun, 50 bukan kuasa tiga sempurna kerana ∛50 ≈ 3.684.",
    s1P2: "Istilah ini berasal daripada geometri 3D: dengan 27 bongkah unit, anda boleh membina kubus padu 3×3×3 tanpa sebarang baki.",
    s1Cards: [
      { title: "Kuasa tiga negatif wujud!", text: "Kuasa ganjil mengekalkan tanda: (-3)³ = -27. Integer negatif boleh menjadi kuasa tiga sempurna nyata." },
      { title: "Sifar dan Satu", text: "0 dan 1 ialah kuasa tiga asas: 0³ = 0 dan 1³ = 1. -1 juga kuasa tiga: (-1)³ = -1." },
      { title: "Ketekalan pariti", text: "Kuasa tiga nombor genap sentiasa genap (2³=8, 4³=64), dan nombor ganjil sentiasa ganjil (3³=27, 5³=125)." },
      { title: "Peraturan indeks perdana", text: "Dalam pemfaktoran perdana, setiap indeks nombor perdana mestilah gandaan tepat bagi 3." }
    ],
    s2Intro: "Uji sebarang integer dalam beberapa milisaat melalui 3 langkah mudah ini:",
    s2Steps: [
      { title: "Masukkan integer", text: "Taip sebarang integer positif atau negatif, atau pilih butang pratetap (-27, 216, 1331...)." },
      { title: "Klik 'Semak'", text: "Tekan Semak atau Enter untuk mengira punca kuasa tiga dan faktor perdana serta-merta." },
      { title: "Lihat pembuktian", text: "Kaji keputusan, pemfaktoran terperinci, nombor pembatas, dan pengganda algebra." }
    ],
    s3Intro: "Ahli matematik bergantung pada empat ujian utama untuk mengesahkan kuasa tiga sempurna:",
    s3Tests: [
      { title: "Ujian 1: Punca integer", subtitle: "Pengiraan terus", text: "Kira ∛n. Jika punca tidak mempunyai nilai perpuluhan, n ialah kuasa tiga sempurna.", example: "∛343 = 7.0000000 → Integer tepat 7." },
      { title: "Ujian 2: Faktor perdana", subtitle: "Kuasa boleh bahagi 3", text: "Faktorkan kepada nombor perdana. Jika setiap kuasa boleh dibahagi 3, ia adalah kuasa tiga.", example: "216 = 2³ × 3³ → Kuasa tiga sempurna!" },
      { title: "Ujian 3: Simetri negatif", subtitle: "Peraturan kuasa ganjil", text: "Oleh sebab (-k)³ = -k³, nombor negatif -n ialah kuasa tiga jika |n| adalah kuasa tiga.", example: "-512 ialah kuasa tiga kerana ∛(-512) = -8." },
      { title: "Ujian 4: Punca digital (Mod 9)", subtitle: "Penapis penyingkiran", text: "Jumlah digit bagi kuasa tiga sentiasa 0, 1, 8 atau 9.", example: "Punca digital 1331: 1+3+3+1 = 8 (ujian lulus)." }
    ],
    s4Desc: "Menghafal 30 kuasa tiga sempurna pertama membina asas congak yang mantap:",
    s5P1: "Setiap nombor bukan kuasa tiga terletak di antara dua kuasa tiga berturutan: k³ < n < (k + 1)³.",
    s5P2: "Bagi 500, kuasa tiga berdekatan ialah 343 (7³) dan 512 (8³). Jarak ke 512 cuma 12, maka 512 adalah yang paling hampir.",
    s6P1: "Darab atau bahagi dengan faktor perdana yang hilang untuk menyesuaikan indeks kepada gandaan 3:",
    s6MultTitle: "1. Melalui Pendaraban",
    s6MultText: "Darab dengan kuasa yang hilang untuk mencapai gandaan 3 yang seterusnya.",
    s6DivTitle: "2. Melalui Pembahagian",
    s6DivText: "Bahagi dengan faktor berlebihan untuk meninggalkan hanya gandaan 3 yang tepat.",
    s7P1: "Perbandingan antara kuasa 2D (kuasa dua) dan kuasa 3D (kuasa tiga):",
    s7Table: {
      propCol: "Sifat",
      squareCol: "Kuasa Dua Sempurna (k²)",
      cubeCol: "Kuasa Tiga Sempurna (k³)",
      rows: [
        { prop: "Geometri", square: "Luas 2D segi empat sama", cube: "Isi padu 3D kubus pepejal" },
        { prop: "Nombor negatif", square: "Bukan nyata (punca khayalan ±bi)", cube: "Nyata sah: (-k)³ = -k³" },
        { prop: "Indeks perdana", square: "Gandaan 2 (genap)", cube: "Gandaan 3" },
        { prop: "Digit terakhir", square: "Hanya 0, 1, 4, 5, 6, 9", cube: "Sebarang digit dari 0 hingga 9" },
        { prop: "Kedua-duanya sekali", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Isi Padu & Logistik", text: "Pembungkusan kargo, tangki simpanan, dan dimensi kontena 3D." },
      { title: "Fizik & Biomekanik", text: "Hukum kuasa dua-tiga yang mengawal nisbah luas permukaan terhadap jisim." },
      { title: "Grafik 3D & Voksel", text: "Pemodelan volumetrik berasaskan voksel dalam enjin permainan seperti Minecraft." },
      { title: "Kriptografi", text: "Keluk eliptik dan teori nombor analitik dalam keselamatan siber." }
    ],
    s10Cards: [
      { title: "Tiga Faktor Sama", text: "Memenuhi hubungan n = k × k × k dengan k sebagai integer." },
      { title: "Menerima Nombor Negatif", text: "Tidak seperti punca kuasa dua, punca ganjil nombor negatif adalah nyata." },
      { title: "Indeks Gandaan 3", text: "Setiap faktor perdana wajib mempunyai indeks yang boleh dibahagi 3." },
      { title: "100% Percuma", text: "Semak nombor tanpa had dengan jalan kerja lengkap serta-merta." }
    ],
    faqs: [
      { question: "Apakah kuasa tiga sempurna dalam istilah mudah?", answer: "Ia merupakan integer yang terhasil daripada mendarab suatu integer dengan dirinya sendiri tiga kali. Contohnya 27, kerana 3 × 3 × 3 = 27." },
      { question: "Bolehkah nombor negatif menjadi kuasa tiga sempurna?", answer: "Boleh! Hasil darab tiga nombor negatif adalah negatif: (-4) × (-4) × (-4) = -64. Oleh itu, -64 ialah kuasa tiga sempurna dengan punca -4." },
      { question: "Adakah 0 kuasa tiga sempurna?", answer: "Ya, 0 ialah kuasa tiga sempurna kerana 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Bolehkah nombor menjadi kuasa dua dan kuasa tiga serentak?", answer: "Boleh, nombor yang indeks perdananya gandaan 6: 1, 64 (8² dan 4³), 729 (27² dan 9³) dan 4096 (64² dan 16³)." },
      { question: "Adakah kalkulator ini percuma?", answer: "Ya, kalkulator kuasa tiga sempurna kami adalah 100% percuma tanpa sebarang had penggunaan." }
    ]
  },
  ar: {
    s1Lead: "المكعب الكامل هو عدد صحيح ينتج عن ضرب عدد صحيح في نفسه مرتين: n = k × k × k = k³. يُسمى العدد k بالجذر التكعيبي للعدد n (ويُكتب ∛n).",
    s1P1: "على سبيل المثال، 27 هو مكعب كامل لأن 3 × 3 × 3 = 27 (وبالتالي ∛27 = 3). وبالمثل، 125 = 5³ و -64 = (-4)³. لكن العدد 50 ليس مكعباً كاملاً لأن ∛50 ≈ 3.684.",
    s1P2: "المصطلح مشتق من الهندسة ثلاثية الأبعاد: إذا كان لديك 27 مكعباً صغيراً، يمكنك بناء مكعب مصمت متكامل بأبعاد 3×3×3 دون أي فراغ أو فائض.",
    s1Cards: [
      { title: "المكعبات السالبة حقيقية!", text: "الأسس الفردية تحافظ على الإشارة: (-3)³ = -27. الأعداد الصحيحة السالبة يمكن أن تكون مكعبات كاملة حقيقية." },
      { title: "الصفر والواحد", text: "0 و 1 هما مكعبان أساسيان: 0³ = 0 و 1³ = 1. والعدد -1 أيضاً مكعب: (-1)³ = -1." },
      { title: "تطابق الزوجية والفردية", text: "مكعب العدد الزوجي زوجي دائماً (2³=8, 4³=64)، ومكعب الفردي فردي دائماً (3³=27, 5³=125)." },
      { title: "قاعدة الأسس الأولية", text: "في التحليل إلى العوامل الأولية، يجب أن يكون أس كل عامل أولي مضاعفاً للرقم 3." }
    ],
    s2Intro: "تحقق من أي عدد صحيح في أجزاء من الثانية باتباع هذه الخطوات الثلاث:",
    s2Steps: [
      { title: "أدخل عدداً صحيحاً", text: "اكتب عدداً صحيحاً موجباً أو سالباً، أو اختر زراً سريعاً (-27, 216, 1331...)." },
      { title: "انقر على 'تحقق'", text: "اضغط على زر التحقق أو مفتاح Enter لحساب الجذر التكعيبي والعوامل الأولية فوراً." },
      { title: "راجع الإثبات الرياضي", text: "اكتشف النتيجة، والتحليل الأولي خطوة بخطوة، والمكعبات المحيطة، والمضاعف الجبري." }
    ],
    s3Intro: "يعتمد علماء الرياضيات على أربعة اختبارات أساسية للتأكد من المكعب الكامل:",
    s3Tests: [
      { title: "الاختبار 1: الجذر التكعيبي الصحيح", subtitle: "الحساب المباشر", text: "احسب ∛n. إذا كان الناتج عدداً صحيحاً دون كسور، فإن n مكعب كامل.", example: "∛343 = 7.0000000 → عدد صحيح دقيق 7." },
      { title: "الاختبار 2: العوامل الأولية", subtitle: "أسس تقبل القسمة على 3", text: "حلل إلى العوامل الأولية. إذا كانت جميع الأسس تقبل القسمة على 3، فهو مكعب.", example: "216 = 2³ × 3³ → مكعب كامل!" },
      { title: "الاختبار 3: التناظر السالب", subtitle: "قاعدة الأسس الفردية", text: "بما أن (-k)³ = -k³، فإن العدد السالب -n مكعب كامل إذا كان |n| مكعباً.", example: "-512 مكعب كامل لأن ∛(-512) = -8." },
      { title: "الاختبار 4: الجذر الرقمي (Mod 9)", subtitle: "فلتر الاستبعاد", text: "مجموع أرقام المكعب الكامل متكرراً يساوي دائماً 0 أو 1 أو 8 أو 9.", example: "الجذر الرقمي للعدد 1331: 1+3+3+1 = 8 (اجتاز الاختبار)." }
    ],
    s4Desc: "حفظ أول 30 مكعباً كاملاً يبني أساساً قوياً للحساب الذهني السريع:",
    s5P1: "أي عدد ليس مكعباً يقع دائماً بين مكعبين متتاليين: k³ < n < (k + 1)³.",
    s5P2: "بالنسبة للعدد 500، المكعبان المحيطان هما 343 (7³) و 512 (8³). بما أن المسافة إلى 512 هي 12 فقط، فإن 512 هو المكعب الأقرب.",
    s6P1: "اضرب أو اقسم على العوامل الأولية الناقصة لجعل جميع الأسس مضاعفات للعدد 3:",
    s6MultTitle: "1. بواسطة الضرب",
    s6MultText: "اضرب في الأسس الناقصة للوصول إلى المضاعف التالي للعدد 3.",
    s6DivTitle: "2. بواسطة القسمة",
    s6DivText: "اقسم على العوامل الزائدة لترك ثلاثيات دقيقة فقط.",
    s7P1: "مقارنة بين القوى ثنائية الأبعاد (المربعات) وثلاثية الأبعاد (المكعبات):",
    s7Table: {
      propCol: "الخاصية",
      squareCol: "المربع الكامل (k²)",
      cubeCol: "المكعب الكامل (k³)",
      rows: [
        { prop: "الهندسة", square: "مساحة سطح 2D لمربع مستوٍ", cube: "حجم 3D لمكعب صلب" },
        { prop: "الأعداد السالبة", square: "غير حقيقي (جذر تخيلي ±bi)", cube: "حقيقي صحيح: (-k)³ = -k³" },
        { prop: "الأسس الأولية", square: "مضاعفات 2 (زوجية)", cube: "مضاعفات 3" },
        { prop: "الرقم الأخير", square: "فقط 0, 1, 4, 5, 6, 9", cube: "أي رقم من 0 إلى 9" },
        { prop: "كلاهما معاً", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "الحجم والخدمات اللوجستية", text: "أبعاد صناديق الشحن، الحاويات وخزانات التخزين في النقل ثلاثي الأبعاد." },
      { title: "الفيزياء والميكانيكا الحيوية", text: "قانون التربيع والتكعيب الذي يربط بين مساحة السطح وكتلة الكائنات." },
      { title: "الرسومات ثلاثية الأبعاد والفوكسل", text: "النمذجة الحجمية القائمة على الفوكسل في ألعاب مثل ماينكرافت." },
      { title: "التشفير", text: "المنحنيات الإهليلجية ونظرية الأعداد التحليلية في الأمن السيبراني." }
    ],
    s10Cards: [
      { title: "ثلاثة عوامل متطابقة", text: "يحقق العلاقة n = k × k × k حيث k عدد صحيح." },
      { title: "يقبل الأعداد السالبة", text: "على عكس الجذور التربيعية، الجذور التكعيبية للأعداد السالبة حقيقية." },
      { title: "الأسس ثلاثية", text: "يجب أن يكون أس كل عامل أولي قابلاً للقسمة على 3." },
      { title: "مجاني 100%", text: "تحقق من عدد غير محدود من الأرقام مع شرح كامل وخطوات مفصلة." }
    ],
    faqs: [
      { question: "ما هو المكعب الكامل ببساطة؟", answer: "هو عدد صحيح ينتج عن ضرب عدد صحيح في نفسه ثلاث مرات. مثلاً 27 مكعب كامل لأن 3 × 3 × 3 = 27." },
      { question: "هل يمكن للعدد السالب أن يكون مكعباً كاملاً؟", answer: "نعم! حاصل ضرب ثلاثة أعداد سالبة هو سالب: (-4) × (-4) × (-4) = -64. وبالتالي -64 مكعب كامل جذره -4." },
      { question: "هل الصفر مكعب كامل؟", answer: "نعم، الصفر مكعب كامل لأن 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "هل يمكن للعدد أن يكون مربعاً ومكعباً في آن واحد؟", answer: "نعم، الأعداد التي أسس عواملها الأولية من مضاعفات 6: 1، 64 (8² و 4³)، 729 (27² و 9³) و 4096 (64² و 16³)." },
      { question: "هل هذه الحاسبة مجانية؟", answer: "نعم، حاسبة المكعبات الكاملة لدينا مجانية تماماً وبدون أي حدود للاستخدام." }
    ]
  },
  hi: {
    s1Lead: "पूर्ण घन (Perfect Cube) वह पूर्णांक है जो किसी पूर्णांक को स्वयं से दो बार गुणा करने पर प्राप्त होता है: n = k × k × k = k³। संख्या k को n का घनमूल (∛n) कहा जाता है।",
    s1P1: "उदाहरण के लिए, 27 एक पूर्ण घन है क्योंकि 3 × 3 × 3 = 27 (अतः ∛27 = 3)। इसी तरह, 125 = 5³ और -64 = (-4)³। हालाँकि, 50 पूर्ण घन नहीं है क्योंकि ∛50 ≈ 3.684 है।",
    s1P2: "यह शब्द 3D ज्यामिति से आता है: 27 इकाई ब्लॉकों के साथ आप बिना किसी खाली जगह के 3×3×3 का एक ठोस घन बना सकते हैं।",
    s1Cards: [
      { title: "ऋणात्मक घन संभव हैं!", text: "विषम घातें चिह्न सुरक्षित रखती हैं: (-3)³ = -27। ऋणात्मक पूर्णांक वास्तविक पूर्ण घन हो सकते हैं।" },
      { title: "शून्य और एक", text: "0 और 1 मूल घन हैं: 0³ = 0 और 1³ = 1। -1 भी एक घन है: (-1)³ = -1।" },
      { title: "सम-विषम संगति", text: "सम संख्या का घन हमेशा सम (2³=8, 4³=64) और विषम का हमेशा विषम (3³=27, 5³=125) होता है।" },
      { title: "अभाज्य घातांक नियम", text: "अभाज्य गुणनखंडन में प्रत्येक अभाज्य संख्या की घात 3 का सटीक गुणज होनी चाहिए।" }
    ],
    s2Intro: "इन 3 आसान चरणों का पालन करके मिलीसेकंड में किसी भी संख्या की जाँच करें:",
    s2Steps: [
      { title: "पूर्णांक दर्ज करें", text: "कोई भी धनात्मक या ऋणात्मक पूर्णांक लिखें या प्रीसेट बटन चुनें (-27, 216, 1331...)।" },
      { title: "'जाँच करें' पर क्लिक करें", text: "घनमूल और अभाज्य गुणनखंडों की तुरंत गणना करने के लिए बटन दबाएँ।" },
      { title: "प्रमाण की समीक्षा करें", text: "निष्कर्ष, चरण-दर-चरण गुणनखंड, निकटतम घन और बीजगणितीय गुणक देखें।" }
    ],
    s3Intro: "गणितज्ञ पूर्ण घनों की पुष्टि के लिए चार बुनियादी परीक्षणों का उपयोग करते हैं:",
    s3Tests: [
      { title: "परीक्षण 1: पूर्णांक घनमूल", subtitle: "सीधी गणना", text: "∛n की गणना करें। यदि मूल में कोई दशमलव नहीं है, तो n एक पूर्ण घन है।", example: "∛343 = 7.0000000 → सटीक पूर्णांक 7।" },
      { title: "परीक्षण 2: अभाज्य गुणनखंड", subtitle: "3 से विभाज्य घातें", text: "अभाज्य गुणनखंड करें। यदि प्रत्येक घात 3 से विभाज्य है, तो यह पूर्ण घन है।", example: "216 = 2³ × 3³ → पूर्ण घन!" },
      { title: "परीक्षण 3: ऋणात्मक समरूपता", subtitle: "विषम घात नियम", text: "चूँकि (-k)³ = -k³, ऋणात्मक संख्या -n घन है यदि |n| घन है।", example: "-512 पूर्ण घन है क्योंकि ∛(-512) = -8।" },
      { title: "परीक्षण 4: अंकीय मूल (Mod 9)", subtitle: "छँटाई फ़िल्टर", text: "अंकों का योग बार-बार करें: घन का अंकीय मूल हमेशा 0, 1, 8 या 9 होता है।", example: "1331 का अंकीय मूल: 1+3+3+1 = 8 (परीक्षण सफल)।" }
    ],
    s4Desc: "पहले 30 घनों को याद रखने से मौखिक गणित में जबरदस्त गति आती है:",
    s5P1: "प्रत्येक गैर-घन संख्या दो क्रमागत घनों के बीच स्थित होती है: k³ < n < (k + 1)³।",
    s5P2: "500 के लिए निकटतम घन 343 (7³) और 512 (8³) हैं। 512 से दूरी केवल 12 है, इसलिए 512 सबसे निकटतम घन है।",
    s6P1: "घातों को 3 का गुणज बनाने के लिए लुप्त अभाज्य गुणनखंडों से गुणा या भाग करें:",
    s6MultTitle: "1. गुणा द्वारा",
    s6MultText: "3 के अगले गुणज तक पहुँचने के लिए आवश्यक घातों से गुणा करें।",
    s6DivTitle: "2. भाग द्वारा",
    s6DivText: "केवल सटीक तीन-तीन के समूह रखने के लिए अतिरिक्त गुणनखंडों से भाग दें।",
    s7P1: "2D घातों (वर्ग) और 3D घातों (घन) की तुलना:",
    s7Table: {
      propCol: "गुणधर्म",
      squareCol: "पूर्ण वर्ग (k²)",
      cubeCol: "पूर्ण घन (k³)",
      rows: [
        { prop: "ज्यामिति", square: "समतल वर्ग का 2D क्षेत्रफल", cube: "ठोस घन का 3D आयतन" },
        { prop: "ऋणात्मक संख्याएँ", square: "अवास्तविक (काल्पनिक मूल ±bi)", cube: "मान्य वास्तविक: (-k)³ = -k³" },
        { prop: "अभाज्य घातांक", square: "2 के गुणज (सम)", cube: "3 के गुणज" },
        { prop: "अंतिम अंक", square: "केवल 0, 1, 4, 5, 6, 9", cube: "0 से 9 तक कोई भी अंक" },
        { prop: "दोनों एक साथ", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "आयतन और लॉजिस्टिक्स", text: "3D परिवहन में कार्गो कंटेनर, स्टोरेज टैंक और बॉक्स की पैकिंग।" },
      { title: "भौतिकी और बायोमैकेनिक्स", text: "सतह क्षेत्र और द्रव्यमान अनुपात को नियंत्रित करने वाला वर्ग-घन नियम।" },
      { title: "3D ग्राफिक्स और वॉक्सेल", text: "माइनक्राफ्ट जैसे गेम इंजनों में वॉक्सेल आधारित वॉल्यूमेट्रिक मॉडलिंग।" },
      { title: "क्रिप्टोग्राफी", text: "साइबर सुरक्षा में अण्डाकार वक्र और विश्लेषणात्मक संख्या सिद्धांत।" }
    ],
    s10Cards: [
      { title: "तीन समान गुणनखंड", text: "n = k × k × k नियम का पालन करता है जहाँ k पूर्णांक है।" },
      { title: "ऋणात्मक संख्याएँ मान्य", text: "वर्गमूल के विपरीत, ऋणात्मक संख्याओं के घनमूल वास्तविक होते हैं।" },
      { title: "3 के समूह में घातें", text: "प्रत्येक अभाज्य गुणनखंड की घात 3 से विभाज्य होनी चाहिए।" },
      { title: "100% मुफ़्त", text: "पूर्ण चरण-दर-चरण समाधान के साथ असीमित संख्याओं की जाँच करें।" }
    ],
    faqs: [
      { question: "सरल शब्दों में पूर्ण घन क्या है?", answer: "यह वह पूर्णांक है जो किसी संख्या को स्वयं से तीन बार गुणा करने पर मिलता है। जैसे 27, क्योंकि 3 × 3 × 3 = 27।" },
      { question: "क्या ऋणात्मक संख्या पूर्ण घन हो सकती है?", answer: "हाँ! तीन ऋणात्मक संख्याओं का गुणनफल ऋणात्मक होता है: (-4) × (-4) × (-4) = -64। अतः -64 एक पूर्ण घन है।" },
      { question: "क्या 0 एक पूर्ण घन है?", answer: "हाँ, 0 एक पूर्ण घन है क्योंकि 0 × 0 × 0 = 0 (0³ = 0)।" },
      { question: "क्या कोई संख्या वर्ग और घन दोनों हो सकती है?", answer: "हाँ, जिनकी अभाज्य घातें 6 की गुणज हों: 1, 64 (8² और 4³), 729 (27² और 9³) और 4096 (64² और 16³)।" },
      { question: "क्या यह कैलकुलेटर मुफ़्त है?", answer: "हाँ, हमारा पूर्ण घन कैलकुलेटर पूरी तरह से मुफ़्त है और इसमें कोई सीमा नहीं है।" }
    ]
  },
  bn: {
    s1Lead: "পূর্ণ ঘনসংখ্যা (Perfect Cube) হলো একটি পূর্ণসংখ্যা যা কোনো পূর্ণসংখ্যাকে নিজের সাথে দুইবার গুণ করে পাওয়া যায়: n = k × k × k = k³। সংখ্যা k-কে n-এর ঘনমূল বলা হয় (লেখা হয় ∛n)।",
    s1P1: "উদাহরণস্বরূপ, ২৭ একটি পূর্ণ ঘনসংখ্যা কারণ ৩ × ৩ × ৩ = ২৭ (সুতরাং ∛২৭ = ৩)। একইভাবে, ১২৫ = ৫³ এবং -৬৪ = (-৪)³। তবে ৫০ পূর্ণ ঘনসংখ্যা নয় কারণ ∛৫০ ≈ ৩.৬৮৪।",
    s1P2: "এই শব্দটি 3D জ্যামিতি থেকে এসেছে: ২৭টি একক ব্লক দিয়ে আপনি কোনো ফাঁকা জায়গা ছাড়া ৩×৩×৩ পরিমাপের একটি নিরেট ঘনক তৈরি করতে পারেন।",
    s1Cards: [
      { title: "ঋণাত্মক ঘনসংখ্যা বাস্তব!", text: "বিজোড় ঘাত চিহ্ন বজায় রাখে: (-৩)³ = -২৭। ঋণাত্মক পূর্ণসংখ্যাও বাস্তব পূর্ণ ঘনসংখ্যা হতে পারে।" },
      { title: "শূন্য এবং এক", text: "০ এবং ১ প্রাথমিক ঘনসংখ্যা: ০³ = ০ এবং ১³ = ১। -১-ও একটি ঘনসংখ্যা: (-১)³ = -১।" },
      { title: "জোড়-বিজোড় নিয়ম", text: "জোড় সংখ্যার ঘন সর্বদা জোড় (২³=৮, ৪³=৬৪), এবং বিজোড় সংখ্যার ঘন সর্বদা বিজোড় (৩³=২৭, ৫³=১২৫)।" },
      { title: "মৌলিক উৎপাদক নিয়ম", text: "মৌলিক উৎপাদকে বিশ্লেষণে প্রতিটি মৌলিক সংখ্যার ঘাত অবশ্যই ৩-এর গুণিতক হতে হবে।" }
    ],
    s2Intro: "এই ৩টি সহজ ধাপ অনুসরণ করে যেকোনো সংখ্যার ঘনমূল পরীক্ষা করুন:",
    s2Steps: [
      { title: "পূর্ণসংখ্যা লিখুন", text: "যেকোনো ধনাত্মক বা ঋণাত্মক পূর্ণসংখ্যা লিখুন, অথবা প্রিসেট বোতাম নির্বাচন করুন (-২৭, ২১৬, ১৩৩১...)।" },
      { title: "'যাচাই করুন' ক্লিক করুন", text: "ঘনমূল এবং মৌলিক উৎপাদক তাৎক্ষণিকভাবে গণনা করতে বোতাম চাপুন।" },
      { title: "প্রমাণ দেখুন", text: "ফলাফল, ধাপে ধাপে উৎপাদক বিশ্লেষণ, নিকটতম ঘনসংখ্যা ও গুণক পর্যালোচনা করুন।" }
    ],
    s3Intro: "গণিতবিদরা পূর্ণ ঘনসংখ্যা নিশ্চিত করতে চারটি প্রধান পরীক্ষা ব্যবহার করেন:",
    s3Tests: [
      { title: "পরীক্ষা ১: পূর্ণসংখ্যা ঘনমূল", subtitle: "সরাসরি গণনা", text: "∛n নির্ণয় করুন। মূলে কোনো দশমিক না থাকলে n একটি পূর্ণ ঘনসংখ্যা।", example: "∛৩৪৩ = ৭.০০০০০০০ → সুনির্দিষ্ট পূর্ণসংখ্যা ৭।" },
      { title: "পরীক্ষা ২: মৌলিক উৎপাদক", subtitle: "৩ দ্বারা বিভাজ্য ঘাত", text: "মৌলিক উৎপাদকে বিশ্লেষণ করুন। সব ঘাত ৩ দিয়ে ভাগ হলে এটি পূর্ণ ঘনসংখ্যা।", example: "২১৬ = ২³ × ৩³ → পূর্ণ ঘনসংখ্যা!" },
      { title: "পরীক্ষা ৩: ঋণাত্মক প্রতিসাম্য", subtitle: "বিজোড় ঘাত নিয়ম", text: "যেহেতু (-k)³ = -k³, ঋণাত্মক সংখ্যা -n ঘনসংখ্যা যদি |n| ঘনসংখ্যা হয়।", example: "-৫১২ ঘনসংখ্যা কারণ ∛(-৫১২) = -৮।" },
      { title: "পরীক্ষা ৪: ডিজিটাল রুট (Mod 9)", subtitle: "বর্জন ফিল্টার", text: "অঙ্কগুলোর পুনরাবৃত্ত যোগফল ঘনসংখ্যার ক্ষেত্রে সর্বদা ০, ১, ৮ বা ৯ হয়।", example: "১৩৩১-এর ডিজিটাল রুট: ১+৩+৩+১ = ৮ (পরীক্ষা উত্তীর্ণ)।" }
    ],
    s4Desc: "প্রথম ৩০টি ঘনসংখ্যা মুখস্থ রাখলে মানসিক গণনায় অসাধারণ গতি আসে:",
    s5P1: "প্রতিটি অ-ঘনসংখ্যা দুটি ক্রমিক ঘনসংখ্যার মাঝে অবস্থান করে: k³ < n < (k + 1)³।",
    s5P2: "৫০০-এর জন্য নিকটতম ঘনসংখ্যা হলো ৩৪৩ (৭³) এবং ৫১২ (৮³)। ৫১২-এর সাথে ব্যবধান মাত্র ১২, তাই ৫১২ নিকটতম ঘনসংখ্যা।",
    s6P1: "ঘাতগুলোকে ৩-এর গুণিতক করতে প্রয়োজনীয় মৌলিক উৎপাদক দিয়ে গুণ বা ভাগ করুন:",
    s6MultTitle: "১. গুণের মাধ্যমে",
    s6MultText: "৩-এর পরবর্তী গুণিতকে পৌঁছাতে প্রয়োজনীয় ঘাত দিয়ে গুণ করুন।",
    s6DivTitle: "২. ভাগের মাধ্যমে",
    s6DivText: "অতিরিক্ত উৎপাদক দিয়ে ভাগ করে কেবল পূর্ণ ত্রয়ী রাখুন।",
    s7P1: "2D ঘাত (বর্গ) এবং 3D ঘাতের (ঘন) তুলনা:",
    s7Table: {
      propCol: "বৈশিষ্ট্য",
      squareCol: "পূর্ণবর্গ সংখ্যা (k²)",
      cubeCol: "পূর্ণ ঘনসংখ্যা (k³)",
      rows: [
        { prop: "জ্যামিতি", square: "একটি সমতল বর্গের 2D ক্ষেত্রফল", cube: "একটি নিরেট ঘনকের 3D আয়তন" },
        { prop: "ঋণাত্মক সংখ্যা", square: "বাস্তব নয় (কাল্পনিক মূল ±bi)", cube: "বৈধ বাস্তব: (-k)³ = -k³" },
        { prop: "মৌলিক ঘাত", square: "২-এর গুণিতক (জোড়)", cube: "৩-এর গুণিতক" },
        { prop: "শেষ অঙ্ক", square: "শুধুমাত্র ০, ১, ৪, ৫, ৬, ৯", cube: "০ থেকে ৯ যেকোনো অঙ্ক" },
        { prop: "উভয়ই একসাথে", square: "k⁶ (১, ৬৪, ৭২৯, ৪০৯৬)", cube: "k⁶ (১, ৬৪, ৭২৯, ৪০৯৬)" }
      ]
    },
    s8Apps: [
      { title: "আয়তন ও লজিস্টিকস", text: "কার্গো কন্টেইনার, স্টোরেজ ট্যাংক এবং বাক্সের ত্রিমাত্রিক প্যাকিং।" },
      { title: "পদার্থবিজ্ঞান ও বায়োমেকানিক্স", text: "পৃষ্ঠতলের ক্ষেত্রফল এবং ভরের অনুপাত নিয়ন্ত্রণকারী বর্গ-ঘন সূত্র।" },
      { title: "3D গ্রাফিক্স ও ভক্সেল", text: "মাইনক্রাফটের মতো গেম ইঞ্জিনে ভক্সেল ভিত্তিক ত্রিমাত্রিক মডেলিং।" },
      { title: "ক্রিপ্টোগ্রাফি", text: "সাইবার সুরক্ষায় উপবৃত্তাকার বক্ররেখা এবং সংখ্যাতত্ত্বের ব্যবহার।" }
    ],
    s10Cards: [
      { title: "তিনটি অভিন্ন উৎপাদক", text: "n = k × k × k সম্পর্ক পূরণ করে যেখানে k একটি পূর্ণসংখ্যা।" },
      { title: "ঋণাত্মক সংখ্যা গ্রহণযোগ্য", text: "বর্গমূলের বিপরীতভাবে, ঋণাত্মক সংখ্যার ঘনমূল বাস্তব সংখ্যা।" },
      { title: "৩-এর গুণিতক ঘাত", text: "প্রতিটি মৌলিক উৎপাদকের ঘাত অবশ্যই ৩ দ্বারা বিভাজ্য হতে হবে।" },
      { title: "১০০% সম্পূর্ণ ফ্রি", text: "ধাপে ধাপে সমাধানসহ সীমাহীন সংখ্যা তাৎক্ষণিকভাবে যাচাই করুন।" }
    ],
    faqs: [
      { question: "সহজ কথায় পূর্ণ ঘনসংখ্যা কী?", answer: "কোনো পূর্ণসংখ্যাকে তিনবার নিজের সাথে গুণ করলে যে সংখ্যা পাওয়া যায়। যেমন ২৭, কারণ ৩ × ৩ × ৩ = ২৭।" },
      { question: "ঋণাত্মক সংখ্যা কি পূর্ণ ঘনসংখ্যা হতে পারে?", answer: "হ্যাঁ! তিনটি ঋণাত্মক সংখ্যার গুণফল ঋণাত্মক: (-৪) × (-৪) × (-৪) = -৬৪। সুতরাং -৬৪ একটি পূর্ণ ঘনসংখ্যা যার মূল -৪।" },
      { question: "০ কি পূর্ণ ঘনসংখ্যা?", answer: "হ্যাঁ, ০ একটি পূর্ণ ঘনসংখ্যা কারণ ০ × ০ × ০ = ০ (০³ = ০)।" },
      { question: "একটি সংখ্যা কি একসাথে বর্গ ও ঘন হতে পারে?", answer: "হ্যাঁ, যাদের মৌলিক ঘাত ৬-এর গুণিতক: ১, ৬৪ (৮² এবং ৪³), ৭২৯ (২৭² এবং ৯³) এবং ৪০৯৬ (৬৪² এবং ১৬³)।" },
      { question: "এই ক্যালকুলেটরটি কি সম্পূর্ণ ফ্রি?", answer: "হ্যাঁ, আমাদের পূর্ণ ঘন ক্যালকুলেটর সম্পূর্ণ বিনামূল্যে সীমাহীন ব্যবহারের সুবিধা দেয়।" }
    ]
  },
  ja: {
    s1Lead: "完全立方数（立法数）とは、ある整数を3回掛け合わせて得られる整数のことです：n = k × k × k = k³。このとき、kをnの立方根（∛nと表記）と呼びます。",
    s1P1: "例えば、27は3 × 3 × 3 = 27なので完全立方数です（∛27 = 3）。同様に、125 = 5³、-64 = (-4)³です。一方、50は∛50 ≈ 3.684となり整数ではないため完全立方数ではありません。",
    s1P2: "この名称は3次元幾何学に由来します。27個の単位立法体ブロックがあれば、隙間なく3×3×3の立方体を組み立てることができます。",
    s1Cards: [
      { title: "負の立方数が存在します！", text: "奇数乗は符号を保持します：(-3)³ = -27。負の整数も正真正銘の実数の完全立方数です。" },
      { title: "0と1について", text: "0と1は最も基本的な立方数です：0³ = 0、1³ = 1。-1も立方数です：(-1)³ = -1。" },
      { title: "偶数・奇数の一致", text: "偶数の立方数は常に偶数（2³=8, 4³=64）、奇数の立方数は常に奇数（3³=27, 5³=125）になります。" },
      { title: "素因数の指数ルール", text: "素因数分解した際、すべての素因数の指数が「3の倍数」である必要があります。" }
    ],
    s2Intro: "以下の3ステップで、任意の整数を瞬時に判定できます:",
    s2Steps: [
      { title: "整数を入力", text: "正または負の整数を入力するか、プリセットボタン（-27, 216, 1331...）を選択します。" },
      { title: "「判定」をクリック", text: "判定ボタンまたはEnterキーを押して、立方根と素因数分解を瞬時に算出します。" },
      { title: "証明を確認", text: "判定結果、素因数分解の詳細、前後の立方数、最小乗数をチェックします。" }
    ],
    s3Intro: "数学者は完全立方数の判定に主に4つのアプローチを用います:",
    s3Tests: [
      { title: "判定法1：整数の立方根", subtitle: "直接計算", text: "∛nを計算します。小数点以下の端数がなければ完全立方数です。", example: "∛343 = 7.0000000 → 厳密な整数7。" },
      { title: "判定法2：素因数分解", subtitle: "指数が3の倍数", text: "素因数分解を行い、各素数の指数がすべて3で割り切れるか確認します。", example: "216 = 2³ × 3³ → 完全立方数！" },
      { title: "判定法3：負の対称性", subtitle: "奇数乗の性質", text: "(-k)³ = -k³であるため、|n|が立方数なら負の数-nも立方数です。", example: "-512は∛(-512) = -8なので完全立方数です。" },
      { title: "判定法4：数字根（Mod 9）", subtitle: "高速除外フィルター", text: "各桁の数字を足し合わせた数字根は、立方数の場合必ず0, 1, 8, 9のいずれかになります。", example: "1331の数字根：1+3+3+1 = 8（判定通過）。" }
    ],
    s4Desc: "最初の30個の完全立方数を把握しておくと、暗算や数学的直感が飛躍的に向上します:",
    s5P1: "完全立方数でない整数は、必ず連続する2つの立方数の間に位置します：k³ < n < (k + 1)³。",
    s5P2: "例えば500の場合、前後の立方数は343（7³）と512（8³）です。512までの差はわずか12なので、512が最も近い立方数です。",
    s6P1: "不足している素因数を掛け合わせるか割ることで、指数を3の倍数に調整できます:",
    s6MultTitle: "1. 乗算による方法",
    s6MultText: "次の3の倍数に達するよう、不足している指数分を掛け合わせます。",
    s6DivTitle: "2. 除算による方法",
    s6DivText: "余分な素因数で割り、完全な3つ組だけを残します。",
    s7P1: "2次元の力（平方数）と3次元の力（立方数）の比較:",
    s7Table: {
      propCol: "性質",
      squareCol: "完全平方数 (k²)",
      cubeCol: "完全立方数 (k³)",
      rows: [
        { prop: "幾何学的意味", square: "正方形の2D面積", cube: "立方体の3D体積" },
        { prop: "負の数", square: "実数ではない（虚数解 ±bi）", cube: "実数として有効：(-k)³ = -k³" },
        { prop: "素因数の指数", square: "2の倍数（偶数）", cube: "3の倍数" },
        { prop: "一の位の数字", square: "0, 1, 4, 5, 6, 9のみ", cube: "0から9までのすべての数字" },
        { prop: "両方の性質を持つ数", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "体積・物流管理", text: "3Dコンテナの積載効率、タンク容量、梱包箱の最適設計。" },
      { title: "物理学・生体力学", text: "生物の表面積と質量の比率を支配する二乗三乗の法則。" },
      { title: "3Dグラフィックス・ボクセル", text: "Minecraftのようなボクセルグリッドによる3次元空間表現。" },
      { title: "暗号技術", text: "サイバーセキュリティにおける楕円曲線暗号と解析的整数論。" }
    ],
    s10Cards: [
      { title: "3つの同一因数", text: "整数kに対してn = k × k × kの等式を満たします。" },
      { title: "負の数も対応", text: "平方根と異なり、負の数の奇数乗根は正当な実数です。" },
      { title: "指数が3の倍数", text: "素因数分解時の各指数がすべて3で割り切れます。" },
      { title: "完全無料", text: "登録不要で無制限に数値の判定と解説を確認できます。" }
    ],
    faqs: [
      { question: "完全立方数とは簡単に言うと何ですか？", answer: "ある整数を3回掛け合わせて作られる整数のことです。例えば27は3 × 3 × 3 = 27なので完全立方数です。" },
      { question: "負の数も完全立方数になれますか？", answer: "はい！負の数を3回掛けると負になります：(-4) × (-4) × (-4) = -64。したがって、-64は立法根が-4の完全立方数です。" },
      { question: "0は完全立方数ですか？", answer: "はい、0 × 0 × 0 = 0（0³ = 0）となるため、0も完全立方数です。" },
      { question: "平方数と立方数の両方になれる数はありますか？", answer: "はい、素因数の指数が6の倍数になる数です：1、64（8²かつ4³）、729（27²かつ9³）、4096（64²かつ16³）などがあります。" },
      { question: "この計算機は無料ですか？", answer: "はい、当サイトの完全立方数計算機は登録不要で完全無料、回数制限もありません。" }
    ]
  },
  ko: {
    s1Lead: "완전세제곱수(입방수)는 어떤 정수를 세 번 곱하여 얻은 정수입니다: n = k × k × k = k³. 여기서 k는 n의 세제곱근(∛n)이라고 부릅니다.",
    s1P1: "예를 들어, 27은 3 × 3 × 3 = 27이므로 완전세제곱수입니다(즉 ∛27 = 3). 마찬가지로 125 = 5³이며, -64 = (-4)³입니다. 반면 50은 ∛50 ≈ 3.684이므로 완전세제곱수가 아닙니다.",
    s1P2: "이 개념은 3차원 기하학에서 비롯되었습니다. 27개의 단위 정육면체 블록이 있으면 빈틈없이 3×3×3 정육면체를 완성할 수 있습니다.",
    s1Cards: [
      { title: "음수 세제곱수도 존재합니다!", text: "홀수 거듭제곱은 부호를 보존합니다: (-3)³ = -27. 음의 정수도 엄연한 실수의 완전세제곱수입니다." },
      { title: "0과 1", text: "0과 1은 가장 기본적인 세제곱수입니다: 0³ = 0, 1³ = 1. -1 역시 세제곱수입니다: (-1)³ = -1." },
      { title: "홀짝성 일치", text: "짝수의 세제곱은 항상 짝수(2³=8, 4³=64)이며, 홀수의 세제곱은 항상 홀수(3³=27, 5³=125)입니다." },
      { title: "소인수 지수 법칙", text: "소인수분해했을 때 모든 소인수의 지수가 반드시 3의 배수여야 합니다." }
    ],
    s2Intro: "다음 3단계로 원하는 정수를 수 밀리초 만에 판별해 보세요:",
    s2Steps: [
      { title: "정수 입력", text: "양수나 음수 정수를 입력하거나 예시 버튼(-27, 216, 1331...)을 클릭합니다." },
      { title: "'판별하기' 클릭", text: "버튼이나 Enter를 눌러 세제곱근과 소인수분해 결과를 즉시 계산합니다." },
      { title: "증명 과정 확인", text: "판별 결론, 단계별 소인수분해, 인접 세제곱수 및 최소 배수를 확인합니다." }
    ],
    s3Intro: "수학자들은 완전세제곱수를 판별할 때 네 가지 핵심 테스트를 활용합니다:",
    s3Tests: [
      { title: "테스트 1: 정수 세제곱근", subtitle: "직접 계산", text: "∛n을 계산합니다. 소수점 이하가 없는 정수라면 완전세제곱수입니다.", example: "∛343 = 7.0000000 → 정확한 정수 7." },
      { title: "테스트 2: 소인수분해", subtitle: "지수가 3의 배수", text: "소인수분해를 수행하여 각 소수의 지수가 모두 3으로 나누어떨어지는지 확인합니다.", example: "216 = 2³ × 3³ → 완전세제곱수!" },
      { title: "테스트 3: 음수 대칭성", subtitle: "홀수 거듭제곱 법칙", text: "(-k)³ = -k³이므로 |n|이 세제곱수이면 음수 -n도 세제곱수입니다.", example: "-512는 ∛(-512) = -8이므로 완전세제곱수입니다." },
      { title: "테스트 4: 자릿수 근 (Mod 9)", subtitle: "제외 필터", text: "자릿수를 반복해서 더한 자릿수 근은 세제곱수의 경우 항상 0, 1, 8, 9 중 하나입니다.", example: "1331의 자릿수 근: 1+3+3+1 = 8 (테스트 통과)." }
    ],
    s4Desc: "처음 30개의 완전세제곱수를 숙지해 두면 암산과 수학적 사고력에 큰 도움이 됩니다:",
    s5P1: "완전세제곱수가 아닌 정수는 항상 연속하는 두 세제곱수 사이에 위치합니다: k³ < n < (k + 1)³.",
    s5P2: "500의 경우 인접한 세제곱수는 343(7³)과 512(8³)입니다. 512와의 거리가 12에 불과하므로 512가 가장 가까운 세제곱수입니다.",
    s6P1: "부족한 소인수를 곱하거나 나누어 모든 지수를 3의 배수로 맞출 수 있습니다:",
    s6MultTitle: "1. 곱셈을 통한 방법",
    s6MultText: "다음 3의 배수에 도달하도록 부족한 거듭제곱을 곱합니다.",
    s6DivTitle: "2. 나눗셈을 통한 방법",
    s6DivText: "남는 소인수를 나누어 완벽한 3개 묶음만 남깁니다.",
    s7P1: "2차원 제곱수(제곱)와 3차원 입방수(세제곱)의 비교:",
    s7Table: {
      propCol: "속성",
      squareCol: "완전제곱수 (k²)",
      cubeCol: "완전세제곱수 (k³)",
      rows: [
        { prop: "기하학적 의미", square: "정사각형의 2D 넓이", cube: "정육면체의 3D 부피" },
        { prop: "음수 여부", square: "실수 아님 (허수근 ±bi)", cube: "실수 인정: (-k)³ = -k³" },
        { prop: "소인수 지수", square: "2의 배수 (짝수)", cube: "3의 배수" },
        { prop: "마지막 자리", square: "0, 1, 4, 5, 6, 9만 가능", cube: "0부터 9까지 모든 숫자 가능" },
        { prop: "둘 다 만족하는 수", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "부피 및 물류 관리", text: "3D 화물 적재, 보관 탱크 용량 및 상자 치수 설계." },
      { title: "물리학 및 생체역학", text: "표면적과 질량의 비율을 규정하는 제곱-세제곱 법칙." },
      { title: "3D 그래픽 및 복셀", text: "마인크래프트와 같은 게임 엔진의 복셀 기반 체적 렌더링." },
      { title: "암호학", text: "정보 보안 분야의 타원곡선 암호 및 해석적 정수론." }
    ],
    s10Cards: [
      { title: "세 개의 동일한 인수", text: "정수 k에 대해 n = k × k × k 수식을 만족합니다." },
      { title: "음수 허용", text: "제곱근과 달리 음수의 세제곱근은 유효한 실수입니다." },
      { title: "3의 배수 지수", text: "모든 소인수가 3으로 나누어떨어지는 지수를 가집니다." },
      { title: "100% 무료", text: "제한 없이 단계별 풀이와 함께 결과를 즉시 확인하세요." }
    ],
    faqs: [
      { question: "완전세제곱수란 쉽게 말해 무엇인가요?", answer: "어떤 정수를 세 번 곱해서 만들어지는 수입니다. 예를 들어 3 × 3 × 3 = 27이므로 27은 완전세제곱수입니다." },
      { question: "음수도 완전세제곱수가 될 수 있나요?", answer: "네! 세 음수를 곱하면 음수가 됩니다: (-4) × (-4) × (-4) = -64. 따라서 -64는 세제곱근이 -4인 완전세제곱수입니다." },
      { question: "0은 완전세제곱수인가요?", answer: "네, 0 × 0 × 0 = 0(0³ = 0)이므로 0도 완전세제곱수입니다." },
      { question: "제곱수이면서 동시에 세제곱수인 수도 있나요?", answer: "네, 소인수의 지수가 6의 배수인 수들입니다: 1, 64(8² 및 4³), 729(27² 및 9³), 4096(64² 및 16³) 등이 있습니다." },
      { question: "이 계산기는 무료인가요?", answer: "네, 저희 완전세제곱수 계산기는 회원가입 없이 100% 무료로 무제한 이용하실 수 있습니다." }
    ]
  },
  bg: {
    s1Lead: "Точен куб (кубично число) е цяло число, получено чрез умножаване на цяло число само по себе си два пъти: n = k × k × k = k³. Числото k се нарича кубичен корен от n (записва се ∛n).",
    s1P1: "Например 27 е точен куб, тъй като 3 × 3 × 3 = 27 (следователно ∛27 = 3). По същия начин 125 = 5³ и -64 = (-4)³. Но числото 50 не е точен куб, тъй като ∛50 ≈ 3,684.",
    s1P2: "Наименованието произлиза от триизмерната геометрия: с 27 единични кубчета можете да сглобите плътен куб 3×3×3 без никакви празнини или остатъци.",
    s1Cards: [
      { title: "Отрицателните кубове съществуват!", text: "Нечетните степени запазват знака: (-3)³ = -27. Отрицателните числа могат да бъдат напълно реални точни кубове." },
      { title: "Нула и едно", text: "0 и 1 са основни кубове: 0³ = 0 и 1³ = 1. Числото -1 също е куб: (-1)³ = -1." },
      { title: "Запазване на четността", text: "Кубът на четно число винаги е четен (2³=8, 4³=64), а на нечетно — нечетен (3³=27, 5³=125)." },
      { title: "Правило за простите множители", text: "В разлагането на прости множители всеки степенен показател трябва да се дели точно на 3." }
    ],
    s2Intro: "Проверете всяко цяло число за милисекунди с тези 3 лесни стъпки:",
    s2Steps: [
      { title: "Въведете число", text: "Напишете положително или отрицателно число, или изберете бутон за бърз избор (-27, 216, 1331...)." },
      { title: "Кликнете 'Провери'", text: "Натиснете Провери или Enter, за да изчислите веднага кубичния корен и множителите." },
      { title: "Вижте доказателството", text: "Разгледайте заключението, подробното разлагане на прости множители, съседните кубове и множителя." }
    ],
    s3Intro: "Математиците използват четири основни теста за проверка на точни кубове:",
    s3Tests: [
      { title: "Тест 1: Цял кубичен корен", subtitle: "Директно изчисление", text: "Пресметнете ∛n. Ако резултатът няма дробна част, n е точен куб.", example: "∛343 = 7,0000000 → Точно цяло число 7." },
      { title: "Тест 2: Прости множители", subtitle: "Степени, кратни на 3", text: "Разложете на прости множители. Ако всяка степен се дели на 3, числото е куб.", example: "216 = 2³ × 3³ → Точен куб!" },
      { title: "Тест 3: Отрицателна симетрия", subtitle: "Правило за нечетни степени", text: "Тъй като (-k)³ = -k³, отрицателно число -n е куб, ако |n| е куб.", example: "-512 е точен куб, тъй като ∛(-512) = -8." },
      { title: "Тест 4: Цифров корен (Mod 9)", subtitle: "Филтър за елиминиране", text: "Сборът от цифрите на точен куб винаги дава 0, 1, 8 или 9.", example: "Цифров корен на 1331: 1+3+3+1 = 8 (успешен тест)." }
    ],
    s4Desc: "Запомнянето на първите 30 кубични числа дава отлична основа за бързо смятане наум:",
    s5P1: "Всяко число, което не е куб, се намира между два последователни куба: k³ < n < (k + 1)³.",
    s5P2: "За числото 500 ограничаващите кубове са 343 (7³) и 512 (8³). Тъй като разликата до 512 е само 12, 512 е най-близкият куб.",
    s6P1: "Умножете или разделете на липсващите прости множители, за да станат степените кратни на 3:",
    s6MultTitle: "1. Чрез умножение",
    s6MultText: "Умножете по липсващите степени, за да достигнете следващото кратно на 3.",
    s6DivTitle: "2. Чрез деление",
    s6DivText: "Разделете на излишните множители, за да останат само точни тройки.",
    s7P1: "Сравнение между 2D степени (квадрати) и 3D степени (кубове):",
    s7Table: {
      propCol: "Свойство",
      squareCol: "Точен квадрат (k²)",
      cubeCol: "Точен куб (k³)",
      rows: [
        { prop: "Геометрия", square: "2D площ на равнинен квадрат", cube: "3D обем на плътен куб" },
        { prop: "Отрицателни числа", square: "Нереални (имагинерен корен ±bi)", cube: "Валидни реални: (-k)³ = -k³" },
        { prop: "Прости степени", square: "Кратни на 2 (четни)", cube: "Кратни на 3" },
        { prop: "Последна цифра", square: "Само 0, 1, 4, 5, 6, 9", cube: "Всяка цифра от 0 до 9" },
        { prop: "Едновременно и двете", square: "k⁶ (1, 64, 729, 4096)", cube: "k⁶ (1, 64, 729, 4096)" }
      ]
    },
    s8Apps: [
      { title: "Обем и логистика", text: "Оразмеряване на транспортни контейнери, резервоари и складови опаковки." },
      { title: "Физика и биомеханика", text: "Законът за квадрата и куба, определящ съотношението между повърхност и маса." },
      { title: "3D графика и воксели", text: "Обемно моделиране с вокселни мрежи в платформи като Minecraft." },
      { title: "Криптография", text: "Елиптични криви и аналитична теория на числата в киберсигурността." }
    ],
    s10Cards: [
      { title: "Три еднакви множителя", text: "Удовлетворява формулата n = k × k × k, където k е цяло число." },
      { title: "Приема отрицателни числа", text: "За разлика от квадратните корени, нечетните корени от отрицателни числа са реални." },
      { title: "Степени, кратни на 3", text: "Всеки прост множител трябва да има показател, делящ се на 3." },
      { title: "100% Безплатно", text: "Проверявайте неограничен брой числа с пълно разлагане стъпка по стъпка." }
    ],
    faqs: [
      { question: "Какво е точен куб с прости думи?", answer: "Това е цяло число, получено при умножаване на цяло число само по себе си три пъти. Например 27, тъй като 3 × 3 × 3 = 27." },
      { question: "Може ли отрицателно число да бъде точен куб?", answer: "Да! Произведението на три отрицателни числа е отрицателно: (-4) × (-4) × (-4) = -64. Следователно -64 е точен куб с корен -4." },
      { question: "Нулата точен куб ли е?", answer: "Да, 0 е точен куб, тъй като 0 × 0 × 0 = 0 (0³ = 0)." },
      { question: "Може ли едно число да е едновременно квадрат и куб?", answer: "Да, числата, чиито прости степени са кратни на 6: 1, 64 (8² и 4³), 729 (27² и 9³) и 4096 (64² и 16³)." },
      { question: "Безплатен ли е този калкулатор?", answer: "Да, нашият калкулатор за точни кубове е 100% безплатен и без ограничения." }
    ]
  }
};

export function getCubeBoilerplate(lang: string): CubeBoilerplate {
  return CUBE_BOILERPLATE[lang] || CUBE_BOILERPLATE.en;
}
