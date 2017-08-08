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


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var FloatButton = __webpack_require__(80);
var Root = React.createClass({
    displayName: "Root",

    componentDidMount: function componentDidMount() {
        // var _this = this;
        // setTimeout(function () {
        //     console.log(_this);
        //     _this.refs.fb.hide();
        // }, 3000);
        // setTimeout(function () {
        //     console.log(_this);
        //     _this.refs.fb.show();
        // }, 6000);
    },
    _click: function _click() {
        alert(123);
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(FloatButton, { move: true, ref: "fb", className: "test", img: "https://www.baidu.com/img/bd_logo1.png", text: "\u767E\u5EA6", onClick: this._click })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：漂浮按钮组件
 */
var classnames = __webpack_require__(0);
var FloatButton = React.createClass({
    displayName: 'FloatButton',

    getDefaultProps: function getDefaultProps() {
        return {
            move: false
        };
    },
    getInitialState: function getInitialState() {
        return {
            hide: false,
            xSpace: 10,
            ySpace: 20,
            tagSize: {}
        };
    },
    show: function show() {
        this.setState({
            hide: false
        });
    },
    hide: function hide() {
        this.setState({
            hide: true
        });
    },
    _animation: function _animation(position, callback) {
        var _style = this.refs.float_btn.style;
        var tagWidth = this.state.tagSize.width;
        var tagHeight = this.state.tagSize.height;
        _style.left = position.x - tagWidth / 2 + 'px';
        _style.top = position.y - tagHeight / 2 + 'px';
    },
    _onTouchStart: function _onTouchStart(e) {
        this.props.onTouchStart && this.props.onTouchStart(e);
    },
    _onTouchMove: function _onTouchMove(e) {
        if (!this.props.move) {
            return;
        }
        var _touch = e.touches[0];
        var _move = {
            x: _touch.clientX,
            y: _touch.clientY
        };
        this._animation(_move);
    },
    _onTouchEnd: function _onTouchEnd(e) {
        if (!this.props.move) {
            return;
        }
        var _touch = e.changedTouches[0];
        var _docWidth = document.documentElement.clientWidth;
        var _docHeight = document.documentElement.clientHeight;
        var tagWidth = this.state.tagSize.width;
        var tagHeight = this.state.tagSize.height;
        var _x = 0,
            _y = 0;
        if (_touch.clientX >= _docWidth / 2) {
            _x = _docWidth - tagWidth / 2 - this.state.xSpace;
        } else {
            _x = tagWidth / 2 + this.state.xSpace;
        }
        if (_touch.clientY >= _docHeight) {
            _y = _docHeight - tagHeight / 2 - this.state.ySpace;
        } else if (_touch.clientY < tagHeight / 2 + this.state.ySpace) {
            _y = tagHeight / 2 + this.state.ySpace;
        } else {
            _y = _touch.clientY;
        }
        this._animation({
            x: _x,
            y: _y
        });
    },
    componentDidMount: function componentDidMount() {
        this.state.tagSize = {
            width: this.refs.float_btn.offsetWidth,
            height: this.refs.float_btn.offsetHeight
        };
    },
    render: function render() {
        var _classname = classnames('ucs-float-button', this.props.className, { 'ucs-hide': this.state.hide });
        var _textClass = classnames('ucs-float-button-text', { 'ucs-float-only-text': !this.props.img });
        var _imgClass = classnames('ucs-float-button-img', { 'ucs-float-only-img': !this.props.text });
        return React.createElement(
            'div',
            { ref: 'float_btn', className: _classname, id: this.props.id, onClick: this.props.onClick,
                onTouchStart: this._onTouchStart, onTouchMove: this._onTouchMove, onTouchEnd: this._onTouchEnd },
            this.props.img ? React.createElement(
                'p',
                { className: _imgClass },
                React.createElement('img', { src: this.props.img })
            ) : '',
            this.props.text ? React.createElement(
                'p',
                { className: _textClass },
                this.props.text
            ) : ''
        );
    }
});
module.exports = FloatButton;

/***/ })

/******/ });