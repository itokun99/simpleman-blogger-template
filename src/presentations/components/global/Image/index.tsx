import React, { useMemo } from 'react';
import clsx from 'clsx';
// import { useInView } from 'react-intersection-observer';
import { useBlog } from '@hooks';
import { useIntersect } from '@src/presentations/hooks/useIntersect';

interface ImageProps {
  src?: string;
  title?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  loading?: boolean;
}

function Component({
  src,
  title,
  alt,
  className,
  imageClassName,
  loading
}: ImageProps) {
  const { config } = useBlog();

  const { ref, inView } = useIntersect();

  const wrapperClasses = useMemo(
    () => clsx('c-image', 'relative bg-slate-300', className),
    [className]
  );
  const imageClasses = useMemo(
    () =>
      clsx(
        'c-image-img',
        'absolute h-full w-full max-w-full object-cover object-center',
        imageClassName
      ),
    [imageClassName]
  );

  const imgSrc = useMemo(
    () => src || config.data?.app?.defaultImage,
    [src, config.data?.app?.defaultImage]
  );

  return (
    <div ref={ref} className={wrapperClasses}>
      {inView && !loading ? (
        <img
          src={imgSrc}
          loading="lazy"
          className={imageClasses}
          title={title}
          alt={alt}
        />
      ) : null}
    </div>
  );
}

const Image = React.memo(Component);

export default Image;
