import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer"
import Header from "../header"
import "../../styles/styles.scss"

const Layout = ({ children, images }) => {
  return (
    <>
      <Header images={images} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
