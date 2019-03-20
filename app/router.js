'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.all('/api/*', controller.home.proxy);
  router.get('/home', controller.baidu.index);
  router.get('/robots.txt', controller.robots.index);
  router.get('/sitemap.xml', controller.robots.xml);
  router.get('*', controller.home.index);
};
