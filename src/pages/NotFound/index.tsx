import React from 'react';
import { Message404Wrapper, Wrapper, Text } from './styles';

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Message404Wrapper>
        <Text>Eita... parece que saímos um pouco da rota!</Text>
        <Text>Bora voltar pra home?!</Text>
        <Text>😅</Text>
      </Message404Wrapper>
    </Wrapper>
  );
};

export default NotFound;
