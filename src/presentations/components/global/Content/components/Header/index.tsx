import React from 'react';
import { BreadCrumb as BreadCrumbType } from '@general-types';
import { BreadCrumb, AuthorCard } from '@components';

interface HeaderProps {
  loading?: boolean;
  title: string;
  author: {
    title: string;
    subtitle: string;
    image: string;
  };
  breadcrumb: BreadCrumbType[];
}

function Component({ author, title, loading, breadcrumb }: HeaderProps) {
  function renderTitle() {
    if (loading) {
      return (
        <div>
          <div className="mb-2 h-6 w-4/5 rounded-full bg-slate-300"></div>
          <div className="mb-6 h-6 w-3/5 rounded-full bg-slate-300"></div>
        </div>
      );
    }
    return <h1 className="mb-4 text-2xl font-bold text-slate-700">{title}</h1>;
  }

  return (
    <div className="c-content-header">
      <BreadCrumb loading={loading} items={breadcrumb} />
      {/* Post Header */}
      <div className="">
        {renderTitle()}
        <AuthorCard
          loading={loading}
          title={author?.title}
          subtitle={author?.subtitle}
          image={author?.image}
        />
        <div className="mb-4"></div>
        <div className="mb-8 border-b border-slate-300"></div>
      </div>
    </div>
  );
}

const Header = React.memo(Component);

export default Header;
