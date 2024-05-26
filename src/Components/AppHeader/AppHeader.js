import HeaderAccount from './HeaderAccount';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import styles from './AppHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AppHeader() {
  return (
    <div className={cx('AppHeader')}>
      <HeaderSearch />
      <HeaderNav />
      <HeaderAccount />
    </div>
  );
}

export default AppHeader;
