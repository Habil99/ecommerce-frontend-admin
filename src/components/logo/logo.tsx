import darkLogo from "@/assets/dark-logo.svg";
import lightLogo from "@/assets/light-logo.svg";
import { useContext } from "react";
import { AppThemeContext } from "@/features/theme";

type LogoProps = {
  width: number;
  height: number;
};

export const Logo = ({ width, height }: Partial<LogoProps>) => {
  const { mode } = useContext(AppThemeContext);

  return (
    <img
      width={width}
      height={height}
      src={mode === "light" ? darkLogo : lightLogo}
      alt="logo"
    />
  );
};
