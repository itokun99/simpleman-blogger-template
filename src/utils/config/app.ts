/**
 * Helper for get config from window object
 * @returns app config
 */
export function getConfig() {
  const w = window as unknown as { __REACT_TEMPLATE_BLOGGER__: object };
  const configs = w?.__REACT_TEMPLATE_BLOGGER__ as {
    configUrl?: string;
    isBlogger: boolean;
  };
  return configs;
}

export function getMode() {
  const devHostNames = ['localhost', '127.0.0.1', '0.0.0.0'];
  const isViteDev = !import.meta.env.PROD;

  const isDev = devHostNames.includes(window.location.hostname) || isViteDev;

  return isDev ? 'dev' : 'prod';
}
