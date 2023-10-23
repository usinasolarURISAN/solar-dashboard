import React, { FC } from 'react';
import { Wrapper } from './styles';

const Background: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Background;
