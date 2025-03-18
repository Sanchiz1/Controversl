import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import CookiePopup from '../cookiePopup/CookiePopup';

function Layout() {
  return (
    <div className='bg-global-bg text-global-text mx-auto flex min-h-screen max-w-3xl flex-col px-4 pt-16 font-mono text-sm font-normal antialiased sm:px-8'>
      <CookiePopup />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;