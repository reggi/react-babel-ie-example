'use strict';

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function (_React$Component) {
  (0, _inherits3.default)(Logo, _React$Component);

  function Logo() {
    (0, _classCallCheck3.default)(this, Logo);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Logo).apply(this, arguments));
  }

  (0, _createClass3.default)(Logo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', (0, _extends3.default)({ className: 'center' }, this.props));
    }
  }]);
  return Logo;
}(_react2.default.Component);

Logo.propTypes = {
  src: _react2.default.PropTypes.string.isRequired
};

var Label = function (_React$Component2) {
  (0, _inherits3.default)(Label, _React$Component2);

  function Label() {
    (0, _classCallCheck3.default)(this, Label);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
  }

  (0, _createClass3.default)(Label, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        (0, _extends3.default)({ className: 'default-label' }, this.props),
        ' Hello World ',
        _react2.default.createElement(
          'span',
          { className: 'name' },
          ' ',
          this.props.name,
          ' '
        )
      );
    }
  }]);
  return Label;
}(_react2.default.Component);

var Input = function (_React$Component3) {
  (0, _inherits3.default)(Input, _React$Component3);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', (0, _extends3.default)({
        className: 'default-input',
        placeholder: 'Enter your name'
      }, this.props, {
        type: 'text'
      }));
    }
  }]);
  return Input;
}(_react2.default.Component);

var HelloWidget = function (_React$Component4) {
  (0, _inherits3.default)(HelloWidget, _React$Component4);

  function HelloWidget(props) {
    (0, _classCallCheck3.default)(this, HelloWidget);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HelloWidget).call(this, props));

    console.log(_this4.props.name);
    _this4.handleChange = _this4.handleChange.bind(_this4);
    _this4.state = {
      name: ''
    };
    return _this4;
  }

  (0, _createClass3.default)(HelloWidget, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'widget' },
        _react2.default.createElement(Logo, { className: 'center', src: 'http://goo.gl/fx5Zwn' }),
        _react2.default.createElement(Label, { className: 'default-label', name: this.state.name }),
        _react2.default.createElement(Input, { className: 'default-input', onChange: this.handleChange }),
        ' '
      );
    }
  }]);
  return HelloWidget;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(HelloWidget, { name: 'Thomas Reggi' }), document.getElementById('container'));