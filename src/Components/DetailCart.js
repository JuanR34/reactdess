import { useContext } from 'react'
import { Display } from 'react-bootstrap-icons'
import { CartContext } from '../Context/CartContext'
import './DetailCart.css'
import { FaLeaf } from 'react-icons/fa'


const DetailCart = ({ id, quantity, title, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <>
        <div className='DetailCartContainer'>
             <FaLeaf className="LogoDetailCart"/>
            <div className="ContainerCart">
                <label className="TitleDetail"> {title}
                </label>
                <label className='QuantityContainer'> Cantidad: {quantity}
                </label>
                <label className='PriceContainer'> Precio: {price} 
                </label>
            </div>
            <button className='ButtonDetailCart' onClick={() => handleRemove(id)}>x</button>  
        </div>
        </>
    )
}

export default DetailCart