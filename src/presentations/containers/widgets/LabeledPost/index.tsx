import React from 'react';
import clsx from 'clsx';
import { Container, SectionTitle, PostCard } from '@components';
import { useLabeledPosts, useMediaQuery } from '@hooks';
import { formatDate, createAuthorDataFromPost, removeHtmlTags } from '@utils';
import { useIntersect } from '@src/presentations/hooks/useIntersect';

export interface LabeledPostProps {
  label: string | string[];
  title?: string | React.ReactNode;
}

const loadingArr = [1, 2, 3, 4];

function Component({ label, title }: LabeledPostProps) {
  const { ref, inView } = useIntersect();
  const posts = useLabeledPosts({ label, enabled: inView });

  const isSM = useMediaQuery(`(min-width: 640px)`);

  const renderItems = () => {
    if (posts.isLoading || !inView) {
      return (
        <>
          {loadingArr.map((v, idx) => (
            <div
              key={v}
              className={clsx(
                'inline-block w-full border-b p-6 sm:w-72 sm:border-none sm:p-0',
                {
                  'sm:mr-6': idx !== loadingArr.length - 1
                }
              )}
            >
              <PostCard loading />
            </div>
          ))}
        </>
      );
    }

    return (
      <>
        {posts.items.map((item, idx) => (
          <div
            key={`labeled-post-${item.id}`}
            className={clsx(
              'inline-block w-full border-b p-6 sm:w-72 sm:border-none sm:p-0',
              {
                'sm:mr-6': idx !== posts.items.length - 1
              }
            )}
          >
            <PostCard
              loading={posts.isLoading}
              image={item.images?.[0].url}
              title={isSM ? removeHtmlTags(item.title, 45, '...') : item.title}
              labels={item.labels}
              url={item.to}
              date={formatDate(item.published, 'MMM DD, YYYY')}
              author={createAuthorDataFromPost(item.author)}
            />
          </div>
        ))}
      </>
    );
  };

  const renderContent = () => {
    return (
      <div className="block flex-nowrap sm:overflow-x-auto sm:whitespace-nowrap sm:pb-8">
        {renderItems()}
      </div>
    );
  };

  return (
    <Container ref={ref} className="px-0 sm:px-6">
      <SectionTitle title={title || String(label) || 'Post by Category'} />
      <div className="sm:px-0">{renderContent()}</div>
      <div className="mb-6 w-full border-b border-slate-300 sm:mb-0 sm:border-0"></div>
    </Container>
  );
}

export const LabeledPost = React.memo(Component);
