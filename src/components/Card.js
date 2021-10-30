import React from "react";
import styled from "styled-components";

export const Card = ({ img, title, description }) => {
  return (
    <StyledCard>
      <div className="icon">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  flex-basis: 5rem;
  padding-right: 1rem;
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
