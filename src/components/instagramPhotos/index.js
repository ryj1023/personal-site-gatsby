import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent {
          edges {
            node {
              tags
              link
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className="container">
          <div className="row align-items-center">
            {data.allInstagramContent.edges.map((item, i) => {
              return item.node.localImage ? (
                <div className="col col-12 col-md-6 my-3">
                  <Image
                    fluid={item.node.localImage.childImageSharp.fluid}
                    key={i}
                  />
                </div>
              ) : (
                <div></div>
              )
            })}
          </div>
        </div>
      )
    }}
  />
)

export default Instagram
