import { inject } from 'mobx-react';
import React from 'react';
import { DashboardStore } from '~/stores';
import { findValueByLabelOnDeviceCardMetadata } from '~/utils';
import Dashboard from './Dashboard';

type Props = {
  dashboardStore?: DashboardStore;
};

const DashboardContainer: React.FC<Props> = ({ dashboardStore }) => {
  if (!dashboardStore) return null;

  const {
    activeDevice: { device, metadata },
  } = dashboardStore;

  return (
    <Dashboard
      activeDeviceType={device}
      deviceId={findValueByLabelOnDeviceCardMetadata(
        'ID Dispositivo',
        metadata,
      )}
    />
  );
};

export default inject('dashboardStore')(DashboardContainer);
