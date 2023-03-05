import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useManageLocale = () => {
  const { locale } = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);
};
