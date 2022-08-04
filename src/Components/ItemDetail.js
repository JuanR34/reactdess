
import ItemCount from './ItemCount'

const ItemDetail = ({ detail }) => {
      const addProducto = (cantidad) => {
        alert (`Agregaste ${cantidad} ${detail.name} productos al carrito`);
      };

      return (
        <>
        <div className='ItemDetail__Container'>
          <p className='ItemDetail__Title'>Detalle producto</p>
             <div className='ItemDetail__imgDetailContainer'>
                 <img src={detail.pictureUrl} alt={detail.name}/>
             </div>
             <div>
                <h4 className="ItemDetail__title">{detail.title}</h4>
                <p className='ItemDetail__description'>{detail.description}</p>
                <span className='ItemDetail__price'>{detail.price}</span>
                <ItemCount addProducto={addProducto} stock={detail.stock}/>
             </div>
        </div>
        </>
      )
    }

export default ItemDetail;