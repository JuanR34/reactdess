import ItemDetail from './ItemDetail'

//const ItemList = (props) => {+
  const ItemList = ({items}) => {
  
    return (
      <div>
        <ItemDetail items = {items} />
      </div>
    );
  }
  
  export default ItemList;