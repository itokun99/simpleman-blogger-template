import React, { PropsWithChildren } from 'react';

export interface BaseLayoutProps extends PropsWithChildren {
  header: React.ReactNode;
  footer: React.ReactNode;
}

export function BaseLayout({ header, children, footer }: BaseLayoutProps) {
  return (
    <div className="c-base-layout">
      {header}
      <div className="c-base-layout-main pt-20">{children}</div>
      {footer}
    </div>
  );
}
