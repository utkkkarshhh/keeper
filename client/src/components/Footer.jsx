import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️, 🕺 & ☕ by Utkarsh Bhardwaj | {year}</p>
    </footer>
  );
}

export default Footer;
