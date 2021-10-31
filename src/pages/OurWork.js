import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Animations
import { motion } from "framer-motion";
import {
  pageAnim,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation/animation";

import { MovieState } from "../Data/movies";

export const OurWork = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(MovieState);
  }, []);

  return (
    <StyledWork
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      {/* frame animations */}
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {/* frame animations */}

      {data.map((movie) => (
        <StyledMovie key={movie.id}>
          <motion.h2 variants={fade}>{movie.title}</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to={movie.url}>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={movie.mainImg}
                alt={movie.title}
              />
            </Hide>
          </Link>
        </StyledMovie>
      ))}
    </StyledWork>
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
const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
