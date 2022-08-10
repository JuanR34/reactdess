import ItemCount from './ItemCount';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';



const ItemDetail = ({ detail }) => {
  const [cantidad, setCantidad] = useState(0)
  const navigate = useNavigate()
  const addProducto = (cantidad) => {
      console.log('agregue al carrito: ', cantidad)
      setCantidad(cantidad)
  }

  const handleAdd = (quantityToAdd) => {
 
    setCantidad(quantityToAdd)
 
    navigate("/cart")
}

const volver = useNavigate()


      return (
        <>
        <div className='ItemDetail__Container'>
          <p className='ItemDetail__Title'>Detalle producto</p>
             <div className='ItemDetail__imgDetailContainer'>
                 <img src={detail.pictureUrl} alt={detail.name}/>
             </div>
             <div>
                <h4 className="ItemDetail__title">{detail.title}</h4>
                <p className='ItemDetail__description'>{detail.description}</p>
                <span className='ItemDetail__price'>{detail.price}</span>
                <div>
                { cantidad > 0 ? <Link className='link_carrito' to='/cart'>Ir al carrito</Link> 
                :<ItemCount initial={1} stock={detail.stock} addProducto={addProducto} onAdd={handleAdd}/>}
                <button onClick={()=> volver("/")}>Volver</button>
                </div>
             </div>
        </div>
        </>
      )
    }

export default ItemDetail;