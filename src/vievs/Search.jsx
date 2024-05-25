import React, { useEffect } from "react";
import {Card,CardMedia,CardContent,Box,Container,Typography,  Grid,} from "@mui/material";
import useSearch from "../hooks/useSeach";

export default function Search({ searchQuery }) {
  const { searchResults, fetchMovies } = useSearch();

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchMovies(searchQuery);
    }
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
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <Card sx={{ maxWidth: 300, margin: 2 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No se encontraron resultados.</Typography>
        )}
      </Box>
    </Box>
  );
}
