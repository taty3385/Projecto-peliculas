import { Link,useNavigate  } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Slide, Button, Badge, Dialog, DialogTitle, DialogContent,DialogActions } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import useHeader from "../hooks/useHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../components/context/FavoriteContext";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import HomeIcon from "@mui/icons-material/Home";
import {
  SearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
  StyledMenu,
} from "./styles";
import MovieCard from "../components/MovieCard";

export default function Header({ searchQuery, handleSearchChange }) {
  const navigate = useNavigate();
  const { handleClick, handleClose, handleCategoryClick, anchorEl, open } =
    useHeader();
  const [modalOpen, setModalOpen] = useState(false);
  const { favorites, totalFavorite } = useContext(FavoriteContext);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }, [searchQuery]);

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{ color: "white", backgroundColor: "gray" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </Link>
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchWrapper>

          <Button onClick={handleModalOpen}>
            <Badge color="primary" badgeContent={totalFavorite()}>
              <FavoriteIcon sx={{ color: "red" }} />
            </Badge>
          </Button>
        </Toolbar>
        <StyledMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          TransitionComponent={Slide}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Link to="/">
            <MenuItem onClick={handleClose}>
              <HomeIcon />
              Home
            </MenuItem>
          </Link>
          <Link to="category/now_playing">
            <MenuItem onClick={() => handleCategoryClick("now_playing")}>
              <NewReleasesIcon />
              Últimos Lanzamientos
            </MenuItem>
          </Link>
          <Link to="category/popular">
            <MenuItem onClick={() => handleCategoryClick("popular")}>
              <TrendingUpIcon sx={{ marginRight: 1 }} />
              Populares
            </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem onClick={handleClose}>
              <SearchIcon sx={{ marginRight: 1 }} />
              Búsqueda
            </MenuItem>
          </Link>
        </StyledMenu>
      </AppBar>
      <Box  >
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
       
            backgroundColor: "rgba(255, 255, 255, 0.5)" 
         
          }
        }}
        
      >
        
        <DialogTitle textAlign="center" sx={{ color: "black",fontSize: "24px" }} >Mis Favoritos</DialogTitle>
        <DialogContent>
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
            <Typography variant="body1">
              No hay favoritos seleccionados
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary" sx={{ color: "black" }}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Box>
  );
}
