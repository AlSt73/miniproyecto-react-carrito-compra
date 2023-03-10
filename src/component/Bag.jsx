import React, { useEffect, useReducer, useState } from 'react'
import ReducerShop from '../helpers/Reducer';
import image from '../images/image.png';

const init = () => JSON.parse(localStorage.getItem('items')) || [];

const Bag = () => {

    const [items, dispatch] = useReducer(ReducerShop, [], init);
    const [count, setCount] = useState(0);



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
    ]
    localStorage.setItem('items', JSON.stringify(data));

    const deleteItem = (e) => {
        const realKill = {
            type: "delete",
            payload: e
        }
        dispatch(realKill);
    }

    const moreItems = (e) => {
        let count = 1 + e.quantity;
        const updateItem = {
            id: e.id,
            quantity: count,
            title: e.title,
            price: e.price
        }

        const update = {
            type: "update",
            payload: updateItem
        }
        dispatch(update);
    }
    const lessItems = (e) => {
        let count = e.quantity - 1;
        if (count < 0) {
            count = 0;
        }

        const updateItem = {
            id: e.id,
            quantity: count,
            title: e.title,
            price: e.price
        }

        const update = {
            type: "update",
            payload: updateItem
        }
        dispatch(update);
    }

    const itemsPlus = ()=>{
        let s = items.map(i=>{
            let suma = i.quantity * i.price;
            return suma
        });
        let count = 0
        s.map((i,e)=>{
            count = i+count
            return count
        });
        setCount(count);
    }

    const clearShop = ()=>{
        setCount(0);

    }

    useEffect(() => {
        localStorage.getItem('items')
        itemsPlus();
    }, [items])

    return (
        <div className="bag-container">
            <h1>Tu Carro</h1>
            <section className="items-container">
                {items.map(e => {
                    return <div className="card" key={e.id}>
                        <img src={image} alt="image" />
                        <div className="info">
                            <span>{e.title}</span>
                            <span>${e.price}</span>
                            <button onClick={() => deleteItem(e.id)}>Quitar</button>
                        </div>
                        <div className="quantity">
                            <button onClick={() => moreItems(e)}><i className="fa-solid fa-plus"></i></button>
                            <span >{e.quantity}</span>
                            <button onClick={() => lessItems(e)}><i className="fa-solid fa-minus"></i></button>
                        </div>
                    </div>
                })}

            </section>
            <footer className="footer">
                <div className="total">
                    <span>Total</span>
                    <span>${count}</span>
                </div>
                <button onClick={clearShop}>Limpiar carro</button>
            </footer>
        </div>
    )
}

export default Bag