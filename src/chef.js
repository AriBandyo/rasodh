import React, { useState } from 'react';
import './Popup.css';

const Chefs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="section-wrapper" id="chefs">
      <h2 className="section-title">👨‍🍳 Our Chefs</h2>
      <button className="popup-button" onClick={handleButtonClick}>Meet the Team</button>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={e => e.stopPropagation()}>
            <p>Hey there! We are working on something interesting. We’ll keep you posted 😊</p>
            <button className="close-button" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Chefs;
