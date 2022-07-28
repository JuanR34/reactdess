import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import { useState } from 'react';


const Cart = ({ cartItems = [] }) => {
  console.info('Cart updated:', cartItems)
  return (
  <div className="App">
    <h1>Bienvenidos a</h1>
    <h2>VeganShop</h2>
    {cartItems.length > 0 && (cartItems.map(cartItem => (<div>
      {cartItem.product.title + " x " + cartItem.qty}
    </div>)))
    }
    <hr />
  </div>
)}

function App() {
  // [{ producto, qty },
  const [cart, updateCart] = useState([])

  const addToCart = ({product, qty}) => {
    const newCartItem = { product, qty };
    const cartItem = cart.find(x => x.product.id === product.id)

    // retorna antes y la ejecucion de la funcioncion termina en el bloque del if: early return
    if(!cartItem) {
      return updateCart([...cart, newCartItem])
    } 

    cartItem.qty = qty;
    const cartWithItem = cart.filter(x => x.id === product.id)
    updateCart([...cartWithItem, cartItem])
  }

  return (
    <>
      <Navbar />
      <Cart cartItems={cart} />
      <ItemListContainer addToCart={addToCart} />
    </>
  );
}

export default App;