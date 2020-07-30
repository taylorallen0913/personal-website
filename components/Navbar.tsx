import { useState } from 'react';
import Link from 'next/link';
import useTheme from '../hooks/useTheme';
import ThemeToggler from './ThemeToggler';

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const [collapsedMenuOpen, setCollapsedMenuOpen] = useState<boolean>(false);

  return (
    <div id="navbar">
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
              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>
      {collapsedMenuOpen && (
        <div className="nav-dropdown-container">
          <div className="nav-dropdown">
            <Link href="/">
              <p>Home</p>
            </Link>
          </div>
          <div className="nav-dropdown">
            <Link href="/blog">
              <p>Blog</p>
            </Link>
          </div>
          <div className="nav-dropdown">
            <p>Contact</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
