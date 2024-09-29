import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="container mt-5 contact-page">
      <h1 className="text-center text-primary mb-5">Contact Details</h1>

      {/* Contact Information Section */}
      <div className="row mb-5">
        <div className="col-md-4 text-center mb-4">
          <div className="contact-card-box bg-light p-4 rounded shadow">
            <HomeIcon className="contact-icon text-primary mb-2" />
            <h3>Address</h3>
            <p>Sta. Rosa, Laguna</p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="contact-card-box bg-light p-4 rounded shadow">
            <PhoneIcon className="contact-icon text-primary mb-2" />
            <h3>Phone</h3>
            <p>(+63) 997-6040-782</p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="contact-card-box bg-light p-4 rounded shadow">
            <EmailIcon className="contact-icon text-primary mb-2" />
            <h3>Email</h3>
            <p>harveyabantao@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="text-center">
        <h3 className="mb-4">Connect with Me</h3>
        <div className="contact-social-icons">
          <a href="https://www.facebook.com/profile.php?id=61556358786809" className="btn btn-outline-primary me-2">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/harvey-abantao-a166a1124/" className="btn btn-outline-info me-2">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://x.com/AbantaoHar92607" className="btn btn-outline-dark me-2">
            <XIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/ehabantao07/" className="btn btn-outline-danger">
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
