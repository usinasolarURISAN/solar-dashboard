import api from './api';

export const fetchGenericDeviceData = async (
  props: GenericDeviceDataEndpointDefaultRequestBody,
): Promise<GenericDataEndpointDefaultResponseBody[] | undefined> => {
  const { device, dataKeys, deviceId, interval } = props;
  try {
    const { data } = await api.post<GenericDataEndpointDefaultResponseBody[]>(
      `/data/${device}/generic`,
      { dataKeys, deviceId, interval },
    );

    return data;
  } catch (err) {
    // console.log(err);
    return undefined;
  }
};
