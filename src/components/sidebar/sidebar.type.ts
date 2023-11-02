import React from "react";

export type SidebarData = {
  title: string;
  icon: React.ReactNode;
  link: string;
};

export type SidebarProps = {
  sidebarIsOpen: boolean;
  toggleSidebar: (open?: boolean) => void;
};
