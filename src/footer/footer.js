import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4><i className="fas fa-map-marker-alt"></i>Address</h4>
          <p>317 Red Stone View North East</p>
          <p>Calgary, T2N 0M9</p>
        </div>

        <div className="footer-section">
          <h4><i className="fas fa-phone-alt"></i>Contact</h4>
          <p><strong>Phone:</strong> +1 519-731-8823</p>
          <p><strong>Email:</strong> enquiries.rasodh@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4><i className="fas fa-clock"></i>Opening Hours</h4>
          <p><strong>No opening hours, Have to place order in advance And minimum of 5 orders of same item</strong></p>
    
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright <strong>Rasodi</strong>. All Rights Reserved <br />
        Designed developed and mainted by <a href="#">Aritro Banerjee</a>
      </div>
    </footer>
  );
};

export default Footer;
