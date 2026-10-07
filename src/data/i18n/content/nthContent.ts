// Educational content builder for Nth Root Calculator across all 18 languages
import { getNthBoilerplate, type NthBoilerplate } from './nthBoilerplate';
import { getNthInteractiveI18n, type NthInteractiveI18n } from './nthInteractive';

export interface NthContent extends NthBoilerplate {
  tocTitle: string;
  toc: Array<{
    title: string;
    href: string;
    subitems?: Array<{ title: string; href: string }>;
  }>;
  interactive: NthInteractiveI18n;
}

const TOC_TITLES: Record<string, string> = {
  en: "Table of Contents",
  fr: "Table des matières",
  es: "Tabla de contenidos",
  de: "Inhaltsverzeichnis",
  it: "Indice dei contenuti",
  pt: "Índice de conteúdos",
  ru: "Содержание",
  pl: "Spis treści",
  sv: "Innehållsförteckning",
  tr: "İçindekiler",
  id: "Daftar Isi",
  ms: "Jadual Kandungan",
  ar: "جدول المحتويات",
  hi: "विषय सूची",
  bn: "সূচিপত্র",
  ja: "目次",
  ko: "목차",
  bg: "Съдържание"
};

export function getNthContent(locale: string): NthContent {
  const bp = getNthBoilerplate(locale);
  const tocTitle = TOC_TITLES[locale] || TOC_TITLES.en;
  const interactive = getNthInteractiveI18n(locale);

  const toc = [
    {
      title: bp.s1Title,
      href: "#section-what-is-nth-root"
    },
    {
      title: bp.s4Title,
      href: "#section-nth-formula"
    },
    {
      title: bp.s6Title,
      href: "#section-nth-even-odd"
    },
    {
      title: bp.s2Title,
      href: "#section-nth-simplify",
      subitems: [
        { title: interactive.method1Tab, href: "#method-panel-factorization" },
        { title: interactive.method2Tab, href: "#method-panel-calculator" },
        { title: interactive.method3Tab, href: "#method-panel-newton" }
      ]
    },
    {
      title: bp.s3Title,
      href: "#section-nth-notation"
    },
    {
      title: bp.s9Title,
      href: "#section-nth-reference"
    },
    {
      title: bp.s8Title,
      href: "#section-nth-applications"
    },
    {
      title: bp.s10Title,
      href: "#section-nth-faqs"
    },
    {
      title: bp.s11Title,
      href: "#section-nth-recap"
    }
  ];

  return {
    ...bp,
    tocTitle,
    toc,
    interactive
  };
}
