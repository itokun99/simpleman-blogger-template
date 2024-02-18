import { createStore } from 'zustand/vanilla';
import { createBoundedUseStore } from '@core';
import { AppConfig } from '../entities';

interface AppConfigState {
  appConfig: AppConfig | null | undefined;
  setAppConfig: (appConfig: AppConfig) => void;
}

const configStore = createStore<AppConfigState>(set => ({
  appConfig: null,
  setAppConfig: config => set({ appConfig: config })
}));

const useConfigStore = createBoundedUseStore(configStore);

const appStoreRepo = {
  configStore: configStore,
  useConfigStore
};

export default appStoreRepo;
