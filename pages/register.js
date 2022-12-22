import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Head from 'next/head';

const RegisterPage = () => {
  return (
    <div className="mt-10">
      <Head>
        <title>Registrieren</title>
      </Head>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
