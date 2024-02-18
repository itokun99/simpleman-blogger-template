import ReactDOM from 'react-dom/client';
import { App } from '@apps';

const rootEl = document.getElementById('root');
const dataConfigUrl = rootEl?.getAttribute('data-config-url');
const dataIsBlogger = rootEl?.getAttribute('data-is-blogger') === 'true';

if (rootEl && dataConfigUrl) {
  const w = window as unknown as { __REACT_TEMPLATE_BLOGGER__: object };
  w['__REACT_TEMPLATE_BLOGGER__'] = {
    configUrl: dataConfigUrl,
    isBlogger: dataIsBlogger
  };

  ReactDOM.createRoot(rootEl!).render(<App />);
}
