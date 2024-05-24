import React, { useEffect } from "react";
import Carrusel from "./Carrusel";
import useHome from "../hooks/useHome";
import { Container, Grid, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const { getAllMovies, movies, top10, getTop10 } = useHome();

  useEffect(() => {
    getTop10();
    getAllMovies("popular");
  }, []);

  useEffect(() => {
    getTop10();
  }, []);

  return (
    <div>
      <Carrusel
        autoPlay={false}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
      />
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Lo más visto
        </Typography>
        <Grid container spacing={3}>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Top 10
        </Typography>
        <Grid container spacing={3}>
          {top10 &&
            top10.length > 0 &&
            top10.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}
