import React, { FC } from 'react';
import { Chart, Selector } from '~/components/Atoms';
import {
  Wrapper,
  ChartTitle,
  ContentWrapper,
  ExternalWrapper,
  Header,
  ChartWrapper,
  SelectorWrapper,
  ChartTitleWrapper,
  SubHeader,
  LatestValue,
} from './styles';

type Props = {
  chartTitle?: string;
  latestValue?: string;
  atomicChartProps?: ComponentAtomicChartProps;
  selectorProps?: SelectorProps;
};

const DefaultChart: FC<Props> = ({
  atomicChartProps,
  chartTitle,
  latestValue,
  selectorProps,
}) => {
  return (
    <Wrapper>
      <ExternalWrapper>
        <ContentWrapper>
          <Header>
            <ChartTitleWrapper>
              <ChartTitle>{chartTitle}</ChartTitle>
              <SubHeader>
                <LatestValue>{latestValue}</LatestValue>
              </SubHeader>
            </ChartTitleWrapper>
            <SelectorWrapper>
              <Selector {...selectorProps} />
            </SelectorWrapper>
          </Header>
          <ChartWrapper>
            <Chart {...atomicChartProps} />
          </ChartWrapper>
        </ContentWrapper>
      </ExternalWrapper>
    </Wrapper>
  );
};

export default DefaultChart;
