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

    productName.current.value = '';
    quantity.current.value = '';
    shop.current.value = '';
  };

  return (
    <form className="flex flex-col mt-4" onSubmit={submitHandler}>
      <input
        type="text"
        list="products"
        placeholder="Produkt eingeben oder auswählen"
        required
        ref={productName}
        className="mb-2 py-1 px-2 rounded-md outline-none"
      />
      <input
        type="number"
        min="1"
        max="100"
        placeholder="Menge eingeben"
        required
        ref={quantity}
        className="mb-2 py-1 px-2 rounded-md outline-none"
      />
      <input
        type="text"
        list="shops"
        placeholder="Laden eingeben"
        required
        ref={shop}
        className="mb-2 py-1 px-2 rounded-md outline-none"
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
      <button className="bg-primary hover:bg-secondary text-white font-medium p-1 rounded-md tracking-wider transition-colors duration-400">
        Produkt hinzufügen
      </button>
    </form>
  );
};

export default AddItemForm;
