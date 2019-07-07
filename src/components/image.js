import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = ({ allImages = false, imageName, className }) => {
  const getImage = () => {
    const imageSrc = (
      allImages.find(image => image.fluid.originalName === imageName) || {
        fluid: {},
      }
    ).fluid.src
    return <img className={className} src={imageSrc} alt="" />
  }

  useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            extension
            dir
            modifiedTime
            publicURL
          }
        }
      }
    }
  `)

  return (
    <>
      {allImages && getImage()}
      {<img src="" alt="" />}
    </>
  )
}

export default Image
