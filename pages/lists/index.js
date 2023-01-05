import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { connectToDatabase } from '../../utils/db';
import React from 'react';

import User from '../../models/userModel';

const List = ({ email, products }) => {
  console.log(email, products);
  return (
    <div>
      <h1>Meine Liste</h1>
    </div>
  );
};

export default List;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  connectToDatabase();
  const user = await User.findOne({ email: session.user.email }).populate(
    'list'
  );
  console.log(user);

  return {
    props: {
      email: session.user.email,
      products: user.list.products,
    },
  };
}
