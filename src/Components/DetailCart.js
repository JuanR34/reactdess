import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './DetailCart.css'


const DetailCart = ({ id, quantity, title, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='DetailCartContainer'>
            <h5 className="TitleDetail">
               {title}
            </h5>
            <h5 className='QuantityContainer'>
               Cantidad: {quantity}
            </h5>
            <h5 className='PriceContainer'>
               Precio: {price}
            </h5>
            <h5 className="SubtotalDetail">
               Subtotal: ${price * quantity}
            </h5>
            <button className='ButtonDetailCart' onClick={() => handleRemove(id)}>x</button>      
        </article>
    )
}

export default DetailCart