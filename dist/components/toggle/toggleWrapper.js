'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStyleWrapper = require('./inlineStyleWrapper');

var _inlineStyleWrapper2 = _interopRequireDefault(_inlineStyleWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleWrapper = function (_Component) {
  (0, _inherits3.default)(ToggleWrapper, _Component);

  function ToggleWrapper() {
    (0, _classCallCheck3.default)(this, ToggleWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (ToggleWrapper.__proto__ || (0, _getPrototypeOf2.default)(ToggleWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          fontSize = _props.fontSize,
          onProps = _props.onProps,
          offProps = _props.offProps,
          toggleIcon = _props.toggleIcon,
          getStyle = _props.getStyle,
          rest = (0, _objectWithoutProperties3.default)(_props, ['fontSize', 'onProps', 'offProps', 'toggleIcon', 'getStyle']);

      var style = getStyle(fontSize, onProps, offProps, toggleIcon);
      if (!onProps) onProps = {};
      if (!offProps) offProps = {};
      if (this.props.showDefaultText) onProps.component = onProps.component || 'ON';
      if (this.props.showDefaultText) offProps.component = offProps.component || 'OFF';
      return _react2.default.createElement(_inlineStyleWrapper2.default, (0, _extends3.default)({
        style: style,
        onProps: onProps,
        offProps: offProps,
        toggleIcon: toggleIcon
      }, rest));
    }
  }]);
  return ToggleWrapper;
}(_react.Component);

ToggleWrapper.propTypes = {
  fontSize: _react.PropTypes.number,
  getStyle: _react.PropTypes.func.isRequired,
  showDefaultText: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  toggleIcon: _react.PropTypes.shape({
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    style: _react.PropTypes.shape({
      backgroundColor: _react.PropTypes.string,
      color: _react.PropTypes.string,
      toggleBorder: _react.PropTypes.string,
      buttonBorder: _react.PropTypes.string
    })
  }),
  onProps: _react.PropTypes.shape({
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    style: _react.PropTypes.shape({
      backgroundColor: _react.PropTypes.string,
      color: _react.PropTypes.string,
      toggleBorder: _react.PropTypes.string,
      buttonBorder: _react.PropTypes.string
    })
  }),
  offProps: _react.PropTypes.shape({
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    style: _react.PropTypes.shape({
      backgroundColor: _react.PropTypes.string,
      color: _react.PropTypes.string,
      toggleBorder: _react.PropTypes.string,
      buttonBorder: _react.PropTypes.string
    })
  })
};

exports.default = ToggleWrapper;
module.exports = exports['default'];