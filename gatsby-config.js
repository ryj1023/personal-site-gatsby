module.exports = {
  siteMetadata: {
    title: `Ryan's Dev Life`,
    description: `Ryan's Portfolio Site`,
    author: ``,
    siteUrl: `https://www.ryansdevlife.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Anton`],
        display: "block",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,

      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdfs`,
        path: `${__dirname}/src/pdf/`,
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
        icon: `src/images/logo-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-netlify",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
