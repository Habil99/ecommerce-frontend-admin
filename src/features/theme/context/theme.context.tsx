import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContextType } from "@/features/theme/types/theme.type.ts";
import { PaletteMode, ThemeProvider, useMediaQuery } from "@mui/material";
import { getTheme } from "@/features/theme";

const DEFAULT_FORCED_MODE = "dark";

export const AppThemeContext = createContext<ThemeContextType>({
  theme: getTheme(DEFAULT_FORCED_MODE),
  mode: DEFAULT_FORCED_MODE,
  toggleMode: () => {},
});

const getModeByUserPreference = (prefersDark: boolean): PaletteMode =>
  prefersDark ? "light" : "dark";

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>(
    getModeByUserPreference(prefersDarkMode)
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    const defaultMode = localStorage.getItem("theme") as PaletteMode | null;

    if (defaultMode && defaultMode !== mode) {
      setMode(defaultMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);
  console.log(mode);
  return (
    <AppThemeContext.Provider
      value={{
        theme,
        mode,
        toggleMode: colorMode.toggleColorMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};
