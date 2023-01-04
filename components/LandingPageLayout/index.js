import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="bg-primary md:w-5/6 md:flex md:flex-col mx-auto">
      <Header />
      <main className="mt-8 md:w-4/5 mx-auto">{props.children}</main>
    </div>
  );
};

export default Layout;
