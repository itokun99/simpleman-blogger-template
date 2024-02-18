import React from 'react';
import { Post } from '@domain';
import { ListItem } from '@components';
import { Container, SectionTitle } from '@components';

export interface SimplePostListProps {
  title?: string | React.ReactNode;
  items: Post[];
  loading?: boolean;
}

function Component({ title, items, loading }: SimplePostListProps) {
  function renderItems() {
    if (loading) {
      return (
        <div className="sm:px-0">
          {[1, 2, 3].map(item => (
            <ListItem key={item} loading />
          ))}
        </div>
      );
    }
    return (
      <div className="px-6 sm:px-0">
        {items.map(item => (
          <ListItem key={item.id} title={item.title} url={item.to} />
        ))}
      </div>
    );
  }

  return (
    <div className="c-simple-post-list mb-6">
      <Container className="px-0 sm:px-6">
        <SectionTitle title={title || 'Post List'} />
        {renderItems()}
      </Container>
    </div>
  );
}

export const SimplePostList = React.memo(Component);
