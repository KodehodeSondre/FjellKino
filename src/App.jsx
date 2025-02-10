import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Contact, About, Home, Projects } from "./pages";
import ThemeToggle from './components/ThemeToggle';

function App() {

  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
      
      <footer className="site-footer">
        <p>Fjell Kino AS</p>
        <p>Adresse: Fjellavegen 5357, FJELL</p>
        <p>Kontakt: kontakt@fjellkino.no</p>
      </footer>

      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
