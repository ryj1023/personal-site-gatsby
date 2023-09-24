import React, { useEffect } from "react"
import Layout from "../../components/layout/defaultLayout"
import SEO from "../../components/seo"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home Page" />
      <section>
        <h1>Test page</h1>
      </section>
    </Layout>
  )
}

export default IndexPage
