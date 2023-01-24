import React from 'react';
import "./style.scss";
import "../../main-container.scss";
import {Button} from "@mui/material";

const Header = () => {
  return (
    <ul className="menu-large-container">
      <li className="menu-item">Главная</li>
      <li className="menu-item">Товары</li>
      <li className="menu-item">Акции</li>
    </ul>
  );
};

export default Header;