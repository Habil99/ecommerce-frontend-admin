import {
  StyledBreadcrumbLink,
  StyledBreadcrumbs,
} from "@/components/app-breadcrumb/app-breadcrumb.styled";
import { uuid } from "@/lib";
import { AppBreadcrumbProps } from "@/components/app-breadcrumb/app-breadcrumb.type";

const BreadCrumbSeparator = () => (
  <span style={{ marginTop: 5 }}>{"\u00B0"}</span>
);

export const AppBreadcrumb = ({ links }: AppBreadcrumbProps) => {
  return (
    <StyledBreadcrumbs separator={<BreadCrumbSeparator />}>
      {[
        <StyledBreadcrumbLink key={uuid()} to="/">
          Dashboard
        </StyledBreadcrumbLink>,
        ...links.map((link) => (
          <StyledBreadcrumbLink key={uuid()} to={link.path}>
            {link.title}
          </StyledBreadcrumbLink>
        )),
      ]}
    </StyledBreadcrumbs>
  );
};
