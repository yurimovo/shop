import React from "react";
import ProductCard from "./product-card/ProductCard";
import { Button } from "@mui/material";
import "../../main-container.scss";
import "./style.scss";

const Products = () => {
  return(
    <div className="mainContainer">
      <div className="template-container">
        <ProductCard />
        <div className='addToCartButtonContainer'>
          <Button className='addProductButton' variant="contained" color='secondary'>Добавить товар</Button>
        </div>
      </div>
    </div>
  )
};

export default Products;