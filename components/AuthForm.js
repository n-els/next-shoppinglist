import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log(formData);

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
        router.replace(`/lists`);
      } else {
        setErrorMessage(result.error);
      }
    } else {
      if (formData.password !== formData.confirmpassword) {
        setErrorMessage('Die Passwörter stimmen nicht überein.');
        return;
      }

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
      <form action="" className="flex flex-col mt-10" onSubmit={handleSubmit}>
        {errorMessage ? (
          <p className="text-red-500 font-bold mb-2">{errorMessage}</p>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="eMail-Adresse eingeben"
          className="mb-5 py-2 px-4 rounded-md outline-none shadow-xl"
          title="Die eMail-Adresse muss im gültigen Format sein."
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Passwort eingeben"
          className="mb-5 py-2 px-4 rounded-md outline-none shadow-xl"
          minLength="8"
          title="Das Passwort muss mindestens 8 Zeichen lang sein."
          required
          onChange={handleChange}
        />
        {isLogin ? null : (
          <input
            type="password"
            name="confirmpassword"
            placeholder="Passwort bestätigen"
            className="mb-6 py-2 px-4 rounded-md outline-none shadow-xl"
            minLength="8"
            title="Das Passwort muss mindestens 8 Zeichen lang sein und mit dem ersten Passwort übereinstimmen."
            required
            onChange={handleChange}
          />
        )}
        <input
          type="submit"
          className=" bg-primary p-2 font-medium text-white rounded-md md:hover:bg-primarydark cursor-pointer transition-all duration-500"
          value={isLogin ? 'Einloggen' : 'Benutzerkonto anlegen'}
        />
      </form>
      <p
        className="mt-2 text-gray-600 text-sm text-center sm:hover:text-primary cursor-alias"
        onClick={switchModeHandler}
      >
        {isLogin
          ? 'Ich möchte ein neues Benutzerkonto anlegen'
          : 'Ich besitze bereits ein Benutzerkonto'}
      </p>
    </>
  );
};

export default RegisterForm;
