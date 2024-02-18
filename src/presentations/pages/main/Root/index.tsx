import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from '@components';
import { SiteHeader } from '@containers';
import { BaseLayout } from '@layouts';
import { useBlog } from '@hooks';
import { Helmet } from 'react-helmet-async';

function Root() {
  const query = useBlog();

  return (
    <>
      <Helmet>
        <title>{query.title}</title>
        <link rel="canonical" href={query.data?.url} />
      </Helmet>
      <BaseLayout
        header={<SiteHeader />}
        footer={
          <>
            <Footer />
            <ScrollRestoration />
          </>
        }
      >
        <Outlet />
      </BaseLayout>
    </>
  );
}
export default Root;
