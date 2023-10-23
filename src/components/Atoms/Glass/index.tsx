import React, { FC } from 'react';
import { Wrapper } from './styles';

type Props = {
  glassProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
};

const Glass: FC<Props> = ({ children, glassProps }) => {
  return <Wrapper {...glassProps}>{children}</Wrapper>;
};

export default Glass;
