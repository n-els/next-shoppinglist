import React from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({ products, onCheck }) => {
  const listJSX = products.map((item) => {
    return <ShoppingItem key={item.id} item={item} onCheck={onCheck} />;
  });

  return <ul>{listJSX}</ul>;
};

export default ShoppingList;
