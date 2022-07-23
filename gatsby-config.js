module.exports = {
  siteMetadata: {
    title: `sli.st - home`,
    description: `sli.st · /ˈesˌlɪst/ noun - a set of items from a particular art form, or arbitrary class, curated by sli.st ; DJ, persona, idea, online curator, this website's domain name, a community`,
    author: `sli.st`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `discounts`,
        path: `${__dirname}/content/discounts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reflections`,
        path: `${__dirname}/content/reflections/`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SLi.ST`,
        short_name: `SLi.ST`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-80661C8JJ3", // Google Analytics / GA
    //       "AW-CONVERSION_ID", // Google Ads / Adwords / AW
    //       "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //       defer: true,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //       defer: true,
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://sli.us5.list-manage.com/subscribe/post?u=ffa00e0e7d456f08048753fe5&amp;id=3a59f86a3b", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     includeInDevelopment: true, // optional parameter to include script in development
    //     id: 2753980,
    //     sv: 6,
    //   },
    // },
    "gatsby-plugin-postcss",
  ],
}
