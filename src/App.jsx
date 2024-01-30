import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
// import CartWidget from "./components/CartWidget/CartWidget";
import './App.css';
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <>
    <div className="barra"> 
      <NavBar></NavBar>
      {/* <CartWidget></CartWidget> */}
    </div>
    <div>
      <ItemListContainer msg={'Hola mundo'}></ItemListContainer>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}></ItemCount>
    </div>
    </>
  )
}

export default App
