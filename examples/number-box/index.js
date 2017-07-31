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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(3);
var Numberbox = React.createClass({
    displayName: 'Numberbox',

    getDefaultProps: function getDefaultProps() {
        return {
            id: '',
            name: '',
            max: null,
            min: 0,
            step: 1,
            formatter: null,
            onChange: '',
            defaultValue: ''
        };
    },
    getInitialState: function getInitialState() {
        return {
            value: 0,
            className: classnames('ucs-number-box', this.props.className),
            disabled: this.props.disabled ? this.props.disabled : false,
            formalValue: 0,
            formatterValue: ''
        };
    },
    setValue: function setValue(v) {
        this.setState({
            value: v
        });
    },

    getValue: function getValue() {
        return this.setState.value;
    },
    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                className: classnames(this.state.className, 'disabled'),
                disabled: true
            });
        } else {
            this.setState({
                className: classnames('ucs-number-box', this.props.className),
                disabled: false
            });
        }
    },
    clear: function clear() {
        this.setValue('');
    },
    reset: function reset() {
        console.log('reset');
        if (this.props.defaultValue) {
            this.setValue(this.props.defaultValue);
            this._setformalValue(this.props.defaultValue);
            this._setFormatValue(this.props.defaultValue);
        } else {
            this.clear();
        }
    },
    changeHandle: function changeHandle(e) {
        this.props.onChange ? this.props.onChange() : '';
        var c = e.target.value;
        if (/[^\d]/.test(c)) {
            // 替换非数字字符
            c = c.replace(/[^\d]/g, '');
        }
        if (parseInt(c, 10) > this.props.max) {
            if (this.props.max !== null) {
                return;
            }
        }
        if (c === '') {
            this._setFormatValue('0');
        }
        this.setValue(c);
        this._setformalValue(c);
    },
    _setFormatValue: function _setFormatValue(v) {
        if (v === 0 && v === '') {
            this.setState({
                formatterValue: '0'
            });
        } else {
            var formatterVal = this.props.formatter(v);
            this.setState({
                formatterValue: formatterVal
            });
        }
    },
    getformalValue: function getformalValue(v) {
        return this.state.formatterValue;
    },
    _setformalValue: function _setformalValue(v) {
        this.setState({
            formalValue: v
        });
    },
    _blurHandle: function _blurHandle() {
        if (this.state.formatterValue === '') {
            this.setValue('0');
        } else {
            this.setValue(this.state.formatterValue);
        }
    },
    _focusHandle: function _focusHandle() {
        this.setValue(this.state.formalValue);
        this.props.onFocus && this.props.onFocus();
    },
    _plusHandle: function _plusHandle() {
        if (this.state.disabled) {
            return false;
        }
        this.refs.numberbox.focus();
        var step = this.props.step;
        var val = this.refs.numberbox.value;
        var newVal = parseInt(val, 10) + parseInt(step, 10);
        if (this.props.max === null) {
            this.setValue(newVal.toString());
            this._setformalValue(newVal.toString());
            this._setFormatValue(newVal.toString());
        } else {
            if (newVal <= parseInt(this.props.max, 10)) {
                this.setValue(newVal.toString());
                this._setformalValue(newVal.toString());
                this._setFormatValue(newVal.toString());
            } else {
                return false;
            }
        }
    },
    _reduceHandle: function _reduceHandle() {
        if (this.state.disabled) {
            return false;
        }
        this.refs.numberbox.focus();
        var step = this.props.step;
        var val = this.refs.numberbox.value;
        var newVal = parseInt(val, 10) - parseInt(step, 10);
        if (newVal >= parseInt(this.props.min, 10)) {
            this.setValue(newVal.toString());
            this._setformalValue(newVal.toString());
            this._setFormatValue(newVal.toString());
        } else {
            return false;
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'ucs-numberbox-box' },
            React.createElement(
                'i',
                { className: 'icon icon-reduce', onClick: this._reduceHandle },
                '-'
            ),
            React.createElement('input', { type: 'text', ref: 'numberbox', value: this.state.value,
                className: this.state.className,
                name: this.props.name, id: this.props.id,
                disabled: this.state.disabled,
                onChange: this.changeHandle,
                onBlur: this._blurHandle,
                onFocus: this._focusHandle }),
            React.createElement(
                'i',
                { className: 'icon icon-plus', ref: 'plus', onClick: this._plusHandle },
                '+'
            )
        );
    }
});
module.exports = Numberbox;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Numberbox = __webpack_require__(80);
var Root = React.createClass({
    displayName: 'Root',

    getDefaultProps: function getDefaultProps() {
        return {
            id: '1',
            name: 'numberbox',
            max: 100,
            min: 3,
            step: 10,
            onChange: function onChange() {
                console.log(1);
            },
            defaultValue: '100',
            formatter: function formatter(v) {
                return v + '.00';
            }
        };
    },
    clickHandle: function clickHandle(e) {
        this.refs.numberbox.reset();
    },
    clickHandle1: function clickHandle1(e) {
        this.refs.numberbox1.setDisabled(true);
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                '\u91CD\u7F6E\u7EC4\u4EF6\u7684\u503C'
            ),
            React.createElement(Numberbox, _extends({ ref: 'numberbox' }, this.props)),
            React.createElement('input', { type: 'button', value: 'reset', onClick: this.clickHandle, className: 'btn' }),
            React.createElement('br', null),
            React.createElement(
                'p',
                null,
                '\u7981\u7528'
            ),
            React.createElement(Numberbox, _extends({ ref: 'numberbox1' }, this.props)),
            React.createElement('input', { type: 'button', value: 'disabled', onClick: this.clickHandle1, className: 'btn' }),
            React.createElement('br', null),
            React.createElement(
                'p',
                null,
                '\u6B63\u5E38\u4F7F\u7528'
            ),
            React.createElement(Numberbox, _extends({ ref: 'numberbox2' }, this.props))
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ })

/******/ });