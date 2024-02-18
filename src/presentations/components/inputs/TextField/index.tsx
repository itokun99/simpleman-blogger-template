import React from 'react';
import clsx from 'clsx';

export interface TextFieldProps {
  value?: string;
  type?: 'text' | 'search';
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function Component({
  value,
  type,
  className,
  wrapperClassName,
  placeholder,
  name,
  defaultValue,
  onBlur,
  onChange
}: TextFieldProps) {
  const inputClasses = clsx(
    'c-text-field-input',
    'w-full border-b border-slate-300 px-0 pb-2 pt-2 text-slate-700 outline-none placeholder:text-slate-500 focus:hover:border-slate-700',
    className
  );
  const wrapperClasses = clsx('c-text-field', wrapperClassName);

  return (
    <div className={wrapperClasses}>
      <input
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        type={type}
        value={value}
        className={inputClasses}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
}

const TextField = React.memo(Component);

export default TextField;
