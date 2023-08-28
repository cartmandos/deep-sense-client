import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@ui/layouts/AppLayout';
import { LandingPage } from '@pages/LandingPage';
import ReportForm from '@pages/Report/ReportForm';
import Analysis from '@pages/Analysis';

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
        element: <ReportForm />,
      },
      {
        path: ANALYSIS,
        element: <Analysis />,
      },
    ],
  },
]);

export default Router;
