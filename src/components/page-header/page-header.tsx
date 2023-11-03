import { Grid, Stack, Typography } from "@mui/material";
import backgroundImage from "@/assets/breadcrumb-image.png";
import {
  StyledPageHeaderGrid,
  StyledPageHeaderImage,
} from "@/components/page-header/page-header.styled";
import { AppBreadcrumb } from "@/components/app-breadcrumb/app-breadcrumb";

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <StyledPageHeaderGrid
      container
      spacing={2}
      px={4}
      pb={4}
      pt={3}
      borderRadius={4}
    >
      <Grid item xs={8}>
        <Stack gap={1}>
          <Typography variant="h3">{title}</Typography>
          <AppBreadcrumb />
        </Stack>
      </Grid>
      <Grid item xs={4} justifyContent="flex-end">
        <StyledPageHeaderImage height={180} src={backgroundImage} alt="" />
      </Grid>
    </StyledPageHeaderGrid>
  );
};
