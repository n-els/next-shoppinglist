import React, { useState } from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const links = [
    { name: 'Startseite', href: '/' },
    { name: 'Anmelden', href: '/auth' },
    { name: 'Wieso diese App?', href: '/about' },
    {
      name: 'Kontakt',
      href: 'mailto:nels@tuta.io?subject=Kontaktanfrage Einkaufsgenie',
    },
  ];

  return (
    <nav>
      <MobileMenu links={links} />
      <Menu links={links} />
    </nav>
  );
};

export default Navigation;
