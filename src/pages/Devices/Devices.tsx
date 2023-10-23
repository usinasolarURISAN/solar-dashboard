import React from 'react';
import { DeviceCard, Header, PageWrapper } from '~/components';
import {
  ContentWrapper,
  DeviceCardWrapper,
  DevicesWrapper,
  SubTitle,
} from './styles';

type Props = {
  data: DeviceCardData[];
  activeId?: string;
  onCardClick?: (data: DeviceCardData) => void;
};

const Devices: React.VFC<Props> = ({ data = [], activeId, onCardClick }) => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SubTitle>Dispositivos instalados</SubTitle>
        <DevicesWrapper>
          {data.map(item => (
            <DeviceCardWrapper key={item.id}>
              <DeviceCard
                data={item}
                isActive={item.id === activeId}
                onCardClick={onCardClick}
              />
            </DeviceCardWrapper>
          ))}
        </DevicesWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Devices;
