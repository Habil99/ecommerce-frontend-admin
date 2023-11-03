import {
  StyledBreadcrumbLink,
  StyledBreadcrumbs,
} from "@/components/app-breadcrumb/app-breadcrumb.styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type BreadcrumbLink = {
  title: string;
  path: string;
};

const BreadCrumbSeparator = () => (
  <span style={{ marginTop: 5 }}>{"\u00B0"}</span>
);

export const AppBreadcrumb = () => {
  const location = useLocation();
  const [breadCrumbLinks, setBreadcrumbLinks] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    const pathname = location.pathname;
    const links = pathname.split(/\//g).filter(Boolean);
    setBreadcrumbLinks(
      links.map((link) => ({
        title: link,
        path: link,
      }))
    );
  }, []);

  // TODO: make generic and reusable breadcrumb
  return (
    <StyledBreadcrumbs separator={<BreadCrumbSeparator />}>
      {[
        <StyledBreadcrumbLink key="1" to="/">
          Home
        </StyledBreadcrumbLink>,
        <StyledBreadcrumbLink key="2" to="/">
          Categories
        </StyledBreadcrumbLink>,
      ]}
    </StyledBreadcrumbs>
  );
};
