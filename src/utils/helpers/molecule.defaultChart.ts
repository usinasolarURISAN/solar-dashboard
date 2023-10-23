/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PRE_MAPPED_BASE_PAYLOAD_CHART_TITLE,
  PRE_MAPPED_BASE_PAYLOAD_KEY_UNIT,
} from '../consts';
import { getDataKeyFromRawData, getLatestValueFromRawData } from '../object';

export const determineChartTitle = (data?: any[]): string | undefined => {
  if (!data) return 'Unknown';

  const dataKey = getDataKeyFromRawData(data[0]);

  if (!dataKey) return 'Unknown';

  return PRE_MAPPED_BASE_PAYLOAD_CHART_TITLE[dataKey];
};

export const determineLatestValue = (data?: any[]): string => {
  if (!data) return '-';

  const dataKey = getDataKeyFromRawData(data[0]);

  if (!dataKey) return '-';

  const latestValue = getLatestValueFromRawData(data, dataKey);

  if (latestValue === 'null') return 'S/ Registro';

  return `${latestValue}${PRE_MAPPED_BASE_PAYLOAD_KEY_UNIT[dataKey]}`;
};

export const determineUnit = (data?: any[]): string | undefined => {
  if (!data) return '-';

  const dataKey = getDataKeyFromRawData(data[0]);

  if (!dataKey) return '-';

  return PRE_MAPPED_BASE_PAYLOAD_KEY_UNIT[dataKey];
};
