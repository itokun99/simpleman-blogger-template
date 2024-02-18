import React from 'react';
import { BasePostList, Button, Container } from '@components';
import { useLatestPosts } from '@hooks';
import { useIntersect } from '@src/presentations/hooks/useIntersect';

export interface LatestPostProps {
  title?: string | React.ReactNode;
}

function Component({ title }: LatestPostProps) {
  const { ref, inView } = useIntersect();
  const query = useLatestPosts({ enabled: inView });

  const renderButton = () => {
    return (
      <Container className="px-6">
        <div className="pb-6 text-center">
          {query.isFetchingNextPage ? (
            <Button onClick={() => query.fetchNextPage()} className="">
              Loading...
            </Button>
          ) : query.hasNextPage ? (
            <Button onClick={() => query.fetchNextPage()} className="">
              See More
            </Button>
          ) : null}
        </div>
      </Container>
    );
  };

  return (
    <div ref={ref} className="latest-post">
      <BasePostList
        title={title}
        loading={query.isLoading || !inView}
        items={query.items}
      />
      {renderButton()}
    </div>
  );
}

export const LatestPost = React.memo(Component);
