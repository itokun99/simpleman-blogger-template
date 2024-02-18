import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getConfig } from '@utils';

export default function usePostDetailParams() {
  const params = useParams();

  const year = params.year;
  const month = params.month;
  const title = params.title;

  const isBlogger = getConfig().isBlogger;

  const d = useMemo(() => {
    const _id =
      year && month && title
        ? `/${year}/${month}/${title}${isBlogger ? '' : '.html'}`
        : '';
    const url = window.location.origin + _id;

    return {
      id: _id,
      url
    };
  }, [year, month, title, isBlogger]);

  return d;
}
