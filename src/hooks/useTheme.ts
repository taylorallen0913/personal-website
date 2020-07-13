import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext.mode;
};

export default useTheme;
