import { CSSObject, Grid, styled } from "@mui/material";

export const StyledPageHeaderImage = styled("img")({
  position: "absolute",
  top: 0,
  right: 42,
});

export const StyledPageHeaderGrid = styled(Grid)(
  ({ theme }): CSSObject => ({
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    overflow: "hidden",
  })
);
