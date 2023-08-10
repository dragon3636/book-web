import React from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classnames.bind(styles);
const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className="loggo">Logo</div>
        <div className="form__search">Search</div>
        <div className="loggin">
          <a href="#">Upload</a>
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
