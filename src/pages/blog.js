import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h2><u>Blog Posts</u></h2>
      <div>
        {posts.map(({node}, index) => (
          <Link
            to={`/blog/${node.fields.slug}`}
            key={index}
            style={{
              textDecoration: 'none',
              color: '#000'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <h3>{node.frontmatter.title}</h3>
              <sub>{node.frontmatter.date}</sub>
            </div>
            <p>{node.excerpt}</p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            title
          }
          excerpt
          id
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog;
