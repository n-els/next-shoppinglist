import React, { useState } from 'react';
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block sm:hidden">
      <div
        className="text-white"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{isOpen ? <HiOutlineX /> : <HiOutlineMenu />} </p>
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-2/3 h-[90%] bg-primary absolute left-0 top-14 text-orange-100 font-semibold border-r border-green-900`}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className="py-4 pl-6 text-sm border-b border-green-900"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
        <li>
          <a href="http://github.com/n-els" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
