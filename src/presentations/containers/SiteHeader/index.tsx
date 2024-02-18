import React from 'react';
import { BaseHeader } from '@components';
import { useBlog } from '@hooks';

export interface SiteHeaderProps {}

function Component() {
  const { title, logo, isLoading: loading, headerLinks: menus } = useBlog();

  return (
    <BaseHeader title={title} logo={logo} loading={loading} menus={menus} />
  );
}

export const SiteHeader = React.memo(Component);
