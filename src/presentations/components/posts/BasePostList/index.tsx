import React from 'react';
import clsx from 'clsx';
import { Post } from '@domain';
import { Container, SectionTitle, SimpleCard } from '@components';
import { formatDate, createAuthorDataFromPost } from '@utils';

const LOADING_ITEMS = [1, 2, 3, 4];

export interface BasePostList {
  title?: string | React.ReactNode;
  loading?: boolean;
  empty?: boolean;
  items: Post[];
}

function Component({ title, loading, items, empty }: BasePostList) {
  const renderItems = () => {
    if (loading) {
      return (
        <>
          {LOADING_ITEMS.map((i, idx) => (
            <div
              key={i}
              className={clsx(
                'mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0',
                idx === LOADING_ITEMS.length - 1
                  ? '!mb-0 !border-b-0 sm:!pb-0'
                  : ''
              )}
            >
              <SimpleCard loading={loading} />
            </div>
          ))}
        </>
      );
    }

    if (empty) {
      return (
        <div className="w-full border border-slate-300 p-6 text-center text-slate-700">
          <p>Result not found</p>
        </div>
      );
    }

    return (
      <div className="block sm:pb-6">
        {items.map((item, idx) => (
          <div
            key={`simple-post-${item.id}`}
            className={clsx(
              'mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0',
              idx === items.length - 1 ? '!mb-0 !border-b-0 sm:!pb-0' : ''
            )}
          >
            <SimpleCard
              loading={loading}
              image={item.images?.[0].url}
              title={item.title}
              labels={item.labels}
              url={item.to}
              description={item.summary}
              date={formatDate(item.published, 'MMM DD, YYYY')}
              author={createAuthorDataFromPost(item.author)}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    return <div className="block">{renderItems()}</div>;
  };

  return (
    <div className="c-base-post-list">
      <Container className="px-0 sm:px-6">
        <SectionTitle title={title || 'Post List'} />
        <div className="sm:px-0">{renderContent()}</div>
      </Container>
    </div>
  );
}

export const BasePostList = React.memo(Component);
