import { connectToDatabase } from '../../../utils/db.js';
import ShoppingList from '../../../models/shoppingListModel.js';

export default async function handler(req, res) {
  const db = connectToDatabase();

  if (req.method === 'GET') {
    const shoppingLists = await ShoppingList.find();
    res.status(200).json({ msg: 'All lists', data: shoppingLists });
  }

  if (req.method === 'POST') {
    const newShoppingList = await ShoppingList.create({ products: [] });
    res.status(201).json({
      msg: 'Created new list',
      data: newShoppingList,
    });
  }
}
