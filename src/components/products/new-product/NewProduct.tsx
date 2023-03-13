import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "../../../main-container.scss";
import "./style.scss";
import { Button, TextField } from '@mui/material';

import { createProduct } from '../../../utils/service-functions/products/createProduct';
import { Product } from '../../../types/products';

const NewProduct = () => {
  const { 
    register,
    formState: {
      errors,
      isValid,
    }, 
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSave = async (data: any) => {
    setIsSaving(true);
    /* await createProduct({
      data
    }); */
    console.log(data);
    reset();
    setIsSaving(false);
  };

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
              {...register("productName", {
                required: true,
              })}
            />
            {errors?.productName ? 
              <div style={{height: 40}}>
                {errors?.productName && <p>Error!</p>}
              </div> : null}
            <TextField
              placeholder='Количество товара'
              className='input-field'
              size="small"
              tabIndex={0}
              {...register("productQuantity", {
                required: true,
              })}
            />
            {errors?.productQuantity ? 
              <div style={{height: 40}}>
                {errors?.productQuantity && <p>Error!</p>}
              </div> : null}
            <TextField
              placeholder='Информация о продукте'
              rows={4}
              className="input-area"
              size="small"
              multiline
              tabIndex={2}
              {...register("productInfo", {
                required: true,
              })}
            />
            {errors?.productInfo ? 
              <div style={{height: 40}}>
                {errors?.productInfo && <p>Error!</p>}
              </div> : null}
            <TextField
              placeholder='Стоимость'
              className='input-field'
              size="small"
              tabIndex={3}
              {...register("productPrice", {
                required: true,
              })}
            />
            {errors?.productPrice ? 
              <div style={{height: 40}}>
                {errors?.productPrice && <p>Error!</p>}
              </div> : null}
            <input
              type={"file"}
            />
            <input
              className="save-button"
              type='submit'
              disabled={!isValid || isSaving}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;