module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial App",
    author: "K. Michael Milligan"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
  ],
}
