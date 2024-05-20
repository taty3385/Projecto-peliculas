import Header from "./components/Header";
import Footer from "./vievs/Footer";


import Home from "./vievs/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
