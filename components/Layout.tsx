import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
