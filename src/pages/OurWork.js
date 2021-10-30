import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation/animation";

import { MovieState } from "../Data/movies";

export const OurWork = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(MovieState);
  }, []);

  return (
    <>
      <StyledWork
        style={{ background: "#fff" }}
        exit="exit"
        variants={pageAnim}
        initial="hidden"
        animate="show"
      >
        {data.map((movie) => (
          <StyledMovie key={movie.id}>
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <Link to={movie.url}>
              <img src={movie.mainImg} alt={movie.title} />
            </Link>
          </StyledMovie>
        ))}
      </StyledWork>
    </>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
