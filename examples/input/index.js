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
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Input = __webpack_require__(78);
var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            msg: ''
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    _setValue: function _setValue() {
        this.refs.inputEle.setValue('new text');
    },
    _getValue: function _getValue() {
        var inputValue = this.refs.inputEle.getValue();
        console.log(inputValue);
    },
    _setReadOnly: function _setReadOnly() {
        this.refs.inputEle.setReadOnly(true);
    },
    _setDisabled: function _setDisabled() {
        this.refs.inputEle.setDisabled(true);
    },
    _clear: function _clear() {
        this.refs.inputEle.clear();
    },
    _reset: function _reset() {
        this.refs.inputEle.reset();
    },
    _onChange: function _onChange(e) {
        console.log('onChange');
        // console.log(e.target.name);
    },
    _onFocus: function _onFocus() {
        this.refs.inputEle.onFocus();
    },
    _onBlur: function _onBlur() {
        // console.log('onBlur');
    },
    onFocus: function onFocus(e) {
        // this.setState({msg: e.target.name});
    },
    validation: function validation(e, result) {
        if (!result) {
            this.setState({ msg: e.target.name + '的手机号码不正确' });
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'ucs-input-example' },
            this.state.msg,
            React.createElement(Input, { type: 'tel', ref: 'inputEle', name: 'a1', value: 'asdfafd', onFocus: this.onFocus, afterValidation: this.validation }),
            React.createElement(Input, { type: 'tel', ref: 'inputEle2', onFocus: this.onFocus, name: 'a2', afterValidation: this.validation }),
            React.createElement(Input, { type: 'tel', ref: 'inputEle3', value: 'sadfasfd', onFocus: this.onFocus, name: 'a3', afterValidation: this.validation }),
            React.createElement(Input, { type: 'tel', ref: 'inputEle4', onFocus: this.onFocus, name: 'a4', afterValidation: this.validation }),
            React.createElement(Input, { type: 'number', value: 'adfa', onFocus: this.onFocus }),
            React.createElement('input', { type: 'button', value: 'readOnly', onClick: this._setReadOnly }),
            React.createElement('input', { type: 'button', value: 'disabled', onClick: this._setDisabled }),
            React.createElement('input', { type: 'button', value: 'setValue', onClick: this._setValue }),
            React.createElement('input', { type: 'button', value: 'getValue', onClick: this._getValue }),
            React.createElement('input', { type: 'button', value: 'clear', onClick: this._clear }),
            React.createElement('input', { type: 'button', value: 'reset', onClick: this._reset }),
            React.createElement('input', { type: 'button', value: 'focus', onClick: this._onFocus })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var Input = React.createClass({
    displayName: 'Input',

    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-input', this.props.className, this.props.disabled ? 'disabled' : ''),
            value: this.props.value !== '' ? this.props.value : this.props.defaultValue,
            readOnly: this.props.readOnly || false,
            disabled: this.props.disabled || false,
            isShowClear: this.props.isShowClear || false
        };
    },
    componentDidMount: function componentDidMount() {
        if (this.props.type === 'tel' || this.props.type === 'number') {
            this.setState({
                value: this.refs.inputEle.value.replace(/\D/g, '')
            }, function () {
                this._showCloseHandler(this.refs.inputEle.value);
            });
        }
    },
    getDefaultProps: function getDefaultProps() {
        return {
            type: 'text',
            className: '',
            readOnly: false,
            disabled: false,
            placeHolder: '',
            id: null,
            name: null,
            value: '',
            defaultValue: '',
            isShowClear: false,
            maxLength: '',
            onChange: null,
            onFocus: null,
            onBlur: null,
            afterValidation: null
        };
    },
    // Input的value改变时执行的事件
    _onChange: function _onChange(e) {
        if (this.props.type === 'tel') {
            this.setState({
                value: e.target.value.replace(/\D/g, '')
            });
        } else {
            this.setState({ value: e.target.value });
        }
        this._showCloseHandler(this.refs.inputEle.value);
        this.props.onChange && this.props.onChange(e);
    },
    // Input获取焦点时执行的事件
    _onFocus: function _onFocus(e) {
        this.props.onFocus && this.props.onFocus(e);
    },
    // Input失去焦点时执行的事件
    _onBlur: function _onBlur(e) {
        // 对type==='tel'时进行校验
        if (this.props.type === 'tel') {
            this._formatTelCheck(e);
        }
        this.props.onBlur && this.props.onBlur(e);
    },
    // showClose的显示与隐藏 @param value
    _showCloseHandler: function _showCloseHandler(value) {
        if (value !== '' && !this.state.disabled && !this.state.readOnly) {
            this.setState({
                isShowClear: true
            });
        } else {
            this.setState({
                isShowClear: false
            });
        }
    },
    // 点击showClose
    _showCloseClick: function _showCloseClick() {
        this.clear();
        this.setState({ isShowClear: false });
    },
    // 设定type="tel"输入校验
    _formatTelCheck: function _formatTelCheck(e) {
        var inputValue = this.state.value;
        var pattern = /^1[3|4|5|7|8][0-9]{9}$/;
        var result = pattern.test(inputValue);
        this.props.afterValidation && this.props.afterValidation(e, result);
    },
    // 设置Input的value @param {string} v
    setValue: function setValue(v) {
        if (this.props.type === 'tel' || this.props.type === 'tel') {
            this.setState({
                value: v.replace(/\D/g, '')
            });
        } else {
            this.setState({ value: v });
        }
    },
    // 获取Input的value @return {string}
    getValue: function getValue() {
        return this.state.value;
    },
    // 设置Input是否只读 @param {boolean} v
    setReadOnly: function setReadOnly(v) {
        if (v) {
            this.setState({
                readOnly: v,
                isShowClear: false
            });
        } else {
            this.setState({
                readOnly: false,
                isShowClear: true
            });
        }
    },
    // 设置Input是否可用 @param {boolean} v
    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                disabled: v,
                isShowClear: false,
                className: classnames('ucs-input', this.props.className, 'disabled')
            });
        } else {
            this.setState({
                disabled: false,
                isShowClear: true,
                className: classnames('ucs-input', this.props.className)
            });
        }
    },
    // 清空Input的值
    clear: function clear() {
        this.setState({ value: '' });
    },
    // 重置Input的值
    reset: function reset() {
        if (this.props.defaultValue) {
            this.setState({ value: this.props.defaultValue });
        } else {
            this.clear();
        }
    },
    // focus 事件 @param e
    onFocus: function onFocus() {
        this.refs.inputEle.focus();
    },
    render: function render() {
        // 清除标签
        var spanShowClose = {
            display: this.state.isShowClear ? 'block' : 'none'
        };
        var showClear = React.createElement(
            'a',
            { href: 'javascript:;', onClick: this._showCloseClick },
            React.createElement(
                'span',
                { className: 'ucs-showClose', style: spanShowClose },
                '\xD7'
            )
        );
        return React.createElement(
            'div',
            { className: 'ucs-input-control' },
            React.createElement('input', {
                ref: 'inputEle',
                type: this.props.type,
                className: this.state.className,
                readOnly: this.state.readOnly,
                disabled: this.state.disabled,
                placeholder: this.props.placeHolder,
                id: this.props.id,
                name: this.props.name,
                value: this.state.value,
                maxLength: this.props.type === 'tel' ? '11' : this.props.maxLength,
                onChange: this._onChange,
                onFocus: this._onFocus,
                onBlur: this._onBlur
            }),
            showClear
        );
    }
});
module.exports = Input;

/***/ })

/******/ });