import { createContext, useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Theme } from '../interfaces';
import style from 'styled-theming';

export const ThemeContext = createContext<any>(null);

interface Props {
  children: JSX.Element[];
}

export const ThemeContextProvider = ({ children }: Props): JSX.Element => {
  const [theme, setThemeInternal] = useState<any>();
  const [loaded, setLoaded] = useState(false);

  const getBackground = style('mode', {
    light: '#F8F8F8',
    dark: '#202020',
  });

  const getForeground = style('mode', {
    light: 'black',
    dark: 'white',
  });

  const GlobalStyle = createGlobalStyle<any>`
  body { 
    background-color: ${getBackground};
    color: ${getForeground};
  } 
  `;

  useEffect(() => {
    setThemeInternal({ mode: 'dark' });
    setLoaded(true);
  }, []);

  const setTheme = (theme: Theme) => {
    setThemeInternal(theme);
  };

  return (
    <>
      {loaded && (
        <ThemeContext.Provider value={{ setTheme, theme: theme.mode }}>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </ThemeContext.Provider>
      )}
    </>
  );
};

export default ThemeContextProvider;
