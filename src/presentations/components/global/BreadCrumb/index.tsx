import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadCrumbItem {
  title: string;
  url: string;
  id: number;
}

export interface BreadCrumbProps {
  items: BreadCrumbItem[];
  loading?: boolean;
}

function Item({ title, url, id }: BreadCrumbItem) {
  return (
    <li key={id} className="inline-block text-sm text-slate-700">
      <Link to={url} title={title}>
        {title}
      </Link>
    </li>
  );
}

function Divider() {
  return <li className="mx-2 inline-block text-sm text-slate-700">/</li>;
}

function Component({ items, loading }: BreadCrumbProps) {
  if (loading) {
    return (
      <div>
        <div className="mb-2 mr-2 inline-block h-4 w-24 rounded-full bg-slate-300"></div>
        <div className="mb-2 mr-2 inline-block h-4 w-32 rounded-full bg-slate-300"></div>
      </div>
    );
  }

  return (
    <ul className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
      <Item id={1} title="Home" url="/" />
      <Divider />
      {items.map(({ title, url, id }, idx) => {
        return (
          <React.Fragment key={id}>
            <Item id={id} title={title} url={url} />
            {idx !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

const BreadCrumb = React.memo(Component);

export default BreadCrumb;
