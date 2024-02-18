import React from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { TextField, MultiSelect, MultiSelectOption } from '@components';
import { useLabelList } from '@hooks';

function createOptions(
  items: { id: string; title: string; count: number; url: string }[]
) {
  return items.map(item => ({
    id: item.id,
    text: item.title,
    value: item.title
  }));
}

function Component() {
  const query = useLabelList();
  const [searchParams, setSearchParams] = useSearchParams();

  const labels = searchParams.get('labels') || '';
  const q = searchParams.get('q') || '';
  const queryStrings = Object.fromEntries(searchParams.entries());

  const selectValue = labels
    ? labels.split(',').map((v, i) => ({ id: i + 1, value: v, text: v }))
    : [];

  const options = createOptions(query.items);

  function onChangeSelect(value: MultiSelectOption[]) {
    const newlabels = value.map(v => v.value).join();
    setSearchParams(v => ({ ...v, ...queryStrings, labels: newlabels }));
  }

  function onChangeTextField(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchParams(v => ({ ...v, ...queryStrings, q: value }));
  }

  function onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.();
    setSearchParams(v => ({ ...v, ...queryStrings }));
  }

  return (
    <Form
      onSubmit={onSubmitForm}
      className="c-search-filter border-b border-slate-300 px-6 pb-6 md:border md:p-6"
    >
      <div className="c-form-group mb-6">
        <TextField
          name="q"
          type="search"
          placeholder={`Type anything to search...`}
          defaultValue={q || ''}
          onChange={onChangeTextField}
        />
      </div>
      <div className="c-form-group">
        <MultiSelect
          loading={query.isLoading}
          name="labels"
          type="button"
          value={selectValue}
          options={options}
          onChange={onChangeSelect}
        />
      </div>
    </Form>
  );
}

const SearchAndFilter = React.memo(Component);

export default SearchAndFilter;
