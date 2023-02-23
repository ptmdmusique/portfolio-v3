import type { AppProps } from "next/app";
import { useManageLocale } from "../hooks/useManageLocale";
import { initializeI18N } from "../loaders/i18n";
import "./globals.scss";

initializeI18N();

export default function MyApp({ Component, pageProps }: AppProps) {
  useManageLocale();

  return <Component {...pageProps} />;
}
