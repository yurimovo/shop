import React from 'react';
import { Routes, Route } from "react-router-dom";

import MainPage from './components/main-page/MainPage';
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Promotions from "./components/promotions/Promotions";

import "./main-container.scss";

function App() {
  return (
    <div className="App">
        <div className="template-container">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;