import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import ThemeToggler from '../ThemeToggler';

import ProfilePicture from '../../assets/images/profile-picture.jpeg';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import LinkedInDark from '../../assets/icons/linkedin-dark.svg';
import GitHub from '../../assets/icons/github.svg';
import GitHubDark from '../../assets/icons/github-dark.svg';

import './styles.scss';

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const [collapsedMenuOpen, setCollapsedMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <img
          src={ProfilePicture}
          alt="Profile Pic"
          className="profile-picture"
        />
        <a
          href="https://www.github.com/taylorallen0913/"
          rel="noopener no"
          onClick={() => setCollapsedMenuOpen(!collapsedMenuOpen)}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {collapsedMenuOpen ? (
            <img src={ArrowUp} alt="arrow up" />
          ) : (
            <img src={ArrowDown} alt="arrow down" />
          )}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item">
              <Link
                className={
                  theme === 'dark'
                    ? 'nav-link-dark active'
                    : 'nav-link-light active'
                }
                aria-current="page"
                to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  theme === 'dark'
                    ? 'nav-link-dark active'
                    : 'nav-link-light active'
                }
                aria-current="page"
                to="/">
                Contact
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
              target="_blank">
              <img
                src={theme === 'dark' ? LinkedInDark : LinkedIn}
                alt="LinkedIn Logo"
                className="nav-logo active"
              />
            </a>
            <a
              href="https://www.github.com/taylorallen0913/"
              rel="noopener noreferrer"
              target="_blank">
              <img
                src={theme === 'dark' ? GitHubDark : GitHub}
                alt="GitHub Logo"
                className="nav-logo active"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
