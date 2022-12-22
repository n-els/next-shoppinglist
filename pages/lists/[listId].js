import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import AddItemForm from '../../components/ShoppingList/AddItemForm';
import FilterForm from '../../components/ShoppingList/FilterForm';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import { filterProducts, sortByShop } from '../../utils/arrayHelpers';

console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);

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
    axios.post(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/lists/${listId}/items/`,
      newItem
    );
    console.log('posted');
    setProductList((prevValue) => [...prevValue, newItem]);
  };

  const deleteItemHandler = async (id) => {
    console.log(id);
    const productListWithoutDeletedItem = productList.filter((product) => {
      return product.id != id;
    });
    setProductList([...productListWithoutDeletedItem]);
    axios.delete(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/lists/${listId}/items/${id}`
    );
  };

  const onCheckShopFilterHandler = (shopFilters) => {
    setFilters(shopFilters);
    const filteredProducts = filterProducts(shopFilters, productList);
    const sortedFilteredProducts = sortByShop(filteredProducts);
    setFilteredList([...sortedFilteredProducts]);
  };

  return (
    <div className="">
      <Head>
        <title>Meine Liste</title>
      </Head>
      {/* <h1 className="mb-4 text-l font-bold">
        {productList.length > 0 ? (
          <span>{productList.length} Produkte in der Einkaufsliste</span>
        ) : (
          <span>Keine Produkte gefunden!</span>
        )}
      </h1> */}

      <div className="flex justify-between mt-4">
        <FilterForm list={productList} onCheck={onCheckShopFilterHandler} />
        <button
          className="bg-green-600 font-bold text-3xl text-white px-2 rounded-full"
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/lists/${listId}`
  );
  const data = await res.json();
  const { products } = data.list;
  return {
    props: { products },
  };
};
