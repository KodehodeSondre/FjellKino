import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">🎬 Fjell Kino</div>
      <ul className="navbar-links">
        <li><Link to="/">Hjem</Link></li>
        <li><Link to="/about">Om Oss</Link></li>
        <li><Link to="/projects">Filmer</Link></li>
        <li><Link to="/contact">Kontakt Oss</Link></li>
      </ul>
    </nav>
  );
};
