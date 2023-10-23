export const detectSystemTheme = (theme: 'dark' | 'light'): boolean =>
  window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;

export const handleColorThemeChoice = (
  themeChoice: ThemeChoices,
): ColorThemeDefaultOptions => {
  if (themeChoice === 'device') {
    const isLightMode = detectSystemTheme('light');
    return isLightMode ? 'light' : 'dark';
  }

  return themeChoice;
};
