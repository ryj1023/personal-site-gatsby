import React from "react"

const Image = ({ allImages = false, imageName, className }) => {
  const getImage = () => {
    const imageSrc = (
      allImages.find(image => image.fluid.originalName === imageName) || {
        fluid: {},
      }
    ).fluid.src
    return <img className={className} src={imageSrc} alt="" />
  }
  return <>{allImages && getImage()}</>
}

export default Image
