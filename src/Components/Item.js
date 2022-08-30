import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ products }) => {

    return products.map((product) => (

      <div className="ItemHeader">
        <div key={product.id}>
          <img alt={product.title} className="ItemImg" src={product.pictureUrl}></img>
        <div>
          <span className="ItemTitle">{product.title}</span>
          <div className="ItemPrice">${product.price}</div>
          <p className="ItemStock">STOCK {product.stock} UNIDADES</p>
        </div>
           <Link className="ItemBtn" to={`/detail/${product.id}`}>Ver detalle del producto</Link>
        </div>
      </div>
   ));
  };

export default Item;