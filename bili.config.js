/** @type {import('bili').Config} */
module.exports = {
  externals: ['vue'],
  input: 'src/index.ts',
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    fileName: 'vue-content-loader.[format][min][ext]',
    moduleName: 'contentLoaders',
  },
}
