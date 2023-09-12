import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@ui/layouts/AppLayout';
import Landing from '@pages/LandingPage/Landing';
import Report from '@pages/ReportPage/Report';
import Analytics from '@pages/AnalyticsPage/Analytics';

import { ROOT, REPORT, ANALYSIS } from './paths';

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROOT,
        element: <Landing />,
      },
      {
        path: REPORT,
        element: <Report />,
      },
      {
        path: ANALYSIS,
        element: <Analytics />,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
]);

export default Router;
