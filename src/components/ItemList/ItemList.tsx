import { FC } from 'react';
import { IItem } from 'src/types/types';

interface ItemListProps {
  items: IItem[];
}

const ItemList: FC<ItemListProps> = ({ items }) => (
  <div>
    {items.map((item) => (
      <div key={item.id}>
        {item.id}
        {item.title}
      </div>
    ))}
  </div>
);

export default ItemList;
