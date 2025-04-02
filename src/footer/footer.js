import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4><i className="fas fa-map-marker-alt"></i> Address</h4>
          <p>Calgary, AB</p>
        </div>

        <div className="footer-section">
          <h4><i className="fas fa-phone-alt"></i> Contact</h4>
          <p><strong>Phone:</strong> +1 519-731-8823</p>
          <p><strong>Email:</strong> enquiries.rasodh@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4><i className="fas fa-clock"></i> Opening Hours</h4>
          <p>
            <strong>No opening hours.</strong> Please place your order in advance. Minimum of 5 orders of the same item required.
          </p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com/rasodh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://facebook.com/rasodh" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/rasodh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/rasodh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} <strong>Rasodh</strong>. All Rights Reserved. <br />
        Designed, developed, and maintained by <a href="https://github.com/aritrobanerjee" target="_blank">Aritro Banerjee</a>
      </div>
    </footer>
  );
};

export default Footer;
