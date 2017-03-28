import { mount } from 'enzyme'
import React from 'react'

function renderPage (component) {
  return mount(
    <div>
      {component}
    </div>
  )
}

module.exports = renderPage
