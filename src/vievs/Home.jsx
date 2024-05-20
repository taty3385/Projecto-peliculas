
import React, { useEffect } from 'react';
import Carrusel from './Carrusel';
import useHome from '../hooks/useHome';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const { getAllMovies, popularMovies, topRatedMovies } = useHome();

  useEffect(() => {
    getAllMovies('popular');
    getAllMovies('top_rated');
  }, []);

  return (
    <div>
      <Carrusel 
      autoPlay={false}
      infiniteLoop={true}
      interval={3000}
      showStatus={false}
      showThumbs={false}/>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Lo más visto
        </Typography>
        <Grid container spacing={3}>
          {popularMovies && popularMovies.length > 0 && popularMovies.map((movie) => (
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
          {topRatedMovies && topRatedMovies.length > 0 && topRatedMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
