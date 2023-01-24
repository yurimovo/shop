import React from "react";
import Products from "../products/Products";
import Header from "../header/Header";
import "../../main-container.scss";
import "./style.scss";

const MainPage = () => {
  return(
    <div className="mainContainer">
      <div className="template-container">
        <Header />
        <Products />
      </div>
    </div>
  )
}

export default MainPage;