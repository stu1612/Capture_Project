import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../Data/movies";
import { Award } from "../components/Award";
//Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation/animation";

export const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovies(MovieState);
  }, []);

  useEffect(() => {
    const currentMovie = movies.filter(
      (filteredMovie) => filteredMovie.url === url
    );
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          exit="exit"
          variants={pageAnim}
          initial="hidden"
          animate="show"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                key={Math.random() * 1000}
                title={award.title}
                description={award.description}
              />
            ))}
          </StyledAwards>
          <StyledImage>
            <img src={movie.secondaryImg} alt={movie.title} />
          </StyledImage>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem;
  }
`;

const StyledImage = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
