// import path from nodejs
const path = require('path')

{/* create slugs for pages  */}
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  {/* search for .md files */}
  if (node.internal.type === "MarkdownRemark") {
    {/* find slug: root location where page should be based on file title */}
    const slug = path.basename(node.fileAbsolutePath, ".md")

    {/* log data to terminal */}
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@', slug)
    console.log(JSON.stringify(node, undefined, 4))

    {/* createNodeField creates slug for .md files */}
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

{/* creating pages with async functions after pulling data */}
module.exports.createPages = async ({ graphql, actions }) => {
  {/* destructure createPage from actions */}
  const { createPage } = actions;

  {/* select template to plug .md data into via path.resolve */}
  const blogTemplate = path.resolve('./src/templates/blog.js')

  {/* await query results to get slug to build url */}
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // pull results data to build pages using createPage
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      // template selected above via path.resolve()
      component: blogTemplate,
      // template literal to assign url path via slug
      path: `/blog/${edge.node.fields.slug}`,
      // context passes data down to template
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

}
