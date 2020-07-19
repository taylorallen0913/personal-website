import useTheme from '../hooks/useTheme';

const Footer = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div className={theme === 'dark' ? 'footer-dark' : 'footer'}>
      <div className="container">
        <span className="footer-content">
          <a className={theme === 'dark' ? 'footer-text' : 'footer-text-dark'}>
            Copyright © 2020 Taylor Allen
          </a>
          <span className="footer-right">
            <a
              href="https://www.linkedin.com/in/taylorallen0913/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={theme === 'dark' ? '/linkedin-dark.svg' : '/linkedin.svg'}
                alt="LinkedIn Logo"
                className="active nav-logo"
              />
            </a>
            <a
              href="https://www.github.com/taylorallen0913/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={theme === 'dark' ? '/github-dark.svg' : '/github.svg'}
                alt="GitHub Logo"
                className="active nav-logo"
              />
            </a>
            <a
              href="https://twitter.com/taylorallen0913"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={theme === 'dark' ? '/twitter-dark.svg' : '/twitter.svg'}
                alt="Twitter Logo"
                className="active nav-logo"
              />
            </a>
            <a href="mailto: taylorallen0913@gmail.com">
              <img
                src={theme === 'dark' ? '/email-dark.svg' : '/email.svg'}
                alt="Email Logo"
                className="active nav-logo"
              />
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
