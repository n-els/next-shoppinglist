import React, { useState } from 'react';
import filterShops from '../../utils/filterShops';

const FilterForm = ({ list, onCheck }) => {
  let shops = [];

  // filter Shops from the given List and push them to the empty shops Array
  filterShops(list, shops);

  const [filteredList, setFilteredList] = useState(list.products);
  const [checkedShops, setCheckedShops] = useState([]);

  const onCheckHandler = (e) => {
    const shopName = e.target.name;
    const isChecked = e.target.checked;
    console.log(shopName, isChecked);
    // setCheckedShops([...checkedShops, shopName]);
    // console.log(checkedShops);
    // // onCheck(filteredList);
  };

  return (
    <form action="/action_page.php">
      <label htmlFor="shops">Nach Shop filtern: </label>
      {/* <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select> */}

      <label htmlFor="aldi" onChange={onCheckHandler}>
        <input type="checkbox" name="Aldi" id="aldi" />
        Aldi
      </label>

      <label htmlFor="aldi" onChange={onCheckHandler}>
        <input type="checkbox" name="Penny" id="penny" />
        Penny
      </label>
    </form>
  );
};

export default FilterForm;
