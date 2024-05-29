import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import useHome from "../hooks/useHome";
import { Link } from "react-router-dom"

export default function CarruselPlay() {
  const { getAllMovies, movies, movieImages } = useHome();

  useEffect(() => {
    getAllMovies("now_playing");
  }, []);



  return (
    <Box
    className="carrusel"
    sx={{
      height: "60vh",
      width: "100%",
    }}
  >
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      showArrows
      emulateTouch
    >
      {movies.map((movie) => (
        <Box key={movie.id}>
          <Link to={`/detail/${movie.id}`}>
            <CardActionArea>
              {movieImages[movie.id] && movieImages[movie.id].length > 0 ? (
                <CardMedia
                  component="img"
                  sx={{
                    height: {
                      xs: "30vh",
                      sm: "40vh",
                      md: "50vh",
                      lg: "56vh",
                      "@media (max-width: 800px)": { height: "60vh" },
                    },
                    width: "100%",
                    objectPosition: "50% 30%",
                    objectFit: "cover",
                  }}
                  image={`https://image.tmdb.org/t/p/original${movieImages[movie.id][0].file_path}`}
                  alt={movie.title}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: {
                      xs: "30vh",
                      sm: "40vh",
                      md: "50vh",
                      lg: "56vh",
                      "@media (max-width: 800px)": { height: "60vh" },
                    },
                    width: "100%",
                  }}
                >
                  <CircularProgress sx={{ color: "gray" }} />
                </Box>
              )}
            </CardActionArea>
          </Link>
        </Box>
      ))}
    </Carousel>
  </Box>
  );
}
