import React from 'react';
import useTheme from '../../hooks/useTheme';

import styles from './styles.module.scss';

const Home = (): JSX.Element => {
  const theme = useTheme();

  return (
    <div className="container">
      <h1 className={styles.header}>
        Taylor Allen, fullstack software engineer and full-time learner
      </h1>
      <p
        className={
          theme === 'dark'
            ? styles.headerDescriptionDark
            : styles.headerDescription
        }>
        I enjoy experimenting with different tech stacks and contributing to
        open source projects.
      </p>
    </div>
  );
};

export default Home;
