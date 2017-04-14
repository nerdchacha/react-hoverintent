## React Hoverintent


react-hoverintent is a react wrapper over jquery-hoverintent plugin.

"hoverIntent is a plug-in that attempts to determine the user's intent... like a crystal ball, only with mouse movement! It is similar to jQuery's hover method. However, instead of calling the handlerIn function immediately, hoverIntent waits until the user's mouse slows down enough before making the call."

[jquery-hoverintent](https://github.com/briancherne/jquery-hoverIntent).


## Installation
```npm install react-hoverintent```

## Demo

The demo with live examples can be viewed [here](https://vijayranghar.github.io/).


## Props

```onMouseOver``` : The callback to fire on mouse over event

```onMouseOut``` : The callback to fire on mouse out event

```timeout``` :
 A simple delay, in milliseconds, before the ```onMouseOut``` callback is fired. If the user mouses back over the element before the timeout has expired the ```onMouseOut``` callback will not be called (nor will the ```onMouseOver``` callback be called). This is primarily to protect against sloppy/human mousing trajectories that temporarily (and unintentionally) take the user off of the target element... giving them time to return. 
 
 Default ```timeout: 0```
 
```sensitivity``` : 
If the mouse travels fewer than this number of pixels between polling intervals, then the ```onMouseOver``` callback will be called. With the minimum sensitivity threshold of 1, the mouse must not move between polling intervals. With higher sensitivity thresholds you are more likely to receive a false positive. 

Default ```sensitivity: 7```

```interval``` :
The number of milliseconds hoverIntent waits between reading/comparing mouse coordinates. When the user's mouse first enters the element its coordinates are recorded. The soonest the ```onMouseOut``` callback can be called is after a single polling interval. Setting the polling interval higher will increase the delay before the first possible ```onMouseOver``` call, but also increases the time to the next point of comparison. 

Default ```interval: 700```


## Use

```javascript
import HoverIntet from 'react-hoverintent'
import classnames from 'classnames'

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
        <HoverIntent
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          sensitivity={10}
          interval={1000}
          timeout={250}
        >
        	<button>Hover</button>
        </HoverIntent>
        <span className={classnames('popover', {'open': mouseover})}>Hover</span>
      </div>
    )
  }
}
```



## Repo
https://github.com/nerdchacha/react-hoverintent



## Authors
**Yatin Gera** 

**Vijay Mohan Singh Ranghar**

## Credits

**[briancherne](https://github.com/briancherne/jquery-hoverIntent)** - initial work and setup


## Issue tracker
https://github.com/nerdchacha/react-hoverintent/issues


## License

This project is licensed under the MIT License

