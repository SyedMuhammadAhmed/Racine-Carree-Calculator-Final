// Localized interactive UI tokens, anatomy explorer, simulator, method tabs, and table filters for Nth Root Calculator across all 18 languages

export interface NthInteractiveI18n {
  badgeArbitrary: string;
  badgeExact: string;
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

  simTitle: string;
  simSubtitle: string;
  simDegreeLabel: string;
  simDegreeEven: string;
  simDegreeOdd: string;
  simRadicandLabel: string;
  simRadicandPos: string;
  simRadicandNeg: string;
  simRadicandZero: string;
  simBtnTest: string;

  simZeroBadge: string;
  simZeroDesc: string;
  simEvenPosBadge: string;
  simEvenPosDesc: string;
  simEvenNegBadge: string;
  simEvenNegDesc: string;
  simOddPosBadge: string;
  simOddPosDesc: string;
  simOddNegBadge: string;
  simOddNegDesc: string;

  method1Tab: string;
  method1Badge: string;
  method1Title: string;

  method2Tab: string;
  method2Badge: string;
  method2Title: string;

  method3Tab: string;
  method3Badge: string;
  method3Title: string;
  method3Desc: string;
  method3ExTitle: string;
  method3Steps: string[];

  filterLabel: string;
  filterAll: string;
  colDegree: string;
  colRadicand: string;
  colForm: string;
  colRoot: string;
  colAction: string;
  btnTest: string;
  scrollHint: string;
}

export const NTH_INTERACTIVE_I18N: Record<string, NthInteractiveI18n> = {
  // 1. English (en)
  en: {
    badgeArbitrary: "Arbitrary Degree",
    badgeExact: "Exact & Decimal",
    badgeSteps: "Step-by-Step",
    badgeFree: "100% Free",
    quickTryLabel: "Quick Root Tests:",

    anatomyTag: "Interactive Anatomy Explorer",
    anatomyHint: "Click any component to inspect its mathematical role",
    anatomyDegree: "1. Root Index (Degree n)",
    anatomyDegreeDesc: "The small number in the upper left of the radical sign. Dictates how many identical factors multiply together. If omitted, it is universally assumed to be 2 (square root).",
    anatomySymbol: "2. Radical Sign & Vinculum",
    anatomySymbolDesc: "The mathematical operator symbol (√). The horizontal upper bar, known as the vinculum, groups the radicand underneath to specify root extraction.",
    anatomyRadicand: "3. Radicand (x)",
    anatomyRadicandDesc: "The number underneath the vinculum. When index n is even, the radicand must be non-negative (x ≥ 0) to yield a real-valued answer.",
    anatomyRoot: "4. Principal Root (y)",
    anatomyRootDesc: "The non-negative real answer. For ⁴√81, the principal root is 3 because 3⁴ = 81. While (-3)⁴ also equals 81, radical notation strictly designates the principal root.",

    simTitle: "Interactive Root Degree & Sign Tester",
    simSubtitle: "Select an index degree and radicand sign to see the mathematical outcome:",
    simDegreeLabel: "Root Degree (n):",
    simDegreeEven: "Even Index (n = 2, 4, 6...)",
    simDegreeOdd: "Odd Index (n = 3, 5, 7...)",
    simRadicandLabel: "Radicand Value (x):",
    simRadicandPos: "Positive (+x, e.g. +81)",
    simRadicandNeg: "Negative (-x, e.g. -81)",
    simRadicandZero: "Zero (x = 0)",
    simBtnTest: "Test This In Calculator Above",

    simZeroBadge: "Unique Real Zero",
    simZeroDesc: "For any root index n > 0, the nth root of 0 is always identically 0, because 0ⁿ = 0.",
    simEvenPosBadge: "2 Real Roots (Principal Root +)",
    simEvenPosDesc: "When the index is even and the radicand is positive, two real roots exist (±). The radical notation designates the positive principal root. Verified because 3⁴ = 81.",
    simEvenNegBadge: "No Real Roots (Complex Plane Only)",
    simEvenNegDesc: "Even powers of all real numbers are non-negative. No real value multiplied by itself an even number of times can equal a negative number. Solutions require imaginary numbers.",
    simOddPosBadge: "1 Unique Real Positive Root",
    simOddPosDesc: "Odd degree roots of positive numbers always yield a single real positive value. Verified because 2⁵ = 32.",
    simOddNegBadge: "1 Unique Real Negative Root",
    simOddNegDesc: "Odd degree roots of negative numbers are completely valid real numbers. Because (-2)⁵ = -32, the real fifth root is exactly -2.",

    method1Tab: "Method 1: Prime Factors",
    method1Badge: "Exact Simplification",
    method1Title: "Prime Factorization for Perfect Powers & Surds",

    method2Tab: "Method 2: Fractional Powers",
    method2Badge: "Spreadsheets & Digital Tools",
    method2Title: "Fractional Exponent Key Sequences",

    method3Tab: "Method 3: Newton-Raphson",
    method3Badge: "Numerical Algorithm",
    method3Title: "Newton-Raphson Iterative Method",
    method3Desc: "Computer processors compute arbitrary roots iteratively using the recurrence relation:",
    method3ExTitle: "Demonstration: Approximate ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Initial integer guess: Since 3³ = 27, choose x₀ = 3.",
      "Iteration 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iteration 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Verification: 3.1072³ = 29.999. In just two iterations, the algorithm attains 4 decimal places of accuracy."
    ],

    filterLabel: "Filter Degree:",
    filterAll: "All",
    colDegree: "Root Degree (n)",
    colRadicand: "Radicand (x)",
    colForm: "Mathematical Form",
    colRoot: "Principal Root",
    colAction: "Action",
    btnTest: "Test",
    scrollHint: "Scroll horizontally on smaller screens"
  },

  // 2. French (fr)
  fr: {
    badgeArbitrary: "Degré quelconque",
    badgeExact: "Exact et décimal",
    badgeSteps: "Étape par étape",
    badgeFree: "100% Gratuit",
    quickTryLabel: "Tests rapides :",

    anatomyTag: "Explorateur anatomique interactif",
    anatomyHint: "Cliquez sur un composant pour voir son rôle mathématique",
    anatomyDegree: "1. Indice de racine (Degré n)",
    anatomyDegreeDesc: "Le petit nombre placé en haut à gauche du radical. Indique le nombre de facteurs identiques à multiplier. S'il est omis, il vaut 2 par défaut (racine carrée).",
    anatomySymbol: "2. Symbole radical et vinculum",
    anatomySymbolDesc: "L'opérateur mathématique (√). La barre supérieure horizontale (vinculum) délimite les termes sous la racine.",
    anatomyRadicand: "3. Radicande (x)",
    anatomyRadicandDesc: "La valeur sous le radical. Lorsque l'indice n est pair, le radicande doit être positif ou nul (x ≥ 0) pour donner une solution réelle.",
    anatomyRoot: "4. Racine principale (y)",
    anatomyRootDesc: "Le résultat réel positif. Pour ⁴√81, la racine principale est 3 car 3⁴ = 81. Bien que (-3)⁴ = 81, le symbole désigne la racine principale.",

    simTitle: "Simulateur interactif de degré et signe",
    simSubtitle: "Sélectionnez un degré et le signe du radicande pour observer le résultat :",
    simDegreeLabel: "Degré de la racine (n) :",
    simDegreeEven: "Indice pair (n = 2, 4, 6...)",
    simDegreeOdd: "Indice impair (n = 3, 5, 7...)",
    simRadicandLabel: "Valeur du radicande (x) :",
    simRadicandPos: "Positif (+x, ex. +81)",
    simRadicandNeg: "Négatif (-x, ex. -81)",
    simRadicandZero: "Zéro (x = 0)",
    simBtnTest: "Tester dans le calculateur ci-dessus",

    simZeroBadge: "Zéro réel unique",
    simZeroDesc: "Pour tout indice n > 0, la racine n-ième de 0 vaut toujours 0, car 0ⁿ = 0.",
    simEvenPosBadge: "2 racines réelles (racine principale +)",
    simEvenPosDesc: "Lorsque l'indice est pair et le radicande positif, il existe deux racines réelles (±). Le symbole radical désigne la racine principale positive. Vérifié car 3⁴ = 81.",
    simEvenNegBadge: "Pas de racine réelle (nombres complexes uniquement)",
    simEvenNegDesc: "Les puissances paires de tous les nombres réels sont positives. Aucun nombre réel multiplié par lui-même un nombre pair de fois ne donne un résultat négatif. Les solutions sont complexes.",
    simOddPosBadge: "1 racine réelle positive unique",
    simOddPosDesc: "Les racines de degré impair de nombres positifs donnent toujours un résultat réel positif unique. Vérifié car 2⁵ = 32.",
    simOddNegBadge: "1 racine réelle négative unique",
    simOddNegDesc: "Les racines de degré impair de nombres négatifs sont des nombres réels parfaitement valides. Comme (-2)⁵ = -32, la racine cinquième réelle vaut exactement -2.",

    method1Tab: "Méthode 1 : Facteurs premiers",
    method1Badge: "Simplification exacte",
    method1Title: "Décomposition en facteurs premiers",

    method2Tab: "Méthode 2 : Exposants fractionnaires",
    method2Badge: "Tableurs et outils numériques",
    method2Title: "Saisie par exposants fractionnaires",

    method3Tab: "Méthode 3 : Newton-Raphson",
    method3Badge: "Algorithme numérique",
    method3Title: "Méthode itérative de Newton-Raphson",
    method3Desc: "Les processeurs calculent les racines d'ordre quelconque par approximations successives :",
    method3ExTitle: "Démonstration : Approximer ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Estimation initiale : Comme 3³ = 27, on choisit x₀ = 3.",
      "Itération 1 : x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Itération 2 : x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Vérification : 3.1072³ = 29.999. En deux itérations seulement, on obtient 4 décimales d'exactitude."
    ],

    filterLabel: "Filtrer par degré :",
    filterAll: "Tous",
    colDegree: "Degré de racine (n)",
    colRadicand: "Radicande (x)",
    colForm: "Forme mathématique",
    colRoot: "Racine principale",
    colAction: "Action",
    btnTest: "Tester",
    scrollHint: "Faites défiler horizontalement sur petit écran"
  },

  // 3. Spanish (es)
  es: {
    badgeArbitrary: "Grado arbitrario",
    badgeExact: "Exacto y decimal",
    badgeSteps: "Paso a paso",
    badgeFree: "100% Gratis",
    quickTryLabel: "Pruebas rápidas:",

    anatomyTag: "Explorador anatómico interactivo",
    anatomyHint: "Haga clic en cualquier componente para ver su función",
    anatomyDegree: "1. Índice de la raíz (Grado n)",
    anatomyDegreeDesc: "El número pequeño en la parte superior izquierda del radical. Indica cuántos factores idénticos se multiplican. Si se omite, se asume 2 (raíz cuadrada).",
    anatomySymbol: "2. Signo radical y vínculo",
    anatomySymbolDesc: "El operador matemático (√). La barra horizontal superior (vínculo) delimita el radicando sobre el cual se extrae la raíz.",
    anatomyRadicand: "3. Radicando (x)",
    anatomyRadicandDesc: "El valor bajo el radical. Con índice n par, debe ser no negativo (x ≥ 0) para arrojar una solución real.",
    anatomyRoot: "4. Raíz principal (y)",
    anatomyRootDesc: "El resultado real positivo. Para ⁴√81, la raíz principal es 3 porque 3⁴ = 81. Aunque (-3)⁴ = 81, el radical denota la raíz principal.",

    simTitle: "Probador interactivo de grado y signo",
    simSubtitle: "Seleccione un grado y el signo del radicando para ver el resultado:",
    simDegreeLabel: "Grado de la raíz (n):",
    simDegreeEven: "Índice par (n = 2, 4, 6...)",
    simDegreeOdd: "Índice impar (n = 3, 5, 7...)",
    simRadicandLabel: "Valor del radicando (x):",
    simRadicandPos: "Positivo (+x, ej. +81)",
    simRadicandNeg: "Negativo (-x, ej. -81)",
    simRadicandZero: "Cero (x = 0)",
    simBtnTest: "Probar en la calculadora arriba",

    simZeroBadge: "Cero real único",
    simZeroDesc: "Para cualquier índice n > 0, la raíz enésima de 0 es siempre 0, porque 0ⁿ = 0.",
    simEvenPosBadge: "2 raíces reales (raíz principal +)",
    simEvenPosDesc: "Cuando el índice es par y el radicando es positivo, existen dos raíces reales (±). La notación radical designa la raíz principal positiva. Verificado porque 3⁴ = 81.",
    simEvenNegBadge: "Sin raíces reales (solo en el plano complejo)",
    simEvenNegDesc: "Las potencias pares de números reales siempre son no negativas. Ningún número real multiplicado por sí mismo un número par de veces da un negativo. Requiere números imaginarios.",
    simOddPosBadge: "1 raíz real positiva única",
    simOddPosDesc: "Las raíces de grado impar de números positivos siempre producen un único valor real positivo. Verificado porque 2⁵ = 32.",
    simOddNegBadge: "1 raíz real negativa única",
    simOddNegDesc: "Las raíces de grado impar de números negativos son números reales válidos. Como (-2)⁵ = -32, la raíz quinta real es exactamente -2.",

    method1Tab: "Método 1: Factores primos",
    method1Badge: "Simplificación exacta",
    method1Title: "Descomposición en factores primos",

    method2Tab: "Método 2: Potencias fraccionarias",
    method2Badge: "Hojas de cálculo y herramientas digitales",
    method2Title: "Uso de exponentes fraccionarios",

    method3Tab: "Método 3: Newton-Raphson",
    method3Badge: "Algoritmo numérico",
    method3Title: "Método iterativo de Newton-Raphson",
    method3Desc: "Los procesadores calculan raíces arbitrarias mediante aproximaciones sucesivas:",
    method3ExTitle: "Demostración: Aproximar ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Estimación inicial: Dado que 3³ = 27, elegimos x₀ = 3.",
      "Iteración 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iteración 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Comprobación: 3.1072³ = 29.999. En solo dos iteraciones, se alcanzan 4 decimales de precisión."
    ],

    filterLabel: "Filtrar por grado:",
    filterAll: "Todos",
    colDegree: "Grado de raíz (n)",
    colRadicand: "Radicando (x)",
    colForm: "Forma matemática",
    colRoot: "Raíz principal",
    colAction: "Acción",
    btnTest: "Probar",
    scrollHint: "Deslice horizontalmente en pantallas pequeñas"
  },

  // 4. German (de)
  de: {
    badgeArbitrary: "Beliebiger Grad",
    badgeExact: "Exakt & Dezimal",
    badgeSteps: "Schritt für Schritt",
    badgeFree: "100% Kostenlos",
    quickTryLabel: "Schnelltests:",

    anatomyTag: "Interaktiver Anatomie-Explorer",
    anatomyHint: "Klicken Sie auf ein Element für mathematische Details",
    anatomyDegree: "1. Wurzelexponent (Grad n)",
    anatomyDegreeDesc: "Die kleine Zahl oben links am Wurzelzeichen. Bestimmt die Anzahl gleicher Faktoren. Ohne Angabe gilt 2 (Quadratwurzel).",
    anatomySymbol: "2. Wurzelzeichen & Vinculum",
    anatomySymbolDesc: "Das mathematische Symbol (√). Der obere Querstrich (Vinculum) fasst die Terme unter der Wurzel zusammen.",
    anatomyRadicand: "3. Radikand (x)",
    anatomyRadicandDesc: "Die Zahl unter dem Wurzelstrich. Bei geradem n muss der Radikand nichtnegativ sein (x ≥ 0) für reelle Lösungen.",
    anatomyRoot: "4. Hauptwurzel (y)",
    anatomyRootDesc: "Das nichtnegative reelle Ergebnis. Für ⁴√81 ist die Hauptwurzel 3, da 3⁴ = 81 ist.",

    simTitle: "Interaktiver Grad- & Vorzeichentester",
    simSubtitle: "Wählen Sie Wurzelgrad und Vorzeichen des Radikanden:",
    simDegreeLabel: "Wurzelgrad (n):",
    simDegreeEven: "Gerader Exponent (n = 2, 4, 6...)",
    simDegreeOdd: "Ungerader Exponent (n = 3, 5, 7...)",
    simRadicandLabel: "Radikand (x):",
    simRadicandPos: "Positiv (+x, z. B. +81)",
    simRadicandNeg: "Negativ (-x, z. B. -81)",
    simRadicandZero: "Null (x = 0)",
    simBtnTest: "Im Rechner oben testen",

    simZeroBadge: "Eindeutige reale Null",
    simZeroDesc: "Für jeden Wurzelgrad n > 0 ist die n-te Wurzel aus 0 stets 0, da 0ⁿ = 0.",
    simEvenPosBadge: "2 reelle Wurzeln (Hauptwurzel +)",
    simEvenPosDesc: "Bei geradem Wurzelexponent und positivem Radikanden gibt es zwei reelle Wurzeln (±). Das Wurzelzeichen bezeichnet die positive Hauptwurzel. Bestätigt: 3⁴ = 81.",
    simEvenNegBadge: "Keine reellen Wurzeln (nur komplexe Zahlen)",
    simEvenNegDesc: "Gerade Potenzen reeller Zahlen sind niemals negativ. Keine reelle Zahl ergibt bei gerader Potenzierung einen negativen Wert. Lösungen erfordern imaginäre Zahlen.",
    simOddPosBadge: "1 eindeutige reelle positive Wurzel",
    simOddPosDesc: "Ungerade Wurzeln aus positiven Zahlen ergeben stets einen einzigen reellen positiven Wert. Bestätigt: 2⁵ = 32.",
    simOddNegBadge: "1 eindeutige reelle negative Wurzel",
    simOddNegDesc: "Ungerade Wurzeln aus negativen Zahlen sind vollkommen gültige reelle Zahlen. Da (-2)⁵ = -32 ist, ist die reelle fünfte Wurzel exakt -2.",

    method1Tab: "Methode 1: Primfaktoren",
    method1Badge: "Exakte Vereinfachung",
    method1Title: "Primfaktorzerlegung für Potenzen und Wurzeln",

    method2Tab: "Methode 2: Gebrochene Potenzen",
    method2Badge: "Tabellenkalkulation und digitale Tools",
    method2Title: "Eingabe mit gebrochenen Exponenten",

    method3Tab: "Methode 3: Newton-Raphson",
    method3Badge: "Numerischer Algorithmus",
    method3Title: "Iteratives Newton-Raphson-Verfahren",
    method3Desc: "Prozessoren berechnen beliebige Wurzeln iterativ über die Rekursionsformel:",
    method3ExTitle: "Demonstration: Annäherung von ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Startwert wählen: Da 3³ = 27 ist, wählen wir x₀ = 3.",
      "Iteration 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iteration 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Prüfung: 3.1072³ = 29.999. In nur zwei Schritten erreicht das Verfahren 4 Nachkommastellen Genauigkeit."
    ],

    filterLabel: "Nach Grad filtern:",
    filterAll: "Alle",
    colDegree: "Wurzelgrad (n)",
    colRadicand: "Radikand (x)",
    colForm: "Mathematische Form",
    colRoot: "Hauptwurzel",
    colAction: "Aktion",
    btnTest: "Testen",
    scrollHint: "Auf kleinen Bildschirmen horizontal scrollen"
  },

  // 5. Italian (it)
  it: {
    badgeArbitrary: "Grado arbitrario",
    badgeExact: "Esatto e decimale",
    badgeSteps: "Passo dopo passo",
    badgeFree: "100% Gratuito",
    quickTryLabel: "Test rapidi:",

    anatomyTag: "Esploratore anatomico interattivo",
    anatomyHint: "Fai clic su un elemento per scoprire il ruolo matematico",
    anatomyDegree: "1. Indice della radice (Grado n)",
    anatomyDegreeDesc: "Il piccolo numero in alto a sinistra del segno di radice. Indica quanti fattori identici moltiplicare. Se omesso, vale 2 (radice quadrata).",
    anatomySymbol: "2. Segno di radice e vincolo",
    anatomySymbolDesc: "L'operatore matematico (√). La barra orizzontale superiore (vincolo) raggruppa il radicando sottostante.",
    anatomyRadicand: "3. Radicando (x)",
    anatomyRadicandDesc: "Il valore sotto il radicale. Con indice n pari, deve essere non negativo (x ≥ 0) per avere soluzioni reali.",
    anatomyRoot: "4. Radice principale (y)",
    anatomyRootDesc: "Il risultato reale positivo. Per ⁴√81, la radice principale è 3 poiché 3⁴ = 81.",

    simTitle: "Tester interattivo di grado e segno",
    simSubtitle: "Seleziona indice e segno del radicando per vedere il risultato:",
    simDegreeLabel: "Grado della radice (n):",
    simDegreeEven: "Indice pari (n = 2, 4, 6...)",
    simDegreeOdd: "Indice dispari (n = 3, 5, 7...)",
    simRadicandLabel: "Valore del radicando (x):",
    simRadicandPos: "Positivo (+x, es. +81)",
    simRadicandNeg: "Negativo (-x, es. -81)",
    simRadicandZero: "Zero (x = 0)",
    simBtnTest: "Prova nella calcolatrice sopra",

    simZeroBadge: "Zero reale unico",
    simZeroDesc: "Per qualsiasi indice n > 0, la radice ennesima di 0 è sempre 0, poiché 0ⁿ = 0.",
    simEvenPosBadge: "2 radici reali (radice principale +)",
    simEvenPosDesc: "Quando l'indice è pari e il radicando è positivo, esistono due radici reali (±). La notazione radicale indica la radice principale positiva. Verificato: 3⁴ = 81.",
    simEvenNegBadge: "Nessuna radice reale (solo nel piano complesso)",
    simEvenNegDesc: "Le potenze pari di tutti i numeri reali sono non negative. Nessun numero reale elevato a potenza pari può dare un numero negativo. Le soluzioni appartengono ai numeri complessi.",
    simOddPosBadge: "1 radice reale positiva unica",
    simOddPosDesc: "Le radici di grado dispari di numeri positivi producono sempre un valore reale positivo univoco. Verificato: 2⁵ = 32.",
    simOddNegBadge: "1 radice reale negativa unica",
    simOddNegDesc: "Le radici di grado dispari di numeri negativi sono numeri reali validi. Poiché (-2)⁵ = -32, la radice quinta reale è esattamente -2.",

    method1Tab: "Metodo 1: Fattori primi",
    method1Badge: "Semplificazione esatta",
    method1Title: "Scomposizione in fattori primi",

    method2Tab: "Metodo 2: Esponenti frazionari",
    method2Badge: "Fogli di calcolo e strumenti digitali",
    method2Title: "Calcolo tramite esponenti frazionari",

    method3Tab: "Metodo 3: Newton-Raphson",
    method3Badge: "Algoritmo numerico",
    method3Title: "Metodo iterativo di Newton-Raphson",
    method3Desc: "I processori calcolano radici arbitrarie in modo iterativo usando la ricorrenza:",
    method3ExTitle: "Dimostrazione: Approssimare ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Stima iniziale: Dato che 3³ = 27, scegliamo x₀ = 3.",
      "Iterazione 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iterazione 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Verifica: 3.1072³ = 29.999. In sole due iterazioni si raggiungono 4 cifre decimali esatte."
    ],

    filterLabel: "Filtra per grado:",
    filterAll: "Tutti",
    colDegree: "Grado radice (n)",
    colRadicand: "Radicando (x)",
    colForm: "Forma matematica",
    colRoot: "Radice principale",
    colAction: "Azione",
    btnTest: "Prova",
    scrollHint: "Scorri orizzontalmente su schermi piccoli"
  },

  // 6. Portuguese (pt)
  pt: {
    badgeArbitrary: "Grau arbitrário",
    badgeExact: "Exato e decimal",
    badgeSteps: "Passo a passo",
    badgeFree: "100% Gratuito",
    quickTryLabel: "Testes rápidos:",

    anatomyTag: "Explorador anatômico interativo",
    anatomyHint: "Clique em um componente para ver sua função matemática",
    anatomyDegree: "1. Índice da raiz (Grau n)",
    anatomyDegreeDesc: "O número pequeno no canto superior esquerdo do radical. Indica quantos fatores idênticos se multiplicam. Omitido, vale 2 (raiz quadrada).",
    anatomySymbol: "2. Símbolo radical e vínculo",
    anatomySymbolDesc: "O operador matemático (√). A barra horizontal superior (vínculo) agrupa os termos sob o radical.",
    anatomyRadicand: "3. Radicando (x)",
    anatomyRadicandDesc: "O valor sob o radical. Com índice n par, deve ser não-negativo (x ≥ 0) para fornecer resposta real.",
    anatomyRoot: "4. Raiz principal (y)",
    anatomyRootDesc: "A resposta real positiva. Para ⁴√81, a raiz principal é 3 porque 3⁴ = 81.",

    simTitle: "Testador interativo de grau e sinal",
    simSubtitle: "Selecione o grau e o sinal do radicando para ver o resultado:",
    simDegreeLabel: "Grau da raiz (n):",
    simDegreeEven: "Índice par (n = 2, 4, 6...)",
    simDegreeOdd: "Índice ímpar (n = 3, 5, 7...)",
    simRadicandLabel: "Valor do radicando (x):",
    simRadicandPos: "Positivo (+x, ex. +81)",
    simRadicandNeg: "Negativo (-x, ex. -81)",
    simRadicandZero: "Zero (x = 0)",
    simBtnTest: "Testar na calculadora acima",

    simZeroBadge: "Zero real único",
    simZeroDesc: "Para qualquer índice n > 0, a raiz enésima de 0 é sempre 0, pois 0ⁿ = 0.",
    simEvenPosBadge: "2 raízes reais (raiz principal +)",
    simEvenPosDesc: "Quando o índice é par e o radicando é positivo, existem duas raízes reais (±). A notação radical indica a raiz principal positiva. Verificado: 3⁴ = 81.",
    simEvenNegBadge: "Sem raízes reais (apenas no plano complexo)",
    simEvenNegDesc: "Potências pares de números reais são sempre não-negativas. Nenhum número real multiplicado por si mesmo um número par de vezes resulta em negativo. Requer números imaginários.",
    simOddPosBadge: "1 raiz real positiva única",
    simOddPosDesc: "Raízes de grau ímpar de números positivos produzem sempre um único valor real positivo. Verificado: 2⁵ = 32.",
    simOddNegBadge: "1 raiz real negativa única",
    simOddNegDesc: "Raízes de grau ímpar de números negativos são números reais válidos. Como (-2)⁵ = -32, a raiz quinta real é exatamente -2.",

    method1Tab: "Método 1: Fatores primos",
    method1Badge: "Simplificação exata",
    method1Title: "Fatoração prima para potências e radicais",

    method2Tab: "Método 2: Expoentes fracionários",
    method2Badge: "Planilhas e ferramentas digitais",
    method2Title: "Cálculo por expoentes fracionários",

    method3Tab: "Método 3: Newton-Raphson",
    method3Badge: "Algoritmo numérico",
    method3Title: "Método iterativo de Newton-Raphson",
    method3Desc: "Processadores calculam raízes arbitrárias iterativamente através da fórmula de recorrência:",
    method3ExTitle: "Demonstração: Aproximar ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Estimativa inicial: Como 3³ = 27, escolhemos x₀ = 3.",
      "Iteração 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iteração 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Verificação: 3.1072³ = 29.999. Em duas iterações, o método atinge 4 casas decimais de precisão."
    ],

    filterLabel: "Filtrar por grau:",
    filterAll: "Todos",
    colDegree: "Grau da raiz (n)",
    colRadicand: "Radicando (x)",
    colForm: "Forma matemática",
    colRoot: "Raiz principal",
    colAction: "Ação",
    btnTest: "Testar",
    scrollHint: "Role horizontalmente em telas menores"
  },

  // 7. Russian (ru)
  ru: {
    badgeArbitrary: "Любая степень",
    badgeExact: "Точно и в десятичных",
    badgeSteps: "Пошагово",
    badgeFree: "100% Бесплатно",
    quickTryLabel: "Быстрые примеры:",

    anatomyTag: "Интерактивный анатомический разбор",
    anatomyHint: "Нажмите на элемент для просмотра математического описания",
    anatomyDegree: "1. Показатель корня (Степень n)",
    anatomyDegreeDesc: "Число в верхнем левом углу радикала. Определяет число одинаковых сомножителей. Если опущено, равно 2 (квадратный корень).",
    anatomySymbol: "2. Знак корня и винкулум",
    anatomySymbolDesc: "Математический символ (√). Верхняя горизонтальная черта (винкулум) объединяет подкоренное выражение.",
    anatomyRadicand: "3. Подкоренное число (x)",
    anatomyRadicandDesc: "Число под знаком корня. При четном n должно быть неотрицательным (x ≥ 0) для действительного ответа.",
    anatomyRoot: "4. Главный корень (y)",
    anatomyRootDesc: "Неотрицательный вещественный результат. Для ⁴√81 главный корень равен 3, так как 3⁴ = 81.",

    simTitle: "Интерактивный симулятор степени и знака",
    simSubtitle: "Выберите показатель корня и знак подкоренного числа:",
    simDegreeLabel: "Степень корня (n):",
    simDegreeEven: "Четная степень (n = 2, 4, 6...)",
    simDegreeOdd: "Нечетная степень (n = 3, 5, 7...)",
    simRadicandLabel: "Подкоренное число (x):",
    simRadicandPos: "Положительное (+x, напр. +81)",
    simRadicandNeg: "Отрицательное (-x, напр. -81)",
    simRadicandZero: "Ноль (x = 0)",
    simBtnTest: "Проверить в калькуляторе выше",

    simZeroBadge: "Единственный вещественный ноль",
    simZeroDesc: "Для любого индекса n > 0 корень n-й степени из 0 всегда равен 0, так как 0ⁿ = 0.",
    simEvenPosBadge: "2 вещественных корня (главный корень +)",
    simEvenPosDesc: "Если показатель четный, а подкоренное число положительное, существуют два вещественных корня (±). Знак радикала обозначает положительный главный корень. Проверка: 3⁴ = 81.",
    simEvenNegBadge: "Нет вещественных корней (только комплексные числа)",
    simEvenNegDesc: "Четные степени всех вещественных чисел неотрицательны. Никакое вещественное число в четной степени не дает отрицательный результат. Решения лежат в комплексной плоскости.",
    simOddPosBadge: "1 единственный положительный вещественный корень",
    simOddPosDesc: "Корень нечетной степени из положительного числа всегда дает единственное вещественное положительное значение. Проверка: 2⁵ = 32.",
    simOddNegBadge: "1 единственный отрицательный вещественный корень",
    simOddNegDesc: "Корень нечетной степени из отрицательного числа является действительным числом. Поскольку (-2)⁵ = -32, пятый корень равен -2.",

    method1Tab: "Метод 1: Простые множители",
    method1Badge: "Точное упрощение",
    method1Title: "Разложение на простые множители",

    method2Tab: "Метод 2: Дробные степени",
    method2Badge: "Таблицы и цифровые инструменты",
    method2Title: "Вычисление через дробные степени",

    method3Tab: "Метод 3: Ньютон-Рафсон",
    method3Badge: "Численный алгоритм",
    method3Title: "Итерационный метод Ньютона-Рафсона",
    method3Desc: "Процессоры вычисляют произвольные корни итеративно по рекуррентной формуле:",
    method3ExTitle: "Пример: Приближение ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Начальное приближение: Так как 3³ = 27, берем x₀ = 3.",
      "Итерация 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Итерация 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Проверка: 3.1072³ = 29.999. За две итерации достигается точность до 4 знаков."
    ],

    filterLabel: "Фильтр по степени:",
    filterAll: "Все",
    colDegree: "Степень (n)",
    colRadicand: "Число (x)",
    colForm: "Математическая форма",
    colRoot: "Главный корень",
    colAction: "Действие",
    btnTest: "Тест",
    scrollHint: "Прокрутите горизонтально на небольших экранах"
  },

  // 8. Polish (pl)
  pl: {
    badgeArbitrary: "Dowolny stopień",
    badgeExact: "Dokładny i dziesiętny",
    badgeSteps: "Krok po kroku",
    badgeFree: "100% Za darmo",
    quickTryLabel: "Szybkie testy:",

    anatomyTag: "Interaktywny przewodnik po zapisie",
    anatomyHint: "Kliknij dowolny element, aby poznać jego znaczenie",
    anatomyDegree: "1. Stopień pierwiastka (n)",
    anatomyDegreeDesc: "Mała liczba w lewym górnym rogu symbolu. Określa liczbę identycznych czynników. Domyślnie wynosi 2 (pierwiastek kwadratowy).",
    anatomySymbol: "2. Znak pierwiastka i vinculum",
    anatomySymbolDesc: "Znak matematyczny (√). Górna pozioma kreska (vinculum) obejmuje wyrażenie podpierwiastkowe.",
    anatomyRadicand: "3. Liczba podpierwiastkowa (x)",
    anatomyRadicandDesc: "Wartość pod kreską. Dla parzystego n musi być nieujemna (x ≥ 0), aby wynik był liczbą rzeczywistą.",
    anatomyRoot: "4. Pierwiastek główny (y)",
    anatomyRootDesc: "Nieujemna wartość rzeczywista. Dla ⁴√81 pierwiastek główny wynosi 3, ponieważ 3⁴ = 81.",

    simTitle: "Symulator stopnia i znaku",
    simSubtitle: "Wybierz stopień pierwiastka i znak liczby podpierwiastkowej:",
    simDegreeLabel: "Stopień pierwiastka (n):",
    simDegreeEven: "Stopień parzysty (n = 2, 4, 6...)",
    simDegreeOdd: "Stopień nieparzysty (n = 3, 5, 7...)",
    simRadicandLabel: "Liczba podpierwiastkowa (x):",
    simRadicandPos: "Dodatnia (+x, np. +81)",
    simRadicandNeg: "Ujemna (-x, np. -81)",
    simRadicandZero: "Zero (x = 0)",
    simBtnTest: "Przetestuj w kalkulatorze powyżej",

    simZeroBadge: "Jednoznaczne zero rzeczywiste",
    simZeroDesc: "Dla dowolnego stopnia n > 0 pierwiastek n-tego stopnia z 0 zawsze wynosi 0, bo 0ⁿ = 0.",
    simEvenPosBadge: "2 pierwiastki rzeczywiste (główny +)",
    simEvenPosDesc: "Gdy stopień jest parzysty, a liczba podpierwiastkowa dodatnia, istnieją dwa pierwiastki rzeczywiste (±). Symbol oznacza pierwiastek główny. Sprawdzenie: 3⁴ = 81.",
    simEvenNegBadge: "Brak pierwiastków rzeczywistych (tylko liczby zespolone)",
    simEvenNegDesc: "Parzyste potęgi liczb rzeczywistych są nieujemne. Żadna liczba rzeczywista podniesiona do parzystej potęgi nie da liczby ujemnej. Rozwiązania wymagają liczb urojonych.",
    simOddPosBadge: "1 jednoznaczny dodatni pierwiastek rzeczywisty",
    simOddPosDesc: "Pierwiastki nieparzystego stopnia z liczb dodatnich zawsze dają dokładnie jedną dodatnią liczbę rzeczywistą. Sprawdzenie: 2⁵ = 32.",
    simOddNegBadge: "1 jednoznaczny ujemny pierwiastek rzeczywisty",
    simOddNegDesc: "Pierwiastki nieparzystego stopnia z liczb ujemnych są prawidłowymi liczbami rzeczywistymi. Ponieważ (-2)⁵ = -32, pierwiastek wynosi dokładnie -2.",

    method1Tab: "Metoda 1: Czynniki pierwsze",
    method1Badge: "Dokładne uproszczenie",
    method1Title: "Rozkład na czynniki pierwsze",

    method2Tab: "Metoda 2: Potęgi ułamkowe",
    method2Badge: "Arkusze kalkulacyjne i narzędzia cyfrowe",
    method2Title: "Obliczanie przez potęgi ułamkowe",

    method3Tab: "Metoda 3: Newton-Raphson",
    method3Badge: "Algorytm numeryczny",
    method3Title: "Metoda iteracyjna Newtona-Raphsona",
    method3Desc: "Procesory obliczają dowolne pierwiastki iteracyjnie za pomocą wzoru rekurencyjnego:",
    method3ExTitle: "Przykład: Przybliżenie ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Wybór punktu startowego: Ponieważ 3³ = 27, przyjmujemy x₀ = 3.",
      "Iteracja 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iteracja 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Sprawdzenie: 3.1072³ = 29.999. W zaledwie dwóch krokach osiągamy 4 miejsca po przecinku."
    ],

    filterLabel: "Filtruj stopień:",
    filterAll: "Wszystkie",
    colDegree: "Stopień (n)",
    colRadicand: "Liczba (x)",
    colForm: "Postać matematyczna",
    colRoot: "Pierwiastek główny",
    colAction: "Działanie",
    btnTest: "Test",
    scrollHint: "Przewiń poziomo na małych ekranach"
  },

  // 9. Swedish (sv)
  sv: {
    badgeArbitrary: "Valfri grad",
    badgeExact: "Exakt och decimal",
    badgeSteps: "Steg för steg",
    badgeFree: "100% Gratis",
    quickTryLabel: "Snabbtest:",

    anatomyTag: "Interaktiv anatomiutforskare",
    anatomyHint: "Klicka på en komponent för matematisk förklaring",
    anatomyDegree: "1. Rotindex (Grad n)",
    anatomyDegreeDesc: "Det lilla talet uppe till vänster om rottecknet. Anger antalet identiska faktorer. Utelämnat tolkas det som 2 (kvadratrot).",
    anatomySymbol: "2. Rottecken och vinculum",
    anatomySymbolDesc: "Matematiska operatorn (√). Den övre horisontella linjen (vinculum) grupperar talet under roten.",
    anatomyRadicand: "3. Radikand (x)",
    anatomyRadicandDesc: "Talet under rottecknet. Vid jämnt n måste radikanden vara icke-negativ (x ≥ 0) för reella lösningar.",
    anatomyRoot: "4. Huvudrot (y)",
    anatomyRootDesc: "Det icke-negativa reella svaret. För ⁴√81 är huvudroten 3 eftersom 3⁴ = 81.",

    simTitle: "Simulator för rotgrad och tecken",
    simSubtitle: "Välj rotgrad och radikandens tecken för att se resultatet:",
    simDegreeLabel: "Rotgrad (n):",
    simDegreeEven: "Jämnt index (n = 2, 4, 6...)",
    simDegreeOdd: "Udd index (n = 3, 5, 7...)",
    simRadicandLabel: "Radikand (x):",
    simRadicandPos: "Positiv (+x, t.ex. +81)",
    simRadicandNeg: "Negativ (-x, t.ex. -81)",
    simRadicandZero: "Noll (x = 0)",
    simBtnTest: "Testa i kalkylatorn ovan",

    simZeroBadge: "Unik reell nolla",
    simZeroDesc: "För varje rotindex n > 0 är den n:te roten ur 0 alltid 0, eftersom 0ⁿ = 0.",
    simEvenPosBadge: "2 reella rötter (huvudrot +)",
    simEvenPosDesc: "När indexet är jämnt och radikanden är positiv finns två reella rötter (±). Radikaltecknet anger den positiva huvuden roten. Verifierat: 3⁴ = 81.",
    simEvenNegBadge: "Inga reella rötter (endast komplexa tal)",
    simEvenNegDesc: "Jämna potenser av reella tal är icke-negativa. Inget reellt tal multiplicerat med sig självt ett jämnt antal gånger kan bli negativt. Lösningar kräver imaginära tal.",
    simOddPosBadge: "1 unik reell positiv rot",
    simOddPosDesc: "Udda rötter ur positiva tal ger alltid ett unikt reellt positivt värde. Verifierat: 2⁵ = 32.",
    simOddNegBadge: "1 unik reell negativ rot",
    simOddNegDesc: "Udda rötter ur negativa tal är fullt giltiga reella tal. Eftersom (-2)⁵ = -32 är den reella femteroten exakt -2.",

    method1Tab: "Metod 1: Primfaktorer",
    method1Badge: "Exakt förenkling",
    method1Title: "Primtalsfaktorisering för potenser och rötter",

    method2Tab: "Metod 2: Bråkpotenser",
    method2Badge: "Kalkylark och digitala verktyg",
    method2Title: "Beräkning med bråkpotenser",

    method3Tab: "Metod 3: Newton-Raphson",
    method3Badge: "Numerisk algoritm",
    method3Title: "Newton-Raphsons iterativa metod",
    method3Desc: "Datorer beräknar godtyckliga rötter iterativt med hjälp av rekursionsformeln:",
    method3ExTitle: "Demonstration: Approximera ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Startgissning: Eftersom 3³ = 27 väljer vi x₀ = 3.",
      "Iteration 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iteration 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Verifiering: 3.1072³ = 29.999. På bara två steg uppnås 4 decimalers precision."
    ],

    filterLabel: "Filtrera grad:",
    filterAll: "Alla",
    colDegree: "Rotgrad (n)",
    colRadicand: "Radikand (x)",
    colForm: "Matematisk form",
    colRoot: "Huvudrot",
    colAction: "Åtgärd",
    btnTest: "Testa",
    scrollHint: "Scrolla horisontellt på mindre skärmar"
  },

  // 10. Turkish (tr)
  tr: {
    badgeArbitrary: "İsteğe Bağlı Derece",
    badgeExact: "Tam ve Ondalık",
    badgeSteps: "Adım Adım",
    badgeFree: "%100 Ücretsiz",
    quickTryLabel: "Hızlı Denemeler:",

    anatomyTag: "İnteraktif Anatomi Keşfi",
    anatomyHint: "Matematiksel rolünü görmek için bir bileşene tıklayın",
    anatomyDegree: "1. Kök Derecesi (n)",
    anatomyDegreeDesc: "Kök simgesinin sol üstündeki küçük sayı. Kaç özdeş çarpan gerektiğini belirtir. Yazılmazsa 2 kabul edilir (karekök).",
    anatomySymbol: "2. Kök İşareti ve Vinculum",
    anatomySymbolDesc: "Matematiksel operatör (√). Üstteki yatay çizgi (vinculum) kök altındaki ifadeyi gruplar.",
    anatomyRadicand: "3. Kök İçi Sayı (x)",
    anatomyRadicandDesc: "Kökün altındaki sayı. Çift n derecesinde reel sonuç için negatif olmamalıdır (x ≥ 0).",
    anatomyRoot: "4. Asıl Kök (y)",
    anatomyRootDesc: "Negatif olmayan gerçel sonuç. ⁴√81 için asıl kök 3'tür çünkü 3⁴ = 81.",

    simTitle: "İnteraktif Kök Derecesi ve İşaret Testi",
    simSubtitle: "Sonucu görmek için dereceyi ve kök içi işaretini seçin:",
    simDegreeLabel: "Kök Derecesi (n):",
    simDegreeEven: "Çift Derece (n = 2, 4, 6...)",
    simDegreeOdd: "Tek Derece (n = 3, 5, 7...)",
    simRadicandLabel: "Kök İçi Değer (x):",
    simRadicandPos: "Pozitif (+x, örn. +81)",
    simRadicandNeg: "Negatif (-x, örn. -81)",
    simRadicandZero: "Sıfır (x = 0)",
    simBtnTest: "Yukarıdaki Hesaplayıcıda Dene",

    simZeroBadge: "Benzersiz Gerçel Sıfır",
    simZeroDesc: "n > 0 olan her kök derecesi için 0'ın n. kökü her zaman 0'dır, çünkü 0ⁿ = 0.",
    simEvenPosBadge: "2 Gerçel Kök (Asıl Kök +)",
    simEvenPosDesc: "Derece çift ve kök içi pozitif olduğunda, iki gerçel kök vardır (±). Kök simgesi pozitif asıl kökü belirtir. Doğrulama: 3⁴ = 81.",
    simEvenNegBadge: "Gerçel Kök Yok (Yalnızca Karmaşık Düzlem)",
    simEvenNegDesc: "Tüm gerçel sayıların çift kuvvetleri negatif değildir. Çift sayıda kendisiyle çarpılan hiçbir gerçel sayı negatif olamaz. Çözümler karmaşık sayılar gerektirir.",
    simOddPosBadge: "1 Benzersiz Gerçel Pozitif Kök",
    simOddPosDesc: "Pozitif sayıların tek dereceli kökleri her zaman tek bir gerçel pozitif değer verir. Doğrulama: 2⁵ = 32.",
    simOddNegBadge: "1 Benzersiz Gerçel Negatif Kök",
    simOddNegDesc: "Negatif sayıların tek dereceli kökleri geçerli gerçel sayılardır. (-2)⁵ = -32 olduğundan, gerçel beşinci kök tam olarak -2'dir.",

    method1Tab: "Yöntem 1: Asal Çarpanlar",
    method1Badge: "Tam Sadeleştirme",
    method1Title: "Tam Kuvvetler için Asal Çarpanlara Ayırma",

    method2Tab: "Yöntem 2: Kesirli Kuvvetler",
    method2Badge: "Hesap Tabloları ve Dijital Araçlar",
    method2Title: "Kesirli Kuvvet Tuş Dizilimleri",

    method3Tab: "Yöntem 3: Newton-Raphson",
    method3Badge: "Sayısal Algoritma",
    method3Title: "Newton-Raphson Yinelemeli Yöntemi",
    method3Desc: "Bilgisayar işlemcileri rastgele kökleri yinelemeli olarak şu formülle hesaplar:",
    method3ExTitle: "Örnek: ∛30 değerine yaklaşım (n = 3, A = 30)",
    method3Steps: [
      "Başlangıç tahmini: 3³ = 27 olduğundan x₀ = 3 seçilir.",
      "Yineleme 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Yineleme 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Doğrulama: 3.1072³ = 29.999. Yalnızca iki adımda 4 basamaklı hassasiyet elde edilir."
    ],

    filterLabel: "Dereceye Göre Filtrele:",
    filterAll: "Tümü",
    colDegree: "Kök Derecesi (n)",
    colRadicand: "Kök İçi (x)",
    colForm: "Matematiksel Biçim",
    colRoot: "Asıl Kök",
    colAction: "İşlem",
    btnTest: "Dene",
    scrollHint: "Küçük ekranlarda yatay kaydırın"
  },

  // 11. Indonesian (id)
  id: {
    badgeArbitrary: "Derajat Bebas",
    badgeExact: "Tepat & Desimal",
    badgeSteps: "Langkah demi Langkah",
    badgeFree: "100% Gratis",
    quickTryLabel: "Uji Cepat:",

    anatomyTag: "Penjelajah Anatomi Interaktif",
    anatomyHint: "Klik komponen mana saja untuk melihat peran matematisnya",
    anatomyDegree: "1. Indeks Akar (Derajat n)",
    anatomyDegreeDesc: "Angka kecil di kiri atas tanda akar. Menentukan jumlah faktor identik. Jika tidak ditulis, bernilai 2 (akar kuadrat).",
    anatomySymbol: "2. Tanda Akar & Vinculum",
    anatomySymbolDesc: "Simbol operator matematika (√). Garis horizontal atas (vinculum) mengelompokkan radikan di bawahnya.",
    anatomyRadicand: "3. Radikan (x)",
    anatomyRadicandDesc: "Nilai di bawah tanda akar. Jika indeks n genap, nilainya harus non-negatif (x ≥ 0) untuk menghasilkan solusi nyata.",
    anatomyRoot: "4. Akar Utama (y)",
    anatomyRootDesc: "Hasil nyata non-negatif. Untuk ⁴√81, akar utamanya adalah 3 karena 3⁴ = 81.",

    simTitle: "Penguji Interaktif Derajat dan Tanda",
    simSubtitle: "Pilih derajat indeks dan tanda radikan untuk melihat hasilnya:",
    simDegreeLabel: "Derajat Akar (n):",
    simDegreeEven: "Indeks Genap (n = 2, 4, 6...)",
    simDegreeOdd: "Indeks Ganjil (n = 3, 5, 7...)",
    simRadicandLabel: "Nilai Radikan (x):",
    simRadicandPos: "Positif (+x, mis. +81)",
    simRadicandNeg: "Negatif (-x, mis. -81)",
    simRadicandZero: "Nol (x = 0)",
    simBtnTest: "Uji di Kalkulator di Atas",

    simZeroBadge: "Nol Nyata Unik",
    simZeroDesc: "Untuk setiap indeks akar n > 0, akar ke-n dari 0 selalu 0, karena 0ⁿ = 0.",
    simEvenPosBadge: "2 Akar Nyata (Akar Utama +)",
    simEvenPosDesc: "Ketika indeks genap dan radikan positif, terdapat dua akar nyata (±). Notasi radikal menunjukkan akar utama positif. Terverifikasi: 3⁴ = 81.",
    simEvenNegBadge: "Tidak Ada Akar Nyata (Hanya Bidang Kompleks)",
    simEvenNegDesc: "Pangkat genap dari semua bilangan nyata bernilai non-negatif. Tidak ada bilangan nyata yang dipangkatkan genap menghasilkan nilai negatif. Solusi membutuhkan bilangan imajiner.",
    simOddPosBadge: "1 Akar Nyata Positif Unik",
    simOddPosDesc: "Akar derajat ganjil dari bilangan positif selalu menghasilkan satu nilai nyata positif. Terverifikasi: 2⁵ = 32.",
    simOddNegBadge: "1 Akar Nyata Negatif Unik",
    simOddNegDesc: "Akar derajat ganjil dari bilangan negatif adalah bilangan nyata yang sah. Karena (-2)⁵ = -32, akar kelima nyata tepat -2.",

    method1Tab: "Metode 1: Faktor Prima",
    method1Badge: "Penyederhanaan Tepat",
    method1Title: "Faktorisasi Prima untuk Pangkat Sempurna",

    method2Tab: "Metode 2: Eksponen Pecahan",
    method2Badge: "Lembar Sebar dan Alat Digital",
    method2Title: "Urutan Tombol Eksponen Pecahan",

    method3Tab: "Metode 3: Newton-Raphson",
    method3Badge: "Algoritma Numerik",
    method3Title: "Metode Iterasi Newton-Raphson",
    method3Desc: "Prosesor komputer menghitung akar sembarang secara iteratif dengan rumus:",
    method3ExTitle: "Demonstrasi: Pendekatan ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Tebakan awal: Karena 3³ = 27, pilih x₀ = 3.",
      "Iterasi 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Iterasi 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Verifikasi: 3.1072³ = 29.999. Hanya dalam dua langkah diperoleh akurasi 4 desimal."
    ],

    filterLabel: "Filter Derajat:",
    filterAll: "Semua",
    colDegree: "Derajat Akar (n)",
    colRadicand: "Radikan (x)",
    colForm: "Bentuk Matematika",
    colRoot: "Akar Utama",
    colAction: "Aksi",
    btnTest: "Uji",
    scrollHint: "Geser horizontal pada layar kecil"
  },

  // 12. Malay (ms)
  ms: {
    badgeArbitrary: "Darjah Bebas",
    badgeExact: "Tepat & Perpuluhan",
    badgeSteps: "Langkah demi Langkah",
    badgeFree: "100% Percuma",
    quickTryLabel: "Ujian Pantas:",

    anatomyTag: "Penjelajah Anatomi Interaktif",
    anatomyHint: "Klik mana-mana komponen untuk melihat peranan matematiknya",
    anatomyDegree: "1. Indeks Punca (Darjah n)",
    anatomyDegreeDesc: "Nombor kecil di sebelah kiri atas simbol punca. Menentukan bilangan faktor seiras. Jika ditinggalkan, nilainya 2 (punca kuasa dua).",
    anatomySymbol: "2. Simbol Punca & Vinculum",
    anatomySymbolDesc: "Simbol pengendali matematik (√). Palang atas mendatar (vinculum) mengumpulkan nilai di bawah punca.",
    anatomyRadicand: "3. Radikan (x)",
    anatomyRadicandDesc: "Nilai di bawah simbol punca. Dengan n genap, nilainya mesti bukan negatif (x ≥ 0) untuk menghasilkan penyelesaian nyata.",
    anatomyRoot: "4. Punca Utama (y)",
    anatomyRootDesc: "Hasil nyata bukan negatif. Bagi ⁴√81, punca utama ialah 3 kerana 3⁴ = 81.",

    simTitle: "Penguji Interaktif Darjah Punca dan Tanda",
    simSubtitle: "Pilih darjah indeks dan tanda radikan untuk melihat keputusannya:",
    simDegreeLabel: "Darjah Punca (n):",
    simDegreeEven: "Indeks Genap (n = 2, 4, 6...)",
    simDegreeOdd: "Indeks Ganjil (n = 3, 5, 7...)",
    simRadicandLabel: "Nilai Radikan (x):",
    simRadicandPos: "Positif (+x, cth. +81)",
    simRadicandNeg: "Negatif (-x, cth. -81)",
    simRadicandZero: "Sifar (x = 0)",
    simBtnTest: "Uji dalam Kalkulator di Atas",

    simZeroBadge: "Sifar Nyata Unik",
    simZeroDesc: "Untuk sebarang punca n > 0, punca ke-n bagi 0 sentiasa 0, kerana 0ⁿ = 0.",
    simEvenPosBadge: "2 Punca Nyata (Punca Utama +)",
    simEvenPosDesc: "Apabila punca genap dan radikan positif, terdapat dua punca nyata (±). Notasi radikal merujuk kepada punca utama positif. Disahkan: 3⁴ = 81.",
    simEvenNegBadge: "Tiada Punca Nyata (Hanya Satah Kompleks)",
    simEvenNegDesc: "Kuasa genap bagi nombor nyata sentiasa bukan negatif. Tiada nombor nyata yang didarabkan genap kali menghasilkan nombor negatif. Penyelesaian memerlukan nombor khayalan.",
    simOddPosBadge: "1 Punca Nyata Positif Unik",
    simOddPosDesc: "Punca darjah ganjil bagi nombor positif sentiasa menghasilkan satu nilai nyata positif. Disahkan: 2⁵ = 32.",
    simOddNegBadge: "1 Punca Nyata Negatif Unik",
    simOddNegDesc: "Punca darjah ganjil bagi nombor negatif adalah nombor nyata yang sah. Kerana (-2)⁵ = -32, punca kelima nyata ialah tepat -2.",

    method1Tab: "Kaedah 1: Faktor Perdana",
    method1Badge: "Peringkasan Tepat",
    method1Title: "Pemfaktoran Perdana untuk Kuasa Sempurna",

    method2Tab: "Kaedah 2: Kuasa Pecahan",
    method2Badge: "Hamparan Helaian dan Alat Digital",
    method2Title: "Urutan Kunci Eksponen Pecahan",

    method3Tab: "Kaedah 3: Newton-Raphson",
    method3Badge: "Algoritma Berangka",
    method3Title: "Kaedah Lelaran Newton-Raphson",
    method3Desc: "Pemproses komputer mengira punca sewenang-wenangnya secara lelaran menggunakan:",
    method3ExTitle: "Demonstrasi: Anggaran ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Anggaran awal: Memandangkan 3³ = 27, pilih x₀ = 3.",
      "Lelaran 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Lelaran 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Pengesahan: 3.1072³ = 29.999. Hanya dalam dua lelaran diperoleh ketepatan 4 tempat perpuluhan."
    ],

    filterLabel: "Tapis mengikut Darjah:",
    filterAll: "Semua",
    colDegree: "Darjah Punca (n)",
    colRadicand: "Radikan (x)",
    colForm: "Bentuk Matematik",
    colRoot: "Punca Utama",
    colAction: "Tindakan",
    btnTest: "Uji",
    scrollHint: "Tatal secara mendatar pada skrin kecil"
  },

  // 13. Arabic (ar)
  ar: {
    badgeArbitrary: "أي درجة",
    badgeExact: "دقيق وعشري",
    badgeSteps: "خطوة بخطوة",
    badgeFree: "100% مجاني",
    quickTryLabel: "اختبارات سريعة:",

    anatomyTag: "مستكشف التركيب الرياضي",
    anatomyHint: "انقر على أي جزء لمعرفة دوره الرياضي",
    anatomyDegree: "1. دليل الجذر (الدرجة n)",
    anatomyDegreeDesc: "الرقم الصغير في الزاوية العلوية لرمز الجذر. يحدد عدد العوامل المتطابقة. وإذا تُرك فارغاً يُفترض أنه 2 (جذر تربيعي).",
    anatomySymbol: "2. رمز الجذر والخط العلوي",
    anatomySymbolDesc: "المعامل الرياضي (√). الخط الأفقي يجمع القيمة الخاضعة للجذر.",
    anatomyRadicand: "3. المجذور (x)",
    anatomyRadicandDesc: "القيمة الواقعة تحت الجذر. إذا كان n زوجياً، يجب أن تكون القيمة غير سالبة (x ≥ 0) للحصول على حل حقيقي.",
    anatomyRoot: "4. الجذر الرئيسي (y)",
    anatomyRootDesc: "الناتج الحقيقي غير السالب. بالنسبة إلى ⁴√81 الجذر الرئيسي هو 3 لأن 3⁴ = 81.",

    simTitle: "مختبر تفاعلي لدرجة الجذر وإشارته",
    simSubtitle: "حدد دليل الجذر وإشارة العدد لرؤية النتيجة الرياضية:",
    simDegreeLabel: "دليل الجذر (n):",
    simDegreeEven: "دليل زوجي (n = 2, 4, 6...)",
    simDegreeOdd: "دليل فردي (n = 3, 5, 7...)",
    simRadicandLabel: "قيمة المجذور (x):",
    simRadicandPos: "موجب (+x، مثل +81)",
    simRadicandNeg: "سالب (-x، مثل -81)",
    simRadicandZero: "صفر (x = 0)",
    simBtnTest: "جرب في الحاسبة أعلاه",

    simZeroBadge: "صفر حقيقي وحيد",
    simZeroDesc: "لأي دليل جذر n > 0، فإن الجذر النوني للعدد 0 يساوي دائماً 0، لأن 0ⁿ = 0.",
    simEvenPosBadge: "جذران حقيقيان (الجذر الرئيسي +)",
    simEvenPosDesc: "عندما يكون الدليل زوجياً والعدد موجباً، يوجد جذران حقيقيان (±). يحدد رمز الجذر القيمة الموجبة الرئيسية. التحقق: 3⁴ = 81.",
    simEvenNegBadge: "لا توجد جذور حقيقية (في الأعداد المركبة فقط)",
    simEvenNegDesc: "القوى الزوجية لجميع الأعداد الحقيقية غير سالبة. لا يوجد عدد حقيقي يضرب في نفسه عدداً زوجياً من المرات يعطي سالباً. تتطلب الحلول أعداداً تخيلية.",
    simOddPosBadge: "جذر حقيقي موجب وحيد",
    simOddPosDesc: "جذور الدرجة الفردية للأعداد الموجبة تعطي دائماً قيمة حقيقية موجبة وحيدة. التحقق: 2⁵ = 32.",
    simOddNegBadge: "جذر حقيقي سالب وحيد",
    simOddNegDesc: "الجذور الفردية للأعداد السالبة هي أعداد حقيقية صحيحة تماماً. بما أن (-2)⁵ = -32، فإن الجذر الخامس الحقيقي هو -2 تماماً.",

    method1Tab: "الطريقة 1: العوامل الأولية",
    method1Badge: "تبسيط دقيق",
    method1Title: "التحليل إلى عوامل أولية للقوى والجذور",

    method2Tab: "الطريقة 2: الأسس الكسرية",
    method2Badge: "جداول البيانات والأدوات الرقمية",
    method2Title: "صيغ الأسس الكسرية في الحواسب",

    method3Tab: "الطريقة 3: نيوتن-رافسون",
    method3Badge: "خوارزمية عددية",
    method3Title: "طريقة نيوتن-رافسون التكرارية",
    method3Desc: "تحسب المعالجات الجذور غير المحدودة تكرارياً باستخدام معادلة التكرار:",
    method3ExTitle: "مثال تطبيقي: تقريب ∛30 (n = 3, A = 30)",
    method3Steps: [
      "التخمين المبدئي: بما أن 3³ = 27، نختار x₀ = 3.",
      "التكرار 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "التكرار 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "التحقق: 3.1072³ = 29.999. في خطوتين فقط نصل إلى دقة 4 منازل عشرية."
    ],

    filterLabel: "تصفية بالدرجة:",
    filterAll: "الكل",
    colDegree: "دليل الجذر (n)",
    colRadicand: "المجذور (x)",
    colForm: "الصيغة الرياضية",
    colRoot: "الجذر الرئيسي",
    colAction: "إجراء",
    btnTest: "اختبار",
    scrollHint: "اسحب أفقياً على الشاشات الصغيرة"
  },

  // 14. Hindi (hi)
  hi: {
    badgeArbitrary: "मनचाहा घात",
    badgeExact: "सटीक व दशमलव",
    badgeSteps: "चरण-दर-चरण",
    badgeFree: "100% निःशुल्क",
    quickTryLabel: "त्वरित परीक्षण:",

    anatomyTag: "इंटरैक्टिव अंकगणित संरचना",
    anatomyHint: "इसकी गणितीय भूमिका देखने के लिए किसी भी भाग पर क्लिक करें",
    anatomyDegree: "1. मूल सूचकांक (घात n)",
    anatomyDegreeDesc: "करणी चिह्न के ऊपरी बाएं कोने की छोटी संख्या। यह तय करती है कि कितने समान गुणकों का गुणन होगा। यदि खाली हो तो 2 माना जाता है।",
    anatomySymbol: "2. करणी चिह्न और रेखा",
    anatomySymbolDesc: "गणितीय संक्रिया चिह्न (√)। ऊपरी क्षैतिज रेखा संख्या को घेरती है।",
    anatomyRadicand: "3. करणीगत संख्या (x)",
    anatomyRadicandDesc: "करणी के नीचे की संख्या। सम n होने पर वास्तविक परिणाम के लिए इसे गैर-ऋणात्मक (x ≥ 0) होना चाहिए।",
    anatomyRoot: "4. मुख्य मूल (y)",
    anatomyRootDesc: "गैर-ऋणात्मक वास्तविक उत्तर। ⁴√81 के लिए मुख्य मूल 3 है क्योंकि 3⁴ = 81 होता है।",

    simTitle: "मूल घात और चिह्न सिम्युलेटर",
    simSubtitle: "परिणाम देखने के लिए मूल घात और संख्या का चिह्न चुनें:",
    simDegreeLabel: "मूल घात (n):",
    simDegreeEven: "सम सूचकांक (n = 2, 4, 6...)",
    simDegreeOdd: "विषम सूचकांक (n = 3, 5, 7...)",
    simRadicandLabel: "संख्या का मान (x):",
    simRadicandPos: "धनात्मक (+x, जैसे +81)",
    simRadicandNeg: "ऋणात्मक (-x, जैसे -81)",
    simRadicandZero: "शून्य (x = 0)",
    simBtnTest: "ऊपर कैलकुलेटर में जांचें",

    simZeroBadge: "अद्वितीय वास्तविक शून्य",
    simZeroDesc: "किसी भी मूल सूचकांक n > 0 के लिए, 0 का nवां मूल हमेशा 0 होता है, क्योंकि 0ⁿ = 0।",
    simEvenPosBadge: "2 वास्तविक मूल (मुख्य मूल +)",
    simEvenPosDesc: "जब सूचकांक सम हो और संख्या धनात्मक हो, तो दो वास्तविक मूल होते हैं (±)। करणी चिह्न धनात्मक मुख्य मूल को दर्शाता है। सत्यापन: 3⁴ = 81।",
    simEvenNegBadge: "कोई वास्तविक मूल नहीं (केवल सम्मिश्र संख्याएं)",
    simEvenNegDesc: "सभी वास्तविक संख्याओं की सम घातें गैर-ऋणात्मक होती हैं। किसी भी वास्तविक संख्या को सम बार गुणा करने पर ऋणात्मक संख्या नहीं मिल सकती। इसके हल काल्पनिक संख्याओं में होते हैं।",
    simOddPosBadge: "1 अद्वितीय वास्तविक धनात्मक मूल",
    simOddPosDesc: "धनात्मक संख्याओं के विषम मूल हमेशा एक ही वास्तविक धनात्मक मान देते हैं। सत्यापन: 2⁵ = 32।",
    simOddNegBadge: "1 अद्वितीय वास्तविक ऋणात्मक मूल",
    simOddNegDesc: "ऋणात्मक संख्याओं के विषम मूल पूरी तरह से मान्य वास्तविक संख्याएं हैं। क्योंकि (-2)⁵ = -32, वास्तविक पांचवां मूल ठीक -2 है।",

    method1Tab: "विधि 1: अभाज्य गुणनखंड",
    method1Badge: "सटीक सरलीकरण",
    method1Title: "पूर्ण घातों के लिए अभाज्य गुणनखंड",

    method2Tab: "विधि 2: भिन्नात्मक घात",
    method2Badge: "स्प्रेडशीट और डिजिटल उपकरण",
    method2Title: "भिन्नात्मक घातांक कुंजी क्रम",

    method3Tab: "विधि 3: न्यूटन-राफसन",
    method3Badge: "संख्यात्मक एल्गोरिथ्म",
    method3Title: "न्यूटन-राफसन पुनरावृत्ति विधि",
    method3Desc: "कंप्यूटर प्रोसेसर पुनरावृत्ति सूत्र का उपयोग करके मनमाने मूल की गणना करते हैं:",
    method3ExTitle: "प्रदर्शन: ∛30 का सन्निकटन (n = 3, A = 30)",
    method3Steps: [
      "आरंभिक अनुमान: चूंकि 3³ = 27, हम x₀ = 3 चुनते हैं।",
      "पुनरावृत्ति 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111।",
      "पुनरावृत्ति 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072।",
      "सत्यापन: 3.1072³ = 29.999। केवल दो चरणों में 4 दशमलव स्थानों की सटीकता प्राप्त होती है।"
    ],

    filterLabel: "घात अनुसार फ़िल्टर:",
    filterAll: "सभी",
    colDegree: "मूल घात (n)",
    colRadicand: "संख्या (x)",
    colForm: "गणितीय रूप",
    colRoot: "मुख्य मूल",
    colAction: "क्रिया",
    btnTest: "जांचें",
    scrollHint: "छोटी स्क्रीन पर क्षैतिज स्क्रॉल करें"
  },

  // 15. Bengali (bn)
  bn: {
    badgeArbitrary: "যেকোনো ঘাত",
    badgeExact: "সঠিক ও দশমিক",
    badgeSteps: "ধাপে ধাপে",
    badgeFree: "১০০% বিনামূল্যে",
    quickTryLabel: "দ্রুত পরীক্ষা:",

    anatomyTag: "ইন্টারেক্টিভ প্রতীক বিশ্লেষণ",
    anatomyHint: "গাণিতিক ভূমিকা দেখতে যেকোনো অংশে ক্লিক করুন",
    anatomyDegree: "১. মূল সূচক (ঘাত n)",
    anatomyDegreeDesc: "চিহ্নের ওপরের বাম কোণের ছোট সংখ্যা। এটি নির্দেশ করে কতটি একই উৎপাদক গুণ হবে। খালি থাকলে ২ ধরা হয়।",
    anatomySymbol: "২. মূল চিহ্ন ও রেখা",
    anatomySymbolDesc: "গাণিতিক অপারেটর (√)। অনুভূমিক রেখাটি ভেতরের সংখ্যাকে আবদ্ধ করে।",
    anatomyRadicand: "৩. করণীগত সংখ্যা (x)",
    anatomyRadicandDesc: "চিহ্নের ভেতরের সংখ্যা। সূচক n জোড় হলে বাস্তব উত্তরের জন্য মানটি অঋণাত্মক (x ≥ 0) হতে হবে।",
    anatomyRoot: "৪. প্রধান মূল (y)",
    anatomyRootDesc: "অঋণাত্মক বাস্তব উত্তর। ⁴√81 এর জন্য প্রধান মূল ৩ কারণ ৩⁴ = ৮১।",

    simTitle: "মূলের ঘাত ও চিহ্নের সিমুলেটর",
    simSubtitle: "ফলাফল দেখতে মূলের ঘাত ও সংখ্যার চিহ্ন নির্বাচন করুন:",
    simDegreeLabel: "মূলের ঘাত (n):",
    simDegreeEven: "জোড় সূচক (n = 2, 4, 6...)",
    simDegreeOdd: "বিজোড় সূচক (n = 3, 5, 7...)",
    simRadicandLabel: "সংখ্যার মান (x):",
    simRadicandPos: "ধনাত্মক (+x, যেমন +81)",
    simRadicandNeg: "ঋণাত্মক (-x, যেমন -81)",
    simRadicandZero: "শূন্য (x = 0)",
    simBtnTest: "ওপরের ক্যালকুলেটরে পরীক্ষা করুন",

    simZeroBadge: "অনন্য বাস্তব শূন্য",
    simZeroDesc: "যেকোনো মূল সূচক n > 0 এর জন্য, 0 এর n-তম মূল সর্বদা 0, কারণ 0ⁿ = 0।",
    simEvenPosBadge: "২টি বাস্তব মূল (প্রধান মূল +)",
    simEvenPosDesc: "সূচক জোড় এবং সংখ্যাটি ধনাত্মক হলে দুটি বাস্তব মূল থাকে (±)। প্রতীকটি ধনাত্মক প্রধান মূল নির্দেশ করে। যাচাই: 3⁴ = 81।",
    simEvenNegBadge: "কোনো বাস্তব মূল নেই (কেবল জটিল সংখ্যা)",
    simEvenNegDesc: "সকল বাস্তব সংখ্যার জোড় ঘাত সর্বদা অঋণাত্মক। কোনো বাস্তব সংখ্যাকে জোড় সংখ্যক বার গুণ করলে ঋণাত্মক সংখ্যা হয় না। এর সমাধান জটিল সংখ্যায় থাকে।",
    simOddPosBadge: "১টি অনন্য বাস্তব ধনাত্মক মূল",
    simOddPosDesc: "ধনাত্মক সংখ্যার বিজোড় ঘাতের মূল সর্বদা একটি অনন্য বাস্তব ধনাত্মক মান দেয়। যাচাই: 2⁵ = 32।",
    simOddNegBadge: "১টি অনন্য বাস্তব ঋণাত্মক মূল",
    simOddNegDesc: "ঋণাত্মক সংখ্যার বিজোড় মূল সম্পূর্ণ বৈধ বাস্তব সংখ্যা। যেহেতু (-2)⁵ = -32, তাই বাস্তব পঞ্চম মূল ঠিক -2।",

    method1Tab: "পদ্ধতি ১: মৌলিক উৎপাদক",
    method1Badge: "সঠিক সরলীকরণ",
    method1Title: "পূর্ণ ঘাতের জন্য মৌলিক উৎপাদকে বিশ্লেষণ",

    method2Tab: "পদ্ধতি ২: ভগ্নাংশ ঘাত",
    method2Badge: "স্প্রেডশিট এবং ডিজিটাল টুল",
    method2Title: "ভগ্নাংশ সূচকের মাধ্যমে গণনা",

    method3Tab: "পদ্ধতি ৩: নিউটন-র‍্যাফসন",
    method3Badge: "সাংখ্যিক অ্যালগরিদম",
    method3Title: "নিউটন-র‍্যাফসন পুনরাবৃত্তিমূলক পদ্ধতি",
    method3Desc: "কম্পিউটার প্রসেসর পুনরাবৃত্তিমূলক সূত্রের মাধ্যমে যেকোনো মূল গণনা করে:",
    method3ExTitle: "প্রদর্শন: ∛30 এর আসন্ন মান (n = 3, A = 30)",
    method3Steps: [
      "প্রাথমিক অনুমান: যেহেতু ৩³ = ২৭, আমরা x₀ = ৩ ধরি।",
      "ধাপ ১: x₁ = (১/৩) · [২(৩) + ৩০/৩²] = (১/৩) · [৬ + ৩.৩৩৩৩] = ৩.১১১১।",
      "ধাপ ২: x₂ = (১/৩) · [২(৩.১১১১) + ৩০/(৩.১১১১²)] = ৩.১০৭২।",
      "যাচাই: ৩.১০৭২³ = ২৯.৯৯৯। মাত্র দুটি ধাপে ৪ দশমিক স্থান পর্যন্ত নির্ভুল মান পাওয়া যায়।"
    ],

    filterLabel: "ঘাত অনুসারে ফিল্টার:",
    filterAll: "সব",
    colDegree: "মূলের ঘাত (n)",
    colRadicand: "সংখ্যা (x)",
    colForm: "গাণিতিক রূপ",
    colRoot: "প্রধান মূল",
    colAction: "পদক্ষেপ",
    btnTest: "পরীক্ষা",
    scrollHint: "ছোট স্ক্রিনে অনুভূমিকভাবে স্ক্রোল করুন"
  },

  // 16. Japanese (ja)
  ja: {
    badgeArbitrary: "任意の次数",
    badgeExact: "正確な値と小数",
    badgeSteps: "途中式付き",
    badgeFree: "完全無料",
    quickTryLabel: "クイック計算例:",

    anatomyTag: "対話型記号構造エクスプローラー",
    anatomyHint: "各要素をクリックして数学的意味を確認",
    anatomyDegree: "1. 根指数（次数 n）",
    anatomyDegreeDesc: "根号の左上にある小さな数値。何乗根かを指定します。省略時は 2（平方根）とみなされます。",
    anatomySymbol: "2. 根号と上線",
    anatomySymbolDesc: "数学の記号（√）。上部の水平線が被開数の範囲を明確にします。",
    anatomyRadicand: "3. 被開数（x）",
    anatomyRadicandDesc: "根号の中の数値。偶数乗根で実数解を得るには 0 以上（x ≥ 0）である必要があります。",
    anatomyRoot: "4. 主根（y）",
    anatomyRootDesc: "正の実数解。⁴√81 の主根は 3 です（3⁴ = 81）。記号は正の主値を表します。",

    simTitle: "次数と符号のインタラクティブテスター",
    simSubtitle: "次数と被開数の符号を選んで結果を確認できます:",
    simDegreeLabel: "根指数（n）:",
    simDegreeEven: "偶数乗根（n = 2, 4, 6...）",
    simDegreeOdd: "奇数乗根（n = 3, 5, 7...）",
    simRadicandLabel: "被開数の符号（x）:",
    simRadicandPos: "正（+x、例: +81）",
    simRadicandNeg: "負（-x、例: -81）",
    simRadicandZero: "ゼロ（x = 0）",
    simBtnTest: "上の計算機で確認する",

    simZeroBadge: "唯一の実数ゼロ",
    simZeroDesc: "任意の根指数 n > 0 に対し、0 の n 乗根は常に 0 です（0ⁿ = 0）。",
    simEvenPosBadge: "2つの実数根（主値は正）",
    simEvenPosDesc: "指数が偶数で被開数が正のとき、2つの実数根（±）が存在します。根号は正の主値を表します。検証: 3⁴ = 81。",
    simEvenNegBadge: "実数根なし（複素数平面のみ）",
    simEvenNegDesc: "すべての実数の偶数乗は非負です。偶数回自乗して負になる実数は存在しません。解には虚数単位 i が必要です。",
    simOddPosBadge: "1つの実数正根（一意）",
    simOddPosDesc: "正の数の奇数乗根は、常に1つの正の実数値を持ちます。検証: 2⁵ = 32。",
    simOddNegBadge: "1つの実数負根（一意）",
    simOddNegDesc: "負の数の奇数乗根は完全に有効な実数です。(-2)⁵ = -32 であるため、実数の5乗根は正確に -2 です。",

    method1Tab: "方法 1: 素因数分解",
    method1Badge: "正確な簡約化",
    method1Title: "累乗数と根号の素因数分解",

    method2Tab: "方法 2: 分数指数",
    method2Badge: "表計算ソフトとデジタルツール",
    method2Title: "分数指数による計算手順",

    method3Tab: "方法 3: ニュートン法",
    method3Badge: "数値計算アルゴリズム",
    method3Title: "ニュートン・ラフソン反復法",
    method3Desc: "コンピュータのCPUは、次の漸化式を用いて反復的に根を算出します:",
    method3ExTitle: "計算例: ∛30 の近似計算 (n = 3, A = 30)",
    method3Steps: [
      "初期値の設定: 3³ = 27 であるため、x₀ = 3 とします。",
      "ステップ 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111。",
      "ステップ 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072。",
      "検証: 3.1072³ = 29.999。わずか2回の反復で小数点以下4桁の精度が得られます。"
    ],

    filterLabel: "次数で絞り込み:",
    filterAll: "すべて",
    colDegree: "根指数 (n)",
    colRadicand: "被開数 (x)",
    colForm: "数式表記",
    colRoot: "主根",
    colAction: "操作",
    btnTest: "試す",
    scrollHint: "小さな画面では横にスクロールしてください"
  },

  // 17. Korean (ko)
  ko: {
    badgeArbitrary: "임의의 차수",
    badgeExact: "정확한 값 및 소수",
    badgeSteps: "단계별 풀이",
    badgeFree: "100% 무료",
    quickTryLabel: "빠른 계산 테스트:",

    anatomyTag: "인터랙티브 기호 구조 탐색기",
    anatomyHint: "각 부분을 클릭하여 수학적 역할을 확인하세요",
    anatomyDegree: "1. 거듭제곱근 지수 (차수 n)",
    anatomyDegreeDesc: "근호의 왼쪽 위에 작게 적힌 숫자입니다. 동일한 인수를 몇 번 곱하는지 나타냅니다. 생략되면 2(제곱근)입니다.",
    anatomySymbol: "2. 근호 및 결선",
    anatomySymbolDesc: "수학 연산 기호(√)입니다. 상단의 수평선은 근호 아래의 수를 묶어줍니다.",
    anatomyRadicand: "3. 피개수 (x)",
    anatomyRadicandDesc: "근호 안의 수입니다. n이 짝수일 때 실수 해를 얻으려면 음수가 아니어야 합니다 (x ≥ 0).",
    anatomyRoot: "4. 주요 근 (y)",
    anatomyRootDesc: "음이 아닌 실수 해입니다. ⁴√81의 주요 근은 3입니다 (3⁴ = 81). 근호는 양의 주요 근을 뜻합니다.",

    simTitle: "차수 및 부호 인터랙티브 시뮬레이터",
    simSubtitle: "차수와 수의 부호를 선택하여 수학적 결과를 확인하세요:",
    simDegreeLabel: "거듭제곱근 지수 (n):",
    simDegreeEven: "짝수 지수 (n = 2, 4, 6...)",
    simDegreeOdd: "홀수 지수 (n = 3, 5, 7...)",
    simRadicandLabel: "피개수 부호 (x):",
    simRadicandPos: "양수 (+x, 예: +81)",
    simRadicandNeg: "음수 (-x, 예: -81)",
    simRadicandZero: "영 (x = 0)",
    simBtnTest: "위 계산기에서 확인하기",

    simZeroBadge: "유일한 실수 0",
    simZeroDesc: "모든 거듭제곱근 지수 n > 0에 대해, 0의 n제곱근은 항상 0입니다 (0ⁿ = 0).",
    simEvenPosBadge: "2개의 실근 (주요 근은 양수)",
    simEvenPosDesc: "지수가 짝수이고 피개수가 양수일 때, 두 개의 실근(±)이 존재합니다. 근호는 양의 주요 근을 나타냅니다. 검증: 3⁴ = 81.",
    simEvenNegBadge: "실근 없음 (복소수 평면에서만 존재)",
    simEvenNegDesc: "모든 실수의 짝수 거듭제곱은 음수가 아닙니다. 어떤 실수도 짝수 번 곱해 음수가 될 수 없습니다. 해는 허수(i)를 필요로 합니다.",
    simOddPosBadge: "1개의 유일한 양의 실근",
    simOddPosDesc: "양수의 홀수 거듭제곱근은 항상 유일한 양의 실근을 갖습니다. 검증: 2⁵ = 32.",
    simOddNegBadge: "1개의 유일한 음의 실근",
    simOddNegDesc: "음수의 홀수 거듭제곱근은 온전한 실수입니다. (-2)⁵ = -32 이므로 실수의 5제곱근은 정확히 -2 입니다.",

    method1Tab: "방법 1: 소인수분해",
    method1Badge: "정확한 단순화",
    method1Title: "완전 거듭제곱의 소인수분해",

    method2Tab: "방법 2: 분수 지수",
    method2Badge: "스프레드시트 및 디지털 도구",
    method2Title: "분수 지수 키 입력 순서",

    method3Tab: "방법 3: 뉴턴-랩슨",
    method3Badge: "수치 해석 알고리즘",
    method3Title: "뉴턴-랩슨 반복법",
    method3Desc: "컴퓨터 프로세서는 다음 점화식을 사용하여 거듭제곱근을 반복 계산합니다:",
    method3ExTitle: "시연: ∛30 근사 계산 (n = 3, A = 30)",
    method3Steps: [
      "초기 추정값: 3³ = 27 이므로 x₀ = 3 으로 설정합니다.",
      "1회 반복: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "2회 반복: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "검증: 3.1072³ = 29.999. 단 두 번의 반복으로 소수점 4자리 정확도에 도달합니다."
    ],

    filterLabel: "차수별 필터:",
    filterAll: "전체",
    colDegree: "거듭제곱근 지수 (n)",
    colRadicand: "피개수 (x)",
    colForm: "수식 형태",
    colRoot: "주요 근",
    colAction: "동작",
    btnTest: "테스트",
    scrollHint: "작은 화면에서는 가로로 스크롤하세요"
  },

  // 18. Bulgarian (bg)
  bg: {
    badgeArbitrary: "Произволна степен",
    badgeExact: "Точно и десетично",
    badgeSteps: "Стъпка по стъпка",
    badgeFree: "100% Безплатно",
    quickTryLabel: "Бързи тестове:",

    anatomyTag: "Интерактивен анатомичен преглед",
    anatomyHint: "Кликнете върху елемент, за да видите математическата му роля",
    anatomyDegree: "1. Показател на корена (Степен n)",
    anatomyDegreeDesc: "Малкото число горе вляво на знака за корен. Определя броя еднакви множители. Ако е пропуснато, се приема за 2 (квадратен корен).",
    anatomySymbol: "2. Знак за корен и винкулум",
    anatomySymbolDesc: "Математическият оператор (√). Горната хоризонтална черта групира числото под корена.",
    anatomyRadicand: "3. Подкоренна величина (x)",
    anatomyRadicandDesc: "Числото под знака за корен. При четно n трябва да бъде неотрицателно (x ≥ 0) за реален резултат.",
    anatomyRoot: "4. Главен корен (y)",
    anatomyRootDesc: "Неотрицателният реален отговор. За ⁴√81 главният корен е 3, тъй като 3⁴ = 81.",

    simTitle: "Интерактивен симулатор на степен и знак",
    simSubtitle: "Изберете степен на корена и знак на числото, за да видите резултата:",
    simDegreeLabel: "Степен на корена (n):",
    simDegreeEven: "Четен показател (n = 2, 4, 6...)",
    simDegreeOdd: "Нечетен показател (n = 3, 5, 7...)",
    simRadicandLabel: "Стойност на числото (x):",
    simRadicandPos: "Положително (+x, напр. +81)",
    simRadicandNeg: "Отрицателно (-x, напр. -81)",
    simRadicandZero: "Нула (x = 0)",
    simBtnTest: "Тествайте в калкулатора горе",

    simZeroBadge: "Единствена реална нула",
    simZeroDesc: "За всеки корен с показател n > 0, n-тият корен от 0 винаги е 0, тъй като 0ⁿ = 0.",
    simEvenPosBadge: "2 реални корена (главен корен +)",
    simEvenPosDesc: "Когато показателят е четен и числото е положително, съществуват два реални корена (±). Знакът обозначава главния корен. Проверка: 3⁴ = 81.",
    simEvenNegBadge: "Няма реални корени (само в комплексната равнина)",
    simEvenNegDesc: "Четните степени на всички реални числа са неотрицателни. Никое реално число на четна степен не дава отрицателен резултат. Решенията изискват имагинерни числа.",
    simOddPosBadge: "1 единствен реален положителен корен",
    simOddPosDesc: "Нечетните корени от положителни числа винаги дават една реална положителна стойност. Проверка: 2⁵ = 32.",
    simOddNegBadge: "1 единствен реален отрицателен корен",
    simOddNegDesc: "Нечетните корени от отрицателни числа са напълно валидни реални числа. Тъй като (-2)⁵ = -32, реалният пети корен е точно -2.",

    method1Tab: "Метод 1: Прости множители",
    method1Badge: "Точно опростяване",
    method1Title: "Разлагане на прости множители",

    method2Tab: "Метод 2: Дробни степени",
    method2Badge: "Електронни таблици и цифрови инструменти",
    method2Title: "Изчисление чрез дробни степени",

    method3Tab: "Метод 3: Нютон-Рафсън",
    method3Badge: "Числов алгоритъм",
    method3Title: "Итеративен метод на Нютон-Рафсон",
    method3Desc: "Компютърните процесори изчисляват корените итеративно чрез формулата:",
    method3ExTitle: "Демонстрация: Приближение на ∛30 (n = 3, A = 30)",
    method3Steps: [
      "Начално предположение: Тъй като 3³ = 27, избираме x₀ = 3.",
      "Итерация 1: x₁ = (1/3) · [2(3) + 30/3²] = (1/3) · [6 + 3.3333] = 3.1111.",
      "Итерация 2: x₂ = (1/3) · [2(3.1111) + 30/(3.1111²)] = 3.1072.",
      "Проверка: 3.1072³ = 29.999. Само за две стъпки се постига точност до 4 знака."
    ],

    filterLabel: "Филтър по степен:",
    filterAll: "Всички",
    colDegree: "Степен (n)",
    colRadicand: "Число (x)",
    colForm: "Математическа форма",
    colRoot: "Главен корен",
    colAction: "Действие",
    btnTest: "Тест",
    scrollHint: "Превъртете хоризонтално на малки екрани"
  }
};

export function getNthInteractiveI18n(locale: string): NthInteractiveI18n {
  return NTH_INTERACTIVE_I18N[locale] || NTH_INTERACTIVE_I18N.en;
}
