// Educational content builder for Racine Carrée (Square Root) Homepage across all 18 languages
import { getHomeBoilerplate, type HomeBoilerplate } from './homeBoilerplate';

export interface HomeContent extends HomeBoilerplate {
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

export function getHomeContent(locale: string): HomeContent {
  const bp = getHomeBoilerplate(locale);
  const tocTitle = TOC_TITLES[locale] || TOC_TITLES.en;

  const toc = [
    {
      title: bp.s1Title,
      href: "#section-what-is-square-root"
    },
    {
      title: bp.s2Title,
      href: "#section-how-to-use",
      subitems: [
        { title: bp.s2Steps[0]?.title || "Step 1", href: "#step-input" },
        { title: bp.s2Steps[1]?.title || "Step 2", href: "#step-calc" },
        { title: bp.s2Steps[2]?.title || "Step 3", href: "#step-result" }
      ]
    },
    {
      title: bp.s3Title,
      href: "#section-notation"
    },
    {
      title: bp.s4Title,
      href: "#section-formula"
    },
    {
      title: bp.s5Title,
      href: "#section-laws"
    },
    {
      title: bp.s6Title,
      href: "#section-methods",
      subitems: [
        { title: bp.s6M1Title, href: "#method-calculator" },
        { title: bp.s6M2Title, href: "#method-factorization" },
        { title: bp.s6M3Title, href: "#method-division" },
        { title: bp.s6M4Title, href: "#method-estimation" }
      ]
    },
    {
      title: bp.s7Title,
      href: "#section-positive-numbers"
    },
    {
      title: bp.s8Title,
      href: "#section-negative-numbers"
    },
    {
      title: bp.s9Title,
      href: "#section-difference-cubique"
    },
    {
      title: bp.s10Title,
      href: "#section-applications",
      subitems: [
        { title: bp.s10Apps[0]?.title || "App 1", href: "#app-construction" },
        { title: bp.s10Apps[1]?.title || "App 2", href: "#app-finance" },
        { title: bp.s10Apps[2]?.title || "App 3", href: "#app-physics" },
        { title: bp.s10Apps[3]?.title || "App 4", href: "#app-cs" },
        { title: bp.s10Apps[4]?.title || "App 5", href: "#app-everyday" }
      ]
    },
    {
      title: bp.s11Title,
      href: "#section-simplification"
    },
    {
      title: bp.s12Title,
      href: "#reference-tables"
    },
    {
      title: bp.s13Title,
      href: "#section-perfect-squares"
    },
    {
      title: bp.s14Title,
      href: "#section-faqs"
    },
    {
      title: bp.s15Title,
      href: "#section-recap"
    }
  ];

  return {
    ...bp,
    tocTitle,
    toc
  };
}
