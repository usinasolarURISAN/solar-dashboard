/**
 * Helper to find a label on a given metadata array.
 * @param label
 * @param metadata
 * @returns
 */
export const findValueByLabelOnDeviceCardMetadata = (
  label: DeviceCardKnownMetadataLabels,
  metadata: DeviceCardDataMetadata[],
): string | undefined => {
  for (let index = 0; index < metadata.length; index++) {
    const element = metadata[index];

    if (element.label === label) return element.value;
  }
  return undefined;
};
