import React from 'react';
import Header from '../components/Header';

const Search = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Search;
