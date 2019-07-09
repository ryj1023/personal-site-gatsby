import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Footer from "../footer"
import Header from "../header"

const Layout = ({ children }) => {
  useEffect(() => {
    require("../../util/scrollspy")
  }, [])
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
