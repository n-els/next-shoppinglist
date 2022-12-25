import User from '../../../models/userModel';
import { connectToDatabase } from '../../../utils/db';

// Path: pages\api\users\index.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    connectToDatabase();
    const { username, password, email } = req.body;
    const user = await User.create({
      username,
      password,
      email,
    });
    res.status(201).json({ msg: 'User created', user });
  }

  if (req.method === 'GET') {
    connectToDatabase();
    const users = await User.find();
    res.status(200).json({ msg: 'Users fetched', users });
  }
}
