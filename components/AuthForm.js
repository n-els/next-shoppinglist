import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (!result.error) {
        router.replace(`/profil`);
      } else {
        setErrorMessage(result.error);
      }
    } else {
      try {
        const res = await axios.post('/api/auth/signup', { ...formData });
        console.log(res);
        router.replace(`/willkommen`);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <>
      <form action="" className="flex flex-col m-4" onSubmit={handleSubmit}>
        {errorMessage ? (
          <p className="text-red-500 font-bold mb-2">{errorMessage}</p>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="eMail-Adresse.."
          className="mb-4 p-2"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Passwort.."
          className="mb-4 p-2"
          minLength="8"
          required
          onChange={handleChange}
        />
        <input
          type="submit"
          className="mb-4 bg-slate-600 p-2 text-white"
          value={isLogin ? 'Login' : 'Registrieren'}
        />
      </form>
      <button
        className="mb-4 bg-green-600 p-2 text-white"
        onClick={switchModeHandler}
      >
        {isLogin ? 'Benutzerkonto anlegen' : 'Bereits registriert?'}
      </button>
    </>
  );
};

export default RegisterForm;
