
import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import useHome from "../hooks/useHome";
import MovieCard from "../components/MovieCard";
import CarruselPlay from "../vievs/Carrusel";

export default function Home() {
  const { getAllMovies, movies, getTop10, top10 } = useHome();

  useEffect(() => {
    getAllMovies("popular");
    getTop10();
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  };

  const renderPrevButton = ({ isDisabled }) => (
    <IconButton
      sx={{
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      disabled={isDisabled}
    >
      <ArrowBackIos />
    </IconButton>
  );

  const renderNextButton = ({ isDisabled }) => (
    <IconButton
      sx={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      disabled={isDisabled}
    >
      <ArrowForwardIos />
    </IconButton>
  );

  return (
    <Box sx={{ maxWidth: "199vh", margin: "0 auto", position: "relative" }}>
      <CarruselPlay />
      <AliceCarousel
        infinite
        responsive={responsive}
        mouseTracking
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: "0 10px", width: "90%" }}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </AliceCarousel>
      <AliceCarousel
        infinite
        responsive={responsive}
        mouseTracking
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      >
        {top10.map((movie) => (
          <div key={movie.id} style={{ margin: "0 10px", width: "90%" }}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </AliceCarousel>
    </Box>
  );
}
