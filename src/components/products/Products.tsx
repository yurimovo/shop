import React from "react";
import ProductCard from "./product-card/ProductCard";
import {Button} from "@mui/material";

const Products = () => {
    return(
        <div>
            <ProductCard />
            <div className='addToCartButtonContainer'>
                <Button className='addToCartButton' variant="contained" color='secondary'>В корзину</Button>
            </div>
        </div>
    )
};

export default Products;