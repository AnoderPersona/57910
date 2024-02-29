import React from "react";
import './ItemCount.css';
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <label className="Button" onClick={decrement}><b>-</b></label>
                <label className="Number">{quantity}</label>
                <label className="Button" onClick={increment}><b>+</b></label>
            </div>
            <br></br>
            <footer className='footer-carrito'>
                <button disabled={stock <= 0} onClick={() => onAdd(quantity)} className='Carrito'>
                    <i className="fi fi-rr-shopping-cart">
                    </i>
                </button>
            </footer>
        </div>
    )

}

export default ItemCount