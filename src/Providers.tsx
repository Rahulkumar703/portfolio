"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import WinowsProvider from "./context/WinowsProvider";

const Providers = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <WinowsProvider>{children}</WinowsProvider>
    </NextThemesProvider>
  );
};
export default Providers;
