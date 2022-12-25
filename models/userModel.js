import mongoose from 'mongoose';
import ShoppingList from './shoppingListModel.js';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A User must have an username!'],
    unique: true,
    minlength: 5,
    maxlength: 30,
  },
  password: String,
  email: String,
  list: { type: mongoose.Schema.Types.ObjectId, ref: 'ShoppingList' },
});

userSchema.post('save', async function (doc) {
  // Only run the post middleware if the document is new and don't have a reference to a list already.
  if (!doc.list) {
    const newShoppingList = await ShoppingList.create({});
    doc.list = await newShoppingList._id;
    await doc.save();
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
