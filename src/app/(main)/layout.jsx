import React from 'react';
import Navbar from './navbar/page';

const layout = ({children}) => {
  return (
    <div>
      {children}
      <Navbar></Navbar>
    </div>
  );
};

export default layout;