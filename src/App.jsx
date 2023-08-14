import Analysis from 'pages/Analysis'
import LandingPage from 'pages/LandingPage'
import ReportForm from 'pages/ReportForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
