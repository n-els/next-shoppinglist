import mongoose from 'mongoose';

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
  list: { type: mongoose.Schema.ObjectID, ref: 'ShoppingList' },
});

const User = mongoose.model('User', userSchema);

export default User;
