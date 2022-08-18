import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import DetailCart from './DetailCart';
import Cart from './Cart';
import './CartContainer.css'


const CartContainer = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <div>
                <h1 className="ButtonTotalProductos">Total de productos</h1>
                <h2>Tienes el carrito vacío</h2>
                <button >
                <Link className="Item__btn" to={"/"}> Volver al inicio </Link>
                </button>
            </div>
        )
    }

    return (     
        <div>
            <div>
                <Cart products={cart}/>
            </div>
            { cart.map(p => <DetailCart key={p.id} {...p}/>) }
            <h3 className="ButtonTotal">Total: ${total}</h3>
            <button onClick={() => clearCart()} className="ButtonCartContainerOne">Eliminar productos</button>
            <button className="ButtonCartContainerTwo">Abonar</button>

        </div>
    )
}

export default CartContainer;