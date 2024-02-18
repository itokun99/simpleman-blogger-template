import React from 'react';
import { AuthorCard, Hashtag } from '@components';

function Component() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="pt-0 md:pt-2">
        {[1, 2, 3].map(v => (
          <Hashtag key={v} loading />
        ))}
      </div>
      {/* title */}
      <div className="pb-4">
        <div className="mb-2 h-5 w-[80%] rounded-full bg-slate-300"></div>
        <div className="h-5 w-[60%] rounded-full bg-slate-300"></div>
      </div>

      {/* Date */}
      <div className="pb-4">
        <div className="h-3 w-[40%] rounded-full bg-slate-300"></div>
      </div>

      {/* Description */}
      <div className="flex-1 pb-6">
        {/* <p className="text-sm text-slate-700">{description}</p> */}
        <div className="mb-2 h-4 w-[85%] rounded-full bg-slate-300"></div>
        <div className="mb-2 h-4 w-[90%] rounded-full bg-slate-300"></div>
        <div className="mb-2 h-4 w-[80%] rounded-full bg-slate-300"></div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between sm:flex-nowrap">
        <div className="mb-6 w-full sm:mb-0 sm:w-auto">
          <AuthorCard loading />
        </div>
        <div className="h-8 w-[150px] rounded-full bg-slate-300"></div>
        {/* <Button
          url={url}
          iconAlign="end"
          icon={<FiArrowRight className="text-lg !text-white" />}
        >
          Read More
        </Button> */}
      </div>
    </div>
  );
}

const Skeleton = React.memo(Component);

export default Skeleton;
