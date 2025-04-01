import React from "react";
import "./header.css";
import logo from "./Logo.png"; // adjust path based on your folder structure"
// adjust path based on your folder structure

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Rasodh Logo" className="logo" />
        Rasodh<span className="dot">.</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#chefs">Chefs</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
