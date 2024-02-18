import React, { useMemo } from 'react';
import clsx from 'clsx';
import { FiMenu, FiSearch, FiLink, FiCornerDownRight } from 'react-icons/fi';
import { IconNames } from '@general-types';

interface IconData {
  name: IconNames;
  icon: React.ElementType | string | null;
  type: 'component' | 'image';
}

const ICONS: IconData[] = [
  { name: IconNames.search, icon: FiSearch, type: 'component' },
  { name: IconNames.menu, icon: FiMenu, type: 'component' },
  { name: IconNames.link, icon: FiLink, type: 'component' },
  { name: IconNames.reply, icon: FiCornerDownRight, type: 'component' }
];

interface IconProps {
  name: IconNames;
  className?: string;
}

function Component({ name, className }: IconProps) {
  const classes = useMemo(() => clsx('c-icon', className), [className]);

  function renderIcon() {
    const source = ICONS.filter(data => data.name === name)[0];

    if (!source || !source.icon) return null;

    if (
      source.type === 'component' &&
      typeof source.icon !== 'string' &&
      source.icon
    ) {
      const Comp = source.icon;

      return <Comp className={classes} />;
    }
    return <img src={source.icon as string} alt="" className={classes} />;
  }

  return renderIcon();
}

export const Icon = React.memo(Component);
