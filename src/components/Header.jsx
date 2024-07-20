import React from "react";
import Logo from "./Logo";

function Header(props) {
  return (
    <header className="topnav">
      <button className="logo" onClick={props.onHome}>
        <Logo />
      </button>
      <button className="option" onClick={props.onContacts}>
        Contacts
      </button>
      <button className="option" onClick={props.onSkills}>
        Skills
      </button>
      <button className="option" onClick={props.onAbout}>
        About
      </button>
    </header>
  );
}

export default Header;
