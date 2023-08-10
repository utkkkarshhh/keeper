import React from "react";
import "./Header.css";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Notes
      </h1>
    </header>
  );
}

export default Header;
