import React from "react";
import "./Home.css";
import AboutUs from "./About";
import Menu from "../src/menu/menu";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <main className="home-container">

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <h1>Welcome to Rasodh!</h1>
        <p>"From our kitchen to your table, indulge in fresh, flavorful meals made with love and the finest ingredients</p>
        <div className="hero-buttons">
          <a href="#about" className="hero-btn">About Us</a>
          <a href="#menu" className="hero-btn">View Menu</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <AboutUs />
      </section>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <Menu />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <ContactUs />
      </section>

    </main>
  );
};

export default Home;
