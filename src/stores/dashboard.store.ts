import { action, makeAutoObservable, observable } from 'mobx';
import { Storage } from '~/services';
import { DEVICE_CARD_DATA } from '~/utils';

export default class DashboardStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  activeDevice: DeviceCardData =
    JSON.parse(String(Storage.get('USINA_URI_ACTIVE_DEVICE'))) ||
    DEVICE_CARD_DATA[0];

  @action
  setActiveDevice = (deviceData: DeviceCardData): void => {
    this.activeDevice = deviceData;
  };
}
