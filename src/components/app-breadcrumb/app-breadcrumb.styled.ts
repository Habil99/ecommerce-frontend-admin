import { Breadcrumbs, styled } from "@mui/material";
import { AppLink } from "@/components";

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  "& .MuiBreadcrumbs-li": {
    "&:last-child": {
      "& .MuiTypography-root": {
        color: theme.palette.text.primary,
        pointerEvents: "none",
      },
    },
  },
}));

export const StyledBreadcrumbLink = styled(AppLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
}));
