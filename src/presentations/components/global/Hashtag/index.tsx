import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Skeleton from './components/Skeleton';

interface HashtagProps {
  title?: string;
  url?: string;
  className?: string;
  loading?: boolean;
}

function Component({ title, url, className, loading }: HashtagProps) {
  const hasUrl = Boolean(url);
  const isHref = hasUrl && url?.includes('http');
  const isLink = hasUrl && !isHref;

  const classes = useMemo(
    () =>
      clsx(
        'c-hastag',
        'mb-1 mr-2 inline-block text-xs font-semibold text-slate-700',
        className
      ),
    [className]
  );

  if (loading) {
    return <Skeleton />;
  }

  if (isHref) {
    return <a href={url} title={title} className={classes}>{`#${title}`}</a>;
  }

  if (isLink) {
    return (
      <Link to={url || ''} title={title} className={classes}>
        {`#${title}`}
      </Link>
    );
  }

  return <span className={classes}></span>;
}

const Hashtag = React.memo(Component);

export default Hashtag;
