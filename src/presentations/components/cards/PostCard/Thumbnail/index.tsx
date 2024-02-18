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
    () => clsx('c-post-card-thumbnail', 'mb-3 hidden sm:block'),
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
          className="h-0 w-full pb-[62.5%]"
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
          className="h-0 w-full pb-[62.5%]"
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
        className="h-0 w-full pb-[62.5%]"
      />
    </div>
  );
}

const Thumbnail = React.memo(Component);

export default Thumbnail;
