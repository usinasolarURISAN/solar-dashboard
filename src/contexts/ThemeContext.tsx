import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Storage } from '~/services';
import {
  colors,
  DEFAULT_COLOR_THEME,
  GlobalStyle,
  handleColorThemeChoice,
  theme as defaultTheme,
} from '~/utils';

type ThemeData = {
  theme: AppTheme;
  themeChoice: ThemeChoices;
  changeThemeChoice: (themeChoice: ThemeChoices) => void;
};

export const ThemeContext = createContext<ThemeData>({} as ThemeData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeChoice, setThemeChoice] = useState<ThemeChoices>(
    (Storage.get('USINA_URI_THEME') as ThemeChoices) || DEFAULT_COLOR_THEME,
  );
  const [theme, setTheme] = useState<AppTheme>({
    ...defaultTheme,
    colors: colors[handleColorThemeChoice(themeChoice)],
  });

  const changeThemeChoice = (themeChoice: ThemeChoices) => {
    Storage.set('USINA_URI_THEME', themeChoice);
    setThemeChoice(themeChoice);
  };

  useEffect(() => {
    const colorTheme = handleColorThemeChoice(themeChoice);
    setTheme({ ...defaultTheme, colors: colors[colorTheme] });
  }, [themeChoice]);

  return (
    <ThemeContext.Provider value={{ theme, themeChoice, changeThemeChoice }}>
      <StyledComponentsThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
