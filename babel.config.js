module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Jest tests are run in Node and it requires commonjs modules
        modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
        loose: true,
      },
    ],
  ],
  plugins: ['@vue/babel-plugin-jsx'],
}
