import { useState } from 'react';
import Link from 'next/link';
import useTheme from '../hooks/useTheme';
import ThemeToggler from './ThemeToggler';

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const [collapsedMenuOpen, setCollapsedMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <img
            src="/profile-picture.jpeg"
            alt="Profile Pic"
            className="profile-picture"
          />
          <span
            onClick={() => setCollapsedMenuOpen(!collapsedMenuOpen)}
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {theme === 'dark' ? (
              <img src="/hamburger-light.svg" alt="hamburger" />
            ) : (
              <img src="/hamburger.svg" alt="hamburger" />
            )}
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 nav-links">
              <li className="nav-item">
                <Link href="/" passHref>
                  <a
                    className={
                      theme === 'dark'
                        ? 'active nav-link-dark'
                        : 'active nav-link-light'
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" passHref>
                  <a
                    className={
                      theme === 'dark'
                        ? 'active nav-link-dark'
                        : 'active nav-link-light'
                    }
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" passHref>
                  <a
                    className={
                      theme === 'dark'
                        ? 'active nav-link-dark'
                        : 'active nav-link-light'
                    }
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <div className="my-2 my-lg-0 nav-right-side">
              <div className="theme-toggler">
                <ThemeToggler />
              </div>
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
            </div>
          </div>
        </div>
      </nav>
      {collapsedMenuOpen && (
        <div className="nav-dropdown-container">
          <div className="nav-dropdown">
            <p>Home</p>
          </div>
          <div className="nav-dropdown">
            <p>Blog</p>
          </div>
          <div className="nav-dropdown">
            <p>Contact</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
