import { Grid, Stack, Typography } from "@mui/material";
import backgroundImage from "@/assets/breadcrumb-image.png";
import {
  StyledPageHeaderGrid,
  StyledPageHeaderImage,
} from "@/components/page-header/page-header.styled";
import { FC, PropsWithChildren } from "react";

type PageHeaderProps = {
  title: string;
};

export const PageHeader: FC<PropsWithChildren<PageHeaderProps>> = ({
  title,
  children,
}) => {
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
          {children}
        </Stack>
      </Grid>
      <Grid item xs={4} justifyContent="flex-end">
        <StyledPageHeaderImage height={180} src={backgroundImage} alt="" />
      </Grid>
    </StyledPageHeaderGrid>
  );
};
