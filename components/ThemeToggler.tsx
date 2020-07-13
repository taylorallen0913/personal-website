import { useState, useContext, useEffect } from 'react';
import Toggle from 'react-toggle';
import useTheme from '../hooks/useTheme';
import { ThemeContext } from '../contexts/ThemeContext';

const Moon = () => <span className="toggle moon" />;
const Sun = () => <span className="toggle sun" />;

const ThemeToggler = (): JSX.Element => {
  const [toggled, setToggled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const setTheme = useContext(ThemeContext);
  const theme = useTheme();

  useEffect(() => {
    const themeFromLocalStorage = JSON.parse(localStorage.getItem('theme'));
    setToggled(themeFromLocalStorage && themeFromLocalStorage.mode === 'dark');
    setLoaded(true);

    return () => {
      if (toggled)
        localStorage.setItem('theme', JSON.stringify({ mode: 'light' }));
      else localStorage.setItem('theme', JSON.stringify({ mode: 'dark' }));
    };
  }, []);

  const onToggle = () => {
    setToggled(!toggled);

    switch (theme) {
      case 'dark':
        setTheme({ mode: 'light' });
        break;
      case 'light':
        setTheme({ mode: 'dark' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {loaded && (
        <Toggle
          checked={toggled}
          onChange={onToggle}
          icons={{
            checked: <Moon />,
            unchecked: <Sun />,
          }}
        />
      )}
    </>
  );
};

export default ThemeToggler;
