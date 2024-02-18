import { useSearchParams } from 'react-router-dom';

import { SearchAndFilter, BasePostList } from '@components';

import { ContentLayout } from '@layouts';

import { useSearchPost, useDebounce } from '@hooks';

function Search() {
  const [searchParams] = useSearchParams();

  const labels = searchParams.get('labels') || '';
  const q = searchParams.get('q') || '';

  const debounceQ = useDebounce(q, 500);
  const debounceLabels = useDebounce(labels, 500);

  const query = useSearchPost({ q: debounceQ, labels: debounceLabels });

  return (
    <ContentLayout
      main={
        <BasePostList
          title="Search Result"
          loading={query.isLoading}
          items={query.items}
          empty={query.isEmpty}
        />
      }
      side={
        <div className="md:px-6">
          <SearchAndFilter />
        </div>
      }
      stickySide
      sideAlign="start"
    />
  );
}

export default Search;
