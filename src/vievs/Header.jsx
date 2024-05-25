import { Link, Navigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Slide, Button, Badge,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import useHeader from "../hooks/useHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../components/context/FavoriteContext";



const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "black",
    color: "white",
    width: "20vw",
    height: "100vh",
  },
}));

export default function Header({searchQuery,handleSearchChange}) {
  const navigate = useNavigate();
  const { handleClick, handleClose, handleCategoryClick, anchorEl, open } = useHeader();
 const { totalFavorite } = useContext(FavoriteContext);


  useEffect(() => {
    if (searchQuery.length > 0) {
    navigate("/search");
    } else {
      navigate("/");
    }
  }, [searchQuery]);

  return (
    <Box sx={{ width: "100vw" }}>
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
          <Link to={"/favorite"}>
            <Button>
              <Badge color="primary" badgeContent={totalFavorite()}>
                <FavoriteIcon sx={{ color: "red" }} />
              </Badge>
            </Button>
          </Link>
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
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link to="category/now_playing">
            <MenuItem onClick={() => handleCategoryClick("now_playing")}>
              Últimos Lanzamientos
            </MenuItem>
          </Link>
          <Link to="category/popular">
            <MenuItem onClick={() => handleCategoryClick("popular")}>
              Populares
            </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem>búsqueda</MenuItem>
          </Link>
        </StyledMenu>
      </AppBar>
    </Box>
  );
}
