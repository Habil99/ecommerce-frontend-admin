import { PaletteMode, PaletteOptions } from "@mui/material";

export const getPaletteTokens = (mode: PaletteMode): PaletteOptions => ({
  mode,
  ...(mode === "light"
    ? {
        primary: {
          main: "#5D87FF",
          light: "#ECF2FF",
          dark: "#4570EA",
        },
        secondary: {
          main: "#49BEFF",
          light: "#E8F7FF",
          dark: "#23afdb",
        },
        border: {
          main: "#424F5FE4",
          light: "#EAEFF4",
          dark: "#2A3447",
        },
        success: {
          main: "#13DEB9",
          light: "#E6FFFA",
          dark: "#02b3a9",
          contrastText: "#ffffff",
        },
        info: {
          main: "#539BFF",
          light: "#EBF3FE",
          dark: "#1682d4",
          contrastText: "#ffffff",
        },
        error: {
          main: "#FA896B",
          light: "#FDEDE8",
          dark: "#f3704d",
          contrastText: "#ffffff",
        },
        warning: {
          main: "#FFAE1F",
          light: "#FEF5E5",
          dark: "#ae8e59",
          contrastText: "#ffffff",
        },
        purple: {
          A50: "#EBF3FE",
          A100: "#6610f2",
          A200: "#557fb9",
        },
        grey: {
          100: "#F2F6FA",
          200: "#EAEFF4",
          300: "#DFE5EF",
          400: "#7C8FAC",
          500: "#5A6A85",
          600: "#2A3547",
        },
        text: {
          primary: "#2A3547",
          secondary: "#5A6A85",
        },
        action: {
          disabledBackground: "rgba(73,82,88,0.12)",
          hoverOpacity: 0.02,
          hover: "#f6f9fc",
        },
        divider: "#e5eaef",
        background: {
          default: "#e5eaef",
          paper: "#e5eaef",
          primary: "#e5eaef",
        },
      }
    : {
        primary: {
          main: "#5D87FF",
          light: "#ECF2FF",
          dark: "#4570EA",
        },
        secondary: {
          main: "#253662",
          light: "#E8F7FF",
          dark: "#1d2c51",
        },
        border: {
          main: "#465670",
          light: "#EAEFF4",
          dark: "#2A3447",
        },
        success: {
          main: "#02b3a9",
          light: "#E6FFFA",
          dark: "#006a62",
          contrastText: "#ffffff",
        },
        info: {
          main: "#1682d4",
          light: "#EBF3FE",
          dark: "#0d4e81",
          contrastText: "#ffffff",
        },
        error: {
          main: "#f3704d",
          light: "#FDEDE8",
          dark: "#9c3a23",
          contrastText: "#ffffff",
        },
        warning: {
          main: "#ae8e59",
          light: "#FEF5E5",
          dark: "#786345",
          contrastText: "#ffffff",
        },
        purple: {
          A50: "#557fb9",
          A100: "#365394",
          A200: "#1b2b3e",
        },
        grey: {
          100: "#7C8FAC",
          200: "#5A6A85",
          300: "#2A3547",
          400: "#F2F6FA",
          500: "#EAEFF4",
          600: "#DFE5EF",
        },
        text: {
          primary: "#EAEFF4",
          secondary: "#5A6A85",
        },
        action: {
          disabledBackground: "rgba(73,82,88,0.12)",
          hoverOpacity: 0.02,
          hover: "#0f4b5b",
        },
        divider: "#2A3547",
        background: {
          primary: "#2A3447",
          default: "#2A3447",
          paper: "#2A3447",
        },
      }),
});
