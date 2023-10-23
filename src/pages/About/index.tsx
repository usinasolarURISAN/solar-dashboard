import React from 'react';
import { Header, PageWrapper } from '~/components';
import { Message404Wrapper, Text, Wrapper } from './styles';

const Devices: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <Message404Wrapper>
          <Text>Sobre</Text>
          <Text>Em construção... 🚧</Text>
        </Message404Wrapper>
      </Wrapper>
    </PageWrapper>
  );
};

export default Devices;
