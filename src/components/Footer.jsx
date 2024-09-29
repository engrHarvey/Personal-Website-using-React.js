import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Import custom CSS for additional styles

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-dark text-light text-center py-4 mt-auto">
      <div className="container bg-dark">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <p className="mb-1">Email: harveyabantao@gmail.com.com</p>
            <p>Phone: (+63)997 604 0782</p>
          </div>
        </div>
        <div className="footer-bottom mt-4">
          <p className="mb-0">&copy; {year} Harvey Abantao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
