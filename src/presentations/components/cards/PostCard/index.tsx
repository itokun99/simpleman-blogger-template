import React, { useMemo } from 'react';
import clsx from 'clsx';
import Thumbnail from './Thumbnail';
import Content from './Content';
import { PostLabel } from '@general-types';
import { AuthorCardProps } from '../AuthorCard';

interface PostCardProps {
  title?: string;
  image?: string;
  url?: string;
  loading?: boolean;
  labels?: PostLabel[];
  date?: string;
  author?: AuthorCardProps;
  wrapperClassName?: string;
}

function Component({
  title,
  image,
  url,
  loading,
  labels,
  date,
  author,
  wrapperClassName
}: PostCardProps) {
  const wrapperClasses = useMemo(
    () =>
      clsx(
        'c-post-card relative overflow-hidden border-slate-300 bg-white p-0 sm:border sm:p-6',
        wrapperClassName
      ),
    [wrapperClassName]
  );

  return (
    <div className={wrapperClasses}>
      <Thumbnail
        title={title}
        alt={title}
        image={image}
        url={url}
        loading={loading}
      />
      <Content
        title={title}
        url={url}
        loading={loading}
        labels={labels}
        date={date}
        author={author}
      />
    </div>
  );
}

const PostCard = React.memo(Component);

export default PostCard;
