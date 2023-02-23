import "ducduchy-react-components/dist/ducduchy-react-components.cjs.production.min.css";
import "./globals.scss";

// import { useManageLocale } from "../hooks/useManageLocale";
// import { useManageTheme } from "../hooks/useManageTheme";
// import { initializeI18N } from "../loaders/i18n";
// import { ThemeContext } from "../stores/theme-context";

// initializeI18N();

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // const { theme, setTheme } = useManageTheme();
  // useManageLocale();

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
      <section>{children}</section>
    // </ThemeContext.Provider>
  );
}
