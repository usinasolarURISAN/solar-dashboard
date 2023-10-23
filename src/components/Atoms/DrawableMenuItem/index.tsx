import React, { FC } from 'react';
import {
  IconWrapper,
  ItemMenu,
  MenuText,
  TextWrapper,
  IconMenu,
} from './styles';

type Props = {
  options: DrawableMenuItem;
};

const DrawableMenuItem: FC<Props> = ({ options }) => {
  const { icon, text, onCLick, active } = options;

  const onClickLocal = () => {
    if (onCLick) {
      onCLick();
    }
  };

  return (
    <ItemMenu active={active} onClick={onClickLocal}>
      <IconWrapper>
        <IconMenu icon={icon} />
      </IconWrapper>
      <TextWrapper>
        <MenuText>{text}</MenuText>
      </TextWrapper>
    </ItemMenu>
  );
};

export default DrawableMenuItem;
