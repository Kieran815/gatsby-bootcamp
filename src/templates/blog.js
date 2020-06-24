import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";

// make query an export to send data to blog component below
// pass `$slug` as String to match up blog posts
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

 // query data accessable via props.data
const Blog = (props) => {
  return (
    <Layout>
      {/* pull values from data query via `props.data` */}
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default Blog;
