import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className="w-full flex justify-center bg-slate-200">
      <div className="w-full md:flex">
        <Navbar />
        <main className="m-4 md:w-4/5 p-4 mx-auto max-w-5xl">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
