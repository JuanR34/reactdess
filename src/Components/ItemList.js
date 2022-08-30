import Item from "./Item";
import { memo } from 'react';
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className="DivItemList">
        <Item products={products} />
        </div>
    );
}

export default memo(ItemList)