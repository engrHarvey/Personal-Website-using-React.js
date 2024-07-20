import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Home from "./Home";

function App() {
  const [showContent, setShowContent] = useState("home");

  function showHome() {
    setShowContent("home");
  }

  function showAbout() {
    setShowContent("about");
  }

  function showSkills() {
    setShowContent("skills");
  }

  function showContacts() {
    setShowContent("contacts");
  }

  return (
    <div>
      <Header
        onHome={showHome}
        onAbout={showAbout}
        onSkills={showSkills}
        onContacts={showContacts}
      />
      <div>
        {showContent === "home" && <Home />}
        {showContent === "about" && <About />}
        {showContent === "skills" && <Skills />}
        {showContent === "contacts" && <Contacts />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
