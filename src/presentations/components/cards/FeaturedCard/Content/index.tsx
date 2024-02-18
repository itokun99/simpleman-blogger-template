import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Button, AuthorCard, Hashtag } from '@components';
import { PostLabel } from '@general-types';
import { AuthorCardProps } from '../../AuthorCard';
import Skeleton from './Skeleton';
interface ContentProps {
  title?: string;
  description?: string;
  url?: string;
  loading?: boolean;
  labels?: PostLabel[];
  date?: string;
  author?: AuthorCardProps;
}

function Component({
  title,
  description,
  url,
  labels = [],
  date,
  author,
  loading
}: ContentProps) {
  if (loading) return <Skeleton />;

  return (
    <div className="flex flex-1 flex-col">
      {/* Tags */}
      <div className="pt-0 md:pt-2">
        {labels.map(v => (
          <Hashtag key={v.title} title={v.title} url={v.url} />
        ))}
      </div>
      {/* title */}
      <div className="pb-0 md:pb-2">
        <Link to={url || ''}>
          <h2 className="text-xl font-bold text-slate-700">{title}</h2>
        </Link>
      </div>

      {/* Date */}
      <div className="pb-4">
        <p className="text-xs text-slate-700">
          {date && `Published on ${date}`}
        </p>
      </div>

      {/* Description */}
      <div className="flex-1 pb-6">
        <p className="text-sm text-slate-700">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between sm:flex-nowrap">
        <div className="mb-6 w-full sm:mb-0 sm:w-auto">
          <AuthorCard {...author} />
        </div>
        <Button
          url={url}
          iconAlign="end"
          className="bg-sky-600 px-4 py-2 text-sm font-bold text-white"
          icon={<FiArrowRight className="text-lg !text-white" />}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
