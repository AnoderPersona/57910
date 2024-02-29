import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'

const Item = ({id, nombre, imagen, precio, stock}) => {
    const item = {id: id, nombre: nombre, imagen: imagen, precio: precio}
    const {addItem} = useCartContext()
    const onAdd = (count) => {
        addItem(item, count)
    }
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
                    <ItemCount className='Contador' initial={1} stock={stock} onAdd={onAdd}></ItemCount>

                </label>

            </section>

        </article>

    )
}
export default Item