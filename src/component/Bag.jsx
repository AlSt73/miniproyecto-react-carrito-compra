import React from 'react'
import image from '../images/image.png';

const Bag = () => {
    return (
        <div className="bag-container">
            <h1>Tu Carro</h1>
            <section className="items-container">
                <div className="card">
                    <img src={image} alt="image" />
                    <div className="info">
                        <span>Poster Midnight Gospel</span>
                        <span>$15.000</span>
                        <button>Quitar</button>
                    </div>
                    <div className="quantity">
                        <button><i class="fa-solid fa-plus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
                <div className="card">
                    <img src={image} alt="image" />
                    <div className="info">
                        <span>Poster Midnight Gospel</span>
                        <span>$15.000</span>
                        <button>Quitar</button>
                    </div>
                    <div className="quantity">
                        <button><i class="fa-solid fa-plus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
                <div className="card">
                    <img src={image} alt="image" />
                    <div className="info">
                        <span>Poster Midnight Gospel</span>
                        <span>$15.000</span>
                        <button>Quitar</button>
                    </div>
                    <div className="quantity">
                        <button><i class="fa-solid fa-plus"></i></button>
                        <span>1</span>
                        <button><i class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="total">
                    <span>Total</span>
                    <span>$15000</span>
                </div>
                <button>Limpiar carro</button>
            </footer>
        </div>
    )
}

export default Bag