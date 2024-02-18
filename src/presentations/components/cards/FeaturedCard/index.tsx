import React from 'react';
import Thumbnail from './Thumbnail';
import Content from './Content';
import { PostLabel } from '@general-types';
import { AuthorCardProps } from '../AuthorCard';

interface FeaturedCardProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  loading?: boolean;
  labels?: PostLabel[];
  date?: string;
  author?: AuthorCardProps;
}

function Component({
  title,
  description,
  image,
  url,
  loading,
  labels,
  date,
  author
}: FeaturedCardProps) {
  return (
    <div className="c-featured-card relative overflow-hidden sm:border sm:border-slate-300 sm:bg-white">
      <div className="flex sm:p-6">
        <Thumbnail
          title={title}
          alt={title}
          image={image}
          url={url}
          loading={loading}
        />
        <Content
          title={title}
          description={description}
          url={url}
          loading={loading}
          labels={labels}
          date={date}
          author={author}
        />
      </div>
    </div>
  );
}

const FeaturedCard = React.memo(Component);

export default FeaturedCard;
