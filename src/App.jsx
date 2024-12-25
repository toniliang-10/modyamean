import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modyamean from "./components/modyamean";
import ContactMe from "./components/contactMe";
import Banner from "./components/banner";
import './css/banner.css';
import "./css/contactMe.css";

function App() {
  return (
    <Router>
      {/* Banner is placed outside Routes so it always shows */}
      <Banner />

      <Routes>
        <Route path="/" element={<Modyamean />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
