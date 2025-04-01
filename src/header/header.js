import React from "react";
import "./header.css";

const Header = () => {
  const dispatchEvent = (type) => {
    window.dispatchEvent(new Event(type));
  };

  return (
    <header className="header">
      <div className="brand">
        Rasodh<span>.</span>
      </div>
      <nav className="nav-links">
        <a href="#!" onClick={() => dispatchEvent("showHome")}>Home</a>
        <a href="#!" onClick={() => dispatchEvent("showAbout")}>About</a>
        <a href="#menu">Menu</a>
        <a href="#!" onClick={() => dispatchEvent("showChefs")}>Chefs</a>
        <a href="#!" onClick={() => dispatchEvent("showGallery")}>Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
