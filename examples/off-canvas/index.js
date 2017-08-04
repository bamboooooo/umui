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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by maxuezhu on 2017/8/2.
 */
var OffCanvas = __webpack_require__(91);
var Root = React.createClass({
    displayName: 'Root',

    getDefaultProps: function getDefaultProps() {
        return {
            id: '333',
            sidebar: '123',
            onOpenChange: function onOpenChange() {
                console.log('芝麻开门嘛哩嘛哩哄');
            },
            touch: true,
            transitions: true,
            width: 300,
            maskClosable: true,
            isDisabled: false,
            open: false
        };
    },
    _clickHandle1: function _clickHandle1() {
        this.refs.OffCanvas.show();
    },
    _clickHandle2: function _clickHandle2() {
        this.refs.OffCanvas.hide();
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this._clickHandle1 },
                '\u5F39\u51FA\u4FA7\u8FB9\u680F'
            ),
            React.createElement(
                'button',
                { onClick: this._clickHandle2 },
                '\u6536\u8D77\u4FA7\u8FB9\u680F'
            ),
            React.createElement(
                'div',
                { className: 'slider' },
                React.createElement(
                    OffCanvas,
                    _extends({ ref: 'OffCanvas' }, this.props),
                    '\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u4FA7\u8FB9\u680F'
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 2:
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

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by maxuezhu on 2017/8/2.
 */
var classnames = __webpack_require__(2);
var OffCanvas = React.createClass({
    displayName: 'OffCanvas',

    getDefaultProps: function getDefaultProps() {
        return {
            id: '',
            sidebar: '',
            onOpenChange: null,
            touch: true,
            transitions: true,
            width: 300,
            maskClosable: true,
            isDisabled: false,
            open: false
        };
    },
    getInitialState: function getInitialState() {
        return {
            open: this.props.open,
            className: 'ucs-offcanvas',
            isDisabled: this.props.isDisabled,
            transitions: true,
            maskStyle: {
                opacity: this.props.open ? 1 : 0,
                visibility: this.props.open ? 'visible' : 'hidden'
            },
            sliderStyle: {
                transform: this.props.open ? 'translateX(-100%)' : 'translateX(-100%)',
                width: this.props.width ? this.props.width : 300,
                transition: this.props.transitions ? null : 'none'
            }
        };
    },
    show: function show() {
        if (this.state.isDisabled) {
            return;
        }
        if (this.state.open) {
            return;
        }
        this.setState({
            open: true,
            maskStyle: {
                opacity: 1,
                visibility: 'visible'
            },
            sliderStyle: {
                transform: 'translateX(0)'
            }
        });
        this.props.onOpenChange ? this.props.onOpenChange() : null;
    },
    hide: function hide() {
        if (this.state.isDisabled) {
            return;
        }
        if (!this.state.open) {
            return;
        }
        this.setState({
            open: false,
            maskStyle: {
                opacity: 0,
                visibility: 'hidden'
            },
            sliderStyle: {
                transform: 'translateX(-100%)'
            }
        });
        this.props.onOpenChange ? this.props.onOpenChange() : null;
    },
    _clickHandle: function _clickHandle() {
        if (this.state.isDisabled) {
            return;
        }
        if (this.state.open) {
            this.hide();
        } else {
            this.show();
        }
    },
    _maskClickHandle: function _maskClickHandle() {
        if (this.props.maskClosable) {
            this._clickHandle();
        } else {
            return;
        }
    },
    _touchmoveHandle: function _touchmoveHandle(e) {
        if (this.state.isDisabled) {
            return;
        }
        if (!this.props.touch) {
            return;
        }
        if (!e.touches) {
            return;
        }
        var opacity, transform, visibility, open;
        if (e.touches[0].clientX > this.props.width) {
            opacity = 1;
            transform = 'translateX(0)';
            visibility = 'visible';
            open = true;
        } else if (e.touches[0].clientX < 0) {
            opacity = 0;
            transform = 'translateX(-100%)';
            visibility = 'hidden';
            open = false;
        } else {
            opacity = e.touches[0].clientX / this.props.width;
            transform = 'translateX(-' + parseInt(this.props.width - e.touches[0].clientX, 10) + 'px)';
            visibility = 'visible';
            open = true;
        }
        this.setState({
            open: open,
            maskStyle: {
                opacity: opacity,
                visibility: visibility
            },
            sliderStyle: {
                transform: transform
            }
        });
    },
    _touchendHandle: function _touchendHandle(e) {
        if (!this.props.touch) {
            return;
        }
        if (parseInt(e.changedTouches[0].clientX, 10) > 50) {
            this.show();
            this.setState({
                sliderStyle: {
                    transform: 'translateX(0)'
                }
            });
            this.props.onOpenChange ? this.props.onOpenChange() : null;
        } else {
            this.hide();
            this.setState({
                sliderStyle: {
                    transform: 'translateX(-100%)'
                }
            });
        }
    },
    render: function render() {
        var classname = this.props.transitions ? this.state.className : classnames(this.state.className, 'notransition');
        if (this.props.touch) {
            var touchPart = React.createElement('div', { className: 'ucs-offcanvas-touchPart', onTouchMove: this._touchmoveHandle, onTouchEnd: this._touchendHandle });
        }
        return React.createElement(
            'div',
            { className: classname },
            React.createElement('div', { className: 'ucs-offcanvas-mask', ref: 'mask', onClick: this._maskClickHandle, style: this.state.maskStyle }),
            React.createElement(
                'div',
                { className: 'ucs-offcanvas-sidebar', ref: 'offcanvas', style: this.state.sliderStyle },
                this.props.sidebar
            ),
            React.createElement(
                'div',
                { className: 'ucs-offcanvas-con' },
                touchPart,
                this.props.children
            )
        );
    }
});
module.exports = OffCanvas;

/***/ })

/******/ });