import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';
import { useMemo } from 'react';
import { formatDate, createAuthorDataFromPost } from '@utils';

interface Option {
  id: string;
  byPath: boolean;
}

export default function usePostDetail(option: Option) {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['post', config.apiKey, config.blogId, option.id],
    queryFn: option.byPath
      ? () => bloggerUsecase.getPostDetailByPath(option.id)
      : () => bloggerUsecase.getPostDetail(option.id),
    enabled: config.isEnableQueries && Boolean(option.id)
  });

  const data = query.data;

  const labels = useMemo(() => data?.labels || [], [data?.labels]);
  const title = data?.title || '';

  const breadCrumb = useMemo(() => {
    const label = labels[0] || '';

    const result = [];

    if (label) result.push({ id: 1, title: label.title, url: label.url });
    if (title) result.push({ id: 2, title: title, url: '#' });

    return result;
  }, [labels, title]);

  const datePublished = query.data?.published
    ? `Published on ${formatDate(query.data.published, 'MMM DD, YYYY')}`
    : '';

  const author = query.data?.author
    ? {
        ...createAuthorDataFromPost(query.data.author),
        subtitle: datePublished
      }
    : { title: 'Anonim', subtitle: datePublished, image: '' };

  return {
    ...query,
    author,
    breadCrumb
  };
}
