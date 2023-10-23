import React from 'react';
import { ThemeProvider, MenuProvider } from './index';

export const MainProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <MenuProvider>{children}</MenuProvider>
    </ThemeProvider>
  );
};
