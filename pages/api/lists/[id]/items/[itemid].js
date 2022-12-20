import ShoppingList from '../../../../../models/shoppingListModel.js';
import { connectToDatabase } from '../../../../../utils/db.js';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  const listID = req.query.id;
  if (listID.length < 24) {
    res.send('id wrong');
    return;
  }

  const itemID = req.query.itemid;
  console.log(itemID);

  const db = await connectToDatabase();

  if (req.method === 'GET') {
    const selectedList = await ShoppingList.findById(listID);
    const product = selectedList.products.find((item) => {
      return item.id === itemID;
    });

    res.status(200).json({
      msg: `fetched product with id: ${itemID} from list with id: ${listID}`,
      product: product,
    });
  }

  if (req.method === 'DELETE') {
    // Use the $pull operator to remove the item from the products array
    await ShoppingList.findByIdAndUpdate(listID, {
      $pull: { products: { id: itemID } },
    });

    res.status(200).json({
      msg: `deleted product with id: ${itemID} from list with id: ${listID}`,
    });
  }
}
