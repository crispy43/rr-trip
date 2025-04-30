import { Outlet } from 'react-router';

import Footer from './components/footer';
import Header from './components/header';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
