import './Cart.css'
import { useCartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";



const Cart = () => {
    const {cart, clearCart, itemsTotal, total,idCompra, setIdCompra} = useCartContext()
    console.log('carrito', cart)

    const compra = {
        items : cart,
        total : total
    }

    const ingresaCompra = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, compra)
            .then(({id}) => {
                console.log(id)
                setIdCompra(id)
                clearCart()
            })
    };
   

    if (itemsTotal == 0){
        return(
            <div className='texto'>
                <br></br>
                <p>El carrito se encuentra vacío</p>
            </div>
        )
    }

    return(
        <div className='elementos'>
            <br></br>
            { cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3 className='texto'>Total Final: $ {total}</h3>
            <label className='semi-btn' onClick={() => clearCart()}>*- Limpiar carrito -*</label>
            <Link to='checkout'><button className='btn' onClick={() => ingresaCompra()}>Realizar Compra</button></Link>
        </div>
    )
}
export default Cart