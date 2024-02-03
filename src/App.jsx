import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CartWidget from "./components/CartWidget/CartWidget";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <NavBar></NavBar>
        <Routes>
          <Route path = '/' element={<ItemListContainer msg={'Hola mundo'}/>} />
          <Route path = '/tag/:tagId' element={<ItemListContainer msg={'Hola mundo'}/>} />
          <Route path = '/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path = '*' element={'<h1>404 PÁGINA NO ENCONTRADA</h1>'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
