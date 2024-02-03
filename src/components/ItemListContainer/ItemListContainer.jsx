import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import {getProducts, getProductsByTag} from '../../ApiMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({msg}) => {
    const [products, setProducts] = useState([])

    const {tagId} = useParams();

    useEffect(() => {

        const asyncFunc = tagId ? getProductsByTag : getProducts

         asyncFunc(tagId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [tagId])

    return (
        <div className='list'>
            <br></br>
            <ItemList products={products}/>

        </div>
    )
}
export default ItemListContainer