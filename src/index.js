import React, { Component } from 'react'
import { render } from 'react-dom'
import classnames from 'classnames'
import HoverIntent from './components/index'

require('./style.scss')

class App extends Component {
  constructor () {
    super()
    this.state = { mouseover: false }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  onMouseOver () {
    this.setState({mouseover: true})
  }
  onMouseOut () {
    this.setState({mouseover: false})
  }
  render () {
    let {mouseover} = this.state
    return (
      <div className='container'>
        <p className='intro'>
          react-hoverIntent attempts to determine the user's intent... like a crystal ball, only with mouse movement! It is similar to the hover method. However, instead of calling the handlerIn function immediately, hoverIntent waits until the user's mouse slows down enough before making the call.
        </p>
        <ul className='examples'>
          <li id='first'>
            Plain old hover
            <span className='popup'>Hi there</span>
          </li>
          <li id='second'>
            hoverintent
            <span className='popup'>Hi there</span>
          </li>
          <li id='third'>
            Custom settings
            <span className='popup'>Hi there</span>
          </li>
        </ul>
        <HoverIntent
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          <ul>
            <li>
              Hover
              <span className={classnames('popover', {'open': mouseover})}>Hover</span>
            </li>
          </ul>
        </HoverIntent>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
