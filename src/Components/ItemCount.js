import './ItemCount.css'
import { useState } from 'react';
import Cartwidget from './Cartwidget';

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
                    <p>{quantity} artículos</p>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button disabled={stock === 0 ? true : null} 
                    onClick={() => onAdd(quantity)} className='cart_btn'>Agregar al <Cartwidget/></button>
                    <p>{price}</p>
                </div>
            </div>
    );
}

export default ItemCount;