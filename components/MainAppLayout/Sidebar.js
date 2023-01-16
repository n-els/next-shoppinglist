import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import SidebarLink from './SidebarLink';
const Navbar = ({ links }) => {
  const session = useSession();

  const authLinks = links.authLinks.map((link) => {
    return (
      <SidebarLink key={link.name} link={link.href}>
        {link.name}
      </SidebarLink>
    );
  });

  const unAuthLinks = links.unAuthLinks.map((link) => {
    return (
      <SidebarLink key={link.name} link={link.href}>
        {link.name}
      </SidebarLink>
    );
  });

  const loginStatusMessage = (
    <>
      <p className="mt-8 text-sm">Willkommen,</p>
      <p className="text-xs break-words px-1">{session?.data?.user.email}</p>
    </>
  );

  return (
    <nav className="hidden md:flex sm:flex-col min-h-screen bg-primary min-w-[17%] text-white text-center">
      <a href="/liste" className=" font-bold text-xl mt-4 px-8">
        EinkaufsGenie
      </a>
      <p className="text-xs">Web App v1</p>
      {session.status === 'authenticated' && loginStatusMessage}
      <ul className="min-w-full mt-8">
        {links.links.map((link) => {
          return (
            <SidebarLink key={link.name} link={link.href}>
              {link.name}
            </SidebarLink>
          );
        })}
        {session.status !== 'authenticated' && unAuthLinks}
        {session.status === 'authenticated' && authLinks}
        {session.status === 'authenticated' && (
          <SidebarLink logout>Logout</SidebarLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
