import React from 'react';
import { Content } from '@components';
import { usePostDetail, usePostDetailParams } from '@hooks';

function Component() {
  const { id } = usePostDetailParams();
  const query = usePostDetail({ id, byPath: true });

  return (
    <Content
      loading={query.isLoading}
      title={query.data?.title || ''}
      author={query.author}
      breadcrumb={query.breadCrumb}
      content={query.data?.content || ''}
    />
  );
}

export const BloggerPostDetail = React.memo(Component);
