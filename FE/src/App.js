import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnnouncementBar from "./Components/AnnouncementBar/AnnouncementBar";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Pages/Shop";
import ProductCategory from "./Pages/ProductCategory";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";
import OurStory from "./Pages/OurStory";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Gift from "./Pages/Gift";
import Address from "./Pages/Address";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AnnouncementBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/category"
            element={<ProductCategory category="all_product" />}
          />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sale" element={<ProductCategory category="sale" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/gift" element={<Gift/>}/>
          <Route path="/address" element={<Address/>}/>
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </div>
  );
};

export default App;
