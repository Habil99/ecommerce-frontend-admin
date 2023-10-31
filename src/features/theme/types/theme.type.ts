import { PaletteMode, Theme } from "@mui/material";

export type ThemeContextType = {
  theme: Theme;
  mode: PaletteMode;
  toggleMode: (mode: PaletteMode) => void;
};
