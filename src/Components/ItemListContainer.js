import ItemList from './ItemList'
import { useEffect, useState } from "react";
// import { getProducts, getProductsByCategory } from '../Utils/Fetch';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../Firebase/Index.js/Index'

const ItemListContainer =  (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const collectionRef = !categoryId 
    ? collection (db, 'products')
    : query(collection(db, 'products'), where ('category', '==', categoryId))

    getDocs (collectionRef).then(response => {
        const products = response.docs.map(doc =>{
            const values = doc.data()

            return {id: doc.id, ...values}
        }) 
        setProducts(products)
    }).catch(error => {
        console.log(error)
    }).finally(()=>{
        setLoading(false)
    })
}, [categoryId])

  if(loading) {
     return <h2 className='item'>Cargando productos</h2>
    }

   return (
     <>
      <h3>{` ${categoryId || ''}`}</h3>
      <ItemList products={products} />
    </>
)}

export default ItemListContainer;