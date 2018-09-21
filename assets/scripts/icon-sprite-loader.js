import 'whatwg-fetch';
import { domReady, assetsBaseUrl } from './utils';

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../icons/', true, /\.svg$/));

domReady(() => {
  // eslint-disable-next-line camelcase
  fetch(`${assetsBaseUrl()}images/icons.svg`)
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.statusText}: ${response.url}`);
      }
      return response.text();
    })
    .then(data => {
      const spriteWrapper = document.createElement('div');
      spriteWrapper.innerHTML = data;
      spriteWrapper.style.display = 'none';
      document.body.appendChild(spriteWrapper);
    });
});
