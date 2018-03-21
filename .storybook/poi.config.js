const path = require('path')

// poi.config.js
module.exports = {
  // Use your storybook config as entry
  entry: '.storybook/config.js',
  outDir: '.storybook/dist',
  // If you want storybook addons:
  // entry: ['.storybook/config.js', '.storybook/addons.js']
  plugins: [
    require('@poi/plugin-storybook')({
      managerTemplate: path.join(__dirname, 'manager.ejs')
    })
  ]
}
