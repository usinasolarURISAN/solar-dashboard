export const PRE_MAPPED_BASE_PAYLOAD_KEY_UNIT: Partial<
  PreMappedBasePayloadKeyMapper<string>
> = {
  pv: 'U',
  timestamp: 'Time',
  weather: 'Weather',
  deviceTemperature: '°C',
  PVArrayInputPowerL: 'W',
  PVArrayInputVoltage: 'V',
  batterySOC: '%',
  batteryVoltage: 'V',
  eTotal: 'kWh',
  feedingPowerToGrid: 'W',
  eFeedDay: 'kWh',
  gridCurrentOfPhase1: 'A',
  gridVoltageOfPhase1: 'V',
};

export const PRE_MAPPED_BASE_PAYLOAD_CHART_TITLE: Partial<
  PreMappedBasePayloadKeyMapper<string>
> = {
  pv: 'pv',
  timestamp: 'Tempo',
  weather: 'Dados Meteorológicos',
  deviceTemperature: 'Temperatura do Dispositivo',
  batterySOC: 'Nível de Bateria',
  batteryVoltage: 'Tensão da Bateria',
  PVArrayInputVoltage: 'Entrada de tensão da matriz FV',
  PVArrayInputPowerL: 'Entrada de energia da matriz FV',
  eTotal: 'Total de energia gerada',
  feedingPowerToGrid: 'Alimentação de energia à rede',
  eFeedDay: 'Energia alimentada à rede no dia',
  gridCurrentOfPhase1: 'Corrente da rede da fase 1',
  gridVoltageOfPhase1: 'Tensão da rede da fase 1',
};

export const DEFAULT_BASE_PAYLOAD_KEYS_RENDER_RULES: BasePayloadKeysRenderRules = {
  timestamp: false,
  x: false,
  weather: false,
};

/**
 * This is primarily used on `getDataKeyFromRawData` to define a rule for keys
 * that should be not considered as main data keys, like the temperature, humidity, etc.
 *
 * Here for example, the `timestamp` and `weather` are not considered as a main data key,
 * because they are considered as metadata.
 *
 * Declare as false only the keys that are not suposed to be main data keys.
 */
export const DEFAULT_BASE_PAYLOAD_KEYS_DATA_KEY_SEARCH_RULES: BasePayloadKeysRenderRules = {
  timestamp: false,
  weather: false,
};
