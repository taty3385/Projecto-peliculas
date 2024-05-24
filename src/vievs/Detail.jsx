

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  Button,
  List,
  Dialog,
  DialogContent,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import useDetail from "../hooks/useDetail";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

export default function Detail() {
  const { idDetail } = useParams();

  const {
    getMovieDetail,
    getGenreNames,
    fetchGenres,
    movieDetail,
    trailerUrl,
    handleClose,
    open,
    handleWatchTrailer,
  } = useDetail();

  useEffect(() => {
    getMovieDetail();
    fetchGenres();
  }, [idDetail]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        color: "white",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Container sx={{ display: "flex", zIndex: 1 }}>
        <Card
          sx={{
            margin: "10px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            width: "100vh",
          }}
        >
          <CardActionArea>
            {movieDetail.poster_path && (
              <CardMedia
                component="img"
                height="500"
                image={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            )}
          </CardActionArea>
        </Card>
        <Container sx={{ padding: 2, borderRadius: 2 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            {movieDetail.title}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
          >
            {movieDetail.overview}
          </Typography>
          {movieDetail.genres && movieDetail.genres.length > 0 && (
            <Box>
              <Typography
                variant="body4"
                sx={{ color: "#fff", paddingTop: "10px" }}
              >
                Géneros:
              </Typography>

              <List sx={{ padding: 0 }}>
                {getGenreNames(movieDetail.genres.map((genre) => genre.id)).map(
                  (genreName, index, array) => (
                    <ListItem
                      key={index}
                      sx={{
                        padding: 1,
                        marginTop: index === 0 ? 0 : -1,
                        marginBottom: index === array.length - 1 ? 0 : -1,
                      }}
                    >
                      <StarIcon sx={{ color: "#fff", marginRight: 1 }} />{" "}
                     
                      <ListItemText sx={{ color: "#fff" }}>
                        {genreName}
                      </ListItemText>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          )}
        </Container>
        {trailerUrl ? (
          <Button
            sx={{
              alignItems: "flex-start",
              height: "40px",
            }}
            onClick={handleWatchTrailer}
          >
            <MovieFilterIcon sx={{ color: "white" }} />
          </Button>
        ) : null}

        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <DialogContent sx={{ position: "relative", padding: "0" }}>
            <IconButton
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "white",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <iframe
              width="800px"
              height="500px"
              src={trailerUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Trailer"
            />
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
