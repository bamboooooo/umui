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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
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

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Button = __webpack_require__(7);
var Root = React.createClass({
    displayName: 'Root',

    onClick1: function onClick1() {
        console.log('click');
    },
    onClick2: function onClick2() {
        console.log('取消');
    },
    onClick4: function onClick4() {
        this.refs.button4.setDisabled(true);
    },
    onClick5: function onClick5() {
        this.refs.button5.setValue('我变了');
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                '\u6B63\u5E38\u7684\u4F7F\u7528'
            ),
            React.createElement(Button, { ref: 'button1', id: 'test', value: '\u786E\u5B9A', onClick: this.onClick1 }),
            React.createElement(
                'p',
                null,
                '\u53D6\u6D88\u7684\u60C5\u51B5'
            ),
            React.createElement(Button, { ref: 'button2', className: 'ucs-btn-cancel', value: '\u53D6\u6D88', onClick: this.onClick2 }),
            React.createElement(
                'p',
                null,
                '\u7981\u7528\u7684\u60C5\u51B5'
            ),
            React.createElement(Button, { ref: 'button3', disabled: true, value: '\u4E0D\u53EF\u70B9\u51FB' }),
            React.createElement(
                'p',
                null,
                '\u8BBE\u7F6E\u7981\u7528\u7684\u60C5\u51B5'
            ),
            React.createElement(Button, { ref: 'button4', value: '\u70B9\u51FB/\u4E0D\u53EF\u70B9\u51FB', onClick: this.onClick4 }),
            React.createElement(
                'p',
                null,
                '\u8BBE\u7F6Evalue\u7684\u60C5\u51B5'
            ),
            React.createElement(Button, { ref: 'button5', value: '\u6539\u53D8\u6211', onClick: this.onClick5 })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var Button = React.createClass({
    displayName: 'Button',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null,
            name: null,
            disabled: false,
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-button', this.props.className, this.props.disabled ? 'disabled' : ''),
            disabled: this.props.disabled ? this.props.disabled : false,
            value: this.props.value
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        if (newProps !== this.props) {
            this.setState({
                value: newProps.value,
                className: classnames('ucs-button', newProps.className),
                disabled: newProps.disabled
            });
        }
    },
    _onClick: function _onClick() {
        this.props.onClick && this.props.onClick();
    },
    setValue: function setValue(v) {
        this.setState({
            value: v
        });
    },
    setDisabled: function setDisabled(v) {
        if (v) {
            this.setState({
                className: classnames(this.state.className, 'disabled'),
                disabled: true
            });
        } else {
            this.setState({
                className: classnames('ucs-button', this.props.className),
                disabled: false
            });
        }
    },
    render: function render() {
        return React.createElement(
            'button',
            { ref: 'button', id: this.props.id, name: this.props.name, className: this.state.className, disabled: this.state.disabled, onClick: this._onClick },
            this.state.value
        );
    }
});
module.exports = Button;

/***/ })

/******/ });