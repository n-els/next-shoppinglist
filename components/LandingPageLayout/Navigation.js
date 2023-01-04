import React, { useState } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const links = [
    { name: 'Startseite', href: '/' },
    { name: 'Wieso diese App?', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <nav>
      <MobileMenu links={links} />
      <Menu links={links} />
    </nav>
  );
};

export default Navigation;
