
'use strict';

const Controller = require('egg').Controller;

class BaiduController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(`originalUrl: ${ctx.request.originalUrl}`);
    const systemObj = {
      title: 'test',
      faviconUrl: '',
      keywork: '',
      description: '',
    };
    const positionList = [];
    const personList = [];

    const i18nObj = {};

    await ctx.render('baidu.html', {
      ...systemObj,
      positionList,
      personList,
      i18nObj,
    });
  }
}

module.exports = BaiduController;
