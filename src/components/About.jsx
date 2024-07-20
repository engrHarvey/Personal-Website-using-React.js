import React, { useState } from "react";
import avatar from "../images/myPhoto.jpg";

function About() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="about-me">
      <img
        style={{ border: isMouseOver ? "8px solid #61F2F5" : null }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="circle-img"
        src={avatar}
        alt="avatar_img"
      />
      <h1>About Me</h1>
      <p>
        Hello! I'm Harvey, an aspiring web developer with a background in
        electronics engineering. Over the past 5 years, I've gained valuable
        experience in project management and technical troubleshooting, working
        as a Project Engineer in structured cabling and a Service Engineer for
        automatic sorting machines.
      </p>
      <p>
        I'm now transitioning to web development, driven by a passion for
        creating innovative and user-friendly web solutions. I've been studying
        web development at home, focusing on HTML, CSS, JavaScript, and various
        frameworks.
      </p>
      <p>
        I'm excited about contributing to the web development field and eager to
        collaborate on exciting projects.
      </p>
      <p>
        Feel free to reach out if you'd like to connect or learn more about my
        journey!
      </p>
    </div>
  );
}

export default About;
