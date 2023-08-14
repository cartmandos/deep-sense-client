import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Analysis from './pages/Analysis'
import LandingPage from './pages/LandingPage'
import ReportForm from './pages/ReportForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/report',
    element: <ReportForm />,
  },
  {
    path: '/analysis',
    element: <Analysis />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
