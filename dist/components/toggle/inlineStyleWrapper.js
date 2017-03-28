'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactInlineCss = require('react-inline-css');

var _reactInlineCss2 = _interopRequireDefault(_reactInlineCss);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledToggle = function (_Component) {
  (0, _inherits3.default)(StyledToggle, _Component);

  function StyledToggle() {
    (0, _classCallCheck3.default)(this, StyledToggle);
    return (0, _possibleConstructorReturn3.default)(this, (StyledToggle.__proto__ || (0, _getPrototypeOf2.default)(StyledToggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(StyledToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          rest = (0, _objectWithoutProperties3.default)(_props, ['style']);

      return _react2.default.createElement(
        _reactInlineCss2.default,
        { stylesheet: style },
        _react2.default.createElement(_index2.default, rest)
      );
    }
  }]);
  return StyledToggle;
}(_react.Component);

StyledToggle.propTypes = {
  style: _react.PropTypes.string
};

exports.default = StyledToggle;
module.exports = exports['default'];