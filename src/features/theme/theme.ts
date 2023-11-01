import { createTheme, PaletteMode, Theme } from "@mui/material";
import { getPaletteTokens } from "@/features/theme/constants/color-tokens.ts";

export const getTheme = (mode: PaletteMode): Theme =>
  createTheme({
    direction: "ltr",
    palette: getPaletteTokens(mode),
    typography: {
      fontFamily: "'Poppins', sans-serif;",
      fontSize: 16,
      h1: {
        fontWeight: 600,
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontFamily: "'Poppins', sans-serif;",
      },
      h2: {
        fontWeight: 600,
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontFamily: "'Poppins', sans-serif;",
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        fontFamily: "'Poppins', sans-serif;",
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.3125rem",
        lineHeight: "1.6rem",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: "1.6rem",
      },
      h6: {
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: "1.2rem",
      },
      button: {
        textTransform: "capitalize",
        fontWeight: 400,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.334rem",
      },
      body2: {
        fontSize: "0.75rem",
        letterSpacing: "0rem",
        fontWeight: 400,
        lineHeight: "1rem",
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
    },
    shadows: [
      "none",
      "0px 2px 3px rgba(0,0,0,0.10)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
      "0 9px 17.5px rgb(0,0,0,0.05)",
      "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
      "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)",
    ],
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            ["& .MuiOutlinedInput-notchedOutline"]: {
              display: "none",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            transform: "none",
            position: "relative",
            marginBottom: "0.5rem",
            color: theme.palette.text.primary,
            "&.Mui-focused": {
              color: theme.palette.text.primary,
            },
          }),
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: ({ theme }) => ({
            borderRadius: 4,
            position: "relative",
            border: "1px solid",
            borderColor: theme.palette.border?.main,
            fontSize: 14,
            padding: "12px 14px !important",
            "&:focus": {
              borderColor: theme.palette.primary.main,
            },
            transition: theme.transitions.create([
              "border-color",
              "background-color",
              "box-shadow",
            ]),
          }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          standardError: ({ theme }) => ({
            backgroundColor: theme.palette.error.dark,
          }),
        },
      },
    },
  });
