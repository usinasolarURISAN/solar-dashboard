import React, { FC } from 'react';
import { ChildrenWrapper, Wrapper } from './styles';

type Props = {
  paperProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
};

const Paper: FC<Props> = ({ children, paperProps }) => {
  return (
    <Wrapper {...paperProps}>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default Paper;
