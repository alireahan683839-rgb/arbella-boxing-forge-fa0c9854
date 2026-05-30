import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "@/i18n/locales/en.json";
import es from "@/i18n/locales/es.json";
import sv from "@/i18n/locales/sv.json";

export const SUPPORTED_LANGS = ["en", "es", "sv"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        es: { translation: es },
        sv: { translation: sv },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "es", "sv"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "lodgey_lang",
      },
      react: { useSuspense: false },
    });
}

export default i18n;