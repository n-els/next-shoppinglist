import React from 'react';
import Navigation from './Navigation';
import { MdShoppingCart } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-primary p-6 flex justify-between items-center">
      <div className="flex items-center text-white gap-2">
        <MdShoppingCart size="1.5rem" />
        <h1 className="font-extrabold text-xl md:text-2xl">EinkaufsGenie</h1>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
