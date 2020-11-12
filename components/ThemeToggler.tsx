import { useState, useContext, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from '../contexts/ThemeContext';

const Moon = () => <span className="toggle moon" />;
const Sun = () => <span className="toggle sun" />;

interface Props {
  currentTheme?: {
    mode: string;
  };
}

const ThemeToggler = ({ currentTheme }: Props): JSX.Element => {

  const [toggled, setToggled] = useState(
    currentTheme && currentTheme.mode === 'dark',
  );
  const [loaded, setLoaded] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setToggled(currentTheme && currentTheme.mode === 'dark');
    setLoaded(true);
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
            checked: <Sun />,
            unchecked: <Moon />,
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
