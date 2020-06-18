import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";


const Home = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Kieran Goddamn Milligan</h2>
      <p>Need a freelancer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default Home;
