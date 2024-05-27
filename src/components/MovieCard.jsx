
import { useContext } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteContext } from "./context/FavoriteContext";

const MovieCard = ({ movie }) => {

const { addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
const placeholderImage = "https://azure.wgp-cdn.co.uk/app-family-tree/posts/nypl_digitalcollections_b5cfbf49-a5a0-7548-e040-e00a18060aef_001_q.jpg";

  return (
    <Card sx={{
      margin: "5px", 
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)", 
      width: "30vh", 
      position: "relative",
      transition: "transform 0.3s ease", 
      "&:hover": {
        transform: "translateY(-15px)",
      }
    }}>
      <CardActionArea>
        <Link to={`/detail/${movie.id}`}>
          <CardMedia
            component="img"
            height="200"
            image={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : placeholderImage}
            alt={movie.title}
          />
        </Link>
        <CardContent sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '5px' , height:"10vh", display:"flex" , justifyContent:"center" ,alignItems:"center" }}>
          <Typography gutterBottom variant="h7" component="div"sx={{color:"white"}} >
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        onClick={() => isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie)}
        
        sx={{ position: "absolute", top: 10, right: 10, color: isFavorite(movie.id) ? "red" : "grey" }}
      >
        <FavoriteIcon />
      </IconButton>
    </Card>
  );
};

export default MovieCard;