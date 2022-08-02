import Item from './Item'

//const ItemList = (props) => {+
  const ItemList = ({items}) => {
  
    return (
      <div>
        <Item items = {items} />
      </div>
    );
  }
  
  export default ItemList;