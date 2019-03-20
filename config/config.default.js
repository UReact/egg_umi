'use strict';

const path = require('path');
const fs = require('fs');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540891018161_6566';

  config.middleware = [ 'serve', 'i18nHandler' ];

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public',
    devServer: {
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: path.join(__dirname, '../app/web'),
        BROWSER: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
      },
      debug: true,
    },
  };

  config.security = {
    csrf: false,
  };

  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    // https://node.console.aliyun.com/
    appid: process.env.EGG_ALINODE_APPID || '78234',
    secret: process.env.EGG_ALINODE_SECRET || 'f79e84a74f3c3203f7d26273083dc84c12f5a6ab',
  };

  config.apiPath = 'http://127.0.0.1:7107';

  config.cluster = {
    listen: {
      port: 3103,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/web/src/assets/favicon.png')),
  };

  return config;
};
