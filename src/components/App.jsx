import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Import custom CSS for sticky footer

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
    <div className="d-flex flex-column min-vh-100">
      {/* Header Section */}
      <Header
        onHome={showHome}
        onAbout={showAbout}
        onSkills={showSkills}
        onContacts={showContacts}
      />

      {/* Main Content Section */}
      <main className="flex-grow-1">
        {showContent === "home" && <Home />}
        {showContent === "about" && <About />}
        {showContent === "skills" && <Skills />}
        {showContent === "contacts" && <Contacts />}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
