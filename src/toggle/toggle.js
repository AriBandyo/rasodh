import React, { useState } from "react";
import "./ToggleBar.css";

const ToggleBar = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState("Appetizers");

  const handleClick = (tab) => {
    setActiveTab(tab);
    if (onChange) onChange(tab); // Notify parent component if needed
  };

  return (
    <div className="toggle-bar">
      <div className={`toggle-slider ${activeTab.toLowerCase()}`} />
      <button
        className={`toggle-tab ${activeTab === "Appetizers" ? "active" : ""}`}
        onClick={() => handleClick("Appetizers")}
      >
        Appetizers <span className="badge">4</span>
      </button>
      <button
        className={`toggle-tab ${activeTab === "Mains" ? "active" : ""}`}
        onClick={() => handleClick("Mains")}
      >
        Mains
      </button>
    </div>
  );
};

export default ToggleBar;
