import React, { useEffect, useContext } from 'react'
import { ItemsContext } from '../helpers/ItemsProvider';


import image from '../images/image.png';
const Bag = () => {
    const { items, dispatch, count, setCount } = useContext(ItemsContext);

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
        if (count < 1) {
            count = 0;
            deleteItem(e.id);
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

    const itemsPlus = () => {
        let s = items.map(i => {
            let suma = i.quantity * i.price;
            return suma
        });
        let count = 0
        s.map((i, e) => {
            count = i + count
            return count
        });
        setCount(count);
    }

    const clearShop = () => {
        setCount(items.length = 0);

    }
    useEffect(() => {
        itemsPlus();
        localStorage.getItem('items');
    }, [items])


    return (
        <div className="bag-container">
            {items.length > 0 &&
                (<>
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
                </>)
            }
            {items.length < 1 &&
                <>
                    <h1>Tu carro esta vacío</h1>
                    <div>
                        <button className="btn-reset" onClick={() => location.reload()}>Reiniciar</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Bag