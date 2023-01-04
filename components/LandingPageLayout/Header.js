import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="p-6 flex justify-between items-center">
      <h1 className="text-white font-extrabold text-2xl ">EinkaufsGenie</h1>
      <Navigation />
    </header>
  );
};

export default Header;
