import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>probably a form or something</p>
      <Link to="http://www.twitter.com">Twitter</Link>
    </Layout>
  )
}

export default Contact;
