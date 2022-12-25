import React from 'react';

const Layout = (props) => {
  return (
    <div
      className={`
            bg-green-100
            h-screen
            flex
            items-center
            sm:justify-center
            flex-col
          `}
    >
      <h1 className="text-4xl font-bold text-center text-green-900 drop-shadow-md mt-12 mb-8 sm:mb-2">
        next-shoppinglist
      </h1>
      <main className="md:mt-4 mx-6 md:w-3/6">{props.children}</main>
    </div>
  );
};

export default Layout;
