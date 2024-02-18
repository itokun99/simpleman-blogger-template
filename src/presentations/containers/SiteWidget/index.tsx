import React from 'react';
import {
  FeaturedPost,
  LabeledPost,
  LabeledPostProps,
  LabelList,
  LatestPost,
  RelatedPost,
  RelatedPostProps,
  BloggerComment,
  BloggerPostDetail,
  DisqusComment
  // BloggerCommentProps
} from '@containers';

interface SiteWidgetProps {
  type: string;
  title: string | React.ReactNode;
  show: boolean;
  label?: string | string[];
  data?: unknown;
}

function Component({ type, show, title, data }: SiteWidgetProps) {
  if (!show) return null;

  switch (type) {
    case 'featured-post':
      return <FeaturedPost title={title} />;
    case 'labeled-post':
      return (
        <LabeledPost
          title={title}
          label={(data as LabeledPostProps).label || ''}
        />
      );
    case 'label-list':
      return <LabelList title={title} />;
    case 'latest-post':
      return <LatestPost title={title} />;
    case 'related-post':
      return <RelatedPost title={title} {...(data as RelatedPostProps)} />;
    case 'blogger-comment':
      return <BloggerComment />;
    case 'blogger-post-detail':
      return <BloggerPostDetail />;
    case 'disqus-comment':
      return <DisqusComment />;
    default:
      return null;
  }
}

export const SiteWidget = React.memo(Component);
