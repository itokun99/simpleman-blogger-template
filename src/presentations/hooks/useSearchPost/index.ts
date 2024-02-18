import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

interface Options {
  q: string;
  labels: string;
}

export default function useSearchPost({ q, labels }: Options) {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['searchPosts', config.apiKey, config.blogId, q, labels],
    queryFn: () => bloggerUsecase.searchPostsByQueryAndLabels(q, labels),
    enabled: config.isEnableQueries
  });

  const items = query.data?.items || [];
  const isEmpty = items.length === 0;

  return {
    ...query,
    items,
    isEmpty
  };
}
