import { MoleculeDefaultChartStore } from './components';
import DashboardStore from './dashboard.store';
import OtherStore from './other.store';
import UserStore from './user.store';

class GlobalStore {
  otherStore: OtherStore;

  userStore: UserStore;

  dashboardStore: DashboardStore;

  moleculeDefaultChartStore: MoleculeDefaultChartStore;

  constructor() {
    this.otherStore = new OtherStore();
    this.userStore = new UserStore();
    this.dashboardStore = new DashboardStore();
    this.moleculeDefaultChartStore = new MoleculeDefaultChartStore();
  }
}

export type StoreKeyNames = keyof GlobalStore;

export { OtherStore, UserStore, DashboardStore, MoleculeDefaultChartStore };
export * from './components';

const globalStore = new GlobalStore();

export default globalStore;
