import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/imgs/lmd.svg" alt="Laeke Mariam Demessie" />
        </div>
        <p className="footer-text">
          In loving memory of Laeke Mariam Demessie<br />
          Ethiopian journalist whose voice brought Africa's stories to the world.<br />
          His work lives on.
        </p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#articles">Articles</a>
          <a href="#topics">Topics</a>
          <a href="#media">Media</a>
          <a href="#book">Book</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} — Laeke Mariam Demessie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;