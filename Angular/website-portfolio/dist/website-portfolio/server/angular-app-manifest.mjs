
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 29430, hash: 'ce6ae100480b5f48d10292fb3c072b66aa1c136a6f81931899747c6491c5a4c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25546, hash: '4d898f405e3b0ba37f1be9bb0ca9121238826f5dd09a691d73a42a8805a28fcc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UMGKUYWP.css': {size: 231654, hash: 'Ocu8Oi08EIc', text: () => import('./assets-chunks/styles-UMGKUYWP_css.mjs').then(m => m.default)}
  },
};
