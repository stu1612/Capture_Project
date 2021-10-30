import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";

export const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {/* Question */}
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse totam
            libero sed dolores assumenda nemo id voluptatibus dolore odio iste.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse totam
            libero sed dolores assumenda nemo id voluptatibus dolore odio iste.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse totam
            libero sed dolores assumenda nemo id voluptatibus dolore odio iste.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      {/* Question */}
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse totam
            libero sed dolores assumenda nemo id voluptatibus dolore odio iste.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
