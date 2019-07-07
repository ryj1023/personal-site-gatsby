import React from "react"
import styles from "./styles.module.scss"
const Footer = () => {
  return (
    <footer
      className={`p-2 d-block d-md-flex justify-content-between anchor ${styles.contentFooter} text-center align-items-center`}
      id="contact"
    >
      <p className="text-white">
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
      <p className="text-white">
        <span dangerouslySetInnerHTML={{ __html: "&#169" }} />
        <span className="ml-1">Ryan Johnson, 2019</span>
      </p>
    </footer>
  )
}

export default Footer
