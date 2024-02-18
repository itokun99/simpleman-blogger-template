import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Container } from '@components';

export interface ContentLayoutProps {
  top?: React.ReactNode;
  main: React.ReactNode;
  side: React.ReactNode;
  stickySide?: boolean;
  bottom?: React.ReactNode;
  sideAlign?: 'start' | 'end';
}

function Component({
  top,
  main,
  side,
  stickySide,
  bottom,
  sideAlign = 'end'
}: ContentLayoutProps) {
  const innerSideClasses = useMemo(
    () => clsx(`mb-6 sm:px-0 md:top-20`, stickySide && 'md:sticky'),
    [stickySide]
  );

  const renderSide = () => {
    return (
      <aside className="c-content-layout-side relative w-full md:w-4/12">
        <div className={innerSideClasses}>{side}</div>
      </aside>
    );
  };

  return (
    <div className="c-content-layout">
      {top}
      <Container>
        <div className="relative flex flex-wrap">
          {sideAlign === 'start' && renderSide()}
          <div className="c-content-layout-main w-full md:w-8/12">{main}</div>
          {sideAlign === 'end' && renderSide()}
        </div>
      </Container>
      {bottom}
    </div>
  );
}

export const ContentLayout = React.memo(Component);
