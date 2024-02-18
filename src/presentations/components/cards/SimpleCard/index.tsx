import React, { useMemo } from 'react';
import clsx from 'clsx';
import Content from './Content';
import { PostLabel } from '@general-types';
import { AuthorCardProps } from '../AuthorCard';

interface SimpleCardProps {
  title?: string;
  image?: string;
  url?: string;
  loading?: boolean;
  labels?: PostLabel[];
  date?: string;
  author?: AuthorCardProps;
  wrapperClassName?: string;
  description?: string;
  border?: boolean;
}

function Component({
  title,
  description,
  url,
  loading,
  labels,
  date,
  author,
  border = true,
  wrapperClassName
}: SimpleCardProps) {
  const wrapperClasses = useMemo(
    () =>
      clsx(
        'c-post-card relative overflow-hidden border-slate-300 bg-white p-0 sm:border sm:p-6',
        wrapperClassName,
        {
          'sm:border': border
        }
      ),
    [wrapperClassName, border]
  );

  return (
    <div className={wrapperClasses}>
      <Content
        title={title}
        url={url}
        loading={loading}
        labels={labels}
        date={date}
        author={author}
        description={description}
      />
    </div>
  );
}

const SimpleCard = React.memo(Component);

export default SimpleCard;
