import React, { useState } from "react";

function Nav({ scrollY, navScrolled, toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#articles', label: 'Articles' },
    { href: '#topics', label: 'Topics' },
    { href: '#media', label: 'Media' },
    { href: '#book', label: 'Book' },
  ];

  return (
    <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="brand-logo">
        <img src="/imgs/lmd.svg" alt="Laeke Mariam Demessie" />
      </a>

      {/* Mobile sidenav */}
      <ul className={menuOpen ? "sidenav open" : "sidenav"} id="mobile-demo">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop nav */}
      <ul className="nav-links hide-on-med-and-down">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} data-label={link.label}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="theme-toggle-icon sun-icon">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </span>
        <span className="theme-toggle-icon moon-icon">
          <svg viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </button>

      {/* Hamburger */}
      <button
        type="button"
        className={`sidenav-trigger ${menuOpen ? 'active' : ''}`}
        onClick={(e) => { e.preventDefault(); setMenuOpen(!menuOpen); }}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Nav;
