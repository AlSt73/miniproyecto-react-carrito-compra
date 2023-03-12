import React, { useState, useReducer, useEffect, createContext } from 'react'

export const ItemsContext = createContext();

import ReducerShop from './Reducer';
import image from '../images/image.png';


const init = () => JSON.parse(localStorage.getItem('items')) || [];

export const ItemsProvider = ({ children }) => {

    const data = [

        {
            id: 1,
            img: image,
            title: "Poster Midnight gospel",
            price: 15000,
            quantity: 1,
        },
        {
            id: 11,
            img: image,
            title: "Poster Midnight gospel",
            price: 15000,
            quantity: 1,
        },
        {
            id: 12,
            img: image,
            title: "Poster Midnight gospel",
            price: 15000,
            quantity: 1,
        },
    ];
    const [items, dispatch] = useReducer(ReducerShop, [], init);
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(0);


    localStorage.setItem('items', JSON.stringify(data));




    return (
        <ItemsContext.Provider value={
            {
                items,
                dispatch,
                count,
                setCount,
                quantity,
                setQuantity
            }}>
            {children}
        </ItemsContext.Provider>
    )
}

