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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleCheckboxClick = _this.handleCheckboxClick.bind(_this);
    _this.state = { checked: false };
    return _this;
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setChecked(this.props.checked);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setChecked(nextProps.checked);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.checked !== this.state.checked) this.props.handleChange(this.state.checked);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      if (typeof checked !== 'undefined') this.setState({ checked: checked });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.disabled) {
        return;
      }
      this.setState({ checked: !this.state.checked });
      e.stopPropagation();
      this.input.click();
    }
  }, {
    key: 'handleCheckboxClick',
    value: function handleCheckboxClick(e) {
      this.props.handleClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          attributes = _props.attributes,
          onProps = _props.onProps,
          offProps = _props.offProps,
          toggleIcon = _props.toggleIcon,
          disabled = _props.disabled,
          type = _props.type;

      attributes.id = attributes.id || 'toggle';
      attributes.name = attributes.name || 'toggle';
      var renderOnText = onProps ? onProps.component : '';
      var renderOffText = offProps ? offProps.component : '';
      var renderToggleIcon = toggleIcon ? toggleIcon.component : '';
      var classname = disabled ? 'disabled' : '';

      return _react2.default.createElement(
        'div',
        { className: 'rc-toggle-wrapper ' + type + '-toggle ' + classname },
        _react2.default.createElement('input', (0, _extends3.default)({
          type: 'checkbox',
          checked: this.state.checked
        }, attributes, {
          onClick: this.handleCheckboxClick,
          ref: function ref(input) {
            return _this2.input = input;
          }
        })),
        _react2.default.createElement('label', { htmlFor: attributes.name }),
        _react2.default.createElement(
          'div',
          { className: 'toggle-bar', onClick: this.handleClick },
          _react2.default.createElement(
            'div',
            { className: 'toggle-text' },
            _react2.default.createElement(
              'span',
              { className: 'on' },
              renderOnText
            ),
            _react2.default.createElement(
              'span',
              { className: 'off' },
              renderOffText
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'toggle-button' },
            _react2.default.createElement(
              'span',
              null,
              renderToggleIcon
            )
          )
        )
      );
    }
  }]);
  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  attributes: {},
  handleClick: function handleClick() {
    return null;
  },
  handleChange: function handleChange() {
    return null;
  }
};

Toggle.propTypes = {
  checked: _react.PropTypes.bool.isRequired,
  disabled: _react.PropTypes.bool,
  type: _react.PropTypes.string,
  attributes: _react.PropTypes.object,
  handleClick: _react.PropTypes.func,
  handleChange: _react.PropTypes.func,
  toggleIcon: _react.PropTypes.shape({
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    style: _react.PropTypes.object
  }),
  onProps: _react.PropTypes.shape({
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    style: _react.PropTypes.object
  }),
  offProps: _react.PropTypes.shape({
    component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    style: _react.PropTypes.object
  })
};

exports.default = Toggle;
module.exports = exports['default'];