import React from "react";

// type Item = {
//   id: number;
//   name: string;
// };

// let's try using GENERIC types instead of Item type.

// common practice is to use T for generic.

type ListProps<Item> = {
  items: Item[];
  getKey: (item: Item) => React.Key;
  renderItem: (item: Item) => React.ReactNode;
};

export default function List<Item>({ items, getKey, renderItem }: ListProps<Item>) {
  return (
    <div>
      {items.map(item => (
        <div key={getKey(item)}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
