import { FC, useEffect } from "react";
import { useTheme } from "next-themes";

export const DarkMode: FC = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return null;
};