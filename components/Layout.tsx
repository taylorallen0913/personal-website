import Navbar from './Navbar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
