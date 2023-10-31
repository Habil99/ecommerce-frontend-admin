import { PaletteColorOptions } from "@mui/material";

interface CustomPaletteColorOptions extends PaletteColorOptions {
  A50: string;
  A100: string;
  A200: string;
}

interface CustomPalettes {
  purple?: CustomPaletteColorOptions;
}

declare module "@mui/material/styles" {
  interface PaletteOptions extends CustomPalettes {}
}

declare module "@mui/material/styles/createPalette" {
  interface Palette extends CustomPalettes {}
}
