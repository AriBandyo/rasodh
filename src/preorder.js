import React from "react";
import "./preorder.css";

const PreOrder = () => {
  return (
    <div className="preorder-container">
      <h1 className="preorder-title">Hey!</h1>
      <p className="preorder-message">
        Call us to place your order at{" "}
        <a href="tel:+15197318223" className="phone-link">
          <strong>(519) 731-8223</strong>
        </a>
      </p>
    </div>
  );
};

export default PreOrder;
