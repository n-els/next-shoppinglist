import React from 'react';

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" className="flex flex-col m-4">
      <input
        type="email"
        name=""
        id=""
        placeholder="eMail-Adresse.."
        className="mb-4 p-2"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Passwort.."
        className="mb-4 p-2"
      />
      <button type="submit" className="mb-4 bg-slate-600 p-2 text-white">
        registrieren
      </button>
    </form>
  );
};

export default RegisterForm;
