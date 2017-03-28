'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = getStyle;
function getStyle(fontSize, onProps, offProps) {
  var onBackground = '#7FC6A6';
  if (onProps && onProps.style && onProps.style.backgroundColor) {
    onBackground = onProps.style.backgroundColor;
  }
  var onColor = 'white';
  if (onProps && onProps.style && onProps.style.color) {
    onColor = onProps.style.color;
  }

  var offBackground = '#FF3A19';
  if (offProps && offProps.style && offProps.style.backgroundColor) {
    offBackground = offProps.style.backgroundColor;
  }
  var offColor = 'white';
  if (offProps && offProps.style && offProps.style.color) {
    offColor = offProps.style.color;
  }
  var wrapperFontSize = fontSize ? 'font-size: ' + fontSize + 'em' : '';
  var textFontSize = fontSize ? 4 * fontSize + 'px' : '0.25em';
  return '\n  & .rc-toggle-wrapper {\n    line-height: 0;\n    position: relative;\n    ' + wrapperFontSize + ';\n  }\n  & .rc-toggle-wrapper.disabled {\n    opacity: 0.7;\n  }\n  & .rc-toggle-wrapper.disabled .toggle-text {\n    cursor: not-allowed;\n  }\n  & input {\n    max-height: 0;\n    max-width: 0;\n    opacity: 0;\n    position: absolute;\n  }\n  & .toggle-bar {\n    height: 0.5em;\n    width: 1em;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: relative;\n  }\n  & .toggle-bar .toggle-text {\n    font-size: ' + textFontSize + ';\n    width: 4em;\n    height: 2em;\n    -webkit-transition: all .2s ease;\n    transition: all .2s ease;\n    font-family: sans-serif;\n    -webkit-perspective: 200px;\n    perspective: 200px;\n    outline: 0;\n    display: block;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  & .toggle-bar .toggle-text span {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    height: 100%;\n    -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    line-height: 2em;\n    font-weight: bold;\n    top: 0;\n    left: 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    border-radius: 0.25em;\n  }\n  & .toggle-button {\n    display: none;\n  }\n  & input ~ .toggle-bar span.on,& input ~ .toggle-bar span.on * {\n    -webkit-transform: rotateY(-180deg);\n    transform: rotateY(-180deg);\n    -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n    background: ' + onBackground + ';\n    color: ' + onColor + ';\n  }\n  & input ~ .toggle-bar span.off,& input ~ .toggle-bar span.off * {\n  -webkit-transition: all .4s ease;\n    transition: all .4s ease;\n    background: ' + offBackground + ';\n    color: ' + offColor + ';\n  }\n  & input:checked ~ .toggle-bar span.on,& input:checked ~ .toggle-bar span.on * {\n    -webkit-transform: rotateY(0);\n    transform: rotateY(0);\n  }\n  & input:checked ~ .toggle-bar span.off,& input:checked ~ .toggle-bar span.off * {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n  }\n  ';
}