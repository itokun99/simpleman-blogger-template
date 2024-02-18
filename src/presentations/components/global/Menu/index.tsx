import React, { PropsWithChildren, useMemo, Fragment } from 'react';
import clsx from 'clsx';
import { Menu as BaseMenu, Transition } from '@headlessui/react';
import { MenuItem } from './components';
import { IconNames } from '@general-types';

interface MenuItem {
  id: number;
  title?: string;
  subtitle?: string;
  component?: React.ReactNode;
  onClick?: () => void;
  url?: string;
  icon?: IconNames;
}

interface MenuProps extends PropsWithChildren {
  items: MenuItem[];
  className?: string;
}

function Component({ items = [], children, className }: MenuProps) {
  const buttonClasses = useMemo(
    () => clsx('c-menu-button', className),
    [className]
  );

  return (
    <BaseMenu as="div" className="relative">
      <BaseMenu.Button className={buttonClasses}>{children}</BaseMenu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <BaseMenu.Items
          as="ul"
          className="absolute right-0 z-10 divide-y divide-slate-300 border border-slate-300 bg-white"
        >
          {items.map((item, i) => {
            return (
              <BaseMenu.Item key={i} as={React.Fragment}>
                {() => (
                  <MenuItem
                    onClick={item.onClick}
                    title={item.title}
                    subtitle={item.subtitle}
                    url={item.url}
                    icon={item.icon}
                  >
                    {item.component}
                  </MenuItem>
                )}
              </BaseMenu.Item>
            );
          })}
        </BaseMenu.Items>
      </Transition>
    </BaseMenu>
  );
}

export const Menu = React.memo(Component);
