/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CustomTooltip } from '~/components';
import { ThemeContext } from '~/contexts';
import {
  PRE_MAPPED_BASE_PAYLOAD_CHART_TITLE,
  dataMock,
  determineDomainLimit,
} from '~/utils';
import { Wrapper } from './styles';

const customToolTip = ({ active, payload, label }: any) => {
  return <CustomTooltip active={active} payload={payload} label={label} />;
};

const Chart: React.FC<ComponentAtomicChartProps> = ({
  cartesianGridStrokeColor = '#ccc',
  contentStyle = { backgroundColor: '#91f' },
  data = dataMock,
  labelStyle = { color: '#f91' },
  lineColor = '#9f1',
  mainLineDataKey = 'pv',
  strokeColor = '#333',
  unit = 'KW',
  axisFontSize,
}) => {
  const { theme } = useContext(ThemeContext);
  const getIntervalByWindowWidth = useCallback(
    (winWidth: number): number => {
      const { tablet, laptop, fhd } = theme.breakpoints;

      if (winWidth <= tablet) {
        return 3;
      }

      if (winWidth <= laptop) {
        return 4;
      }

      if (winWidth <= fhd) {
        return 6;
      }

      return 10;
    },
    [theme.breakpoints],
  );

  const [intervalRatio, setIntervalRatio] = useState(
    getIntervalByWindowWidth(window.innerWidth),
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      const currentWidth = window.innerWidth;

      const interval = getIntervalByWindowWidth(currentWidth);

      setIntervalRatio(interval);
    });

    return () => {
      window.removeEventListener('resize', () => ({}));
    };
  }, [getIntervalByWindowWidth]);

  return (
    <Wrapper>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke={cartesianGridStrokeColor} vertical={false} />
          <XAxis
            fontSize={axisFontSize}
            dataKey="x"
            stroke={strokeColor}
            interval={Math.round(data.length / intervalRatio)}
          />
          <YAxis
            allowDecimals
            interval="preserveStartEnd"
            stroke={strokeColor}
            unit={unit}
            fontSize={axisFontSize}
            domain={[
              0,
              determineDomainLimit({ data, dataKey: mainLineDataKey }),
            ]}
          />
          <Tooltip
            isAnimationActive={false}
            filterNull={false}
            labelStyle={labelStyle}
            contentStyle={contentStyle}
            content={customToolTip}
          />
          <Legend />
          <Line
            name={
              PRE_MAPPED_BASE_PAYLOAD_CHART_TITLE[
                mainLineDataKey as PreMappedBasePayloadKey
              ]
            }
            type="monotone"
            dataKey={mainLineDataKey}
            stroke={lineColor}
            strokeWidth={2}
            activeDot={{ r: 8 }}
            dot={false}
            unit={unit}
          />
          <Brush travellerWidth={16} />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Chart;
