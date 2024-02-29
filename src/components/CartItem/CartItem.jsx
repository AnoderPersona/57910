import './CartItem.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'


const CartItem = (prod) => {
    const {cart, clearCart, itemsTotal, total, removeProduct} = useCartContext()

    return(
        <div className='texto elemento'>
            <label>{prod.nombre}</label>
            <label>${prod.precio}</label>
            <label>{prod.quantity}</label>
            <label>${prod.precio * prod.quantity}</label>
            <label className='borrar-btn' onClick={() => removeProduct(prod.id)}>X</label>
        </div>
    )
}
export default CartItem