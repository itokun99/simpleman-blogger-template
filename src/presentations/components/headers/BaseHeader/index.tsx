import { memo } from 'react';
import { Container } from '@components';
import Brand from './components/Brand';
import Nav from './components/Nav';
import Search from './components/Search';

export interface BaseHeaderProps {
  loading?: boolean;
  logo: string;
  title: string;
  menus: {
    id: number;
    title: string;
    url: string;
  }[];
}

function Component({ loading, logo, title, menus }: BaseHeaderProps) {
  return (
    <div className="c-base-header fixed top-0 z-20 w-full border border-b-slate-300 bg-white py-2">
      <Container className="c-base-header-container px-6">
        <div className="flex justify-between">
          <div>
            <Brand loading={loading} title={title} logo={logo} />
          </div>
          <div className="flex gap-8">
            <Nav loading={loading} items={menus} />
            {!loading && <Search />}
          </div>
        </div>
      </Container>
    </div>
  );
}

export const BaseHeader = memo(Component);
