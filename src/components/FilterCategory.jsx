


import { Container, Pagination, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useHome from '../hooks/useHome';
import MovieCard from './MovieCard';
import { useEffect } from 'react';

export default function FilterCategory() {
  const { type } = useParams();
  const { movies, totalPage, page, handleChange,getAllMovies } = useHome();

  useEffect(() => {
    getAllMovies(type);
  }, [type, page]);

  return (
    <Container>
      <Typography variant="h4">
        {type === 'now_playing' ? 'Últimos Lanzamientos' : 'Populares'}
      </Typography>
      <Container
        sx={{
          marginTop: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
      {totalPage > 1 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ marginTop: '20px' }}
        >
          <Pagination count={totalPage} page={page} onChange={handleChange} />
        </Stack>
      )}
    </Container>
  );
}

