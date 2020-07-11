import React from 'react';

import './styles.scss';

const Home = (): JSX.Element => {
  return (
    <div className="container home-container">
      <h1 className="home-header">
        Taylor Allen, fullstack software engineer and full-time learner
      </h1>
      <p className="home-header-description">
        I enjoy building projects with React + Typescript and contributing to
        open source projects.
      </p>
    </div>
  );
};

export default Home;
