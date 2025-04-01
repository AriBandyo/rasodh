import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2>Have Questions Contact Us!!</h2>
      
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Phone" required />
          </div>
          <div className="form-row">
            <input type="date" required />
            <input type="time" required />
            <input type="number" placeholder="# of people" min="1" required />
          </div>
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
