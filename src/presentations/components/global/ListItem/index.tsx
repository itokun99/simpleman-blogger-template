import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Image } from '@components';

interface ListItemProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  image?: string;
  url?: string;
  className?: string;
  loading?: boolean;
}

function Component({
  title,
  subtitle,
  image,
  url,
  className,
  loading
}: ListItemProps) {
  const wrapperClasses = React.useMemo(
    () =>
      clsx(
        'c-list-item',
        'mb-2 block border border-slate-300 px-2 py-2 text-slate-700 duration-150 hover:bg-slate-700 hover:text-white',
        className
      ),
    [className]
  );

  function renderContent() {
    return (
      <div className="flex gap-2">
        {image && (
          <Image
            src={image}
            alt={title as string}
            className="h-10 w-10 overflow-hidden rounded-md"
          />
        )}
        <div className="flex-1">
          {title && <h3 className="text-xs font-semibold">{title}</h3>}
          {subtitle && <p className="text-xs">{subtitle}</p>}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="mb-4">
        <div className="mb-2 h-4 w-full rounded-full bg-slate-300"></div>
        <div className="h-4 w-8/12 rounded-full bg-slate-300"></div>
      </div>
    );
  }

  if (url)
    return (
      <Link to={url} className={wrapperClasses}>
        {renderContent()}
      </Link>
    );

  return <div className={wrapperClasses}>{renderContent()}</div>;
}

export const ListItem = React.memo(Component);
