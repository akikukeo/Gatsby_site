/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/Gatsby_site", // pathPrefixをここに追加
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PBMH3ZFH1K" // Google AnalyticsのトラッキングID
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    }
  ],
};
