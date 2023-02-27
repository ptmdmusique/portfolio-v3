import "ducduchy-react-components/dist/ducduchy-react-components.cjs.production.min.css";
import "./globals.scss";

import { Inconsolata } from "@next/font/google";
import type { AppProps } from "next/app";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { Navbar } from "../components/Navbar/Navbar";
import { useManageLocale } from "../hooks/useManageLocale";
import { useManageTheme } from "../hooks/useManageTheme";
import { initializeI18N, initializeIconList } from "../loaders";
import { ThemeContext } from "../stores/theme-context";
import Head from "next/head";

const inconsolata = Inconsolata({ subsets: ["latin"] });

initializeI18N();
initializeIconList();

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useManageTheme();
  useManageLocale();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inconsolata.style.fontFamily};
        }
      `}</style>

      <Head>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
      </Head>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AppHeader />
        <Navbar />

        <Component {...pageProps} />
      </ThemeContext.Provider>
    </>
  );
}
