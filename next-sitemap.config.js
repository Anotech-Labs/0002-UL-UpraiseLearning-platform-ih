// next-sitemap.config.mjs or next-sitemap.config.js (if using type: "module")

export default {
  siteUrl: "https://www.upraiselearning.com",
  generateRobotsTxt: true,
  exclude: ["/admin/*", "/api/private/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.upraiselearning.com/sitemap-0.xml",
    ],
  },
};
