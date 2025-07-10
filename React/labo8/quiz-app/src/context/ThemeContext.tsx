import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggle: () => void;
}

const defaultThemeContext: ThemeContextType = {
  darkMode: false,
  toggle: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, toggle: () => setDarkMode((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
