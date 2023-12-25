import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import './App.css'


function App() {

  return (
    <>
    <div className="barra"> 
      <NavBar></NavBar>
      <CartWidget></CartWidget>
    </div>
    <div>
      <ItemListContainer msg={'Hola mundo'}></ItemListContainer>
    </div>
    </>
  )
}

export default App
