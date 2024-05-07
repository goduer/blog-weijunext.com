/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://weijunext.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
