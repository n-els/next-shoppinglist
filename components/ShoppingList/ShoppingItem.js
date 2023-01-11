import React from 'react';

const ShoppingItem = ({ item, onCheck }) => {
  const checkItemHandler = () => {
    onCheck(item.id);
  };

  return (
    // <li className="my-4 py-3 px-4 bg-primary text-white flex justify-between items-center rounded-md">
    //   <div className="">
    //     <h2 className="font-bold">
    //       {item.quantity}x {item.name}
    //     </h2>
    //     <div>
    //       <p>{item.shop}</p>
    //     </div>
    //   </div>
    //   <div className="mr-4">
    //     <input
    //       type="checkbox"
    //       name="done"
    //       id="done"
    //       onChange={checkItemHandler}
    //     />
    //   </div>
    // </li>

    <li className="my-4 py-3 px-4 bg-gradient-to-br from-primary to-[#34805cf8] text-white flex justify-between items-center rounded-md">
      <section className="flex items-center">
        <div className="   text-secondary p-2 font-bold text-xl rounded-lg border-r-2 border-secondary">
          {item.quantity < 10 ? ` 0${item.quantity}` : item.quantity}x
        </div>
        <div className="ml-6">
          <p className="font-semibold text-lg tracking-wider">{item.name}</p>
          <p className="font-light tracking-wide">{item.shop}</p>
        </div>
      </section>

      <input
        type="checkbox"
        name="done"
        id="done"
        onChange={checkItemHandler}
        className="mr-4"
      />
    </li>
  );
};

export default ShoppingItem;
