import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout";
import blogStyles from './blog.module.scss';
const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h2><u>Blog Posts</u></h2>
      <div className={blogStyles.posts}>
        {posts.map(({node}, index) => (
          <Link
            className={blogStyles.post}
            to={`/blog/${node.fields.slug}`}
            key={index}
            style={{
              textDecoration: 'none',
              color: '#000'
            }}
          >
            <div>
              <h3>{node.frontmatter.title}</h3>
              <sub>{node.frontmatter.date}</sub>
              <p>{node.excerpt}</p>
            </div>
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
