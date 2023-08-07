import { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((preV) => (preV === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
