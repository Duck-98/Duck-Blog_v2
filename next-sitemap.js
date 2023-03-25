// module.exports = {
//   siteUrl: 'https://duck-blog-v2-duck-98.vercel.app/',
//   generateRobotsTxt: true,
// };

module.exports = {
  siteUrl: 'https://duck-blog-v2-duck-98.vercel.app/' || 'https://localhost:3000/',
  generateRobotsTxt: true, // (optional)
  exclude: ['/404'], // <= exclude here
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${
        'https://duck-blog-v2-duck-98.vercel.app/' || 'https://localhost:3000/'
      }server-sitemap.xml`, // <==== Add here
    ],
  },
};
