import { Box, Typography } from "@mui/material";
import React from "react";

export default function Error() {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://th.bing.com/th/id/OIP.dKKScYsSRqcQMm5loMUyNQHaHa?rs=1&pid=ImgDetMain)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Página no encontrada</Typography>
    </Box>
  );
}
