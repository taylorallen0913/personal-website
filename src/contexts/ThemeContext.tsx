import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../interfaces';

export const ThemeContext = createContext<any>(null);

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
};

interface Props {
  children: JSX.Element[];
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setThemeInternal] = useState(getInitialTheme);

  const setTheme = (theme: Theme) => {
    setThemeInternal(theme);
  };

  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
