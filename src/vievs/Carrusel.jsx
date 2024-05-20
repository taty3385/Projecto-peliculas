import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, CardActionArea, CardMedia } from "@mui/material";
import useHome from "../hooks/useHome";

export default function Carrusel() {
  const { getAllMovies, popularMovies, movieImages } = useHome();
console.log(popularMovies);

  useEffect(() => {
    getAllMovies("popular");
    
  }, []);

  return (
    <Box sx={{ height: "60vh", width: "98vw" }}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
      
      >
        {popularMovies.map((movie) => (
          <Box key={movie.id}>
            <CardActionArea>
            {movieImages[movie.id] && movieImages[movie.id].length > 0 ? (
              <CardMedia
                component="img"
                sx={{
                  height: "60vh",
                  width: "100%",
                  objectPosition: "50% 30%",
                  objectFit: "cover",
                }}
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
              ) : (
                <p>No image available</p>
              )}
            </CardActionArea>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

