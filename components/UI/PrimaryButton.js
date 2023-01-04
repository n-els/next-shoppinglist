import React from 'react';

const PrimaryButton = ({ children, link }) => {
  return (
    <a
      className="bg-gradient-to-t from-secondary to-orange-400 py-2 px-4 hover:from-orange-700 hover:to-secondary
       text-white text-xl rounded-sm tracking-wider my-4 shadow-2xl"
      href={link}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
