import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';

const UserProfilePage = () => {
  const session = useSession();
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  console.log(session);

  return (
    <div>
      <p>Du bist als {session.data.user.email} eingeloggt</p>
      <button onClick={() => setIsMessageVisible(!isMessageVisible)}>
        Toggle Message
      </button>
      <div
        className={`${
          isMessageVisible ? 'opacity-100' : 'opacity-0'
        } duration-300 ease-in-out`}
      >
        Testnachricht
      </div>
    </div>
  );
};

export default UserProfilePage;

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

  return {
    props: {
      session: {
        user: { email: session.user.email },
        expires: session.expires,
      },
    },
  };
}
