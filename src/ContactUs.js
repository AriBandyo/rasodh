import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2>Have Questions Contact Us !</h2>

      <div className="contact-container">
        <form className="contact-form">
          <div className="form-layout">
            <div className="form-left">
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Your Phone" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-right">
              <textarea placeholder="Message" rows="8" required></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
