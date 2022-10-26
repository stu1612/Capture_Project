import React, { useState, useEffect } from "react";
import styled from "styled-components";
import home2 from "../assets/images/home2.png";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { CardsData } from "../Data/cards";
import { Card } from "../components/Card";
import { scrollReveal } from "../animation/animation";
import { useScroll } from "./useScroll";

export const ServicesSection = () => {
  const [data, setData] = useState([]);
  const [element, controls] = useScroll();

  useEffect(() => {
    setData(CardsData);
  }, []);

  return (
    <StyledServices
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          {data.map((item) => (
            <Card
              key={item.title}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </StyledCards>
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
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
