import './ItemListContainer.css'
import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = ({msg}) => {
    const [products, setProducts] = useState([])

    const {tagId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')
        const queryFilter = tagId ? query(queryCollection, where('etiqueta','==', tagId)) : queryCollection;
        getDocs(queryFilter)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
        
    }, [tagId])

    return (
        <div className='list'>
            <br></br>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer