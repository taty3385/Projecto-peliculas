import Header from "./vievs/Header"
import Footer from "./vievs/Footer";
import Home from "./vievs/Home";
import FilterCategory from "./components/FilterCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./vievs/Detail";
import Search from "./vievs/Search";
import FavoriteContextProvider from "./components/context/FavoriteContext";
import Favorite from "./components/Favorite";



function App() {
  return (
    <FavoriteContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:type" element={<FilterCategory />} />
        <Route path="search" element={<Search/>}/>
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
