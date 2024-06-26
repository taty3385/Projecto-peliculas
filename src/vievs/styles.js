import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";

export const SearchWrapper = styled("div")(({ theme }) => ({
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

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: alpha(theme.palette.grey[800], 0.8),
    color: "white",
    width: "20%",
    height: "50vh",
  },
  "& .MuiMenuItem-root": {
    color: "white",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },

  "@media (max-width: 990px)": {
    "& .MuiPaper-root": {
      width: "30%",
    },
  },

  "@media (max-width: 768px)": {
    "& .MuiPaper-root": {
      width: "40%",
    },
  },
}));
