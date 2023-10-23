export const DEVICE_NAMES: DevicesGenericMapper = {
  epever: 'Controlador de carga Epever MPPT XTRA 4210N',
  goodwe: 'Inversor de carga Goodwe SMT GW25K-MT',
};

export const DEVICE_CARD_DATA: DeviceCardData[] = [
  {
    id: '1672767452811',
    device: 'epever',
    metadata: [
      {
        label: 'ID Dispositivo',
        value: '0',
      },
      {
        label: 'Marca',
        value: 'Epever',
      },
      {
        label: 'Tipo',
        value: 'Controlador de carga',
      },
      {
        label: 'Modelo',
        value: 'MPPT XTRA 4210N',
      },
      {
        label: 'Conexão à Rede',
        value: 'Off Grid',
      },
    ],
  },
  {
    id: '1672767464503',
    device: 'epever',
    metadata: [
      {
        label: 'ID Dispositivo',
        value: '1',
      },
      {
        label: 'Marca',
        value: 'Epever',
      },
      {
        label: 'Tipo',
        value: 'Controlador de carga',
      },
      {
        label: 'Modelo',
        value: 'MPPT XTRA 4210N',
      },
      {
        label: 'Conexão à Rede',
        value: 'Off Grid',
      },
    ],
  },
  {
    id: '1672767478179',
    device: 'goodwe',
    metadata: [
      {
        label: 'ID Dispositivo',
        value: '0',
      },
      {
        label: 'Marca',
        value: 'Goodwe',
      },
      {
        label: 'Tipo',
        value: 'Inversor de carga',
      },
      {
        label: 'Modelo',
        value: 'SMT GW25K-MT',
      },
      {
        label: 'Conexão à Rede',
        value: 'On Grid',
      },
    ],
  },
];

export const DEFAULT_DEVICE_DATA_KEYS: DevicesGenericMapper<string[]> = {
  epever: [
    'PVArrayInputPowerL',
    'batteryVoltage',
    'batterySOC',
    'PVArrayInputVoltage',
  ] as EpeverDataKeys[],
  goodwe: [
    'feedingPowerToGrid',
    'eFeedDay',
    'gridCurrentOfPhase1',
    'gridVoltageOfPhase1',
  ] as GoodweDataKeys[],
};
