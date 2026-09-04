import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localesDir = path.resolve(__dirname, '../theme/i18n/locales');

const translations = {
  en: {
    cbrt: {
      title: "Racine Cubique Calculator | Free Online Cube Root Calculator",
      description: "Calculate cube roots instantly with our free Racine Cubique Calculator. Get exact decimal results, simplified radicals, and step-by-step workings.",
      hero: {
        part1: "Racine Cubique",
        part2: "Calculator",
        subtitle: "Calculate the cube root of any number — positive or negative — instantly. Get the exact decimal result, simplified radical form, and step-by-step workings. 100% free."
      },
      calc: {
        title: "Cube Root Calculator",
        desc: "Find ∛x for any number, including negatives",
        btn: "Calculate Cube Root",
        tooltip: "Enter any number — positive or negative — to find its cube root. Unlike square roots, cube roots work with negative numbers too."
      }
    },
    nth: {
      title: "Nth Root Calculator - Free Root Tool for Any Index",
      description: "Calculate any root (4th, 5th, or custom index) instantly with our free Nth Root Calculator. Get exact results, simplified forms, and step-by-step work.",
      hero: {
        part1: "Nth Root",
        part2: "Calculator",
        subtitle: "Calculate any root — 4th root, 5th root, or any custom degree (n) — for any number. Get exact simplified radicals, decimal approximations, and complete step-by-step solutions."
      },
      calc: {
        title: "Nth Root Calculator",
        desc: "Calculate any root — 4th, 5th, or custom degree",
        btn: "Calculate Nth Root",
        degreeLabel: "Root degree (index n)",
        numberLabel: "Number (radicand x)",
        tooltipDegree: "The root degree (n). For example, 2 for square root, 3 for cube root, 4 for fourth root.",
        tooltipNumber: "The number you want to find the root of (the radicand)."
      }
    },
    nav: {
      calculators: "Calculators",
      cbrt: "Racine Cubique Calculator",
      nth: "Nth Root Calculator",
      about: "About Us",
      contact: "Contact Us",
      sitemap: "Sitemap",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      disclaimer: "Disclaimer"
    },
    footer: {
      company: "Company",
      legal: "Legal"
    }
  },
  fr: {
    cbrt: {
      title: "Calculateur Racine Cubique | Calculateur de Racine Cubique en Ligne Gratuit",
      description: "Calculez instantanément les racines cubiques avec notre calculateur gratuit. Obtenez des résultats décimaux exacts, radicaux simplifiés et étapes de calcul.",
      hero: {
        part1: "Racine Cubique",
        part2: "Calculateur",
        subtitle: "Calculez la racine cubique de n'importe quel nombre — positif ou négatif — instantanément. Obtenez le résultat décimal exact, la forme radicale simplifiée et les étapes. 100% gratuit."
      },
      calc: {
        title: "Calculateur de Racine Cubique",
        desc: "Trouvez ∛x pour n'importe quel nombre, y compris les négatifs",
        btn: "Calculer la Racine Cubique",
        tooltip: "Entrez un nombre positif ou négatif pour calculer sa racine cubique. Contrairement aux racines carrées, les racines cubiques fonctionnent avec les nombres négatifs."
      }
    },
    nth: {
      title: "Calculateur Racine N-ième - Outil Gratuit pour Tout Indice",
      description: "Calculez n'importe quelle racine (4e, 5e ou indice personnalisé n) instantanément avec notre calculateur de racine n-ième gratuit. Résultats exacts et étapes.",
      hero: {
        part1: "Racine N-ième",
        part2: "Calculateur",
        subtitle: "Calculez n'importe quelle racine — racine 4e, 5e ou degré n personnalisé — pour n'importe quel nombre avec forme radicale simplifiée et étapes détaillées."
      },
      calc: {
        title: "Calculateur de Racine N-ième",
        desc: "Calculez n'importe quelle racine — 4e, 5e ou degré personnalisé",
        btn: "Calculer la Racine N-ième",
        degreeLabel: "Degré de la racine (indice n)",
        numberLabel: "Nombre (radicande x)",
        tooltipDegree: "Le degré de la racine (n). Par exemple 2 pour carré, 3 pour cube, 4 pour racine quatrième.",
        tooltipNumber: "Le nombre dont vous souhaitez calculer la racine."
      }
    },
    nav: {
      calculators: "Calculateurs",
      cbrt: "Calculateur Racine Cubique",
      nth: "Calculateur Racine N-ième",
      about: "À Propos",
      contact: "Contact",
      sitemap: "Plan du Site",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      disclaimer: "Avertissement"
    },
    footer: {
      company: "Entreprise",
      legal: "Mentions Légales"
    }
  },
  es: {
    cbrt: {
      title: "Calculadora de Raíz Cúbica | Calculadora Gratuita en Línea para ∛x",
      description: "Calcula raíces cúbicas al instante con nuestra calculadora gratuita. Obtén resultados decimales exactos, radicales simplificados y pasos detallados.",
      hero: {
        part1: "Raíz Cúbica",
        part2: "Calculadora",
        subtitle: "Calcula la raíz cúbica de cualquier número — positivo o negativo — al instante. Obtén el resultado decimal exacto, forma radical simplificada y paso a paso. 100% gratis."
      },
      calc: {
        title: "Calculadora de Raíz Cúbica",
        desc: "Halla ∛x para cualquier número, incluidos negativos",
        btn: "Calcular Raíz Cúbica",
        tooltip: "Introduce cualquier número — positivo o negativo — para hallar su raíz cúbica."
      }
    },
    nth: {
      title: "Calculadora de Raíz Enésima - Herramienta Gratuita para Cualquier Índice",
      description: "Calcula cualquier raíz (4ª, 5ª o índice personalizado) al instante con nuestra calculadora de raíz enésima gratuita. Resultados exactos y desarrollo.",
      hero: {
        part1: "Raíz Enésima",
        part2: "Calculadora",
        subtitle: "Calcula cualquier raíz — cuarta, quinta o grado n personalizado — para cualquier número con radicales simplificados y soluciones paso a paso."
      },
      calc: {
        title: "Calculadora de Raíz Enésima",
        desc: "Calcula cualquier raíz — 4ª, 5ª o grado personalizado",
        btn: "Calcular Raíz Enésima",
        degreeLabel: "Grado de la raíz (índice n)",
        numberLabel: "Número (radicando x)",
        tooltipDegree: "El índice de la raíz (n). Por ejemplo 2 para raíz cuadrada, 3 para cúbica, 4 para cuarta.",
        tooltipNumber: "El número del que deseas obtener la raíz."
      }
    },
    nav: {
      calculators: "Calculadoras",
      cbrt: "Calculadora de Raíz Cúbica",
      nth: "Calculadora de Raíz Enésima",
      about: "Sobre Nosotros",
      contact: "Contacto",
      sitemap: "Mapa del Sitio",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      disclaimer: "Descargo de Responsabilidad"
    },
    footer: {
      company: "Compañía",
      legal: "Legal"
    }
  },
  de: {
    cbrt: {
      title: "Kubikwurzel Rechner | Kostenloser Online-Rechner für ∛x",
      description: "Berechnen Sie Kubikwurzeln sofort mit unserem kostenlosen Rechner. Erhalten Sie exakte Dezimalwerte, vereinfachte Wurzeln und Lösungsschritte.",
      hero: {
        part1: "Kubikwurzel",
        part2: "Rechner",
        subtitle: "Berechnen Sie die Kubikwurzel jeder Zahl — positiv oder negativ — sofort mit exakter Dezimalanzeige, vereinfachter Wurzel und Schritten. 100% kostenlos."
      },
      calc: {
        title: "Kubikwurzel Rechner",
        desc: "Finden Sie ∛x für jede Zahl, einschließlich negativer Zahlen",
        btn: "Kubikwurzel berechnen",
        tooltip: "Geben Sie eine positive oder negative Zahl ein, um die Kubikwurzel zu berechnen."
      }
    },
    nth: {
      title: "N-te Wurzel Rechner - Kostenloses Wurzel-Tool für jeden Index",
      description: "Berechnen Sie jede n-te Wurzel (4., 5. oder benutzerdefinierter Wurzelexponent) sofort online. Exakte Ergebnisse mit ausführlichem Lösungsweg.",
      hero: {
        part1: "N-te Wurzel",
        part2: "Rechner",
        subtitle: "Berechnen Sie jede Wurzel für jeden Exponenten n mit exakter Wurzelvereinfachung und vollständigen Rechenschritten."
      },
      calc: {
        title: "N-te Wurzel Rechner",
        desc: "Berechnen Sie jede Wurzel — 4., 5. oder beliebiger Exponent",
        btn: "N-te Wurzel berechnen",
        degreeLabel: "Wurzelgrad (Index n)",
        numberLabel: "Radikand (Zahl x)",
        tooltipDegree: "Der Wurzelexponent (n).",
        tooltipNumber: "Die Zahl, aus der die Wurzel gezogen werden soll."
      }
    },
    nav: {
      calculators: "Rechner",
      cbrt: "Kubikwurzel Rechner",
      nth: "N-te Wurzel Rechner",
      about: "Über Uns",
      contact: "Kontakt",
      sitemap: "Sitemap",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      disclaimer: "Haftungsausschluss"
    },
    footer: {
      company: "Unternehmen",
      legal: "Rechtliches"
    }
  },
  it: {
    cbrt: {
      title: "Calcolatore Radice Cubica | Calcolatore Online Gratuito per ∛x",
      description: "Calcola le radici cubiche istantaneamente con la nostra calcolatrice gratuita. Risultati decimali esatti, radicali semplificati e passaggi.",
      hero: {
        part1: "Radice Cubica",
        part2: "Calcolatore",
        subtitle: "Calcola la radice cubica di qualsiasi numero — positivo o negativo — all'istante. Valori decimali esatti, forma semplificata e passaggi. 100% gratis."
      },
      calc: {
        title: "Calcolatore Radice Cubica",
        desc: "Trova ∛x per qualsiasi numero, anche negativi",
        btn: "Calcola Radice Cubica",
        tooltip: "Inserisci qualsiasi numero positivo o negativo per trovare la sua radice cubica."
      }
    },
    nth: {
      title: "Calcolatore Radice Ennesima - Calcola Qualsiasi Indice di Radice",
      description: "Calcola qualsiasi radice n-esima (quarta, quinta o indice personalizzato) istantaneamente con passaggi di calcolo completi.",
      hero: {
        part1: "Radice Ennesima",
        part2: "Calcolatore",
        subtitle: "Calcola qualsiasi radice per qualsiasi indice n con precisione decimale e passaggi matematici dettagliati."
      },
      calc: {
        title: "Calcolatore Radice Ennesima",
        desc: "Calcola qualsiasi radice — 4ª, 5ª o grado personalizzato",
        btn: "Calcola Radice Ennesima",
        degreeLabel: "Grado della radice (indice n)",
        numberLabel: "Numero (radicando x)",
        tooltipDegree: "Il grado della radice (n).",
        tooltipNumber: "Il numero di cui calcolare la radice."
      }
    },
    nav: {
      calculators: "Calcolatori",
      cbrt: "Calcolatore Radice Cubica",
      nth: "Calcolatore Radice Ennesima",
      about: "Chi Siamo",
      contact: "Contatti",
      sitemap: "Mappa del Sito",
      privacy: "Privacy Policy",
      terms: "Termini di Servizio",
      disclaimer: "Disclaimer"
    },
    footer: {
      company: "Azienda",
      legal: "Legale"
    }
  },
  pt: {
    cbrt: {
      title: "Calculadora de Raiz Cúbica | Ferramenta Online Grátis para ∛x",
      description: "Calcule raízes cúbicas instantaneamente com nossa calculadora gratuita. Obtenha decimais exatos, radicais simplificados e passo a passo.",
      hero: {
        part1: "Raiz Cúbica",
        part2: "Calculadora",
        subtitle: "Calcule a raiz cúbica de qualquer número — positivo ou negativo — instantaneamente. Obtenha o resultado decimal exato, radical simplificado e passos. 100% grátis."
      },
      calc: {
        title: "Calculadora de Raiz Cúbica",
        desc: "Encontre ∛x para qualquer número, incluindo negativos",
        btn: "Calcular Raiz Cúbica",
        tooltip: "Digite qualquer número positivo ou negativo para calcular sua raiz cúbica."
      }
    },
    nth: {
      title: "Calculadora de Raiz Enésima - Raiz de Qualquer Índice Grátis",
      description: "Calcule qualquer raiz (4ª, 5ª ou índice personalizado) instantaneamente com nossa calculadora de raiz enésima online.",
      hero: {
        part1: "Raiz Enésima",
        part2: "Calculadora",
        subtitle: "Calcule qualquer raiz de grau n com simplificação exata de radicais e passos matemáticos detalhados."
      },
      calc: {
        title: "Calculadora de Raiz Enésima",
        desc: "Calcule qualquer raiz — 4ª, 5ª ou grau personalizado",
        btn: "Calcular Raiz Enésima",
        degreeLabel: "Grau da raiz (índice n)",
        numberLabel: "Número (radicando x)",
        tooltipDegree: "O índice da raiz (n).",
        tooltipNumber: "O número cuja raiz você deseja encontrar."
      }
    },
    nav: {
      calculators: "Calculadoras",
      cbrt: "Calculadora de Raiz Cúbica",
      nth: "Calculadora de Raiz Enésima",
      about: "Sobre Nós",
      contact: "Contato",
      sitemap: "Mapa do Site",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      disclaimer: "Aviso Legal"
    },
    footer: {
      company: "Empresa",
      legal: "Legal"
    }
  },
  ru: {
    cbrt: {
      title: "Калькулятор Кубического Корня | Бесплатный Расчет ∛x Онлайн",
      description: "Мгновенно вычисляйте кубический корень с помощью бесплатного калькулятора. Точные десятичные значения, упрощение корней и пошаговое решение.",
      hero: {
        part1: "Кубический Корень",
        part2: "Калькулятор",
        subtitle: "Вычисляйте кубический корень из любого числа — положительного или отрицательного. Точный результат, упрощенный корень и пошаговые вычисления. 100% бесплатно."
      },
      calc: {
        title: "Калькулятор Кубического Корня",
        desc: "Вычислить ∛x для любого числа, включая отрицательные",
        btn: "Вычислить кубический корень",
        tooltip: "Введите любое число, чтобы найти его кубический корень."
      }
    },
    nth: {
      title: "Калькулятор Корня n-й Степени | Онлайн Расчет Любой Степени",
      description: "Вычисляйте корень любой степени (4-й, 5-й или произвольной n) мгновенно с точным результатом, упрощением и шагами решения.",
      hero: {
        part1: "Корень n-й Степени",
        part2: "Калькулятор",
        subtitle: "Вычисляйте корни любой степени n из любых чисел с автоматическим упрощением и подробным разбором решения."
      },
      calc: {
        title: "Калькулятор Корня n-й Степени",
        desc: "Вычислить корень любой степени — 4, 5 или n",
        btn: "Вычислить корень n-й степени",
        degreeLabel: "Степень корня (индекс n)",
        numberLabel: "Подкоренное число (x)",
        tooltipDegree: "Показатель степени корня (n).",
        tooltipNumber: "Число, из которого извлекается корень."
      }
    },
    nav: {
      calculators: "Калькуляторы",
      cbrt: "Калькулятор Кубического Корня",
      nth: "Калькулятор Корня n-й Степени",
      about: "О нас",
      contact: "Контакты",
      sitemap: "Карта сайта",
      privacy: "Конфиденциальность",
      terms: "Условия использования",
      disclaimer: "Отказ от ответственности"
    },
    footer: {
      company: "О компании",
      legal: "Правовая информация"
    }
  },
  ja: {
    site: {
      title: "Racine Carree 平方根電卓 — ルート計算・計算過程と根号簡略化",
      description: "平方根を瞬時に高精度計算。正確な小数値、根号の簡略化（例：√72＝6√2）、素因数分解による途中式、1〜100の平方根一覧表を完全無料で提供。"
    },
    cbrt: {
      title: "立方根電卓 | 3乗根(∛x)の無料オンライン計算ツール・途中式付き",
      description: "正の数・負の数の3乗根（立方根）を瞬時に計算。正確な小数値、簡略化された根号、途中計算ステップを完全無料で確認できます。",
      hero: {
        part1: "立方根",
        part2: "電卓",
        subtitle: "任意の数の3乗根（立方根）を瞬時に計算。正負の数に対応し、正確な小数値、簡略化した根号、途中式を100%無料で表示します。"
      },
      calc: {
        title: "立方根電卓",
        desc: "正負を問わず任意の数の3乗根 ∛x を算出",
        btn: "立方根を計算",
        tooltip: "立方根を求めたい数値を入力してください。負の数にも実数解が存在します。"
      }
    },
    nth: {
      title: "n乗根電卓 | 4乗根・5乗根など任意の累乗根を無料計算",
      description: "任意の次数nの累乗根（n乗根）を瞬時に計算。指数への書き換え、根号の簡略化、途中式付きでわかりやすく解説します。",
      hero: {
        part1: "n乗根",
        part2: "電卓",
        subtitle: "4乗根、5乗根など任意の次数nの累乗根を計算。簡略化された根号、小数近似値、詳しい解法ステップを提供します。"
      },
      calc: {
        title: "n乗根電卓",
        desc: "4乗根、5乗根など任意の次数nの累乗根を計算",
        btn: "n乗根を計算",
        degreeLabel: "根号の次数 (n)",
        numberLabel: "被開平数 (x)",
        tooltipDegree: "根号の次数 (n)。",
        tooltipNumber: "根号の中の数値 (x)。"
      }
    },
    nav: {
      calculators: "計算機一覧",
      cbrt: "立方根電卓",
      nth: "n乗根電卓",
      about: "運営者情報",
      contact: "お問い合わせ",
      sitemap: "サイトマップ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      disclaimer: "免責事項"
    },
    footer: {
      company: "企業・運営情報",
      legal: "法的情報"
    }
  },
  ko: {
    site: {
      title: "Racine Carree 제곱근 계산기 — 온라인 루트 계산 및 풀이 과정",
      description: "무료 온라인 제곱근 계산기로 양수 및 음수의 루트값을 즉시 계산하세요. 정확한 소수점 결과, 근호 단순화(예: √72 = 6√2), 소인수분해 풀이 단계 및 참고 표를 제공합니다."
    },
    cbrt: {
      title: "세제곱근 계산기 | 무료 온라인 세제곱근(∛x) 계산 도구",
      description: "양수 및 음수의 세제곱근을 즉시 계산하세요. 정확한 소수 결과, 간단한 근호 표현 및 상세한 풀이 과정을 100% 무료로 제공합니다.",
      hero: {
        part1: "세제곱근",
        part2: "계산기",
        subtitle: "모든 양수 및 음수의 세제곱근을 즉시 계산합니다. 정확한 소수점 결과, 근호 단순화 및 단계별 풀이 과정을 100% 무료로 확인하세요."
      },
      calc: {
        title: "세제곱근 계산기",
        desc: "음수를 포함한 모든 수의 ∛x 계산",
        btn: "세제곱근 계산하기",
        tooltip: "세제곱근을 구할 숫자를 입력하세요. 음수도 실수 해가 존재합니다."
      }
    },
    nth: {
      title: "n제곱근 계산기 | 임의의 거듭제곱근 무료 온라인 계산",
      description: "4제곱근, 5제곱근 또는 임의의 거듭제곱근 n을 즉시 계산하세요. 소인수분해를 통한 근호 단순화 및 단계별 풀이를 제공합니다.",
      hero: {
        part1: "n제곱근",
        part2: "계산기",
        subtitle: "4제곱근, 5제곱근 등 원하는 n차 거듭제곱근을 즉시 계산합니다. 간단한 근호 표현과 상세 풀이를 제공합니다."
      },
      calc: {
        title: "n제곱근 계산기",
        desc: "4차, 5차 또는 사용자 지정 차수의 거듭제곱근 계산",
        btn: "n제곱근 계산하기",
        degreeLabel: "근호 차수 (n)",
        numberLabel: "피개평수 (x)",
        tooltipDegree: "구하고자 하는 근의 차수 (n)입니다.",
        tooltipNumber: "근호 안의 수 (x)입니다."
      }
    },
    nav: {
      calculators: "계산기 목록",
      cbrt: "세제곱근 계산기",
      nth: "n제곱근 계산기",
      about: "소개",
      contact: "문의하기",
      sitemap: "사이트맵",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      disclaimer: "면책 조항"
    },
    footer: {
      company: "회사 정보",
      legal: "법적 고지"
    }
  },
  hi: {
    cbrt: {
      title: "घनमूल कैलकुलेटर | मुफ़्त ऑनलाइन घनमूल (∛x) कैलकुलेटर",
      description: "हमारे मुफ़्त ऑनलाइन कैलकुलेटर से किसी भी संख्या का घनमूल तुरंत निकालें। सटीक दशमलव परिणाम, सरलतम रूप और चरण-दर-चरण समाधान।",
      hero: {
        part1: "घनमूल",
        part2: "कैलकुलेटर",
        subtitle: "किसी भी धनात्मक या ऋणात्मक संख्या का घनमूल तुरंत निकालें। सटीक दशमलव मान, सरलतम करणी रूप और चरण-दर-चरण गणना। 100% मुफ़्त।"
      },
      calc: {
        title: "घनमूल कैलकुलेटर",
        desc: "धनात्मक और ऋणात्मक संख्याओं के लिए ∛x निकालें",
        btn: "घनमूल की गणना करें",
        tooltip: "घनमूल निकालने के लिए कोई भी संख्या दर्ज करें।"
      }
    },
    nth: {
      title: "n-वाँ मूल कैलकुलेटर | किसी भी घात के मूल की मुफ़्त गणना",
      description: "चौथे, पाँचवें या किसी भी डिग्री (n) के मूल की तुरंत गणना करें। चरण-दर-चरण समाधान और सरलतम रूप मुफ़्त पाएँ।",
      hero: {
        part1: "n-वाँ मूल",
        part2: "कैलकुलेटर",
        subtitle: "किसी भी संख्या के लिए चौथे, पाँचवें या कस्टम घात n का मूल तुरंत निकालें। सरल करणी रूप और पूर्ण हल।"
      },
      calc: {
        title: "n-वाँ मूल कैलकुलेटर",
        desc: "किसी भी मूल — 4th, 5th या कस्टम डिग्री की गणना करें",
        btn: "n-वें मूल की गणना करें",
        degreeLabel: "मूल घात (घातांक n)",
        numberLabel: "संख्या (x)",
        tooltipDegree: "मूल की घात (n)।",
        tooltipNumber: "वह संख्या जिसका मूल निकालना है।"
      }
    },
    nav: {
      calculators: "कैलकुलेटर",
      cbrt: "घनमूल कैलकुलेटर",
      nth: "n-वाँ मूल कैलकुलेटर",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
      sitemap: "साइटमैप",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
      disclaimer: "अस्वीकरण"
    },
    footer: {
      company: "कंपनी",
      legal: "कानूनी"
    }
  },
  ar: {
    cbrt: {
      title: "حاسبة الجذر التكعيبي | احسب الجذر التكعيبي ∛x مجاناً عبر الإنترنت",
      description: "احسب الجذور التكعيبية فوراً للأعداد الموجبة والسالبة. احصل على نتائج عشرية دقيقة، وتبسيط الجذور، وخطوات الحل التفصيلية مجاناً 100%.",
      hero: {
        part1: "الجذر التكعيبي",
        part2: "حاسبة",
        subtitle: "احسب الجذر التكعيبي لأي عدد — موجب أو سالب — فوراً. احصل على النتيجة العشرية الدقيقة، والصيغة الجذرية المبسطة، وخطوات الحل كاملة مجاناً 100%."
      },
      calc: {
        title: "حاسبة الجذر التكعيبي",
        desc: "أوجد ∛x لأي عدد بما في ذلك الأعداد السالبة",
        btn: "احسب الجذر التكعيبي",
        tooltip: "أدخل أي عدد موجب أو سالب لحساب جذره التكعيبي."
      }
    },
    nth: {
      title: "حاسبة الجذر النوني | احسب أي جذر لأي دليل مجاناً",
      description: "احسب أي جذر نوني (الرابع، الخامس، أو أي درجة n) فوراً بدقة تامة مع خطوات التبسيط والحل التفصيلية.",
      hero: {
        part1: "الجذر النوني",
        part2: "حاسبة",
        subtitle: "احسب أي جذر — الجذر الرابع أو الخامس أو أي درجة n — لأي عدد مع التبسيط والحل خطوة بخطوة."
      },
      calc: {
        title: "حاسبة الجذر النوني",
        desc: "احسب أي جذر — الدرجة 4 أو 5 أو أي دليل مخصص",
        btn: "احسب الجذر النوني",
        degreeLabel: "درجة الجذر (الدليل n)",
        numberLabel: "العدد (المجذور x)",
        tooltipDegree: "دليل الجذر (n).",
        tooltipNumber: "العدد المراد حساب جذره."
      }
    },
    nav: {
      calculators: "الحاسبات",
      cbrt: "حاسبة الجذر التكعيبي",
      nth: "حاسبة الجذر النوني",
      about: "من نحن",
      contact: "اتصل بنا",
      sitemap: "خريطة الموقع",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      disclaimer: "إخلاء المسؤولية"
    },
    footer: {
      company: "الشركة",
      legal: "قانوني"
    }
  },
  bn: {
    cbrt: {
      title: "ঘনমূল ক্যালকুলেটর | বিনামূল্যে অনলাইন কিউব রুট (∛x) গণনা",
      description: "যেকোনো সংখ্যার ঘনমূল তাৎক্ষণিকভাবে গণনা করুন। সঠিক দশমিক মান, সরলীকৃত রূপ এবং ধাপভিত্তিক সমাধান পান।",
      hero: {
        part1: "ঘনমূল",
        part2: "ক্যালকুলেটর",
        subtitle: "যেকোনো ধনাত্মক বা ঋণাত্মক সংখ্যার ঘনমূল তাৎক্ষণিকভাবে গণনা করুন। সঠিক ফলাফল, সরলীকৃত করণী এবং সম্পূর্ণ সমাধান।"
      },
      calc: {
        title: "ঘনমূল ক্যালকুলেটর",
        desc: "ঋণাত্মক সহ যেকোনো সংখ্যার ∛x নির্ণয় করুন",
        btn: "ঘনমূল গণনা করুন",
        tooltip: "ঘনমূল বের করার জন্য যেকোনো সংখ্যা লিখুন।"
      }
    },
    nth: {
      title: "n-তম মূল ক্যালকুলেটর | যেকোনো সূচকের জন্য বিনামূল্যে রুট টুল",
      description: "৪র্থ, ৫ম বা যেকোনো কাস্টম ডিগ্রির n-তম মূল সহজে গণনা করুন। সম্পূর্ণ ধাপে ধাপে সমাধান পান।",
      hero: {
        part1: "n-তম মূল",
        part2: "ক্যালকুলেটর",
        subtitle: "যেকোনো সংখ্যার জন্য ৪র্থ, ৫ম বা কাস্টম ডিগ্রি n-এর মূল নির্ণয় করুন বিস্তারিত সমাধান সহ।"
      },
      calc: {
        title: "n-তম মূল ক্যালকুলেটর",
        desc: "যেকোনো মূল — ৪র্থ, ৫ম বা কাস্টম ডিগ্রি গণনা করুন",
        btn: "n-তম মূল গণনা করুন",
        degreeLabel: "মূলের মাত্রা (সূচক n)",
        numberLabel: "সংখ্যা (x)",
        tooltipDegree: "মূলের মাত্রা (n)।",
        tooltipNumber: "যে সংখ্যার মূল নির্ণয় করতে চান।"
      }
    },
    nav: {
      calculators: "ক্যালকুলেটরসমূহ",
      cbrt: "ঘনমূল ক্যালকুলেটর",
      nth: "n-তম মূল ক্যালকুলেটর",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      sitemap: "সাইটম্যাপ",
      privacy: "গোপনীয়তা নীতি",
      terms: "ব্যবহারের শর্তাবলী",
      disclaimer: "দাবিত্যাগ"
    },
    footer: {
      company: "কোম্পানি",
      legal: "আইনি তথ্য"
    }
  },
  tr: {
    cbrt: {
      title: "Küp Kök Hesaplayıcı | Ücretsiz Çevrimiçi Küp Kök (∛x) Aracı",
      description: "Herhangi bir sayının küp kökünü anında hesaplayın. Kesin ondalık sonuçlar, sadeleştirilmiş köklü ifadeler ve adım adım çözümler.",
      hero: {
        part1: "Küp Kök",
        part2: "Hesaplayıcı",
        subtitle: "Pozitif veya negatif herhangi bir sayının küp kökünü anında hesaplayın. Kesin ondalık sonuç, sadeleştirilmiş kök ve adım adım çözüm. %100 ücretsiz."
      },
      calc: {
        title: "Küp Kök Hesaplayıcı",
        desc: "Negatifler dahil her sayı için ∛x değerini bulun",
        btn: "Küp Kök Hesapla",
        tooltip: "Küp kökünü bulmak için pozitif veya negatif bir sayı girin."
      }
    },
    nth: {
      title: "n. Dereceden Kök Hesaplayıcı | Her Derece İçin Kök Bulma Aracı",
      description: "4., 5. veya istediğiniz n derecesindeki kökü anında hesaplayın. Sadeleştirilmiş biçim ve adım adım çözüm ile tamamen ücretsiz.",
      hero: {
        part1: "n. Dereceden Kök",
        part2: "Hesaplayıcı",
        subtitle: "4. kök, 5. kök veya herhangi bir n dereceden kökü anında hesaplayın. Sadeleştirilmiş kök biçimi ve tam çözüm adımları."
      },
      calc: {
        title: "n. Dereceden Kök Hesaplayıcı",
        desc: "Herhangi bir kökü hesaplayın — 4., 5. veya özel derece",
        btn: "n. Dereceden Kök Hesapla",
        degreeLabel: "Kök derecesi (indeks n)",
        numberLabel: "Kök içi sayı (radikand x)",
        tooltipDegree: "Kök derecesi (n).",
        tooltipNumber: "Kökünü bulmak istediğiniz sayı."
      }
    },
    nav: {
      calculators: "Hesaplayıcılar",
      cbrt: "Küp Kök Hesaplayıcı",
      nth: "n. Dereceden Kök Hesaplayıcı",
      about: "Hakkımızda",
      contact: "İletişim",
      sitemap: "Site Haritası",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Koşulları",
      disclaimer: "Yasal Uyarı"
    },
    footer: {
      company: "Şirket",
      legal: "Yasal"
    }
  },
  pl: {
    cbrt: {
      title: "Kalkulator Pierwiastka Sześciennego | Darmowe Obliczanie ∛x Online",
      description: "Obliczaj pierwiastki sześcienne natychmiastowo. Dokładne wyniki dziesiętne, uproszczona postać pierwiastka i kroki obliczeniowe.",
      hero: {
        part1: "Pierwiastek Sześcienny",
        part2: "Kalkulator",
        subtitle: "Oblicz pierwiastek sześcienny z dowolnej liczby dodatniej lub ujemnej. Dokładny wynik, postać uproszczona i kroki obliczeń. 100% za darmo."
      },
      calc: {
        title: "Kalkulator Pierwiastka Sześciennego",
        desc: "Znajdź ∛x dla dowolnej liczby, także ujemnej",
        btn: "Oblicz pierwiastek sześcienny",
        tooltip: "Wpisz liczbę, aby obliczyć jej pierwiastek sześcienny."
      }
    },
    nth: {
      title: "Kalkulator Pierwiastka n-tego Stopnia | Narzędzie dla Dowolnego Stopnia",
      description: "Oblicz dowolny pierwiastek n-tego stopnia (4., 5. lub dowolny stopień) natychmiast z uproszczeniem i krokami rozwiązania.",
      hero: {
        part1: "Pierwiastek n-tego Stopnia",
        part2: "Kalkulator",
        subtitle: "Obliczaj pierwiastki 4., 5. lub dowolnego stopnia n z pełnym uproszczeniem i krokami obliczeniowymi."
      },
      calc: {
        title: "Kalkulator Pierwiastka n-tego Stopnia",
        desc: "Oblicz dowolny pierwiastek — 4., 5. lub własny stopień",
        btn: "Oblicz pierwiastek n-tego stopnia",
        degreeLabel: "Stopień pierwiastka (indeks n)",
        numberLabel: "Liczba podpierwiastkowa (x)",
        tooltipDegree: "Stopień pierwiastka (n).",
        tooltipNumber: "Liczba, z której chcesz wyciągnąć pierwiastek."
      }
    },
    nav: {
      calculators: "Kalkulatory",
      cbrt: "Kalkulator Pierwiastka Sześciennego",
      nth: "Kalkulator Pierwiastka n-tego Stopnia",
      about: "O nas",
      contact: "Kontakt",
      sitemap: "Mapa strony",
      privacy: "Polityka prywatności",
      terms: "Regulamin",
      disclaimer: "Zastrzeżenia prawne"
    },
    footer: {
      company: "Firma",
      legal: "Informacje prawne"
    }
  },
  id: {
    cbrt: {
      title: "Kalkulator Akar Pangkat Tiga | Hitung ∛x Online Gratis",
      description: "Hitung akar pangkat tiga dari angka positif maupun negatif secara instan. Hasil desimal presisi, bentuk sederhana, dan langkah demi langkah.",
      hero: {
        part1: "Akar Pangkat Tiga",
        part2: "Kalkulator",
        subtitle: "Hitung akar pangkat tiga dari bilangan positif maupun negatif secara instan. Dapatkan desimal presisi, bentuk sederhana, dan langkah kerja lengkap. 100% gratis."
      },
      calc: {
        title: "Kalkulator Akar Pangkat Tiga",
        desc: "Temukan ∛x untuk bilangan apapun, termasuk negatif",
        btn: "Hitung Akar Pangkat Tiga",
        tooltip: "Masukkan bilangan positif atau negatif untuk menghitung akar pangkat tiganya."
      }
    },
    nth: {
      title: "Kalkulator Akar Pangkat n | Alat Hitung Akar Derajat Berapapun",
      description: "Hitung akar pangkat 4, 5, atau pangkat ke-n berapapun secara instan dengan penjelasan langkah demi langkah.",
      hero: {
        part1: "Akar Pangkat n",
        part2: "Kalkulator",
        subtitle: "Hitung akar pangkat 4, 5, atau derajat n kustom dengan penyederhanaan bentuk akar dan langkah perhitungan lengkap."
      },
      calc: {
        title: "Kalkulator Akar Pangkat n",
        desc: "Hitung akar pangkat berapapun — ke-4, ke-5, atau derajat kustom",
        btn: "Hitung Akar Pangkat n",
        degreeLabel: "Derajat akar (indeks n)",
        numberLabel: "Bilangan (radikan x)",
        tooltipDegree: "Derajat akar (n).",
        tooltipNumber: "Bilangan yang ingin dicari akarnya."
      }
    },
    nav: {
      calculators: "Kalkulator",
      cbrt: "Kalkulator Akar Pangkat Tiga",
      nth: "Kalkulator Akar Pangkat n",
      about: "Tentang Kami",
      contact: "Kontak",
      sitemap: "Peta Situs",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      disclaimer: "Penyangkalan"
    },
    footer: {
      company: "Perusahaan",
      legal: "Legalitas"
    }
  },
  ms: {
    cbrt: {
      title: "Kalkulator Punca Kuasa Tiga | Alat Kira ∛x Dalam Talian Percuma",
      description: "Kira punca kuasa tiga bagi mana-mana nombor serta-merta. Dapatkan hasil perpuluhan tepat, bentuk radikal dipermudahkan dan langkah pengiraan.",
      hero: {
        part1: "Punca Kuasa Tiga",
        part2: "Kalkulator",
        subtitle: "Kira punca kuasa tiga bagi sebarang nombor — positif atau negatif — serta-merta dengan langkah pengiraan dan bentuk radikal dipermudahkan. 100% percuma."
      },
      calc: {
        title: "Kalkulator Punca Kuasa Tiga",
        desc: "Cari ∛x untuk sebarang nombor termasuk nombor negatif",
        btn: "Kira Punca Kuasa Tiga",
        tooltip: "Masukkan sebarang nombor positif atau negatif untuk mencari punca kuasa tiganya."
      }
    },
    nth: {
      title: "Kalkulator Punca Kuasa ke-n | Kira Sebarang Darjah Punca Kuasa",
      description: "Kira punca kuasa ke-4, ke-5 atau sebarang indeks n dengan cepat berserta langkah kerja lengkap.",
      hero: {
        part1: "Punca Kuasa ke-n",
        part2: "Kalkulator",
        subtitle: "Kira punca kuasa ke-4, ke-5 atau sebarang darjah n bagi sebarang nombor dengan penyelesaian terperinci."
      },
      calc: {
        title: "Kalkulator Punca Kuasa ke-n",
        desc: "Kira sebarang punca kuasa — darjah ke-4, ke-5 atau kustom",
        btn: "Kira Punca Kuasa ke-n",
        degreeLabel: "Darjah punca kuasa (indeks n)",
        numberLabel: "Nombor (radikan x)",
        tooltipDegree: "Indeks punca kuasa (n).",
        tooltipNumber: "Nombor yang ingin dicari punca kuasanya."
      }
    },
    nav: {
      calculators: "Kalkulator",
      cbrt: "Kalkulator Punca Kuasa Tiga",
      nth: "Kalkulator Punca Kuasa ke-n",
      about: "Tentang Kami",
      contact: "Hubungi Kami",
      sitemap: "Peta Laman",
      privacy: "Dasar Privasi",
      terms: "Terma Perkhidmatan",
      disclaimer: "Penafian"
    },
    footer: {
      company: "Syarikat",
      legal: "Undang-undang"
    }
  },
  bg: {
    cbrt: {
      title: "Калкулатор за Кубичен Корен | Безплатен Онлайн Калкулатор за ∛x",
      description: "Изчислявайте кубични корени мигновено. Точни десетични резултати, опростени радикали и подробни стъпки за положителни и отрицателни числа.",
      hero: {
        part1: "Кубичен Корен",
        part2: "Калкулатор",
        subtitle: "Изчислете кубичния корен от всяко положително или отрицателно число веднага. Точен резултат, опростен радикал и подробни стъпки. 100% безплатно."
      },
      calc: {
        title: "Калкулатор за Кубичен Корен",
        desc: "Намерете ∛x за всяко число, включително отрицателни",
        btn: "Изчисли кубичен корен",
        tooltip: "Въведете число, за да намерите неговия кубичен корен."
      }
    },
    nth: {
      title: "Калкулатор за Корен n-та Степен | За Всеки Индекс n",
      description: "Изчислете корен от 4-та, 5-та или произволна n-та степен бързо и точно с показване на стъпките.",
      hero: {
        part1: "Корен n-та Степен",
        part2: "Калкулатор",
        subtitle: "Изчислете 4-ти, 5-ти или корен от произволна степен n с опростяване и подробни стъпки."
      },
      calc: {
        title: "Калкулатор за Корен n-та Степен",
        desc: "Изчислете корен от всякаква степен — 4-та, 5-та или n-та",
        btn: "Изчисли корен n-та степен",
        degreeLabel: "Степен на корена (индекс n)",
        numberLabel: "Подкоренно число (x)",
        tooltipDegree: "Показател на корена (n).",
        tooltipNumber: "Числото, от което се извлича корен."
      }
    },
    nav: {
      calculators: "Калкулатори",
      cbrt: "Калкулатор за Кубичен Корен",
      nth: "Калкулатор за Корен n-та Степен",
      about: "За нас",
      contact: "Контакти",
      sitemap: "Карта на сайта",
      privacy: "Поверителност",
      terms: "Условия за ползване",
      disclaimer: "Отказ от права"
    },
    footer: {
      company: "Компания",
      legal: "Правна информация"
    }
  },
  sv: {
    cbrt: {
      title: "Kubikrotsräknare | Gratis Räknare för Kubikrot (∛x) Online",
      description: "Beräkna kubikrötter direkt med vår gratis kubikrotsräknare. Få exakta decimalvärden, förenklade rotuttryck och steg-för-steg-lösningar.",
      hero: {
        part1: "Kubikrot",
        part2: "Räknare",
        subtitle: "Beräkna kubikroten ur vilket tal som helst — positivt eller negativt — direkt. Få exakt decimalvärde, förenklad rotform och beräkningssteg. 100% gratis."
      },
      calc: {
        title: "Kubikrotsräknare",
        desc: "Beräkna ∛x för alla tal, även negativa tal",
        btn: "Beräkna kubikrot",
        tooltip: "Ange ett positivt eller negativt tal för att beräkna kubikroten."
      }
    },
    nth: {
      title: "N:te Rotsräknare | Gratis Kalkylator för Valfritt Rotindex n",
      description: "Beräkna valfri n:te rot (4:e, 5:e eller valfritt index) omedelbart med förenkling och fullständiga beräkningssteg.",
      hero: {
        part1: "N:te Rot",
        part2: "Räknare",
        subtitle: "Beräkna 4:e roten, 5:e roten eller godtycklig n:te rot med exakt förenkling och lösning steg för steg."
      },
      calc: {
        title: "N:te Rotsräknare",
        desc: "Beräkna valfri rot — 4:e, 5:e eller anpassat index",
        btn: "Beräkna n:te rot",
        degreeLabel: "Rotindex (grad n)",
        numberLabel: "Tal (radikand x)",
        tooltipDegree: "Rotens gradtal (n).",
        tooltipNumber: "Talet du vill dra roten ur."
      }
    },
    nav: {
      calculators: "Räknare",
      cbrt: "Kubikrotsräknare",
      nth: "N:te Rotsräknare",
      about: "Om oss",
      contact: "Kontakt",
      sitemap: "Webbplatskarta",
      privacy: "Integritetspolicy",
      terms: "Användarvillkor",
      disclaimer: "Ansvarsfriskrivning"
    },
    footer: {
      company: "Företag",
      legal: "Juridiskt"
    }
  }
};

// Update all locale JSON files
for (const [locale, data] of Object.entries(translations)) {
  const filePath = path.join(localesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) continue;
  
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (data.site) {
    existing.site = { ...existing.site, ...data.site };
  }
  if (data.cbrt) {
    existing.cbrt = data.cbrt;
  }
  if (data.nth) {
    existing.nth = data.nth;
  }
  if (data.nav) {
    existing.nav = { ...existing.nav, ...data.nav };
  }
  if (data.footer) {
    existing.footer = { ...existing.footer, ...data.footer };
  }
  
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
  console.log(`Updated locale file: ${locale}.json`);
}

console.log('All locale files successfully updated!');