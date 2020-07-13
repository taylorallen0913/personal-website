import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../interfaces';

export const ThemeContext = createContext<any>(null);

interface Props {
  children: JSX.Element[];
}

export const ThemeContextProvider = ({ children }: Props): JSX.Element => {
  const [theme, setThemeInternal] = useState<any>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setThemeInternal(JSON.parse(savedTheme));
    else setThemeInternal({ mode: 'light' });
    setLoaded(true);
  }, []);

  const setTheme = (theme: Theme) => {
    setThemeInternal(theme);
  };

  return (
    <>
      {loaded && (
        <ThemeContext.Provider value={setTheme}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      )}
    </>
  );
};

export default ThemeContextProvider;
