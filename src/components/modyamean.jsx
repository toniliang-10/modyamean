import React, { useState, useEffect } from 'react';
import "../css/modyamean.css";
import pfp from '../imgs/pfp-photo.png';

// Photographer Photos
import p1 from '../imgs/p1.PNG';
import p2 from '../imgs/p2.PNG';
import p3 from '../imgs/p3.PNG';
import p4 from '../imgs/p4.PNG';
import p5 from '../imgs/p5.PNG';
import p6 from '../imgs/p6.PNG';
import p7 from '../imgs/p7.PNG';
import p8 from '../imgs/p8.PNG';
import p9 from '../imgs/p9.PNG';
import p10 from '../imgs/p10.PNG';
import p11 from '../imgs/p11.PNG';
import p12 from '../imgs/p12.PNG';
import p13 from '../imgs/p13.PNG';
import p14 from '../imgs/p14.PNG';
import p15 from '../imgs/p15.PNG';
import p16 from '../imgs/p16.PNG';
import p17 from '../imgs/p17.PNG';
import p18 from '../imgs/p18.PNG';

// Pharmacist Photos
import s1 from '../imgs/s1.jpg';
import s2 from '../imgs/s2.jpg';
import s3 from '../imgs/s3.jpg';

// Achievements Photos
import a1 from '../imgs/a1.jpg';
import a2 from '../imgs/a2.jpg';
import a3 from '../imgs/a3.jpg';
import a4 from '../imgs/a4.jpg';
import a5 from '../imgs/a5.jpg';

// Helper Components (unchanged)
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

const Modyamean = () => {
  // Separate arrays for each section
  const pharmacistPhotos = [s1, s2, s3];
  const photographyPhotos = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9,
    p10, p11, p12, p13, p14, p15, p16, p17, p18
  ];
  const achievementsPhotos = [a1, a2, a3, a4, a5];

  // By default, show the 'photographer' section
  const [activeSection, setActiveSection] = useState("photographer");
  const [portfolioPhotos, setPortfolioPhotos] = useState(photographyPhotos);

  // On initial mount, highlight the Photographer link
  useEffect(() => {
    const defaultLink = document.querySelector('a.nav-link[href="#photographer"]');
    if (defaultLink) {
      defaultLink.classList.add("active");
    }
  }, []);

  // Helper to scroll to the portfolio container
  const scrollToPortfolio = () => {
    const portfolioDiv = document.getElementById("portfolio");
    if (portfolioDiv) {
      portfolioDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle clicks on the parent <nav> to highlight the link & switch photos
  const handleNavClick = (event) => {
    event.preventDefault();

    // Find the clicked <a> with class 'nav-link'
    const link = event.target.closest("a.nav-link");
    if (!link) return;

    // Remove 'active' class from all nav links
    const allLinks = document.querySelectorAll(".nav-link");
    allLinks.forEach((l) => l.classList.remove("active"));

    // Add 'active' to the clicked link
    link.classList.add("active");

    // Identify the section
    const sectionId = link.getAttribute("href").replace("#", "");

    // Update the active section and which photos to show
    switch (sectionId) {
      case "pharmacist":
        setActiveSection("pharmacist");
        setPortfolioPhotos(pharmacistPhotos);
        break;

      case "photographer":
        setActiveSection("photographer");
        setPortfolioPhotos(photographyPhotos);
        break;

      case "achievements":
        setActiveSection("achievements");
        setPortfolioPhotos(achievementsPhotos);
        break;

      default:
        break;
    }

    // Scroll down to the portfolio container
    scrollToPortfolio();
  };

  // Compute a heading for the portfolio section, based on the active section
  let portfolioHeading = "";
  if (activeSection === "pharmacist") {
    portfolioHeading = "Pharmacist";
  } else if (activeSection === "photographer") {
    portfolioHeading = "Highest Client Rated Photographic Portfolio";
  } else if (activeSection === "achievements") {
    portfolioHeading = "Achievements";
  }

  return (
    <div className="container">
      <div className="content">
        <div className="profile-section">
          {/* Profile Section */}
          <div className="profile-image">
            <img src={pfp} alt="Profile" />
          </div>

          {/* Name */}
          <h1 className="name">Mody Amean</h1>

          {/* Navigation Links */}
          {/* We attach the onClick to the parent <nav> to capture all clicks. */}
          <nav className="navigation" onClick={handleNavClick}>
            <NavLink href="#pharmacist">Pharmacist</NavLink>
            <NavLink href="#photographer">Photographer</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
          </nav>

          {/* Description */}
          <div className="description">
            <p>
              [Your friend's description will go here. This section can describe their work
              as a pharmacist, their passion for photography, and any other relevant
              information about their professional and creative pursuits.]
            </p>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <SocialIcon href="https://www.instagram.com/modynyc/">
              {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" className="social-icon-svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.tiktok.com/@mody.nyc">
              {/* TikTok SVG */}
              <svg viewBox="0 0 24 24" className="social-icon-svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="https://www.youtube.com/@modynyc">
              {/* YouTube SVG */}
              <svg viewBox="0 0 24 24" className="social-icon-svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Single Portfolio Section that changes based on 'activeSection' */}
        <div id="portfolio" className="additional-content">
          <h2>{portfolioHeading}</h2>
          <div className="portfolio-grid">
            {portfolioPhotos.map((photo, index) => (
              <div key={index} className="portfolio-item">
                <img src={photo} alt={`${activeSection} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modyamean;
