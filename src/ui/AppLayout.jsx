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
      <footer>pfooter component</footer>
    </div>
  )
}

export default AppLayout
