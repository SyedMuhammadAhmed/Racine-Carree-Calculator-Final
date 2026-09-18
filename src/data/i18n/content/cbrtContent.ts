// Educational content builder for Racine Cubique (Cube Root) across all 18 languages
import { getCbrtBoilerplate, type CbrtBoilerplate } from './cbrtBoilerplate';

export interface CbrtContent extends CbrtBoilerplate {
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

export function getCbrtContent(locale: string): CbrtContent {
  const bp = getCbrtBoilerplate(locale);
  const tocTitle = TOC_TITLES[locale] || TOC_TITLES.en;

  const toc = [
    {
      title: bp.s1Title,
      href: "#section-what-is-cube-root"
    },
    {
      title: bp.s2Title,
      href: "#section-cbrt-how-to-use",
      subitems: [
        { title: bp.s2Steps[0]?.title || "Step 1", href: "#cbrt-step-input" },
        { title: bp.s2Steps[1]?.title || "Step 2", href: "#cbrt-step-calc" },
        { title: bp.s2Steps[2]?.title || "Step 3", href: "#cbrt-step-result" }
      ]
    },
    {
      title: bp.s3Title,
      href: "#section-cbrt-notation"
    },
    {
      title: bp.s4Title,
      href: "#section-cbrt-formula"
    },
    {
      title: bp.s5Title,
      href: "#section-cbrt-laws"
    },
    {
      title: bp.s6Title,
      href: "#section-cbrt-methods",
      subitems: [
        { title: bp.s6M1Title, href: "#cbrt-method-calculator" },
        { title: bp.s6M2Title, href: "#cbrt-method-factorization" },
        { title: bp.s6M3Title, href: "#cbrt-method-newton" },
        { title: bp.s6M4Title, href: "#cbrt-method-estimation" }
      ]
    },
    {
      title: bp.s7Title,
      href: "#section-cbrt-positive"
    },
    {
      title: bp.s8Title,
      href: "#section-cbrt-negative"
    },
    {
      title: bp.s9Title,
      href: "#section-cbrt-diff"
    },
    {
      title: bp.s10Title,
      href: "#section-cbrt-applications",
      subitems: [
        { title: bp.s10Apps[0]?.title || "App 1", href: "#cbrt-app-architecture" },
        { title: bp.s10Apps[1]?.title || "App 2", href: "#cbrt-app-shipping" },
        { title: bp.s10Apps[2]?.title || "App 3", href: "#cbrt-app-physics" },
        { title: bp.s10Apps[3]?.title || "App 4", href: "#cbrt-app-finance" }
      ]
    },
    {
      title: bp.s11Title,
      href: "#section-cbrt-simplification"
    },
    {
      title: bp.s12Title,
      href: "#section-cbrt-reference"
    },
    {
      title: bp.s13Title,
      href: "#section-cbrt-perfect-cubes"
    },
    {
      title: bp.s14Title,
      href: "#section-cbrt-faqs"
    },
    {
      title: bp.s15Title,
      href: "#section-cbrt-recap"
    }
  ];

  return {
    ...bp,
    tocTitle,
    toc
  };
}
