import { Outlet } from 'react-router-dom';

import Header from './Header';

const AppLayout = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <Header />
      <Outlet />
      <footer>Footer component</footer>
    </div>
  );
};

export default AppLayout;
