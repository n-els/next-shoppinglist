import { connectToDatabase } from '../../../utils/db';
import { hashPassword } from '../../../utils/auth';
import User from '../../../models/userModel';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const emailToLower = email.toLowerCase();

    console.log(email, password);

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 8
    ) {
      return res.status(422).json({
        message: 'Invalid input - password should be longer than 7 characters.',
      });
    }

    await connectToDatabase();
    const existingUser = await User.findOne({ email: emailToLower });

    if (existingUser) {
      console.log(existingUser);
      return res.status(422).json({
        message: 'Diese eMail-Adresse wurde bereits verwendet!',
        email: emailToLower,
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = User.create({ email: emailToLower, password: hashedPassword });

    res
      .status(201)
      .json({ message: 'Benutzerkonto wurde erfolgreich angelegt' });
  }
};

export default handler;
