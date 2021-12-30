module.exports = {
  siteMetadata: {
    siteUrl: "https://myfirstgatsbysite00346.gatsbyjs.io/",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
