import React from "react";
// Import Icons for cards
import styled from "styled-components";
import clock from "../assets/images/clock.svg";
import diaphragm from "../assets/images/diaphragm.svg";
import money from "../assets/images/money.svg";
import teamwork from "../assets/images/teamwork.svg";
import home2 from "../assets/images/home2.png";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";

export const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          {/* card */}
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Effecient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* card */}
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* card */}
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* card */}
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="camera" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
