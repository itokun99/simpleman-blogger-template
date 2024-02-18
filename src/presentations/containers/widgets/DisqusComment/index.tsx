import { useConfig, usePostDetail, usePostDetailParams } from '@hooks';
import { useIntersect } from '@src/presentations/hooks/useIntersect';
import { memo } from 'react';
import { DiscussionEmbed } from 'disqus-react';

function Component() {
  const { ref, inView } = useIntersect();
  const { url, id } = usePostDetailParams();
  const query = usePostDetail({ id, byPath: true });
  const q = useConfig();

  const username = q.data?.disqus?.username || '';
  const config = {
    url,
    identifier: query.data?.id,
    title: query.data?.title
  };

  console.log('config', config);

  const isLoading =
    !inView || q.isLoading || query.isLoading || !query.data?.id;

  return (
    <div ref={ref} className="px-6 pb-6">
      {!isLoading && <DiscussionEmbed shortname={username} config={config} />}
    </div>
  );
}

export const DisqusComment = memo(Component);
