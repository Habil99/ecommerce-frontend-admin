import { useOutletContext } from "react-router-dom";
import { SettingOutletContext } from "@/features/settings/types/setting.type";

export function useSettingOutlet() {
  return useOutletContext<SettingOutletContext>();
}
