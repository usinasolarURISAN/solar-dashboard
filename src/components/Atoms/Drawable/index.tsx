import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { URILogo } from '~/assets';
import { MenuContext } from '~/contexts';
import DrawableMenuItem from '../DrawableMenuItem';
import {
  HideMenu,
  HideMenuWrapper,
  Logo,
  LogoWrapper,
  MenuOptionsWrapper,
  Wrapper,
} from './styles';

type Props = {
  options?: DrawableMenuItem[];
};

const Drawable: React.FC<Props> = () => {
  const history = useHistory();
  const { isShowing, onChangeShowing } = useContext(MenuContext);

  const handleMenuOptionPress = (path?: Routes) => {
    if (path) {
      history.push(path);
      onChangeShowing();
    }
  };

  const defaultMenuOptions: DrawableMenuItem[] = [
    {
      icon: 'dashboard',
      text: 'Dashboard',
      onCLick: () => handleMenuOptionPress('/'),
    },
    {
      icon: 'devices',
      text: 'Dispositivos',
      onCLick: () => handleMenuOptionPress('/devices'),
    },
    {
      icon: 'gear',
      text: 'Configurações',
      onCLick: () => handleMenuOptionPress('/config'),
    },
    {
      icon: 'info',
      text: 'Sobre',
      onCLick: () => handleMenuOptionPress('/about'),
    },
  ];

  return (
    <Wrapper isShowing={isShowing}>
      <LogoWrapper>
        <Logo src={URILogo} />
      </LogoWrapper>
      <MenuOptionsWrapper>
        {defaultMenuOptions.map(options => (
          <DrawableMenuItem
            options={options}
            key={options.icon + options.text}
          />
        ))}
      </MenuOptionsWrapper>
      <HideMenuWrapper onClick={onChangeShowing}>
        <HideMenu />
      </HideMenuWrapper>
    </Wrapper>
  );
};

export default Drawable;
