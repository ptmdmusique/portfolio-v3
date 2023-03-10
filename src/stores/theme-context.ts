import { createContext, useContext } from "react";
import { Theme } from "../data/theme";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => null,
});

export const useTheme = () => useContext(ThemeContext);
