// components/PopupModal.js
import React from 'react';
import './Popup.css';

const PopupModal = ({ message, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
