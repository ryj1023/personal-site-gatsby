import React, { useEffect } from "react"
import { graphql } from "gatsby"
import get from "lodash.get"
import styles from "./styles.module.scss"
import Layout from "../../components/layout/defaultLayout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import Slider from "react-slick"

var projectSlickSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
}

var quoteSlickSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
}

const getResumePDF = props => {
  const pdfs = get(props, "data.pdfs.edges") || []
  const found = pdfs.find(pdf => pdf.node.name === "Resume") || {}
  const url = get(found, "node.publicURL") || ""
  return url
}

const IndexPage = props => {
  useEffect(() => {
    require("../../util/scrollspy")
  }, [])
  const images = get(props, "data.allImageSharp.nodes") || []
  const resumeURL = getResumePDF(props)
  return (
    <Layout images={images}>
      <SEO title="Home Page" />
      <section>
        <div className={`text-center ${styles.hero} position-relative`}>
          <div className={`text-white ${styles.heroTextWrapper}`}>
            <h1 className={`${styles.fadeInHeader} ${styles.heroText}`}>
              Ryan Johnson
            </h1>
            <div className="d-flex">
              <h2 className={`${styles.fadeInOne} ${styles.heroText} mr-2`}>
                Front
              </h2>
              <h2 className={`${styles.fadeInTwo} ${styles.heroText} mr-2`}>
                End
              </h2>
              <h2 className={`${styles.fadeInThree} ${styles.heroText} mr-2`}>
                Web
              </h2>
              <h2 className={`${styles.fadeInFour} ${styles.heroText}`}>
                Developer
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div
        id="about"
        className={`py-2 text-center w-100 ${styles.personalProjects}`}
      >
        <h1 className="text-white mb-0">About Me</h1>
      </div>
      <div className="container my-4 bg-white">
        <div className="row">
          <div className="col">
            <section className="anchor about-content m-3">
              <h2 className="mb-0">My Story</h2>
              <p>
                I have been creating enterprise-level software, specializing in
                web and mobile app development, since 2016. My focus is creating
                scalable and sophisticated software solutions for the
                ever-evolving web development industry. I spent the last two
                years as a front end developer at{" "}
                <a href="http://beachhousesinparadise.com/">
                  Beach Houses in Paradise
                </a>
                , a vacation rental platform based out of Palm Beach Gardens,
                Florida, specializing in ocean-to-river beach houses. In the
                past I've worked as a freelance developer, customizing personal
                websites and mobile applications in React-Native. About halfway
                through my Computer Science degree I decided fast-track my
                learning experience and enter the workforce early by joining{" "}
                <a
                  target="_blank"
                  href="https://thinkful.com"
                  rel="noopener noreferrer"
                >
                  Thinkful
                </a>
                , an immersive mentorship-based online Bootcamp focusing on the
                most cutting-edge technologies in Web Development. After
                graduating, I became a mentor myself, teaching students the
                fundamentals of Web Development while sharpening my own
                skillset. I have had the pleasure of working with amazing
                people, and have learned a great deal about what separates the
                good developers from the bad ones. Through the years I've
                developed a philosophy I live by when it comes to writing clean
                and consise code:
              </p>
            </section>
            <div className="m-auto d-flex justify-content-center m-3">
              <div className={`${styles.bulletPointList} p-2 m-3`}>
                <div className="d-flex">
                  <div>
                    <Image allImages={images} imageName="bullet_black.png" />
                  </div>
                  <div className={`${styles.bulletListText}`}>
                    <strong>Scalability.</strong>{" "}
                    <span>
                      Always layout the foundation of what you are building with
                      potential expansion in mind. Even simple projects tend to
                      evolve quickly and become more complex over time. Making
                      sure to not code yourself into a corner saves a lot of
                      time in the long run.
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Image allImages={images} imageName="bullet_black.png" />
                  </div>
                  <div className={`${styles.bulletListText}`}>
                    <strong>Performance.</strong>{" "}
                    <span>
                      Optimizing for speed makes a significant difference in the
                      amount of traffic to your project. Slower loading times
                      can cost a company a fortune, so doing things like
                      minification and reducing page renders are something to
                      always strive for.{" "}
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Image allImages={images} imageName="bullet_black.png" />
                  </div>
                  <div className={`${styles.bulletListText}`}>
                    <strong>Testing.</strong>{" "}
                    <span>
                      It's hard to account for every use-case, but adequate
                      testing helps to diagnose issues and minimize bugs, saving
                      you tons of time in the future. Adopting a test-driven
                      development approach with unit, integration, and
                      automation tests is important—especially for larger
                      projects.{" "}
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Image allImages={images} imageName="bullet_black.png" />
                  </div>
                  <div className={`${styles.bulletListText}`}>
                    <strong>Clean Code.</strong>{" "}
                    <span>
                      Although it's great to be able to show off your skills to
                      make performance boosts to your code, if the readability
                      expense is greater than the performance issue your code is
                      meant to resolve, try to second guess your approach in
                      favor of clean and clear code you or other developers can
                      come back to and understand in the future.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="portfolio"
        className={`py-2 text-center w-100 ${styles.personalProjects}`}
      >
        <h1 className="text-white mb-0">Personal Projects</h1>
      </div>
      <section className="container bg-white">
        <div className={`anchor row ${styles.featuredWork}`}>
          <div className="col-12">
            <Slider {...projectSlickSettings}>
              <div className="carousel-item px-2">
                <div className="card rounded-0 my-4">
                  <div className="card-body row">
                    <div className="col-12 col-md-6">
                      <a
                        href="https://discover-new-music.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className={styles.projectImage}
                          allImages={images}
                          imageName="Discover-New-Music.png"
                        />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-flex">
                      <p>
                        This app is for anyone that's really into music (isn't
                        everybody anyway?). Finally a place where the someone
                        can find new sounds based on artists and bands they
                        listen to, and also get tickets for any upcoming shows
                        in their area. Think Spotify, YouTube, and StubHub all
                        in one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active px-2">
                <div className="card rounded-0 my-4">
                  <div className="card-body row">
                    <div className="col-12 col-md-6">
                      <a
                        href="https://solixfit.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          allImages={images}
                          className={styles.projectImage}
                          imageName="solixfit.png"
                        />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-flex">
                      <p>
                        Solixfit removes all the complexity of keeping track of
                        your eating habits and workout regimen, allowing you to
                        focus on being the best version of yourself. With
                        features like a color-coded nutrition goal system,
                        acheivement badges, and the ablity to share your
                        achievements with your daily logs, this app is truly a
                        all-in-one solution for those who are serius about
                        getting (and staying) healthy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item px-2">
                <div className="card rounded-0 my-4">
                  <div className="card-body row">
                    <div className="col-12 col-md-6">
                      <a
                        href="https://fitness-assessment.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          allImages={images}
                          imageName="Fitness-Assessment-Screenshot.png"
                          className={styles.projectImage}
                        />
                      </a>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-flex">
                      <p>
                        This fitness assessment is a perfect platform for users
                        all over the fitness spectrum. It is made to obtain
                        information about the user by asking a series of
                        questions about weight, height, goals, and current
                        fitness activity. It then takes this information,
                        displays a reccommended daily nutrient intake, allows a
                        food search which returns nutrient information, and
                        selects custom workout regimens for the user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="anchor about-content container pt-3 mb-4 bg-white">
        <div className="row">
          <div className="col mx-3">
            <h2 className="mb-0">Languages and Frameworks</h2>
            <p>
              The bulk of my experience in web development is focused on
              JavaScript frameworks, predominantly React and Vue. For design and
              layout, I work both with raw HTML/CSS as well as with frameworks
              like Bootstap and Foundation. Although most of my professional
              experience focuses on the client-side, I have experience in
              integrating with servers using Node.js (Express) as well as NoSQL
              (MongoDB) and SQL (Microsoft SQL Server, MySQL) database
              interaction. I have extensive experience with both REST API and
              GraphQL data-fetching practices. A few other languages and
              frameworks I've worked with are PHP, C, C++, Java, and Angular.
            </p>
          </div>
        </div>
        <div>
          <div
            className={`d-flex justify-content-center ${styles.social} m-0 pb-2`}
          >
            <a
              href={resumeURL}
              download="Ryan Johnson's Resume"
              className={`font-weight-bold ${styles.buttonDownload} text-decoration-none bg-white p-2 d-flex justify-content-center mr-1`}
            >
              Resume
            </a>
            <a
              href="https://github.com/ryj1023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image allImages={images} imageName="github-sociocon.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-johnson-495537119?trk=nav_responsive_tab_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image allImages={images} imageName="linkedin-logo.png" />
            </a>
            <a
              id="google"
              href="https://plus.google.com/108704185538516740383"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image allImages={images} imageName="Google-1.png" />
            </a>
          </div>
        </div>
        <Slider {...quoteSlickSettings}>
          {/* <div style={{ height: "200px" }}> */}
          <blockquote
            className={`${styles.quoteCarousel} carousel-item text-center`}
          >
            <p className="d-block w-100 m-auto">
              “We forget: In life, it doesn’t matter what happens to you or
              where you came from. It matters what you do with what happens and
              what you’ve been given.”
            </p>
            <cite className="m-auto">
              <span className={`${styles.quoteAuthor}`}>- Ryan Holliday</span>
            </cite>
          </blockquote>
          <blockquote
            className={`${styles.quoteCarousel} carousel-item text-center`}
          >
            <p className="d-block w-100 m-auto">
              “Have no fear of perfection—you’ll never reach it.”
            </p>
            <cite className="m-auto">
              <span className={`${styles.quoteAuthor}`}>–Salvador Dali</span>
            </cite>
          </blockquote>
          <blockquote
            className={`${styles.quoteCarousel} carousel-item text-center`}
          >
            <p className="d-block w-100 m-auto">
              "Things that are traditionally sync don’t have to “feel” sync.
              Things that are traditionally async don’t have to 'feel' async. Be
              intentional and bridge the gap when you need."
            </p>
            <cite className="m-auto">
              <span className={`${styles.quoteAuthor}`}>- Dan Abramov</span>
            </cite>
          </blockquote>
          <blockquote
            className={`${styles.quoteCarousel} carousel-item text-center`}
          >
            <p className="d-block w-100 m-auto">
              "I have been impressed with the urgency of doing. Knowing is not
              enough; we must apply. Being willing is not enough; we must do."
            </p>
            <cite className="m-auto">
              <span className={`${styles.quoteAuthor}`}>
                - Leonardo da Vinci
              </span>
            </cite>
          </blockquote>
          <blockquote
            className={`${styles.quoteCarousel} carousel-item text-center`}
          >
            <p className="d-block w-100 m-auto">
              “Design is not just what it looks like and feels like. Design is
              how it works.”
            </p>
            <cite className="m-auto">
              <span className={`${styles.quoteAuthor}`}>- Steve Jobs</span>
            </cite>
          </blockquote>
          {/* </div> */}
        </Slider>
      </section>
    </Layout>
  )
}

export const ImagesQuery = graphql`
  {
    allImageSharp {
      nodes {
        id
        fluid {
          src
          originalImg
          originalName
        }
      }
    }
    pdfs: allFile(filter: { sourceInstanceName: { eq: "pdfs" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`

export default IndexPage
