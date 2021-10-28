import React from "react";
import home1 from "../assets/images/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

export const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};
