import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItem {
  id: number;
  title: string;
  url: string;
}

export interface NavProps {
  loading?: boolean;
  items: NavItem[];
}

const LOADING_ITEMS = [1, 2];

function Component({ loading, items }: NavProps) {
  function renderItems() {
    if (loading) {
      return LOADING_ITEMS.map(v => (
        <li key={v} className="my-2 h-6 w-32 rounded-full bg-slate-300" />
      ));
    }

    return (
      <>
        {items.map(menu => (
          <li key={`nav-${menu.id}`} className="flex items-center">
            <NavLink
              className="text-slate-700"
              to={menu.url}
              title={menu.title}
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </>
    );
  }

  return (
    <ul className="c-base-header-nav hidden gap-8 md:flex">{renderItems()}</ul>
  );
}

const Nav = React.memo(Component);

export default Nav;
