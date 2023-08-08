import React from 'react';
import { useDropdown } from './dropdown-context';

const List = ({ children }) => {
  const { isShowDropdown } = useDropdown();

  if (!isShowDropdown) return null;

  console.log(isShowDropdown);
  return (
    <div className="dropdown__list absolute left-0 right-0 bg-white border border-slate-100 rounded-xl top-full">
      {children}
    </div>
  );
};

export default List;
