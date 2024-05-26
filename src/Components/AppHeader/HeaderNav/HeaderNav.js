import classNames from 'classnames/bind';
import {
  GamingIcon,
  GamingIconActive,
  HomeIcon,
  HomeIconActive,
  MarketPlaceIcon,
  MarketPlaceIconActive,
  UserGroupIcon,
  UserGroupIconActive,
  VideoIcon,
  VideoIconActive,
} from '~/Components/Icons';

import styles from './HeaderNav.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { Button, Tooltip } from 'antd';

const cx = classNames.bind(styles);

function HeaderNav() {
  return (
    <div className={cx('wrapper')}>
      <Menu>
        <Tooltip
          title="Home"
          placement="bottom"
          overlayStyle={{ backgroundColor: '#c6c6c6', color: '#676868' }}
        >
          <MenuItem to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
        </Tooltip>
        <MenuItem
          to={config.routes.friends}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupIconActive />}
        />
        <MenuItem to={config.routes.videos} icon={<VideoIcon />} activeIcon={<VideoIconActive />} />
        <MenuItem
          to={config.routes.marketplace}
          icon={<MarketPlaceIcon />}
          activeIcon={<MarketPlaceIconActive />}
        />
        <MenuItem
          to={config.routes.gaming}
          icon={<GamingIcon />}
          activeIcon={<GamingIconActive />}
        />
      </Menu>
    </div>
  );
}

export default HeaderNav;

// const routes = [
//   {
//     key: '/',
//   },
//   {
//     key: '/user',
//   },
//   {
//     key: '/videos',
//   },
//   {
//     key: '/marketplace',
//   },
//   {
//     key: '/gaming',
//   },
// ]

// const [to, setTo] = useState('/');

// useEffect(() => {
//   const path = location.pathname;
//   setTo(path);
// }, [location.pathname]);
