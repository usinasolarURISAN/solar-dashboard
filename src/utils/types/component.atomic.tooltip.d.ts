/**
 * Defines the type for the register payload. Register here means one element
 * of the array of elements to be rendered.
 *
 * If, you are going to use **CustomBasePayload** to help on types, use no
 * more further than 1 level deep object.
 */
declare type BasePayload<CustomBasePayload = never> = CustomBasePayload;

declare type DefaultCustomBasePayload = { timestamp: string | number };

/**
 * The main payload that is received by custom content on Tooltip.
 */
declare type Payload<CustomBasePayload = DefaultCustomBasePayload> = {
  stroke: string;
  strokeWidth: number;
  fill: string;
  dataKey: string;
  unit: string;
  name: string;
  color: string;
  value: number | number;
  payload: BasePayload<CustomBasePayload>;
};

declare type ComponentAtomicTooltipProps = {
  active: boolean;
  payload?: Payload[];
  /**
   * Label will mostly be the timestamp **in this project**
   */
  label: string | number;
};

/**
 * A preset of keys that are possible to be used or returned on
 * **BasePayload**.
 */
declare type PreMappedBasePayloadKey =
  | 'weather'
  | 'timestamp'
  | 'pv'
  | 'deviceTemperature'
  | 'PVArrayInputPowerL'
  | 'PVArrayInputVoltage'
  | 'batterySOC'
  | 'batteryVoltage'
  | 'x'
  | 'feedingPowerToGrid'
  | 'eTotal'
  | 'eFeedDay'
  | 'gridCurrentOfPhase1'
  | 'gridVoltageOfPhase1';

declare type PreMappedBasePayloadKeyMapper<ReturnMappedType = never> = {
  [key in PreMappedBasePayloadKey]: ReturnMappedType;
};

/**
 * Pretty specific type, it is used to determine wether a key should or shouldn't
 * be rendered on tooltip.
 */
declare type BasePayloadKeysRenderRules = Partial<
  PreMappedBasePayloadKeyMapper<boolean>
>;
