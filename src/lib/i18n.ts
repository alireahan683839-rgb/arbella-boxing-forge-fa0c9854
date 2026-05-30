import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "@/i18n/locales/en.json";
import es from "@/i18n/locales/es.json";
import sv from "@/i18n/locales/sv.json";
import no from "@/i18n/locales/no.json";
import da from "@/i18n/locales/da.json";
import fi from "@/i18n/locales/fi.json";
import de from "@/i18n/locales/de.json";
import fr from "@/i18n/locales/fr.json";
import it from "@/i18n/locales/it.json";
import bs from "@/i18n/locales/bs.json";
import sr from "@/i18n/locales/sr.json";
import hr from "@/i18n/locales/hr.json";

export const SUPPORTED_LANGS = ["en", "es", "sv", "no", "da", "fi", "de", "fr", "it", "bs", "sr", "hr"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export const LANG_LABELS: Record<SupportedLang, string> = {
  en: "English",
  es: "Español",
  sv: "Svenska",
  no: "Norsk",
  da: "Dansk",
  fi: "Suomi",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  bs: "Bosanski",
  sr: "Srpski",
  hr: "Hrvatski",
};

export const LANG_FLAGS: Record<SupportedLang, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  sv: "🇸🇪",
  no: "🇳🇴",
  da: "🇩🇰",
  fi: "🇫🇮",
  de: "🇩🇪",
  fr: "🇫🇷",
  it: "🇮🇹",
  bs: "🇧🇦",
  sr: "🇷🇸",
  hr: "🇭🇷",
};

// ISO 3166-1 alpha-2 country code per language (for SVG flag rendering).
export const LANG_COUNTRY: Record<SupportedLang, string> = {
  en: "gb",
  es: "es",
  sv: "se",
  no: "no",
  da: "dk",
  fi: "fi",
  de: "de",
  fr: "fr",
  it: "it",
  bs: "ba",
  sr: "rs",
  hr: "hr",
};

export function flagUrl(lang: SupportedLang, width: 40 | 80 = 40) {
  return `https://flagcdn.com/w${width}/${LANG_COUNTRY[lang]}.png`;
}

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        es: { translation: es },
        sv: { translation: sv },
        no: { translation: no },
        da: { translation: da },
        fi: { translation: fi },
        de: { translation: de },
        fr: { translation: fr },
        it: { translation: it },
        bs: { translation: bs },
        sr: { translation: sr },
        hr: { translation: hr },
      },
      lng: "en",
      fallbackLng: "en",
      supportedLngs: [...SUPPORTED_LANGS],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage"],
        caches: ["localStorage"],
        lookupLocalStorage: "lodgey_lang",
      },
      react: { useSuspense: false },
    });
}

export default i18n;