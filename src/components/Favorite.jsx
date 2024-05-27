
// import React, { useContext } from "react";
// import { FavoriteContext } from "./context/FavoriteContext";
// import { Box, Typography } from "@mui/material";
// import MovieCard from "./MovieCard";

// export default function Favorite() {
//   const { favorites } = useContext(FavoriteContext);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", width:"100vw"}}>
//       <Box sx={{ width:"100vw"}}>
//         <Typography variant="h4" sx={{ marginBottom: 2 }}>Mis favoritos</Typography>
//         <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems:"center" }}>
//           {favorites?.length > 0 ? (
//             favorites.map((favorite) => (
//               <MovieCard key={favorite.id} movie={favorite} />
//             ))
//           ) : (
//             <Typography variant="body1">No hay favoritos seleccionados</Typography>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }
// import React, { useContext } from "react";
// import { FavoriteContext } from "./context/FavoriteContext";
// import { Box, Typography } from "@mui/material";
// import MovieCard from "./MovieCard";

// export default function Favorite() {
//   const { favorites } = useContext(FavoriteContext);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center", minHeight: "100vh", width: "90vw", backgroundColor:"red" }}>
//       <Typography variant="h4" sx={{ marginBottom: 2 }}>Mis favoritos</Typography>
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "90vh" , backgroundColor:"red" }}>
//         {favorites?.length > 0 ? (
//           favorites.map((favorite) => (
//             <MovieCard key={favorite.id} movie={favorite} />
//           ))
//         ) : (
//           <Typography variant="body1">No hay favoritos seleccionados</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// }
// import React, { useContext } from "react";
// import { FavoriteContext } from "./context/FavoriteContext";
// import { Box, Typography } from "@mui/material";
// import MovieCard from "./MovieCard";

// export default function Favorite() {
//   const { favorites } = useContext(FavoriteContext);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         width: "90vw",
      
//       }}
//     >
//       <Typography variant="h4" sx={{ marginBottom: 2 }}>
//         Mis favoritos
//       </Typography>
//       {favorites?.length > 0 ? (
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-around",
//             gap: 2,
//             width: "100%", // Ajuste aquí
//             margin:"auto"
         
//           }}
//         >
//           {favorites.map((favorite) => (
//             <MovieCard key={favorite.id} movie={favorite}  sx={{ margin: "auto" }} />
//           ))}
//         </Box>
//       ) : (
//         <Typography variant="body1">No hay favoritos seleccionados</Typography>
//       )}
//     </Box>
//   );
// }
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
              sx={{ margin: "auto" }} // Ajuste aquí para centrar horizontalmente las tarjetas
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1">No hay favoritos seleccionados</Typography>
      )}
    </Box>
  );
}
