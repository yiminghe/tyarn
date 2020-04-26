const registry = 'https://registry.npm.taobao.org';
const MIRROR_URL = 'https://cdn.npm.taobao.org/dist';

const env = {
  NODEJS_ORG_MIRROR: `${MIRROR_URL}/node`,
  NVM_NODEJS_ORG_MIRROR: `${MIRROR_URL}/node`,
  NVM_IOJS_ORG_MIRROR: `${MIRROR_URL}/iojs`,
  PHANTOMJS_CDNURL: `${MIRROR_URL}/phantomjs`,
  CHROMEDRIVER_CDNURL: `${MIRROR_URL}/chromedriver/`.replace('https://', 'http://'),
  ELECTRON_MIRROR: `${MIRROR_URL}/electron/`,
  SASS_BINARY_SITE: `${MIRROR_URL}/node-sass`,
  OPERADRIVER_CDNURL: `${MIRROR_URL}/operadriver`,
  PUPPETEER_DOWNLOAD_HOST: MIRROR_URL,
  npm_config_canvas_binary_host_mirror:`${MIRROR_URL}/node-canvas-prebuilt`,
  npm_config_registry: registry,
  yarn_registry: registry,
};

module.exports = env;
