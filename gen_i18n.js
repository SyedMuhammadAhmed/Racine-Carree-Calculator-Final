const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'theme', 'i18n');
const localesDir = path.join(baseDir, 'locales');

if (!fs.existsSync(localesDir)) {
  fs.mkdirSync(localesDir, { recursive: true });
}

const enData = {
  "site": {
    "title": "My Astro Project",
    "description": "An awesome Astro project"
  },
  "nav": {
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "blog": "Blog",
    "terms": "Terms of Service",
    "privacy": "Privacy Policy"
  },
  "footer": {
    "description": "Building the future of web with Astro."
  },
  "common": {
    "readMore": "Read More",
    "learnMore": "Learn More",
    "backToBlog": "Back to Blog",
    "publishedOn": "Published on",
    "by": "By",
    "category": "Category",
    "page": "Page",
    "of": "of",
    "showing": "Showing",
    "results": "results",
    "sendMessage": "Send Message",
    "sending": "Sending...",
    "messageSent": "Message sent successfully!",
    "messageError": "There was an error sending your message. Please try again.",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "submit": "Submit",
    "allRightsReserved": "All rights reserved.",
    "poweredBy": "Powered by Astro"
  },
  "hero": {
    "headline": "Welcome to Our Platform",
    "subheadline": "The best place to build your next project.",
    "ctaText": "Get Started"
  },
  "howItWorks": {
    "title": "How It Works",
    "steps": [
      {
        "title": "Step 1: Sign Up",
        "description": "Create a free account in seconds."
      },
      {
        "title": "Step 2: Setup",
        "description": "Configure your project settings easily."
      },
      {
        "title": "Step 3: Launch",
        "description": "Deploy to the world with one click."
      }
    ]
  },
  "about": {
    "title": "About Us",
    "description": "We are a team of passionate developers building amazing tools."
  },
  "contact": {
    "title": "Contact Us",
    "description": "Have a question? We'd love to hear from you.",
    "successMessage": "Thanks for reaching out! We will get back to you shortly.",
    "errorMessage": "Oops! Something went wrong."
  }
};

const locales = ["en", "hi", "es", "ru", "fr", "de", "it", "pt", "bn", "ja", "ko", "ms", "pl", "id", "ar", "bg", "tr", "sv"];

for (const locale of locales) {
  fs.writeFileSync(path.join(localesDir, `${locale}.json`), JSON.stringify(enData, null, 2), 'utf8');
}

const faqData = [
  {"question": "What is this project?", "answer": "This is an awesome Astro project with i18n support.", "display": true},
  {"question": "How do I use it?", "answer": "Simply navigate through the pages and enjoy the localized content.", "display": true},
  {"question": "Is it free?", "answer": "Yes, it is completely free to use.", "display": true},
  {"question": "Do I need to sign up?", "answer": "No sign up is required to view the content.", "display": true},
  {"question": "What languages are supported?", "answer": "We support 18 different languages out of the box.", "display": true},
  {"question": "How do I report a bug?", "answer": "Please use the contact form to reach out to our team.", "display": true}
];

fs.writeFileSync(path.join(localesDir, 'en.faq.json'), JSON.stringify(faqData, null, 2), 'utf8');

const sharedData = {
  "sharedNav": {"home": "Home", "about": "About", "contact": "Contact", "blog": "Blog", "terms": "Terms", "privacy": "Privacy"},
  "sharedButtons": {"submit": "Submit", "learnMore": "Learn More"}
};

fs.writeFileSync(path.join(localesDir, 'shared.json'), JSON.stringify(sharedData, null, 2), 'utf8');

const utilsTs = `export const LOCALES = ['en', 'hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const RTL_LOCALES = ['ar'];

export function getLocaleFromParams(params: Record<string, string | undefined>): Locale {
  const locale = params.locale;
  if (locale && LOCALES.includes(locale as Locale)) {
    return locale as Locale;
  }
  return DEFAULT_LOCALE;
}

export function getLocalizedUrl(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : \`/\${path}\`;
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  return \`/\${locale}\${cleanPath}\`;
}

export function getStaticPathsForLocales(): Array<{ params: { locale: string } }> {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({
    params: { locale }
  }));
}

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale as string);
}

export function getHtmlDir(locale: Locale): "rtl" | "ltr" {
  return isRTL(locale) ? "rtl" : "ltr";
}
`;

fs.writeFileSync(path.join(baseDir, 'utils.ts'), utilsTs, 'utf8');

const translationsTs = `import { DEFAULT_LOCALE, type Locale } from './utils';
import shared from './locales/shared.json';

// Dynamic import for locales using import.meta.glob (Vite feature standard in Astro)
const locales = import.meta.glob('./locales/*.json', { eager: true });

export type TranslationSet = Record<string, any>;

export function loadTranslations(locale: Locale): TranslationSet {
  const mainPath = \`./locales/\${locale}.json\`;
  const defaultPath = \`./locales/\${DEFAULT_LOCALE}.json\`;
  const faqPath = \`./locales/\${locale}.faq.json\`;
  const defaultFaqPath = \`./locales/\${DEFAULT_LOCALE}.faq.json\`;

  const mainData = (locales[mainPath] || locales[defaultPath] || { default: {} }) as any;
  const faqData = (locales[faqPath] || locales[defaultFaqPath] || { default: [] }) as any;

  return {
    ...mainData.default,
    faq: faqData.default,
    shared
  };
}

export function t(translations: TranslationSet, key: string): any {
  const keys = key.split('.');
  let current = translations;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // Fallback behavior: return the key itself if not found
      return key;
    }
  }
  return current;
}
`;

fs.writeFileSync(path.join(baseDir, 'translations.ts'), translationsTs, 'utf8');

console.log("All files generated successfully!");
