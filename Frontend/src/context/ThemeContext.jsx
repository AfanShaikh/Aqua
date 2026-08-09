import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function getInitialTheme() {
  const savedTheme = localStorage.getItem("aqualife-theme");

  if (savedTheme === "dark") {
    return true;
  }

  if (savedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";

    /* Apply theme to body */
    document.body.classList.toggle("dark-mode", isDarkMode);

    /* Keep data-theme available if any component needs it */
    document.documentElement.setAttribute("data-theme", theme);

    /* Save user's preference */
    localStorage.setItem("aqualife-theme", theme);
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode((currentMode) => !currentMode);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}