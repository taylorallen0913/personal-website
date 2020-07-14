import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = (): any => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export default useTheme;
