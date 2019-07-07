import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Footer from "../footer"
import Header from "../header"
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"

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
