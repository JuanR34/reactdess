import { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import DetailCart from './DetailCart';
import Cart from './Cart';


const CartContainer = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <h1>Total de productos</h1>
        )
    }

    return (     
        <div>
            <div>
                <Cart products={cart}/>
            </div>
            { cart.map(p => <DetailCart key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Eliminar productos</button>
            <button className="Button">Abonar</button>

        </div>
    )
}

export default CartContainer;