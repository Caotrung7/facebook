import { Route, Routes } from 'react-router-dom';
import Home from '~/Pages/Home';
import Videos from '~/Pages/Videos';
import MarketPlace from '~/Pages/MarketPlace';
import Gaming from '~/Pages/Gaming';
import Friends from '../Pages/Friends';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/friends" element={<Friends />}></Route>
      <Route path="/videos" element={<Videos />}></Route>
      <Route path="/marketplace" element={<MarketPlace />}></Route>
      <Route path="/gaming" element={<Gaming />}></Route>
    </Routes>
  );
}

export default AppRoutes;
