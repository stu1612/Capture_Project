import React from "react";
// Import Icons for cards
import clock from "../assets/images/clock.svg";
import diaphragm from "../assets/images/diaphragm.svg";
import money from "../assets/images/money.svg";
import teamwork from "../assets/images/teamwork.svg";
import home2 from "../assets/images/home2.png";

export const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          {/* card */}
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card */}
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* card */}
          <div className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};
