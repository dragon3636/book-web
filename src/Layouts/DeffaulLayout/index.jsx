import Header from '@/Layouts/components/Header';
import Sidebar from '@/Layouts/components/Sidebar';
import React from 'react';

const DeffaulLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DeffaulLayout;
