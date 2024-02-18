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

export default function useLabelList(option?: Option) {
  const opt = useMemo(() => ({ ...defaultOption, ...option }), [option]);
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['label-list', config.apiKey, config.blogId],
    queryFn: bloggerUsecase.getAllLabels,
    enabled: opt.enabled && config.isEnableQueries
  });

  const items = query.data || [];

  return {
    ...query,
    items
  };
}
