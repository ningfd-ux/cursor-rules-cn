/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cursorrules.fun',
  generateRobotsTxt: false,
  outDir: './out',
};
