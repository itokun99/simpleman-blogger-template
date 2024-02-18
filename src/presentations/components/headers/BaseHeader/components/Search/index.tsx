import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@components';
import { IconNames } from '@general-types';

function Component() {
  return (
    <div className="c-base-header-search flex items-center">
      <Link to="/search" className="flex h-6 w-6 items-center justify-center">
        <Icon name={IconNames.search} className="text-lg !text-slate-600" />
      </Link>
    </div>
  );
}

const Search = React.memo(Component);

export default Search;
