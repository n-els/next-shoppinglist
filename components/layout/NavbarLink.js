import Link from 'next/link';
import React from 'react';

const NavbarLink = ({ children, to, clickHandler }) => {
  return (
    <Link
      href={to}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      onClick={clickHandler}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
