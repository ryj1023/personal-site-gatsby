import React, { useEffect } from "react"
import { graphql } from "gatsby"
import get from "lodash.get"
import styles from "./styles.module.scss"
import Layout from "../../components/layout/defaultLayout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import Slider from "react-slick"

const SlickArrow = props => {
  const { style, onClick, imageName, images } = props

  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block", cursor: "pointer" }}
      onClick={onClick}
    >
      <Image allImages={images} imageName={imageName} />
    </div>
  )
}

var quoteSlickSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
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
  var projectSlickSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <SlickArrow images={images} imageName="next.png" />,
    prevArrow: <SlickArrow images={images} imageName="prev.png" />,
  }
  return (
    <Layout images={images}>
      <SEO title="Home Page" />
      <section id="home">
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
      <div className={`py-2 text-center w-100 ${styles.personalProjects}`}>
        <h1 className="text-white mb-0">About Me</h1>
      </div>
      <div id="about" className="container my-4 bg-white">
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
                and consise code.
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
                      I Always lay out the foundation of what I am building with
                      potential expansion in mind. Even simple projects tend to
                      evolve quickly and become more complex. Making sure to not
                      code myself into a corner saves a lot of time in the long
                      run.
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
                      amount of traffic to my project. Slower loading times can
                      cost a company a fortune, so doing things like
                      minification and reducing page renders are something I
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
                      me tons of time in the future. Adopting a test-driven
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
                      Although it's great to be able to show off my skills to
                      make performance boosts to my code, if the readability
                      expense is greater than the performance issue my code is
                      meant to resolve, I try to second guess my approach in
                      favor of clean and clear code that myself or other
                      developers can come back to and understand in the future.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`py-2 text-center w-100 ${styles.personalProjects}`}>
        <h1 className="text-white mb-0">Personal Projects</h1>
      </div>
      <section id="portfolio" className="container bg-white my-4">
        <div className={`anchor row ${styles.featuredWork}`}>
          <div className="col-12 px-0">
            <Slider {...projectSlickSettings}>
              <div className="carousel-item px-2">
                <div className="card rounded-0">
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
              className={`font-weight-bold ${styles.buttonDownload} align-items-center text-decoration-none p-2 d-flex justify-content-center mr-1`}
            >
              Resume
            </a>
            <a
              href="https://github.com/ryj1023"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="256.000000pt"
                height="256.000000pt"
                viewBox="0 0 256.000000 256.000000"
                preserveAspectRatio="xMidYMid meet"
                className={`${styles.socialIcon}`}
              >
                <g
                  transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                  // fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M1040 2420 c-433 -92 -772 -413 -888 -837 -24 -91 -26 -113 -26 -298
0 -185 2 -207 26 -298 72 -265 250 -514 470 -660 212 -140 403 -197 658 -197
255 0 446 57 658 197 220 146 398 395 470 660 24 91 26 113 26 298 0 185 -2
207 -26 298 -54 196 -161 380 -305 523 -164 163 -376 275 -603 318 -115 22
-349 20 -460 -4z m-106 -445 c27 -8 69 -29 95 -45 30 -20 53 -29 66 -25 87 26
202 29 341 9 33 -5 48 -1 79 20 40 27 123 56 161 56 18 0 24 -9 34 -51 7 -29
10 -74 6 -104 -5 -48 -3 -57 19 -83 94 -112 100 -324 12 -471 -18 -29 -48 -64
-68 -78 -43 -28 -150 -63 -196 -63 -39 0 -40 -2 -10 -41 20 -28 22 -45 27
-193 l5 -163 33 -27 c39 -34 34 -46 -20 -46 -32 0 -47 7 -74 34 l-34 34 -1
119 c-1 156 -14 188 -22 53 -6 -120 1 -182 28 -228 27 -45 10 -60 -39 -37 -41
20 -54 38 -78 110 -13 40 -16 44 -17 23 -2 -43 -30 -105 -56 -122 -14 -9 -38
-16 -56 -16 l-31 0 21 36 c19 31 21 50 20 172 0 75 -3 132 -5 126 -2 -5 -8
-66 -12 -134 l-7 -124 -34 -23 c-35 -24 -111 -32 -111 -13 0 6 11 21 26 33 28
24 43 77 44 150 l0 47 -52 0 c-117 1 -155 23 -204 116 -16 31 -46 69 -66 86
-43 33 -48 53 -17 61 35 9 64 -8 124 -77 64 -72 87 -82 165 -71 43 6 50 10 59
38 6 17 19 39 27 49 19 20 14 23 -51 31 -63 8 -148 44 -193 83 -52 44 -97 137
-114 232 -16 96 -1 185 42 256 31 48 32 54 25 119 -7 74 6 130 33 147 22 12
19 12 76 -5z"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-johnson-495537119?trk=nav_responsive_tab_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="224.000000pt"
                height="224.000000pt"
                viewBox="0 0 224.000000 224.000000"
                preserveAspectRatio="xMidYMid meet"
                className={`${styles.socialIcon}`}
              >
                <g
                  transform="translate(0.000000,224.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    d="M975 2230 c-159 -22 -332 -87 -466 -172 -340 -217 -544 -643 -501
-1045 56 -538 464 -946 1002 -1004 462 -50 921 210 1120 634 341 727 -170
1566 -970 1592 -69 2 -152 0 -185 -5z m-281 -401 c69 -47 97 -149 61 -218 -36
-70 -126 -113 -195 -92 -81 24 -130 87 -130 167 0 137 153 220 264 143z m971
-448 c67 -29 108 -71 139 -140 39 -87 46 -163 46 -493 l0 -308 -149 0 -150 0
-3 303 c-3 282 -4 304 -23 337 -30 51 -77 72 -144 66 -62 -6 -96 -27 -126 -77
-19 -32 -20 -55 -23 -331 l-3 -298 -150 0 -149 0 0 475 0 475 145 0 145 0 0
-57 0 -57 43 41 c77 75 130 93 257 90 73 -2 107 -8 145 -26z m-915 -466 l0
-475 -150 0 -150 0 0 475 0 475 150 0 150 0 0 -475z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <Slider {...quoteSlickSettings}>
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
