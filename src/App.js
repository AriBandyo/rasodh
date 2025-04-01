import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import Menu from "./menu/menu";
import ContactUs from "./ContactUs";
import PreOrder from "./preorder";
import AboutUs from "./About";
import PopupModal from "./popup"; // new

import "./App.css";

const HomePage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleShowAbout = () => {
    setShowAbout(true);
    setTimeout(() => {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleShowHome = () => {
    setShowAbout(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowPopup = (message) => {
    setPopupMessage(message);
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  useEffect(() => {
    window.addEventListener("showAbout", handleShowAbout);
    window.addEventListener("showHome", handleShowHome);
    window.addEventListener("showChefs", () =>
      handleShowPopup("Hey there! We are working on something interesting. We’ll keep you posted 😊")
    );
    window.addEventListener("showGallery", () =>
      handleShowPopup("Hey there! We are working on something interesting. We’ll keep you posted 😊")
    );

    return () => {
      window.removeEventListener("showAbout", handleShowAbout);
      window.removeEventListener("showHome", handleShowHome);
      window.removeEventListener("showChefs", handleShowPopup);
      window.removeEventListener("showGallery", handleShowPopup);
    };
  }, []);

  return (
    <main className="main-content">
      <section className="hero-section">
        <h1>Welcome to Rasodh!</h1>
        <p>Delicious food made with love. Explore our delicious and mouth watering menu !</p>
      </section>

      {showAbout && (
        <section id="about">
          <AboutUs />
        </section>
      )}

      <section id="menu">
        <Menu />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      {popupMessage && <PopupModal message={popupMessage} onClose={closePopup} />}
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preorder" element={<PreOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
