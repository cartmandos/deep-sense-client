import { Outlet } from 'react-router-dom'

import Header from './Header'

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <p>main content</p>
        <Outlet />
      </main>
      <footer>Footer component</footer>
    </div>
  )
}

export default AppLayout
