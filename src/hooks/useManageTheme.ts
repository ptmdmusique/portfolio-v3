import React, { useEffect, useRef } from "react";
import { Theme } from "../data/theme";

const getThemeString = (theme: Theme) => `theme-${theme}` as const;

export const useManageTheme = () => {
  const [theme, setTheme] = React.useState<Theme>("light");
  const oldTheme = useRef<Theme | null>(null);

  useEffect(() => {
    if (oldTheme.current) {
      document.body.classList.remove(getThemeString(oldTheme.current));
    }

    document.body.classList.add(getThemeString(theme));
    oldTheme.current = theme;
  }, [theme]);

  return { theme, setTheme };
};
