// import React, { useEffect } from "react";
// import {Card,CardMedia,CardContent,Box,Container,Typography,  Grid,} from "@mui/material";
// import useSearch from "../hooks/useSeach";
// import MovieCard from "../components/MovieCard";

// export default function Search({ searchQuery }) {
//   const { searchResults, fetchMovies } = useSearch();

//   useEffect(() => {
    
//       fetchMovies(searchQuery);
    
//   }, [searchQuery]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Container>
//         <Typography variant="h3" align="center" gutterBottom>
//           Realiza tu búsqueda
//         </Typography>
//       </Container>

//       <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
//         {searchResults.length > 0 ? (
//           <Grid container spacing={3}>
//             {searchResults.map((movie) => (
//               <MovieCard/>
//         ) : (
//           <Typography variant="body1">No se encontraron resultados.</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }
import React, { useEffect } from "react";
import { Card, CardMedia, CardContent, Box, Container, Typography, Grid } from "@mui/material";
import useSearch from "../hooks/useSeach";
import MovieCard from "../components/MovieCard";

export default function Search({ searchQuery }) {
  const { searchResults, fetchMovies } = useSearch();

  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Realiza tu búsqueda
        </Typography>
      </Container>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        {searchResults.length > 0 ? (
          <Grid container spacing={3}>
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} /> // Aquí falta el key y el cierre del paréntesis
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No se encontraron resultados.</Typography>
        )}
      </Box>
    </Box>
  );
}
