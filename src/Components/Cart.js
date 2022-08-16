import DetailCart from "./DetailCart";

const Cart = ({products}) => {
    return(
        <div>
            {products.map(product => (<DetailCart product={product} key={product.id}/>))}
        </div>
        )
}

export default Cart;