/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DEFAULT_BASE_PAYLOAD_KEYS_DATA_KEY_SEARCH_RULES } from '../consts';

/**
 * Search if a specific key exists in an object
 *
 * @param obj
 * @param key
 * @param defaultValue
 * @returns
 * * if it does, return the value
 * * if it doesn't, return a default value
 * * if the key doesn't exist, return undefined
 */
export const keyExistsOnObject = (
  obj: any,
  key: string,
  defaultValue = 'default',
): undefined | string => {
  if (obj[key]) {
    return obj[key];
  }
  return defaultValue;
};

/**
 * Searches for the key that holds the actual data in object
 * @param data
 */
export const getDataKeyFromRawData = (
  data: unknown,
): PreMappedBasePayloadKey | undefined => {
  const keys = Object.keys(
    data as Record<string, string | number | undefined>,
  ) as PreMappedBasePayloadKey[];

  for (let index = 0; index < keys.length; index++) {
    if (
      DEFAULT_BASE_PAYLOAD_KEYS_DATA_KEY_SEARCH_RULES[keys[index]] !== false
    ) {
      return keys[index];
    }
  }

  return undefined;
};

/**
 * Gets the latest value based on given key from the raw data.
 *
 * This helper is primarily used on `DefaultChart` to get the latest value.
 * @param data
 * @param key
 * @returns
 */
export const getLatestValueFromRawData = (
  data: unknown[],
  key: string,
): string => {
  const latestData = data[data.length - 1] as Record<string, unknown>;

  return String(latestData[key]);
};
