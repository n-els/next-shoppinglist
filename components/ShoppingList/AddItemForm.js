import React, { useRef } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const quantity = useRef();
  const productName = useRef();
  const shop = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newInputItem = {
      name: productName.current.value,
      quantity: quantity.current.value,
      shop: shop.current.value,
    };

    onAddItem(newInputItem);
  };

  return (
    <form className="flex flex-col mt-4" onSubmit={submitHandler}>
      <input
        type="text"
        list="products"
        placeholder="Welches Produkt?"
        required
        ref={productName}
        className="mb-2 p-1"
      />
      <input
        type="number"
        min="1"
        max="100"
        placeholder="Wie viel?"
        required
        ref={quantity}
        className="mb-2 p-1"
      />
      <input
        type="text"
        list="shops"
        placeholder="welcher Laden"
        required
        ref={shop}
        className="mb-2 p-1"
      />
      <datalist id="shops">
        <option value="Penny" />
        <option value="Aldi" />
        <option value="Rewe" />
        <option value="Edeka" />
        <option value="Lidl" />
        <option value="Kaufland" />
        <option value="Marktkauf" />
        <option value="Budni" />
        <option value="Rossmann" />
        <option value="Media Markt" />
        <option value="Saturn" />
      </datalist>
      <datalist id="products">
        <option value="Bananen" />
        <option value="Äpfel" />
        <option value="Kartoffeln" />
        <option value="Milch" />
        <option value="Käse" />
        <option value="Eier" />
        <option value="Salami" />
        <option value="Salat" />
        <option value="Wurst" />
        <option value="Würstchen" />
        <option value="Gurke" />
        <option value="Paprika" />
      </datalist>
      <button className="bg-green-700 text-white p-1">hinzufügen</button>
    </form>
  );
};

export default AddItemForm;
