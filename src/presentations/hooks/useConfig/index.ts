import { useQuery } from '@tanstack/react-query';
import { appConfigUsecase } from '@domain';

export default function useConfig() {
  const query = useQuery({
    queryKey: ['appConfig'],
    queryFn: appConfigUsecase.getConfig
  });

  const apiKey = query.data?.google?.apiKey;
  const blogId = query.data?.blogger?.blogId;
  const blogUrl = query.data?.blogger?.blogUrl;
  const isEnableQueries = Boolean(blogId) && Boolean(apiKey);

  return {
    ...query,
    apiKey,
    blogId,
    blogUrl,
    isEnableQueries
  };
}
