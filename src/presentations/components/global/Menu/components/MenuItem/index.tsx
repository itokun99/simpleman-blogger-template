import React, { useMemo, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Icon } from '@components';
import { IconNames } from '@general-types';

interface MenuItemProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  icon?: IconNames;
  url?: string;
  onClick?: () => void;
}

function Component({
  title,
  subtitle,
  icon,
  url,
  children,
  onClick
}: MenuItemProps) {
  const classes = useMemo(
    () =>
      clsx(
        'c-menu-item',
        'block whitespace-pre break-normal px-4 py-2 text-left'
      ),
    []
  );
  const titleClasses = useMemo(
    () =>
      clsx('c-menu-item-title', 'text-sm text-slate-700', { 'mb-1': subtitle }),
    [subtitle]
  );
  const subtitleClasses = useMemo(
    () => clsx('c-menu-item-subtitle', 'text-xs text-slate-400'),
    []
  );

  const iconClasses = useMemo(
    () => clsx('c-menu-item-icon', 'text-[20px] !text-slate-700'),
    []
  );

  function renderTitle() {
    return <p className={titleClasses}>{title}</p>;
  }

  function renderSubtitle() {
    return <p className={subtitleClasses}>{subtitle}</p>;
  }

  function renderIcon() {
    if (!icon) return null;
    return <Icon name={icon} className={iconClasses} />;
  }

  function renderContent() {
    // render child
    if (children) return children;

    // render when icon defined
    if (icon) {
      return (
        <div className="c-menu-item-row flex gap-2">
          <div className="c-menu-item-icon">{renderIcon()}</div>
          <div className="c-menu-item-text">
            {renderTitle()}
            {renderSubtitle()}
          </div>
        </div>
      );
    }

    // default render
    return (
      <>
        {renderTitle()}
        {renderSubtitle()}
      </>
    );
  }

  function renderLink() {
    return (
      <Link to={url || ''} className={classes}>
        {renderContent()}
      </Link>
    );
  }

  function renderButton() {
    return (
      <button onClick={onClick} type="button" className={classes}>
        {renderContent()}
      </button>
    );
  }

  return (
    <li className="relative hover:bg-slate-100">
      {url ? renderLink() : renderButton()}
    </li>
  );
}

export const MenuItem = React.memo(Component);
