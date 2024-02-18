import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useConfig } from '@hooks';

export default function useBlog() {
  const config = useConfig();
  const query = useQuery({
    queryKey: ['blog', config.blogId, config.apiKey],
    queryFn: bloggerUsecase.getInfo,
    enabled: config.isEnableQueries
  });

  const logo = config?.data?.app?.logo || '';
  const headerLinks = config?.data?.menu?.header || [];
  const title = query?.data?.name || '';

  return {
    ...query,
    config,
    headerLinks,
    logo,
    title
  };
}
