import React from "react"
import * as styles from "./styles.module.scss"
import { Tooltip as ReactTooltip } from "react-tooltip"

const Footer = () => {
  // test
  return (
    <footer
      className={`p-2 d-flex justify-content-between anchor ${styles.contentFooter} text-center align-items-center`}
      id="contact"
    >
      <ReactTooltip
        globalEventOff="click"
        place="right"
        id="credits"
        className="react-tooltip-clickable-link"
        event="click"
        content={() => {
          return (
            <p className="text-white mb-0">
              Icons by{" "}
              <a
                href="https://www.flaticon.com/authors/gregor-cresnar"
                title="Gregor Cresnar"
              >
                Gregor Cresnar
              </a>{" "}
              -{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>{" "}
              -{" "}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                rel="noopener noreferrer"
                target="_blank"
              >
                CC 3.0 BY
              </a>
            </p>
          )
        }}
      />

      <button data-tooltip-id="credits" className="text-white btn btn-link">
        credits
      </button>
      {/* eslint-disable-next-line */}
      <a href="#" className="text-white btn btn-link text-decoration-none">
        <span dangerouslySetInnerHTML={{ __html: "&#169" }} />
        <span className="ms-1 fw-bold">Ryan Johnson, 2023</span>
      </a>
    </footer>
  )
}

export default Footer
