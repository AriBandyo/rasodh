import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";
import logo from "./Logo.png";
import Popup from "../popup"; // Import the Popup component

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Popup state for Gallery and Chefs
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

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
      setPopupContent(<div><h2>Meet Our Chefs</h2><p>We are working on something amazing for you... </p></div>); // Set the content for chefs
      setIsPopupOpen(true); // Open the popup
    } else if (section === "gallery") {
      setPopupContent(<div><h2>Gallery</h2><p>We are working on something amazing for you...</p></div>); // Set the content for gallery
      setIsPopupOpen(true); // Open the popup
    }

    if (location.pathname !== "/") {
      navigate("/", { replace: false });

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
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>Our story</a>
        <a href="#menu" onClick={(e) => handleNavClick(e, "menu")}>Menu</a>
        <a href="#chefs" onClick={(e) => handleNavClick(e, "chefs")}>Chefs</a>
        <a href="#gallery" onClick={(e) => handleNavClick(e, "gallery")}>Gallery</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
      </nav>

      {/* Popup for Gallery and Chefs */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)} // Close the popup when clicking close
        content={popupContent}
      />
    </header>
  );
};

export default Header;
