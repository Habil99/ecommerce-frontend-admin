import { Category, FormatSize, Palette } from "@mui/icons-material";
import { SidebarData } from "@/components/sidebar/sidebar.type";

export const sidebarData: SidebarData[] = [
  {
    title: "Colors",
    icon: <Palette />,
    link: "/colors",
  },
  {
    title: "Sizes",
    icon: <FormatSize />,
    link: "/sizes",
  },
  {
    title: "Categories",
    icon: <Category />,
    link: "/categories",
  },
];
