import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { getProductById } from "../Utils/Fetch";
import ItemDetail from './ItemDetail';
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../Firebase/Index/Index'
import './DetailContainer.css'


const DetailContainer = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    
    const { productId } = useParams()

    useEffect(() => {
      getDoc(doc(db, 'products', productId)).then (response => {
          const values = response.data()
          const product = {id: response.id, ... values}
          setProducts(product)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })
  }, [productId])
  
    if (!loading) {
      return (
        <div>
          <ItemDetail {...products}/>
        </div>
      );

    }
    return <div>
      <p className="DetailContainerTitle">Cargando detalle..</p>
    </div>;
  };

export default DetailContainer;