import { useCartContext } from '../../context/cartContext';

const Checkout = (id) => {
    const {idCompra} = useCartContext()

    return(
        <div style={{'color': 'black'}}>
            <br></br>
            Muchas gracias por su compra!
            <br></br>
            La id de su compra es {idCompra}
        </div>
    )
}
export default Checkout