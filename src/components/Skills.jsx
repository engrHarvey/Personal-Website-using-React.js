import React, { useState } from "react";
import skillList from "../skill-list";

function createList(skill) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <li
      style={{ boxShadow: isMouseOver ? "1px 1px 5px 10px #61F2F5" : null }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {skill.imgSVG}
      {skill.name}
    </li>
  );
}

function Skills() {
  return (
    <div className="skill">
      <div className="skill-list">{skillList.map(createList)}</div>
    </div>
  );
}

export default Skills;
