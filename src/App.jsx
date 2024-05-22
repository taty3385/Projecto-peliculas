import Header from "./components/Header";
import Footer from "./vievs/Footer";
import Home from "./vievs/Home";
import FilterCategory from "./components/FilterCategory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./vievs/Detail";
import Search from "./vievs/Search";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:type" element={<FilterCategory />} />
        <Route path="search" element={<Search/>}/>
        <Route path="detail/:idDetail" element={<Detail />} />
        <Route path="*" element={<Error />} />
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
