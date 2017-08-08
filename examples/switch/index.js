/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 141);
/******/ })
/************************************************************************/
/******/ ({

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = __webpack_require__(89);
var Root = React.createClass({
    displayName: 'Root',

    componentDidMount: function componentDidMount() {
        this.isDisabled = true;
    },
    onClick1: function onClick1() {
        console.log('click');
    },
    setChecked: function setChecked() {
        this.refs.switch1.setChecked(false);
    },
    getChecked: function getChecked() {
        var c = this.refs.switch2.getChecked();
        console.log(c);
    },
    setDisabled: function setDisabled() {
        if (!this.isDisabled) {
            this.refs.switch3.setDisabled(true);
            this.isDisabled = true;
        } else {
            this.refs.switch3.setDisabled(false);
            this.isDisabled = false;
        }
    },
    reset: function reset() {
        this.refs.switch1.reset();
    },
    render: function render() {
        var config1 = {
            checked: true,
            className: 'custom-switch'
        };
        var config2 = {
            checked: false
        };
        var config3 = {
            checked: true,
            disabled: true
        };
        var config4 = {
            checked: false,
            disabled: true
        };
        return React.createElement(
            'div',
            null,
            React.createElement(
                'ul',
                { className: 'list' },
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        'switch-on\uFF1A'
                    ),
                    React.createElement(
                        'div',
                        { className: 'list-right' },
                        React.createElement(Switch, _extends({ ref: 'switch1' }, config1))
                    )
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        'switch-off:'
                    ),
                    React.createElement(
                        'div',
                        { className: 'list-right' },
                        React.createElement(Switch, _extends({ ref: 'switch2' }, config2))
                    )
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        'switch-on-disabled:'
                    ),
                    React.createElement(
                        'div',
                        { className: 'list-right' },
                        React.createElement(Switch, _extends({ ref: 'switch3' }, config3))
                    )
                ),
                React.createElement(
                    'li',
                    { className: 'list-item' },
                    React.createElement(
                        'label',
                        { className: 'label' },
                        'switch-off-disabled:'
                    ),
                    React.createElement(
                        'div',
                        { className: 'list-right' },
                        React.createElement(Switch, _extends({ ref: 'switch4' }, config4))
                    )
                )
            ),
            React.createElement(
                'button',
                { onClick: this.setChecked },
                '\u8BBE\u7B2C\u4E00\u4E2A\u4E3Aoff'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.getChecked },
                '\u83B7\u53D6\u7B2C\u4E8C\u4E2A\u7684checked'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.setDisabled },
                '\u7981\u7528/\u542F\u7528\u7B2C\u4E09\u4E2A'
            ),
            '\uFF1A',
            React.createElement(
                'button',
                { onClick: this.reset },
                '\u91CD\u7F6E\u7B2C\u4E00\u4E2A'
            ),
            '\uFF1A'
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Switch = React.createClass({
    displayName: 'Switch',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            checked: false,
            disabled: false,
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            disabled: this.props.disabled ? this.props.disabled : false,
            checked: this.props.checked
        };
    },
    setChecked: function setChecked(v) {
        this.setState({
            checked: v
        });
    },
    getChecked: function getChecked() {
        return this.state.checked;
    },
    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                disabled: true
            });
        } else {
            this.setState({
                disabled: false
            });
        }
    },
    reset: function reset() {
        if (this.props.checked) {
            this.setState({
                checked: true
            });
        } else {
            this.setState({
                checked: false
            });
        }
    },
    _onClick: function _onClick() {
        if (this.state.disabled) {
            return;
        }
        this.setChecked(!this.state.checked);
        this.props.onClick && this.props.onClick();
    },
    render: function render() {
        var baseCls = 'ucs-switch';
        var cleckedCls = this.state.checked ? baseCls + ' ucs-switch-on' : baseCls;
        var disabledCls = this.state.disabled ? cleckedCls + ' ucs-switch-disabled' : cleckedCls;
        var cls = this.props.className ? disabledCls + ' ' + this.props.className : disabledCls;
        return React.createElement(
            'span',
            { ref: 'switch', className: cls, id: this.props.id, onClick: this._onClick },
            React.createElement('span', { className: 'ucs-switch-inner' })
        );
    }
});
module.exports = Switch;

/***/ })

/******/ });