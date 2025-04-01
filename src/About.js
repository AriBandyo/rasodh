import React from 'react';
import './About.css'; // Import the CSS file

const AboutUs = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">🍽 About Rasodh – Where Every Bite Tells a Story!</h2>

        <p className="about-text">
          Welcome to <strong>Rasodh</strong>, where we bring the authentic flavors of India straight to your table.
          Born from a passion for homemade, high-quality food, Rasodh is all about celebrating rich traditions,
          bold spices, and time-honored recipes that make every meal unforgettable.
        </p>

        <p className="about-text">
          <strong>What sets us apart?</strong> Our spices are sourced directly from India, ensuring a depth of flavor
          that captures the true essence of Indian cuisine. Combined with fresh, premium ingredients and meticulous
          preparation, our dishes deliver an experience that’s both nostalgic and indulgent.
        </p>

        <p className="about-text">
          From street food delights to traditional favorites, every bite at Rasodh is crafted with love and care,
          bringing people together over food that speaks to the soul. Whether it’s an intimate gathering or a grand
          celebration, we’re here to serve up warmth, taste, and authenticity on every plate.
        </p>

        <p className="about-location">
          📍 Based in Calgary, AB | DM us to place an order!
        </p>

        <div className="about-button-container">
          <button className="contact-button" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
