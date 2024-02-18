import React, { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  ButtonRounded,
  ButtonType,
  ButtonVariant,
  ButtonWidth,
  VariantType
} from '@general-types';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  type?: ButtonType;
  rounded?: ButtonRounded;
  variant?: ButtonVariant;
  width?: ButtonWidth;
  kind?: VariantType;
  url?: string;
  icon?: React.ReactNode;
  iconAlign?: 'start' | 'end';
  name?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Component({
  name,
  children,
  className,
  type = 'button',
  url,
  icon,
  onClick,
  iconAlign = 'start'
}: ButtonProps) {
  const buttonClasses = useMemo(() => {
    return clsx('c-button', '', className);
  }, [className]);

  function renderContent() {
    if (icon) {
      return (
        <div className="flex items-center gap-2">
          {iconAlign === 'start' && <div>{icon}</div>}
          <div className="flex-1">{children}</div>
          {iconAlign === 'end' && <div>{icon}</div>}
        </div>
      );
    }

    return children;
  }

  if (url?.includes('http')) {
    return (
      <a href={url} className={buttonClasses}>
        {renderContent()}
      </a>
    );
  }

  if (url) {
    return (
      <Link to={url} className={buttonClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button onClick={onClick} name={name} type={type} className={buttonClasses}>
      {renderContent()}
    </button>
  );
}

const Button = React.memo(Component);

export default Button;
