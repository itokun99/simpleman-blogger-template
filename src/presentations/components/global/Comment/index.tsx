import React, { useMemo } from 'react';
import { AuthorCard, Button, Icon, Menu } from '@components';
import DOMPurify from 'dompurify';
import { IconNames } from '@general-types';
import { CommentItem } from '@blog';
import { createAuthorDataFromPost, formatDate } from '@utils';
import clsx from 'clsx';

interface CommentProps {
  id: string;
  author: {
    name: string;
    image: string;
  };
  content?: string;
  date: string;
  replies?: CommentItem[];
  reply?: boolean;
}

function Component({
  id,
  author,
  content,
  date,
  replies,
  reply
}: CommentProps) {
  const wrapperClasses = useMemo(
    () =>
      clsx(
        'c-comment',
        'group/comment mb-6 border border-slate-300 p-4',
        reply ? 'border-0' : ''
      ),
    [reply]
  );

  const renderReplies = () => {
    if (!replies || replies.length === 0) {
      return null;
    }

    return (
      <div className="c-comment-replies">
        {replies?.map(comment => {
          const author = createAuthorDataFromPost(comment.author);
          return (
            <Comment
              reply
              key={comment.id}
              id={comment.id}
              author={{ name: author.title, image: author.image }}
              content={comment.content}
              date={formatDate(comment.published, 'Commented on MMM DD, YYYY')}
              replies={comment.replies}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div id={id} className={wrapperClasses}>
      <div className="c-comment-header mb-4 flex justify-between">
        <div className="c-comment-author">
          <AuthorCard
            title={author.name}
            image={author.image}
            subtitle={date}
            anchor={id}
          />
        </div>
        <div className="c-comment-header-action ">
          <div className="">
            <Menu
              items={[
                {
                  id: 1,
                  title: 'Report',
                  onClick: () => {}
                },
                {
                  id: 2,
                  title: 'Copy Link',
                  url: '#'
                }
              ]}
            >
              <Icon name={IconNames.menu} className="!text-slate-700" />
            </Menu>
          </div>
        </div>
      </div>
      <div className="c-comment-body pb-6">
        {content && (
          <div
            className="c-comment-item-content inner-html small-text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content)
            }}
          />
        )}
      </div>
      <div className="c-comment-footer">
        <Button
          className="group/cta text-xs text-slate-700 hover:text-sky-600"
          icon={
            <Icon
              name={IconNames.reply}
              className="text-sm !text-slate-700 group-hover/cta:!text-sky-600"
            />
          }
        >
          Reply
        </Button>
      </div>
      {renderReplies()}
    </div>
  );
}

export const Comment = React.memo(Component);
