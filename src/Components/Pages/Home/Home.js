import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import Content from './Content';
import SideMenu from './SideMenu';
import Contact from './Contact';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('home-page')}>
      <SideMenu />
      <Content />
      <Contact />
    </div>
  );
}

export default Home;
