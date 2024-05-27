
import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Pagination, Stack } from "@mui/material";
import useSearch from "../hooks/useSeach";
import MovieCard from "../components/MovieCard";
import useHome from "../hooks/useHome";

export default function Search({ searchQuery, page }) {
  const { searchResults, fetchMovies, totalPages } = useSearch();
  const { handleChange } = useHome();

  useEffect(() => {
    fetchMovies(searchQuery, page);
  }, [searchQuery, page]);

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
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No se encontraron resultados.</Typography>
        )}
      </Box>
      
      {searchResults.length > 0 && (
        <Stack>
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
      )}
    </Box>
  );
}
