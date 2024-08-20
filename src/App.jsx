import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
// import Images
import bannersmens from "./assets/bannermens.png";
import bannerswomens from "./assets/bannerwomens.png";
import bannerskids from "./assets/bannerkids.png";

export default function App() {
  return (
    <>
      <main className="bg-white text-black">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Category category="men" banner={bannersmens}/>} />
            <Route path="/womens" element={<Category category="women" banner={bannerswomens}/>} />
            <Route path="/kids" element={<Category category="kids" banner={bannerskids}/>} />
            <Route path="/product/:productId" element={<Product />} /> {/* Corrected Route */}
            <Route path="/cart-page" element={<Cart />} />
          

            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  );
}
