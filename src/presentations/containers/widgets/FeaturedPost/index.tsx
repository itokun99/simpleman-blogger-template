import React from 'react';
import { Container, SectionTitle, FeaturedCard } from '@components';
import { useFeaturedPosts } from '@hooks';
import { formatDate, createAuthorDataFromPost } from '@utils';

export interface FeaturedPostProps {
  title?: string | React.ReactNode;
}

function Component({ title }: FeaturedPostProps) {
  const posts = useFeaturedPosts();

  const renderContent = () => {
    if (posts.isLoading) {
      return <FeaturedCard loading={posts.isLoading} />;
    }

    return (
      <>
        {posts.items.map(item => (
          <FeaturedCard
            key={`featured-post-${item.id}`}
            loading={posts.isLoading}
            image={item.images?.[0].url}
            title={item.title}
            labels={item.labels}
            url={item.to}
            description={item.summary}
            date={formatDate(item.published, 'MMM DD, YYYY')}
            author={createAuthorDataFromPost(item.author)}
          />
        ))}
      </>
    );
  };

  return (
    <Container className="px-0 sm:px-6">
      <SectionTitle title={title || 'Featured Post'} />
      <div className="px-6 sm:px-0">{renderContent()}</div>
      <div className="mb-6 w-full border-b border-slate-300 pb-6 sm:mb-0 sm:border-0"></div>
    </Container>
  );
}

export const FeaturedPost = React.memo(Component);
