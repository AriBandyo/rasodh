import React from "react";
import "./Popup.css"; // Ensure CSS for styling the popup

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose}>X</button>
        <div className="popup-message">
          <h2>✨ Stay Tuned! ✨</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
