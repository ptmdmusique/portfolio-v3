import "ducduchy-react-components/dist/ducduchy-react-components.cjs.production.min.css";
import "./globals.scss";

import type { AppProps } from "next/app";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { Navbar } from "../components/Navbar/Navbar";
import { useManageLocale } from "../hooks/useManageLocale";
import { useManageTheme } from "../hooks/useManageTheme";
import { initializeI18N, initializeIconList } from "../loaders";
import { ThemeContext } from "../stores/theme-context";

initializeI18N();
initializeIconList();

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useManageTheme();
  useManageLocale();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AppHeader />
      <Navbar />

      <div className="app-content">
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}
