import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./product-card/ProductCard";
import { Button, Typography } from "@mui/material";
import "../../main-container.scss";
import "./style.scss";

const Products = () => {
  return(
    <div className="mainContainer">
      <div className="template-container">
        <ProductCard />
        <div className='addToCartButtonContainer'>
          <Button className='addProductButton' variant="contained" color='secondary'>
            <Link to="/products/newProduct">
              <Typography className="addProductButtonText">Добавить товар</Typography>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Products;