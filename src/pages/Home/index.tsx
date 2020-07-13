import React from 'react';
import useTheme from '../../hooks/useTheme';

import './styles.scss';

const Home = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div className="container">
      <h1 className="home-header">
        Taylor Allen, fullstack software engineer and full-time learner
      </h1>
      <p
        className={
          theme === 'dark'
            ? 'home-header-description-dark'
            : 'home-header-description'
        }>
        I enjoy experimenting with different tech stacks and contributing to
        open source projects.
      </p>
    </div>
  );
};

export default Home;
