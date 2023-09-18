import { createContext, useState } from 'react';
import CustomCursor from '~/components/CustomCursor';

export type CursorLookType =
  | 'slider-hover'
  | 'slider-drag'
  | 'text'
  | 'link'
  | 'hamburger'
  | 'default';
export type CustomCursorType = {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
};

const CustomCursorContext = createContext<CustomCursorType>({
  type: 'default',
  setType: () => {},
});

interface CustomCursorContextProviderProps {
  children?: React.ReactNode;
}

export const CustomCursorContextProvider: React.FC<
  CustomCursorContextProviderProps
> = ({ children }) => {
  const [type, setType] = useState<CursorLookType>('default');

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorContext;
