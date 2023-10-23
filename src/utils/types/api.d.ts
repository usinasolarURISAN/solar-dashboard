/**
 * Defines the default request body to be handled on a generic endponit
 */
declare type GenericDeviceDataEndpointDefaultRequestBody = {
  device: Devices;
  deviceId: string;
  /**
   * A set of data keys that must be retrieved by generic endpoint!
   */
  dataKeys: string[];
  interval: TimeBasedIntervals;
};

declare type GenericDeviceEndpointParamsRequest = {
  device: Devices;
  deviceId: string;
  /**
   * The data key that must be retrieved, `timestamp` and `weather` will be
   * integrated as default along in the process.
   */
  dataKey: string;
  interval: TimeBasedIntervals;
};
