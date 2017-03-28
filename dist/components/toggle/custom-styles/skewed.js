'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = getStyle;
function getStyle(fontSize, onProps, offProps) {
  var onBackground = '#86d993';
  if (onProps && onProps.style && onProps.style.backgroundColor) {
    onBackground = onProps.style.backgroundColor;
  }
  var onColor = 'white';
  if (onProps && onProps.style && onProps.style.color) {
    onColor = onProps.style.color;
  }

  var offBackground = '#888';
  if (offProps && offProps.style && offProps.style.backgroundColor) {
    offBackground = offProps.style.backgroundColor;
  }
  var offColor = 'white';
  if (offProps && offProps.style && offProps.style.color) {
    offColor = offProps.style.color;
  }
  var wrapperFontSize = fontSize ? 'font-size: ' + fontSize + 'em' : '';
  var textFontSize = fontSize ? 4 * fontSize + 'px' : '0.25em';
  return '\n  & .rc-toggle-wrapper {\n    margin-left: 0.05em;\n    line-height: 0;\n    position: relative;\n    ' + wrapperFontSize + ';\n  }\n  & .rc-toggle-wrapper.disabled {\n    opacity: 0.7;\n  }\n  & .rc-toggle-wrapper.disabled .toggle-bar {\n    cursor: not-allowed;\n  }\n  & input {\n    max-height: 0;\n    max-width: 0;\n    opacity: 0;\n    position:absolute;\n  }\n  & input:checked ~ .toggle-bar {\n    background: ' + onBackground + ';\n    -webkit-transition: all .2s ease;\n    transition: all .2s ease;\n  }\n  & input:checked ~ .toggle-bar .toggle-text {\n    color: ' + onColor + ';\n    -webkit-transition: all .2s ease;\n    transition: all .2s ease;\n    left: 0%;\n  }\n  & .toggle-bar {\n    cursor: pointer;\n    width: 1em;\n    height: 0.5em;\n    background-color: ' + offBackground + ';\n    -webkit-transform: skew(-10deg);\n    transform: skew(-10deg);\n    position: relative;\n    overflow: hidden;\n  }\n  & .toggle-bar .toggle-text {\n    font-size: ' + textFontSize + ';\n    color: ' + offColor + ';\n    left: -100%;\n    position: absolute;\n    height: 100%;\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n    width: 200%;\n    display: table;\n    -webkit-transition: all .2s ease;\n    transition: all .2s ease;\n    font-weight: bold;\n    text-shadow: 0 0.015625em 0 rgba(0, 0, 0, 0.4);\n    table-layout: fixed;\n    margin: 0 auto;\n  }\n  & .toggle-button {\n    display: none;\n  }\n  & .toggle-bar .toggle-text > span {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n  }';
}