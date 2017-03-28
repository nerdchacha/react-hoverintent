'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _toggleWrapper = require('./toggleWrapper');

var _toggleWrapper2 = _interopRequireDefault(_toggleWrapper);

var _skewed = require('./custom-styles/skewed');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkewedToggle = function (_Component) {
  (0, _inherits3.default)(SkewedToggle, _Component);

  function SkewedToggle() {
    (0, _classCallCheck3.default)(this, SkewedToggle);
    return (0, _possibleConstructorReturn3.default)(this, (SkewedToggle.__proto__ || (0, _getPrototypeOf2.default)(SkewedToggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(SkewedToggle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_toggleWrapper2.default, (0, _extends3.default)({
        getStyle: _skewed.getStyle,
        showDefaultText: true
      }, this.props));
    }
  }]);
  return SkewedToggle;
}(_react.Component);

exports.default = SkewedToggle;
module.exports = exports['default'];