import React from 'react';
import { Wrapper } from './styles';

const PageWrapper: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
