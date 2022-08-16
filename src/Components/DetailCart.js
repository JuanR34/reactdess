import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


const DetailCart = ({ id, quantity, title, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    const multi = price * quantity

    return (
        <article className='CardCartItem'>
            <header>
                <h2 className="TitleDetail">
                    {title}
                </h2>
            </header>
            <section className='QuantityDetail'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className='PriceDetail'>
                    Precio: ${price}
                </p>
            </section>           
            <footer>
                 <p className="SubtotalDetail">
                     Subtotal: ${multi}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default DetailCart