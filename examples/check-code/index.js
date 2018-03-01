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
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CheckCode = __webpack_require__(86);
var Root = React.createClass({
    displayName: "Root",

    onClick1: function onClick1() {
        this.refs.checkCode.start();
    },
    onClick2: function onClick2() {
        this.refs.checkCode2.start();
    },
    onClick3: function onClick3() {
        this.refs.checkCode2.setDisabled(true);
    },
    onClick4: function onClick4() {
        this.refs.checkCode2.reset();
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                null,
                "\u6B63\u5E38\u7684\u4F7F\u7528"
            ),
            React.createElement(CheckCode, { ref: "checkCode", id: "test", onClick: this.onClick1 }),
            React.createElement(
                "h3",
                null,
                "\u7981\u7528"
            ),
            React.createElement(CheckCode, { ref: "checkCode1", disabled: true }),
            React.createElement(
                "h3",
                null,
                "\u529F\u80FD\u6D4B\u8BD5"
            ),
            React.createElement(CheckCode, { ref: "checkCode2", text: "\u70B9\u51FB\u83B7\u53D6", temp: "s", onClick: this.onClick2 }),
            React.createElement("br", null),
            React.createElement(
                "a",
                { onClick: this.onClick3 },
                "\u8BBE\u4E3A\u7981\u7528"
            ),
            React.createElement("br", null),
            React.createElement(
                "a",
                { onClick: this.onClick4 },
                "\u91CD\u7F6E"
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 8:
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

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by chenzefang on 2017/8/4.
 */
var classnames = __webpack_require__(0);
var Button = __webpack_require__(8);
var CheckCode = React.createClass({
    displayName: 'CheckCode',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            id: null,
            disabled: false,
            count: 10,
            temp: '秒后获取',
            text: '获取验证码',
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-checkcode', this.props.className),
            disabled: this.props.disabled,
            text: this.props.text
        };
    },

    /*
     * 设置不可用
     * */
    setDisabled: function setDisabled(v) {
        var _this = this;
        if (_this.time !== 'undefined') {
            clearInterval(_this.time);
            _this.setState({
                text: _this.props.text
            });
        }
        this.setState({
            className: classnames('ucs-checkcode', this.props.className, { 'disabled': v }),
            disabled: v
        });
    },

    /*
    * 开始倒计时
    * */
    start: function start() {
        var _this = this;
        var count = _this.props.count;
        var className = this.state.className;
        _this.setState({
            className: classnames('ucs-checkcode', this.props.className, 'disabled'),
            text: count + _this.props.temp,
            disabled: true
        });
        _this.time = setInterval(function () {
            if (count > 0) {
                count--;
                _this.setState({
                    text: count + _this.props.temp
                });
            } else {
                clearInterval(_this.time);
                _this.setState({
                    className: className,
                    text: _this.props.text,
                    disabled: false
                });
            }
        }, 1000);
    },

    /*
    *
    * */
    reset: function reset() {
        this.setState({
            className: classnames('ucs-checkcode', this.props.className, { 'disabled': false }),
            text: this.props.text,
            disabled: this.props.disabled
        });
        clearInterval(this.time);
    },
    render: function render() {
        return React.createElement(Button, { id: this.props.id, className: this.state.className, value: this.state.text, disabled: this.state.disabled, onClick: this.props.onClick });
    }
});

module.exports = CheckCode;

/***/ })

/******/ });