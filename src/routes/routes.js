import config from '~/config';

//Pages
import Friends from '~/Components/Pages/Friends';
import Home from '~/Components/Pages/Home';
import Videos from '~/Components/Pages/Videos';
import MarketPlace from '~/Components/Pages/MarketPlace';
import Gaming from '~/Components/Pages/Gaming';

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.friends, component: Friends },
  { path: config.routes.videos, component: Videos },
  { path: config.routes.marketplace, component: MarketPlace },
  { path: config.routes.gaming, component: Gaming },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
