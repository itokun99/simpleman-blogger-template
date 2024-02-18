import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@components';

export interface BrandProps {
  loading?: boolean;
  logo: string;
  title: string;
}

function Component({ loading, logo, title }: BrandProps) {
  return (
    <div className="c-base-header-brand">
      <Link to="/">
        <div className="flex items-center">
          <Image
            loading={loading}
            src={logo}
            alt={title}
            className="mr-2 h-10 w-10 overflow-hidden rounded-full"
          />
          {loading ? (
            <div className="h-6 w-24 rounded-full bg-slate-300"></div>
          ) : (
            <h2 className="text-xl font-bold text-slate-700">{title}</h2>
          )}
        </div>
      </Link>
    </div>
  );
}

const Brand = React.memo(Component);

export default Brand;
