import React from 'react';
import { BasePostList } from '@components';
import { useLatestPosts } from '@hooks';

export interface LatestPostProps {
  title?: string | React.ReactNode;
}

function Component({ title }: LatestPostProps) {
  const query = useLatestPosts();

  return (
    <BasePostList title={title} loading={query.isLoading} items={query.items} />
  );
}

export const LatestPost = React.memo(Component);
