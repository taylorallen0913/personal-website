import { useState, useContext, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from '../contexts/ThemeContext';

const Moon = () => <span className="toggle moon" />;
const Sun = () => <span className="toggle sun" />;

interface Props {
  themeInLocalStorage?: {
    mode: string;
  };
}

const ThemeToggler = ({ themeInLocalStorage }: Props): JSX.Element => {
  const [toggled, setToggled] = useState(
    themeInLocalStorage && themeInLocalStorage.mode === 'dark',
  );
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const themeFromLocalStorage = JSON.parse(localStorage.getItem('theme'));
    setToggled(themeFromLocalStorage && themeFromLocalStorage.mode === 'dark');
    setLoaded(true);
  }, []);

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

interface StaticProps {
  props: {
    themeInLocalStorage: {
      mode: string;
    };
  };
}

export const getStaticProps = (): StaticProps => {
  const themeInLocalStorage = JSON.parse(localStorage.getItem('theme'));
  return themeInLocalStorage
    ? {
        props: { themeInLocalStorage },
      }
    : null;
};

export default ThemeToggler;
