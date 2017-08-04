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
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var List = __webpack_require__(93);
var Root = React.createClass({
    displayName: 'Root',

    _handleClick: function _handleClick() {
        console.log('test');
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                List,
                { className: 'project-list', header: '\u8FD9\u662F\u5217\u8868\u5934\u90E8', footer: '\u8FD9\u662F\u5217\u8868\u5E95\u90E8' },
                React.createElement(
                    List.Item,
                    { className: 'Item', thumb: 'https://www.baidu.com/img/bd_logo1.png', extra: '2017-08-06', arrow: 'right', align: 'top', touchExtra: 'hello world', onClick: this._handleClick },
                    React.createElement(
                        'p',
                        null,
                        'abcdefghijklmnopqrst'
                    )
                ),
                React.createElement(
                    List.Item,
                    { className: 'Item', thumb: 'https://www.baidu.com/img/bd_logo1.png', extra: '2017-08-06', arrow: 'right', align: 'bottom', activeClass: 'active', onClick: this._handleClick },
                    React.createElement(
                        'p',
                        null,
                        'abcdefghijklmnopqrst'
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/3
 * 说明：List组件
 */
var classnames = __webpack_require__(1);
var List = React.createClass({
    displayName: 'List',

    getDefaultProps: function getDefaultProps() {
        return {
            id: null,
            className: null
        };
    },
    render: function render() {
        var _class = classnames('ucs-list', this.props.className);
        return React.createElement(
            'div',
            { id: this.props.id, className: _class },
            React.createElement(
                'p',
                { className: 'ucs-list-header' },
                this.props.header
            ),
            React.createElement(
                'ul',
                null,
                this.props.children
            ),
            React.createElement(
                'p',
                { className: 'ucs-list-footer' },
                this.props.footer
            )
        );
    }
});
List.Item = React.createClass({
    displayName: 'Item',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            thumb: null, // 左边缩略图 src
            extra: null, // 右侧内容文字
            arrow: 'right', // 箭头方向
            align: 'middle', // 内容文字垂直对齐
            activeClass: null,
            touchExtra: '',
            onClick: null,
            touchMove: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            startX: 0,
            startY: 0,
            moveArrow: null
        };
    },
    _animation: function _animation(position, callback) {
        var _style = this.refs.float_btn.style;
        var tagWidth = this.state.tagSize.width;
        var tagHeight = this.state.tagSize.height;
        _style.left = position.x - tagWidth / 2 + 'px';
        _style.top = position.y - tagHeight / 2 + 'px';
    },
    _onTouchStart: function _onTouchStart(e) {
        if (!this.props.touchExtra) {
            return;
        }
        var _touch = e.touches[0];
        this.state.startX = _touch.clientX;
        this.state.startY = _touch.clientY;
        // this.props.onTouchStart && this.props.onTouchStart(e);
    },
    _onTouchMove: function _onTouchMove(e) {
        if (!this.props.touchExtra) {
            return;
        }
        var _touch = e.touches[0];
        // var _move = {
        //     x: _touch.clientX,
        //     y: _touch.clientY
        // };
        var _setLeft = this.refs.listBackLayer.offsetWidth;
        var _left = this.refs.listFrontLayer.style.left;
        _left = Number(_left.slice(0, -2));
        if (_touch.clientX < this.state.startX) {
            var _start = _left < 0 ? _touch.clientX - this.state.startX - _setLeft : _touch.clientX - this.state.startX;
            this.refs.listFrontLayer.style.left = _start + 'px';
            this.state.moveArrow = 'left';
        } else {
            this.refs.listFrontLayer.style.left = _touch.clientX - this.state.startX + 'px';
            this.state.moveArrow = 'right';
        }
        this.props.touchMove && this.props.touchMove();
        // console.log(_move);
        // this._animation(_move);
    },
    _onTouchEnd: function _onTouchEnd(e) {
        if (!this.props.touchExtra) {
            return;
        }

        var _setLeft = this.refs.listBackLayer.offsetWidth;
        if (this.state.moveArrow === 'left') {
            this.refs.listFrontLayer.style.left = -_setLeft + 'px';
        } else {
            this.refs.listFrontLayer.style.left = '0px';
        }
        // var _touch = e.changedTouches[0];
        // this.state.startX = _touch.clientX;
        // this.state.startY = _touch.clientY;
        // var _docWidth = document.documentElement.clientWidth ;
        // var _docHeight = document.documentElement.clientHeight;
        // var tagWidth = this.state.tagSize.width;
        // var tagHeight = this.state.tagSize.height;
        // var _x = 0, _y = 0;
        // if (_touch.clientX >= (_docWidth / 2)) {
        //     _x = _docWidth - tagWidth / 2 - this.state.xSpace;
        // } else {
        //     _x = tagWidth / 2 + this.state.xSpace;
        // }
        // if (_touch.clientY >= _docHeight) {
        //     _y = _docHeight - tagHeight / 2 - this.state.ySpace;
        // } else if (_touch.clientY < (tagHeight / 2 + this.state.ySpace)) {
        //     _y = tagHeight / 2 + this.state.ySpace;
        // } else {
        //     _y = _touch.clientY;
        // }
        // this._animation({
        //     x: _x,
        //     y: _y
        // });
    },
    render: function render() {
        var _itemClass = classnames('ucs-list-item', this.props.activeClass, this.props.className);
        var _arrowClass = classnames('iconfont', 'icon-arrow', 'arrow-' + this.props.arrow);
        var _extraClass = classnames('list-extra', 'extra-align-' + this.props.align);
        return React.createElement(
            'li',
            { className: _itemClass, onClick: this.props.onClick },
            React.createElement(
                'div',
                { className: 'list-front-layer', ref: 'listFrontLayer', onTouchStart: this._onTouchStart, onTouchMove: this._onTouchMove, onTouchEnd: this._onTouchEnd },
                this.props.thumb ? React.createElement(
                    'div',
                    { className: 'list-thumb' },
                    React.createElement('img', { src: this.props.thumb, alt: '' })
                ) : '',
                React.createElement(
                    'div',
                    { className: 'list-left-content' },
                    this.props.children
                ),
                this.props.extra ? React.createElement(
                    'div',
                    { className: _extraClass },
                    this.props.extra
                ) : '',
                this.props.arrow !== 'empty' ? React.createElement('i', { className: _arrowClass }) : ''
            ),
            this.props.touchExtra ? React.createElement(
                'div',
                { className: 'list-back-layer', ref: 'listBackLayer' },
                this.props.touchExtra
            ) : ''
        );
    }
});
module.exports = List;

/***/ })

/******/ });