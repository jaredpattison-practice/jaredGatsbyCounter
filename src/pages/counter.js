import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter.js";

const SecondPage = () => (
  <Layout>
    <SEO title="Counter" />
    <h1>Counter</h1>
    <p>Welcome to page 2</p>
    <Counter />
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
