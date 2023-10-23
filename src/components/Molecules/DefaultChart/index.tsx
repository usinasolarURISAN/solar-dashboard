import { inject } from 'mobx-react';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { MoleculeDefaultChartStore } from '~/stores';
import {
  determineChartTitle,
  determineLatestValue,
  determineUnit,
  getDataKeyFromRawData,
  INTERVAL_RELATION_LANGUAGE,
} from '~/utils';
import DefaultChart from './DefaultChart';

type Props = {
  moleculeDefaultChartStore?: MoleculeDefaultChartStore;
  requestParams: Omit<GenericDeviceEndpointParamsRequest, 'interval'>;
};

const DefaultChartContainer: FC<Props> = ({
  requestParams,
  moleculeDefaultChartStore,
}) => {
  const [data, setData] = useState<
    GenericDataEndpointDefaultResponseBody[] | undefined
  >(undefined);
  const [interval, setInterval] = useState<TimeBasedIntervals>('1D');

  const dataKey = useCallback(() => {
    return getDataKeyFromRawData(data ? data[0] : {});
  }, [data]);

  const unit = useCallback(() => {
    return determineUnit(data);
  }, [data]);

  const fetchData = useCallback(async () => {
    try {
      const { dataKey, device, deviceId } = requestParams;

      const data = await moleculeDefaultChartStore?.fetchDefaultChartData({
        dataKey,
        device,
        interval,
        deviceId,
      });

      setData(data?.length === 0 ? undefined : data);
    } catch (error) {
      // console.log(error);
    }
  }, [interval, moleculeDefaultChartStore, requestParams]);

  const onSelectOption = (option: string) =>
    setInterval(INTERVAL_RELATION_LANGUAGE[option] as TimeBasedIntervals);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DefaultChart
      atomicChartProps={{
        data,
        unit: unit(),
        mainLineDataKey: dataKey(),
      }}
      chartTitle={determineChartTitle(data)}
      latestValue={determineLatestValue(data)}
      selectorProps={{ onSelectOption }}
    />
  );
};

export default inject('moleculeDefaultChartStore')(DefaultChartContainer);
