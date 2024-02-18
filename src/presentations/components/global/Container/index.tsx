import React from 'react';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function (
  { className, children },
  ref
) {
  return (
    <div ref={ref} className={clsx('container mx-auto max-w-5xl', className)}>
      {children}
    </div>
  );
});

const ContainerMemo = React.memo(Container);

export default ContainerMemo;
