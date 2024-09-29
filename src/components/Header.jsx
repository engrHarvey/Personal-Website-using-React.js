import React, { useState } from "react";
import Logo from "./Logo";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#502c7f" }}>
        <div className="container-fluid">
          {/* Logo Button */}
          <button
            className="btn btn-outline-light"
            onClick={props.onHome}
            aria-label="Home"
          >
            <Logo />
          </button>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ color: "#78ffc6" }}></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn nav-link text-light" onClick={props.onContacts}>
                  Contacts
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link text-light" onClick={props.onSkills}>
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link text-light" onClick={props.onAbout}>
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
