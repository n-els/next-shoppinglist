import React from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({ products, onCheck }) => {
  if (products.length < 1) {
    return <p>no products</p>;
  }

  const listJSX = products.map((item) => {
    return <ShoppingItem key={item.id} item={item} onCheck={onCheck} />;
  });

  return (
    <div className="mt-12">
      {products.length === 1 ? (
        <p className="font-bold">
          {products.length} Produkt in der Einkaufsliste
        </p>
      ) : (
        <p className="font-bold">
          {products.length} Produkte in der Einkaufsliste
        </p>
      )}

      <ul>
        {products.map((item) => {
          return <ShoppingItem key={item.id} item={item} onCheck={onCheck} />;
        })}
      </ul>
    </div>
  );
};

export default ShoppingList;
