import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contacts() {
  return (
    <div className="contact-container">
      <h1>CONTACT DETAILS</h1>
      <div className="contact-me">
        <li>
          <HomeIcon sx={{ fontSize: 40 }} />
          <h3>ADDRESS</h3>
          <p>Sta. Rosa, Laguna</p>
        </li>
        <li>
          <PhoneIcon sx={{ fontSize: 40 }} />
          <h3>PHONE</h3>
          <p>(+63)997-6040-782</p>
        </li>
        <li>
          <EmailIcon sx={{ fontSize: 40 }} />
          <h3>EMAIL</h3>
          <p>harveyabantao@gmail.com</p>
        </li>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/profile.php?id=61556358786809">
          <FacebookIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://www.linkedin.com/in/harvey-abantao-a166a1124/">
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://x.com/AbantaoHar92607">
          <XIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://www.instagram.com/ehabantao07/">
          <InstagramIcon sx={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
}

export default Contacts;
