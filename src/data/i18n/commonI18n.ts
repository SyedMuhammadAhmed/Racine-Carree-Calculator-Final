// Shared common translations for UI components, author bylines, and interactive hints across all 18 languages

export interface AuthorBylineI18n {
  writtenBy: string;
  authorRole: string;
  share: string;
}

export const AUTHOR_BYLINE_I18N: Record<string, AuthorBylineI18n> = {
  en: { writtenBy: "Written & Verified by", authorRole: "Founder & Creator", share: "Share:" },
  fr: { writtenBy: "Rédigé et vérifié par", authorRole: "Fondateur et créateur", share: "Partager :" },
  es: { writtenBy: "Escrito y verificado por", authorRole: "Fundador y creador", share: "Compartir:" },
  de: { writtenBy: "Verfasst und geprüft von", authorRole: "Gründer & Schöpfer", share: "Teilen:" },
  it: { writtenBy: "Scritto e verificato da", authorRole: "Fondatore e creatore", share: "Condividi:" },
  pt: { writtenBy: "Escrito e verificado por", authorRole: "Fundador e criador", share: "Compartilhar:" },
  ru: { writtenBy: "Написано и проверено", authorRole: "Основатель и создатель", share: "Поделиться:" },
  pl: { writtenBy: "Napisane i zweryfikowane przez", authorRole: "Założyciel i twórca", share: "Udostępnij:" },
  sv: { writtenBy: "Skrivet & verifierat av", authorRole: "Grundare & skapare", share: "Dela:" },
  tr: { writtenBy: "Yazan ve Doğrulayan", authorRole: "Kurucu ve Yaratıcı", share: "Paylaş:" },
  id: { writtenBy: "Ditulis & Diverifikasi oleh", authorRole: "Pendiri & Pencipta", share: "Bagikan:" },
  ms: { writtenBy: "Ditulis & Disahkan oleh", authorRole: "Pengasas & Pencipta", share: "Kongsi:" },
  ar: { writtenBy: "كُتب ودُقّق بواسطة", authorRole: "المؤسس والمبتكر", share: "مشاركة:" },
  hi: { writtenBy: "द्वारा लिखित और सत्यापित", authorRole: "संस्थापक और निर्माता", share: "साझा करें:" },
  bn: { writtenBy: "দ্বারা লিখিত এবং যাচাইকৃত", authorRole: "প্রতিষ্ঠাতা ও নির্মাতা", share: "শেয়ার করুন:" },
  ja: { writtenBy: "監修・執筆", authorRole: "創設者兼開発者", share: "シェア:" },
  ko: { writtenBy: "작성 및 검증 완료", authorRole: "설립자 겸 제작자", share: "공유:" },
  bg: { writtenBy: "Написано и проверено от", authorRole: "Основател и създател", share: "Споделяне:" },
};

export const SCROLL_HINT_I18N: Record<string, string> = {
  en: "Scroll to browse table ↓",
  fr: "Faites défiler pour explorer le tableau ↓",
  es: "Desplázate para explorar la tabla ↓",
  de: "Scrollen, um die Tabelle zu durchsuchen ↓",
  it: "Scorri per esplorare la tabella ↓",
  pt: "Role para explorar a tabela ↓",
  ru: "Прокрутите для просмотра таблицы ↓",
  pl: "Przewiń, aby przeglądać tabelę ↓",
  sv: "Bläddra för att utforska tabellen ↓",
  tr: "Tabloyu incelemek için kaydırın ↓",
  id: "Gulir untuk melihat tabel ↓",
  ms: "Tatal untuk melihat jadual ↓",
  ar: "مرر لتصفح الجدول ↓",
  hi: "तालिका देखने के लिए स्क्रॉल करें ↓",
  bn: "সারণী দেখতে স্ক্রোল করুন ↓",
  ja: "スクロールして表を表示 ↓",
  ko: "표를 보려면 스크롤하세요 ↓",
  bg: "Превъртете за преглед на таблицата ↓",
};

export function getAuthorByline(lang: string): AuthorBylineI18n {
  return AUTHOR_BYLINE_I18N[lang] || AUTHOR_BYLINE_I18N.en;
}

export function getScrollHint(lang: string): string {
  return SCROLL_HINT_I18N[lang] || SCROLL_HINT_I18N.en;
}
