exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions

  return new Promise(resolve => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/home/index.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/",
      })
    }

    resolve()
  })
}

exports.createPages = () => {
  return new Promise((resolve, reject) => {
    // do async work
  })
}

exports.createPages = (_, pluginOptions, cb) => {
  // do Async work
  cb()
}
