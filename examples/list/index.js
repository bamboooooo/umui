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
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var List = __webpack_require__(90);
var _touchExtra = [{
    'text': '删除',
    'onClick': function onClick() {
        console.log('删除');
    }
}, {
    'text': '关注',
    'onClick': function onClick() {
        console.log('关注');
    }
}, {
    'text': '收藏',
    'onClick': function onClick() {
        console.log('收藏');
    }
}, {
    'text': '收藏1',
    'onClick': function onClick() {
        console.log('收藏1');
    }
}];
var Root = React.createClass({
    displayName: 'Root',

    _handleClick: function _handleClick(e) {
        console.log(e.target);
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
                    { className: 'Item', thumb: 'https://www.baidu.com/img/bd_logo1.png', extra: '2017-08-06', arrow: 'right', align: 'top', touchExtra: _touchExtra, onClick: this._handleClick },
                    React.createElement(
                        'p',
                        null,
                        '\u8FD9\u662F\u4E2D\u95F4\u5185\u5BB9'
                    )
                ),
                React.createElement(
                    List.Item,
                    { className: 'Item', thumb: 'https://www.baidu.com/img/bd_logo1.png', extra: '2017-08-06', arrow: 'right', align: 'bottom', activeClassName: 'active', onClick: this._handleClick },
                    React.createElement(
                        'p',
                        null,
                        '\u8FD9\u662F\u4E2D\u95F4\u5185\u5BB9'
                    )
                )
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

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/8/3
 * 说明：List组件
 */
var classnames = __webpack_require__(0);
var Button = __webpack_require__(8);
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
            activeClassName: null,
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
    },
    _onTouchMove: function _onTouchMove(e) {
        if (!this.props.touchExtra) {
            return;
        }
        var _touch = e.touches[0];
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
        this.props.touchMove && this.props.touchMove(e, this.state.moveArrow);
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
    },
    _handleClick: function _handleClick(e) {
        this.props.onClick && this.props.onClick(e);
    },
    render: function render() {
        var _itemClass = classnames('ucs-list-item', this.props.activeClassName, this.props.className);
        var _arrowClass = classnames('iconfont', 'icon-arrow', 'arrow-' + this.props.arrow);
        var _extraClass = classnames('list-extra', 'extra-align-' + this.props.align);
        return React.createElement(
            'li',
            { className: _itemClass },
            React.createElement(
                'div',
                { className: 'list-front-layer', ref: 'listFrontLayer', onClick: this._handleClick, onTouchStart: this._onTouchStart, onTouchMove: this._onTouchMove, onTouchEnd: this._onTouchEnd },
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
                this.props.touchExtra.map(function (val, index) {
                    if (index < 3) {
                        return React.createElement(Button, { value: val.text, onClick: val.onClick, key: index });
                    } else {
                        return;
                    }
                })
            ) : ''
        );
    }
});
module.exports = List;

/***/ })

/******/ });