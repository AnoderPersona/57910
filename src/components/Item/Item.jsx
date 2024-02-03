import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, imagen, precio, stock}) => {

    return (
        
        <article className="CardItem ColorText">
            <header className="Header" title={nombre}>
                <Link to={`/item/${id}`} >
                    <picture>
                        <img src={imagen} alt={nombre} className="ItemImg"></img>
                    </picture>
                </Link> 

            </header>

            <section className='Seccion'>
                <label className="Info ColorText">
                    <b>{nombre}</b>
                    <br></br>
                    ${precio} 
                    <br></br>
                    {stock} en stock
                    <ItemCount className='Contador' initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}></ItemCount>

                </label>

            </section>
            <footer>
             
            <button className='Carrito'>

                <i className="fi fi-rr-shopping-cart" onClick={() => onAdd(quantity)} disabled={!stock}>
                </i>
            </button>
            </footer>

        </article>

    )
}
export default Item