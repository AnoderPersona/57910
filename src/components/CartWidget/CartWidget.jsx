import './CartWidget.css'
import carrito from '../../assets/shopping-cart-icon.png';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
function CartWidget(){

    const {itemsTotal} = useCartContext()
    return (
    <>
        <Link to='/cart' >
            <div className='cart'>
                
                <i className="fi fi-rr-shopping-cart i-carrito"></i>
                <label>
                    {itemsTotal}
                </label>
            </div>
        </Link>

    </>
    )

}

export default CartWidget