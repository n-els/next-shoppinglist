const lists = [
  {
    id: 1,
    ownerID: 123456,
    products: [
      { productName: 'Bananen', quantity: 3, shop: 'Penny', done: false },
      { productName: 'Bananen', quantity: 3, shop: 'Edeka', done: false },
    ],
  },
  {
    id: 2,
    ownerID: 123456,
    products: [
      { productName: 'Bananen', quantity: 3, shop: 'Penny', done: false },
      { productName: 'Kiwi', quantity: 1, shop: 'Penny', done: false },
      { productName: 'Tomaten', quantity: 2, shop: 'Penny', done: true },
      { productName: 'Gurke', quantity: 1, shop: 'Aldi', done: false },
    ],
  },
];

export default lists;
