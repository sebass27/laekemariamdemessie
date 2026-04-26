import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">Laeke Mariam Demessie</div>
        <p className="footer-text">
          Journalist and writer covering Africa's most critical stories.<br />
          Reporting where it matters most.
        </p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#articles">Articles</a>
          <a href="#topics">Topics</a>
        </div>
        <p className="footer-text" style={{ marginTop: '2rem', opacity: 0.5 }}>
          &copy; 2026 Laeke Mariam Demessie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
