

import React, { useEffect } from "react";
import { Box, Container, Typography, Grid} from "@mui/material";
import useSearch from "../hooks/useSeach";
import MovieCard from "../components/MovieCard";


export default function Search({ searchQuery }) {
  const { searchResults, fetchMovies, } = useSearch();

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
        width:"100vw"
      }}
    >
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Realiza tu búsqueda
        </Typography>
      </Container>

      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        {searchResults.length > 0 ? (
          <Grid container spacing={4} justifyContent="center" alignItems="center" >
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No se encontraron resultados.</Typography>
        )}
      </Box>
      
      
    </Box>
  );
}