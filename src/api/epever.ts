import api from './api';

export const fetchGenericEpeverData = async (
  props: GenericEpeverDataEndpointDefaultRequestBody,
): Promise<GenericDataEndpointDefaultResponseBody[] | undefined> => {
  try {
    const { data } = await api.post<GenericDataEndpointDefaultResponseBody[]>(
      '/data/epever/generic',
      props,
    );

    return data;
  } catch (err) {
    // console.log(err);
    return undefined;
  }
};
