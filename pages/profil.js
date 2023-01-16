import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Head from 'next/head';

const UserProfilePage = () => {
  const session = useSession();

  console.log(session);

  return (
    <section>
      <Head>
        <title>Mein Profil - EinkaufsGenie</title>
      </Head>
      <h2 className="text-xl font-bold mb-4 text-primary">Mein Profil</h2>
      <p>Herzlich Willkommen, {session.data.user.email}</p>
      <p className="mt-4">
        Die Profilübersicht befindet sich derzeit noch im Aufbau. <br /> In
        Zukunft wirst du hier dein Profil verwalten und Favoriten anlegen
        können.
      </p>
      <div className="sm:flex flex-wrap">
        <div className="bg-primary p-4 mt-4 mr-4 text-white opacity-25 min-w-[200px] rounded-md">
          <h3>Passwort ändern</h3>
        </div>
        <div className="bg-primary p-4 mt-4 mr-4 text-white opacity-25 min-w-[200px] rounded-md">
          <h3>Lieblingsprodukte verwalten</h3>
        </div>
        <div className="bg-primary p-4 mt-4 mr-4 text-white opacity-25 min-w-[200px] rounded-md">
          <h3>Lieblingsläden verwalten</h3>
        </div>
        <div className="bg-primary p-4 mt-4 mr-4 text-white opacity-25 min-w-[200px] rounded-md">
          <h3>Benutzerkonto löschen</h3>
        </div>
      </div>
    </section>
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
