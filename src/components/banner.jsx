import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/banner.css";

const Banner = () => {
  const location = useLocation();

  // If current URL is "/contact", we show "Home" else show "Contact"
  const isContactPage = location.pathname === "/contact";
  
  return (
    <div className="banner-container">
      {isContactPage ? (
        <Link to="/" className="banner-link">
          Home
        </Link>
      ) : (
        <Link to="/contact" className="banner-link">
          Contact
        </Link>
      )}
    </div>
  );
};

export default Banner;
