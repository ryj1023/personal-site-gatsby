module.exports = {
  siteMetadata: {
    title: `Ryan's Dev Life`,
    description: `Ryan's Portfolio Site`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/index`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Anton"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
