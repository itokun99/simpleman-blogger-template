import { SiteWidget } from '@containers';
import { useConfig } from '@hooks';
import { ContentLayout } from '@layouts';

function Home() {
  const config = useConfig();
  const section = config.data?.sectionConfig?.homepage;
  const top = section?.top || [];
  const main = section?.main || [];
  const side = section?.side || [];

  return (
    <ContentLayout
      top={
        <>
          {top.map(v => (
            <SiteWidget key={v.id} {...v} />
          ))}
        </>
      }
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

export default Home;
