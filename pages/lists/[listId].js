import { useRouter } from 'next/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddItemForm from '../../components/ShoppingList/AddItemForm';
import FilterForm from '../../components/ShoppingList/FilterForm';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import { filterProducts, sortByShop } from '../../utils/arrayHelpers';

const ShoppingListDetailPage = ({ products }) => {
  const router = useRouter();
  const { listId } = router.query;
  const [isShowForm, setIsShowForm] = useState(false);
  const [productList, setProductList] = useState(products);
  const [filters, setFilters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const showFormToggle = () => {
    setIsShowForm(!isShowForm);
  };

  const addItemHandler = (newItem) => {
    axios.post(`http://localhost:3000/api/lists/${listId}/items/`, newItem);
    console.log('posted');
    setProductList((prevValue) => [...prevValue, newItem]);
  };

  const deleteItemHandler = async (id) => {
    console.log(id);
    const productListWithoutDeletedItem = productList.filter((product) => {
      return product.id != id;
    });
    setProductList([...productListWithoutDeletedItem]);
    axios.delete(`http://localhost:3000/api/lists/${listId}/items/${id}`);
  };

  const onCheckShopFilterHandler = (shopFilters) => {
    setFilters(shopFilters);
    console.log(shopFilters);
    const filteredProducts = filterProducts(shopFilters, productList);
    const sortedFilteredProducts = sortByShop(filteredProducts);
    console.log('sorted filtered products:', sortedFilteredProducts);
    console.log('original PRODUCTS:', productList);
    console.log('FILTERED PRODUCTS:', filteredProducts);
    setFilteredList([...sortedFilteredProducts]);
  };

  return (
    <div className="">
      <h1 className="mb-4 text-l font-bold">
        {productList.length > 0 ? (
          <span>{productList.length} Produkte in der Einkaufsliste</span>
        ) : (
          <span>Keine Produkte gefunden!</span>
        )}
      </h1>

      <div className="flex justify-between">
        <FilterForm list={productList} onCheck={onCheckShopFilterHandler} />

        <button
          className="bg-green-600 font-bold text-3xl text-white px-2 rounded-3xl"
          onClick={showFormToggle}
        >
          {isShowForm ? <span>-</span> : <span>+</span>}
        </button>
      </div>
      {isShowForm && <AddItemForm onAddItem={addItemHandler} />}
      {filteredList.length < 1 ? (
        <ShoppingList products={productList} onCheck={deleteItemHandler} />
      ) : (
        <ShoppingList products={filteredList} onCheck={deleteItemHandler} />
      )}
    </div>
  );
};

export default ShoppingListDetailPage;

export const getServerSideProps = async (context) => {
  const { listId } = context.params;
  const res = await fetch(`http://localhost:3000/api/lists/${listId}`);
  const data = await res.json();
  const { products } = data.list;
  return {
    props: { products },
  };
};
