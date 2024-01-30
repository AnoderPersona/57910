import './Item.css'
const Item = ({id, nombre, imagen, precio, stock}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg"></img>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock: ${stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>

        </article>

    )
}
export default Item