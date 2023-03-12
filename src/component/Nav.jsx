import React, { useContext, useEffect } from 'react'
import { ItemsContext } from '../helpers/ItemsProvider';

const Nav = () => {

    const { quantity, setQuantity } = useContext(ItemsContext);

    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li>Carrito de compra</li>
                <li><i className="fa-sharp fa-solid fa-cart-shopping"></i><div className="count-circle"><span>{quantity}</span></div></li>

            </ul>
        </div>
    )
}

export default Nav