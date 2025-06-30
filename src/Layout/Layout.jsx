import Header from '../../src/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main className='max-w-6xl mx-auto px-4'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
