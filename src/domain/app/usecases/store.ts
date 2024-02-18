import { appStoreRepo } from '../repositories';

function getBloggerCredential() {
  const state = appStoreRepo.configStore.getState();
  const blogId = state.appConfig?.blogger?.blogId;
  const apiKey = state.appConfig?.google?.apiKey;
  const blogUrl = state.appConfig?.blogger?.blogUrl;
  const authors = state.appConfig?.author || [];

  return {
    blogId,
    apiKey,
    blogUrl,
    authors
  };
}

const appStoreUsecase = {
  getBloggerCredential
};

export default appStoreUsecase;
