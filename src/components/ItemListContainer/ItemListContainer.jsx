import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import {getProducts} from '../../ApiMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({msg}) => {
    const [products, setProducts] = useState([])

    var xd;
    useEffect(() => {
         getProducts()
            .then(response => {
                setProducts(response)
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    console.log(products)

    return (
        <div className='list'>
            Aquí va ItemListCointainer y este es un string: {msg}
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer