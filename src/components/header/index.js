import PropTypes from "prop-types"
import React from "react"
import styles from "./styles.module.scss"
import Scrollspy from "react-scrollspy"

const Header = ({ images }) => (
  <section className={`${styles.header} position-sticky`}>
    <nav className={`${styles.navBar} w-100 p-0`}>
      <Scrollspy
        items={["home", "about", "portfolio"]}
        currentClassName={styles.activeLink}
        className="d-flex align-items-center mb-0 h-100 list-unstyled"
        offset={-48}
      >
        <li className="text-center h-100 position-relative">
          <a className="nav-link home w-100 h-100 px-4" href="#home">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.logo}`}
              width="35"
              height="35"
              viewBox="0 0 165.000000 167.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="75" cy="90" r="70" fill="white" />
              <g
                transform="translate(0.000000,167.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M0 835 l0 -835 825 0 825 0 0 835 0 835 -825 0 -825 0 0 -835z m931
580 c110 -31 195 -96 231 -174 28 -62 23 -215 -10 -281 -36 -72 -112 -146
-183 -177 l-26 -11 23 -74 c13 -40 33 -105 45 -145 24 -81 47 -108 81 -100 13
4 66 47 118 97 52 50 101 89 110 88 11 -2 16 -18 18 -61 4 -73 -29 -138 -104
-206 -81 -74 -153 -105 -246 -105 -68 -1 -79 2 -103 24 -15 14 -35 41 -45 60
-17 34 -23 63 -56 288 -14 95 -19 112 -35 112 -25 0 -89 63 -89 89 0 12 11 33
25 46 20 21 34 25 84 25 33 0 63 -5 66 -10 11 -17 73 58 90 108 33 100 11 184
-63 237 -43 29 -46 30 -161 29 -106 0 -124 -3 -187 -29 -38 -16 -88 -40 -112
-53 -56 -31 -96 -27 -100 10 -3 22 8 38 56 85 78 78 189 130 307 147 51 7 217
-5 266 -19z m-265 -251 c9 -37 -12 -176 -48 -319 -46 -181 -47 -189 -48 -340
0 -113 -3 -147 -18 -174 -27 -53 -137 -104 -190 -87 -81 26 -60 302 48 617 72
210 150 329 216 329 28 0 35 -4 40 -26z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="text-center h-100 position-relative">
          <a
            className="nav-link w-100 d-flex align-items-center h-100 font-weight-bold"
            href="#about"
          >
            About <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="text-center h-100 position-relative">
          <a
            className="nav-link w-100 h-100 d-flex align-items-center font-weight-bold "
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
