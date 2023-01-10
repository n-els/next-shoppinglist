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
    } else {
      setCheckedShops(checkedShops.filter((name) => name !== shopName));
    }
  };

  useEffect(() => {
    onCheck(checkedShops);
  }, [checkedShops]);

  return (
    <form className={`flex flex-col ${list.length < 1 && `opacity-0`}`}>
      <label htmlFor="shops" className="font-semibold text-lg text-primary">
        Nach Laden filtern:{' '}
      </label>
      <div className="mt-1 flex flex-wrap">
        {shops.map((shop) => {
          return (
            <div key={shop}>
              <label
                className="mr-4 flex"
                htmlFor={shop}
                onChange={onCheckHandler}
              >
                <input type="checkbox" name={shop} id={shop} />
                <span className="ml-2 font-light tracking-wide">{shop}</span>
              </label>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default FilterForm;
