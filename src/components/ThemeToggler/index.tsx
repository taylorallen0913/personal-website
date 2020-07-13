import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import useTheme from '../../hooks/useTheme';
import { ThemeContext } from '../../contexts/ThemeContext';

import './styles.scss';

const ThemeToggler = () => {
  const [toggled, setToggled] = useState(false);
  const setTheme = useContext(ThemeContext);
  const theme = useTheme();

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
    <Switch
      onChange={onToggle}
      checked={toggled}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={25}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
      id="material-switch"
    />
  );
};

export default ThemeToggler;
