import {
  Pagination,
  Stack,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useHome from "../hooks/useHome";
import MovieCard from "./MovieCard";
import { useEffect } from "react";

export default function FilterCategory({ handleChange, page }) {
  const { type } = useParams();
  const { movies, totalPage, getAllMovies } = useHome();

  useEffect(() => {
    getAllMovies(type, page);
  }, [type, page]);

  if (movies.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "red" }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "5px", fontFamily: "Morina" }}
      >
        {type === "now_playing" ? "Últimos Lanzamientos" : "Populares"}
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center" paddingLeft="25px">
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      {totalPage > 1 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ marginTop: "20px" }}
        >
          <Pagination
            count={totalPage}
            page={page}
            onChange={handleChange}
            sx={{ "& .Mui-selected": { backgroundColor: "red" } }}
          />
        </Stack>
      )}
    </Box>
  );
}
