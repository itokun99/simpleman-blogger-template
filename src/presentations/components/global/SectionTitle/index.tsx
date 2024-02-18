import React from 'react';

interface SectionTitleProps {
  title?: string | React.ReactNode;
}

function Component({ title }: SectionTitleProps) {
  return (
    <div className="relative mb-4 px-6 sm:px-0">
      <h2 className="text-md relative z-10 inline-block border border-slate-300 bg-white px-3 py-1 font-bold text-slate-700">
        {title}
      </h2>
      <div className="absolute right-0 top-1/2 w-full translate-y-1/2 border-b border-slate-300"></div>
    </div>
  );
}

const SectionTitle = React.memo(Component);

export default SectionTitle;
