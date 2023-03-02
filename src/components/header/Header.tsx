import React from 'react';
import {Link} from "react-router-dom";

import "./style.scss";
import "../../main-container.scss";

const Header = () => {
    return (
        <ul className="menu-large-container">
            <li className="menu-item"><Link to="/">Главная</Link></li>
            <li className="menu-item"><Link to="/products">Товары</Link></li>
            <li className="menu-item"><Link to="/promotions">Акции</Link></li>
        </ul>
    );
};

export default Header;