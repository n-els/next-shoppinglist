import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="w-full flex justify-center bg-slate-200">
      <div className="w-full">
        <Navbar />
        <main className="m-4 md:w-4/5 mx-auto p-4">{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
