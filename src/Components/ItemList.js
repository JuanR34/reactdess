import Item from "./Item";
import { memo } from 'react';

const ItemList = ({ products }) => {
    return (
        <ul className="itemList">
        <Item products={products} />
        </ul>
    );
}

export default memo(ItemList)