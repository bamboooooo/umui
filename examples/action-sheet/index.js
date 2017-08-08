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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ActionSheet = __webpack_require__(92);
var Root = React.createClass({
    displayName: 'Root',

    getInitialState: function getInitialState() {
        return {
            option: [{
                text: '操作一',
                clickHandler: null
            }, {
                text: '操作二',
                clickHandler: null
            }, {
                text: '操作三',
                clickHandler: null
            }],
            option2: [{
                text: '按钮一',
                clickHandler: null
            }, {
                text: '按钮二',
                clickHandler: null
            }, {
                text: '按钮三',
                clickHandler: null
            }]
        };
    },
    _listClickHandler: function _listClickHandler() {
        alert('你点击了动作面板组件');
    },
    _openActionSheet: function _openActionSheet() {
        this.refs.actionSheet1.show();
    },
    _closeActionSheet: function _closeActionSheet() {
        this.refs.actionSheet1.hide();
    },
    _openActionSheet2: function _openActionSheet2() {
        this.refs.actionSheet2.show();
    },
    _closeActionSheet2: function _closeActionSheet2() {
        this.refs.actionSheet2.hide();
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(ActionSheet, { ref: 'actionSheet1', title: '\u6211\u662F\u63CF\u8FF0', option: this.state.option, onClick: this._listClickHandler, cancelButtonIndex: 0 }),
            React.createElement(ActionSheet, { ref: 'actionSheet2', title: '\u6211\u662F\u63CF\u8FF02', option: this.state.option2, maskClosable: false, cancelButtonIndex: 2 }),
            React.createElement(
                'button',
                { onClick: this._openActionSheet },
                '\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u7EC4\u4EF61'
            ),
            React.createElement(
                'button',
                { onClick: this._openActionSheet2 },
                '\u6253\u5F00\u52A8\u4F5C\u9762\u677F\u7EC4\u4EF62'
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classnames = __webpack_require__(0);
var ActionSheet = React.createClass({
    displayName: 'ActionSheet',

    getDefaultProps: function getDefaultProps() {
        return {
            className: null,
            id: null,
            option: [],
            title: '',
            cancelButtonIndex: null,
            maskClosable: true,
            onClick: null
        };
    },
    getInitialState: function getInitialState() {
        return {
            className: classnames('ucs-actionsheet-container', this.props.className)
        };
    },
    _closeMask: function _closeMask() {
        if (this.props.maskClosable) {
            this.refs.mask.style.display = 'none';
            this.refs.actionSheet.style.display = 'none';
        }
    },
    _onClick: function _onClick() {
        this.props.onClick && this.props.onClick();
    },
    show: function show() {
        this.refs.mask.style.display = 'block';
        this.refs.actionSheet.style.display = 'block';
    },
    hide: function hide() {
        this.refs.mask.style.display = 'none';
        this.refs.actionSheet.style.display = 'none';
    },
    render: function render() {
        var optionArray = this.props.option;
        if (this.props.cancelButtonIndex || this.props.cancelButtonIndex === 0) {
            optionArray.splice(this.props.cancelButtonIndex, 0, { text: '取消', clickHandler: this.hide });
        } else {
            optionArray.push({ text: '取消', clickHandler: this.hide });
        }
        return React.createElement(
            'div',
            null,
            React.createElement('div', { className: 'ucs-actionsheet-mask', onClick: this._closeMask, ref: 'mask' }),
            React.createElement(
                'aside',
                {
                    id: this.props.id,
                    className: this.state.className,
                    ref: 'actionSheet',
                    onClick: this._onClick },
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        { style: { display: this.props.title === '' ? 'none' : 'block' }, className: 'ucs-actionsheet-title' },
                        this.props.title
                    ),
                    optionArray.map(function (item, index) {
                        return React.createElement(
                            'li',
                            { key: index, onClick: item.clickHandler },
                            item.text
                        );
                    })
                )
            )
        );
    }
});
module.exports = ActionSheet;

/***/ })

/******/ });