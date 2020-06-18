import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>Some stuff about us</p>
      <Link to="/contact">Contact Me!!!</Link>
    </Layout>
  )
}

export default About;
