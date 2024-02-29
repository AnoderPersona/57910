import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/cartContext'

const ItemDetail = ({id, nombre, imagen, etiqueta, descripcion, precio, stock}) => {
    const item = {id: id, nombre: nombre, imagen: imagen, precio: precio}
    const {addItem} = useCartContext()
    const onAdd = (count) => {
        console.log(`Agregaste ${count}, ${item} al carrito`)
        addItem(item, count)
    }
    return(
        <article className='Contenedor-detalle'>
            <picture className='ImagenDetalle'>
                <img src={imagen} alt = {nombre} className='ItemImg2'></img>
            </picture>
            <div className='Panel-detalles'>
                <header className='Header'>
                    <h2 className='ItemHeader'>
                        {nombre}
                    </h2>
                </header>

                <section>
                    <p className='Info'>
                        Tipo: {etiqueta}
                    </p>
                    <p className='Info'>
                        Descripcion: {descripcion}
                    </p>
                    <p className='Info'>
                        Precio: ${precio}
                    </p>
                </section>
                <ItemCount initial={1} stock={stock} onAdd={onAdd}></ItemCount>
                <br></br>
            </div>
        </article>
    )
}

export default ItemDetail