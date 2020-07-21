import useTheme from '../hooks/useTheme';

const Footer = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div className={theme === 'dark' ? 'footer-dark' : 'footer'}>
      <div className="container">
        <div className="footer-top">
          <span className="footer-content">
            <h2 className="footer-name">Taylor Allen</h2>
            <div className="footer-right footer-logos">
              <a
                href="https://www.linkedin.com/in/taylorallen0913/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={
                    theme === 'dark' ? '/linkedin-dark.svg' : '/linkedin.svg'
                  }
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
            </div>
          </span>
        </div>
        <hr />
        <div className="footer-bottom">
          <span className="footer-content">
            <div className="footer-right">
              <p>Copyright © 2020 Taylor Allen</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
