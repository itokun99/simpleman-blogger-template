import React from 'react';
import { Image } from '@components';
import Content from './Content';

export interface AuthorCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  loading?: boolean;
  withAnchor?: boolean;
  anchor?: string;
}

function Component({
  title,
  subtitle,
  image,
  loading,
  withAnchor,
  anchor
}: AuthorCardProps) {

  return (
    <div className="c-author-card">
      <div className="flex gap-2">
        <Image
          src={image}
          alt={title}
          title={title}
          loading={loading}
          className="test h-9 w-9 overflow-hidden rounded-full"
        />
        <Content
          anchor={anchor}
          withAnchor={withAnchor}
          title={title}
          subtitle={subtitle}
          loading={loading}
        />
      </div>
    </div>
  );
}

const AuthorCard = React.memo(Component);

export default AuthorCard;
