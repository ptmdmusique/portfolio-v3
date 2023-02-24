import "ducduchy-react-components/dist/ducduchy-react-components.cjs.production.min.css";
import "./globals.scss";

import type { AppProps } from "next/app";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { Navbar } from "../components/Navbar/Navbar";
import { useManageLocale } from "../hooks/useManageLocale";
import { useManageTheme } from "../hooks/useManageTheme";
import { initializeI18N, initializeIconList } from "../loaders";
import { ThemeContext } from "../stores/theme-context";

import { Source_Code_Pro } from "@next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

initializeI18N();
initializeIconList();

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useManageTheme();
  useManageLocale();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sourceCodePro.style.fontFamily};
        }
      `}</style>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AppHeader />
        <Navbar />

        <main className="app-content">
          <Component {...pageProps} />
        </main>
      </ThemeContext.Provider>
    </>
  );
}
