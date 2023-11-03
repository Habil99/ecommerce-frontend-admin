import { Category, FormatSize, Palette } from "@mui/icons-material";
import { SidebarData } from "@/components/sidebar/sidebar.type";

export const sidebarData: SidebarData[] = [
  {
    title: "Colors",
    icon: <Palette />,
    link: "/settings/colors",
  },
  {
    title: "Sizes",
    icon: <FormatSize />,
    link: "/settings/sizes",
  },
  {
    title: "Categories",
    icon: <Category />,
    link: "/settings/categories",
  },
];
