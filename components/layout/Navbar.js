import Link from 'next/link';
import React, { useState } from 'react';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Einkaufsliste
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleOpen}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-green-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <NavbarLink to={'/'} clickHandler={toggleOpen}>
            Start
          </NavbarLink>
          <NavbarLink
            to={'/lists/6391cd264c9532e00244e415'}
            clickHandler={toggleOpen}
          >
            Meine Liste
          </NavbarLink>

          <NavbarLink to={'/register'} clickHandler={toggleOpen}>
            Registrieren
          </NavbarLink>
        </div>
        <div>
          <a
            href="http://github.com/n-els"
            target="_blank"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
