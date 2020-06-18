import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return(
    <div>
      <sub>Copyright 2020 {data.site.siteMetadata.author}</sub>
    </div>
  )
}

export default Footer;
