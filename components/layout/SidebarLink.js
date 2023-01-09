import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';

const SidebarLink = ({ children, link, logout }) => {
  const router = useRouter();
  const isActive = router.asPath === link;

  const signOutHandler = () => {
    signOut({ callbackUrl: '/' });
  };

  if (logout) {
    return (
      <li
        className={` hover:bg-secondary hover:text-primary font-medium min-w-full px-4 py-2 transition-all duration-200 hover:border-r-2 border-white cursor-pointer`}
        onClick={signOutHandler}
      >
        Logout
      </li>
    );
  } else {
    return (
      <li
        className={`flex justify-center items-center hover:bg-secondary hover:text-primary font-medium min-w-full px-4 py-2 transition-all duration-200  ${
          isActive ? 'bg-secondary text-primary border-r-2 border-white' : ''
        } `}
      >
        <Link href={link} className="ml-2">
          {children}
        </Link>
      </li>
    );
  }
};

export default SidebarLink;
