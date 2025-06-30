import { en } from "./locales/en";
import { zh } from "./locales/zh";

const resources = {
  en,
  zh,
};

type NestedKey<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}` | `${K & string}.${NestedKey<T[K]>}`;
    }[keyof T]
  : "";

export type TranslationKey = NestedKey<(typeof resources)["en"]["translation"]>;

type Listener = (lang: string) => void;
const listeners: Set<Listener> = new Set();

const getBrowserLanguage = (): string => {
  if (typeof navigator === "undefined") {
    return "zh"; 
  }
  const lang = navigator.language || "zh";
  return lang.startsWith("zh") ? "zh" : "en";
};

let currentLanguage = getBrowserLanguage();

export const i18n = {
  t: (key: TranslationKey | string, options?: Record<string, string | number>): string => {
    const getNestedValue = (obj: any, path: string): string | undefined =>
      path.split(".").reduce((acc, part) => acc && acc[part], obj);

    const langResources = resources[currentLanguage as keyof typeof resources]?.translation;
    let translation = getNestedValue(langResources, key) ?? getNestedValue(resources.en.translation, key) ?? key;

    if (options) {
      Object.entries(options).forEach(([k, value]) => {
        translation = translation.replace(new RegExp(`{{${k}}}`, "g"), String(value));
      });
    }

    return translation;
  },

  tSafe: (key: TranslationKey, options?: Record<string, string | number>): string => {
    return i18n.t(key, options);
  },

  changeLanguage: (lang: "en" | "zh") => {
    if (lang !== currentLanguage && resources[lang]) {
      currentLanguage = lang;
      listeners.forEach((listener) => listener(lang));
    }
  },

  getLanguage: (): string => currentLanguage,

  onLanguageChanged: (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};