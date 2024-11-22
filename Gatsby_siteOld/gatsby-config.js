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
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    // `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PBMH3ZFH1K" // Google AnalyticsのトラッキングID
        ],
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: "./src/pages/"
      },
    },
  ],
};
