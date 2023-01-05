import React from 'react';

const PrimaryButton = ({ children, link }) => {
  return (
    <a
      className="bg-gradient-to-t from-secondary to-orange-400 py-3 px-4 hover:from-orange-700 hover:to-secondary
       text-white text-xl rounded-[6px] tracking-widest shadow-2xl inline-block"
      href={link}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
