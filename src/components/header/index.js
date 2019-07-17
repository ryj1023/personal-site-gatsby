import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.module.scss"
import Scrollspy from "react-scrollspy"

const Header = () => (
  <section className={`${styles.header} position-sticky`}>
    <nav className={`${styles.navBar} w-100 p-0`}>
      <Scrollspy
        items={["home", "about", "portfolio"]}
        currentClassName={styles.activeLink}
        className="d-flex align-items-center mb-0 h-100 list-unstyled"
        offset={500}
      >
        <li className="text-center">
          <a className="nav-link home w-100 py-lg-2 px-4" href="#home">
            <span>RJ</span>
          </a>
        </li>
        <li className="text-center">
          <a className="nav-link w-100 font-weight-bold p-lg-2" href="#about">
            About <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="text-center">
          <a
            className="nav-link w-100 font-weight-bold p-lg-2"
            href="#portfolio"
          >
            Portfolio <span className="sr-only">(current)</span>
          </a>
        </li>
      </Scrollspy>
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
