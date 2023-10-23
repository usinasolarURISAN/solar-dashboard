import React, { useContext } from 'react';
import { DrawableMenuItem, Header, PageWrapper } from '~/components';
import { ThemeContext } from '~/contexts';
import {
  MenuSubTitle,
  MenuSubTitleWrapper,
  MenuWrapper,
  OptionsWrapper,
} from './styles';

const Config: React.FC = () => {
  const { changeThemeChoice, themeChoice } = useContext(ThemeContext);
  const menuOptions: DrawableMenuItem[] = [
    {
      icon: 'sun',
      onCLick: () => changeThemeChoice('light'),
      text: 'Claro',
      active: themeChoice === 'light',
    },
    {
      icon: 'moon',
      onCLick: () => changeThemeChoice('dark'),
      text: 'Escuro',
      active: themeChoice === 'dark',
    },
    {
      icon: 'devices',
      onCLick: () => changeThemeChoice('device'),
      text: 'Sincronizar com sistema',
      active: themeChoice === 'device',
    },
  ];

  return (
    <PageWrapper>
      <Header />
      <MenuWrapper>
        <MenuSubTitleWrapper>
          <MenuSubTitle>Aparência</MenuSubTitle>
          <OptionsWrapper>
            {menuOptions.map(options => (
              <DrawableMenuItem
                options={options}
                key={options.icon + options.text}
              />
            ))}
          </OptionsWrapper>
        </MenuSubTitleWrapper>
      </MenuWrapper>
    </PageWrapper>
  );
};

export default Config;
