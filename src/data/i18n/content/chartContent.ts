// Educational content translations for Square Root Chart & Table Generator across all 18 supported languages
import { getChartBoilerplate } from './chartBoilerplate';

export interface ChartContent {
  heroPills: [string, string, string, string];
  tocTitle: string;
  toc: Array<{ title: string; href: string; subitems?: Array<{ title: string; href: string }> }>;
  s1: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    cards: Array<{ expr: string; reason: string }>;
  };
  s2: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; text: string }>;
    warningTitle: string;
    warningText: string;
  };
  s3: {
    eyebrow: string;
    title: string;
    lead: string;
    points: Array<string>;
  };
  s4: {
    eyebrow: string;
    title: string;
    lead: string;
    cardCalcTitle: string;
    cardCalcText: string;
    cardChartTitle: string;
    cardChartText: string;
    summary: string;
  };
  s5: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    points: Array<string>;
    conclusion: string;
  };
  s6: {
    eyebrow: string;
    title: string;
    lead: string;
    scrollHint: string;
    colNum: string;
    colRoot: string;
    colType: string;
    perfectBadge: string;
    irrationalBadge: string;
  };
  s7: {
    eyebrow: string;
    title: string;
    lead: string;
    tips: Array<{ title: string; text: string }>;
  };
  s8: {
    eyebrow: string;
    title: string;
    cautions: Array<{ title: string; text: string }>;
  };
  s9: {
    eyebrow: string;
    title: string;
  };
  s10: {
    eyebrow: string;
    title: string;
    takeawayTitle: string;
    takeawayText: string;
  };
  faqs: Array<{ question: string; answer: string }>;
}

const en: ChartContent = {
  heroPills: ["Custom Ranges", "2–4 Decimal Precision", "Copy CSV & Print", "100% Free"],
  tocTitle: "Table of Contents",
  toc: [
    { title: "Custom Table Builder", href: "#section-intro" },
    { title: "How to Use the Generator", href: "#section-how-to-use" },
    { title: "What Is a Square Root Chart?", href: "#section-what-is-chart" },
    { title: "Chart vs. Calculator", href: "#section-chart-vs-calc" },
    { title: "How Values Are Calculated", href: "#section-how-calculated" },
    { title: "Example: Range 1–20 Table", href: "#section-example-chart" },
    { title: "How to Read & Use Your Chart", href: "#section-read-chart" },
    { title: "Common Mistakes to Avoid", href: "#section-common-mistakes" },
    { title: "Frequently Asked Questions", href: "#section-faqs" },
    { title: "A Quick Recap", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Custom Table Builder",
    title: "Square Root Chart Generator",
    lead: "Most square root charts online are stuck at a fixed range — usually 1 to 100 — printed once and never customizable. This tool is different: pick any range you need, choose how many decimal places to show, and get a clean, ready-to-use table in seconds.",
    p1: "Whether you're prepping a printable handout for a class, building a study reference, or just need a wider range than the standard chart, the generator above builds it instantly.",
    cards: [
      { expr: "√25 = 5.000", reason: "Whole integer root (Perfect Square)" },
      { expr: "√50 ≈ 7.071", reason: "Irrational (3 decimal precision)" },
      { expr: "√100 = 10.000", reason: "Custom range benchmark" }
    ]
  },
  s2: {
    eyebrow: "Quick Instructions",
    title: "How to Use the Square Root Chart Generator",
    intro: "Building your custom table takes four simple steps:",
    steps: [
      { title: "Set your range", text: "Enter a starting number and an ending number (for example, 1 to 50, or 200 to 300)." },
      { title: "Choose your decimal precision", text: "Pick 2, 3, or 4 decimal places, depending on how exact you need the values." },
      { title: "Toggle perfect squares only (optional)", text: "Switch this on if you only want whole-number results like 4, 9, 16, and 25 — useful for memorization practice." },
      { title: "Click Generate", text: "Your custom table appears instantly, ready to copy, print, or screenshot." }
    ],
    warningTitle: "No sign-up, no downloads required",
    warningText: "Build and export custom tables instantly in any browser, totally free without watermarks or usage restrictions."
  },
  s3: {
    eyebrow: "Definition & Utility",
    title: "What Is a Square Root Chart?",
    lead: "A square root chart (also called a square root table) is a reference list showing the square root of each number in a range, side by side. Instead of calculating √47 by hand every time you need it, you look it up directly in the table.",
    points: [
      "Students who need quick lookups while doing algebra or geometry homework",
      "Teachers who want a printable handout or classroom reference poster",
      "Anyone reviewing for a test where a fast mental reference beats reaching for a calculator each time"
    ]
  },
  s4: {
    eyebrow: "Comparison",
    title: "Square Root Chart vs. Square Root Calculator: What's the Difference?",
    lead: "These solve two different problems, and it's worth knowing which one you actually need:",
    cardCalcTitle: "Square Root Calculator",
    cardCalcText: "A square root calculator gives you the answer for one specific number at a time, along with a full explanation of how that answer works.",
    cardChartTitle: "Square Root Chart Generator",
    cardChartText: "A square root chart generator gives you many answers at once, laid out for scanning, comparing, printing, or studying — built to your exact range and precision.",
    summary: "If you're solving a single problem, use the calculator. If you're studying a range of values, building a printable reference, or need a quick-glance table, this generator is the faster tool."
  },
  s5: {
    eyebrow: "Mathematical Principles",
    title: "How the Values Are Calculated",
    lead: "Every value in the chart follows the same definition used throughout mathematics: the square root of a number n is the value x such that x × x = n.",
    p1: "For numbers that aren't perfect squares, the result is an irrational number — meaning its decimal digits go on forever without repeating — so the chart rounds each value to your selected number of decimal places (2, 3, or 4).",
    points: [
      "√10 ≈ 3.162 (rounded from 3.16227766...)",
      "√50 ≈ 7.071 (rounded from 7.07106781...)"
    ],
    conclusion: "Perfect squares, on the other hand, always produce a clean, exact result with no rounding needed — √49 is exactly 7, not an approximation."
  },
  s6: {
    eyebrow: "Sample Output",
    title: "Example: A Generated Chart (Range 1–20, 3 Decimal Places)",
    lead: "Here's what a generated table looks like by default. Change the range and precision above to build your own.",
    scrollHint: "Scroll to view table",
    colNum: "Number",
    colRoot: "Square Root",
    colType: "Type",
    perfectBadge: "Perfect Square",
    irrationalBadge: "Irrational"
  },
  s7: {
    eyebrow: "Practical Tips",
    title: "How to Read and Use Your Chart",
    lead: "Once your table is generated, here's how to get the most out of it:",
    tips: [
      { title: "Scan for perfect squares first", text: "These are your anchor points (1, 4, 9, 16, 25...) — every other value falls between two of them, which helps you sanity-check results at a glance." },
      { title: "Match the 'Type' column to your task", text: "If you're doing exact algebra work, focus on perfect squares. If you're doing applied math (measurements, statistics, physics), the irrational decimal values are what you'll actually use." },
      { title: "Use higher decimal precision for technical work", text: "Use 2 decimal places for quick classroom reference. Choose 3 or 4 decimals for engineering and physics calculations." }
    ]
  },
  s8: {
    eyebrow: "Pitfalls & Traps",
    title: "Common Mistakes to Avoid",
    cautions: [
      { title: "Treating a rounded value as exact", text: "√10 = 3.162 is an approximation — the real value has infinite non-repeating decimals. For precise engineering or scientific work, carry more decimal places or use exact radical form." },
      { title: "Confusing a chart lookup with understanding the method", text: "A chart gives you the answer fast, but if you need to show your work in school assignments, you'll still want to know the underlying calculation methods." },
      { title: "Assuming negative numbers belong on this chart", text: "This chart covers real, positive square roots only. Finding roots of negative numbers requires complex imaginary numbers (i)." }
    ]
  },
  s9: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions"
  },
  s10: {
    eyebrow: "Summary",
    title: "A Quick Recap",
    takeawayTitle: "Key Takeaways",
    takeawayText: "A square root chart offers an instant panoramic view of radical values across an entire numerical interval. With our generator above, you can customize your start and end range, set precision up to 4 decimal places, isolate perfect squares, and print or copy clean data tables on demand."
  },
  faqs: [
    { question: "What is a square root chart used for?", answer: "It's a quick-reference table for looking up multiple square root values at once — commonly used by students for homework and exam prep, and by teachers for printable classroom references." },
    { question: "How is this different from a regular square root calculator?", answer: "A calculator solves one number at a time with a full explanation. This generator builds a custom table across a whole range, which is faster when you need several values or want a printable reference." },
    { question: "Can I generate a chart beyond 1 to 100?", answer: "Yes — set any start and end range you need, including ranges well beyond 100." },
    { question: "How many decimal places should I use?", answer: "Two decimals is usually enough for quick classroom or homework reference. Three or four decimals is better if you need more precision for technical or scientific work." },
    { question: "Can I print or save the generated chart?", answer: "Yes — once your table is generated, you can print the page directly or copy the table as CSV for your own document." },
    { question: "Does the chart show exact values or rounded values?", answer: "Perfect squares (like 4, 9, 16) show exact integers. Every other number is irrational and gets rounded to your chosen decimal precision." }
  ]
};

const fr: ChartContent = {
  heroPills: ["Plages Personnalisées", "Précision 2–4 Décimales", "Copier CSV & Imprimer", "100% Gratuit"],
  tocTitle: "Sommaire",
  toc: [
    { title: "Générateur de Tableau", href: "#section-intro" },
    { title: "Comment Utiliser le Générateur", href: "#section-how-to-use" },
    { title: "Qu'est-ce qu'un Tableau de Racines ?", href: "#section-what-is-chart" },
    { title: "Tableau vs Calculateur", href: "#section-chart-vs-calc" },
    { title: "Méthode de Calcul des Valeurs", href: "#section-how-calculated" },
    { title: "Exemple : Tableau de 1 à 20", href: "#section-example-chart" },
    { title: "Comment Lire et Utiliser le Tableau", href: "#section-read-chart" },
    { title: "Erreurs Courantes à Éviter", href: "#section-common-mistakes" },
    { title: "Foire Aux Questions (FAQ)", href: "#section-faqs" },
    { title: "Récapitulatif Rapide", href: "#section-recap" }
  ],
  s1: {
    eyebrow: "Générateur Personnalisé",
    title: "Générateur de Tableau de Racines Carrées",
    lead: "La plupart des tableaux de racines carrées en ligne sont figés de 1 à 100. Notre outil vous permet de définir votre plage sur-mesure, de choisir le nombre de décimales et de générer une table propre en un clin d'œil.",
    p1: "Que ce soit pour préparer une fiche de cours imprimable, un mémento d'étude ou explorer une plage personnalisée, le générateur crée votre tableau instantanément.",
    cards: [
      { expr: "√25 = 5,000", reason: "Racine entière exacte (Carré Parfait)" },
      { expr: "√50 ≈ 7,071", reason: "Irrationnel (précision 3 décimales)" },
      { expr: "√100 = 10,000", reason: "Borne de référence" }
    ]
  },
  s2: {
    eyebrow: "Instructions Rapides",
    title: "Comment Utiliser le Générateur de Tableau",
    intro: "Générez votre tableau en 4 étapes simples :",
    steps: [
      { title: "Définissez votre intervalle", text: "Entrez un nombre de départ et un nombre de fin (ex. 1 à 50, ou 200 à 300)." },
      { title: "Choisissez la précision", text: "Sélectionnez 2, 3 ou 4 décimales selon vos exigences de calcul." },
      { title: "Filtrez les carrés parfaits (facultatif)", text: "Activez cette option pour n'afficher que les carrés parfaits (4, 9, 16, 25...)." },
      { title: "Cliquez sur Générer", text: "Votre tableau s'affiche instantanément, prêt à être copié ou imprimé." }
    ],
    warningTitle: "Sans inscription ni téléchargement",
    warningText: "Exportez des tableaux clairs directement depuis votre navigateur, sans filigrane ni limite d'usage."
  },
  s3: {
    eyebrow: "Définition & Utilité",
    title: "Qu'est-ce qu'un Tableau de Racines Carrées ?",
    lead: "Un tableau de racines carrées est une liste de référence affichant la racine carrée de chaque nombre sur un intervalle donné. Au lieu de recalculer √47 manuellement, vous la trouvez immédiatement.",
    points: [
      "Pour les élèves qui ont besoin de vérifier rapidement leurs devoirs d'algèbre",
      "Pour les enseignants préparant un support de cours ou une affiche pédagogique",
      "Pour les candidats révisant un examen où la mémorisation des repères fait gagner du temps"
    ]
  },
  s4: {
    eyebrow: "Comparatif",
    title: "Tableau vs Calculateur : Quelle Différence ?",
    lead: "Ces deux outils répondent à des besoins complémentaires :",
    cardCalcTitle: "Calculateur de Racine Carrée",
    cardCalcText: "Il calcule la solution pour un nombre précis à la fois, avec la décomposition pas à pas.",
    cardChartTitle: "Générateur de Tableau",
    cardChartText: "Il fournit une vue panoramique sur un intervalle complet, idéal pour comparer, imprimer ou mémoriser.",
    summary: "Pour résoudre un exercice ponctuel, utilisez le calculateur. Pour étudier une série de valeurs ou préparer un mémo, le générateur de tableau est optimal."
  },
  s5: {
    eyebrow: "Principes Mathématiques",
    title: "Comment les Valeurs sont Calculées",
    lead: "Chaque valeur respecte la définition mathématique universelle : la racine carrée de n est le nombre x tel que x × x = n.",
    p1: "Pour les nombres non carrés parfaits, la racine est un nombre irrationnel aux décimales infinies, arrondi à la précision choisie (2, 3 ou 4 décimales).",
    points: [
      "√10 ≈ 3,162 (arrondi de 3,16227766...)",
      "√50 ≈ 7,071 (arrondi de 7,07106781...)"
    ],
    conclusion: "À l'inverse, les carrés parfaits donnent toujours un résultat entier exact : √49 vaut exactement 7."
  },
  s6: {
    eyebrow: "Exemple Concret",
    title: "Exemple : Tableau Généré de 1 à 20 (3 Décimales)",
    lead: "Voici l'aspect par défaut d'un tableau généré. Modifiez l'intervalle ci-dessus pour composer le vôtre.",
    scrollHint: "Faites défiler pour voir le tableau",
    colNum: "Nombre",
    colRoot: "Racine Carrée",
    colType: "Type",
    perfectBadge: "Carré Parfait",
    irrationalBadge: "Irrationnel"
  },
  s7: {
    eyebrow: "Conseils Pratiques",
    title: "Comment Lire et Tirer Parti de Votre Tableau",
    lead: "Une fois votre tableau généré, optimisez son utilisation :",
    tips: [
      { title: "Repérez d'abord les carrés parfaits", text: "Ce sont vos points d'ancrage (1, 4, 9, 16, 25...) pour estimer rapidement la valeur des autres racines." },
      { title: "Utilisez la colonne 'Type'", text: "Distinguez immédiatement les résultats entiers des valeurs décimales irrationnelles." },
      { title: "Ajustez la précision au contexte", text: "2 décimales suffisent pour le collège, 3 ou 4 décimales sont recommandées pour la physique ou l'ingénierie." }
    ]
  },
  s8: {
    eyebrow: "Pièges & Erreurs",
    title: "Erreurs Courantes à Éviter",
    cautions: [
      { title: "Confondre valeur arrondie et exacte", text: "√10 = 3,162 est une approximation. En calcul théorique, gardez l'écriture radicale exacte." },
      { title: "Consulter la table sans comprendre la méthode", text: "Le tableau donne le résultat, mais connaître la factorisation première reste indispensable pour les examens." },
      { title: "Chercher des nombres négatifs", text: "Cette table ne traite que des réels positifs. Les nombres négatifs exigent des nombres imaginaires (i)." }
    ]
  },
  s9: {
    eyebrow: "FAQ",
    title: "Foire Aux Questions"
  },
  s10: {
    eyebrow: "Résumé",
    title: "Récapitulatif Rapide",
    takeawayTitle: "Points Clés",
    takeawayText: "Un tableau de racines carrées offre une vue synthétique sur tout un intervalle de valeurs. Utilisez notre générateur pour personnaliser les bornes, définir la précision, copier en CSV ou imprimer en un clic."
  },
  faqs: [
    { question: "À quoi sert un tableau de racines carrées ?", answer: "À consulter rapidement plusieurs racines sans recalculer chaque nombre manuellement, idéal pour les devoirs et examens." },
    { question: "En quoi est-ce différent d'un calculateur classique ?", answer: "Le calculateur résout un nombre à la fois avec explications, tandis que le tableau génère une vue d'ensemble sur toute une plage." },
    { question: "Puis-je dépasser l'intervalle 1 à 100 ?", answer: "Oui, vous pouvez définir n'importe quelle borne de départ et de fin, même bien au-delà de 100." },
    { question: "Combien de décimales choisir ?", answer: "Deux décimales pour un usage scolaire standard, trois ou quatre pour les sciences et l'ingénierie." },
    { question: "Peut-on exporter ou imprimer la table ?", answer: "Oui, vous pouvez imprimer directement la page ou copier les données au format CSV d'un simple clic." }
  ]
};

// Helper generator for other languages to ensure full coverage
function createChartContent(
  lang: string,
  pills: [string, string, string, string],
  tTitle: string,
  tocNames: string[],
  introTitle: string,
  introLead: string,
  howTitle: string,
  stepsArr: Array<{ title: string; text: string }>,
  whatTitle: string,
  whatLead: string,
  compTitle: string,
  compLead: string,
  mathTitle: string,
  mathLead: string,
  exTitle: string,
  exLead: string,
  colNum: string,
  colRoot: string,
  colType: string,
  pBadge: string,
  iBadge: string,
  tipsTitle: string,
  tipsArr: Array<{ title: string; text: string }>,
  mistakesTitle: string,
  mistakesArr: Array<{ title: string; text: string }>,
  faqTitle: string,
  recapTitle: string,
  recapText: string,
  faqsList: Array<{ question: string; answer: string }>
): ChartContent {
  const bp = getChartBoilerplate(lang);
  return {
    heroPills: pills,
    tocTitle: tTitle,
    toc: [
      { title: tocNames[0], href: "#section-intro" },
      { title: tocNames[1], href: "#section-how-to-use" },
      { title: tocNames[2], href: "#section-what-is-chart" },
      { title: tocNames[3], href: "#section-chart-vs-calc" },
      { title: tocNames[4], href: "#section-how-calculated" },
      { title: tocNames[5], href: "#section-example-chart" },
      { title: tocNames[6], href: "#section-read-chart" },
      { title: tocNames[7], href: "#section-common-mistakes" },
      { title: tocNames[8], href: "#section-faqs" },
      { title: tocNames[9], href: "#section-recap" }
    ],
    s1: {
      eyebrow: tocNames[0],
      title: introTitle,
      lead: introLead,
      p1: bp.introP1,
      cards: [
        { expr: "√25 = 5.000", reason: pBadge },
        { expr: "√50 ≈ 7.071", reason: iBadge },
        { expr: "√100 = 10.000", reason: bp.benchmarkReason }
      ]
    },
    s2: {
      eyebrow: bp.instructionsEyebrow,
      title: howTitle,
      intro: bp.howIntro,
      steps: stepsArr,
      warningTitle: bp.freeInstantTitle,
      warningText: bp.freeInstantText
    },
    s3: {
      eyebrow: bp.overviewEyebrow,
      title: whatTitle,
      lead: whatLead,
      points: bp.overviewPoints
    },
    s4: {
      eyebrow: bp.comparisonEyebrow,
      title: compTitle,
      lead: compLead,
      cardCalcTitle: bp.calcCardTitle,
      cardCalcText: bp.calcCardText,
      cardChartTitle: bp.chartCardTitle,
      cardChartText: bp.chartCardText,
      summary: bp.compSummary
    },
    s5: {
      eyebrow: bp.formulasEyebrow,
      title: mathTitle,
      lead: mathLead,
      p1: bp.mathP1,
      points: ["√10 ≈ 3.162", "√50 ≈ 7.071"],
      conclusion: bp.mathConclusion
    },
    s6: {
      eyebrow: bp.exampleEyebrow,
      title: exTitle,
      lead: exLead,
      scrollHint: bp.scrollHint,
      colNum,
      colRoot,
      colType,
      perfectBadge: pBadge,
      irrationalBadge: iBadge
    },
    s7: {
      eyebrow: bp.usageEyebrow,
      title: tipsTitle,
      lead: bp.tipsLead,
      tips: tipsArr
    },
    s8: {
      eyebrow: bp.pitfallsEyebrow,
      title: mistakesTitle,
      cautions: mistakesArr
    },
    s9: {
      eyebrow: bp.faqEyebrow,
      title: faqTitle
    },
    s10: {
      eyebrow: bp.summaryEyebrow,
      title: recapTitle,
      takeawayTitle: bp.takeawaysTitle,
      takeawayText: recapText
    },
    faqs: faqsList
  };
}

const es: ChartContent = createChartContent(
  'es',
  ["Rangos Personalizados", "Precisión 2–4 Decimales", "Copiar CSV e Imprimir", "100% Gratis"],
  "Índice de Contenidos",
  ["Generador Personalizado", "Cómo Usar el Generador", "¿Qué es una Tabla de Raíces?", "Tabla vs Calculadora", "Cómo se Calculan", "Ejemplo: Tabla 1–20", "Cómo Leer la Tabla", "Errores Comunes", "Preguntas Frecuentes", "Resumen Rápido"],
  "Generador de Tablas de Raíces Cuadradas",
  "Genere tablas de raíces cuadradas a medida para cualquier rango numérico con precisión seleccionable.",
  "Cómo Usar el Generador de Tablas",
  [
    { title: "Defina el rango", text: "Ingrese número inicial y final (ej. 1 a 50)." },
    { title: "Elija decimales", text: "Seleccione 2, 3 o 4 posiciones decimales." },
    { title: "Filtrar cuadrados perfectos", text: "Marque la opción para aislar raíces enteras." },
    { title: "Generar", text: "Obtenga su tabla lista para copiar en CSV o imprimir." }
  ],
  "¿Qué es una Tabla de Raíces Cuadradas?",
  "Una lista de referencia que muestra las raíces cuadradas de números consecutivos uno al lado del otro.",
  "Tabla vs Calculadora: ¿Cuál Necesita?",
  "La calculadora resuelve un número puntual con pasos; la tabla genera un panorama completo para comparar.",
  "Cómo se Calculan los Valores",
  "Cada número no cuadrado produce un decimal irracional redondeado a la precisión deseada.",
  "Ejemplo: Tabla Generada de 1 a 20",
  "Vista previa de una tabla con 3 posiciones decimales y clasificación de números.",
  "Número", "Raíz Cuadrada", "Tipo", "Cuadrado Perfecto", "Irracional",
  "Consejos Prácticos de Uso",
  [
    { title: "Localice los cuadrados perfectos", text: "Son anclajes ideales para estimar raíces intermedias." },
    { title: "Consulte la columna Tipo", text: "Diferencie de inmediato raíces exactas de aproximaciones." },
    { title: "Ajuste decimales a su proyecto", text: "2 decimales para la escuela, 4 para ingeniería y física." }
  ],
  "Errores Frecuentes a Evitar",
  [
    { title: "Tratar decimales redondeados como exactos", text: "Recuerde que las raíces no cuadradas son números irracionales." },
    { title: "Usar tablas sin entender la factorización", text: "En exámenes suele requerirse el procedimiento manual paso a paso." },
    { title: "Buscar números negativos", text: "La tabla solo cubre raíces reales no negativas." }
  ],
  "Preguntas Frecuentes",
  "Resumen Rápido",
  "Una tabla de raíces cuadradas permite consultar intervalos numéricos enteros de un solo vistazo. Personalice rangos, copie en CSV o imprima al instante.",
  [
    { question: "¿Para qué sirve una tabla de raíces cuadradas?", answer: "Para consultar múltiples valores rápidamente sin tener que calcular cada uno por separado." },
    { question: "¿Puedo generar rangos superiores a 100?", answer: "Sí, puede ingresar cualquier número inicial y final sin restricciones." },
    { question: "¿Es posible imprimir o exportar la tabla?", answer: "Sí, puede copiar los datos en formato CSV o imprimir directamente la página." }
  ]
);

const de: ChartContent = createChartContent(
  'de',
  ["Eigene Intervalle", "2–4 Dezimalstellen", "CSV Kopieren & Drucken", "100% Kostenlos"],
  "Inhaltsverzeichnis",
  ["Tabellen-Generator", "Anleitung", "Was ist eine Wurzeltabelle?", "Tabelle vs Rechner", "Berechnungsmethode", "Beispiel: Tabelle 1–20", "Tabelle Richtig Lesen", "Typische Fehler", "Häufige Fragen (FAQ)", "Kurze Zusammenfassung"],
  "Quadratwurzel Tabellen-Generator",
  "Erstellen Sie maßgeschneiderte Quadratwurzel-Tabellen für beliebige Zahlenbereiche mit wählbarer Dezimalpräzision.",
  "So nutzen Sie den Tabellen-Generator",
  [
    { title: "Bereich festlegen", text: "Start- und Endwert eingeben (z. B. 1 bis 50 oder 100 bis 200)." },
    { title: "Präzision wählen", text: "Wählen Sie 2, 3 oder 4 Nachkommastellen für die Rundung." },
    { title: "Nur Quadratzahlen (optional)", text: "Aktivieren Sie den Filter für ganzzahlige Wurzeln." },
    { title: "Tabelle generieren", text: "Sofortige Ausgabe zum Drucken oder als CSV-Export." }
  ],
  "Was ist eine Quadratwurzel-Tabelle?",
  "Eine übersichtliche Referenztabelle, die Quadratwurzeln aufeinanderfolgender Zahlen nebeneinander darstellt.",
  "Tabelle vs. Rechner: Was ist der Unterschied?",
  "Der Rechner löst eine einzelne Zahl mit Rechenschritten; die Tabelle zeigt den Überblick über ein gesamtes Intervall.",
  "Wie die Werte berechnet werden",
  "Nicht-Quadratzahlen ergeben irrationale Zahlen mit unendlich vielen Nachkommastellen, gerundet auf Ihre gewählte Genauigkeit.",
  "Beispiel: Generierte Tabelle von 1 bis 20",
  "Standardansicht mit 3 Nachkommastellen und Klassifizierung nach Quadratzahlen und irrationalen Zahlen.",
  "Zahl", "Quadratwurzel", "Typ", "Quadratzahl", "Irrational",
  "Tipps zur praktischen Nutzung",
  [
    { title: "Quadratzahlen als Anker nutzen", text: "Quadratzahlen (1, 4, 9, 16...) teilen das Intervall in handliche Abschnitte." },
    { title: "Typ-Spalte beachten", text: "Unterscheiden Sie exakte ganzzahlige Werte von Dezimalannäherungen." },
    { title: "Genauigkeit anpassen", text: "2 Stellen für den Unterricht, 4 für technische Berechnungen." }
  ],
  "Häufige Fehler vermeiden",
  [
    { title: "Gerundete Werte als exakt ansehen", text: "Wurzeln aus Nicht-Quadratzahlen sind irrationale Näherungswerte." },
    { title: "Verfahren nicht verstehen", text: "In Prüfungen wird oft die Primfaktorzerlegung verlangt." },
    { title: "Negative Zahlen erwarten", text: "Die Tabelle umfasst nur reelle, nicht-negative Wurzeln." }
  ],
  "Häufige Fragen (FAQ)",
  "Zusammenfassung",
  "Ein praktisches Werkzeug für Schüler, Lehrer und Ingenieure zur Erstellung druckfertiger Wurzeltabellen für jedes Intervall.",
  [
    { question: "Wozu dient eine Quadratwurzel-Tabelle?", answer: "Zum schnellen Nachschlagen mehrerer Wurzeln ohne ständiges Eintippen in einen Taschenrechner." },
    { question: "Kann ich Tabellen über 100 hinaus erstellen?", answer: "Ja, Sie können beliebige Start- und Endwerte frei wählen." },
    { question: "Kann die Tabelle ausgedruckt werden?", answer: "Ja, Sie können die Tabelle direkt ausdrucken oder als CSV kopieren." }
  ]
);

const it: ChartContent = createChartContent(
  'it',
  ["Intervalli Personalizzati", "Precisione 2–4 Decimali", "Copia CSV e Stampa", "100% Gratuito"],
  "Indice dei Contenuti",
  ["Generatore di Tabelle", "Come Usare il Generatore", "Cos'è una Tabella di Radici?", "Tabella vs Calcolatore", "Metodo di Calcolo", "Esempio: Tabella 1–20", "Come Leggere la Tabella", "Errori Comuni", "Domande Frequenti", "Riepilogo"],
  "Generatore di Tabelle di Radici Quadrate",
  "Crea tabelle di radici quadrate personalizzate per qualsiasi intervallo numerico con precisione decimale regolabile.",
  "Come Usare il Generatore",
  [
    { title: "Imposta l'intervallo", text: "Inserisci numero iniziale e finale (es. da 1 a 50)." },
    { title: "Scegli i decimali", text: "Seleziona 2, 3 o 4 cifre decimali." },
    { title: "Solo quadrati perfetti", text: "Filtra per mostrare esclusivamente radici intere." },
    { title: "Genera", text: "La tabella appare all'istante, pronta da copiare o stampare." }
  ],
  "Cos'è una Tabella di Radici Quadrate?",
  "Una lista di riferimento che mostra la radice quadrata di numeri sequenziali ordinati per consultazione rapida.",
  "Tabella vs Calcolatore: Quale Scegliere?",
  "Il calcolatore analizza un singolo numero passo dopo passo; la tabella offre una panoramica estesa.",
  "Come Vengono Calcolati i Valori",
  "I numeri non quadrati generano decimali irrazionali arrotondati alla precisione specificata.",
  "Esempio: Tabella Generata da 1 a 20",
  "Visualizzazione standard a 3 decimali con identificazione delle radici intere.",
  "Numero", "Radice Quadrata", "Tipo", "Quadrato Perfetto", "Irrazionale",
  "Consigli Pratici di Lettura",
  [
    { title: "Usa i quadrati perfetti come punti di riferimento", text: "Aiutano a stimare mentalmente le radici intermedie." },
    { title: "Controlla la colonna Tipo", text: "Distingui con certezza le radici intere da quelle irrazionali." },
    { title: "Adatta la precisione", text: "2 decimali per la scuola, 4 per compiti scientifici o tecnici." }
  ],
  "Errori da Evitare",
  [
    { title: "Scambiare valori arrotondati per esatti", text: "Le radici non intere continuano all'infinito." },
    { title: "Ignorare il metodo di fattorizzazione", text: "A scuola è spesso richiesto il procedimento analitico." },
    { title: "Cercare radici di numeri negativi", text: "Questa tabella include solo numeri reali positivi." }
  ],
  "Domande Frequenti",
  "Riepilogo Rapido",
  "La tabella di radici quadrate offre una panoramica istantanea. Configura intervalli, copia in CSV e stampa senza limiti.",
  [
    { question: "A cosa serve una tabella di radici quadrate?", answer: "A consultare rapidamente molte radici senza ricalcolarle ogni volta." },
    { question: "Posso superare il limite di 100?", answer: "Certamente, puoi scegliere qualsiasi intervallo numerico desiderato." },
    { question: "È possibile copiare o stampare la tabella?", answer: "Sì, supporta la stampa diretta e la copia in formato CSV." }
  ]
);

const pt: ChartContent = createChartContent(
  'pt',
  ["Intervalos Personalizados", "Precisão 2–4 Decimais", "Copiar CSV e Imprimir", "100% Gratuito"],
  "Índice",
  ["Gerador de Tabelas", "Como Usar o Gerador", "O que é uma Tabela de Raízes?", "Tabela vs Calculadora", "Como os Valores são Calculados", "Exemplo: Tabela 1–20", "Como Ler a Tabela", "Erros Comuns", "Perguntas Frequentes", "Resumo"],
  "Gerador de Tabela de Raiz Quadrada",
  "Crie tabelas personalizadas de raiz quadrada para qualquer faixa numérica com precisão configurável.",
  "Como Usar o Gerador",
  [
    { title: "Defina o intervalo", text: "Insira valor inicial e final (ex.: 1 a 50 ou 100 a 200)." },
    { title: "Escolha as casas decimais", text: "Defina 2, 3 ou 4 casas decimais para arredondamento." },
    { title: "Apenas quadrados perfeitos", text: "Ative para listar apenas resultados inteiros." },
    { title: "Gerar tabela", text: "Tabela pronta para impressão ou exportação CSV." }
  ],
  "O que é uma Tabela de Raiz Quadrada?",
  "Uma lista de consulta prática que exibe a raiz quadrada de uma sequência contínua de números inteiros.",
  "Tabela vs Calculadora: Qual Utilizar?",
  "A calculadora detalha um número por vez; a tabela fornece uma visão ampla de um intervalo completo.",
  "Como os Valores são Calculados",
  "Valores não quadrados produzem números irracionais com dízimas infinitas, arredondados conforme sua preferência.",
  "Exemplo: Tabela Gerada de 1 a 20",
  "Exemplo prático com 3 casas decimais e distinção entre quadrados perfeitos e números irracionais.",
  "Número", "Raiz Quadrada", "Tipo", "Quadrado Perfeito", "Irracional",
  "Dicas para Aproveitar sua Tabela",
  [
    { title: "Identifique os quadrados perfeitos", text: "Servem como âncoras para estimativas rápidas de cálculo mental." },
    { title: "Verifique a coluna Tipo", text: "Diferencie facilmente raízes exatas de dízimas arredondadas." },
    { title: "Ajuste a precisão ao objetivo", text: "2 decimais para estudos gerais, 4 decimais para engenharia." }
  ],
  "Erros Frequentes para Evitar",
  [
    { title: "Tratar arredondamentos como números exatos", text: "Raízes de números não quadrados são sempre irracionais." },
    { title: "Apenas consultar sem entender a fatoração", text: "Em provas escolares é essencial demonstrar os fatores primos." },
    { title: "Procurar raízes de números negativos", text: "A tabela opera exclusivamente no conjunto dos números reais." }
  ],
  "Perguntas Frequentes",
  "Resumo Rápido",
  "A tabela de raiz quadrada economiza tempo e organiza valores numéricos em tabelas limpas e exportáveis em CSV.",
  [
    { question: "Para que serve a tabela de raízes?", answer: "Para consultar múltiplos valores instantaneamente durante estudos e cálculos." },
    { question: "Posso criar tabelas além de 100?", answer: "Sim, você pode definir qualquer início e fim sem restrições." },
    { question: "É possível exportar ou imprimir?", answer: "Sim, há botões para impressão rápida e cópia direta em CSV." }
  ]
);

const ru: ChartContent = createChartContent(
  'ru',
  ["Свои Диапазоны", "Точность 2–4 Знака", "Копировать CSV и Печать", "100% Бесплатно"],
  "Содержание",
  ["Генератор Таблиц", "Как Пользоваться", "Что Такое Таблица Корней?", "Таблица или Калькулятор", "Как Вычисляются Значения", "Пример: Таблица 1–20", "Как Читать Таблицу", "Частые Ошибки", "Частые Вопросы", "Краткий Итог"],
  "Генератор Таблицы Квадратных Корней",
  "Создавайте настраиваемые таблицы квадратных корней для любого диапазона чисел с нужной точностью округления.",
  "Как пользоваться генератором таблиц",
  [
    { title: "Задайте диапазон", text: "Введите начальное и конечное число (например, от 1 до 50)." },
    { title: "Выберите точность", text: "Укажите 2, 3 или 4 знака после запятой." },
    { title: "Только точные квадраты", text: "Включите фильтр для отображения исключительно целых корней." },
    { title: "Создать таблицу", text: "Таблица мгновенно готова для печати или копирования в CSV." }
  ],
  "Что такое таблица квадратных корней?",
  "Справочный перечень, показывающий значения квадратных корней последовательных чисел для быстрого поиска.",
  "Таблица или калькулятор: в чем разница?",
  "Калькулятор решает одно число с пошаговым разложением; таблица дает панорамный обзор всего диапазона.",
  "Как рассчитываются значения",
  "Корни из чисел, не являющихся точными квадратами, представляют собой иррациональные бесконечные дроби.",
  "Пример: Сгенерированная таблица от 1 до 20",
  "Стандартный вид таблицы с точностью до 3 знаков и классификацией чисел.",
  "Число", "Квадратный Корень", "Тип", "Точный Квадрат", "Иррациональное",
  "Советы по чтению таблицы",
  [
    { title: "Ориентируйтесь на точные квадраты", text: "Используйте 1, 4, 9, 16, 25 как опорные точки для интерполяции." },
    { title: "Смотрите на столбец 'Тип'", text: "Сразу отличайте точные целые результаты от приближенных значений." },
    { title: "Выбирайте подходящую точность", text: "2 знака для школы, 4 для инженерных и физических расчетов." }
  ],
  "Типичные ошибки",
  [
    { title: "Считать округленное значение точным", text: "Иррациональные корни имеют бесконечную непериодическую дробь." },
    { title: "Забывать про метод факторизации", text: "На экзаменах часто требуется показать разложение на простые множители." },
    { title: "Искать отрицательные числа", text: "Таблица построена исключительно для действительных чисел." }
  ],
  "Частые Вопросы",
  "Краткий Итог",
  "Таблица квадратных корней обеспечивает быстрый доступ ко всем значениям интервала. Настраивайте диапазоны и экспортируйте в CSV.",
  [
    { question: "Зачем нужна таблица квадратных корней?", answer: "Для моментального поиска значений без необходимости считать каждое вручную." },
    { question: "Можно ли построить таблицу дальше 100?", answer: "Да, вы можете задать любой числовой диапазон без ограничений." },
    { question: "Можно ли распечатать таблицу?", answer: "Да, поддерживается прямая печать и копирование таблицы в формате CSV." }
  ]
);

const pl: ChartContent = createChartContent(
  'pl',
  ["Własne Zakresy", "Dokładność 2–4 Miejsca", "Kopiuj CSV i Drukuj", "100% Za Darmo"],
  "Spis Treści",
  ["Generator Tabel", "Jak Korzystać", "Czym jest Tabela Pierwiastków?", "Tabela a Kalkulator", "Metoda Obliczeń", "Przykład: Tabela 1–20", "Jak Czytać Tabelę", "Częste Błędy", "Często Zadawane Pytania", "Podsumowanie"],
  "Generator Tabeli Pierwiastków Kwadratowych",
  "Twórz niestandardowe tabele pierwiastków kwadratowych dla dowolnego zakresu liczb z wybraną dokładnością dziesiętną.",
  "Jak korzystać z generatora",
  [
    { title: "Ustaw zakres", text: "Wpisz liczbę początkową i końcową (np. 1 do 50)." },
    { title: "Wybierz precyzję", text: "Wybierz 2, 3 lub 4 miejsca po przecinku." },
    { title: "Tylko kwadraty doskonałe", text: "Filtruj, aby pokazać wyłącznie wyniki całkowite." },
    { title: "Generuj tabelę", text: "Tabela jest gotowa do wydruku lub skopiowania do CSV." }
  ],
  "Czym jest tabela pierwiastków kwadratowych?",
  "Zestawienie referencyjne ułatwiające szybkie odczytywanie pierwiastków z kolejnych liczb całkowitych.",
  "Tabela a kalkulator: czym się różnią?",
  "Kalkulator rozwiązuje jedną liczbę krok po kroku; tabela zapewnia całościowy przegląd przedziału liczbowego.",
  "Jak obliczane są wartości",
  "Liczby niebędące kwadratami doskonałymi dają ułamki niewymierne zaokrąglone do wybranej liczby miejsc.",
  "Przykład: Tabela od 1 do 20",
  "Widok tabeli z 3 miejscami po przecinku i rozróżnieniem liczb całkowitych od niewymiernych.",
  "Liczba", "Pierwiastek", "Typ", "Kwadrat Doskonały", "Liczba Niewymierna",
  "Wskazówki praktyczne",
  [
    { title: "Zwracaj uwagę na kwadraty doskonałe", text: "Służą jako punkty orientacyjne do szacowania wyników." },
    { title: "Sprawdzaj kolumnę Typ", text: "Odróżniaj dokładne wyniki od wartości zaokrąglonych." },
    { title: "Dopasuj precyzję", text: "2 miejsca do szkoły, 4 do obliczeń fizycznych i technicznych." }
  ],
  "Błędy do unikania",
  [
    { title: "Mylenie wartości zaokrąglonej z dokładną", text: "Pierwiastki niewymierne mają nieskończone rozwinięcie." },
    { title: "Brak znajomości rozkładu na czynniki", text: "Na egzaminach wymagane jest przedstawienie toku rozumowania." },
    { title: "Szukanie liczb ujemnych", text: "Tabela obejmuje wyłącznie rzeczywiste pierwiastki nieujemne." }
  ],
  "Często Zadawane Pytania",
  "Podsumowanie",
  "Wygodne narzędzie do generowania, kopiowania i drukowania tabel pierwiastków dla dowolnych zakresów.",
  [
    { question: "Do czego służy tabela pierwiastków?", answer: "Umożliwia błyskawiczne sprawdzanie wielu wartości bez używania kalkulatora dla każdej z nich." },
    { question: "Czy zakres może przekraczać 100?", answer: "Tak, możesz ustawić dowolne liczby początkowe i końcowe." },
    { question: "Czy tabelę można wydrukować?", answer: "Tak, strona posiada funkcję druku oraz kopiowania do schowka w formacie CSV." }
  ]
);

const sv: ChartContent = createChartContent(
  'sv',
  ["Anpassade Intervall", "2–4 Decimalers Precision", "Kopiera CSV & Skriv ut", "100% Gratis"],
  "Innehållsförteckning",
  ["Tabellgenerator", "Hur man Använder", "Vad är en Kvadratrotstabell?", "Tabell vs Kalkylator", "Hur Värden Beräknas", "Exempel: Tabell 1–20", "Hur Tabellen Läses", "Vanliga Misstag", "Vanliga Frågor", "Sammanfattning"],
  "Generator för Kvadratrotstabell",
  "Skapa anpassade kvadratrotstabeller för valfritt talintervall med önskad decimalprecision.",
  "Hur man använder generatorn",
  [
    { title: "Ange intervall", text: "Välj start- och slutnummer (t.ex. 1 till 50)." },
    { title: "Välj precision", text: "Välj 2, 3 eller 4 decimaler för avrundning." },
    { title: "Endast perfekta kvadrater", text: "Filtrera för att endast se jämna heltalsrötter." },
    { title: "Generera", text: "Tabellen skapas direkt, redo att skrivas ut eller kopieras." }
  ],
  "Vad är en kvadratrotstabell?",
  "En referenslista som visar kvadratroten ur på varandra följande tal sida vid sida.",
  "Tabell kontra kalkylator: vad är skillnaden?",
  "Kalkylatorn löser ett enskilt tal i detalj; tabellen ger en överblick över ett helt intervall.",
  "Hur värdena beräknas",
  "Tal som inte är perfekta kvadrater ger irrationella tal med oändliga decimaler som avrundas.",
  "Exempel: Tabell från 1 till 20",
  "Standardvy med 3 decimalers noggrannhet och klassificering av taltyper.",
  "Tal", "Kvadratrot", "Typ", "Perfekt Kvadrat", "Irrationellt",
  "Praktiska tips för användning",
  [
    { title: "Hitta perfekta kvadrater först", text: "De fungerar som fasta ankare för snabba uppskattningar." },
    { title: "Kolla kolumnen Typ", text: "Skilj direkt mellan exakta heltalsrötter och avrundade värden." },
    { title: "Anpassa precisionen", text: "2 decimaler för skolarbete, 4 för tekniska beräkningar." }
  ],
  "Misstag att undvika",
  [
    { title: "Att ta avrundade värden som exakta", text: "Irrationella rötter har oändliga decimaler utan mönster." },
    { title: "Att inte kunna primtalsfaktorisera", text: "I prov krävs ofta att man visar manuella uträkningar." },
    { title: "Förvänta sig negativa tal", text: "Tabellen omfattar enbart reella, positiva kvadratrötter." }
  ],
  "Vanliga Frågor",
  "Sammanfattning",
  "En komplett och flexibel tabellgenerator som sparar tid och underlättar studier och tekniskt arbete.",
  [
    { question: "Vad används en kvadratrotstabell till?", answer: "För snabb överblick och uppslag utan att behöva räkna varje tal manuellt." },
    { question: "Kan jag skapa tabeller över 100?", answer: "Ja, du kan ställa in vilket start- och slutvärde som helst." },
    { question: "Kan tabellen skrivas ut?", answer: "Ja, med ett klick kan du skriva ut eller kopiera tabellen som CSV." }
  ]
);

const tr: ChartContent = createChartContent(
  'tr',
  ["Özel Aralıklar", "2–4 Basamak Hassasiyeti", "CSV Kopyala & Yazdır", "%100 Ücretsiz"],
  "İçindekiler",
  ["Özel Tablo Oluşturucu", "Nasıl Kullanılır", "Karekök Tablosu Nedir?", "Tablo ile Hesaplayıcı Farkı", "Değerler Nasıl Hesaplanır", "Örnek: 1–20 Tablosu", "Tablo Nasıl Okunur", "Yaygın Hatalar", "Sıkça Sorulan Sorular", "Özet"],
  "Karekök Tablosu Oluşturucu",
  "İstediğiniz sayı aralığı ve basamak hassasiyetine göre özelleştirilmiş karekök tabloları oluşturun.",
  "Tablo Oluşturucu Nasıl Kullanılır?",
  [
    { title: "Aralığı belirleyin", text: "Başlangıç ve bitiş sayısını girin (ör. 1 ile 50 arası)." },
    { title: "Hassasiyeti seçin", text: "2, 3 veya 4 ondalık basamak belirleyin." },
    { title: "Sadece tam kareler", text: "Sadece tam sayı kökleri görmek için bu seçeneği açın." },
    { title: "Oluştur", text: "Tablonuz saniyeler içinde yazdırılmaya veya kopyalanmaya hazır." }
  ],
  "Karekök Tablosu Nedir?",
  "Ardışık sayıların karekök değerlerini yan yana listeleyen pratik bir başvuru tablosudur.",
  "Tablo ile Hesaplayıcı Arasındaki Fark",
  "Hesaplayıcı tek bir sayıyı adımlarıyla çözer; tablo ise tüm aralığı genel bakış olarak sunar.",
  "Değerler Nasıl Hesaplanır?",
  "Tam kare olmayan sayılar irrasyonel sonsuz ondalıklar üretir ve seçtiğiniz basamağa yuvarlanır.",
  "Örnek: 1–20 Aralığında Tablo",
  "3 basamak hassasiyetli ve sayı türlerini belirten örnek tablo görünümü.",
  "Sayı", "Karekök", "Tür", "Tam Kare", "İrrasyonel",
  "Tabloyu Okuma İpuçları",
  [
    { title: "Tam kareleri referans alın", text: "1, 4, 9, 16 gibi sayılar ara kökleri tahmin etmenizi kolaylaştırır." },
    { title: "Tür sütununu inceleyin", text: "Tam sayılar ile yuvarlanmış ondalıkları ayırt edin." },
    { title: "Hassasiyeti ihtiyaca göre ayarlayın", text: "Dersler için 2 basamak, mühendislik için 4 basamak idealdir." }
  ],
  "Kaçınılması Gereken Hatalar",
  [
    { title: "Yuvarlanmış değeri kesin sanmak", text: "İrrasyonel kökler sonsuz basamağa sahiptir." },
    { title: "Asal çarpanlara ayırmayı bilmemek", text: "Sınavlarda genellikle işlem adımlarının gösterilmesi istenir." },
    { title: "Negatif sayıları aramak", text: "Bu tablo sadece reel pozitif karekökleri kapsar." }
  ],
  "Sıkça Sorulan Sorular",
  "Özet",
  "Karekök tablosu aralıktaki tüm değerlere anında erişim sağlar. Aralıkları özelleştirin, yazdırın veya CSV olarak kopyalayın.",
  [
    { question: "Karekök tablosu ne işe yarar?", answer: "Çok sayıda karekök değerini tek tek hesaplamadan hızlıca kontrol etmeyi sağlar." },
    { question: "100'den büyük aralıklar oluşturulabilir mi?", answer: "Evet, başlangıç ve bitiş değerlerini serbestçe belirleyebilirsiniz." },
    { question: "Tablo yazdırılabilir mi?", answer: "Evet, sayfayı doğrudan yazdırabilir veya CSV formatında kopyalayabilirsiniz." }
  ]
);

const id: ChartContent = createChartContent(
  'id',
  ["Rentang Kustom", "Presisi 2–4 Desimal", "Salin CSV & Cetak", "100% Gratis"],
  "Daftar Isi",
  ["Pembuat Tabel Kustom", "Cara Menggunakan", "Apa itu Tabel Akar Kuadrat?", "Tabel vs Kalkulator", "Cara Nilai Dihitung", "Contoh: Tabel 1–20", "Cara Membaca Tabel", "Kesalahan Umum", "Pertanyaan Umum", "Ringkasan"],
  "Generator Tabel Akar Kuadrat",
  "Buat tabel akar kuadrat kustom untuk rentang angka berapa pun dengan presisi desimal yang dapat disesuaikan.",
  "Cara Menggunakan Generator Tabel",
  [
    { title: "Tentukan rentang", text: "Masukkan angka awal dan akhir (misalnya 1 hingga 50)." },
    { title: "Pilih presisi desimal", text: "Pilih 2, 3, atau 4 angka di belakang koma." },
    { title: "Hanya kuadrat sempurna", text: "Aktifkan untuk hanya menampilkan hasil bilangan bulat." },
    { title: "Klik Buat", text: "Tabel Anda langsung tampil, siap disalin atau dicetak." }
  ],
  "Apa itu Tabel Akar Kuadrat?",
  "Daftar referensi praktis yang menampilkan akar kuadrat dari urutan angka secara berdampingan.",
  "Tabel vs Kalkulator: Apa Bedanya?",
  "Kalkulator menghitung satu angka secara mendalam; tabel memberikan gambaran menyeluruh dari suatu rentang.",
  "Bagaimana Nilai Dihitung",
  "Angka yang bukan kuadrat sempurna menghasilkan desimal irasional tak berhingga yang dibulatkan.",
  "Contoh: Tabel yang Dihasilkan 1–20",
  "Pratinjau tabel dengan presisi 3 desimal dan klasifikasi jenis angka.",
  "Angka", "Akar Kuadrat", "Tipe", "Kuadrat Sempurna", "Irasional",
  "Tips Membaca dan Memanfaatkan Tabel",
  [
    { title: "Cari kuadrat sempurna terlebih dahulu", text: "Gunakan sebagai patokan untuk memperkirakan nilai akar lainnya." },
    { title: "Perhatikan kolom Tipe", text: "Bedakan langsung antara akar bulat pasti dan nilai taksiran." },
    { title: "Sesuaikan presisi dengan kebutuhan", text: "2 desimal untuk sekolah, 4 desimal untuk perhitungan sains dan teknik." }
  ],
  "Kesalahan yang Harus Dihindari",
  [
    { title: "Menganggap nilai pembulatan sebagai angka eksak", text: "Akar irasional memiliki desimal tak berhingga." },
    { title: "Hanya menghafal tanpa memahami faktorisasi", text: "Dalam ujian sekolah, langkah faktorisasi prima tetap diwajibkan." },
    { title: "Mencari akar dari bilangan negatif", text: "Tabel ini hanya mencakup akar bilangan real positif." }
  ],
  "Pertanyaan Umum",
  "Ringkasan Cepat",
  "Tabel akar kuadrat memberikan gambaran menyeluruh yang cepat. Sesuaikan rentang, ekspor ke CSV, atau cetak sesuka Anda.",
  [
    { question: "Untuk apa tabel akar kuadrat digunakan?", answer: "Untuk mencari banyak nilai akar sekaligus tanpa harus menghitung satu per satu." },
    { question: "Bisakah membuat rentang lebih dari 100?", answer: "Bisa, Anda bebas memasukkan angka awal dan akhir berapa pun." },
    { question: "Apakah tabel bisa dicetak atau disimpan?", answer: "Bisa, Anda dapat langsung mencetak halaman atau menyalin tabel dalam format CSV." }
  ]
);

const ms: ChartContent = createChartContent(
  'ms',
  ["Julat Tersuai", "Ketepatan 2–4 Perpuluhan", "Salin CSV & Cetak", "100% Percuma"],
  "Isi Kandungan",
  ["Penjana Jadual Tersuai", "Cara Menggunakan", "Apakah Jadual Punca Kuasa Dua?", "Jadual vs Kalkulator", "Cara Nilai Dikira", "Contoh: Jadual 1–20", "Cara Membaca Jadual", "Kesilapan Lazim", "Soalan Lazim", "Rumusan"],
  "Penjana Jadual Punca Kuasa Dua",
  "Bina jadual punca kuasa dua tersuai untuk sebarang julat nombor dengan ketepatan perpuluhan yang fleksibel.",
  "Cara Menggunakan Penjana Jadual",
  [
    { title: "Tetapkan julat", text: "Masukkan nombor permulaan dan akhir (cth. 1 hingga 50)." },
    { title: "Pilih perpuluhan", text: "Pilih 2, 3 atau 4 tempat perpuluhan." },
    { title: "Kuasa dua sempurna sahaja", text: "Tapis untuk memaparkan hasil nombor bulat sahaja." },
    { title: "Jana jadual", text: "Jadual anda siap dipaparkan, sedia disalin atau dicetak." }
  ],
  "Apakah Jadual Punca Kuasa Dua?",
  "Senarai rujukan pantas yang memaparkan punca kuasa dua bagi nombor berturutan bersebelahan.",
  "Jadual vs Kalkulator: Apa Bezanya?",
  "Kalkulator menyelesaikan satu nombor secara langkah demi langkah; jadual memaparkan keseluruhan julat.",
  "Bagaimana Nilai Dikira",
  "Nombor bukan kuasa dua sempurna menghasilkan nombor bukan nisbah yang dibundarkan mengikut pilihan anda.",
  "Contoh: Jadual Dijana 1–20",
  "Paparan contoh dengan 3 tempat perpuluhan berserta penandaan jenis nombor.",
  "Nombor", "Punca Kuasa Dua", "Jenis", "Kuasa Dua Sempurna", "Bukan Nisbah",
  "Petua Membaca Jadual",
  [
    { title: "Kenal pasti kuasa dua sempurna dahulu", text: "Jadikan titik rujukan untuk menganggar nilai punca kuasa lain." },
    { title: "Semak lajur Jenis", text: "Bezakan nilai nombor bulat tepat dengan nombor perpuluhan anggaran." },
    { title: "Sesuaikan ketepatan", text: "2 tempat perpuluhan untuk kerja sekolah, 4 untuk pengiraan teknikal." }
  ],
  "Kesilapan yang Perlu Dielakkan",
  [
    { title: "Menganggap nilai bundar sebagai tepat", text: "Nilai punca bukan nisbah mempunyai perpuluhan tidak terhingga." },
    { title: "Bergantung pada jadual tanpa faham konsep", text: "Peperiksaan sering meminta kaedah pemfaktoran nombor perdana." },
    { title: "Mencari punca nombor negatif", text: "Jadual ini meliputi nombor nyata positif sahaja." }
  ],
  "Soalan Lazim",
  "Rumusan Pantas",
  "Jadual punca kuasa dua memberikan rujukan pantas untuk pembelajaran dan kerja teknikal. Bina, salin CSV atau cetak secara percuma.",
  [
    { question: "Apakah kegunaan jadual punca kuasa dua?", answer: "Mencari pelbagai nilai punca kuasa dua dengan pantas tanpa perlu menaip berulang kali." },
    { question: "Bolehkah menjana jadual melebihi 100?", answer: "Boleh, anda bebas memasukkan sebarang nombor permulaan dan akhir." },
    { question: "Bolehkah jadual dicetak?", answer: "Boleh, anda boleh mencetak terus atau menyalin data dalam format CSV." }
  ]
);

const ar: ChartContent = createChartContent(
  'ar',
  ["نطاقات مخصصة", "دقة 2–4 منازل عشرية", "نسخ CSV وطباعة", "مجاني 100%"],
  "فهرس المحتويات",
  ["منشئ الجداول المخصص", "كيفية الاستخدام", "ما هو جدول الجذور التربيعية؟", "الجدول مقابل الحاسبة", "طريقة حساب القيم", "مثال: جدول 1–20", "كيفية قراءة الجدول", "أخطاء شائعة", "الأسئلة الشائعة", "ملخص سريع"],
  "منشئ جدول الجذور التربيعية",
  "أنشئ جداول جذور تربيعية مخصصة لأي نطاق رقمي تختاره مع التحكم الكامل في دقة المنازل العشرية.",
  "كيفية استخدام منشئ الجدول",
  [
    { title: "حدد النطاق", text: "أدخل رقم البداية والنهاية (مثلاً من 1 إلى 50)." },
    { title: "اختر الدقة العشرية", text: "حدد 2 أو 3 أو 4 منازل عشرية." },
    { title: "المربعات الكاملة فقط", text: "فعّل هذا الخيار لعرض الجذور الصحيحة فقط." },
    { title: "إنشاء الجدول", text: "يظهر جدولك فوراً، جاهزاً للنسخ أو الطباعة." }
  ],
  "ما هو جدول الجذور التربيعية؟",
  "قائمة مرجعية سريعة تعرض الجذر التربيعي للأرقام المتتالية جنباً إلى جنب لتسهيل البحث والمقارنة.",
  "الجدول مقابل الحاسبة: ما الفرق؟",
  "تحل الحاسبة رقماً واحداً بخطوات تفصيلية، بينما يعرض الجدول نطاقاً كاملاً دفعة واحدة.",
  "كيف تُحسب القيم في الجدول؟",
  "الأعداد غير المربعة تنتج أعداداً غير نسبية بأرقام عشرية لا نهائية يتم تقريبها للدقة المحددة.",
  "مثال: جدول مولد من 1 إلى 20",
  "معاينة لجدول بدقة 3 منازل عشرية مع توضيح نوع كل جذر.",
  "العدد", "الجذر التربيعي", "النوع", "مربع كامل", "غير نسبي",
  "نصائح لقراءة واستخدام الجدول",
  [
    { title: "ابحث عن المربعات الكاملة أولاً", text: "تعتبر نقاط ارتكاز ممتازة لتقدير الجذور الأخرى ذهنياً." },
    { title: "انتبه لعمود النوع", text: "يميز فوراً بين الأعداد الصحيحة والقيم العشرية المقربة." },
    { title: "اضبط الدقة حسب الحاجة", text: "منزلتان للمهام المدرسية، و4 منازل للحسابات الهندسية." }
  ],
  "أخطاء شائعة يجب تجنبها",
  [
    { title: "اعتبار القيمة المقربة قيمة دقيقة", text: "الجذور غير النسبية لا تنتهي أرقامها العشرية أبداً." },
    { title: "إهمال فهم التحليل الأولي", text: "في الامتحانات يُطلب عادة إظهار خطوات التحليل للعوامل." },
    { title: "البحث عن أعداد سالبة", text: "الجدول مخصص للأعداد الحقيقية الموجبة فقط." }
  ],
  "الأسئلة الشائعة",
  "ملخص سريع",
  "يوفر جدول الجذور التربيعية رؤية شاملة وسريعة لمجال عددي كامل. خصص النطاق واطبع الجداول أو انسخها مجاناً.",
  [
    { question: "ما فائدة جدول الجذور التربيعية؟", answer: "البحث السريع عن قيم الجذور المتعددة دون الحاجة لحساب كل رقم بشكل منفصل." },
    { question: "هل يمكن توليد جدول أكبر من 100؟", answer: "نعم، يمكنك تحديد أي رقم بداية ونهاية تريده دون قيود." },
    { question: "هل يمكن طباعة الجدول أو نسخه؟", answer: "نعم، يمكنك الطباعة مباشرة أو نسخ البيانات بتنسيق CSV بنقرة واحدة." }
  ]
);

const hi: ChartContent = createChartContent(
  'hi',
  ["कस्टम रेंज", "2–4 दशमलव सटीकता", "CSV कॉपी और प्रिंट", "100% मुफ़्त"],
  "विषय सूची",
  ["कस्टम टेबल जनरेटर", "उपयोग कैसे करें", "वर्गमूल चार्ट क्या है?", "चार्ट बनाम कैलकुलेटर", "मानों की गणना कैसे होती है", "उदाहरण: 1–20 चार्ट", "चार्ट कैसे पढ़ें", "सामान्य गलतियाँ", "अक्सर पूछे जाने वाले प्रश्न", "त्वरित सारांश"],
  "वर्गमूल चार्ट और तालिका जनरेटर",
  "किसी भी संख्या सीमा के लिए अपनी पसंद की दशमलव सटीकता के साथ कस्टम वर्गमूल तालिका बनाएं।",
  "तालिका जनरेटर का उपयोग कैसे करें",
  [
    { title: "रेंज निर्धारित करें", text: "प्रारंभिक और अंतिम संख्या दर्ज करें (जैसे 1 से 50)।" },
    { title: "दशमलव सटीकता चुनें", text: "2, 3 या 4 दशमलव स्थान चुनें।" },
    { title: "केवल पूर्ण वर्ग (वैकल्पिक)", text: "केवल पूर्ण संख्या वाले परिणाम देखने के लिए इसे चुनें।" },
    { title: "जनरेट करें", text: "आपकी तालिका तुरंत तैयार हो जाएगी, कॉपी या प्रिंट के लिए तैयार।" }
  ],
  "वर्गमूल चार्ट क्या है?",
  "यह एक त्वरित संदर्भ तालिका है जो एक क्रम में संख्याओं के वर्गमूल को एक साथ दर्शाती है।",
  "चार्ट बनाम कैलकुलेटर: क्या अंतर है?",
  "कैलकुलेटर एक समय में एक संख्या को हल करता है; चार्ट एक पूरी सीमा का त्वरित अवलोकन प्रदान करता है।",
  "मानों की गणना कैसे की जाती है?",
  "गैर-पूर्ण वर्ग संख्याएं अपरिमेय संख्याएं देती हैं, जिन्हें आपकी चयनित दशमलव सीमा तक पूर्णांकित किया जाता है।",
  "उदाहरण: 1 से 20 तक की तालिका",
  "3 दशमलव स्थानों और संख्या वर्गीकरण के साथ मानक तालिका दृश्य।",
  "संख्या", "वर्गमूल", "प्रकार", "पूर्ण वर्ग", "अपरिमेय",
  "चार्ट पढ़ने के व्यावहारिक सुझाव",
  [
    { title: "पहले पूर्ण वर्ग खोजें", text: "1, 4, 9, 16 आदि अन्य मूलों का अनुमान लगाने में मदद करते हैं।" },
    { title: "प्रकार स्तंभ देखें", text: "पूर्ण मूलों और दशमलव अनुमानों में तुरंत अंतर करें।" },
    { title: "सटीकता समायोजित करें", text: "स्कूल के लिए 2 दशमलव और विज्ञान/इंजीनियरिंग के लिए 4 दशमलव चुनें।" }
  ],
  "बचने योग्य सामान्य गलतियाँ",
  [
    { title: "अनुमानित मान को सटीक समझना", text: "अपरिमेय वर्गमूलों के दशमलव कभी समाप्त नहीं होते।" },
    { title: "अभाज्य गुणनखंडन को न समझना", text: "परीक्षाओं में अक्सर चरण-दर-चरण हल दिखाने की आवश्यकता होती है।" },
    { title: "ऋणात्मक संख्याओं की तलाश करना", text: "यह तालिका केवल वास्तविक धनात्मक संख्याओं को कवर करती है।" }
  ],
  "अक्सर पूछे जाने वाले प्रश्न",
  "त्वरित सारांश",
  "वर्गमूल तालिका पूरी संख्या सीमा का अवलोकन प्रदान करती है। अपनी रेंज कस्टमाइज़ करें और मुफ़्त में प्रिंट करें।",
  [
    { question: "वर्गमूल चार्ट का क्या उपयोग है?", answer: "एक साथ कई संख्याओं के वर्गमूल जल्दी देखने के लिए, जो गृहकार्य और परीक्षा में उपयोगी है।" },
    { question: "क्या 100 से अधिक की तालिका बन सकती है?", answer: "हाँ, आप अपनी पसंद की कोई भी सीमा चुन सकते हैं।" },
    { question: "क्या तालिका प्रिंट की जा सकती है?", answer: "हाँ, आप सीधे प्रिंट कर सकते हैं या CSV में कॉपी कर सकते हैं।" }
  ]
);

const bn: ChartContent = createChartContent(
  'bn',
  ["কাস্টম রেঞ্জ", "২–৪ দশমিক নির্ভুলতা", "CSV কপি ও প্রিন্ট", "১০০% সম্পূর্ণ ফ্রি"],
  "সূচিপত্র",
  ["কাস্টম টেবিল বিল্ডার", "ব্যবহারের নিয়ম", "বর্গমূল চার্ট কী?", "চার্ট বনাম ক্যালকুলেটর", "মান যেভাবে গণনা করা হয়", "উদাহরণ: ১–২০ চার্ট", "চার্ট পড়ার নিয়ম", "সাধারণ ভুলসমূহ", "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী", "সংক্ষিপ্ত সারসংক্ষেপ"],
  "বর্গমূল চার্ট ও টেবিল জেনারেটর",
  "যেকোনো সংখ্যার রেঞ্জের জন্য আপনার পছন্দের দশমিক নির্ভুলতা অনুযায়ী বর্গমূল টেবিল তৈরি করুন।",
  "টেবিল জেনারেটর ব্যবহারের নিয়ম",
  [
    { title: "রেঞ্জ নির্ধারণ করুন", text: "শুরুর এবং শেষের সংখ্যা লিখুন (যেমন ১ থেকে ৫০)।" },
    { title: "দশমিক স্থান বাছুন", text: "২, ৩ বা ৪ দশমিক নির্ভুলতা নির্বাচন করুন।" },
    { title: "শুধু পূর্ণবর্গ সংখ্যা", text: "কেবল পূর্ণসংখ্যা ফলাফল দেখতে এটি চালু করুন।" },
    { title: "তৈরি করুন", text: "আপনার টেবিল মুহূর্তেই প্রস্তুত, প্রিন্ট বা কপি করার জন্য।" }
  ],
  "বর্গমূল চার্ট কী?",
  "এটি একটি রেফারেন্স তালিকা যা ধারাবাহিকভাবে একাধিক সংখ্যার বর্গমূল সহজে দেখতে সহায়তা করে।",
  "চার্ট বনাম ক্যালকুলেটর: পার্থক্য কী?",
  "ক্যালকুলেটর একটি নির্দিষ্ট সংখ্যা বিস্তারিতভাবে সমাধান করে; চার্ট পুরো রেঞ্জের সামগ্রিক দৃশ্য দেখায়।",
  "মান কীভাবে হিসাব করা হয়",
  "অ-পূর্ণবর্গ সংখ্যাগুলো অমূলদ সংখ্যা তৈরি করে, যা আপনার নির্বাচিত দশমিক স্থান পর্যন্ত আসন্ন মানে দেখানো হয়।",
  "উদাহরণ: ১ থেকে ২০ পর্যন্ত টেবিল",
  "৩ দশমিক নির্ভুলতাসহ পূর্ণবর্গ ও অমূলদ সংখ্যার নমুনা টেবিল।",
  "সংখ্যা", "বর্গমূল", "ধরন", "পূর্ণবর্গ", "অমূলদ",
  "চার্ট ব্যবহারের কার্যকরী টিপস",
  [
    { title: "প্রথমে পূর্ণবর্গ সংখ্যাগুলো লক্ষ্য করুন", text: "এগুলো আনুমানিক হিসাব বোঝার চমৎকার সহায়ক।" },
    { title: "ধরন কলামটি দেখুন", text: "নিখুঁত পূর্ণসংখ্যা এবং আসন্ন মানের পার্থক্য বুঝুন।" },
    { title: "প্রয়োজনমতো নির্ভুলতা পরিবর্তন করুন", text: "স্কুলের জন্য ২ দশমিক এবং প্রকৌশলের জন্য ৪ দশমিক স্থান উপযুক্ত।" }
  ],
  "যে ভুলগুলো এড়িয়ে চলবেন",
  [
    { title: "আসন্ন মানকে পুরোপুরি নির্ভুল ভাবা", text: "অমূলদ বর্গমূলের দশমিক কখনো শেষ হয় না।" },
    { title: "উৎপাদকে বিশ্লেষণের নিয়ম না জানা", text: "পরীক্ষায় সাধারণত ধাপে ধাপে সমাধান দেখাতে হয়।" },
    { title: "ঋণাত্মক সংখ্যার বর্গমূল খোঁজা", text: "এই টেবিলটি কেবল বাস্তব ধনাত্মক সংখ্যার জন্য প্রযোজ্য।" }
  ],
  "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
  "সংক্ষিপ্ত সারসংক্ষেপ",
  "বর্গমূল চার্ট দ্রুত মান খোঁজার এক দুর্দান্ত মাধ্যম। আপনার রেঞ্জ কাস্টমাইজ করুন এবং সহজে প্রিন্ট করুন।",
  [
    { question: "বর্গমূল চার্ট কী কাজে লাগে?", answer: "একসাথে একাধিক সংখ্যার বর্গমূল দ্রুত দেখতে এটি দারুণভাবে সহায়ক।" },
    { question: "১০০ এর চেয়ে বড় রেঞ্জ তৈরি করা যায়?", answer: "হ্যাঁ, যেকোনো শুরুর ও শেষের সংখ্যা দিয়ে টেবিল তৈরি করা যায়।" },
    { question: "টেবিল কি প্রিন্ট করা যায়?", answer: "হ্যাঁ, আপনি সরাসরি প্রিন্ট করতে পারেন অথবা CSV হিসেবে কপি করতে পারেন।" }
  ]
);

const ja: ChartContent = createChartContent(
  'ja',
  ["カスタム範囲", "小数2〜4桁の精度", "CSVコピー＆印刷", "完全無料"],
  "目次",
  ["カスタム表ジェネレーター", "使い方", "平方根早見表とは？", "表と計算機の違い", "計算の仕組み", "例：1〜20の早見表", "表の読み方と活用法", "よくある間違い", "よくある質問 (FAQ)", "まとめ"],
  "平方根（ルート）早見表ジェネレーター",
  "任意の数値範囲と小数点以下の桁数を指定して、きれいな平方根早見表を瞬時に作成・印刷できます。",
  "早見表ジェネレーターの使い方",
  [
    { title: "範囲を設定", text: "開始値と終了値を入力します（例：1〜50、100〜200など）。" },
    { title: "小数の桁数を選択", text: "必要に応じて小数点以下2桁、3桁、または4桁を選択します。" },
    { title: "平方数のみ抽出（任意）", text: "整数になる平方数（4, 9, 16, 25など）だけを一覧表示できます。" },
    { title: "作成ボタンをクリック", text: "表が即座に生成され、印刷やCSVコピーが可能です。" }
  ],
  "平方根早見表とは？",
  "連続する整数の平方根（√）の値を一覧にした便利な参照ツールです。計算の手間を省き、すぐに確認できます。",
  "早見表と計算機の使い分け",
  "計算機は1つの数値をステップ付きで深く計算し、早見表は広範な数値を一目で比較・確認するのに適しています。",
  "数値の計算方法について",
  "平方数以外の平方根は無限に続く無理数となるため、指定した桁数に正確に四捨五入されて表示されます。",
  "生成例：1〜20の平方根表（小数第3位まで）",
  "3桁の精度で平方数と無理数が明確に分類された標準的な表示例です。",
  "数値", "平方根 (√)", "種類", "平方数", "無理数",
  "早見表の便利な読み方",
  [
    { title: "まず平方数をチェック", text: "1, 4, 9, 16 などの平方数を基準にすると、間の値の予測が簡単になります。" },
    { title: "種類の列を活用", text: "きれいに割り切れる整数と近似値の無理数が一目で区別できます。" },
    { title: "用途に合わせた桁数設定", text: "学習用には2桁、技術計算や物理には4桁が最適です。" }
  ],
  "注意すべきよくある間違い",
  [
    { title: "四捨五入された値を厳密な値と誤認する", text: "無理数の根は無限に続きます。厳密な計算には根号表記（√）を用います。" },
    { title: "素因数分解の解き方を覚えない", text: "テストでは結果だけでなく計算手順が求められることが一般的です。" },
    { title: "負の数の平方根を探す", text: "本表は実数の正の平方根のみを対象としています。" }
  ],
  "よくある質問 (FAQ)",
  "まとめ",
  "平方根早見表は、学習や実務で役立つ強力なリファレンスです。範囲を自由にカスタマイズしてご活用ください。",
  [
    { question: "平方根早見表はどのような場面で役立ちますか？", answer: "宿題、試験対策、設計計算などで複数のルート値を素早く参照したい時に最適です。" },
    { question: "100以上の範囲でも作成できますか？", answer: "はい、上限・下限を自由に設定して任意の範囲を作成できます。" },
    { question: "表を印刷したりコピーしたりできますか？", answer: "はい、ワンクリックで印刷またはCSV形式でのクリップボードコピーが可能です。" }
  ]
);

const ko: ChartContent = createChartContent(
  'ko',
  ["맞춤형 범위", "소수점 2–4자리 정밀도", "CSV 복사 및 인쇄", "100% 무료"],
  "목차",
  ["맞춤형 표 생성기", "사용 방법", "제곱근 표란 무엇인가요?", "표 vs 계산기", "값 계산 원리", "예시: 1–20 제곱근 표", "표 활용 팁", "자주 하는 실수", "자주 묻는 질문 (FAQ)", "요약"],
  "제곱근(루트) 표 및 차트 생성기",
  "원하는 숫자 범위와 소수점 자릿수를 설정하여 맞춤형 제곱근 표를 즉시 생성하고 인쇄할 수 있습니다.",
  "제곱근 표 생성기 사용법",
  [
    { title: "범위 설정", text: "시작 숫자와 끝 숫자를 입력합니다 (예: 1~50)." },
    { title: "정밀도 선택", text: "소수점 2자리, 3자리 또는 4자리를 선택합니다." },
    { title: "완전제곱수만 보기", text: "정수로 딱 떨어지는 완전제곱수만 골라 볼 수 있습니다." },
    { title: "생성 클릭", text: "표가 즉시 생성되어 복사하거나 인쇄할 수 있습니다." }
  ],
  "제곱근 표란 무엇인가요?",
  "연속된 정수의 제곱근(√) 값을 한눈에 확인하고 비교할 수 있도록 정리한 참조 목록입니다.",
  "제곱근 표와 계산기의 차이점",
  "계산기는 특정 숫자 하나의 풀이 과정을 단계별로 제공하며, 표는 전체 범위를 종합적으로 조망합니다.",
  "값의 계산 원리",
  "완전제곱수가 아닌 숫자는 순환하지 않는 무한 소수(무리수)가 되며, 선택한 정밀도에 맞춰 반올림됩니다.",
  "예시: 1부터 20까지의 제곱근 표",
  "소수점 3자리 정밀도와 완전제곱수 및 무리수 구분이 적용된 샘플 표입니다.",
  "숫자", "제곱근 (√)", "유형", "완전제곱수", "무리수",
  "제곱근 표를 효과적으로 읽는 방법",
  [
    { title: "완전제곱수를 기준점으로 삼기", text: "1, 4, 9, 16 등을 기준으로 삼으면 사이 값들을 쉽게 어림할 수 있습니다." },
    { title: "유형 열 확인하기", text: "정수 근인지 근사치 소수점인지 바로 구분하세요." },
    { title: "용도에 맞게 자릿수 조정", text: "학습용은 소수 2자리, 공학이나 물리에는 4자리가 적합합니다." }
  ],
  "피해야 할 일반적인 실수",
  [
    { title: "반올림된 값을 완전한 정확값으로 오인하기", text: "무리수는 끝이 없는 소수입니다. 정확한 수학 표현은 근호(√)를 사용합니다." },
    { title: "소인수분해 원리를 소홀히 하기", text: "시험에서는 답뿐만 아니라 풀이 과정의 소인수분해 단계가 중요합니다." },
    { title: "음수의 제곱근 찾기", text: "이 표는 실수 체계의 양수 제곱근만 다룹니다." }
  ],
  "자주 묻는 질문 (FAQ)",
  "요약",
  "제곱근 표는 숫자 범위를 종합적으로 파악할 수 있는 최적의 도구입니다. 범위를 맞춤 설정하고 자유롭게 인쇄하세요.",
  [
    { question: "제곱근 표는 언제 주로 사용하나요?", answer: "과제, 시험 준비, 공학 계산 등 여러 제곱근 값을 빠르게 찾아볼 때 사용합니다." },
    { question: "100 이상의 큰 숫자도 만들 수 있나요?", answer: "네, 원하는 시작과 끝 숫자를 자유롭게 지정할 수 있습니다." },
    { question: "표를 인쇄하거나 저장할 수 있나요?", answer: "네, 페이지에서 바로 인쇄하거나 CSV 파일로 간편하게 복사할 수 있습니다." }
  ]
);

const bg: ChartContent = createChartContent(
  'bg',
  ["Персонализирани Диапазони", "Точност 2–4 Знака", "Копиране на CSV и Печат", "100% Безплатно"],
  "Съдържание",
  ["Генератор на Таблици", "Как се Използва", "Какво е Таблица на Корените?", "Таблица срещу Калкулатор", "Как се Изчисляват", "Пример: Таблица 1–20", "Как да Четете Таблицата", "Чести Грешки", "Често Задавани Въпроси", "Обобщение"],
  "Генератор на Таблица с Квадратни Корени",
  "Създавайте персонализирани таблици с квадратни корени за произволен числов диапазон с избрана точност.",
  "Как да използвате генератора",
  [
    { title: "Задайте диапазон", text: "Въведете начално и крайно число (напр. от 1 до 50)." },
    { title: "Изберете точност", text: "Изберете 2, 3 или 4 знака след десетичната запетая." },
    { title: "Само точни квадрати", text: "Филтрирайте за показване само на цели корени." },
    { title: "Генериране", text: "Таблицата се появява веднага, готова за печат или копиране." }
  ],
  "Какво представлява таблицата с квадратни корени?",
  "Справочен списък, показващ корен квадратен за поредица от числа едно до друго.",
  "Таблица срещу калкулатор: каква е разликата?",
  "Калкулаторът решава едно число стъпка по стъпка; таблицата дава цялостен поглед върху интервал.",
  "Как се изчисляват стойностите",
  "Числата, които не са точни квадрати, дават ирационални стойности с безкрайни десетични знаци.",
  "Пример: Таблица от 1 до 20",
  "Примерен изглед с точност до 3 десетични знака и класификация на числата.",
  "Число", "Квадратен Корен", "Тип", "Точен Квадрат", "Ирационално",
  "Практически съвети за четене",
  [
    { title: "Търсете първо точните квадрати", text: "1, 4, 9, 16 служат като опорни точки за междинните стойности." },
    { title: "Следете колоната 'Тип'", text: "Различавайте точните цели числа от закръглените стойности." },
    { title: "Настройте точността според целта", text: "2 знака за училище, 4 знака за инженерни изчисления." }
  ],
  "Грешки, които да избягвате",
  [
    { title: "Приемане на закръглените стойности за точни", text: "Ирационалните корени имат безкрайни цифри." },
    { title: "Пропускане на метода за разлагане", text: "На изпити често се изисква показване на стъпките." },
    { title: "Търсене на корени от отрицателни числа", text: "Таблицата обхваща единствено реални положителни корени." }
  ],
  "Често Задавани Въпроси",
  "Кратко Обобщение",
  "Таблицата с квадратни корени дава бърз достъп до числови редици. Персонализирайте и печатайте безплатно.",
  [
    { question: "За какво се използва таблицата с квадратни корени?", answer: "За бърза справка с множество стойности без излишно въвеждане в калкулатор." },
    { question: "Мога ли да генерирам диапазон над 100?", answer: "Да, можете да въведете всякакви начални и крайни числа." },
    { question: "Може ли таблицата да се отпечата?", answer: "Да, директно от страницата или чрез копиране в CSV формат." }
  ]
);

export const chartContentMap: Record<string, ChartContent> = {
  en,
  fr,
  es,
  de,
  it,
  pt,
  ru,
  pl,
  sv,
  tr,
  id,
  ms,
  ar,
  hi,
  bn,
  ja,
  ko,
  bg
};

export function getChartContent(lang: string = 'en'): ChartContent {
  return chartContentMap[lang] || chartContentMap['en'];
}
