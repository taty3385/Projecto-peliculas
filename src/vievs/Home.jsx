import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Container, IconButton, Typography } from "@mui/material";
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

  
  useEffect(() => {
  
    getTop10();
  }, []);

  const responsive = {
    421: { items: 2 },
    537: { items: 2 },
    628:{ items: 2 },
    725: { items: 3 },
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

    <Box>
      <CarruselPlay />
      <Box sx={{ maxWidth: "100vw", margin: "5px",/* backgroundColor: "blue" */}}>
        <Container sx={{ Width: "90vh",/* backgroundColor: "red"*/  }}>
        <Typography variant="h5" gutterBottom> Más populares</Typography>
          <AliceCarousel
            infinite
            responsive={responsive}
            mouseTracking
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            dotsDisabled={false}
            disableDotsControls={true} 
          
            mouseDragEnabled={false}
            sx={{ width: "100%"}}
          >
            {movies.map((movie) => (
              <div key={movie.id} sx={{ width: "50vw",margin: "0 auto" }}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </AliceCarousel>
        </Container>
        <Container sx={{ Width: "90vh", /*backgroundColor: "red"*/ }}>
        <Typography variant="h5" gutterBottom>  Top 10 más vistos</Typography>
          <AliceCarousel
            infinite
            responsive={responsive}
            mouseTracking
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            dotsDisabled={false} 
           disableDotsControls={true} 
          >
            {top10.map((movie) => (
              <div key={movie.id} style={{ margin: "0 10px", width: "40vw" }}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </AliceCarousel>
        </Container>
      </Box>
    </Box>
   



  );
}
