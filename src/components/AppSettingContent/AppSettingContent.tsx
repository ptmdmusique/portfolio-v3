import { Button } from "ducduchy-react-components";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { SupportedLanguage, supportedLanguages, themeList } from "../../data";
import { useTheme } from "../../stores";
import "./AppSettingContent.scss";

const getTextFromLocale = (locale: SupportedLanguage) => {
  switch (locale) {
    case "en":
      return "EN - English";
    case "vi":
      return "VI - Tiếng Việt";
    default:
      return "English";
  }
};

export const AppSettingContent = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const { theme: curTheme, setTheme } = useTheme();

  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // A workaround to focus the button when the popover is opened
    // TODO: figure out a better way to do this
    buttonRef.current?.focus();
  }, []);

  return (
    <div className="app-setting-content">
      <div className="app-setting-content__section">
        <p className="title">{t("app-setting.language")}</p>

        {supportedLanguages.map((locale, index) => (
          <Button
            key={locale}
            ref={index === 0 ? buttonRef : undefined}
            className="cta"
            borderType="plain"
            onClick={() => router.push({ pathname, query }, asPath, { locale })}
            colorType={locale === router.locale ? "primary" : "neutral"}
          >
            <p>{getTextFromLocale(locale)}</p>
          </Button>
        ))}
      </div>

      <div className="app-setting-content__section">
        <p className="title">{t("app-setting.theme")}</p>

        {themeList.map((theme) => (
          <Button
            key={theme}
            className="cta"
            borderType="plain"
            onClick={() => setTheme(theme)}
            colorType={theme === curTheme ? "primary" : "neutral"}
            icon={["fas", theme === "dark" ? "moon" : "sun"]}
          >
            <p>{t(`app-setting.theme-list.${theme}`)}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};
