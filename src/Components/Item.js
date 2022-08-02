import ItemCount from "./ItemCount";
import { ContainerProduct } from './OtherStylesComponents'

const Item = ({ items = [], onAdd }) => {
    return (
        <ContainerProduct>
        {
            items.length > 0
            ? items.map(item => 
                <ItemCount 
                 key={item.id}
                 id={item.id}
                 price={item.price}
                 pictureUrl={item.pictureUrl}
                 stock={item.stock}
                 onAdd={onAdd}
                 title={item.title}
                 description={item.description}
                 />)
            : <p>Cargando...</p>
      }
      </ContainerProduct>
    )
  }

export default Item;