
import { ContainerProduct } from './OtherStylesComponents';

const ItemDetail = ({producto}) => {
      const addProducto = (cantidad) => {
        alert (`Agregaste ${cantidad} ${producto.title} producto al carrito`);
      };

      return (
        <ContainerProduct>
        <div className='divDetailContainer'>
          <p className='DetailTitle'>Detalle producto</p>
             <div className='imgDetailContainer'>
                 <img src={producto.pictureUrl}/>
             </div>
             <div>
                <span className="titleProduct">{producto.title}</span>
                <p className='descriptionProduct'>{producto.description}</p>
                <span className='priceProduct'>{producto.price}</span>
                <span>{producto.stock}</span>
             </div>
        </div>
        </ContainerProduct>
      )
    }

export default ItemDetail;