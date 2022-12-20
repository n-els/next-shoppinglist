// Funktion um die Läden aus den Produkten rauszufiltern,
// wenn der Laden schon in der Liste vorhanden ist, wird er
// nicht mehr hinzugefügt!
export const filterShops = (shoppinglist, shoplist) => {
  shoppinglist.forEach((product) => {
    if (!shoplist.includes(product.shop)) {
      shoplist.push(product.shop);
    }
  });
};

// Bekommt ein Array aus Shopnamen und ein Array aus Produkten übergeben,
// überprüft ob das Produkt mit einem Shop aus dem shopArray übereinstimmt,
// wenn ja returned sie das Produkt
export const filterProducts = (shopArray, products) => {
  return products.filter((product) => {
    return shopArray.includes(product.shop);
  });
};

// Bekommt ein Array aus Objekten die ein Produkt darstellen und
// sortiert diese Produkt alphabetisch nach Shopnamen
export const sortByShop = (products) => {
  return products.sort((a, b) => {
    if (a.shop < b.shop) {
      return -1;
    } else if (a.shop > b.shop) {
      return 1;
    } else {
      return 0;
    }
  });
};
