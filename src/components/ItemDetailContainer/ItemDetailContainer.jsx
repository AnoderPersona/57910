import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', itemId);
        getDoc(queryDoc)
            .then(res => setProduct({id:res.id, ...res.data()}))
    }, [])
    // useEffect(() => {
    //     getProductById(itemId)
    //         .then(response => {
    //             console.log( itemId)
    //             setProduct(response)
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer