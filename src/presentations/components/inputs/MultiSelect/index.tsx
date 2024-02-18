import React, { useMemo, useState } from 'react';
import clsx from 'clsx';

export interface MultiSelectOption {
  id: number | string;
  text: string;
  value: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  name?: string;
  type?: 'button' | 'submit';
  value?: MultiSelectOption[];
  multiple?: boolean;
  loading?: boolean;
  onChange?: (value: MultiSelectOption[]) => void;
}

function Component({
  options = [],
  type = 'submit',
  name,
  loading,
  onChange,
  value
}: MultiSelectProps) {
  const [tempValue, setTempValue] = useState<MultiSelectOption[]>(value || []);

  const wrapperClasses = useMemo(() => clsx('c-multi-select'), []);

  function onClick(option: MultiSelectOption) {
    let prevValue = [...tempValue];

    if (prevValue.some(v => v.value === option.value)) {
      prevValue = prevValue.filter(v => v.value !== option.value);
    } else {
      prevValue.push(option);
    }

    setTempValue(prevValue);
    if (onChange) onChange(prevValue);
  }

  if (loading) {
    return (
      <div>
        <div className="mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"></div>
        <div className="mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"></div>
        <div className="mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"></div>
        <div className="mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"></div>
        <div className="mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"></div>
        <div className="mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"></div>
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      {options.map(option => {
        const isSelected = tempValue.some(v => v.value === option.value);

        return (
          <button
            className={clsx(
              'c-multi-select',
              'mb-2 mr-2 inline-block border border-slate-300 px-2 py-1 text-xs text-slate-700 duration-150 hover:border-slate-700 hover:bg-slate-700 hover:text-white',
              isSelected
                ? 'border-slate-700 bg-slate-700 font-semibold text-white'
                : ''
            )}
            name={name}
            key={option.id}
            type={type}
            value={option.value}
            onClick={() => onClick(option)}
          >
            {isSelected ? `#${option.text}` : option.text}
          </button>
        );
      })}
    </div>
  );
}

const MultiSelect = React.memo(Component);

export default MultiSelect;
