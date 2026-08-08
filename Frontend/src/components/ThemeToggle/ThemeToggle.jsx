import "./ThemeToggle.css";

import { FaMoon, FaSun } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle ${isDarkMode ? "dark" : ""}`}
      aria-label={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      aria-pressed={isDarkMode}
      onClick={toggleTheme}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;