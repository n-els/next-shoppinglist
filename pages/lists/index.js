import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { connectToDatabase } from '../../utils/db';
import React from 'react';

import User from '../../models/userModel';

const List = () => {
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

  if (session) {
    connectToDatabase();
    const user = await User.findOne({ email: session.user.email });
    console.log(user);
  }

  return {
    props: {
      session: {
        user: { email: session.user.email },
        expires: session.expires,
      },
    },
  };
}
