
'use strict';

const Controller = require('egg').Controller;

class RobotController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
User-agent: *
Disallow: /api/*
Disallow: /tasks
Allow: /
Crawl-delay: 10
Sitemap: https://www.hiredchina.com/sitemap.xml
    `;
    ctx.type = 'text/plain; charset=utf-8';
  }

  async xml() {
    const { ctx } = this;
    ctx.body = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url><loc>https://www.hiredchina.com</loc><changefreq>always</changefreq><priority>1.0</priority></url>
      <url><loc>https://www.hiredchina.com/home</loc><changefreq>always</changefreq><priority>1.0</priority></url>
      <url><loc>https://www.hiredchina.com/jobs</loc><changefreq>always</changefreq><priority>1.0</priority></url>
    </urlset>
    `;
    ctx.type = 'text/xml; charset=UTF-8';
  }
}

module.exports = RobotController;
