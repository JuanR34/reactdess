import Item from "./Item";
import { memo } from 'react';

const ItemList = ({ products }) => {
    return (
        <div>
        <Item products={products} />
        </div>
    );
}

export default memo(ItemList)