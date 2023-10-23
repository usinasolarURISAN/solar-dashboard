import { inject, observer } from 'mobx-react';
import React from 'react';
import { Storage } from '~/services';
import { DashboardStore } from '~/stores';
import { DEVICE_CARD_DATA } from '~/utils';
import Devices from './Devices';

type Props = {
  dashboardStore: DashboardStore;
};

const DevicesContainer: React.FC<Props> = ({ dashboardStore }) => {
  const {
    activeDevice: { id },
  } = dashboardStore;

  const handleDeviceCardClick = (deviceData: DeviceCardData) => {
    dashboardStore.setActiveDevice(deviceData);
    Storage.set('USINA_URI_ACTIVE_DEVICE', JSON.stringify(deviceData));
  };

  return (
    <Devices
      data={DEVICE_CARD_DATA}
      activeId={id}
      onCardClick={handleDeviceCardClick}
    />
  );
};

export default inject('dashboardStore')(observer(DevicesContainer));
