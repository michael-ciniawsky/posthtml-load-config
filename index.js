// ------------------------------------
// #POSTHTML - LOAD CONFIG
// ------------------------------------

'use strict'

const config = require('cosmiconfig')

const loadPlugins = require('./lib/loadPlugins')
const loadOptions = require('./lib/loadOptions')

module.exports = function loadConfig (options) {
  return config('posthtml')
    .catch((error) => console.log(error))
    .then((result) => {
      return {
        plugins: loadPlugins(result.config, options),
        options: loadOptions(result.config, options)
      }
    })
}
