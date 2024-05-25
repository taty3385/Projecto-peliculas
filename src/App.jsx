// import Header from "./vievs/Header"
// import Footer from "./vievs/Footer";
// import Home from "./vievs/Home";
// import FilterCategory from "./components/FilterCategory";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Detail from "./vievs/Detail";
// import Search from "./vievs/Search";
// import FavoriteContextProvider from "./components/context/FavoriteContext";
// import Favorite from "./components/Favorite";
// import { useState } from "react";



// function App() {
//   const [searchQuery, setSearchQuery] = useState(""); 
//   const [page, setPage] = useState(1);
//   const handleSearchChange = (event) => {
//     const { value } = event.target;
//     setSearchQuery(value); 

//     const handleChange = (event, value) => {
//       setPage(value);
//     };
  
    
// };
//   return (
//     <FavoriteContextProvider>
//     <BrowserRouter>
//       <Header handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
//       <Routes>
//        <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/category/:type" element={<FilterCategory handleChange={handleChange} page={page}  />} />
//         <Route path="/search" element={<Search searchQuery={searchQuery}/>}/>
//         <Route path="detail/:idDetail" element={<Detail />} />
//         <Route path="/favorite" element={<Favorite />} />

//         <Route path="*" element={<Error />} />
//        </Routes>
//       <Footer />
//     </BrowserRouter>
//     </FavoriteContextProvider>
//   );
// }

// export default App;
import Header from "./vievs/Header"
import Footer from "./vievs/Footer";
import Home from "./vievs/Home";
import FilterCategory from "./components/FilterCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./vievs/Detail";
import Search from "./vievs/Search";
import FavoriteContextProvider from "./components/context/FavoriteContext";
import Favorite from "./components/Favorite";
import { useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <FavoriteContextProvider>
      <BrowserRouter>
        <Header handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:type" element={<FilterCategory page={page} handleChange={handleChange} />} />
          <Route path="/search" element={<Search searchQuery={searchQuery} page={page} />} />
          <Route path="detail/:idDetail" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoriteContextProvider>
  );
}

export default App;
