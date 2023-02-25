import commonEnNS from "../assets/locales/en/common.json";
import commonViNS from "../assets/locales/vi/common.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getEnv } from "../utils/env";

export const defaultNS = "common";
export const resources = {
  en: { common: commonEnNS },
  vi: { common: commonViNS },
} as const;

export const initializeI18N = () => {
  const isNotInProd = getEnv() !== "production";
  if (i18n.isInitialized && !isNotInProd) {
    return;
  }

  i18n.use(initReactI18next).init({
    returnNull: false,
    debug: !isNotInProd,
    fallbackLng: "en",
    ns: ["common"],
    defaultNS,
    resources,
    interpolation: { escapeValue: false },
  });
};

export const customI18N = i18n;
