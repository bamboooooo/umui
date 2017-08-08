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
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Layer = __webpack_require__(96);
var Root = React.createClass({
    displayName: "Root",

    _clickOpen: function _clickOpen() {
        this.refs.layer1.show();
    },
    _clickClose: function _clickClose() {
        this.refs.layer1.hide();
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                Layer,
                { ref: "layer1", closeBack: this._clickClose },
                React.createElement(
                    Layer.Title,
                    null,
                    "\u6807\u9898"
                ),
                React.createElement(
                    "div",
                    { className: "ucs-layer-text" },
                    "\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9\u5185\u5BB9"
                )
            ),
            React.createElement(
                "button",
                { onClick: this._clickOpen },
                "\u663E\u793A\u5F39\u7A97"
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var Layer = React.createClass({
    displayName: 'Layer',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            id: null,
            confirmText: '确定',
            cancelText: '取消',
            confirmBack: null,
            cancelBack: null,
            isShowClose: true,
            closeBack: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-layer-container', this.props.className)
        };
    },
    show: function show() {
        this.refs.layer.style.display = 'block';
    },
    hide: function hide() {
        this.refs.layer.style.display = 'none';
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'alert-layer', ref: 'layer' },
            React.createElement('div', { className: 'ucs-layer-mask' }),
            React.createElement(
                'div',
                {
                    className: this.state.className,
                    id: this.props.id },
                React.createElement(
                    'div',
                    { className: 'ucs-layer-body' },
                    React.createElement(
                        'a',
                        { href: 'javascript:;', className: 'alert-close', style: { display: this.props.isShowClose ? 'block' : 'none' }, onClick: this.props.closeBack },
                        '\xD7'
                    ),
                    this.props.children,
                    React.createElement(
                        'div',
                        { className: 'ucs-layer-button' },
                        React.createElement(
                            'a',
                            { href: 'javascript:;', className: 'ucs-layer-btn confirm', onClick: this.props.confirmBack },
                            this.props.confirmText
                        ),
                        React.createElement(
                            'a',
                            { href: 'javascript:;', className: 'ucs-layer-btn cancel', onClick: this.props.cancelBack },
                            this.props.cancelText
                        )
                    )
                )
            )
        );
    }
});
Layer.Title = React.createClass({
    displayName: 'Title',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'ucs-layer-title' },
            this.props.children
        );
    }
});
module.exports = Layer;

/***/ })

/******/ });