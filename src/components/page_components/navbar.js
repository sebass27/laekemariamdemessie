import React, { useState } from "react";

function Nav({ scrollY, navScrolled }) {
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
