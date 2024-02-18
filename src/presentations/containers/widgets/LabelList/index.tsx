import React from 'react';
import { Container, SectionTitle, Hashtag } from '@components';
import { useLabelList } from '@hooks';
import { useIntersect } from '@src/presentations/hooks/useIntersect';

export interface LabelListProps {
  title?: string | React.ReactNode;
}

function Component({ title }: LabelListProps) {
  const { ref, inView } = useIntersect();
  const query = useLabelList();

  const renderItems = () => {
    if (query.isLoading || !inView) {
      return (
        <div>
          <div className="mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"></div>
          <div className="mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"></div>
          <div className="mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"></div>
          <div className="mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"></div>
          <div className="mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"></div>
          <div className="mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"></div>
        </div>
      );
    }

    return (
      <div className="block sm:pb-8">
        {query.items.map(item => (
          <Hashtag
            key={item.id}
            title={`${item.title} (${item.count})`}
            url={item.url}
            className="mb-2 border border-slate-300 px-2 py-1 text-sm transition-colors duration-150 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
          />
        ))}
      </div>
    );
  };

  const renderContent = () => {
    return <div className="block sm:pb-8">{renderItems()}</div>;
  };

  return (
    <Container ref={ref} className="px-0 sm:px-6">
      <SectionTitle title={title || 'Label List'} />
      <div className="px-6 sm:px-0">{renderContent()}</div>
    </Container>
  );
}

export const LabelList = React.memo(Component);
