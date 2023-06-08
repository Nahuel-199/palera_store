import { BrowserRouter, Routes, Route } from "react-router-dom";
/* 
import ProductList from "./pages/productsList/ProductList";
import AllProductList from "./pages/productsList/AllProductList";
import SingleProduct from "./pages/singleProduct/SingleProduct"; */
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Wsp from "./components/wsp/Wsp";
import Footer from "./components/footer/Footer";
import ScrollUp from './components/scrollup/ScrollUp';
import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Wsp />
        <Routes>
          <Route path="/" element={<Home />} />
   {/*        <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<AllProductList />} /> */}
        </Routes>
        <Footer />
        <ScrollUp />
      </div>
    </BrowserRouter>
  )
}

export default App