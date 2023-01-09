import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome, AiFillMail } from 'react-icons/ai';
import NavbarLink from './NavbarLink';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Navbar = () => {
  const links = {
    links: [
      { name: 'Startseite', href: '/' },
      { name: 'Kontakt', href: '/kontakt' },
    ],
    unAuthLinks: [{ name: 'Anmelden', href: '/auth' }],
    authLinks: [
      { name: 'Meine Einkaufsliste', href: '/lists' },
      { name: 'Mein Profil', href: '/profil' },
    ],
  };

  return (
    <>
      <Topbar links={links} />
      <Sidebar links={links} />
    </>
  );
};

export default Navbar;
