import React, { useState } from 'react';

const Menu = ({ links }) => {
  return (
    <div className="hidden sm:block">
      <ul className="flex text-white">
        {links.map((link) => (
          <li
            key={link.name}
            className="px-4  text-md font-semibold hover:text-secondary hover:text-underline"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Menu;
