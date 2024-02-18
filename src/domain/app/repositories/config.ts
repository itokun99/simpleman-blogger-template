import { httpClient } from '@core';
import { AppConfig } from '../entities';
import { getConfig as getLocalConfig } from '@utils';

function getConfig() {
  const configUrl = getLocalConfig().configUrl;
  if (!configUrl)
    return Promise.reject(
      new Error('config url not found, please read documentation!')
    );
  return httpClient.get<AppConfig>(configUrl);
}

const appConfigRepo = {
  getConfig
};

export default appConfigRepo;
