
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 29430, hash: 'cbc8258baca79dfafe75d58f488036ab629cba69c28c271b38b5aef226d97320', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25546, hash: '9d4de6e71086d0e7f7a94933384393a734f2e574a13611ea65386b9bb6e796b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UMGKUYWP.css': {size: 231654, hash: 'Ocu8Oi08EIc', text: () => import('./assets-chunks/styles-UMGKUYWP_css.mjs').then(m => m.default)}
  },
};
