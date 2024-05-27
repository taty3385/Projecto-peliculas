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

export default function CarruselPlay() {
  const { getAllMovies, movies, movieImages } = useHome();

  useEffect(() => {
    getAllMovies("now_playing");
  }, []);

  if (movies.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <CircularProgress sx={{ color: "red" }} />
      </Box>
    );
  }

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
          <div key={movie.id}>
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
                  image={`https://image.tmdb.org/t/p/original${
                    movieImages[movie.id][0].file_path
                  }`}
                  alt={movie.title}
                />
              ) : (
                <p>No image available</p>
              )}
            </CardActionArea>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
