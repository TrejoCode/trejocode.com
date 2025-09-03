import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import type { TypeLayoutProps } from './Layout.model';

const Layout = ({ children }: TypeLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
