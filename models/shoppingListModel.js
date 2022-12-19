import mongoose from 'mongoose';

const shoppingListSchema = mongoose.Schema({
  products: { type: Array },
});

export default mongoose.models['ShoppingList'] ||
  mongoose.model('ShoppingList', shoppingListSchema);
