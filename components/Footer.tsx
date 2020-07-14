import useTheme from '../hooks/useTheme';

const Footer = () => {
  const theme = useTheme();

  return (
    <div className={theme === 'dark' ? 'footer-dark' : 'footer'}>
      <h1 className="footer-text">footer</h1>
      <p className="footer-copyright">© 2020 Taylor Allen</p>
    </div>
  );
};

export default Footer;
