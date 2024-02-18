import React from 'react';

function Component() {
  return (
    <div className="bg-slate-300 inline-block w-16 h-3 mr-2 mb-1 rounded-full" />
  );
}

const Skeleton = React.memo(Component);

export default Skeleton;
