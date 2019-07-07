import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ allImages = false, imageName, className }) => {
  const getImage = () => {
    const imageSrc = (
      allImages.find(image => image.fluid.originalName === imageName) || {
        fluid: {},
      }
    ).fluid.src
    return <img className={className} src={imageSrc} alt="" />
  }

  const data = useStaticQuery(graphql`
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

  console.log("data", data)

  return (
    <>
      {allImages && getImage()}
      {<img src="" alt="" />}
    </>
  )
}

export default Image
