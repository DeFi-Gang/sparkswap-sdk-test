
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sparkswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./sparkswap-sdk.cjs.development.js')
}
