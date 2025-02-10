import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
