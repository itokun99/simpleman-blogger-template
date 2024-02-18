import { appStoreRepo } from '@domain';
import { useShallow } from 'zustand/react/shallow';

function useConfigStore() {
  const config = appStoreRepo.useConfigStore(
    useShallow(state => state.appConfig)
  );

  return config;
}

export default useConfigStore;
