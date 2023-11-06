export type BreadcrumbLink = {
  title: string;
  path: string;
};

export type AppBreadcrumbProps = {
  links: BreadcrumbLink[];
};
