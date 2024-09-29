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
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Home() {
  return (
    <div className="home container-fluid py-5 bg-gradient">
      <div className="container text-center mb-5">
        <h1 className="display-4 text-primary mb-3 fw-bold">Hello, I'm Harvey Abantao</h1>
        <p className="lead text-muted mb-4">
          A passionate developer focused on building impactful and innovative web solutions. Explore my portfolio to see my projects and the skills I've developed!
        </p>
      </div>

      {/* Image Collage Container */}
      <div className="img-container shadow-lg p-4 bg-white rounded">
        <div className="img-list">
          <img className="one big rounded img-hover" src={img1b} alt="photo" />
          <img className="two big rounded img-hover" src={img2b} alt="photo" />
          <img className="three big rounded img-hover" src={img3b} alt="photo" />
          <img className="four big rounded img-hover" src={img4b} alt="photo" />
          <img className="five big rounded img-hover" src={img5b} alt="photo" />
          <img className="six big rounded img-hover" src={img6b} alt="photo" />
          <img className="seven big rounded img-hover" src={img7b} alt="photo" />
          <img className="fisrt small rounded img-hover" src={img1s} alt="photo" />
          <img className="second small rounded img-hover" src={img2s} alt="photo" />
          <img className="third small rounded img-hover" src={img3s} alt="photo" />
          <img className="forth small rounded img-hover" src={img4s} alt="photo" />
          <img className="fifth small rounded img-hover" src={img5s} alt="photo" />
          <img className="sixth small rounded img-hover" src={img6s} alt="photo" />
          <img className="fisrt-tall rounded img-hover" src={img1t} alt="photo" />
          <img className="second-tall rounded img-hover" src={img2t} alt="photo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
