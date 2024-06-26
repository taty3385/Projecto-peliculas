
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
      <ArrowBackIos sx={{color:"red"}} />
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
      <ArrowForwardIos sx={{color:"red"}} />
    </IconButton>
  );

  return (

    <Box width="100vw">
      <CarruselPlay />
      <Box sx={{ maxWidth: "100vw", margin: "5px",}}>
        <Container sx={{ Width: "90vh" }}>
        <Typography variant="h5" gutterBottom sx={{fontFamily:"Morina"}}> Más populares</Typography>
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
              <Box key={movie.id} sx={{ width: "50vw",margin: "0 auto" }}>
                <MovieCard movie={movie} />
              </Box>
            ))}
          </AliceCarousel>
        </Container>
        <Container sx={{ Width: "90vh"}}>
        <Typography variant="h5" gutterBottom sx={{fontFamily:"Morina"}}>  Top 10 más vistos</Typography>
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
              <Box key={movie.id} style={{ margin: "0 10px", width: "40vw" }}>
                <MovieCard movie={movie} />
              </Box>
            ))}
          </AliceCarousel>
        </Container>
      </Box>
    </Box>
   



  );
}

