import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../assets/images/profile-picture.jpeg';

import LinkedIn from '../../assets/icons/linkedin.svg';
import GitHub from '../../assets/icons/github.svg';

import './styles.scss';

const Navbar = (): JSX.Element => {
  const [collapsedMenuOpen, setCollapsedMenuOpen] = useState<boolean>(false);

  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <img
          src={ProfilePicture}
          alt="Profile Pic"
          className="profile-picture"
        />
        <button
          onClick={() => setCollapsedMenuOpen(!collapsedMenuOpen)}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {collapsedMenuOpen ? (
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-up-circle-fill"
              fill="#B4B8C5"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
              />
            </svg>
          ) : (
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-down-circle-fill"
              fill="#B4B8C5"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
              />
            </svg>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <a
              href="https://www.linkedin.com/in/taylorallen0913/"
              rel="noopener noreferrer"
              target="_blank">
              <img src={LinkedIn} alt="LinkedIn Logo" className="nav-logo" />
            </a>
            <a
              href="https://www.github.com/taylorallen0913/"
              rel="noopener noreferrer"
              target="_blank">
              <img src={GitHub} alt="GitHub Logo" className="nav-logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
