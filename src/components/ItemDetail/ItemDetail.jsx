import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, imagen, etiqueta, descripcion, precio, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}></ItemCount>
            </div>
        </article>
    )
}

export default ItemDetail