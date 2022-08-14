module.exports = {
  siteMetadata: {
    title: `sli.st`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
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
