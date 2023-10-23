import React, { FC, useContext } from 'react';
import { useLocation } from 'react-router';
import { MenuContext } from '~/contexts';
import { ROUTE_HEADER_NAMES } from '~/utils';
import {
  CustomIcon,
  HeaderTitle,
  IconWrapper,
  InnerWrapper,
  TitleWrapper,
  Wrapper,
} from './styles';

type HeaderProps = {
  title?: string;
  onHeaderIconPress?: () => void;
};

const Header: FC<HeaderProps> = ({
  title = 'Dashboard',
  onHeaderIconPress,
}) => {
  const { onChangeShowing } = useContext(MenuContext);
  const { pathname } = useLocation();
  const handleIconPress = () => {
    if (onHeaderIconPress) {
      onHeaderIconPress();
      return;
    }

    onChangeShowing();
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <TitleWrapper>
          <HeaderTitle>
            {ROUTE_HEADER_NAMES[pathname as Routes] || title}
          </HeaderTitle>
        </TitleWrapper>
        <IconWrapper>
          <CustomIcon onClick={handleIconPress} />
        </IconWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
