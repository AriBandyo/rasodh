import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./menu.css";

import Dabeli from "./assests/dabeli.png";
import DahiWada from "./assests/dahi_vada.png";
import RagdaPatis from "./assests/dahi_vada.png";
import PavBhaji from "./assests/pav_bhaji.png";
import PaniPuri from "./assests/pani_puri.png";
import MasalaPuri from "./assests/masalapuri.png";
import Kathiyawadi from "./assests/kathidya.png";
import SevUsal from "./assests/sev_usal.png";

const Menu = () => {
  const menuItems = [
    {
      name: "Dahi Wada",
      description: "Soft lentil dumplings in spiced yogurt with chutneys.",
      price: "$5.95",
      image: DahiWada,
    },
    {
      name: "Ragda Patis",
      description: "Spiced white pea curry with golden potato patties.",
      price: "$14.95",
      image: RagdaPatis,
    },
    {
      name: "Pani Puri",
      description: "Crispy puris filled with potato and tangy tamarind water.",
      price: "$8.95",
      image: PaniPuri,
    },
    {
      name: "Dabeli",
      description: "Spicy street-style sandwich with masala potato mix.",
      price: "$8.95",
      image: Dabeli,
    },
    {
      name: "Pav Bhaji",
      description: "Rich mashed veggie curry served with butter-toasted pav.",
      price: "$8.95",
      image: PavBhaji,
    },
    {
      name: "Masala Puri, Sukhi Aloo and Mirchi",
      description: "Crispy puris, spiced potatoes, and fried green chilies.",
      price: "$8.95",
      image: MasalaPuri,
    },
    {
      name: "Kathiyawadi Baigan Bharta",
      description: "Smoky roasted eggplant mash with garlic and ghee.",
      price: "$8.95",
      image: Kathiyawadi,
    },
    {
      name: "Sev Usal",
      description: "Spicy white pea curry with crunchy sev and onions.",
      price: "$8.95",
      image: SevUsal,
    },
  ];

  return (
    <div className="menu-section">
      <h2 className="menu-heading">Our Collection of Foods</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>

      {/* Use Link to route to /preorder */}
      <Link to="/preorder">
        <button className="preorder-button">PRE-ORDER NOW</button>
      </Link>
    </div>
  );
};

export default Menu;
