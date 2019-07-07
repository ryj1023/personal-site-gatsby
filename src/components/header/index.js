import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.module.scss"

const Header = () => (
  <section className={`${styles.header} position-sticky`}>
    <nav
      className={`${styles.navBar} navbar navbar-expand-lg navbar-light w-100 p-0`}
    >
      <button
        className="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto d-flex align-items-center">
          <li className="nav-item text-center w-100">
            <a className="nav-link home w-100 p-4 p-lg-2" href="#home">
              <span>Ryan Johnson</span>
            </a>
          </li>
          <li className="nav-item text-center w-100 h-100">
            <a
              className="nav-link w-100 font-weight-bold p-4 p-lg-2"
              href="#about"
            >
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item text-center w-100">
            <a
              className="nav-link w-100 font-weight-bold p-4 p-lg-2"
              href="#portfolio"
            >
              Portfolio <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
