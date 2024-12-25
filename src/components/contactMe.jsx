import React from "react";
//import { SocialIcon, NavLink } from "./modyamean"; // or wherever they're exported
import "../css/modyamean.css";

const SocialIcon = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      {children}
    </a>
  );
  
  const NavLink = ({ href, children }) => (
    <a href={href} className="nav-link">
      {children}
    </a>
  );

const ContactMe = () => {
  return (
    <div className="container">
      <div className="content contact-page">
        <h1 className="contact-heading">Get in Touch</h1>
        
        {/* Social Icons (the same ones from home) */}
        <div className="social-links">
          <SocialIcon href="https://www.instagram.com/modynyc/">
            <svg viewBox="0 0 24 24" className="social-icon-svg">
              <path d="M12 2.163c3.204..."/>
            </svg>
          </SocialIcon>

          <SocialIcon href="https://www.tiktok.com/@mody.nyc">
            <svg viewBox="0 0 24 24" className="social-icon-svg">
              <path d="M19.59 6.69a4.83..."/>
            </svg>
          </SocialIcon>

          <SocialIcon href="https://www.youtube.com/@modynyc">
            <svg viewBox="0 0 24 24" className="social-icon-svg">
              <path d="M23.498 6.186..."/>
            </svg>
          </SocialIcon>
        </div>

        {/* Optional NavLinks if you want same style navigation here */}
        <nav className="navigation contact-nav">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Info + Email Button */}
        <p className="contact-description">
          Feel free to reach out for any inquiries, collaborations, or simply to say hello!
        </p>

        <div className="contact-button-container">
          <a
            href="mailto:Modyamean812@yahoo.com"
            className="contact-button"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
