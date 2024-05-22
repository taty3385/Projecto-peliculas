// import { useState } from "react";


// export default function useHeader(resetPage) {
  
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleCategoryClick = (category) => {
//     resetPage()
//     handleClose();
//   };

//   return {
//     handleClick,
//     handleClose,
//     handleCategoryClick,
//     anchorEl,
//     open,
//   };
// }
import { useState } from "react";

export default function useHeader(resetPage) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category) => {

    handleClose();
  };

  return {
    handleClick,
    handleClose,
    handleCategoryClick,
    anchorEl,
    open,
  };
}
