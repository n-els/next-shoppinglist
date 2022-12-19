import { connectToDatabase } from '../../../../utils/db.js';
import ShoppingList from '../../../../models/shoppingListModel.js';

export default async function handler(req, res) {
  if (req.query.id.length < 24) {
    res
      .status(400)
      .json({ status: 'error', msg: 'the id must be 24 characters long' });
    return;
  }

  if (req.method === 'GET') {
    const db = await connectToDatabase();
    const selectedList = await ShoppingList.findById(req.query.id);
    if (!selectedList) {
      res.status(404).json({
        msg: 'could not find a list with this id',
      });
      return;
    }
    res.status(200).json({
      msg: `getting list with id ${req.query.id}`,
      list: selectedList,
    });
  }

  if (req.method === 'PATCH') {
    const data = req.body;
    console.log(data);
    res.status(201).json({
      msg: 'updated list',
      listID: req.query.id,
    });
  }
}
