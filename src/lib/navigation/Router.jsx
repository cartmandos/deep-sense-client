import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@ui/layouts/AppLayout';
import { LandingPage } from '@pages/LandingPage';
import { ReportPage } from '@pages/Report';
import Analysis from '@pages/Analysis/Analysis';

import { ROOT, REPORT, ANALYSIS } from './paths';

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROOT,
        element: <LandingPage />,
      },
      {
        path: REPORT,
        element: <ReportPage />,
      },
      {
        path: ANALYSIS,
        element: <AnalyticsPage />,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
]);

export default Router;
