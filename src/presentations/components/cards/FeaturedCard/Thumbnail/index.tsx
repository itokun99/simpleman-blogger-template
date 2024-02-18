import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Image } from '@components';

interface ThumbnailProps {
  image?: string;
  title?: string;
  alt?: string;
  url?: string;
  loading?: boolean;
}

function Component({ image, alt, title, url, loading }: ThumbnailProps) {
  const classes = useMemo(
    () => clsx('c-featured-card-thumbnail', 'hidden basis-6/12 pr-6 md:block'),
    []
  );

  if (url && url.includes('http')) {
    return (
      <a href={url} title={title} className={classes}>
        <Image
          loading={loading}
          src={image}
          alt={alt}
          title={title}
          className="h-full w-full"
        />
      </a>
    );
  }

  if (url) {
    return (
      <Link className={classes} to={url} title={title}>
        <Image
          loading={loading}
          src={image}
          alt={alt}
          title={title}
          className="h-full w-full"
        />
      </Link>
    );
  }

  return (
    <div className={classes}>
      <Image
        loading={loading}
        src={image}
        alt={alt}
        title={title}
        className="h-full w-full"
      />
    </div>
  );
}

const Thumbnail = React.memo(Component);

export default Thumbnail;
