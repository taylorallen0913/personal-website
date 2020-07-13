import React, { useState, useContext } from 'react';
import Toggle from 'react-toggle';
import clsx from 'clsx';
import useTheme from '../../hooks/useTheme';
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './styles.module.scss';

const Moon = () => <span className={clsx(styles.toggle, styles.moon)} />;
const Sun = () => <span className={clsx(styles.toggle, styles.sun)} />;

const getInitialToggleStatus = () => {
  const themeFromLocalStorage = JSON.parse(localStorage.getItem('theme')!);
  return (
    themeFromLocalStorage !== null && themeFromLocalStorage.mode === 'dark'
  );
};

const ThemeToggler = () => {
  const [toggled, setToggled] = useState(getInitialToggleStatus);
  const setTheme = useContext(ThemeContext);
  const theme = useTheme();

  console.log(JSON.parse(localStorage.getItem('theme')!));

  const onToggle = () => {
    setToggled(!toggled);

    switch (theme) {
      case 'dark':
        setTheme({ mode: 'light' });
        localStorage.setItem('theme', JSON.stringify({ mode: 'light' }));
        break;
      case 'light':
        setTheme({ mode: 'dark' });
        localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
        break;
    }
  };

  return (
    <Toggle
      defaultChecked={getInitialToggleStatus()}
      onChange={onToggle}
      icons={{
        checked: <Moon />,
        unchecked: <Sun />,
      }}
    />
  );
};

export default ThemeToggler;
