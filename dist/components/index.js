'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoverIntent = function (_Component) {
  (0, _inherits3.default)(HoverIntent, _Component);

  function HoverIntent() {
    (0, _classCallCheck3.default)(this, HoverIntent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HoverIntent.__proto__ || (0, _getPrototypeOf2.default)(HoverIntent)).call(this));

    _this.delay = function (e) {
      if (_this.timer) {
        _this.timer = clearTimeout(_this.timer);
      }
      _this.status = 0;
      return _this.props.onMouseOut.call(_this.element, e);
    };

    _this.tracker = function (e) {
      _this.x = e.clientX;
      _this.y = e.clientY;
    };

    _this.compare = function (e) {
      if (_this.timer) {
        _this.timer = clearTimeout(_this.timer);
      }
      if (Math.abs(_this.pX - _this.x) + Math.abs(_this.pY - _this.y) < _this.props.sensitivity) {
        _this.status = 1;
        return _this.props.onMouseOver.call(_this.element, e);
      } else {
        _this.pX = _this.x;
        _this.pY = _this.y;
        _this.timer = setTimeout(function () {
          return _this.compare(e);
        }, _this.props.interval);
      }
    };

    _this.dispatchOver = function (e) {
      if (_this.timer) {
        _this.timer = clearTimeout(_this.timer);
      }
      _this.element.removeEventListener('mousemove', _this.tracker, false);
      if (_this.status !== 1) {
        _this.pX = e.clientX;
        _this.pY = e.clientY;
        _this.element.addEventListener('mousemove', _this.tracker, false);
        _this.timer = setTimeout(function () {
          return _this.compare(e);
        }, _this.props.interval);
      }
    };

    _this.dispatchOut = function (e) {
      if (_this.timer) {
        _this.timer = clearTimeout(_this.timer);
      }
      _this.element.removeEventListener('mousemove', _this.tracker, false);
      if (_this.status === 1) {
        _this.timer = setTimeout(function () {
          return _this.delay(e);
        }, _this.props.timeout);
      }
    };

    _this.x = 0;
    _this.y = 0;
    _this.pX = 0;
    _this.pY = 0;
    _this.status = 0;
    _this.timer = 0;
    return _this;
  }

  (0, _createClass3.default)(HoverIntent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.element.addEventListener('mouseover', this.dispatchOver, false);
      this.element.addEventListener('mouseout', this.dispatchOut, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.element.removeEventListener('mouseover', this.dispatchOver, false);
      this.element.removeEventListener('mouseout', this.dispatchOut, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.cloneElement(this.props.children, {
        ref: function ref(element) {
          _this2.element = element;
        }
      });
    }
  }]);
  return HoverIntent;
}(_react.Component);

HoverIntent.defaultProps = {
  sensitivity: 7,
  interval: 100,
  timeout: 0
};

HoverIntent.propTypes = {
  sensitivity: _propTypes2.default.number,
  interval: _propTypes2.default.number,
  timeout: _propTypes2.default.number,
  onMouseOver: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,
  children: _propTypes2.default.node
};

exports.default = HoverIntent;
module.exports = exports['default'];