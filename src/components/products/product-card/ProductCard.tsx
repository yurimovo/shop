import React from "react";
import { Button, TextField } from "@mui/material";

import "./style.scss";
import ProductImg from "../../../media/productImg.jpg";

const ProductCard = () => {
  return(
    <div className='productCard'>
      <div className='productPhotoContainer'>
        <img className='productPhoto' src={ProductImg} alt="Фото продукта" />
      </div>
      <div className='cardContent'>
        <div className='productName'>
          Header
        </div>
        <div className='productPrice'>
          1999.99
        </div>
        <div className='productQuantity'>
          <div className='valueChangeButton'>-</div>
          <input className='productQuantityField' id="outlined-basic" />
          <div className='valueChangeButton'>+</div>
        </div>
        <div className='addToCartButtonContainer'>
          <Button className='addToCartButton' variant="contained" color='secondary'>В корзину</Button>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;