import { Outlet } from 'react-router-dom'

import Header from './Header'

const AppLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Outlet />
      <footer>Footer component</footer>
    </div>
  )
}

export default AppLayout
