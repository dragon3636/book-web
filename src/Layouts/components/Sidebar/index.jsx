import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
const Sidebar = () => {
  return (
    <div className={cx('container-navigator')}>
      <div className={cx('scroll')}>
        <div className={cx('wrapper')}>
          <nav>
            <ul>
              <li>
                <div>
                  <a href="#">
                    <span>For You</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
