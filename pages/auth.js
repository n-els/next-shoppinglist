import React from 'react';
import AuthForm from '../components/AuthForm';
import Head from 'next/head';

const RegisterPage = () => {
  return (
    <div className="mt-10">
      <Head>
        <title>EinkaufsGenie - Authentifizieren</title>
      </Head>
      <section className="flex flex-col mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-primary mb-4 md:text-center">
          Authentifizierung
        </h1>
        <p className="text-sm md:text-center">
          Du musst eingeloggt sein, um die Webanwendung von EinkaufsGenie zu
          nutzen.
          <br /> Solltest du noch kein Benutzerkonto besitzen, klicke bitte auf
          den Link unter dem Einloggen-Button.
        </p>
        <AuthForm />
      </section>
    </div>
  );
};

export default RegisterPage;
