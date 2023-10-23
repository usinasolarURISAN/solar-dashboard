declare type DeviceCardDataMetadata = {
  label: string;
  value: string;
};

declare type DeviceCardData = {
  id: string;
  device: Devices;
  metadata: DeviceCardDataMetadata[];
};
