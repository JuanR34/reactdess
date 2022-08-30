import './ItemCount.css'
import { useState } from 'react';
import Cartwidget from './Cartwidget';
import './ItemCount.css'

const ItemCount = ({
    id,
    title,
    price,
    pictureUrl,
    description,
    stock,
    onAdd
}, initial) => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        if (quantity < 5) setQuantity(quantity + 1);
    }

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    }

    return (
            <div className="FlexContainer">
                <div className="productImage">
                    <img src={pictureUrl} alt={title}/>
                </div>
                <div className="productInfo">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p className='QuantityItemCount'>{quantity} artículos</p>
                    <button className='CartBtn' onClick={increment}>+</button>
                    <button className='CartBtn' onClick={decrement}>-</button>
                    <button disabled={stock === 0 ? true : null} 
                    onClick={() => onAdd(quantity)} className='CartBtn'>Agregar al <Cartwidget/></button>
                    <p>{price}</p>
                </div>
            </div>
    );
}

export default ItemCount;