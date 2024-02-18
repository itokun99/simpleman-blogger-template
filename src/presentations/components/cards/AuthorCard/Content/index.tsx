import React from 'react';
import { Link } from 'react-router-dom';

interface ContentProps {
  anchor?: string;
  title?: string;
  subtitle?: string;
  loading?: boolean;
  withAnchor?: boolean;
}

function Component({
  title,
  subtitle,
  loading,
  withAnchor,
  anchor
}: ContentProps) {
  if (loading) {
    return (
      <div className="flex flex-col justify-center">
        <div className="mb-1 h-4 w-[100px] rounded-full bg-slate-300"></div>
        <div className="h-3 w-[80px] rounded-full bg-slate-300"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <h4 className="flex  whitespace-nowrap align-middle text-sm font-bold text-slate-700">
        {title}
        {withAnchor && (
          <Link className="ml-2 inline" to={anchor ? `#${anchor}` : ''}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </Link>
        )}
      </h4>
      {subtitle && <p className="text-xs">{subtitle}</p>}
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
