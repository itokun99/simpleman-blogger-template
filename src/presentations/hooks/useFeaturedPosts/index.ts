import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';
import { useMemo } from 'react';

interface Option {
  enabled?: boolean;
}

const defaultOption = {
  enabled: true
};

export default function useFeaturedPosts(option?: Option) {
  const opt = useMemo(() => ({ ...defaultOption, ...option }), [option]);
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['featuredPosts', config.apiKey, config.blogId],
    queryFn: bloggerUsecase.getFeaturedPosts,
    enabled: opt.enabled && config.isEnableQueries
  });

  const items = query.data?.items || [];

  return {
    ...query,
    items
  };
}
