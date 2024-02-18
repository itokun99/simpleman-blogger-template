import React from 'react';
import { Comment } from '@components';

import { useComments, usePostDetail, usePostDetailParams } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';
import { useIntersect } from '@src/presentations/hooks/useIntersect';

function Component() {
  const { ref, inView } = useIntersect();
  const { id } = usePostDetailParams();
  const queryDetail = usePostDetail({ id, byPath: true });
  const query = useComments({
    postId: queryDetail.data?.id as string,
    enabled: inView
  });
  const items = query.data?.items || [];
  const totalComments = queryDetail.data?.replies?.totalItems || 0;

  function renderTop() {
    return (
      <div className="mb-4">
        <p className="text-lg font-bold text-slate-700">
          {!totalComments
            ? 'No Comment'
            : totalComments === 1
            ? '1 Comment'
            : `${totalComments} Comments`}
        </p>
      </div>
    );
  }

  function renderItems() {
    if (query.isLoading || !inView) {
      return null;
    }

    return (
      <>
        {items.map(comment => {
          const author = createAuthorDataFromPost(comment.author);

          return (
            <Comment
              key={comment.id}
              id={comment.id}
              author={{ name: author.title, image: author.image }}
              content={comment.content}
              date={formatDate(comment.published, 'Commented on MMM DD, YYYY')}
              replies={comment.replies}
            />
          );
        })}
      </>
    );
  }

  function renderBottom() {
    // return <CommentForm />;

    return null;
  }

  return (
    <div ref={ref} className="px-6 pb-6">
      {renderTop()}
      {renderItems()}
      {renderBottom()}
    </div>
  );
}

export const BloggerComment = React.memo(Component);
