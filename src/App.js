import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainContainer from "./components/layout/mainContainer/MainContainer";
import ProductList from "./components/product/ProductList";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/cart/Cart";
import PageNotFound from "./components/layout/notFound/PageNotFound";

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
