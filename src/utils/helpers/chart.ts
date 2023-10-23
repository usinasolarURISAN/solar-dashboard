import { getDataKeyFromRawData } from '../object';

export const getHighestValue = ({
  data,
  dataKey,
}: GetHighestValueProps): number | 'auto' => {
  const definedDataKey = dataKey || getDataKeyFromRawData(data[0]);

  if (!definedDataKey) return 'auto';

  const highestValue = data.reduce((acc, curr) => {
    const value = Number(curr[definedDataKey]);
    return value > acc ? value : acc;
  }, 0);

  return Number(highestValue);
};

/**
 * This function is primarily used on `Chart` to determine the domain limit, which is the
 * usually 0 to the highestValueFound.
 * @param data
 * @returns
 */
export const determineDomainLimit = (
  props: DetermineDomainLimitProps,
): number | 'auto' => {
  const highestValueFound = getHighestValue(props);

  if (highestValueFound === 'auto') return 'auto';

  const value = Math.round(highestValueFound);

  return value;
};

const xAxisValueOutputGenerator = ({
  timestamp,
  outputType,
}: XAxisValueOutputGeneratorProps): string => {
  const numberTimestamp = Number(timestamp);

  switch (outputType) {
    case 'date':
      return new Date(numberTimestamp).toLocaleDateString();
    case 'hours':
      return new Date(numberTimestamp).toLocaleTimeString();
    default:
      return new Date(numberTimestamp).toLocaleTimeString();
  }
};

export const mapDataToXAxisValue = <T = unknown & { x: string }>({
  data,
  outputType = 'hours',
}: MapDataToXAxisValueProps): T[] | undefined => {
  if (!data) return undefined;

  return data.map(item => {
    const { timestamp } = item;

    const x = xAxisValueOutputGenerator({ timestamp, outputType });

    return { ...item, x };
  });
};
