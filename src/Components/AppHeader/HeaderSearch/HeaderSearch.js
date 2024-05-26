import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import { Logo } from '~/Components/Icons';

const cx = classNames.bind(styles);

function HeaderSearch() {
  return (
    <Space size={2} direction="horizontal">
      {/* <FacebookFilled className={cx('headerLogo')} /> */}
      <Logo className={cx('facebook-logo')} />

      <div className={cx('headerSearch')}>
        <SearchOutlined className={cx('searchIcon')} />
        <Input
          className={cx('headerInput')}
          placeholder="Search Facebook"
          variant="borderless"
        />
      </div>
    </Space>
  );
}

export default HeaderSearch;
