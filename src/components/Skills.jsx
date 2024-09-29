import React, { useState } from "react";
import skillList from "../skill-list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css"; // Custom CSS for additional styles

function createList(skill, index) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
      key={index}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={`skill-card text-center p-4 shadow-sm rounded ${isMouseOver ? "hovered" : ""}`}
        style={{
          boxShadow: isMouseOver ? "0 8px 16px rgba(97, 242, 245, 0.4)" : "0 4px 12px rgba(0, 0, 0, 0.2)",
          transform: isMouseOver ? "scale(1.05)" : "scale(1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div className="skill-icon mb-3">{skill.imgSVG}</div>
        <h3 className="skill-name">{skill.name}</h3>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-5">My Skills</h1>
      <p className="text-center mb-4">
        I am passionate about technology and constantly expanding my skill set. Here are some of the technologies I am proficient in:
      </p>
      
      {/* Skills Grid */}
      <div className="row">
        {skillList.map(createList)}
      </div>
    </div>
  );
}

export default Skills;
