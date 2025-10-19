/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://streamlyne.in",
  generateRobotsTxt: false, // We created a custom robots.txt
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404"],
  transform: async (config, path) => {
    // Custom priority for important pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/features") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/privacy" || path === "/terms") {
      priority = 0.3;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};