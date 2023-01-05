import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../utils/db';
import { verifyPassword } from '../../../utils/auth';
import User from '../../../models/userModel';
export const authOptions = {
  // Configure one or more authentication providers
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        connectToDatabase();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('Kein Konto mit dieser E-Mail-Adresse gefunden!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error('Passwort stimmt nicht überein!');
        }

        return { email: user.email, listID: user.list };
      },
    }),
  ],
};
export default NextAuth(authOptions);
