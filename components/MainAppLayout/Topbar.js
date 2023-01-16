import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import NavbarLink from './NavbarLink';

const Topbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();

  console.log(session.status);

  console.log(links);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isAuthJSX = links.authLinks.map((link) => {
    return (
      <NavbarLink key={link.name} to={link.href} clickHandler={toggleOpen}>
        {link.name}
      </NavbarLink>
    );
  });

  const isNotAuthJSX = links.unAuthLinks.map((link) => {
    return (
      <NavbarLink key={link.name} to={link.href} clickHandler={toggleOpen}>
        {link.name}
      </NavbarLink>
    );
  });

  return (
    <nav className="flex items-center justify-between flex-wrap md:hidden bg-primary p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/liste" className="font-semibold text-xl tracking-tight">
          EinkaufsGenie
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleOpen}
          className="flex items-center px-3 py-2 border rounded text-secondary border-secondary hover:text-white hover:border-white"
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
        } duration-300 ease-in-out`}
      >
        <div className="text-sm lg:flex-grow">
          <NavbarLink to={'/'} clickHandler={toggleOpen}>
            Start
          </NavbarLink>
          <NavbarLink to="mailto:nels@tuta.io">Kontakt</NavbarLink>
          {session.status === 'authenticated' ? isAuthJSX : isNotAuthJSX}
          <NavbarLink logout>Logout</NavbarLink>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
