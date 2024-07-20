import React from "react";
import img1b from "../images/1b.jpeg";
import img2b from "../images/2b.jpg";
import img3b from "../images/3b.jpg";
import img4b from "../images/4b.jpg";
import img5b from "../images/5b.jpg";
import img6b from "../images/6b.jpg";
import img7b from "../images/7b.jpeg";
import img1s from "../images/1s.jpg";
import img2s from "../images/2s.jpg";
import img3s from "../images/3s.jpg";
import img4s from "../images/4s.jpeg";
import img5s from "../images/5s.jpg";
import img6s from "../images/7s.jpg";
import img1t from "../images/1tall.jpeg";
import img2t from "../images/2tall.jpeg";

function Home() {
  return (
    <div className="img-container">
      <div className="img-list">
        <img className="one big" src={img1b} alt="photo" />
        <img className="two big" src={img2b} alt="photo" />
        <img className="three big" src={img3b} alt="photo" />
        <img className="four big" src={img4b} alt="photo" />
        <img className="five big" src={img5b} alt="photo" />
        <img className="six big" src={img6b} alt="photo" />
        <img className="seven big" src={img7b} alt="photo" />
        <img className="fisrt small" src={img1s} alt="photo" />
        <img className="second small" src={img2s} alt="photo" />
        <img className="third small" src={img3s} alt="photo" />
        <img className="forth small" src={img4s} alt="photo" />
        <img className="fifth small" src={img5s} alt="photo" />
        <img className="sixth small" src={img6s} alt="photo" />
        <img className="fisrt-tall" src={img1t} alt="photo" />
        <img className="second-tall" src={img2t} alt="photo" />
      </div>
    </div>
  );
}

export default Home;
