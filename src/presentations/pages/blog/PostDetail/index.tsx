import { SiteWidget } from '@containers';
import { useConfig } from '@hooks';
import { ContentLayout } from '@layouts';

function PostDetail() {
  const config = useConfig();
  const section = config.data?.sectionConfig?.postDetail;
  const side = section?.side || [];
  const main = section?.main || [];

  return (
    <ContentLayout
      main={
        <>
          {main.map(v => (
            <SiteWidget key={v.id} {...v} />
          ))}
        </>
      }
      side={
        <>
          {side.map(v => (
            <SiteWidget key={v.id} {...v} />
          ))}
        </>
      }
      stickySide
    />
  );
}

export default PostDetail;
