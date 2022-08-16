import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ id, title, pictureUrl, description, price, stock }) => {
  
  const [quantity, setQuantity] = useState(0)
  const { addItem, getProductQuantity } = useContext(CartContext)

  const quantityAdded = getProductQuantity(id)

  const handleOnAdd = (quantity) => {
      console.log('Se agregaron '+ quantity + title + 'al Carrito');
      setQuantity(quantity)
      addItem({id, title, price, quantity})
  }

      return (
        <>
        <div className='ItemDetail__Container'>
          <p className='ItemDetail__Title'>Detalle producto</p>
             <div className='ItemDetail__imgDetailContainer'>
                 <img src={pictureUrl} alt='picture'/>
             </div>
             <div>
                <h4 className="ItemDetail__title">{title}</h4>
                <p className='ItemDetail__description'>{description}</p>
                <span className='ItemDetail__price'>{"$"+price}</span>
                <div>
                {quantity > 0 ? <Link className='FinalizarLaCompra' to='/cart'>Finalizar Compra</Link> 
                : <ItemCount initial={quantityAdded} stock={stock} onAdd={handleOnAdd}/>}
                </div>
             </div>
        </div>
        </>
      )
    }

export default ItemDetail;