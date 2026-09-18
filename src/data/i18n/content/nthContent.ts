// Educational content builder for Nth Root Calculator across all 18 languages
import { getNthBoilerplate, type NthBoilerplate } from './nthBoilerplate';

export interface NthContent extends NthBoilerplate {
  tocTitle: string;
  toc: Array<{
    title: string;
    href: string;
    subitems?: Array<{ title: string; href: string }>;
  }>;
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

  const toc = [
    {
      title: bp.s1Title,
      href: "#section-what-is-nth-root"
    },
    {
      title: bp.s2Title,
      href: "#section-how-to-use-nth",
      subitems: [
        { title: bp.s2Steps[0]?.title || "Step 1", href: "#nth-step-input" },
        { title: bp.s2Steps[1]?.title || "Step 2", href: "#nth-step-index" },
        { title: bp.s2Steps[2]?.title || "Step 3", href: "#nth-step-calc" }
      ]
    },
    {
      title: bp.s3Title,
      href: "#section-nth-notation"
    },
    {
      title: bp.s4Title,
      href: "#section-nth-formula",
      subitems: [
        { title: bp.s4PartsTitle, href: "#nth-formula-parts" }
      ]
    },
    {
      title: bp.s5Title,
      href: "#section-nth-examples"
    },
    {
      title: bp.s6Title,
      href: "#section-nth-even-odd"
    },
    {
      title: bp.s7Title,
      href: "#section-nth-simplify"
    },
    {
      title: bp.s8Title,
      href: "#section-nth-applications",
      subitems: [
        { title: bp.s8Apps[0]?.title || "App 1", href: "#nth-app-finance" },
        { title: bp.s8Apps[1]?.title || "App 2", href: "#nth-app-stats" },
        { title: bp.s8Apps[2]?.title || "App 3", href: "#nth-app-engineering" },
        { title: bp.s8Apps[3]?.title || "App 4", href: "#nth-app-cs" }
      ]
    },
    {
      title: bp.s9Title,
      href: "#section-nth-reference"
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
    toc
  };
}
