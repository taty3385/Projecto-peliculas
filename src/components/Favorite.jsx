
import React, { useContext } from "react";
import { FavoriteContext } from "./context/FavoriteContext";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function Favorite() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Mis favoritos</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {favorites?.length > 0 ? (
            favorites.map((favorite) => (
              <MovieCard key={favorite.id} movie={favorite} />
            ))
          ) : (
            <Typography variant="body1">No hay favoritos seleccionados</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
