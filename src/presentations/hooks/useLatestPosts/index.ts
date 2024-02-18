import { useInfiniteQuery } from '@tanstack/react-query';
import { Post, bloggerUsecase } from '@domain';
import { useBlog, useFeaturedPosts } from '@hooks';
import { useMemo } from 'react';

interface Option {
  enabled?: boolean;
}

const defaultOption = {
  enabled: true
};

export default function useLatestPosts(option?: Option) {
  const opt = useMemo(() => ({ ...defaultOption, ...option }), [option]);
  const { config } = useBlog();
  const featuredPost = useFeaturedPosts({ enabled: opt.enabled });
  const query = useInfiniteQuery({
    queryKey: ['latestPosts', config.apiKey, config.blogId],
    queryFn: ({ pageParam: pageToken }) => {
      return bloggerUsecase.getLatestPosts({ ...(pageToken && { pageToken }) });
    },
    enabled: opt.enabled && config.isEnableQueries,
    getNextPageParam: lastPage => lastPage.nextPageToken,
    initialPageParam: ''
  });

  query.data?.pages;
  const pages = query.data?.pages || [];
  let items: Post[] = [];
  pages.forEach(page => page.items.forEach(item => items.push(item)));

  if (featuredPost.items.length > 0) {
    const excludedPosts = featuredPost.items.map(item => item.id);
    items = items.filter(item => !excludedPosts.includes(item.id));
  }

  return {
    ...query,
    items
  };
}
