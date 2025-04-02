import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";
import logo from "./Logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, section) => {
    e.preventDefault();

    const scrollToSection = () => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (section === "about") {
      window.dispatchEvent(new Event("showAbout"));
    } else if (section === "home") {
      window.dispatchEvent(new Event("showHome"));
    } else if (section === "chefs") {
      window.dispatchEvent(new Event("showChefs"));
    } else if (section === "gallery") {
      window.dispatchEvent(new Event("showGallery"));
    }

    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Wait for the page to load back to home, then scroll
      setTimeout(() => {
        scrollToSection();
      }, 300); // Adjust delay if needed
    } else {
      scrollToSection();
    }
  };

  return (
    <header className="header">
      <div className="brand">
        <div className="logo-container">
          <img src={logo} alt="Rasodh Logo" className="logo" />
        </div>
      </div>

      <nav className="nav-links">
        <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
        <a href="#menu" onClick={(e) => handleNavClick(e, "menu")}>Menu</a>
        <a href="#chefs" onClick={(e) => handleNavClick(e, "chefs")}>Chefs</a>
        <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")}>Gallery</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
