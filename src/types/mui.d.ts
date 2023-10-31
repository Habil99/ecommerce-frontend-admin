import { PaletteColorOptions, SimplePaletteColorOptions } from "@mui/material";

interface CustomPaletteColorOptions extends PaletteColorOptions {
  A50: string;
  A100: string;
  A200: string;
}

interface CustomPalettes {
  purple?: CustomPaletteColorOptions;
  border?: SimplePaletteColorOptions;
}

declare module "@mui/material/styles" {
  interface PaletteOptions extends CustomPalettes {}
}

declare module "@mui/material/styles/createPalette" {
  interface Palette extends CustomPalettes {}

  interface TypeBackground {
    primary: string;
  }
}
