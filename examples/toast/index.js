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
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ({

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var Toast = __webpack_require__(84);
var Root = React.createClass({
    displayName: 'Root',

    _toast1: function _toast1() {
        Toast.success({
            content: '默认有mask,3秒消失'
        });
    },
    _toast2: function _toast2() {
        Toast.fail({
            content: 'mask:false',
            mask: false
        });
    },
    _toast3: function _toast3() {
        Toast.info({
            content: 'duration:5000',
            duration: 5000
        });
    },
    _toast4: function _toast4() {
        Toast.warning({
            content: 'onClose()回调函数',
            onClose: function onClose() {
                console.log('onClose()触发了');
            }
        });
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this._toast1 },
                '\u9ED8\u8BA4\u7684Toast'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                'button',
                { onClick: this._toast2 },
                'mask:false\u7684Toast'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                'button',
                { onClick: this._toast3 },
                'duration:5000\u7684Toast'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                'button',
                { onClick: this._toast4 },
                '\u6709onClose()\u7684Toast'
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

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/20
 * 说明：Toast组件
 * 1. 自动消失弹窗组件
 * 2. 轻量级反馈/提示，可以用来显示不会打断用户操作的内容
 */
var classnames = __webpack_require__(2);

var Toast = function () {
    var msgArea = document.createElement('div');

    var ToastItem = React.createClass({
        displayName: 'ToastItem',

        getDefaultProps: function getDefaultProps() {
            return {
                content: null,
                duration: 3000,
                mask: true,
                onClose: null
            };
        },
        getInitialState: function getInitialState() {
            return {
                content: this.props.content,
                duration: this.props.duration,
                mask: this.props.mask,
                onClose: this.props.onClose
            };
        },
        _toDisappear: function _toDisappear() {
            var _this = this;
            if (this._disappear) {
                clearTimeout(this._disappear);
            }
            this._disappear = setTimeout(function () {
                document.body.removeChild(msgArea);
                _this.props.onClose && _this.props.onClose();
            }, 3000);
        },
        componentDidMount: function componentDidMount() {
            this._toDisappear();
        },
        componentDidUpdate: function componentDidUpdate() {
            this._toDisappear();
        },
        render: function render() {
            var _class = classnames('ucs-toast', this.props.className, { 'ucs-toast-nomask': !this.props.mask });
            document.body.appendChild(msgArea);
            return React.createElement(
                'div',
                { className: _class },
                React.createElement(
                    'div',
                    { className: 'ucs-toast-content' },
                    this.props.type !== 'info' ? React.createElement('i', { className: 'iconfont icon-' + this.props.type }) : '',
                    React.createElement(
                        'p',
                        null,
                        this.props.content
                    )
                )
            );
        }
    });
    return {
        success: function success(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'success', className: 'toast-success', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        fail: function fail(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'fail', className: 'toast-fail', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        info: function info(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'info', className: 'toast-info', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        },
        warning: function warning(obj) {
            ReactDOM.render(React.createElement(ToastItem, { type: 'warning', className: 'toast-warning', content: obj.content, duration: obj.duration, mask: obj.mask, onClose: obj.onClose }), msgArea);
        }
    };
}();
module.exports = Toast;

/***/ })

/******/ });