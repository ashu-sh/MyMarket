import React, { useState } from "react";
import "./App.css";
import Header from "./Componants/Header";
// import Menu from "./Componants/Menu";
import Home from "./Componants/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Componants/Cart";
import AddProduct from "./admin/AddProduct";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AddProduct/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
