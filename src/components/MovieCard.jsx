import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ margin: "10px", boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)" }}>
      <CardActionArea>
        {movie.poster_path && (
           <Link to={`/detail/${movie.id}`}>
          <CardMedia
            component="img"
            height="300"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          </Link>
        )}
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;

