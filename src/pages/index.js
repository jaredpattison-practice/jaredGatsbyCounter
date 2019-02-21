import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi I'm Jared</h1>
    <p>Welcome to the Jared Counter</p>
    <a href="https://twitter.com/jared_pattison">Jared's Twitter</a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/counter/">Go to counter</Link>

  </Layout>
)

export default IndexPage
