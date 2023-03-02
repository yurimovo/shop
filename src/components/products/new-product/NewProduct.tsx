import React, { useState } from 'react';
import "../../../main-container.scss";
import "./style.scss";
import { Button } from '@mui/material';

import saveProduct from '../../../utils/service-functions/products/saveProduct';

const NewProduct = () => {
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleSave = async () => {
    setIsSaving(true);
    await saveProduct()
    setIsSaving(false);
  };

  return (
    <div className='main-container'>
      <div className='template-container'>
        <div className='form-container'>
          <div className='form-header'>
            Добавление товара
          </div>
          <div className='form-body'>
            <input 
              type={"text"}
              name="productName"
              placeholder='Наименование товара'
              className='input-field'
            />
            <input 
              type={"text"}
              name="productQuantity"
              placeholder='Количество товара'
              className='input-field'
            />
            <textarea
              name="productInfo"
              placeholder='Информация о продукте'
              rows={4}
              className="input-area"
            />
            <input
              type={"text"}
              name="productPrice"
              placeholder='Стоимость'
              className='input-field'
            />
            <input
              type={"file"}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className="save-button"
              onClick={handleSave}
              disabled={isSaving}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;