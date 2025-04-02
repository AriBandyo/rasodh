import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import PreOrder from "./preorder";
import Home from "./Home"; // your new home page

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preorder" element={<PreOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
