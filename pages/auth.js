import React from 'react';
import AuthForm from '../components/AuthForm';
import Head from 'next/head';

const RegisterPage = () => {
  return (
    <div className="mt-10">
      <Head>
        <title>Registrieren</title>
      </Head>
      <AuthForm />
    </div>
  );
};

export default RegisterPage;
