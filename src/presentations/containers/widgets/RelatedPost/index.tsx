import React from 'react';
import { SimplePostList } from '@components';
import { useLabeledPosts, usePostDetail, usePostDetailParams } from '@hooks';

export interface RelatedPostProps {
  title?: string | React.ReactNode;
}

function Component({ title }: RelatedPostProps) {
  const { id } = usePostDetailParams();
  const queryDetail = usePostDetail({ id, byPath: true });

  const query = useLabeledPosts({
    label: queryDetail?.breadCrumb?.[0]?.title,
    showImage: false,
    excludes: queryDetail.data?.id ? [queryDetail.data?.id] : []
  });

  return (
    <SimplePostList
      title={title || 'Related Post'}
      loading={queryDetail.isLoading || query.isLoading}
      items={query.items}
    />
  );
}

export const RelatedPost = React.memo(Component);
