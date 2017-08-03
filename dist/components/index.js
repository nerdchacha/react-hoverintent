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

var _xtend = require('xtend');

var _xtend2 = _interopRequireDefault(_xtend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoverIntent = function (_Component) {
  (0, _inherits3.default)(HoverIntent, _Component);

  function HoverIntent() {
    (0, _classCallCheck3.default)(this, HoverIntent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HoverIntent.__proto__ || (0, _getPrototypeOf2.default)(HoverIntent)).call(this));

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
      this.element.addEventListener('mouseover', this.dispatchOver.bind(this), false);
      this.element.addEventListener('mouseout', this.dispatchOut.bind(this), false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.element.removeEventListener('mouseover', this.dispatchOver.bind(this), false);
      this.element.removeEventListener('mouseout', this.dispatchOut.bind(this), false);
    }
  }, {
    key: 'delay',
    value: function delay(e) {
      if (this.timer) this.timer = clearTimeout(this.timer);
      this.status = 0;
      return this.props.onMouseOut.call(this.element, e);
    }
  }, {
    key: 'tracker',
    value: function tracker(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }, {
    key: 'compare',
    value: function compare(e) {
      var _this2 = this;

      if (this.timer) this.timer = clearTimeout(this.timer);
      if (Math.abs(this.pX - this.x) + Math.abs(this.pY - this.y) < this.props.sensitivity) {
        this.status = 1;
        return this.props.onMouseOver.call(this.element, e);
      } else {
        this.pX = this.x;
        this.pY = this.y;
        this.timer = setTimeout(function () {
          return _this2.compare(_this2.element, e);
        }, this.props.interval);
      }
    }
  }, {
    key: 'dispatchOver',
    value: function dispatchOver(e) {
      var _this3 = this;

      if (this.timer) this.timer = clearTimeout(this.timer);
      this.element.removeEventListener('mousemove', this.tracker.bind(this), false);
      if (this.status !== 1) {
        this.pX = e.clientX;
        this.pY = e.clientY;
        this.element.addEventListener('mousemove', this.tracker.bind(this), false);
        this.timer = setTimeout(function () {
          return _this3.compare(_this3.element, e);
        }, this.props.interval);
      }
    }
  }, {
    key: 'dispatchOut',
    value: function dispatchOut(e) {
      var _this4 = this;

      if (this.timer) this.timer = clearTimeout(this.timer);
      this.element.removeEventListener('mousemove', this.tracker.bind(this), false);
      if (this.status === 1) {
        this.timer = setTimeout(function () {
          return _this4.delay(_this4.element, e);
        }, this.props.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.cloneElement(this.props.children, {
        ref: function ref(element) {
          _this5.element = element;
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