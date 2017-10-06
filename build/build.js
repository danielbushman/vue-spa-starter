require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var _ = require('lodash')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building...')
spinner.start()

// remove the old /dist folder (and the sub build folders)
rm(path.resolve(__dirname, '../dist'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

  if (stats.compilation.errors.length > 0) {
    console.log(chalk.red('\n\n********************************* 😤\n\n    Build failed!\n\n********************************* 😰\n\n'))
    process.exit(1);
  }

    console.log(chalk.cyan('  Build complete.\n'))
  })
})
