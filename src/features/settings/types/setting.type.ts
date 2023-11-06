import { Dispatch, SetStateAction } from "react";
import { BreadcrumbLink } from "@/components/app-breadcrumb/app-breadcrumb.type";

export type SettingOutletContext = {
  setBreadcrumbLinks: Dispatch<SetStateAction<BreadcrumbLink[]>>;
};
