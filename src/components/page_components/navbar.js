import React, { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <a href="#hero" className="brand-logo">LMD</a>
        <ul className={menuOpen ? "sidenav open" : "sidenav"} id="mobile-demo">
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a></li>
          <li><a href="#topics" onClick={() => setMenuOpen(false)}>Topics</a></li>
          <li><a href="#media" onClick={() => setMenuOpen(false)}>Media</a></li>
          <li><a href="#book" onClick={() => setMenuOpen(false)}>Book</a></li>
        </ul>
        <ul className="left hide-on-med-and-down">
          <li><a href="#about">About</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#topics">Topics</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#book">Book</a></li>
        </ul>
        <button
          type="button"
          className="sidenav-trigger"
          onClick={(e) => { e.preventDefault(); setMenuOpen(!menuOpen); }}
          aria-label="Toggle navigation menu"
        >
          <i className="material-icons">menu</i>
        </button>
      </nav>
    </div>
  );
}

export default Nav;
