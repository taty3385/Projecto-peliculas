


// import { Container, Pagination, Stack, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import useHome from '../hooks/useHome';
// import MovieCard from './MovieCard';
// import { useEffect } from 'react';

// export default function FilterCategory() {
//   const { type } = useParams();
//   const { movies, totalPage, page, handleChange,getAllMovies } = useHome();

//   useEffect(() => {
//     getAllMovies(type);
//   }, [type, page]);

//   return (
//     <Container>
//       <Typography variant="h4">
//         {type === 'now_playing' ? 'Últimos Lanzamientos' : 'Populares'}
//       </Typography>
//       <Container
//         sx={{
//           marginTop: '30px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//         }}
//       >
//         <Grid container spacing={3}>
//         {movies.map((movie) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
//           <MovieCard  movie={movie} />
//           <Grid/>
//         ))}
//         </Grid>
//       </Container>
//       {totalPage > 1 && (
//         <Stack
//           spacing={2}
//           direction="row"
//           justifyContent="center"
//           sx={{ marginTop: '20px' }}
//         >
//           <Pagination count={totalPage} page={page} onChange={handleChange} />
//         </Stack>
//       )}
//     </Container>
//   );
// }

import { Container, Pagination, Stack, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import useHome from '../hooks/useHome';
import MovieCard from './MovieCard';
import { useEffect } from 'react';

export default function FilterCategory() {
  const { type } = useParams();
  const { movies, totalPage, page, handleChange, getAllMovies } = useHome();

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
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
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
