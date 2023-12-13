// module.exports = {
//   siteUrl: 'https://duck-blog-v2-duck-98.vercel.app/',
//   generateRobotsTxt: true,
// };

module.exports = {
  siteUrl: 'https://duck-blog-v2-duck-98.vercel.app' || 'https://localhost:3000',
  changefreq: 'daily',
  generateRobotsTxt: true, // (optional)
  exclude: ['/404'], // <= exclude here
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      `${'https://duck-blog-v2-duck-98.vercel.app' || 'https://localhost:3000'}/sitemap-0.xml`, // <==== Add here
    ],
  },
};
