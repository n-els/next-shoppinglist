import React from 'react';

const ShoppingItem = ({ item, onCheck }) => {
  const checkItemHandler = () => {
    onCheck(item.id);
  };

  return (
    <li className="my-4 p-2 bg-green-100 flex justify-between items-center">
      <div className="">
        <h2 className="font-bold">
          {item.quantity}x {item.name}
        </h2>
        <div>
          <p>{item.shop}</p>
        </div>
      </div>
      <div className="mr-4">
        <input
          type="checkbox"
          name="done"
          id="done"
          onChange={checkItemHandler}
        />
      </div>
    </li>
  );
};

export default ShoppingItem;
