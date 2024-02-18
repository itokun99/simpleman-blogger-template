import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorCard } from '@components';
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

function Component({ title, url, date, author, loading }: ContentProps) {
  if (loading) return <Skeleton />;

  return (
    <div className="">
      {/* title */}
      <div className="pb-0 md:pb-2">
        <Link to={url || ''} className="inline-block">
          <h2 className="w-full whitespace-normal text-lg font-bold text-slate-700 sm:text-base">
            {title}
          </h2>
        </Link>
      </div>

      {/* Date */}
      <div className="pb-4">
        <p className="text-xs text-slate-700">
          {date && `Published on ${date}`}
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between sm:flex-nowrap">
        <div className="w-full sm:mb-0 sm:w-auto">
          <AuthorCard {...author} />
        </div>
      </div>
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
