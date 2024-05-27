
import React, { useContext } from "react";
import { FavoriteContext } from "./context/FavoriteContext";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function Favorite() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "90vw",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Mis favoritos
      </Typography>
      {favorites?.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 2,
            width: "100%",
          }}
        >
          {favorites.map((favorite) => (
            <MovieCard
              key={favorite.id}
              movie={favorite}
              sx={{ margin: "auto" }}
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1">No hay favoritos seleccionados</Typography>
      )}
    </Box>
  );
}
