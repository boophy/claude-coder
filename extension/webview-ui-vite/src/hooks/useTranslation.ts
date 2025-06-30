import { useState, useEffect } from "react";
import { i18n, TranslationKey } from "../i18n";

export const useTranslation = () => {
  const [language, setLanguage] = useState(i18n.getLanguage());

  useEffect(() => {
    const unsubscribe = i18n.onLanguageChanged((newLang) => {
      setLanguage(newLang);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    t: (key: TranslationKey, options?: Record<string, string | number>): string => i18n.t(key, options),
    lang: language,
    changeLanguage: i18n.changeLanguage,
  };
};
