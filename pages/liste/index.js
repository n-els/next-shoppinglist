import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';
import { authOptions } from '../api/auth/[...nextauth]';
import { connectToDatabase } from '../../utils/db';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItemForm from '../../components/ShoppingList/AddItemForm';
import FilterForm from '../../components/ShoppingList/FilterForm';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import { filterProducts, sortByShop } from '../../utils/arrayHelpers';
import User from '../../models/userModel';
import { BsPlusLg, BsMinu } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const List = ({ email, products, listId }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [productList, setProductList] = useState(products);
  const [filters, setFilters] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const showFormToggle = () => {
    setIsShowForm(!isShowForm);
  };

  const addItemHandler = (newItem) => {
    axios.post(`/api/lists/${listId}/items/`, newItem);
    console.log('posted');
    setProductList((prevValue) => [...prevValue, newItem]);
  };

  const deleteItemHandler = async (id) => {
    console.log(id);
    const productListWithoutDeletedItem = productList.filter((product) => {
      return product.id != id;
    });
    setProductList([...productListWithoutDeletedItem]);
    axios.delete(`/api/lists/${listId}/items/${id}`);
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
        <title>Einkaufsliste - EinkaufsGenie</title>
      </Head>

      <div className="flex justify-between mt-4">
        <FilterForm list={productList} onCheck={onCheckShopFilterHandler} />
        <button
          className="bg-primary font-bold text-white p-3 rounded-full max-h-9"
          onClick={showFormToggle}
        >
          {isShowForm ? (
            <BiMinus size="0.75rem" />
          ) : (
            <BsPlusLg size="0.75rem" />
          )}
        </button>
      </div>
      {isShowForm && (
        <section className="transition-opacity duration-1000 visible">
          <AddItemForm onAddItem={addItemHandler} />
        </section>
      )}
      {filteredList.length < 1 ? (
        <ShoppingList products={productList} onCheck={deleteItemHandler} />
      ) : (
        <ShoppingList products={filteredList} onCheck={deleteItemHandler} />
      )}
    </div>
  );
};

export default List;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  connectToDatabase();
  const user = await User.findOne({ email: session.user.email }).populate(
    'list'
  );

  return {
    props: {
      email: session.user.email,
      listId: user.list._id.toString(),
      products: user.list.products,
    },
  };
}
