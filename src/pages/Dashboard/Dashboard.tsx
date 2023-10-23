import React from 'react';
import {
  ActiveDevicePaper,
  DefaultChart,
  Header as HeaderComponent,
  PageWrapper,
} from '~/components';
import { DEFAULT_DEVICE_DATA_KEYS } from '~/utils';
import {
  ChartContainer,
  ChartWrapper,
  Header,
  HeaderContentWrapper,
  SubTitle,
  TextWrapper,
  Title,
} from './styles';

type Props = {
  activeDeviceType: Devices;
  deviceId?: string;
};

const Dashboard: React.FC<Props> = ({ activeDeviceType, deviceId = '0' }) => {
  return (
    <PageWrapper>
      <HeaderComponent />
      <Header>
        <TextWrapper>
          <Title>URI - Santo Ângelo</Title>
          <SubTitle>LabGDTec</SubTitle>
        </TextWrapper>
        <HeaderContentWrapper>
          <ActiveDevicePaper device={activeDeviceType} />
        </HeaderContentWrapper>
      </Header>
      <ChartContainer>
        {DEFAULT_DEVICE_DATA_KEYS[activeDeviceType].map(item => (
          <ChartWrapper key={item}>
            <DefaultChart
              requestParams={{
                dataKey: item,
                device: activeDeviceType,
                deviceId,
              }}
            />
          </ChartWrapper>
        ))}
      </ChartContainer>
    </PageWrapper>
  );
};

export default Dashboard;
