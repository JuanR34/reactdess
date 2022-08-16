import { Link } from 'react-router-dom';

const Item = ({ products }) => {

    return products.map((product) => (
      
        <li key={product.id} className="Item__Id">
          <img alt={product.title} className="Item__img" src={product.pictureUrl}></img>
        <div className="Item__header">
          <span className="Item__title">{product.title}</span>
          <span className="Item__price">{" $ "+ product.price}</span>
        </div>
          <p className="Item__category">{product.category}</p>
           <Link className="Item__btn" to={`/detail/${product.id}`}>Ver detalle del producto</Link>
          <p className="Item__stock">{product.stock}</p>
        </li>
   ));
  };

export default Item;