global.PAGE_TIMEOUT = 1000

let jsdom = require('jsdom')
global.document = jsdom.jsdom({src: '<!doctype html><html><body></body></html>'})
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})
global.navigator = {userAgent: 'Mocha Test node.js'}

export function consoleError (error) {
  this.log(error)
  throw new Error(error)
}

console.error = consoleError // eslint-disable-line no-console
