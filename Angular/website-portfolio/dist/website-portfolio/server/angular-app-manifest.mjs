
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 29430, hash: '8d1b187123ac87e7a31b5d6aa009d3accd3b120efaa2b4fc34af669f1c5b8574', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25546, hash: 'b30546571394e7b3fef054aca38e9d926bc8d4cb3ce98928a2cab3869a4e50de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UMGKUYWP.css': {size: 231654, hash: 'Ocu8Oi08EIc', text: () => import('./assets-chunks/styles-UMGKUYWP_css.mjs').then(m => m.default)}
  },
};
