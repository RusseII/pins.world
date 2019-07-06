const fetch = require(`node-fetch`)
const { createHttpLink } = require(`apollo-link-http`)
module.exports = {
  siteMetadata: {
    title: `pins.world`,
    author: `Russell Ratcliffe & Kyle Trusler`,
    description: `Explore the world.`,
    siteUrl: `https://pins.world`,
    social: {
      twitter: `russeii`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql', // <- Configure plugin
      options: {
        typeName: 'HASURA',
        fieldName: 'hasura', // <- fieldName under which schema will be stitched
        createLink: () =>
          createHttpLink({
            uri: `${process.env.HASURA_GRAPHQL_URL}`, // <- Configure connection GraphQL url
            headers: {
              'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
            },
            fetch,
          }),
        refetchInterval: 10, // Refresh every 10 seconds for new data
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pins.world`,
        short_name: `pins.world`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2d64ea`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
