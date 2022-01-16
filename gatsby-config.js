/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Xwing Sauce",
    description: "X-Wing fan site X-Wing Sauce or Xwing Sauce",
    author: "Michael Saucedo",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Xwing`,
        name: `Xwing Starfighter`,
        icon: `src/assets/favicon/robot.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        id: `/`,
        start_url: `/`,
        background_color: `#c2d2e2`,
        display: `standalone`,
        scope: `/`,
        theme_color: `#cd4035`,
        orientation: `any`,
        description: `X-wing fan page app`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    },
  ],
}
