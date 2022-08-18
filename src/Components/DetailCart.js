import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './DetailCart.css'


const DetailCart = ({ id, quantity, title, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article>
            <header>
                <h5 className="TitleDetail">
                    {title}
                </h5>
            </header>
            <section className='QuantityContainer'>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                 <p className="SubtotalDetail">
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='ButtonDetailCart' onClick={() => handleRemove(id)}>x</button>
            </footer>
        </article>
    )
}

export default DetailCart