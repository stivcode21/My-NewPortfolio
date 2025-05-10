import { useEffect } from "react";
import AppRouter from "./routing/AppRouter";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useThemeStore } from "./store/ThemeStore";
import "./main.css";

export default function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <>
      <AppRouter />
      <SpeedInsights />
    </>
  );
}
