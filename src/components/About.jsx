import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import avatar from "../images/myPhoto.jpg"; // Import avatar image
import "./About.css"; // Import custom CSS for additional styling

function About() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            style={{ border: isMouseOver ? "8px solid #61F2F5" : "8px solid white" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="rounded-circle shadow-lg img-fluid avatar-img"
            src={avatar}
            alt="Harvey Abantao"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-8">
          <h1 className="text-primary mb-4">About Me</h1>
          <p className="lead">
            Hello! I'm Harvey, an aspiring web developer with a background in electronics engineering. Over the past 5 years, I've gained valuable experience in project management and technical troubleshooting, working as a Project Engineer in structured cabling and a Service Engineer for automatic sorting machines.
          </p>
          <p>
            I'm now transitioning to web development, driven by a passion for creating innovative and user-friendly web solutions. I've been studying web development at home, focusing on HTML, CSS, JavaScript, and various frameworks.
          </p>
          <p>
            I'm excited about contributing to the web development field and eager to collaborate on exciting projects.
          </p>
          <p>
            Feel free to reach out if you'd like to connect or learn more about my journey!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
