/**
 * All known devices manufacturers on project.
 */
declare type Devices = 'epever' | 'goodwe';

/**
 * Generic mapper based on devices
 */
declare type DevicesGenericMapper<T = string> = {
  [device in Devices]: T;
};

/**
 * All units used on Epever device, and mapped on docs.
 * Those units can be found on [Epever Docs](https://github.com/Gabao-Farias/epever-logger/blob/master/docs/A%20or%20BSeriesControllerProtocolv2.5.pdf).
 */
declare type GenericDataUnits =
  | 'VOLT'
  | 'AMPERE'
  | 'AMPERE_HOUR'
  | 'WATT'
  | 'CELSIUS'
  | 'PERCENTAGE'
  | 'PERCENTAGE_VOLT'
  | 'PERCENTAGE_MINUTE'
  | 'KILOWATT_HOUR'
  | 'KILOOHM'
  | 'MV_C2_2V'
  | 'MINUTE'
  | 'SECOND'
  | 'HOUR'
  | 'HERTZ';

/**
 * All known Epever data keys.
 */
declare type EpeverDataKeys =
  | 'id'
  | 'deviceId'
  | 'overTemperatureInsideTheDevice'
  | 'isNight'
  | 'PVArrayInputVoltage'
  | 'PVArrayInputCurrent'
  | 'PVArrayInputPowerL'
  | 'PVArrayInputPowerH'
  | 'loadVoltage'
  | 'loadCurrent'
  | 'loadPowerL'
  | 'loadPowerH'
  | 'batteryTemperature'
  | 'deviceTemperature'
  | 'batterySOC'
  | 'batteryRealRatedVoltage'
  | 'batteryStatus'
  | 'chargingEquipmentStatus'
  | 'dischargingEquipmentStatus'
  | 'maximumBatteryVoltageToday'
  | 'minimumBatteryVoltageToday'
  | 'consumedEnergyTodayL'
  | 'consumedEnergyTodayH'
  | 'consumedEnergyThisMonthL'
  | 'consumedEnergyThisMonthH'
  | 'consumedEnergyThisYearL'
  | 'consumedEnergyThisYearH'
  | 'totalConsumedEnergyL'
  | 'totalConsumedEnergyH'
  | 'generatedEnergyTodayL'
  | 'generatedEnergyTodayH'
  | 'generatedEnergyThisMonthL'
  | 'generatedEnergyThisMonthH'
  | 'generatedEnergyThisYearL'
  | 'generatedEnergyThisYearH'
  | 'totalGeneratedEnergyL'
  | 'totalGeneratedEnergyH'
  | 'batteryVoltage'
  | 'batteryCurrentL'
  | 'batteryCurrentH'
  | 'ratedChargingCurrent'
  | 'ratedLoadCurrent'
  | 'batteryType'
  | 'batteryCapacity'
  | 'temperatureCompensationCoefficient'
  | 'chargingLimitVoltage'
  | 'overVoltageReconnectVoltage'
  | 'equalizeChargingVoltage'
  | 'boostChargingVoltage'
  | 'floatChargingVoltage'
  | 'boostReconnectChargingVoltage'
  | 'lowVoltageReconnectVoltage'
  | 'underVoltageWarningRecoverVoltage'
  | 'underVoltageWarningVoltage'
  | 'lowVoltageDisconnectVoltage'
  | 'dischargingLimitVoltage'
  | 'batteryRatedVoltageLevel'
  | 'defaultLoadOnOffInManualMode'
  | 'equalizeDuration'
  | 'boostDuration'
  | 'batteryDischarge'
  | 'batteryCharge'
  | 'chargingMode'
  | 'nightTimeThresholdVoltageNTTV'
  | 'lightSignalStartupNightDelayTime'
  | 'dayTimeThresholdVoltageDTTV'
  | 'lightSignalCloseDayDelayTime'
  | 'loadControlMode'
  | 'LightOnTimeTime1'
  | 'LightOnTimeTime2'
  | 'timingControlTurnOnTime1Second'
  | 'timingControlTurnOnTime1Minute'
  | 'timingControlTurnOffTime1Second'
  | 'timingControlTurnOffTime1Minute'
  | 'timingControlTurnOffTime1Hour'
  | 'timingControlTurnOnTime2Second'
  | 'timingControlTurnOnTime2Minute'
  | 'timingControlTurnOnTime2Hour'
  | 'timingControlTurnOffTime2Second'
  | 'timingControlTurnOffTime2Minute'
  | 'timingControlTurnOffTime2Hour'
  | 'nightTime'
  | 'timingControlTimeChoose'
  | 'realTimeClockSecondsMinutes'
  | 'realTimeClockHourDay'
  | 'realTimeClockMonthYear'
  | 'batteryUpperTemperatureLimit'
  | 'batteryLowerTemperatureLimit'
  | 'deviceOverTemperature'
  | 'deviceRecoveryTemperature'
  | 'backlightTime'
  | 'arrayRatedVoltage'
  | 'arrayRatedCurrent'
  | 'arrayRatedPowerL'
  | 'arrayRatedPowerH'
  | 'batteryRatedVoltage'
  | 'batteryRatedCurrent'
  | 'batteryRatedPowerL'
  | 'batteryRatedPowerH'
  | 'ratedLoadVoltage'
  | 'ratedLoadPowerToL'
  | 'ratedLoadPowerToH'
  | 'timestamp'
  | 'timestamp_minute'
  | 'timestamp_hour'
  | 'timestamp_date'
  | 'timestamp_month'
  | 'timestamp_year';

/**
 * All known Goodwe data keys.
 */
declare type GoodweDataKeys =
  | 'id'
  | 'deviceId'
  | 'lowestFeedingVoltageOfPV'
  | 'reconnectTime'
  | 'highLimitOfGridVoltage'
  | 'lowLimitOfGridVoltage'
  | 'highLimitOfGridFrequency'
  | 'lowLimitOfGridFreqency'
  | 'rtcDateTimeYearMonth'
  | 'rtcDateTimeDateHour'
  | 'rtcDateTimeMinuteSecond'
  | 'rangeOfRealPowerAdjust'
  | 'rangeOfReactivePowerAdjust'
  | 'serialNumberOfInverter'
  | 'modelNameOfInverter'
  | 'errorCode'
  | 'eTotal'
  | 'hTotal'
  | 'pvVoltageOfFirstTracker'
  | 'pvVoltageOfSecondTracker'
  | 'pvCurrentOfFirstTracker'
  | 'pvCurrentOfSecondTracker'
  | 'gridVoltageOfPhase1'
  | 'gridVoltageOfPhase2'
  | 'gridVoltageOfPhase3'
  | 'gridCurrentOfPhase1'
  | 'gridCurrentOfPhase2'
  | 'gridCurrentOfPhase3'
  | 'gridFrequencyOfPhase1'
  | 'gridFrequencyOfPhase2'
  | 'gridFrequencyOfPhase3'
  | 'feedingPowerToGrid'
  | 'runningStatus'
  | 'temperatureOfHeatsink'
  | 'eYieldDay'
  | 'vpv1'
  | 'vpv2'
  | 'ipv1'
  | 'ipv2'
  | 'vac1'
  | 'vac2'
  | 'vac3'
  | 'iac1'
  | 'iac2'
  | 'iac3'
  | 'fac1'
  | 'fac2'
  | 'fac3'
  | 'pacL'
  | 'workMode'
  | 'temperature'
  | 'errorMessageH'
  | 'errorMessageL'
  | 'eTotalH'
  | 'eTotalL'
  | 'hTotalH'
  | 'hTotalL'
  | 'firmwareVersion'
  | 'warningCode'
  | 'pv2FaultValue'
  | 'functionsValue'
  | 'line2VfaultValue'
  | 'line3VfaultValue'
  | 'busVoltage'
  | 'nbusVoltage'
  | 'line3FfaultValue'
  | 'safetyCountry'
  | 'eFeedDay'
  | 'yearMonth'
  | 'dateHour'
  | 'minuteSecond'
  | 'manufactureID'
  | 'rssi'
  | 'pvMode'
  | 'fmVersionOfARM'
  | 'gprsBurnInMode'
  | 'pacH'
  | 'vpv3'
  | 'vpv4'
  | 'ipv3'
  | 'ipv4'
  | 'istr1'
  | 'istr2'
  | 'istr3'
  | 'istr4'
  | 'istr5'
  | 'istr6'
  | 'istr7'
  | 'istr8'
  | 'istr9'
  | 'istr10'
  | 'istr11'
  | 'istr12'
  | 'istr13'
  | 'istr14'
  | 'istr15'
  | 'istr16'
  | 'iStringStatus'
  | 'istr18'
  | 'istr19'
  | 'istr20'
  | 'pidWietapStatus'
  | 'timestamp'
  | 'timestamp_minute'
  | 'timestamp_hour'
  | 'timestamp_date'
  | 'timestamp_month'
  | 'timestamp_year';

/**
 * Known Metadata labels, most used on `DeviceCard` component.
 */
declare type DeviceCardKnownMetadataLabels =
  | 'ID Dispositivo'
  | 'Marca'
  | 'Tipo'
  | 'Modelo'
  | 'Conexão à Rede';
