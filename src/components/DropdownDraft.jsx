import { useState } from 'react';
const countries = ['Vietname', 'Thailand', 'China', 'Japan'];
import PropTypes from 'prop-types';
const Dropdown = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <div className="w-full max-w-[300px] relative">
      <div
        className="flex items-center justify-between p-5 rounded-lg cursor-pointer border border-slate-100"
        onClick={() => setIsShowDropdown(!isShowDropdown)}
      >
        <span>Select the country</span>
        {isShowDropdown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        )}
      </div>
      {isShowDropdown && (
        <div className="dropdown__list absolute left-0 right-0 bg-white border border-slate-100 rounded-xl top-full">
          {countries.map((item, index) => (
            <span key={index} className="block p-5 bg-white cursor-pointer hover:bg-slate-100">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  haveSearch: PropTypes.bool,
};

export default Dropdown;
