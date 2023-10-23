import { action, makeAutoObservable } from 'mobx';
import { DeviceAPI } from '~/api';
import { mapDataToXAxisValue } from '~/utils';

export default class MoleculeDefaultChartStore {
  constructor() {
    makeAutoObservable(this);
  }

  @action
  fetchDefaultChartData = async (
    params: GenericDeviceEndpointParamsRequest,
  ): Promise<GenericDataEndpointDefaultResponseBody[] | undefined> => {
    const { dataKey, interval } = params;

    const preparedParams: GenericDeviceDataEndpointDefaultRequestBody = {
      ...params,
      dataKeys: ['timestamp', dataKey],
    };

    const data = await DeviceAPI.fetchGenericDeviceData(preparedParams);

    const processedData = mapDataToXAxisValue<GenericDataEndpointDefaultResponseBody>(
      {
        data,
        outputType: interval === '1D' ? 'hours' : 'date',
      },
    );

    return processedData;
  };
}
