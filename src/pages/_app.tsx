import type { AppProps } from "next/app";
import { useManageLocale } from "../hooks/useManageLocale";
import { useManageTheme } from "../hooks/useManageTheme";
import { initializeI18N } from "../loaders/i18n";
import { ThemeContext } from "../stores/theme-context";
import "./globals.scss";

initializeI18N();

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useManageTheme();
  useManageLocale();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
