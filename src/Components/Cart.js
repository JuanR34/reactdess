export const Cart = ({ cartItems = [] }) => {
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