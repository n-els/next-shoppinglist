import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="md:flex md:flex-col">
      <Header />
      <main className="bg-white m-3 sm:m-2 py-8 md:p-16 shadow-sm rounded-md">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
