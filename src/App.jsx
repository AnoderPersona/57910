import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CartWidget from "./components/CartWidget/CartWidget";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/checkout";

function App() {

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
            <NavBar></NavBar>
          <Routes>
            <Route path = '/' element={<ItemListContainer msg={'Hola mundo'}/>} />
            <Route path = '/tag/:tagId' element={<ItemListContainer msg={'Hola mundo'}/>} />
            <Route path = '/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path = '/cart' element={<Cart/>}/>
            <Route path = '/cart/checkout' element={<Checkout/>}/>
            <Route path = '*' element={'<h1>404 PÁGINA NO ENCONTRADA</h1>'} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App
