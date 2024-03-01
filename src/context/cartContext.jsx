import {createContext, useContext, useState} from 'react';

const cartContext = createContext()

export const { Provider } = cartContext

export const useCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([]);
    const [itemsTotal, setItemsTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [idCompra, setIdCompra] = useState(0);

    const clearCart = () => {
        setCart([]);
        setItemsTotal(0);
        setTotal(0);
    };
    const isInCart = (id) =>{
        return cart.find(product => product.id === id) ? true : false;
    }

    const addItem = (item, quantity) => {
        const quant = cart.find(p => p.id == item.id)?.quantity ?? 0 ;       
        const newCart = cart.filter(prod => prod.id != item.id);
        setCart([...newCart, {...item, quantity: quantity + quant}]);
        setItemsTotal(cart.reduce((acc, c) => {return acc + c.quantity},0) + quantity);
        setTotal(cart.reduce((acc, c) => {return acc + (c.precio * c.quantity)},0) + (item.precio*quantity));
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
        console.log(cart)
        setItemsTotal((cart.filter(product => product.id !== id)).reduce((acc, c) => {return acc + c.quantity},0));
        setTotal((cart.filter(product => product.id !== id)).reduce((acc, c) => {return acc + (c.precio * c.quantity)},0));

    }

    const valorDelContexto = {clearCart, isInCart, removeProduct, cart, itemsTotal, addItem, total, idCompra, setIdCompra};
    return <Provider value={valorDelContexto}>{children}</Provider>

}
export default CartProvider;