import React from 'react';
import { AuthorCard } from '@components';

function Component() {
  return (
    <div className="flex flex-1 flex-col">
      {/* title */}
      <div className="pb-4">
        <div className="mb-2 h-3 w-[80%] rounded-full bg-slate-300"></div>
        <div className="h-3 w-[60%] rounded-full bg-slate-300"></div>
      </div>

      {/* Date */}
      <div className="pb-4">
        <div className="h-3 w-[40%] rounded-full bg-slate-300"></div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between sm:flex-nowrap">
        <div className="mb-6 w-full sm:mb-0 sm:w-auto">
          <AuthorCard loading />
        </div>
      </div>
    </div>
  );
}

const Skeleton = React.memo(Component);

export default Skeleton;
