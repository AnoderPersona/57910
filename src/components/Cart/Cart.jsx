import './Cart.css'
import { useCartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, itemsTotal, total} = useCartContext()
    console.log('carrito', cart)

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
            <Link to='checkout'><button className='btn'>Realizar Compra</button></Link>
        </div>
    )
}
export default Cart