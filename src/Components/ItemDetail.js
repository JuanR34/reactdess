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
        <h3 className='ItemDetailTitle'>Detalle producto</h3>
        <div className='ItemDetailContainer'>
        <img src={pictureUrl} alt='imgUrl' className='ImgDetailContainer'/>
          <h5 className="ItemDetailSubtitle">{title}</h5>
            <p className='ItemDetailDescription'>{description}</p>
            <p className='ItemDetailPrice'>${price}</p>
            {quantity > 0 ? <Link className='FinalizarLaCompra' to='/cart'>Finalizar Compra</Link> 
            : <ItemCount initial={quantityAdded} stock={stock} onAdd={handleOnAdd}/>}
        </div>
        </>
      )
    }

export default ItemDetail;