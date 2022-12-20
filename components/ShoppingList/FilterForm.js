import React, { useEffect, useState } from 'react';
import { filterShops } from '../../utils/arrayHelpers';

const FilterForm = ({ list, onCheck }) => {
  let shops = [];

  // filter Shops from the given List and push them to the empty shops Array
  filterShops(list, shops);
  console.log(shops);
  const [filteredList, setFilteredList] = useState(list);
  const [checkedShops, setCheckedShops] = useState([]);

  function filterProducts(shopArray, products) {
    return products.filter((product) => {
      return shopArray.includes(product.shop);
    });
  }

  const onCheckHandler = (e) => {
    const shopName = e.target.name;
    const isChecked = e.target.checked;

    if (isChecked) {
      setCheckedShops([...checkedShops, shopName]);
      console.log(checkedShops);
    } else {
      setCheckedShops(checkedShops.filter((name) => name !== shopName));
      console.log(checkedShops);
    }
  };

  useEffect(() => {
    onCheck(checkedShops);
  }, [checkedShops]);

  return (
    <form action="/action_page.php">
      <label htmlFor="shops">Nach Shop filtern: </label>
      {shops.map((shop) => {
        return (
          <label key={shop} htmlFor={shop} onChange={onCheckHandler}>
            <input type="checkbox" name={shop} id={shop} />
            {shop}
          </label>
        );
      })}
    </form>
  );
};

export default FilterForm;
