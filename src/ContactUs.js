import React, { useState } from "react";
import "./contactus.css";
import PopupModal from "./popup"; // Adjust path if needed

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Use fetch to submit the form to FormSubmit
    fetch("https://formsubmit.co/enquiries.rasodh@gmail.com", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setShowPopup(true);
        form.reset();
      })
      .catch((error) => {
        console.error("Form submission failed:", error);
        alert("There was a problem submitting your message.");
      });
  };

  return (
    <section className="contact-section">
      <h2>Have Questions? Contact Us!</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-layout">
            <div className="form-left">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="text" name="phone" placeholder="Your Phone" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-right">
              <textarea name="message" placeholder="Message" rows="8" required></textarea>
            </div>
          </div>

          {/* FormSubmit hidden options */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>

      {showPopup && (
        <PopupModal
          message="Your message has been submitted successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
};

export default ContactUs;
