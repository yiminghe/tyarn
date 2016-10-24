#!/usr/bin/env node

'use strict';

const registry = 'https://registry.npm.taobao.org';
const MIRROR_URL = 'https://npm.taobao.org/mirrors';

const env = {
  NODEJS_ORG_MIRROR: `${MIRROR_URL}/node`,
  NVM_NODEJS_ORG_MIRROR: `${MIRROR_URL}/node`,
  NVM_IOJS_ORG_MIRROR: `${MIRROR_URL}/iojs`,
  PHANTOMJS_CDNURL: `${MIRROR_URL}/phantomjs`,
  CHROMEDRIVER_CDNURL: 'http://tnpm-hz.oss-cn-hangzhou.aliyuncs.com/dist/chromedriver',
  OPERADRIVER_CDNURL: `${MIRROR_URL}/operadriver`,
  ELECTRON_MIRROR: `${MIRROR_URL}/electron/`,
  SASS_BINARY_SITE: `${MIRROR_URL}/node-sass`,
  FLOW_BINARY_MIRROR: 'https://github.com/facebook/flow/releases/download/v',
  npm_config_registry: registry,
  yarn_registry: registry,
};

// can not put inside run, ENOENT
require('./run')(env);

