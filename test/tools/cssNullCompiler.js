/* This will effectively ignore any require() or import() for css or png files */
function doNothing () {
  return null
}

require.extensions['.scss'] = doNothing
require.extensions['.css'] = doNothing
