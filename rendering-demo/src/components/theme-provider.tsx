"use client";

import { createContext, useContext } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};
const defaultTheme: Theme = {
  color: {
    primary: "green",
    secondary: "yellow"
  }
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

export const useTheme = () => useContext(ThemeContext);
