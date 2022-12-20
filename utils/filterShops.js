// Funktion um die Läden aus den Produkten rauszufiltern,
// wenn der Laden schon in der Liste vorhanden ist, wird er
// nicht mehr hinzugefügt!

const filterShops = (shoppinglist, shoplist) => {
  shoppinglist.forEach((product) => {
    if (!shoplist.includes(product.shop)) {
      shoplist.push(product.shop);
    }
  });
};

export default filterShops;
