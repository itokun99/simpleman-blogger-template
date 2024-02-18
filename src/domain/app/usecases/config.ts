import { appConfigRepo, appStoreRepo } from '../repositories';

async function getConfig() {
  const res = await appConfigRepo.getConfig();
  appStoreRepo.configStore.setState({ appConfig: res.data });
  return res.data;
}

const appConfigUsecase = {
  getConfig
};

export default appConfigUsecase;
