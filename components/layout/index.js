import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="w-full flex justify-center bg-slate-200">
      <div className="w-full md:w-4/5">
        <Header />
        <main className="m-4">{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
