const domReady = fn => {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

const assetsBaseUrl = () =>
  document.documentElement.dataset.assetsBaseUrl || '/';

export { assetsBaseUrl, domReady };
