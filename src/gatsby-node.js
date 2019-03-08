const fs = require('fs-extra')

exports.onPostBootstrap = async ({ store }) => {
  const { program } = store.getState()

  await fs.copy(
    require.resolve('./static/mtiFontTrackingCode.js'),
    `${program.directory}/public/mtiFontTrackingCode.js`,
  )
}
