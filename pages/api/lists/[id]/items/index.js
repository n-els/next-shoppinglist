import ShoppingList from '../../../../../models/shoppingListModel.js';
import { connectToDatabase } from '../../../../../utils/db.js';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  const listID = req.query.id;
  if (listID.length < 24) {
    res.send('id wrong');
    return;
  }

  const db = await connectToDatabase();

  if (req.method === 'GET') {
    const selectedList = await ShoppingList.findById(listID);
    res
      .status(200)
      .json({ msg: 'successfully fetched', products: selectedList.products });
  }

  if (req.method === 'POST') {
    const item = req.body;
    const newID = uuidv4();
    const createdItem = { id: newID, ...item };
    console.log(createdItem);
    const listWithCreatedItem = await ShoppingList.updateOne(
      { _id: listID },
      { $push: { products: createdItem } }
    );
    res.status(200).json({
      msg: 'successfully created item',
      products: listWithCreatedItem,
    });
  }
}
