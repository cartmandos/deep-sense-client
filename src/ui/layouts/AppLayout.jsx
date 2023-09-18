import { Outlet } from 'react-router-dom';

import PageWrapper from './PageWrapper';
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default AppLayout;
