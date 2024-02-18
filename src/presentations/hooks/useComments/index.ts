import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';
import { useMemo } from 'react';

interface Option {
  postId: string;
  enabled?: boolean;
}

const defaultOption = {
  postId: '',
  enabled: true
};

export default function useComments(option: Option) {
  const opt = useMemo(() => ({ ...defaultOption, ...option }), [option]);
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['comments', config.apiKey, config.blogId, option.postId],
    queryFn: () => bloggerUsecase.getPostComments(option.postId),
    enabled: opt.enabled && config.isEnableQueries && Boolean(option.postId)
  });

  return {
    ...query
  };
}
