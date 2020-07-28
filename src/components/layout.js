import React from 'react';
import '../assets/css/styles.css';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
