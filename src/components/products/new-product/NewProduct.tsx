import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../../../main-container.scss";
import "./style.scss";
import { Button, TextField } from '@mui/material';

import { createProduct } from '../../../utils/service-functions/products/createProduct';
import { Product } from '../../../types/products';

const NewProduct = () => {
  const { register, handleSubmit } = useForm();
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [productData, setProductData] = useState<Product>({
    productName: "",
    productPrice: 0,
    productInfo: "",
    productQuantity: 0
  })

  const handleSave = async () => {
    setIsSaving(true);
    await createProduct({
      productName: productData.productName,
      productPrice: productData.productPrice,
      productInfo: productData.productInfo,
      productQuantity: productData.productQuantity
    });
    setIsSaving(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div className='main-container'>
      <div className='template-container'>
        <div className='form-container'>
          <div className='form-header'>
            Добавление товара
          </div>
          <form onSubmit={handleSubmit(handleSave)} className='form-body'>
            <TextField
              placeholder='Наименование товара'
              className='input-field'
              size="small"
              tabIndex={0}
              {...register("productName")}
            />
            <TextField
              placeholder='Количество товара'
              className='input-field'
              size="small"
              tabIndex={1}
              {...register("productQuantity")}
            />
            <TextField
              placeholder='Информация о продукте'
              rows={4}
              className="input-area"
              size="small"
              multiline
              tabIndex={2}
              {...register("productInfo")}
            />
            <TextField
              placeholder='Стоимость'
              className='input-field'
              size="small"
              tabIndex={3}
              {...register("productPrice")}
            />
            <input
              type={"file"}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className="save-button"
              type='submit'
              onClick={handleSave}
              disabled={isSaving}
            >
              Сохранить
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;