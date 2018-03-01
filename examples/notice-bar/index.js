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
/******/ 	return __webpack_require__(__webpack_require__.s = 123);
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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NoticeBar = __webpack_require__(76);
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
    _onClick: function _onClick() {
        alert('onClick');
    },
    _onClose: function _onClose() {
        alert('onClose');
    },
    _setValue: function _setValue() {
        this.refs.noticeBar1.setValue('测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告测试通告');
        // this.refs.noticeBar1.setValue('测试通告');
    },
    _show: function _show() {
        this.refs.noticeBar1.show();
    },
    _hide: function _hide() {
        this.refs.noticeBar1.hide();
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(NoticeBar, { scroll: true, value: '\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F', ref: 'noticeBar1', displayCloseBtn: false }),
            React.createElement(NoticeBar, { scroll: true, onClick: this._onClick, onClose: this._onClose, value: '\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F' }),
            React.createElement(NoticeBar, { scroll: true, onClick: this._onClick, onClose: this._onClose, value: '\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F\u8FD9\u662F\u4E00\u6761\u901A\u544A\u4FE1\u606F', scrollSpeed: 10 }),
            React.createElement('input', { type: 'button', value: 'setValue', onClick: this._setValue }),
            React.createElement('input', { type: 'button', value: 'show', onClick: this._show }),
            React.createElement('input', { type: 'button', value: 'hide', onClick: this._hide })
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var NoticeBar = React.createClass({
    displayName: 'NoticeBar',

    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-noticeBar', this.props.className),
            displayCloseBtn: this.props.displayCloseBtn,
            showNoticeBar: true,
            value: this.props.value
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            className: '',
            displayCloseBtn: true,
            id: null,
            scroll: false,
            scrollSpeed: 50,
            value: '这是一条通告信息',
            onClick: null,
            onClose: null
        };
    },
    componentDidUpdate: function componentDidUpdate() {
        var _wrap = this.refs.ucsSeamlessScroll;
        var _wrapIn = this.refs.ucsSeamlessScrollIn;
        var _block1 = this.refs.seamlessScrollList1;
        var _block2 = this.refs.seamlessScrollList2;
        _block2.innerHTML = '';
        var _scrollBlock = _block1.getElementsByTagName('p')[0];
        var _scrollBlockWidth = _scrollBlock.offsetWidth;
        if (_scrollBlock.offsetWidth < _wrap.offsetWidth) {
            return;
        } else {
            _block2.innerHTML = _block1.innerHTML;
            _block2.getElementsByTagName('p')[0].style.width = _scrollBlockWidth + 'px';
            _wrapIn.style.width = _scrollBlockWidth * _wrapIn.getElementsByTagName('p').length + 'px';
        }
    },
    componentDidMount: function componentDidMount() {
        var _wrap = this.refs.ucsSeamlessScroll;
        var _wrapIn = this.refs.ucsSeamlessScrollIn;
        var _block1 = this.refs.seamlessScrollList1;
        var _block2 = this.refs.seamlessScrollList2;
        var _scrollBlock = _block1.getElementsByTagName('p')[0];
        var _speed = this.props.scrollSpeed;

        var _scrollBlockWidth = _scrollBlock.offsetWidth;
        if (_scrollBlock.offsetWidth < _wrap.offsetWidth) {
            return;
        } else {
            _block2.innerHTML = _block1.innerHTML;
            _block2.getElementsByTagName('p')[0].style.width = _scrollBlockWidth + 'px';
            _wrapIn.style.width = _scrollBlockWidth * _wrapIn.getElementsByTagName('p').length + 'px';
        }

        /**
         * @description 无缝滚动函数
         * @return {undefined}
         * */
        function seamlessScroll() {
            if (_block2.offsetWidth <= _wrap.scrollLeft) {
                _wrap.scrollLeft -= _block1.offsetWidth;
            } else {
                _wrap.scrollLeft++;
            }
        }
        // 启动定时器
        if (this.props.scroll) {
            var timer = setInterval(seamlessScroll, _speed);
        }
        // 触摸点击控制滚动
        _wrap.addEventListener('click', function () {
            if (this.props.scroll) {
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                } else {
                    timer = setInterval(seamlessScroll, _speed);
                }
            }
        }.bind(this), false);
    },
    // 获取一个特定元素(elem)的样式属性(name)
    _getStyle: function _getStyle(elem, name) {
        // 如果该属性存在于 style[]中，则它最近被设置过(且就是当前的)
        if (elem.style[name]) {
            return elem.style[name];
        } else if (elem.currentStyle) {
            // 否则，尝试 IE 的方式
            return elem.currentStyle[name];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            // 或者 W3C 的方法，如果存在的话
            // 它使用传统的"text-Align"风格的规则书写方式，而不是"textAlign"
            name = name.replace(/([A-Z])/g, '-$1');
            name = name.toLowerCase();
            // 获取 style 对象并取得属性的值(如果存在的话)
            var s = document.defaultView.getComputedStyle(elem, '');
            return s && s.getPropertyValue(name);
            // 否则，就是在使用其它的浏览器
        } else {
            return null;
        }
    },
    _showCloseClick: function _showCloseClick() {
        this.setState({
            showNoticeBar: false,
            displayCloseBtn: false
        });
        this.props.onClose && this.props.onClose();
    },
    _clickHandler: function _clickHandler() {
        this.props.onClick && this.props.onClick();
    },

    /**
     * @description 设置通告信息内容
     * @param {String} v 设置通告信息内容
     * @return {undefined} void
     * */
    setValue: function setValue(v) {
        this.setState({ value: v });
    },
    show: function show() {
        this.setState({ showNoticeBar: true });
    },
    hide: function hide() {
        this.setState({ showNoticeBar: false });
    },
    render: function render() {
        // 是否显示关闭按钮
        var spanShowClose = {
            display: this.state.displayCloseBtn ? 'block' : 'none'
        };
        // 是否显示消息滚动条
        var showNoticeBar = {
            display: this.state.showNoticeBar ? 'block' : 'none'
        };
        // 关闭按钮
        var showClose = React.createElement(
            'a',
            { href: 'javascript:;', onClick: this._showCloseClick, className: 'ucs-showClose', style: spanShowClose },
            React.createElement(
                'span',
                null,
                '\xD7'
            )
        );

        return React.createElement(
            'div',
            { className: this.state.className, style: showNoticeBar, onClick: this._clickHandler },
            React.createElement(
                'div',
                { className: 'ucs-seamless-scroll', ref: 'ucsSeamlessScroll' },
                React.createElement(
                    'div',
                    { className: 'ucs-seamless-scroll-in', ref: 'ucsSeamlessScrollIn' },
                    React.createElement(
                        'div',
                        { className: 'ucs-seamless-scroll-list', ref: 'seamlessScrollList1' },
                        React.createElement(
                            'p',
                            null,
                            this.state.value
                        )
                    ),
                    React.createElement('div', { className: 'ucs-seamless-scroll-list', ref: 'seamlessScrollList2' })
                ),
                showClose
            )
        );
    }
});
module.exports = NoticeBar;

/***/ })

/******/ });