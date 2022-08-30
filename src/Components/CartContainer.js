import { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import DetailCart from './DetailCart';
import Cart from "./Cart";
import './CartContainer.css'
import { Link } from "react-router-dom";


const CartContainer = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  
    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1 className="ButtonTotalProductos">Total de productos</h1>
        )
    }

    return (     
        <div>
            { cart.map(p => <DetailCart key={p.id} {...p}/>) }
            <h3 className="ButtonTotal">Total: ${total}</h3>
            <button onClick={() => clearCart()} className="ButtonCartContainerOne">Eliminar productos</button>
            <Link className="ButtonCartContainerTwo" to='/checkout'>Pagar</Link>
        </div>
    )
  }

export default CartContainer;